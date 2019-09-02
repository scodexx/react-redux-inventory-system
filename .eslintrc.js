module.exports = {
    parser: 'babel-eslint',
    env: {
        browser: true,
        commonjs: true,
        es6: true,
        node: true,
        jest: true,
        mocha: true,
    },
    extends: [
        "eslint:recommended",
        'plugin:react/recommended',
    ],
    parserOptions: {
        ecmaVersion: 2018,
        ecmaFeatures: {
            jsx: true,
        },
        sourceType: 'module',
    },
    globals: {
        Atomics: "readonly",
        SharedArrayBuffer: "readonly",
        expect: false,
        assert: false,
        chai: false,
        NODE_ENV: true,
    },
    plugins: [ "react" ],
    settings: {
        react: {
          version: '16.9.0',
        },
    },
    rules: {
        "generator-star-spacing": 0,
        "no-console": 0,
    },
};