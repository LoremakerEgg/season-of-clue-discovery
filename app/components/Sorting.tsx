"use client";

import styles from "./sorting.module.scss";
import { useState, useEffect } from "react";
import Link from "next/link";
import Zone from "./Zone";
import Runes from "./Runes";
import Races from "./Races";

const Sorting = (props: any) => {
  const [sortByZone, setSortByZone] = useState(false);
  const [sortByRune, setSortByRune] = useState(false);
  const [sortDisplay, setSortDisplay] = useState(0);

  const zoneSortClick = () => {
    setSortByZone(!sortByZone);
    setSortByRune(false);
  };

  const runeSortClick = () => {
    setSortByRune(!sortByRune);
    setSortByZone(false);
  };

  useEffect(() => {
    if (sortByZone == true) {
      setSortDisplay(1);
    } else if (sortByRune == true) {
      setSortDisplay(2);
    }
  }, [sortByZone, sortByRune]);

  if (sortDisplay == 1) {
    return (
      <main className={styles.main}>
        <Link
          href="/"
          onClick={() => {
            setSortDisplay(0);
          }}
        >
          Home
        </Link>
        <div className={styles.title}>
          <h1>{props.class} Runes</h1>
        </div>
        <Races />
        <div className={styles.displayChoiceDiv}>
          <h2 onClick={zoneSortClick} style={{ cursor: "pointer" }}>
            Sort By Zone
          </h2>
          <h2 onClick={runeSortClick} style={{ cursor: "pointer" }}>
            Sort By Rune
          </h2>
        </div>
        <Zone
          infoStarterZoneFirstRune={props.infoStarterZoneFirstRune}
          infoStarterZoneSecondRune={props.infoStarterZoneSecondRune}
          infoCities={props.infoCities}
          infoSecondZone={props.infoSecondZone}
          infoThirdZone={props.infoThirdZone}
          infoSecretZone={props.infoSecretZone}
        />
      </main>
    );
  } else if (sortDisplay == 2) {
    return (
      <main className={styles.main}>
        <div className={styles.title}>
          <h1>{props.class} Runes</h1>
        </div>
        <Races />
        <div className={styles.displayChoiceDiv}>
          <h2 onClick={zoneSortClick} style={{ cursor: "pointer" }}>
            Sort By Zone
          </h2>
          <h2 onClick={runeSortClick} style={{ cursor: "pointer" }}>
            Sort By Rune
          </h2>
        </div>
        <Runes
          runeOneRaceOne={props.runeOneRaceOne}
          runeOneRaceOneRumor={props.runeOneRaceOneRumor}
          runeTwoRaceOne={props.runeTwoRaceOne}
          runeTwoRaceOneRumor={props.runeTwoRaceOneRumor}
          runeThreeRaceOne={props.runeThreeRaceOne}
          runeFourRaceOne={props.runeFourRaceOne}
          runeFiveRaceOne={props.runeFiveRaceOne}
          runeSixRaceOne={props.runeSixRaceOne}
          runeSevenRaceOne={props.runeSevenRaceOne}
          runeEightRaceOne={props.runeEightRaceOne}
          runeNineRaceOne={props.runeNineRaceOne}
          runeTenRaceOne={props.runeTenRaceOne}
          runeElevenRaceOne={props.runeElevenRaceOne}
          runeTwelveRaceOne={props.runeTwelveRaceOne}
        />
      </main>
    );
  } else
    return (
      <main className={styles.main}>
        <div className={styles.title}>
          <h1>{props.class} Runes</h1>
        </div>
        <div className={styles.displayChoiceDiv}>
          <h2 onClick={zoneSortClick} style={{ cursor: "pointer" }}>
            Sort By Zone
          </h2>
          <h2 onClick={runeSortClick} style={{ cursor: "pointer" }}>
            Sort By Rune
          </h2>
        </div>
      </main>
    );
};

export default Sorting;
