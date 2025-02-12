import type { Config } from "@react-router/dev/config";
import defineConfig from "./vite.config"

export default {
  // Config options...
  // Server-side render by default, to enable SPA mode set this to `false`
  basename: defineConfig.base,
  ssr: false,
} satisfies Config;
