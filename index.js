const [OFF, WARN, ERR] = [0, 1, 2]

module.exports = {
    extends: ['standard', 'plugin:react/recommended'],
    plugins: ['react', 'promise'],

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
        'no-multiple-empty-lines': [ERR, {max: 3}],
        'comma-dangle': OFF,
        'max-len': [WARN, 100, 4, {ignoreUrls: true, ignoreComments: true}],
        'no-warning-comments': WARN,
        'require-yield': OFF,       // Doesn't play nice with simple Koa routes
        'object-curly-spacing': [WARN, 'never'],
        'no-unused-vars': ERR,
        'spaced-comment': [WARN, 'always', {exceptions: [':']}],    // Exception for flow annotations

        // Further ES6 enhancements
        // Any rules here set to OFF/WARN are things to turn on eventually
        'no-confusing-arrow': [ERR, {allowParens: true}],
        'prefer-spread': ERR,
        'object-shorthand': ERR,
        'prefer-arrow-callback': ERR,
        'prefer-template': WARN,
        'no-var': WARN,

        // React
        'react/sort-comp': WARN,

        // Promises
        'promise/always-return': WARN,
        'promise/catch-or-return': WARN,
        'promise/no-callback-in-promise': WARN,
        'promise/no-nesting': WARN,
        'promise/no-promise-in-callback': WARN,
        'promise/no-return-wrap': WARN,
        'promise/param-names': WARN,
    },
    env: {
        'es6': true,
        'node': true,
        'browser': true
    }
}
