module.exports =  {
    repositoryUrl: 'https://www.github.com/eliraz-refael/test',
    branches: ['master', 'next'],
    plugins: [
        "@semantic-release/commit-analyzer",
        "@semantic-release/release-notes-generator",
        // "@semantic-release/npm",
        "@semantic-release/changelog",
        "@semantic-release/git"
  ]
}
