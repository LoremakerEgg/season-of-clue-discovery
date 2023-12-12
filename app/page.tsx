import Link from "next/link";
import styles from "./page.module.scss";
import Image from "next/image";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.introDiv}>
        <h1 className={styles.titleText}>
          Welcome to Season of Discovery: Clues
        </h1>
      </div>
      <div className={styles.descriptionDiv}>
        <p>
          This is a project structured around the seasonal World of Warcraft
          Classic servers currently called Season of Discovery! Within this
          specific gamemode, you are able to find and use various runes that
          offer class-altering abilities to each class that finds it! These
          runes vary in location based on class and faction, and some can be
          found in a multitude of zones within the game! <br /> <br />
          Already established websites like WowHead offer a way for players to
          locate the runes by giving direct locations and steps to finding them,
          but what this app offers is a way to keep some of the mystery intact
          by instead offering clues and suggestions to where the player might go
          to locate the runes!
        </p>
      </div>
      <div className={styles.classIconsDiv}>
        <Link href="/druid">
          <Image
            src="/druid.png"
            alt="world of warcraft druid icon"
            width={64}
            height={64}
          />
        </Link>
        <Link href="/hunter">
          <Image
            src="/hunter.png"
            alt="world of warcraft hunter icon"
            width={64}
            height={64}
          />
        </Link>
        <Link href="/mage">
          <Image
            src="/mage.png"
            alt="world of warcraft mage icon"
            width={64}
            height={64}
          />
        </Link>
        <Link href="/paladin">
          <Image
            src="/paladin.png"
            alt="world of warcraft paladin icon"
            width={64}
            height={64}
          />
        </Link>
        <Link href="/priest">
          <Image
            src="/priest.png"
            alt="world of warcraft priest icon"
            width={64}
            height={64}
          />
        </Link>
        <Link href="/rogue">
          <Image
            src="/rogue.png"
            alt="world of warcraft rogue icon"
            width={64}
            height={64}
          />
        </Link>
        <Link href="/shaman">
          <Image
            src="/shaman.png"
            alt="world of warcraft shaman icon"
            width={64}
            height={64}
          />
        </Link>
        <Link href="/warlock">
          <Image
            src="/warlock.png"
            alt="world of warcraft warlock icon"
            width={64}
            height={64}
          />
        </Link>
        <Link href="/warrior">
          <Image
            src="/warrior.png"
            alt="world of warcraft warrior icon"
            width={64}
            height={64}
          />
        </Link>
      </div>
    </main>
  );
}
