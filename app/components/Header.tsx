"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.links}>
        <Link href="/">
          <Image src="/icons8-home-50.png" alt="house" width={30} height={30} />
        </Link>
      </div>
    </header>
  );
};

export default Header;
