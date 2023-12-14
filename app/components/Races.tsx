"use client";

import Image from "next/image";
import styles from "./races.module.scss";
import { useRaceContext } from "../context/raceContext";

const Races = (props: any) => {
  const { activeRace, setActiveRace } = useRaceContext();

  return (
    <main className={styles.main}>
      <div className={styles.racesDiv}>
        <h3>Races</h3>
        {activeRace == 1 ? (
          <Image
            src="/druid.png"
            alt={props.raceOne}
            width={40}
            height={40}
            className={styles.image}
          />
        ) : (
          <Image
            src="/druid.png"
            alt={props.raceOne}
            width={40}
            height={40}
            onClick={() => {
              setActiveRace(1);
            }}
            style={{ cursor: "pointer" }}
          />
        )}
        {activeRace == 2 ? (
          <Image
            src="/shaman.png"
            alt={props.raceTwo}
            width={40}
            height={40}
            className={styles.image}
          />
        ) : (
          <Image
            src="/shaman.png"
            alt={props.raceTwo}
            width={40}
            height={40}
            onClick={() => {
              setActiveRace(2);
            }}
            style={{ cursor: "pointer" }}
          />
        )}
      </div>
    </main>
  );
};

export default Races;
