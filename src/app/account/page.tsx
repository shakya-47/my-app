import React from "react";
import { builder } from "@builder.io/sdk";
import { RenderBuilderContent } from "../../components/builder";
import "./page.css";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

interface PageProps {
  params: {
    page: string[];
  };
}

export default async function Account(props: PageProps) {
  const content = await builder
    .get("account-top", {
      prerender: false,
    })
    .toPromise();

  const contentLeft = await builder
    .get("account-left", {
      prerender: false,
    })
    .toPromise();

  const contentRight = await builder
    .get("account-right", {
      prerender: false,
    })
    .toPromise();

  const contentFooter = await builder
    .get("account-footer", {
      prerender: false,
    })
    .toPromise();

  return (
    <div className="parent">
      <div className="header">
        <RenderBuilderContent content={content} model="account-top" />
      </div>
      <div className="left-side">
        <RenderBuilderContent content={contentLeft} model="account-left" />
      </div>

      <div
        className="main"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "50vh",
            width: "50vw",
            border: "solid 2px white",
          }}
        >
          <h3>Sign up!</h3>
          <label htmlFor="">Full Name</label>
          <input type="text" />
          <label htmlFor="">Email</label>
          <input type="email" />
          <label htmlFor="">Password</label>
          <input type="password" />
          <button>Signup</button>
        </form>
      </div>

      <div className="right-side">
        <RenderBuilderContent content={contentRight} model="account-right" />
      </div>
      <div className="footer">
        {/* <RenderBuilderContent content={content} model="account-footer" /> */}
      </div>
    </div>
  );
}
