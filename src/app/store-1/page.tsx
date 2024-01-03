import BannerImage from "@/components/BannerImage/BannerImage";
import styles from "./page.module.css";
import InfoCard from "@/components/InfoCard/InfoCard";
import { wrap } from "module";
import data from "../data.json";

function Store1() {
  return (
    <div className={styles.parent}>
      <div className={styles.header}>
        <BannerImage banner_text={data.data[0].title} />
      </div>
      <div className={styles.left_side}>Left</div>
      <div className={styles.main}>
        <div style={{ display: "flex", flexWrap: "wrap" }}></div>
        <InfoCard img_url="https://cdn.builder.io/api/v1/image/assets%2F78fbdc160f424827b42a4b1e101b1832%2F9040a96949fe44e6a401f82f52d8e8f8?format=webp&width=2000" />
        {/* <InfoCard img_url="https://cdn.builder.io/api/v1/image/assets%2F78fbdc160f424827b42a4b1e101b1832%2F4d05964e1444446884b0ce45537d29b6?format=webp&width=2000" /> */}
      </div>
      <div className={styles.right_side}>Right</div>
    </div>
  );
}

export default Store1;
