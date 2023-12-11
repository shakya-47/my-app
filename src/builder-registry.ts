"use client";
import { Builder } from "@builder.io/react";
import BannerImage from "./components/BannerImage/BannerImage";
import InfoCard from "./components/InfoCard/InfoCard";

Builder.registerComponent(InfoCard, {
  name: "InfoCard",
  inputs: [
    {
      name: "title",
      type: "string",
    },
    {
      name: "description",
      type: "string",
    },
    {
      name: "img_url",
      type: "string",
    },
  ],
});

Builder.registerComponent(BannerImage, {
  name: "BannerImage",
  inputs: [
    {
      name: "banner_text",
      type: "string",
    },
    {
      name: "button_label",
      type: "string",
    },
    {
      name: "button_url",
      type: "string",
    },
    {
      name: "img_url",
      type: "string",
    },
  ],
});
