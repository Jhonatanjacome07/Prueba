import { createProxyMiddleware } from "http-proxy-middleware";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn-images.dzcdn.net", "api.deezer.com"], //rutas para las imágenes de las canciones
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://144.33.15.219:8080/:path*", // Proxy to Backend
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/tracks",
        destination: "/api/tracks",
        permanent: true,
      },
    ];
  },
  webpack: (config, { dev }) => {
    if (dev) {
      config.devServer = {
        ...config.devServer,
        setup: (app) => {
          app.use(
            "/api",
            createProxyMiddleware({
              target: "http://144.33.15.219:8080",
              changeOrigin: true,
              pathRewrite: {
                "^/api": "",
              },
            })
          );
        },
      };
    }
    return config;
  },
};

export default nextConfig;
