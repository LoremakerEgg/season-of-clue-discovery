"use client";

import styles from "./sorting.module.scss";
import { useState, useEffect } from "react";
import { useSortContext } from "../context/sortContext";
import Link from "next/link";

const Sorting = (props: any) => {
  const [sortByZone, setSortByZone] = useState(false);
  const [sortByRune, setSortByRune] = useState(false);
  const [toggleShowStarter, setToggleShowStarter] = useState(false);
  const [toggleShowCities, setToggleShowCities] = useState(false);
  const [toggleShowSecond, setToggleShowSecond] = useState(false);
  const [toggleShowThird, setToggleShowThird] = useState(false);
  const [toggleShowSecret, setToggleShowSecret] = useState(false);
  const { sortDisplay, setSortDisplay } = useSortContext();

  const zoneSortClick = () => {
    setSortByZone(!sortByZone);
    setSortByRune(false);
  };

  const runeSortClick = () => {
    setSortByRune(!sortByRune);
    setSortByZone(false);
  };

  const toggleShowStarterClick = () => {
    setToggleShowStarter(!toggleShowStarter);
  };

  const toggleShowCitiesClick = () => {
    setToggleShowCities(!toggleShowCities);
  };

  const toggleShowSecondClick = () => {
    setToggleShowSecond(!toggleShowSecond);
  };

  const toggleShowThirdClick = () => {
    setToggleShowThird(!toggleShowThird);
  };

  const toggleShowSecretClick = () => {
    setToggleShowSecret(!toggleShowSecret);
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
        <div className={styles.displayChoiceDiv}>
          <h2 onClick={zoneSortClick} style={{ cursor: "pointer" }}>
            Sort By Zone
          </h2>
          <h2 onClick={runeSortClick} style={{ cursor: "pointer" }}>
            Sort By Rune
          </h2>
        </div>
        <div className={styles.zoneDiv}>
          <h2 onClick={toggleShowStarterClick} style={{ cursor: "pointer" }}>
            Elwynn/Dun Morogh/Teldrassil
          </h2>
          {toggleShowStarter ? (
            <div>
              <p>{props.infoStarterZoneFirstRune}</p>
              <br />
              <br />
              <p>{props.infoStarterZoneSecondRune}</p>
            </div>
          ) : (
            ""
          )}
          <h2 onClick={toggleShowCitiesClick} style={{ cursor: "pointer" }}>
            Stormwind/Ironforge/Darnassus
          </h2>
          {toggleShowCities ? <p>{props.infoCities}</p> : ""}
          <h2 onClick={toggleShowSecondClick} style={{ cursor: "pointer" }}>
            Westfall/Loch Modan/Darkshore
          </h2>
          {toggleShowSecond ? <p>{props.infoSecondZone}</p> : ""}
          <h2 onClick={toggleShowThirdClick} style={{ cursor: "pointer" }}>
            Redridge Mountains/Wetlands/Duskwood/Ashenvale
          </h2>
          {toggleShowThird ? <p>{props.infoThirdZone}</p> : ""}
          <h2 onClick={toggleShowSecretClick} style={{ cursor: "pointer" }}>
            Secret Zones
          </h2>
          {toggleShowSecret ? <p>{props.infoSecretZone}</p> : ""}
        </div>
      </main>
    );
  } else if (sortDisplay == 2) {
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
