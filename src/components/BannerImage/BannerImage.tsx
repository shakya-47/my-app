"use client";
import "./styles.css";
interface BannerImageProps {
  img_url?: string;
  banner_text?: string;
  button_label?: string;
  button_url?: string;
}

function BannerImage({
  img_url = "https://cdn.pixabay.com/photo/2022/06/12/22/48/gradient-7258997_1280.png",
  banner_text = "Welcome",
  button_label = "Action button",
  button_url,
}: BannerImageProps) {
  return (
    <div className="banner_container">
      <img src={img_url} alt="banner_image" className="banner_img" />
      <div className="banner_content">
        <h1 className="banner_text">{banner_text}</h1>
        <button className="banner_btn">{button_label}</button>
      </div>
    </div>
  );
}

export default BannerImage;
