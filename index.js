const [OFF, WARN, ERR] = [0, 1, 2]

module.exports = {
    extends: ['standard', 'plugin:react/recommended'],
    plugins: ['react'],

    parserOptions: {
        ecmaVersion: 2017
    },

    rules: {
        // Overrides from 'standard' that I may want to enable later:
        'handle-callback-err': OFF,
        'key-spacing': OFF,
        'no-multi-spaces': OFF,
        'no-return-assign': OFF,
        'new-parens': OFF,
        'no-case-declarations': OFF,
        'space-before-function-paren': OFF,
        'new-cap': OFF,       // Messes with capitalized action creator fns

        // Overrides from 'standard' that I definitely want to keep:
        'indent': [ERR, 4],
        'no-multiple-empty-lines': [ERR, {'max': 3}],
        'comma-dangle': OFF,
        'max-len': [WARN, 100, 4, {'ignoreUrls': true, 'ignoreComments': true}],
        'no-warning-comments': WARN,
        'require-yield': OFF,       // Doesn't play nice with simple Koa routes
        'object-curly-spacing': [WARN, 'never'],

        // Further ES6 enhancements
        // Any rules here set to OFF/WARN are things to turn on eventually
        'no-confusing-arrow': [ERR, {allowParens: true}],
        'prefer-spread': ERR,
        'object-shorthand': ERR,
        'prefer-arrow-callback': ERR,
        'prefer-template': WARN,
        'no-var': WARN,

        // React
        'react/sort-comp': WARN

        // JSDoc
        // It would be nice to enforce documentation eventually
        //'require-jsdoc': OFF,
        //'valid-jsdoc': ERR
    },
    env: {
        'es6': true,
        'node': true,
        'browser': true
    }
}
