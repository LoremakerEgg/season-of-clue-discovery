"use client";

import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        <a
          href="https://www.buymeacoffee.com/loremakeregg"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="buy-me-a-coffee.png"
            alt="linkedin icon"
            style={{ width: "40px" }}
          />
        </a>
        <a
          href="https://www.linkedin.com/in/anton-koller-316159240/"
          target="_blank"
          rel="noreferrer"
          style={{
            color: "blue",
            textDecoration: "none",
          }}
        >
          <img
            src="icons8-linkedin-48.png"
            alt="linkedin icon"
            style={{ width: "30px" }}
          />
        </a>
        <a
          href="https://github.com/LoremakerEgg"
          target="_blank"
          rel="noreferrer"
          style={{ color: "blue", textDecoration: "none" }}
        >
          <img src="icons8-github-30.png" alt="github icon" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
