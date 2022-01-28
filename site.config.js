module.exports = {
  // where it all starts -- the site's root Notion page (required)
  rootNotionPageId: '762a0bbfb4684cccacf6b17a243031de',
  // 762a0bbfb4684cccacf6b17a243031de

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: '지금',
  domain: '2-now.xyz',
  author: '2-NOW',

  // open graph metadata (optional)
  description: "2-NOW's Blog",
  socialImageTitle: '2-NOW',
  socialImageSubtitle: 'Hello World! 👋',

  // social usernames (optional)
  // twitter: 'transitive_bs',
  // github: '2-NOW',
  // linkedin: 'fisch2',

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // image CDN host to proxy all image requests through (optional)
  // NOTE: this requires you to set up an external image proxy
  imageCDNHost: null,

  // Utteranc.es comments via GitHub issue comments (optional)
  utterancesGitHubRepo: '2-NOW/comments',

  // whether or not to enable support for LQIP preview images (optional)
  // NOTE: this requires you to set up Google Firebase and add the environment
  // variables specified in .env.example
  isPreviewImageSupportEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: {
    '/about': 'about-1d54a563c89a40cfa63d66ece2686733',
    '/tags': 'tags-866112500b5a459694084c1cecfb75c3'
  }
}
