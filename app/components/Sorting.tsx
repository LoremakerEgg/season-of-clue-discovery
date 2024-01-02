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
          raceFiveImage={props.raceFiveImage ? props.raceFiveImage : ""}
          raceSixImage={props.raceSixImage ? props.raceSixImage : ""}
          raceSevenImage={props.raceSevenImage ? props.raceSevenImage : ""}
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
            infoStarterZoneSecondRuneRaceFive={
              props.infoStarterZoneFifthRuneRaceFive
            }
            infoStarterZoneSecondRuneRaceSix={
              props.infoStarterZoneFifthRuneRaceSix
            }
            infoStarterZoneSecondRuneRaceSeven={
              props.infoStarterZoneSecondRuneRaceSeven
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
            infoStarterZoneThirdRuneRaceFive={
              props.infoStarterZoneThirdRuneRaceFive
            }
            infoStarterZoneThirdRuneRaceSix={
              props.infoStarterZoneThirdRuneRaceSix
            }
            infoStarterZoneThirdRuneRaceSeven={
              props.infoStarterZoneThirdRuneRaceSeven
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
            infoStarterZoneFourthRuneRaceFive={
              props.infoStarterZoneFourthRuneRaceFive
            }
            infoStarterZoneFourthRuneRaceSix={
              props.infoStarterZoneFourthRuneRaceSix
            }
            infoStarterZoneFourthRuneRaceSeven={
              props.infoStarterZoneFourthRuneRaceSeven
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
            infoStarterZoneFifthRuneRaceFive={
              props.infoStarterZoneFifthRuneRaceFive
            }
            infoStarterZoneFifthRuneRaceSix={
              props.infoStarterZoneFifthRuneRaceSix
            }
            infoStarterZoneFifthRuneRaceSeven={
              props.infoStarterZoneFifthRuneRaceSeven
            }
            infoCitiesRaceOne={props.infoCitiesRaceOne}
            infoCitiesRaceTwo={props.infoCitiesRaceTwo}
            infoCitiesRaceThree={props.infoCitiesRaceThree}
            infoCitiesRaceFour={props.infoCitiesRaceFour}
            infoCitiesRaceFive={props.infoCitiesRaceFive}
            infoCitiesTwoRaceOne={props.infoCitiesTwoRaceOne}
            infoCitiesTwoRaceTwo={props.infoCitiesTwoRaceTwo}
            infoCitiesTwoRaceThree={props.infoCitiesTwoRaceThree}
            infoCitiesTwoRaceFour={props.infoCitiesTwoRaceFour}
            infoCitiesTwoRaceFive={props.infoCitiesTwoRaceFive}
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
            infoSecondZoneFirstRuneRaceFive={
              props.infoSecondZoneFirstRuneRaceFive
            }
            infoSecondZoneFirstRuneRaceSix={
              props.infoSecondZoneFirstRuneRaceSix
            }
            infoSecondZoneFirstRuneRaceSeven={
              props.infoSecondZoneFirstRuneRaceSeven
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
            infoSecondZoneSecondRuneRaceFive={
              props.infoSecondZoneSecondRuneRaceFive
            }
            infoSecondZoneSecondRuneRaceSix={
              props.infoSecondZoneSecondRuneRaceSix
            }
            infoSecondZoneSecondRuneRaceSeven={
              props.infoSecondZoneSecondRuneRaceSeven
            }
            infoMiscZoneOne={props.infoMiscZoneOne}
            infoMiscZoneTwo={props.infoMiscZoneTwo}
            infoMiscZoneThree={props.infoMiscZoneThree}
            infoMiscZoneFour={props.infoMiscZoneFour}
            infoMiscZoneFiveRaceOne={props.infoMiscZoneFiveRaceOne}
            infoMiscZoneFiveRaceTwo={props.infoMiscZoneFiveRaceTwo}
            infoMiscZoneFiveRaceThree={props.infoMiscZoneFiveRaceThree}
            infoMiscZoneFiveRaceFour={props.infoMiscZoneFiveRaceFour}
            infoMiscZoneFiveRaceFive={props.infoMiscZoneFiveRaceFive}
            infoMiscZoneFiveRaceSix={props.infoMiscZoneFiveRaceSix}
            infoMiscZoneFiveRaceSeven={props.infoMiscZoneFiveRaceSeven}
            infoMiscZoneSixRaceOne={props.infoMiscZoneSixRaceOne}
            infoMiscZoneSixRaceTwo={props.infoMiscZoneSixRaceTwo}
            infoMiscZoneSixRaceThree={props.infoMiscZoneSixRaceThree}
            infoMiscZoneSixRaceFour={props.infoMiscZoneSixRaceFour}
            infoMiscZoneSixRaceFive={props.infoMiscZoneFiveRaceFive}
            zoneOneRaceOne={props.zoneOneRaceOne}
            zoneOneRaceTwo={props.zoneOneRaceTwo}
            zoneOneRaceThree={props.zoneOneRaceThree}
            zoneOneRaceFour={props.zoneOneRaceFour}
            zoneOneRaceFive={props.zoneOneRaceFive}
            zoneOneRaceSix={props.zoneOneRaceSix}
            zoneOneRaceSeven={props.zoneOneRaceSeven}
            zoneOneCityRaceOne={props.zoneOneCityRaceOne}
            zoneOneCityRaceTwo={props.zoneOneCityRaceTwo}
            zoneOneCityRaceThree={props.zoneOneCityRaceThree}
            zoneOneCityRaceFour={props.zoneOneCityRaceFour}
            zoneOneCityRaceFive={props.zoneOneCityRaceFive}
            zoneTwoRaceOne={props.zoneTwoRaceOne}
            zoneTwoRaceTwo={props.zoneTwoRaceTwo}
            zoneTwoRaceThree={props.zoneTwoRaceThree}
            zoneTwoRaceFour={props.zoneTwoRaceFour}
            zoneTwoRaceFive={props.zoneTwoRaceFive}
            zoneTwoRaceSix={props.zoneTwoRaceSix}
            zoneTwoRaceSeven={props.zoneTwoRaceSeven}
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
          raceFiveImage={props.raceFiveImage ? props.raceFiveImage : ""}
          raceSixImage={props.raceSixImage ? props.raceSixImage : ""}
          raceSevenImage={props.raceSevenImage ? props.raceSevenImage : ""}
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
            runeTwo={props.runeTwo}
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
            runeOneRumorRaceOne={props.runeOneRumorRaceOne}
            runeOneRumorRaceTwo={props.runeOneRumorRaceTwo}
            runeTwoRumorRaceOne={props.runeTwoRumorRaceOne}
            runeTwoRumorRaceTwo={props.runeTwoRumorRaceTwo}
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
            runeOneRumorRaceFive={props.runeOneRumorRaceFive}
            runeTwoRumorRaceFive={props.runeTwoRumorRaceFive}
            runeThreeRumorRaceFive={props.runeThreeRumorRaceFive}
            runeFourRumorRaceFive={props.runeFourRumorRaceFive}
            runeFiveRumorRaceFive={props.runeFiveRumorRaceFive}
            runeSixRumorRaceFive={props.runeSixRumorRaceFive}
            runeSevenRumorRaceFive={props.runeSevenRumorRaceFive}
            runeEightRumorRaceFive={props.runeEightRumorRaceFive}
            runeNineRumorRaceFive={props.runeNineRumorRaceFive}
            runeTenRumorRaceFive={props.runeTenRumorRaceFive}
            runeElevenRumorRaceFive={props.runeElevenRumorRaceFive}
            runeTwelveRumorRaceFive={props.runeTwelveRumorRaceFive}
            runeOneRumorRaceSix={props.runeOneRumorRaceSix}
            runeTwoRumorRaceSix={props.runeTwoRumorRaceSix}
            runeThreeRumorRaceSix={props.runeThreeRumorRaceSix}
            runeFourRumorRaceSix={props.runeFourRumorRaceSix}
            runeFiveRumorRaceSix={props.runeSixRumorRaceSix}
            runeSixRumorRaceSix={props.runeSixRumorRaceSix}
            runeSevenRumorRaceSix={props.runeSevenRumorRaceSix}
            runeEightRumorRaceSix={props.runeEightRumorRaceSix}
            runeNineRumorRaceSix={props.runeNineRumorRaceSix}
            runeTenRumorRaceSix={props.runeTenRumorRaceSix}
            runeElevenRumorRaceSix={props.runeElevenRumorRaceSix}
            runeTwelveRumorRaceSix={props.runeTwelveRumorRaceSix}
            runeOneRumorRaceSeven={props.runeOneRumorRaceSeven}
            runeTwoRumorRaceSeven={props.runeTwoRumorRaceSeven}
            runeThreeRumorRaceSeven={props.runeThreeRumorRaceSeven}
            runeFourRumorRaceSeven={props.runeFourRumorRaceSeven}
            runeFiveRumorRaceSeven={props.runeSevenRumorRaceSeven}
            runeSixRumorRaceSeven={props.runeSixRumorRaceSeven}
            runeSevenRumorRaceSeven={props.runeSevenRumorRaceSeven}
            runeEightRumorRaceSeven={props.runeEightRumorRaceSeven}
            runeNineRumorRaceSeven={props.runeNineRumorRaceSeven}
            runeTenRumorRaceSeven={props.runeTenRumorRaceSeven}
            runeElevenRumorRaceSeven={props.runeElevenRumorRaceSeven}
            runeTwelveRumorRaceSeven={props.runeTwelveRumorRaceSeven}
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
          raceFiveImage={props.raceFiveImage ? props.raceFiveImage : ""}
          raceSixImage={props.raceSixImage ? props.raceSixImage : ""}
          raceSevenImage={props.raceSevenImage ? props.raceSevenImage : ""}
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
