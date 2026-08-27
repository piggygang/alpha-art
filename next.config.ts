import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ALG-648 lands here: redirects() with 302s (permanent: false) catching the
  // legacy marketplace paths — /collection/:path* and /t/:path* → "/".
};

export default nextConfig;
