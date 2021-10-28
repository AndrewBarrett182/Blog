#!/usr/bin/env bash

PATH=$PATH:/usr/local/bin
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
brew update
brew install node
node -v
npm -v