module.exports = 
{
  'branches': [
    {
      'name': 'master'
    },
    {
      'name': 'docs/media-with-trans',
      'channel': 'media-with-trans',
      'prerelease': false
    },
  ],
  'tagFormat': 'v${version}-media-with-trans',
  'plugins': [
    [
      '@semantic-release/commit-analyzer',
      {
        'preset': 'conventionalcommits',
        'releaseRules': [
          {'type': 'docs', 'release': 'patch'},
          {'type': 'break', 'release': 'major'}
        ]
      }
    ],
    [
    '@semantic-release/release-notes-generator',
    {
      'preset': 'conventionalcommits',
      'presetConfig': {
        'types': [
          {'type': 'feat', 'section': '🚀 Features'},
          {'type': 'fix', 'section': '🐛 Bug Fixes'},
          {'type': 'perf', 'section': '🚀 Performance Improvements'},
          {'type': 'docs', 'section': '📝 Documentation'},
          {'type': 'break', 'section': '🚨 Breaking Changes'},

        ]
      },

    }
    ],
    ['@semantic-release/changelog',
      {
        'changelogFile': 'CHANGELOG.md'
      }
    ],
    
    ['@semantic-release/exec',
      {
        'prepareCmd': "sed -i 's/^  version: .*/  version: ${nextRelease.version}-${nextRelease.channel}/g' documentation/*.yml"
      }
    ],
    [
      '@semantic-release/github',
      {
        'assets': [
          {
            'path': 'documentation/*.yml'
          },
          {
            'path': 'CHANGELOG.md'
          }
        ],
        'releaseNameTemplate': 'v${nextRelease.version}-${nextRelease.channel} 🌈'

      }
    ],
    [
      '@semantic-release/git',
      {
        'assets': ['documentation/*.yml','CHANGELOG.md'],
        'message': 'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}'
      }
    ]

  ]
}