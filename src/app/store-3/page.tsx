import BannerImage from "@/components/BannerImage/BannerImage";
import styles from "./page.module.css";
import { builder } from "@builder.io/sdk";
import { RenderBuilderContent } from "../../components/builder";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

export default async function Store3() {
  const contentLeft = await builder
    .get("store-3-left", {
      prerender: false,
    })
    .toPromise();

  const contentMain = await builder
    .get("store-3-main", {
      prerender: false,
    })
    .toPromise();

  const contentRight = await builder
    .get("store-3-right", {
      prerender: false,
    })
    .toPromise();

  return (
    <div className={styles.parent}>
      <div className={styles.header}>
        <BannerImage banner_text="Store 3, left, main and right sections are editable via page builder " />
      </div>
      <div className={styles.left_side}>
        <RenderBuilderContent content={contentLeft} model="store-3-left" />
      </div>
      <div className={styles.main}>
        <RenderBuilderContent content={contentMain} model="store-3-main" />
      </div>
      <div className={styles.right_side}>
        <RenderBuilderContent content={contentRight} model="store-3-right" />
      </div>
      <div className={styles.footer}>Footer</div>
    </div>
  );
}
