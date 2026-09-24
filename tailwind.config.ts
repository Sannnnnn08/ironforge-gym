import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0a0a0b",
        carbon: "#141416",
        steel: "#1e1e21",
        line: "rgba(255,255,255,0.08)",
        accent: {
          DEFAULT: "#c9a24a", // dorado premium — cámbialo en gymConfig.accentColor si prefieres otro
          dim: "#a3822f"
        }
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"]
      },
      maxWidth: {
        content: "1280px"
      }
    }
  },
  plugins: []
};

export default config;
