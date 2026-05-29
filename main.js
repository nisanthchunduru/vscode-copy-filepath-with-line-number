// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require("vscode");

class NoWorkspaceOpen extends Error {
}

class NoTextEditorOpen extends Error {
}

class DocumentIsUntitled extends Error {
}

function copyCurrentFilePathWithCurrentLineNumber() {
  if (!vscode.workspace.rootPath) {
    throw new NoWorkspaceOpen;
  }

  let editor = vscode.window.activeTextEditor;
  if (!editor) {
    throw new NoTextEditorOpen;
  }

  let document = editor.document;
  if (document.isUntitled) {
    throw new DocumentIsUntitled;
  }

  const path = document.uri.path;
  const lineNumber = editor.selection.active.line + 1;

  return `${path}:${lineNumber}`;
};

function toast(message) {
  vscode.window.setStatusBarMessage(message, 3000)
}

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate(context) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log(
    'copy-filepath-with-line-number: activating'
  );

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with  registerCommand
  // The commandId parameter must match the command field in package.json
  let copyFilePathWithLineNumberCommand = vscode.commands.registerCommand(
    "copy-filepath-with-line-number",
    () => {
      let filePathWithLineNumber;
      try {
        filePathWithLineNumber = copyCurrentFilePathWithCurrentLineNumber();
      } catch (e) {
        if (e instanceof NoWorkspaceOpen) {
        } else if (e instanceof NoTextEditorOpen) {
        } else if (e instanceof DocumentIsUntitled) {
        } else {
          throw e;
        }
      }

      vscode.env.clipboard.writeText(filePathWithLineNumber).then(() => {
        toast(`'${filePathWithLineNumber}' copied to clipboard`);
      });
    }
  );
  let copyFileNameWithLineNumberCommand = vscode.commands.registerCommand(
    "copy-filename-with-line-number",
    () => {
      let fileNameWithLineNumber;
      try {
        let pathWithLineNumber = copyCurrentFilePathWithCurrentLineNumber();
        fileNameWithLineNumber = pathWithLineNumber.split('/').pop()
      } catch (e) {
        if (e instanceof NoWorkspaceOpen) {
        } else if (e instanceof NoTextEditorOpen) {
        } else if (e instanceof DocumentIsUntitled) {
        } else {
          throw e;
        }
      }

      vscode.env.clipboard.writeText(fileNameWithLineNumber).then(() => {
        toast(`'${fileNameWithLineNumber}' copied to clipboard`);
      });
    }
  );

  context.subscriptions.push(copyFilePathWithLineNumberCommand);
  context.subscriptions.push(copyFileNameWithLineNumberCommand);
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {}
exports.deactivate = deactivate;
