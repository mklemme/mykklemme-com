const securityHeaders = [
  // Strict-Transport-Security
  // This header informs browsers it should only be accessed using HTTPS, instead of using HTTP. Using the
  // configuration below, all present and future subdomains will use HTTPS for a max-age of 2 years. This blocks
  // access to pages or subdomains that can only be served over HTTP.
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },

  // X-XSS-Protection
  // This header stops pages from loading when they detect reflected cross-site scripting (XSS) attacks. Although
  // this protection is not necessary when sites implement a strong Content-Security-Policy disabling the use of
  // inline JavaScript ('unsafe-inline'), it can still provide protection for older web browsers that don't support CSP.
  {
    key: "X-XSS-Protection",
    value: "1; mode=block",
  },
]

module.exports = {
  eslint: {
    // Prs should not be merged if there are eslint errors so we are disabling this to prevent heroku deploys
    // from being blocked.
    ignoreDuringBuilds: true,
  },
  poweredByHeader: false,
  reactStrictMode: true,
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: "/(.*)",
        headers: securityHeaders,
      },
    ]
  },
}
