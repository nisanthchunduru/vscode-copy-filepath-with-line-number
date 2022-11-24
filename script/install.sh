#!/usr/bin/env bash

set -e

npm install -g vsce
vsce package
code --install-extension copy-filepath-with-line-number-0.0.4.vsix
