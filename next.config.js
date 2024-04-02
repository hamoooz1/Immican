const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Perform customizations to webpack config
    config.resolve.alias['@'] = path.resolve(__dirname, './src');

    // Add this rule to use file-loader for .docx files
    config.module.rules.push({
      test: /\.docx$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]'
          }
        }
      ]
    });

    // Important: return the modified config
    return config;
  },
};

module.exports = nextConfig;