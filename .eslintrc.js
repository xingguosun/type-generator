module.exports = {

    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking"
    ],
    "env": {
        "browser": true,
        "es6": true,
        "jest": true,
        "node": true
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "project": ["tsconfig.json"],
        "sourceType": "module",
        "warnOnUnsupportedTypeScriptVersion": false
    },
    "rules": {

    },
    "settings": {
        "react": {
            "version": "latest",
        },
    }
}