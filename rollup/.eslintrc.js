module.exports = {
  env: {
    "browser": true,
    "es6": true,
    node: true,
  },
  extends: [
    'airbnb-typescript',
    'prettier',
    'prettier/react',
    'prettier/@typescript-eslint',
    'plugin:@typescript-eslint/recommended',
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'
        ],
      },
      // typescript: {
      //   project: `${__dirname}`,
      // },
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'
      ],
    },
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    // project: 'd:/работа/phishman/src/appbundle/frontend/tsconfig.json',
    project: `${__dirname
      }/tsconfig.json`,
    sourceType: 'module',
  },
  plugins: [
    'eslint-plugin-react',
    '@typescript-eslint',
    '@typescript-eslint/tslint',
    'import',
    'prettier',
  ],
  rules: {
    'import/no-named-as-default': 0,
    'import/no-cycle': 0,
    'no-new': 0,
    'object-curly-newline': 0,
    'implicit-arrow-linebreak': 'off',
    'react/prop-types': 0,
    'operator-linebreak': ['error', 'after'
    ],
    "import/prefer-default-export": "off",
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'react/no-unused-prop-types': 2,
    'react/jsx-filename-extension': [
      2,
      {
        extensions: ['.js', '.jsx', '.ts', '.tsx'
        ]
      },
    ],
    indent: 'off',
    '@typescript-eslint/ban-types': ['off'
    ],
    '@typescript-eslint/no-unused-vars': ['off'
    ],
    '@typescript-eslint/ban-ts-ignore': ['off'
    ],
    '@typescript-eslint/indent': ['off'
    ],
    '@typescript-eslint/member-delimiter-style': [
      'off',
      {
        multiline: {
          delimiter: 'none',
          requireLast: true,
        },
        singleline: {
          delimiter: 'semi',
          requireLast: false,
        },
      },
    ],
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/naming-convention': 'error',
    '@typescript-eslint/no-this-alias': 'error',
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'off',
    '@typescript-eslint/quotes': 'off',
    // '@typescript-eslint/explicit-function-return-type': [
    //   'error',
    //   {
    //     allowExpressions: true,
    //   },
    // ],
    '@typescript-eslint/semi': ['off',
      null
    ],
    '@typescript-eslint/tslint/config': [
      'warn',
      {
        rules: {
          align: [
            true, 'parameters'
          ],
          'variable-name': [
            true, 'allow-pascal-case'
          ],
          'object-shorthand-properties-first': false,
          'import-name': [
            false
          ],
          'object-literal-shorthand': false,
          'no-boolean-literal-compare': false,
          'class-name': false,
          'function-name': [
            false
          ],
        },
      },
    ],
    '@typescript-eslint/type-annotation-spacing': 'off',
    '@typescript-eslint/no-param-reassign': ['off'
    ],
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/restrict-template-expressions': 'off',
    '@typescript-eslint/no-unsafe-return': 'off',
    'no-function-constructor-with-string-args': 0,
    'no-increment-decrement': 0,
    // 'prefer-array-literal': true,
    // 'ter-arrow-parens': true,
    // 'ter-prefer-arrow-callback': true,
    // 'no-else-after-return': true,
    'arrow-parens': ['off', 'always'
    ],
    'brace-style': ['off', 'off'
    ],
    'comma-dangle': ['error', 'always-multiline'
    ],
    curly: ['error', 'multi-line'
    ],
    'eol-last': 'off',
    eqeqeq: ['error', 'smart'
    ],
    'id-blacklist': 'error',
    'id-match': 'error',
    'linebreak-style': 'off',
    'max-len': 'off',
    'new-parens': 'off',
    'newline-per-chained-call': 'off',
    'no-duplicate-imports': 'error',
    'no-eval': 'error',
    'no-extra-semi': 'off',
    'no-irregular-whitespace': 'off',
    'no-multiple-empty-lines': 'off',
    'no-new-wrappers': 'error',
    'no-trailing-spaces': 'off',
    'no-underscore-dangle': 'error',
    'no-var': 'error',
    'object-shorthand': 'off',
    'one-var': ['error', 'never'
    ],
    'prefer-const': 'error',
    'prefer-template': 'error',
    'quote-props': 'off',
    radix: 'error',
    'react/jsx-curly-spacing': 'off',
    'react/jsx-equals-spacing': 'off',
    'react/jsx-wrap-multilines': 'off',
    'space-before-function-paren': 'off',
    'space-in-parens': ['off', 'never'
    ],
    'spaced-comment': [
      'error',
      'always',
      {
        markers: ['/'
        ],
      },
    ],
  },
};
