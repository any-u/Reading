module.exports = {
  base: '/Reading/',
  title: 'Reading',
  description: '追书神器API',
  themeConfig: {
    repo: 'sillyY/Reading',
    editLinks: true,
    docsDir: 'docs',
    editLinkText: '在 GitHub 上编辑此页',
    lastUpdated: '上次更新',
    nav: [
      {
        text: '文档',
        link: '/api/'
      }
    ],
    sidebar: {
      '/api/': [
        {
          title: '追书神器API',
          collapsable: false,
          children: [
            ['./statistics', '小说分类'],
            ['./statistics-list', '小说小分类'],
            ['./categories', '小说分类列表'],
            ['./source', '小说换源'],
            ['./toc', '小说目录'],
            ['./content', '小说正文'],
            ['./rank', '榜单'],
            ['./rank-list', '榜单列表']
          ]
        }
      ]
    }
  }
}
