module.exports = {
  root: true,
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    project: './tsconfig.json',
    extraFileExtensions: ['.vue']
  },
  plugins: [
    '@typescript-eslint',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:vue/vue3-recommended'
  ],
  rules: {
    indent: ['error', 2, {'SwitchCase': 1}],
    // https://eslint.vuejs.org/rules/html-indent.html
    'vue/html-indent': ['error', 2, {
      'baseIndent': 0
    }]
  }
}
