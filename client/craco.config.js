const path = require('path');

module.exports = {
  style: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
  webpack: {
    configure: (webpackConfig) => {
      const postcssLoader = {
        loader: require.resolve('postcss-loader'),
        options: {
          postcssOptions: {
            ident: 'postcss',
            plugins: [
              require('tailwindcss'),
              require('autoprefixer'),
            ],
          },
        },
      };

      const cssRule = webpackConfig.module.rules.find(rule =>
        rule.oneOf && rule.oneOf.find(oneOfRule =>
          oneOfRule.test && oneOfRule.test.toString().includes('css')
        )
      );

      if (cssRule) {
        cssRule.oneOf.forEach(oneOfRule => {
          if (oneOfRule.test && oneOfRule.test.toString().includes('css')) {
            if (oneOfRule.use) {
              const cssLoaderIndex = oneOfRule.use.findIndex(loader =>
                loader.loader && loader.loader.includes('css-loader')
              );
              
              if (cssLoaderIndex !== -1) {
                oneOfRule.use.splice(cssLoaderIndex, 0, postcssLoader);
              }
            }
          }
        });
      }

      return webpackConfig;
    },
  },
};