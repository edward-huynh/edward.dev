import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  env: {
    TELEGRAM_CHAT_ID: process.env.TELEGRAM_CHAT_ID,
    TELEGRAM_BOT_TOKEN: process.env.TELEGRAM_BOT_TOKEN,
  },
};

export default nextConfig;
