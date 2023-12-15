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
        <Races
          raceOneImage={props.raceOneImage ? props.raceOneImage : ""}
          raceTwoImage={props.raceTwoImage ? props.raceTwoImage : ""}
        />
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
        <Races
          raceOneImage={props.raceOneImage ? props.raceOneImage : ""}
          raceTwoImage={props.raceTwoImage ? props.raceTwoImage : ""}
        />
        <div className={styles.displayChoiceDiv}>
          <h2 onClick={zoneSortClick} style={{ cursor: "pointer" }}>
            Sort By Zone
          </h2>
          <h2 onClick={runeSortClick} style={{ cursor: "pointer" }}>
            Sort By Rune
          </h2>
        </div>
        <Runes
          runeOne={props.runeOne}
          runeOneRumor={props.runeOneRumor}
          runeTwo={props.runeTwo}
          runeTwoRumor={props.runeTwoRumor}
          runeThree={props.runeThree}
          runeFour={props.runeFour}
          runeFive={props.runeFive}
          runeSix={props.runeSix}
          runeSeven={props.runeSeven}
          runeEight={props.runeEight}
          runeNine={props.runeNine}
          runeTen={props.runeTen}
          runeEleven={props.runeEleven}
          runeTwelve={props.runeTwelve}
        />
      </main>
    );
  } else
    return (
      <main className={styles.main}>
        <div className={styles.title}>
          <h1>{props.class} Runes</h1>
        </div>
        <Races
          raceOneImage={props.raceOneImage ? props.raceOneImage : ""}
          raceTwoImage={props.raceTwoImage ? props.raceTwoImage : ""}
        />
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
