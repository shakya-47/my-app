"use client";
import { builder } from "@builder.io/sdk";
import { RenderBuilderContent } from "../../components/builder";
import { useEffect, useState } from "react";

// Builder Public API Key set in .env file
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

interface PageProps {
  params: {
    page: string[];
  };
}

export default function Page(props: PageProps) {
  const [content, setContent] = useState();
  const [storeData, setStoreData] = useState<any>({});

  useEffect(() => {
    builder
      .get("page", {
        userAttributes: {
          urlPath: "/" + (props?.params?.page?.join("/") || ""),
        },
      })
      .toPromise()
      .then((data) => setContent(data));

    const fetchData = async () => {
      const data = await fetch("https://thenowmassage.com/?get_locations=1");
      const jsonData = await data.json();
      setStoreData(jsonData);
      console.log(jsonData);
    };
    fetchData();
  }, []);

  return (
    <>
      <RenderBuilderContent content={content} data={storeData} />
    </>
  );
}
