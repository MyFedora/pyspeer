const stackTrace = require('stack-trace');
const fs = require('fs');

const acorn = require('acorn');
const walk = require("acorn-walk")

process.stderr.write = () => {
  const trace = stackTrace.get();

  const caller = trace[1];
  const path = caller.getFileName();
  const line = caller.getLineNumber();
  const column = caller.getColumnNumber();

  const code = fs.readFileSync(path, 'utf-8');
  const ast = acorn.parse(code, { locations: true });

  let target = null;

  walk.ancestor(ast, {
    Identifier(node, _state, ancestors) {
      if (isInsideLocation(node, line, column)) {
        target = ancestors[ancestors.length - 7];
      }
    }
  });

  const newCode = replaceRange(code, target.start, target.end, '');
  console.log(newCode.substring(newCode.indexOf('\n') + 1));
};

function isInsideLocation(node, line, column) {
  const start = node.loc.start;
  const end = node.loc.end;

  return (
    (start.line < line || (start.line === line && start.column <= column)) &&
      (end.line > line || (end.line === line && end.column >= column))
  );
}

function replaceRange(str, start, end, replacement) {
  return str.substring(0, start) + replacement + str.substring(end);
}
