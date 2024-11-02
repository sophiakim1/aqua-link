import Image from "next/image";
import styles from "./page.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className="container">
        <div className="profileContainer">
          <div className="profileImage">
            <Image
              src="/asset/21.jpg"
              alt="TechTank Logo"
              width={300}
              height={300}
            />
          </div>
          <div className="profile">
            <div className="name">
              <h1>TechTank</h1>
            </div>
            <p>
              Welcome to TechTank |📍Toronto, ON A diverse hub for all tech
              enthusiasts!
            </p>
          </div>
        </div>
        <div className="socialContainer">
          <FontAwesomeIcon icon={faInstagram} className="small-icon" />
          <FontAwesomeIcon icon={faYoutube} className="small-icon" />
          <FontAwesomeIcon icon={faLinkedinIn} className="small-icon" />
          <FontAwesomeIcon icon={faSpotify} className="small-icon" />
          <FontAwesomeIcon icon={faGithub} className="small-icon" />
        </div>
        <div className="mainContainer"></div>
      </div>
    </div>
  );
}
