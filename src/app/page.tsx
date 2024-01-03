"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { builder } from "@builder.io/sdk";
import { RenderBuilderContent } from "../components/builder";
import data from "./data.json";
import BannerImage from "@/components/BannerImage/BannerImage";
import { createContext, useEffect, useState } from "react";
import MyContext from "./context";
import Link from "next/link";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

interface PageProps {
  params: {
    page: string[];
  };
}

export default function Home() {
  const [storeData, setStoreData] = useState<any>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("https://thenowmassage.com/?get_locations=1");
      const jsonData = await data.json();
      setStoreData(jsonData);
      console.log(jsonData);
    };
    fetchData();
  }, []);

  return (
    <div>
      <MyContext.Provider value={storeData}>
        <BannerImage />
        <div className={styles.list_container}>
          {storeData &&
            storeData.map((store: any, index: number) => (
              <Link
                key={store.id}
                className={styles.list_item}
                href={`/stores/${store.slug}`}
              >
                {store.title}
              </Link>
            ))}
        </div>
      </MyContext.Provider>
    </div>
  );
}
