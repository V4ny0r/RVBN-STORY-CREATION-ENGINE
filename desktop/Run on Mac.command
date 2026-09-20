#!/bin/bash
cd "$(dirname "$0")"
if ! command -v node >/dev/null 2>&1; then
  echo; echo "  Node.js is needed once, to run the desktop shell. Opening the download page..."
  echo "  Install the LTS version, then double-click this file again."; echo
  open https://nodejs.org/; read -n 1 -s -r -p "  Press any key to close."; exit 1
fi
if [ ! -d node_modules ]; then
  echo "  First run: fetching the desktop shell. This takes a minute and only happens once."
  npm install --no-audit --no-fund || { echo "  Something went wrong installing. Check your connection and try again."; read -n 1 -s -r; exit 1; }
fi
npm start
