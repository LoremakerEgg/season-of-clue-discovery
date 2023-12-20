"use client";

import styles from "./zone.module.scss";
import { useEffect, useState } from "react";
import { useRaceContext } from "../context/raceContext";

const Zone = (props: any) => {
  const [toggleShowStarter, setToggleShowStarter] = useState(false);
  const [toggleShowCities, setToggleShowCities] = useState(false);
  const [toggleShowSecond, setToggleShowSecond] = useState(false);
  const [toggleShowThird, setToggleShowThird] = useState(false);
  const [toggleShowSecret, setToggleShowSecret] = useState(false);
  const { activeRace } = useRaceContext();

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

  if (activeRace == 1) {
    return (
      <main className={styles.main}>
        <div className={styles.zoneDiv}>
          <h2 onClick={toggleShowStarterClick} style={{ cursor: "pointer" }}>
            {props.zoneOneRaceOne}
          </h2>
          {toggleShowStarter ? (
            <div>
              <p>{props.infoStarterZoneFirstRune}</p>
              <br />
              <br />
              <p>{props.infoStarterZoneSecondRuneRaceOne}</p>
              <br />
              <br />
              <p>{props.infoStarterZoneThirdRuneRaceOne}</p>
              <br />
              <br />
              <p>{props.infoStarterZoneFourthRuneRaceOne}</p>
              <br />
              <br />
              <p>{props.infoStarterZoneFifthRuneRaceOne}</p>
            </div>
          ) : (
            ""
          )}
          {props.zoneOneCityRaceOne ? (
            <h2 onClick={toggleShowCitiesClick} style={{ cursor: "pointer" }}>
              {props.zoneOneCityRaceOne}
            </h2>
          ) : (
            ""
          )}
          {toggleShowCities ? <p>{props.infoCitiesRaceOne}</p> : ""}
          <h2 onClick={toggleShowSecondClick} style={{ cursor: "pointer" }}>
            {props.zoneTwoRaceOne}
          </h2>
          {toggleShowSecond ? (
            <div>
              <p>{props.infoSecondZoneFirstRuneRaceOne}</p>
              <br />
              <br />
              <p>{props.infoSecondZoneSecondRuneRaceOne}</p>
            </div>
          ) : (
            ""
          )}
          {props.zoneThreeRaceOne ? (
            <h2 onClick={toggleShowThirdClick} style={{ cursor: "pointer" }}>
              {props.zoneThreeRaceOne}
            </h2>
          ) : (
            ""
          )}
          {toggleShowThird ? <p>{props.infoThirdZone}</p> : ""}
          <h2 onClick={toggleShowSecretClick} style={{ cursor: "pointer" }}>
            Miscellaneous
          </h2>
          {toggleShowSecret ? (
            <div>
              <p>{props.infoMiscZoneOne}</p>
              <br />
              <br />
              <p>{props.infoMiscZoneTwo}</p>
              <br />
              <br />
              <p>{props.infoMiscZoneThree}</p>
              <br />
              <br />
              <p>{props.infoMiscZoneFour}</p>
              <br />
              <br />
              <p>{props.infoMiscZoneFiveRaceOne}</p>
            </div>
          ) : (
            ""
          )}
        </div>
      </main>
    );
  } else if (activeRace == 2) {
    return (
      <main className={styles.main}>
        <div className={styles.zoneDiv}>
          <h2 onClick={toggleShowStarterClick} style={{ cursor: "pointer" }}>
            {props.zoneOneRaceTwo}
          </h2>
          {toggleShowStarter ? (
            <div>
              <p>{props.infoStarterZoneFirstRune}</p>
              <br />
              <br />
              <p>{props.infoStarterZoneSecondRuneRaceTwo}</p>
              <br />
              <br />
              <p>{props.infoStarterZoneThirdRuneRaceTwo}</p>
              <br />
              <br />
              <p>{props.infoStarterZoneFourthRuneRaceTwo}</p>
              <br />
              <br />
              <p>{props.infoStarterZoneFifthRuneRaceTwo}</p>
            </div>
          ) : (
            ""
          )}
          {props.zoneOneCityRaceTwo ? (
            <h2 onClick={toggleShowCitiesClick} style={{ cursor: "pointer" }}>
              {props.zoneOneCityRaceTwo}
            </h2>
          ) : (
            ""
          )}
          {toggleShowCities ? <p>{props.infoCitiesRaceTwo}</p> : ""}
          <h2 onClick={toggleShowSecondClick} style={{ cursor: "pointer" }}>
            {props.zoneTwoRaceTwo}
          </h2>
          {toggleShowSecond ? (
            <div>
              <p>{props.infoSecondZoneFirstRuneRaceTwo}</p>
              <br />
              <br />
              <p>{props.infoSecondZoneSecondRuneRaceTwo}</p>
            </div>
          ) : (
            ""
          )}
          {props.zoneThreeRaceTwo ? (
            <h2 onClick={toggleShowThirdClick} style={{ cursor: "pointer" }}>
              {props.zoneThreeRaceTwo}
            </h2>
          ) : (
            ""
          )}
          {toggleShowThird ? <p>{props.infoThirdZone}</p> : ""}
          <h2 onClick={toggleShowSecretClick} style={{ cursor: "pointer" }}>
            Miscellaneous
          </h2>
          {toggleShowSecret ? (
            <div>
              <p>{props.infoMiscZoneOne}</p>
              <br />
              <br />
              <p>{props.infoMiscZoneTwo}</p>
              <br />
              <br />
              <p>{props.infoMiscZoneThree}</p>
              <br />
              <br />
              <p>{props.infoMiscZoneFour}</p>
              <br />
              <br />
              <p>{props.infoMiscZoneFiveRaceTwo}</p>
            </div>
          ) : (
            ""
          )}
        </div>
      </main>
    );
  }
};

export default Zone;
