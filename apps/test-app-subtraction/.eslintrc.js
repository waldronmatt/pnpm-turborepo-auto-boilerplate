module.exports = {
  root: true,
  extends: ['custom'],
  plugins: ['import'],
  parserOptions: {
    project: ['tsconfig.eslint.json'],
    tsconfigRootDir: __dirname,
  },
  rules: {
    'import/extensions': 'off',
  },
  overrides: [
    {
      files: ['**/*.js'],
      extends: ['@waldronmatt/eslint-config'],
    },
  ],
  ignorePatterns: ['dist/**'],
};
