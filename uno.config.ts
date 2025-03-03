// uno.config.ts
import { defineConfig } from "unocss";
import { presetWind3 } from "@unocss/preset-wind3";
import transformerDirectives from "@unocss/transformer-directives";
import transformerVariantGroup from "@unocss/transformer-variant-group";

export default defineConfig({
  presets: [presetWind3()],
  transformers: [transformerDirectives(), transformerVariantGroup()],
  rules: [["a", { "text-decoration": "none", color: "inherit" }]],
});
