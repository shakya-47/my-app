"use client";
import BannerImage from "@/components/BannerImage/BannerImage";
import styles from "./page.module.css";
import { builder } from "@builder.io/sdk";
import { RenderBuilderContent } from "../../../components/builder";
import { useContext, useEffect, useState } from "react";
import data from "../../data.json";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

export default function StorePage({ params }: any) {
  const [content, setContent] = useState();
  const [storeData, setStoreData] = useState<any>({});

  useEffect(() => {
    builder
      .get("store-2-section", {
        prerender: false,
      })
      .toPromise()
      .then((data) => setContent(data));

    const fetchData = async () => {
      const data = await fetch("https://thenowmassage.com/?get_locations=1");
      const jsonData = await data.json();
      setStoreData(
        jsonData.filter((item: any) => item.slug === params.slug)[0]
      );
      console.log(jsonData);
    };
    fetchData();
  }, []);

  useEffect(() => {
    console.log("storeData", storeData);
  }, [storeData]);

  return (
    <div className={styles.parent}>
      <div className={styles.header}>
        <BannerImage banner_text={storeData.title} />
      </div>
      <div className={styles.left_side}>Left</div>
      <div className={styles.main}>Main section</div>
      <div className={styles.right_side}>
        <RenderBuilderContent
          content={content}
          model="store-2-section"
          data={{ storeData: storeData }}
        />
      </div>
      <div className={styles.footer}>Footer</div>
    </div>
  );
}
