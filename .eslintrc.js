module.exports = {
    extends: 'eslint:recommended',
    root: true,
    env: {
        node: true,
        es6: true
    },
    rules: {
        // semi: 'off',
        quotes: ['error', 'single']
    },
    parserOptions: {
        sourceType: 'module'
    }
}