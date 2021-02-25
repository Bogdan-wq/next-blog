module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": "plugin:react/recommended",
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
        "no-eval":"error",
        "react/react-in-jsx-scope": "off",
        "react/prop-types":"off",
        "eqeqeq":"error",
        "no-unused-vars":"error",
        "no-console":"error",
        "quotes":["error","single"],
    }
};
