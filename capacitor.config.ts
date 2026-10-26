import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.minya.occupancy",
  appName: "حاسبة الإشغالات",
  webDir: "dist",
  android: {
    allowMixedContent: false,
  },
};

export default config;
