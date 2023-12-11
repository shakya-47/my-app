"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { builder } from "@builder.io/sdk";
import { RenderBuilderContent } from "../components/builder";
import data from "./data.json";
import { useRouter } from "next/navigation";
import BannerImage from "@/components/BannerImage/BannerImage";
console.log("data", data.data);

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

interface PageProps {
  params: {
    page: string[];
  };
}

export default async function Home() {
  const router = useRouter();
  // const content = await builder
  //   .get("home-banner", {
  //     prerender: false,
  //   })
  //   .toPromise();

  return (
    <>
      {/* <RenderBuilderContent content={content} model="home-banner" /> */}
      <BannerImage />
      <div className={styles.list_container}>
        {data.data &&
          data.data.map((store, index) => (
            <a
              key={store.id}
              className={styles.list_item}
              // onClick={() => router.push(store.url)}
              href={store.url}
            >
              {store.title}
            </a>
          ))}
      </div>
    </>
  );
}
