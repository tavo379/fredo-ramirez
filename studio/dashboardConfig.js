export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5e7a106a7841f36f16f2cd80',
                  title: 'Sanity Studio',
                  name: 'fredo-ramirez-studio',
                  apiId: '781e76b8-6e9a-41a6-b3f8-095ef6eaa658'
                },
                {
                  buildHookId: '5e7a106a80818278ef6ffea7',
                  title: 'Landing pages Website',
                  name: 'fredo-ramirez',
                  apiId: '2de46c66-1c4f-46e3-b415-78ca6ee4c254'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/tavo379/fredo-ramirez',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://fredo-ramirez.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
