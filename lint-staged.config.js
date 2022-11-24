module.exports = {
  '**/*': ['prettier --cache --write --ignore-unknown'],
  '**/*.{ts,tsx}': [
    'pnpm test --bail --passWithNoTests --findRelatedTests --coverage',
  ],
};
