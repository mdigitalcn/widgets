import type { StorybookConfig } from "@storybook/react-vite";
import tailwindcss from "@tailwindcss/postcss";
import path from "path";

const uikit = path.resolve(__dirname, "../../mdigitalcn_uikit/src");

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
          "@mdigitalcn/uikit/card": path.join(uikit, "card/index.tsx"),
          "@mdigitalcn/uikit/button": path.join(uikit, "button/index.tsx"),
          "@mdigitalcn/uikit/input": path.join(uikit, "input/index.tsx"),
          "@mdigitalcn/uikit/input-password": path.join(uikit, "input-password/index.tsx"),
          "@mdigitalcn/uikit/input-otp": path.join(uikit, "input-otp/index.tsx"),
          "@mdigitalcn/uikit/textarea": path.join(uikit, "textarea/index.tsx"),
          "@mdigitalcn/uikit/checkbox": path.join(uikit, "checkbox/index.tsx"),
          "@mdigitalcn/uikit/badge": path.join(uikit, "badge/index.tsx"),
          "@mdigitalcn/uikit/link": path.join(uikit, "link/index.tsx"),
          "@mdigitalcn/uikit/notification": path.join(uikit, "notification/index.tsx"),
          "@mdigitalcn/uikit/avatar": path.join(uikit, "avatar/index.tsx"),
          "@mdigitalcn/uikit/skeleton": path.join(uikit, "skeleton/index.tsx"),
          "@mdigitalcn/uikit/progress": path.join(uikit, "progress/index.tsx"),
          "@mdigitalcn/uikit/modal": path.join(uikit, "modal/index.tsx"),
          "@mdigitalcn/uikit/dropdown": path.join(uikit, "dropdown/index.tsx"),
          "@mdigitalcn/uikit/divider": path.join(uikit, "divider/index.tsx"),
          "@mdigitalcn/uikit/tooltip": path.join(uikit, "tooltip/index.tsx"),
          "@mdigitalcn/uikit/rating": path.join(uikit, "rating/index.tsx"),
          "@mdigitalcn/uikit/table": path.join(uikit, "table/index.tsx"),
          "@mdigitalcn/uikit/scroll-area": path.join(uikit, "scroll-area/index.tsx"),
          "@mdigitalcn/uikit": path.join(uikit, "index.ts"),
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
