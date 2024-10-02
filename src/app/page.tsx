import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className="container">
        <div className="profileContainer">
          <div className="profileImage">
            <Image
              src="/asset/23.jpg"
              alt="TechTank Logo"
              width={500}
              height={500}
            />
          </div>
          <div className="profile">
            <div className="name">
              <h1>TechTank</h1>
            </div>
            <p>description</p>
          </div>
        </div>
        <div className="socialContainer"></div>
        <div className="mainContainer"></div>
      </div>
    </div>
  );
}
