export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6202fc7c5352ad00a7afee98',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-1-studio-tq6d1upk',
                  apiId: '871545ec-ed7c-4128-b10c-886ec1a0b2f8'
                },
                {
                  buildHookId: '6202fc7c260c260059dafe8e',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-1-web-fo6g35bs',
                  apiId: '97c65766-ba3a-47e7-800a-5f5982a7485d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/joshua-cmd/sanity-gatsby-portfolio.1',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-1-web-fo6g35bs.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
