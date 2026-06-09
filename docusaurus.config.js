const config = {
  title: "Opslora Docs",
  tagline: "Architecture, services, operations, and deployment notes.",
  favicon: "img/favicon.ico",
  url: "https://docs.opslora.com",
  baseUrl: "/",
  organizationName: "opslora",
  projectName: "opslora-app-docs",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  presets: [
    [
      "classic",
      {
        docs: {
          path: ".",
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          exclude: [
            "node_modules/**",
            "build/**",
            ".docusaurus/**",
            "src/**",
            "images/**",
            "Dockerfile",
            "package*.json",
            "sidebars.js",
            "docusaurus.config.js",
          ],
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  themeConfig: {
    navbar: {
      title: "Opslora Docs",
      items: [
        { to: "/", label: "Docs", position: "left" },
        { href: "https://opslora.com", label: "Website", position: "right" },
        { href: "https://app.opslora.com", label: "App", position: "right" },
      ],
    },
  },
}

export default config
