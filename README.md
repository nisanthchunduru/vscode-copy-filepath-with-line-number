# vscode-copy-filepath-with-line-number

VSCode extension to copy current file's full path with current line number

The extension is useful for giving rspec (or a different test runner) the current file's full path along with the current line number

<img width="1624" alt="Screenshot 2022-11-25 at 1 58 36 AM" src="https://user-images.githubusercontent.com/1789832/203859512-f357cabf-a85c-4c34-b0b7-6b79e62f0fb7.png">

<img width="1624" alt="Screenshot 2022-11-25 at 1 56 59 AM" src="https://user-images.githubusercontent.com/1789832/203859452-a7bdf842-93e0-438d-95fc-89da1b199608.png">


## Install

Visit https://marketplace.visualstudio.com/items?itemName=nisanthchunduru.copy-filepath-with-line-number and click the "Install" button

Press Alt + l (Ctrl + l on MacOS) to copy the current file's path and current line number

### Install from source

If you'd like to install from source, clone the repo

```
git@github.com:nisanthchunduru/vscode-copy-filepath-with-line-number.git
```

Install the extension

```
script/install.sh
```

## Support

If you run into an issue while installing/using the extension, please report it here https://github.com/nisanthchunduru/vscode-copy-filepath-with-line-number/issues

## FAQ

**Q:** The keyboard shortcut doesn't work on my machine

**A:** Press Cmd + Shift + p (Ctrl + Shift + p on Windows/Linux), search for "Copy current file full path with current line number" and press Enter. If it's successfully copies, a different extension may be overriding this keyboard shortcut. Search for the "Prefereces: Open Keyboard Shortcuts" command and map a keyboard shortcut of your liking to the "Copy current file full path with current line number" command.
