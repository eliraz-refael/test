module.exports =  {
    repositoryUrl: 'https://www.github.com/eliraz-refael/test',
    branches: [
        {name: 'master'},
        {name: 'integration', channel: 'next', prerelease: 'rc'}, // `prerelease` is set to `beta` as it is the value of `name`
    ],
    plugins: [
        "@semantic-release/commit-analyzer",
        "@semantic-release/release-notes-generator",
        // "@semantic-release/npm",
        "@semantic-release/changelog",
        "@semantic-release/git"
  ]
}
