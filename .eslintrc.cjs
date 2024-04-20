module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended',
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs'],
    parser: '@typescript-eslint/parser',
    plugins: ['react-refresh'],
    rules: {
        'react-refresh/only-export-components': [
            'warn',
            { allowConstantExport: true },
        ],
        // 'no-undef': 'off',
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': 'warn',
        '@typescript-eslint/no-explicit-any': 0,
        'no-console': 'error',
        'no-eval': 'error',
        'require-jsdoc': [
            'error',
            {
                require: {
                    FunctionDeclaration: true,
                    MethodDefinition: false,
                    ClassDeclaration: false,
                    ArrowFunctionExpression: false,
                    FunctionExpression: false,
                },
            },
        ],
        'max-len': [
            'error',
            120,
            {
                code: 120,
                ignoreStrings: true,
                ignoreComments: true,
                ignoreTemplateLiterals: true,
            },
        ],
    },
};
