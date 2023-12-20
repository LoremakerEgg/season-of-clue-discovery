"use client";

import styles from "./sorting.module.scss";
import { useState, useEffect } from "react";
import Link from "next/link";
import Zone from "./Zone";
import Runes from "./Runes";
import Races from "./Races";
import { useRaceContext } from "../context/raceContext";

const Sorting = (props: any) => {
  const [sortByZone, setSortByZone] = useState(false);
  const [sortByRune, setSortByRune] = useState(false);
  const [sortDisplay, setSortDisplay] = useState(0);
  const { activeRace } = useRaceContext();

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
          raceThreeImage={props.raceThreeImage ? props.raceThreeImage : ""}
          raceFourImage={props.raceFourImage ? props.raceFourImage : ""}
        />
        <div className={styles.displayChoiceDiv}>
          <h2 onClick={zoneSortClick} className={styles.titleSorting}>
            Sort By Zone
          </h2>
          <h2 onClick={runeSortClick} className={styles.titleSorting}>
            Sort By Rune
          </h2>
        </div>
        {activeRace ? (
          <Zone
            infoStarterZoneFirstRune={props.infoStarterZoneFirstRune}
            infoStarterZoneSecondRuneRaceOne={
              props.infoStarterZoneSecondRuneRaceOne
            }
            infoStarterZoneSecondRuneRaceTwo={
              props.infoStarterZoneSecondRuneRaceTwo
            }
            infoStarterZoneSecondRuneRaceThree={
              props.infoStarterZoneSecondRuneRaceThree
            }
            infoStarterZoneSecondRuneRaceFour={
              props.infoStarterZoneSecondRuneRaceFour
            }
            infoStarterZoneThirdRuneRaceOne={
              props.infoStarterZoneThirdRuneRaceOne
            }
            infoStarterZoneThirdRuneRaceTwo={
              props.infoStarterZoneThirdRuneRaceTwo
            }
            infoStarterZoneThirdRuneRaceThree={
              props.infoStarterZoneThirdRuneRaceThree
            }
            infoStarterZoneThirdRuneRaceFour={
              props.infoStarterZoneThirdRuneRaceFour
            }
            infoStarterZoneFourthRuneRaceOne={
              props.infoStarterZoneFourthRuneRaceOne
            }
            infoStarterZoneFourthRuneRaceTwo={
              props.infoStarterZoneFourthRuneRaceTwo
            }
            infoStarterZoneFourthRuneRaceThree={
              props.infoStarterZoneFourthRuneRaceThree
            }
            infoStarterZoneFourthRuneRaceFour={
              props.infoStarterZoneFourthRuneRaceFour
            }
            infoStarterZoneFifthRuneRaceOne={
              props.infoStarterZoneFifthRuneRaceOne
            }
            infoStarterZoneFifthRuneRaceTwo={
              props.infoStarterZoneFifthRuneRaceTwo
            }
            infoStarterZoneFifthRuneRaceThree={
              props.infoStarterZoneFifthRuneRaceThree
            }
            infoStarterZoneFifthRuneRaceFour={
              props.infoStarterZoneFifthRuneRaceFour
            }
            infoCitiesRaceOne={props.infoCitiesRaceOne}
            infoCitiesRaceTwo={props.infoCitiesRaceTwo}
            infoCitiesRaceThree={props.infoCitiesRaceThree}
            infoCitiesRaceFour={props.infoCitiesRaceFour}
            infoCitiesTwoRaceOne={props.infoCitiesTwoRaceOne}
            infoCitiesTwoRaceTwo={props.infoCitiesTwoRaceTwo}
            infoCitiesTwoRaceThree={props.infoCitiesTwoRaceThree}
            infoCitiesTwoRaceFour={props.infoCitiesTwoRaceFour}
            infoSecondZoneFirstRuneRaceOne={
              props.infoSecondZoneFirstRuneRaceOne
            }
            infoSecondZoneFirstRuneRaceTwo={
              props.infoSecondZoneFirstRuneRaceTwo
            }
            infoSecondZoneFirstRuneRaceThree={
              props.infoSecondZoneFirstRuneRaceThree
            }
            infoSecondZoneFirstRuneRaceFour={
              props.infoSecondZoneFirstRuneRaceFour
            }
            infoSecondZoneSecondRuneRaceOne={
              props.infoSecondZoneSecondRuneRaceOne
            }
            infoSecondZoneSecondRuneRaceTwo={
              props.infoSecondZoneSecondRuneRaceTwo
            }
            infoSecondZoneSecondRuneRaceThree={
              props.infoSecondZoneSecondRuneRaceThree
            }
            infoSecondZoneSecondRuneRaceFour={
              props.infoSecondZoneSecondRuneRaceFour
            }
            infoMiscZoneOne={props.infoMiscZoneOne}
            infoMiscZoneTwo={props.infoMiscZoneTwo}
            infoMiscZoneThree={props.infoMiscZoneThree}
            infoMiscZoneFour={props.infoMiscZoneFour}
            infoMiscZoneFiveRaceOne={props.infoMiscZoneFiveRaceOne}
            infoMiscZoneFiveRaceTwo={props.infoMiscZoneFiveRaceTwo}
            infoMiscZoneFiveRaceThree={props.infoMiscZoneFiveRaceThree}
            infoMiscZoneFiveRaceFour={props.infoMiscZoneFiveRaceFour}
            zoneOneRaceOne={props.zoneOneRaceOne}
            zoneOneRaceTwo={props.zoneOneRaceTwo}
            zoneOneRaceThree={props.zoneOneRaceThree}
            zoneOneRaceFour={props.zoneOneRaceFour}
            zoneOneCityRaceOne={props.zoneOneCityRaceOne}
            zoneOneCityRaceTwo={props.zoneOneCityRaceTwo}
            zoneOneCityRaceThree={props.zoneOneCityRaceThree}
            zoneOneCityRaceFour={props.zoneOneCityRaceFour}
            zoneTwoRaceOne={props.zoneTwoRaceOne}
            zoneTwoRaceTwo={props.zoneTwoRaceTwo}
            zoneTwoRaceThree={props.zoneTwoRaceThree}
            zoneTwoRaceFour={props.zoneTwoRaceFour}
          />
        ) : (
          <h1 className={styles.titleCenter}>
            Please select a race from the options above!
          </h1>
        )}
      </main>
    );
  } else if (sortDisplay == 2) {
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
          raceThreeImage={props.raceThreeImage ? props.raceThreeImage : ""}
          raceFourImage={props.raceFourImage ? props.raceFourImage : ""}
        />
        <div className={styles.displayChoiceDiv}>
          <h2 onClick={zoneSortClick} className={styles.titleSorting}>
            Sort By Zone
          </h2>
          <h2 onClick={runeSortClick} className={styles.titleSorting}>
            Sort By Rune
          </h2>
        </div>
        {activeRace ? (
          <Runes
            runeOne={props.runeOne}
            runeOneRumorRaceOne={props.runeOneRumorRaceOne}
            runeOneRumorRaceTwo={props.runeOneRumorRaceTwo}
            runeTwo={props.runeTwo}
            runeTwoRumorRaceOne={props.runeTwoRumorRaceOne}
            runeTwoRumorRaceTwo={props.runeTwoRumorRaceTwo}
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
            runeThreeRumorRaceOne={props.runeThreeRumorRaceOne}
            runeFourRumorRaceOne={props.runeFourRumorRaceOne}
            runeFiveRumorRaceOne={props.runeFiveRumorRaceOne}
            runeSixRumorRaceOne={props.runeSixRumorRaceOne}
            runeSevenRumorRaceOne={props.runeSevenRumorRaceOne}
            runeEightRumorRaceOne={props.runeEightRumorRaceOne}
            runeNineRumorRaceOne={props.runeNineRumorRaceOne}
            runeTenRumorRaceOne={props.runeTenRumorRaceOne}
            runeElevenRumorRaceOne={props.runeElevenRumorRaceOne}
            runeTwelveRumorRaceOne={props.runeTwelveRumorRaceOne}
            runeThreeRumorRaceTwo={props.runeThreeRumorRaceTwo}
            runeFourRumorRaceTwo={props.runeFourRumorRaceTwo}
            runeFiveRumorRaceTwo={props.runeFiveRumorRaceTwo}
            runeSixRumorRaceTwo={props.runeSixRumorRaceTwo}
            runeSevenRumorRaceTwo={props.runeSevenRumorRaceTwo}
            runeEightRumorRaceTwo={props.runeEightRumorRaceTwo}
            runeNineRumorRaceTwo={props.runeNineRumorRaceTwo}
            runeTenRumorRaceTwo={props.runeTenRumorRaceTwo}
            runeElevenRumorRaceTwo={props.runeElevenRumorRaceTwo}
            runeTwelveRumorRaceTwo={props.runeTwelveRumorRaceTwo}
            runeOneRumorRaceThree={props.runeOneRumorRaceThree}
            runeTwoRumorRaceThree={props.runeTwoRumorRaceThree}
            runeThreeRumorRaceThree={props.runeThreeRumorRaceThree}
            runeFourRumorRaceThree={props.runeFourRumorRaceThree}
            runeFiveRumorRaceThree={props.runeFiveRumorRaceThree}
            runeSixRumorRaceThree={props.runeSixRumorRaceThree}
            runeSevenRumorRaceThree={props.runeSevenRumorRaceThree}
            runeEightRumorRaceThree={props.runeEightRumorRaceThree}
            runeNineRumorRaceThree={props.runeNineRumorRaceThree}
            runeTenRumorRaceThree={props.runeTenRumorRaceThree}
            runeElevenRumorRaceThree={props.runeElevenRumorRaceThree}
            runeTwelveRumorRaceThree={props.runeTwelveRumorRaceThree}
            runeOneRumorRaceFour={props.runeOneRumorRaceFour}
            runeTwoRumorRaceFour={props.runeTwoRumorRaceFour}
            runeThreeRumorRaceFour={props.runeThreeRumorRaceFour}
            runeFourRumorRaceFour={props.runeFourRumorRaceFour}
            runeFiveRumorRaceFour={props.runeFiveRumorRaceFour}
            runeSixRumorRaceFour={props.runeSixRumorRaceFour}
            runeSevenRumorRaceFour={props.runeSevenRumorRaceFour}
            runeEightRumorRaceFour={props.runeEightRumorRaceFour}
            runeNineRumorRaceFour={props.runeNineRumorRaceFour}
            runeTenRumorRaceFour={props.runeTenRumorRaceFour}
            runeElevenRumorRaceFour={props.runeElevenRumorRaceFour}
            runeTwelveRumorRaceFour={props.runeTwelveRumorRaceFour}
            runeOneImage={props.runeOneImage}
            runeTwoImage={props.runeTwoImage}
            runeThreeImage={props.runeThreeImage}
            runeFourImage={props.runeFourImage}
            runeFiveImage={props.runeFiveImage}
            runeSixImage={props.runeSixImage}
            runeSevenImage={props.runeSevenImage}
            runeEightImage={props.runeEightImage}
            runeNineImage={props.runeNineImage}
            runeTenImage={props.runeTenImage}
            runeElevenImage={props.runeElevenImage}
            runeTwelveImage={props.runeTwelveImage}
          />
        ) : (
          <h1 className={styles.titleCenter}>
            Please select a race from the options above!
          </h1>
        )}
      </main>
    );
  } else
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
          raceThreeImage={props.raceThreeImage ? props.raceThreeImage : ""}
          raceFourImage={props.raceFourImage ? props.raceFourImage : ""}
        />
        <div className={styles.displayChoiceDiv}>
          <h2 onClick={zoneSortClick} className={styles.titleSorting}>
            Sort By Zone
          </h2>
          <h2 onClick={runeSortClick} className={styles.titleSorting}>
            Sort By Rune
          </h2>
        </div>
        <h1 className={styles.titleCenter}>
          Please select a method of sorting from the two options above!
        </h1>
      </main>
    );
};

export default Sorting;
