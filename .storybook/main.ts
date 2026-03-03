import type { StorybookConfig } from "@storybook/react-vite";
import tailwindcss from "@tailwindcss/postcss";
import path from "path";

const uikit = path.resolve(__dirname, "../../mdigital_uikit/src");

const config: StorybookConfig = {
  stories: ["../**/*.stories.@(ts|tsx)"],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-themes",
    "@storybook/addon-a11y",
  ],
  framework: "@storybook/react-vite",
  docs: {
    autodocs: true,
  },
  async viteFinal(config) {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve?.alias,
          "@mdigital_ui/ui/card": path.join(uikit, "card/index.tsx"),
          "@mdigital_ui/ui/button": path.join(uikit, "button/index.tsx"),
          "@mdigital_ui/ui/input": path.join(uikit, "input/index.tsx"),
          "@mdigital_ui/ui/input-password": path.join(uikit, "input-password/index.tsx"),
          "@mdigital_ui/ui/input-otp": path.join(uikit, "input-otp/index.tsx"),
          "@mdigital_ui/ui/textarea": path.join(uikit, "textarea/index.tsx"),
          "@mdigital_ui/ui/checkbox": path.join(uikit, "checkbox/index.tsx"),
          "@mdigital_ui/ui/badge": path.join(uikit, "badge/index.tsx"),
          "@mdigital_ui/ui/link": path.join(uikit, "link/index.tsx"),
          "@mdigital_ui/ui/notification": path.join(uikit, "notification/index.tsx"),
          "@mdigital_ui/ui/avatar": path.join(uikit, "avatar/index.tsx"),
          "@mdigital_ui/ui/skeleton": path.join(uikit, "skeleton/index.tsx"),
          "@mdigital_ui/ui/progress": path.join(uikit, "progress/index.tsx"),
          "@mdigital_ui/ui/modal": path.join(uikit, "modal/index.tsx"),
          "@mdigital_ui/ui/dropdown": path.join(uikit, "dropdown/index.tsx"),
          "@mdigital_ui/ui/divider": path.join(uikit, "divider/index.tsx"),
          "@mdigital_ui/ui/tooltip": path.join(uikit, "tooltip/index.tsx"),
          "@mdigital_ui/ui/rating": path.join(uikit, "rating/index.tsx"),
          "@mdigital_ui/ui/table": path.join(uikit, "table/index.tsx"),
          "@mdigital_ui/ui/scroll-area": path.join(uikit, "scroll-area/index.tsx"),
          "@mdigital_ui/ui": path.join(uikit, "index.ts"),
        },
      },
      css: {
        ...config.css,
        postcss: {
          plugins: [tailwindcss],
        },
      },
    };
  },
};

export default config;
