module.exports = {
  '**/*': ['prettier --cache --write --ignore-unknown'],
  '**/*.{ts,tsx}': [
    'pnpm jest --bail --passWithNoTests --findRelatedTests --coverage',
  ],
};
