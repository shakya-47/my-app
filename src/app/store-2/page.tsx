import BannerImage from "@/components/BannerImage/BannerImage";
import styles from "./page.module.css";
import { builder } from "@builder.io/sdk";
import { RenderBuilderContent } from "../../components/builder";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

export default async function Store2() {
  const content = await builder
    .get("store-2-section", {
      prerender: false,
    })
    .toPromise();

  return (
    <div className={styles.parent}>
      <div className={styles.header}>
        <BannerImage banner_text="Store 2, only main section is editable via page builder" />
      </div>
      <div className={styles.left_side}>Left</div>
      <div className={styles.main}>
        <RenderBuilderContent content={content} model="store-2-section" />
      </div>
      <div className={styles.right_side}>Right</div>
      <div className={styles.footer}>Footer</div>
    </div>
  );
}
