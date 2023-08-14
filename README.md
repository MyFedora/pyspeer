# Pyspeer

Pyspeer patches Pylance to permit the usage outside of Visual Studio Code, such as Emacs and Neovim.


## How to use

Prerequisites:

- Install Node.js
- Download Pylance extension
- Clone Pyspeer repository

Instructions:

0. `cd /path/to/repo`
1. `yarn`
2. `yarn rollup -c`
3. `cd /path/to/pylance/dist`
4. `cat /path/to/pyspeer.min.js server.bundle.js > magic.js`
5. `node magic.js > server.bundle.jailbreak.js`
6. ???
7. Profit


## Legal

This goes without saying, but you violate the Microsoft Software License Terms Microsoft Pylance Extension For Visual Studio Code if you choose to use Pyspeer on the real Pylance extension.
