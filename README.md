This is a reproduction of installation issue with @capacitor-community/file-opener under a next project
https://github.com/capacitor-community/file-opener/issues/14

## Getting Started

Install deps:
```
npm install
```

Run development server
```
npm run dev
```

Open the linked page in a browser

With 1.0.1 this works fine. 
With 1.0.2 and the 1.0.2 fix branch the following error appears:

```
error - ReferenceError: require is not defined in ES module scope, you can use import instead
This file is being treated as an ES module because it has a '.js' file extension and '/repro-projects/cap-file-opener/node_modules/@capacitor-community/file-opener/package.json' contains "type": "module". To treat it as a CommonJS script, rename it to use the '.cjs' file extension.
    at file:///repro-projects/cap-file-opener/node_modules/@capacitor-community/file-opener/dist/plugin.cjs.js:3:12
    at ModuleJob.run (node:internal/modules/esm/module_job:195:25)
    at async Promise.all (index 0)
    at async ESMLoader.import (node:internal/modules/esm/loader:337:24)
    at async importModuleDynamicallyWrapper (node:internal/vm/module:437:15) {
  page: '/'
}

```

Tested with node 16.14.0

