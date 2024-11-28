const Footer = require('./src/_includes/components/Footer');

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/assets/");
    eleventyConfig.addPassthroughCopy("src/css/");

    eleventyConfig.addWatchTarget("src/css/");

    eleventyConfig.addShortcode("Footer", Footer);

    eleventyConfig.addCollection('posts', function(collectionApi) {
      return collectionApi.getFilteredByGlob('src/blog/posts/**/*.md');
    });

    return {
      dir: {
        input: 'src',
        includes: '_includes',
        output: '_site',
      },
      templateFormats: ['md', 'njk', 'html'],
      markdownTemplateEngine: 'njk',
      htmlTemplateEngine: 'njk',
      dataTemplateEngine: 'njk',
    };
  }