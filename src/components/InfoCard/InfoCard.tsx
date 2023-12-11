"use client";

import Image from "next/image";

interface InfoCardProps {
  title?: string;
  description?: string;
  img_url?: string;
}

function InfoCard({ title, description, img_url }: InfoCardProps) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "1em",
        flexWrap: "wrap",
      }}
    >
      <div>
        <div style={{ fontSize: "2em" }}>{title}</div>
        <h5 style={{ fontSize: "1em" }}>{description}</h5>
      </div>
      {img_url && (
        <div>
          <img
            src={img_url}
            alt="hero image"
            style={{ height: "200px", width: "300px" }}
          />
        </div>
      )}
    </div>
  );
}

export default InfoCard;
