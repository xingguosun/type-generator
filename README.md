# TypeScript Type Generator

A tool of generating TypeScritp type. 

The `useState` hook is used in this project to manage states instead of redux because `useState` is suitable for small projects. The Tailwind and code highlighter help to beautify the UI. To ensure the code quality, eslint is configured and testings are implemented as well. And the continuous integration is based on GitHub Actions.

## Example

<img width="1012" alt="generator-example" src="https://user-images.githubusercontent.com/7005575/131357377-8d69dfdb-7bcf-4424-a668-1a9cc3052725.png">

## Installation
- Run `npm install` or `yarn` to install dependencies.
- `npm start` or `yarn start` to run this application in the development mode. Open http://localhost:3000 to view it in the browser.

## Main Structure
```
type-generator
|
|---src
|   |  types.d.ts //defined necessary types.
|   |  common.ts //common functions are implemented here.
|   |  App.tsx //state management and layout.
|   |  App.test.tsx //testing work.
|   |
|   |
|   |--components
|      |   Type.tsx //design the target type, consists of properties.
|      |   Property.tsx //design the individual property.
|      |   Code.tsx //display the generated code string.
|      |   Elements.tsx //fundamental customized elements, such as button and input, etc.


```
## Doc
The doc is created via `React Styleguidist`, run `yarn styleguide` or just check the files under the folder `docs`.
## Testing
Some essential tests are conducted based on `React testing library` in the file `App.test.tsx`.
## CI
The GitHub Actions is configured in the file under `.github/workflows`.
