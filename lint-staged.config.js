module.exports = {
  '**/*.(ts|tsx|js)': () => 'yarn lint',

  '**/*.(md|json)': (filenames) =>
    `yarn prettier --write ${filenames.join(' ')}`
}
