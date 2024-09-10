"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[5268],{5268:(o,n,e)=>{e.r(n),e.d(n,{default:()=>t});const t={components:{},data:{},source:"\x3c!--rehype:ignore:start--\x3e\n\n# Monokai Theme\n\n\x3c!--rehype:ignore:end--\x3e\n\n[![Buy me a coffee](https://img.shields.io/badge/Buy%20me%20a%20coffee-048754?logo=buymeacoffee)](https://jaywcjlove.github.io/#/sponsor)\n[![npm version](https://img.shields.io/npm/v/@uiw/codemirror-theme-monokai.svg)](https://www.npmjs.com/package/@uiw/codemirror-theme-monokai)\n\nMonokai theme for cm6, generated from [vscode themes](https://github.com/microsoft/vscode/blob/main/extensions/theme-monokai/themes/monokai-color-theme.json).\n\n<a href=\"https://uiwjs.github.io/react-codemirror/#/theme/data/monokai\">\n  <img width=\"436\" alt=\"codemirror-theme-monokai\" src=\"https://github.com/uiwjs/react-codemirror/assets/1680273/07df9125-6d96-413b-b863-1eef945b99e3\">\n</a>\n\n## Install\n\n```bash\nnpm install @uiw/codemirror-theme-monokai --save\n```\n\n```js\nimport { EditorState } from '@codemirror/state';\nimport { javascript } from '@codemirror/lang-javascript';\nimport { monokai } from '@uiw/codemirror-theme-monokai';\n\nconst state = EditorState.create({\n  doc: 'my source code',\n  extensions: [monokai, javascript({ jsx: true })],\n});\n```\n\nUsing in React:\n\n```jsx\nimport { monokai, monokaiInit } from '@uiw/codemirror-theme-monokai';\n\n<CodeMirror theme={monokai} />\n<CodeMirror\n  theme={monokaiInit({\n    settings: {\n      caret: '#c6c6c6',\n      fontFamily: 'monospace',\n    }\n  })}\n/>\n```\n\n## API\n\n```tsx\nimport { CreateThemeOptions } from '@uiw/codemirror-themes';\nexport declare const defaultSettingsQuietlight: CreateThemeOptions['settings'];\nexport declare const monokaiInit: (options?: Partial<CreateThemeOptions>) => import('@codemirror/state').Extension;\nexport declare const monokai: import('@codemirror/state').Extension;\n```\n\n## Usage\n\n```jsx\nimport CodeMirror from '@uiw/react-codemirror';\nimport { monokai } from '@uiw/codemirror-theme-monokai';\nimport { javascript } from '@codemirror/lang-javascript';\n\nfunction App() {\n  return (\n    <CodeMirror\n      value=\"console.log('hello world!');\"\n      height=\"200px\"\n      theme={monokai}\n      extensions={[javascript({ jsx: true })]}\n      onChange={(value, viewUpdate) => {\n        console.log('value:', value);\n      }}\n    />\n  );\n}\nexport default App;\n```\n\n```js\nimport { EditorView } from '@codemirror/view';\nimport { EditorState } from '@codemirror/state';\nimport { javascript } from '@codemirror/lang-javascript';\nimport { monokai } from '@uiw/codemirror-theme-monokai';\n\nconst state = EditorState.create({\n  doc: 'my source code',\n  extensions: [monokai, javascript({ jsx: true })],\n});\n\nconst view = new EditorView({\n  parent: document.querySelector('#editor'),\n  state,\n});\n```\n\n## Contributors\n\nAs always, thanks to our amazing contributors!\n\n<a href=\"https://github.com/uiwjs/react-codemirror/graphs/contributors\">\n  <img src=\"https://uiwjs.github.io/react-codemirror/CONTRIBUTORS.svg\" />\n</a>\n\nMade with [github-action-contributors](https://github.com/jaywcjlove/github-action-contributors).\n\n## License\n\nLicensed under the MIT License.\n",headings:[],headingsList:[]}}}]);
//# sourceMappingURL=5268.e45b9d3c.chunk.js.map