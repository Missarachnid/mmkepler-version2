module.exports = {
  reactStrictMode: true,
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.pdf$/,
      use: [
        {
          loader: 'file-loader',
        } 
      ]
    })
    return config
  },
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
}
