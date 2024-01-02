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
              {props.infoStarterZoneSecondRuneRaceOne ? (
                <section>
                  <br />
                  <br />
                  <p>{props.infoStarterZoneSecondRuneRaceOne}</p>
                </section>
              ) : (
                ""
              )}
              {props.infoStarterZoneThirdRuneRaceOne ? (
                <section>
                  <br />
                  <br />
                  <p>{props.infoStarterZoneThirdRuneRaceOne}</p>
                </section>
              ) : (
                ""
              )}
              {props.infoStarterZoneFourthRuneRaceOne ? (
                <section>
                  <br />
                  <br />
                  <p>{props.infoStarterZoneFourthRuneRaceOne}</p>
                </section>
              ) : (
                ""
              )}
              {props.infoStarterZoneFifthRuneRaceOne ? (
                <section>
                  <br />
                  <br />
                  <p>{props.infoStarterZoneFifthRuneRaceOne}</p>
                </section>
              ) : (
                ""
              )}
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
          {toggleShowCities ? (
            <div>
              <p>{props.infoCitiesRaceOne}</p>
              {props.infoCitiesTwoRaceOne ? (
                <section>
                  <br />
                  <br />
                  <p>{props.infoCitiesTwoRaceOne}</p>
                </section>
              ) : (
                ""
              )}
            </div>
          ) : (
            ""
          )}
          <h2 onClick={toggleShowSecondClick} style={{ cursor: "pointer" }}>
            {props.zoneTwoRaceOne}
          </h2>
          {toggleShowSecond ? (
            <div>
              <p>{props.infoSecondZoneFirstRuneRaceOne}</p>
              {props.infoSecondZoneSecondRuneRaceOne ? (
                <section>
                  <br />
                  <br />
                  <p>{props.infoSecondZoneSecondRuneRaceOne}</p>
                </section>
              ) : (
                ""
              )}
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
            {props.infoMiscZoneOne ? "Miscellaneous" : ""}
          </h2>
          {toggleShowSecret ? (
            <div>
              <p>{props.infoMiscZoneOne}</p>
              {props.infoMiscZoneTwo ? (
                <section>
                  <br />
                  <br />
                  <p>{props.infoMiscZoneTwo}</p>
                </section>
              ) : (
                ""
              )}
              {props.infoMiscZoneThree ? (
                <section>
                  <br />
                  <br />
                  <p>{props.infoMiscZoneThree}</p>
                </section>
              ) : (
                ""
              )}
              {props.infoMiscZoneFour ? (
                <section>
                  <br />
                  <br />
                  <p>{props.infoMiscZoneFour}</p>
                </section>
              ) : (
                ""
              )}
              {props.infoMiscZoneFiveRaceOne ? (
                <section>
                  <br />
                  <br />
                  <p>{props.infoMiscZoneFiveRaceOne}</p>
                </section>
              ) : (
                ""
              )}
              {props.infoMiscZoneSixRaceOne ? (
                <section>
                  <br />
                  <br />
                  <p>{props.infoMiscZoneSixRaceOne}</p>
                </section>
              ) : (
                ""
              )}
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
              {props.infoStarterZoneSecondRuneRaceTwo ? (
                <section>
                  <br />
                  <br />
                  <p>{props.infoStarterZoneSecondRuneRaceTwo}</p>
                </section>
              ) : (
                ""
              )}
              {props.infoStarterZoneThirdRuneRaceTwo ? (
                <section>
                  <br />
                  <br />
                  <p>{props.infoStarterZoneThirdRuneRaceTwo}</p>
                </section>
              ) : (
                ""
              )}
              {props.infoStarterZoneFourthRuneRaceTwo ? (
                <section>
                  <br />
                  <br />
                  <p>{props.infoStarterZoneFourthRuneRaceTwo}</p>
                </section>
              ) : (
                ""
              )}
              {props.infoStarterZoneFifthRuneRaceTwo ? (
                <section>
                  <br />
                  <br />
                  <p>{props.infoStarterZoneFifthRuneRaceTwo}</p>
                </section>
              ) : (
                ""
              )}
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
          {toggleShowCities ? (
            <div>
              <p>{props.infoCitiesRaceTwo}</p>
              {props.infoCitiesTwoRaceTwo ? (
                <section>
                  <br />
                  <br />
                  <p>{props.infoCitiesTwoRaceTwo}</p>
                </section>
              ) : (
                ""
              )}
            </div>
          ) : (
            ""
          )}
          <h2 onClick={toggleShowSecondClick} style={{ cursor: "pointer" }}>
            {props.zoneTwoRaceTwo}
          </h2>
          {toggleShowSecond ? (
            <div>
              <p>{props.infoSecondZoneFirstRuneRaceTwo}</p>
              {props.infoSecondZoneSecondRuneRaceTwo ? (
                <section>
                  <br />
                  <br />
                  <p>{props.infoSecondZoneSecondRuneRaceTwo}</p>
                </section>
              ) : (
                ""
              )}
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
            {props.infoMiscZoneOne ? "Miscellaneous" : ""}
          </h2>
          {toggleShowSecret ? (
            <div>
              <p>{props.infoMiscZoneOne}</p>
              {props.infoMiscZoneTwo ? (
                <section>
                  <br />
                  <br />
                  <p>{props.infoMiscZoneTwo}</p>
                </section>
              ) : (
                ""
              )}
              {props.infoMiscZoneThree ? (
                <section>
                  <br />
                  <br />
                  <p>{props.infoMiscZoneThree}</p>
                </section>
              ) : (
                ""
              )}
              {props.infoMiscZoneFour ? (
                <section>
                  <br />
                  <br />
                  <p>{props.infoMiscZoneFour}</p>
                </section>
              ) : (
                ""
              )}
              {props.infoMiscZoneFiveRaceTwo ? (
                <section>
                  <br />
                  <br />
                  <p>{props.infoMiscZoneFiveRaceTwo}</p>
                </section>
              ) : (
                ""
              )}
              {props.infoMiscZoneSixRaceTwo ? (
                <section>
                  <br />
                  <br />
                  <p>{props.infoMiscZoneSixRaceTwo}</p>
                </section>
              ) : (
                ""
              )}
            </div>
          ) : (
            ""
          )}
        </div>
      </main>
    );
  } else if (activeRace == 3) {
    return (
      <main className={styles.main}>
        <div className={styles.zoneDiv}>
          <h2 onClick={toggleShowStarterClick} style={{ cursor: "pointer" }}>
            {props.zoneOneRaceThree}
          </h2>
          {toggleShowStarter ? (
            <div>
              <p>{props.infoStarterZoneFirstRune}</p>
              {props.infoStarterZoneSecondRuneRaceThree ? (
                <section>
                  <br />
                  <br />
                  <p>{props.infoStarterZoneSecondRuneRaceThree}</p>
                </section>
              ) : (
                ""
              )}
              {props.infoStarterZoneThirdRuneRaceThree ? (
                <section>
                  <br />
                  <br />
                  <p>{props.infoStarterZoneThirdRuneRaceThree}</p>
                </section>
              ) : (
                ""
              )}
              {props.infoStarterZoneFourthRuneRaceThree ? (
                <section>
                  <br />
                  <br />
                  <p>{props.infoStarterZoneFourthRuneRaceThree}</p>
                </section>
              ) : (
                ""
              )}
              {props.infoStarterZoneFifthRuneRaceThree ? (
                <section>
                  <br />
                  <br />
                  <p>{props.infoStarterZoneFifthRuneRaceThree}</p>
                </section>
              ) : (
                ""
              )}
            </div>
          ) : (
            ""
          )}
          {props.zoneOneCityRaceThree ? (
            <h2 onClick={toggleShowCitiesClick} style={{ cursor: "pointer" }}>
              {props.zoneOneCityRaceThree}
            </h2>
          ) : (
            ""
          )}
          {toggleShowCities ? (
            <div>
              <p>{props.infoCitiesRaceThree}</p>
              {props.infoCitiesTwoRaceThree ? (
                <section>
                  <br />
                  <br />
                  <p>{props.infoCitiesTwoRaceThree}</p>
                </section>
              ) : (
                ""
              )}
            </div>
          ) : (
            ""
          )}
          <h2 onClick={toggleShowSecondClick} style={{ cursor: "pointer" }}>
            {props.zoneTwoRaceThree}
          </h2>
          {toggleShowSecond ? (
            <div>
              <p>{props.infoSecondZoneFirstRuneRaceThree}</p>
              {props.infoSecondZoneSecondRuneRaceThree ? (
                <section>
                  <br />
                  <br />
                  <p>{props.infoSecondZoneSecondRuneRaceThree}</p>
                </section>
              ) : (
                ""
              )}
            </div>
          ) : (
            ""
          )}
          {props.zoneThreeRaceThree ? (
            <h2 onClick={toggleShowThirdClick} style={{ cursor: "pointer" }}>
              {props.zoneThreeRaceThree}
            </h2>
          ) : (
            ""
          )}
          {toggleShowThird ? <p>{props.infoThirdZone}</p> : ""}
          <h2 onClick={toggleShowSecretClick} style={{ cursor: "pointer" }}>
            {props.infoMiscZoneOne ? "Miscellaneous" : ""}
          </h2>
          {toggleShowSecret ? (
            <div>
              <p>{props.infoMiscZoneOne}</p>
              {props.infoMiscZoneTwo ? (
                <section>
                  <br />
                  <br />
                  <p>{props.infoMiscZoneTwo}</p>
                </section>
              ) : (
                ""
              )}
              {props.infoMiscZoneThree ? (
                <section>
                  <br />
                  <br />
                  <p>{props.infoMiscZoneThree}</p>
                </section>
              ) : (
                ""
              )}
              {props.infoMiscZoneFour ? (
                <section>
                  <br />
                  <br />
                  <p>{props.infoMiscZoneFour}</p>
                </section>
              ) : (
                ""
              )}
              {props.infoMiscZoneFiveRaceThree ? (
                <section>
                  <br />
                  <br />
                  <p>{props.infoMiscZoneFiveRaceThree}</p>
                </section>
              ) : (
                ""
              )}
              {props.infoMiscZoneSixRaceThree ? (
                <section>
                  <br />
                  <br />
                  <p>{props.infoMiscZoneSixRaceThree}</p>
                </section>
              ) : (
                ""
              )}
            </div>
          ) : (
            ""
          )}
        </div>
      </main>
    );
  } else if (activeRace == 4) {
    return (
      <main className={styles.main}>
        <div className={styles.zoneDiv}>
          <h2 onClick={toggleShowStarterClick} style={{ cursor: "pointer" }}>
            {props.zoneOneRaceFour}
          </h2>
          {toggleShowStarter ? (
            <div>
              <p>{props.infoStarterZoneFirstRune}</p>
              {props.infoStarterZoneSecondRuneRaceFour ? (
                <section>
                  <br />
                  <br />
                  <p>{props.infoStarterZoneSecondRuneRaceFour}</p>
                </section>
              ) : (
                ""
              )}
              {props.infoStarterZoneThirdRuneRaceFour ? (
                <section>
                  <br />
                  <br />
                  <p>{props.infoStarterZoneThirdRuneRaceFour}</p>
                </section>
              ) : (
                ""
              )}
              {props.infoStarterZoneFourthRuneRaceFour ? (
                <section>
                  <br />
                  <br />
                  <p>{props.infoStarterZoneFourthRuneRaceFour}</p>
                </section>
              ) : (
                ""
              )}
              {props.infoStarterZoneFifthRuneRaceFour ? (
                <section>
                  <br />
                  <br />
                  <p>{props.infoStarterZoneFifthRuneRaceFour}</p>
                </section>
              ) : (
                ""
              )}
            </div>
          ) : (
            ""
          )}
          {props.zoneOneCityRaceFour ? (
            <h2 onClick={toggleShowCitiesClick} style={{ cursor: "pointer" }}>
              {props.zoneOneCityRaceFour}
            </h2>
          ) : (
            ""
          )}
          {toggleShowCities ? (
            <div>
              <p>{props.infoCitiesRaceFour}</p>
              {props.infoCitiesTwoRaceFour ? (
                <section>
                  <br />
                  <br />
                  <p>{props.infoCitiesTwoRaceFour}</p>
                </section>
              ) : (
                ""
              )}
            </div>
          ) : (
            ""
          )}
          <h2 onClick={toggleShowSecondClick} style={{ cursor: "pointer" }}>
            {props.zoneTwoRaceFour}
          </h2>
          {toggleShowSecond ? (
            <div>
              <p>{props.infoSecondZoneFirstRuneRaceFour}</p>
              {props.infoSecondZoneSecondRuneRaceFour ? (
                <section>
                  <br />
                  <br />
                  <p>{props.infoSecondZoneSecondRuneRaceFour}</p>
                </section>
              ) : (
                ""
              )}
            </div>
          ) : (
            ""
          )}
          {props.zoneThreeRaceFour ? (
            <h2 onClick={toggleShowThirdClick} style={{ cursor: "pointer" }}>
              {props.zoneThreeRaceFour}
            </h2>
          ) : (
            ""
          )}
          {toggleShowThird ? <p>{props.infoThirdZone}</p> : ""}
          <h2 onClick={toggleShowSecretClick} style={{ cursor: "pointer" }}>
            {props.infoMiscZoneOne ? "Miscellaneous" : ""}
          </h2>
          {toggleShowSecret ? (
            <div>
              <p>{props.infoMiscZoneOne}</p>
              {props.infoMiscZoneTwo ? (
                <section>
                  <br />
                  <br />
                  <p>{props.infoMiscZoneTwo}</p>
                </section>
              ) : (
                ""
              )}
              {props.infoMiscZoneThree ? (
                <section>
                  <br />
                  <br />
                  <p>{props.infoMiscZoneThree}</p>
                </section>
              ) : (
                ""
              )}
              {props.infoMiscZoneFour ? (
                <section>
                  <br />
                  <br />
                  <p>{props.infoMiscZoneFour}</p>
                </section>
              ) : (
                ""
              )}
              {props.infoMiscZoneFiveRaceFour ? (
                <section>
                  <br />
                  <br />
                  <p>{props.infoMiscZoneFiveRaceFour}</p>
                </section>
              ) : (
                ""
              )}
              {props.infoMiscZoneSixRaceFour ? (
                <section>
                  <br />
                  <br />
                  <p>{props.infoMiscZoneSixRaceFour}</p>
                </section>
              ) : (
                ""
              )}
            </div>
          ) : (
            ""
          )}
        </div>
      </main>
    );
  } else if (activeRace == 5) {
    return (
      <main className={styles.main}>
        <div className={styles.zoneDiv}>
          <h2 onClick={toggleShowStarterClick} style={{ cursor: "pointer" }}>
            {props.zoneOneRaceFive}
          </h2>
          {toggleShowStarter ? (
            <div>
              <p>{props.infoStarterZoneFirstRune}</p>
              {props.infoStarterZoneSecondRuneRaceFive ? (
                <section>
                  <br />
                  <br />
                  <p>{props.infoStarterZoneSecondRuneRaceFive}</p>
                </section>
              ) : (
                ""
              )}
              {props.infoStarterZoneThirdRuneRaceFive ? (
                <section>
                  <br />
                  <br />
                  <p>{props.infoStarterZoneThirdRuneRaceFive}</p>
                </section>
              ) : (
                ""
              )}
              {props.infoStarterZoneFourthRuneRaceFive ? (
                <section>
                  <br />
                  <br />
                  <p>{props.infoStarterZoneFourthRuneRaceFive}</p>
                </section>
              ) : (
                ""
              )}
              {props.infoStarterZoneFifthRuneRaceFive ? (
                <section>
                  <br />
                  <br />
                  <p>{props.infoStarterZoneFifthRuneRaceFive}</p>
                </section>
              ) : (
                ""
              )}
            </div>
          ) : (
            ""
          )}
          {props.zoneOneCityRaceFive ? (
            <h2 onClick={toggleShowCitiesClick} style={{ cursor: "pointer" }}>
              {props.zoneOneCityRaceFive}
            </h2>
          ) : (
            ""
          )}
          {toggleShowCities ? (
            <div>
              <p>{props.infoCitiesRaceFive}</p>
              {props.infoCitiesTwoRaceFive ? (
                <section>
                  <br />
                  <br />
                  <p>{props.infoCitiesTwoRaceFive}</p>
                </section>
              ) : (
                ""
              )}
            </div>
          ) : (
            ""
          )}
          <h2 onClick={toggleShowSecondClick} style={{ cursor: "pointer" }}>
            {props.zoneTwoRaceFive}
          </h2>
          {toggleShowSecond ? (
            <div>
              <p>{props.infoSecondZoneFirstRuneRaceFive}</p>
              {props.infoSecondZoneSecondRuneRaceFive ? (
                <section>
                  <br />
                  <br />
                  <p>{props.infoSecondZoneSecondRuneRaceFive}</p>
                </section>
              ) : (
                ""
              )}
            </div>
          ) : (
            ""
          )}
          {props.zoneThreeRaceFive ? (
            <h2 onClick={toggleShowThirdClick} style={{ cursor: "pointer" }}>
              {props.zoneThreeRaceFive}
            </h2>
          ) : (
            ""
          )}
          {toggleShowThird ? <p>{props.infoThirdZone}</p> : ""}
          <h2 onClick={toggleShowSecretClick} style={{ cursor: "pointer" }}>
            {props.infoMiscZoneOne ? "Miscellaneous" : ""}
          </h2>
          {toggleShowSecret ? (
            <div>
              <p>{props.infoMiscZoneOne}</p>
              {props.infoMiscZoneTwo ? (
                <section>
                  <br />
                  <br />
                  <p>{props.infoMiscZoneTwo}</p>
                </section>
              ) : (
                ""
              )}
              {props.infoMiscZoneThree ? (
                <section>
                  <br />
                  <br />
                  <p>{props.infoMiscZoneThree}</p>
                </section>
              ) : (
                ""
              )}
              {props.infoMiscZoneFour ? (
                <section>
                  <br />
                  <br />
                  <p>{props.infoMiscZoneFour}</p>
                </section>
              ) : (
                ""
              )}
              {props.infoMiscZoneFiveRaceFive ? (
                <section>
                  <br />
                  <br />
                  <p>{props.infoMiscZoneFiveRaceFive}</p>
                </section>
              ) : (
                ""
              )}
              {props.infoMiscZoneSixRaceFive ? (
                <section>
                  <br />
                  <br />
                  <p>{props.infoMiscZoneSixRaceFive}</p>
                </section>
              ) : (
                ""
              )}
            </div>
          ) : (
            ""
          )}
        </div>
      </main>
    );
  } else if (activeRace == 6) {
    return (
      <main className={styles.main}>
        <div className={styles.zoneDiv}>
          <h2 onClick={toggleShowStarterClick} style={{ cursor: "pointer" }}>
            {props.zoneOneRaceSix}
          </h2>
          {toggleShowStarter ? (
            <div>
              <p>{props.infoStarterZoneFirstRune}</p>
              {props.infoStarterZoneSecondRuneRaceSix ? (
                <section>
                  <br />
                  <br />
                  <p>{props.infoStarterZoneSecondRuneRaceSix}</p>
                </section>
              ) : (
                ""
              )}
              {props.infoStarterZoneThirdRuneRaceSix ? (
                <section>
                  <br />
                  <br />
                  <p>{props.infoStarterZoneThirdRuneRaceSix}</p>
                </section>
              ) : (
                ""
              )}
              {props.infoStarterZoneFourthRuneRaceSix ? (
                <section>
                  <br />
                  <br />
                  <p>{props.infoStarterZoneFourthRuneRaceSix}</p>
                </section>
              ) : (
                ""
              )}
              {props.infoStarterZoneFifthRuneRaceSix ? (
                <section>
                  <br />
                  <br />
                  <p>{props.infoStarterZoneFifthRuneRaceSix}</p>
                </section>
              ) : (
                ""
              )}
            </div>
          ) : (
            ""
          )}
          {props.zoneOneCityRaceSix ? (
            <h2 onClick={toggleShowCitiesClick} style={{ cursor: "pointer" }}>
              {props.zoneOneCityRaceSix}
            </h2>
          ) : (
            ""
          )}
          {toggleShowCities ? (
            <div>
              <p>{props.infoCitiesRaceSix}</p>
              {props.infoCitiesTwoRaceSix ? (
                <section>
                  <br />
                  <br />
                  <p>{props.infoCitiesTwoRaceSix}</p>
                </section>
              ) : (
                ""
              )}
            </div>
          ) : (
            ""
          )}
          <h2 onClick={toggleShowSecondClick} style={{ cursor: "pointer" }}>
            {props.zoneTwoRaceSix}
          </h2>
          {toggleShowSecond ? (
            <div>
              <p>{props.infoSecondZoneFirstRuneRaceSix}</p>
              {props.infoSecondZoneSecondRuneRaceSix ? (
                <section>
                  <br />
                  <br />
                  <p>{props.infoSecondZoneSecondRuneRaceSix}</p>
                </section>
              ) : (
                ""
              )}
            </div>
          ) : (
            ""
          )}
          {props.zoneThreeRaceSix ? (
            <h2 onClick={toggleShowThirdClick} style={{ cursor: "pointer" }}>
              {props.zoneThreeRaceSix}
            </h2>
          ) : (
            ""
          )}
          {toggleShowThird ? <p>{props.infoThirdZone}</p> : ""}
          <h2 onClick={toggleShowSecretClick} style={{ cursor: "pointer" }}>
            {props.infoMiscZoneOne ? "Miscellaneous" : ""}
          </h2>
          {toggleShowSecret ? (
            <div>
              <p>{props.infoMiscZoneOne}</p>
              {props.infoMiscZoneTwo ? (
                <section>
                  <br />
                  <br />
                  <p>{props.infoMiscZoneTwo}</p>
                </section>
              ) : (
                ""
              )}
              {props.infoMiscZoneThree ? (
                <section>
                  <br />
                  <br />
                  <p>{props.infoMiscZoneThree}</p>
                </section>
              ) : (
                ""
              )}
              {props.infoMiscZoneFour ? (
                <section>
                  <br />
                  <br />
                  <p>{props.infoMiscZoneFour}</p>
                </section>
              ) : (
                ""
              )}
              {props.infoMiscZoneFiveRaceSix ? (
                <section>
                  <br />
                  <br />
                  <p>{props.infoMiscZoneFiveRaceSix}</p>
                </section>
              ) : (
                ""
              )}
              {props.infoMiscZoneSixRaceSix ? (
                <section>
                  <br />
                  <br />
                  <p>{props.infoMiscZoneSixRaceSix}</p>
                </section>
              ) : (
                ""
              )}
            </div>
          ) : (
            ""
          )}
        </div>
      </main>
    );
  } else if (activeRace == 7) {
    return (
      <main className={styles.main}>
        <div className={styles.zoneDiv}>
          <h2 onClick={toggleShowStarterClick} style={{ cursor: "pointer" }}>
            {props.zoneOneRaceSeven}
          </h2>
          {toggleShowStarter ? (
            <div>
              <p>{props.infoStarterZoneFirstRune}</p>
              {props.infoStarterZoneSecondRuneRaceSeven ? (
                <section>
                  <br />
                  <br />
                  <p>{props.infoStarterZoneSecondRuneRaceSeven}</p>
                </section>
              ) : (
                ""
              )}
              {props.infoStarterZoneThirdRuneRaceSeven ? (
                <section>
                  <br />
                  <br />
                  <p>{props.infoStarterZoneThirdRuneRaceSeven}</p>
                </section>
              ) : (
                ""
              )}
              {props.infoStarterZoneFourthRuneRaceSeven ? (
                <section>
                  <br />
                  <br />
                  <p>{props.infoStarterZoneFourthRuneRaceSeven}</p>
                </section>
              ) : (
                ""
              )}
              {props.infoStarterZoneFifthRuneRaceSeven ? (
                <section>
                  <br />
                  <br />
                  <p>{props.infoStarterZoneFifthRuneRaceSeven}</p>
                </section>
              ) : (
                ""
              )}
            </div>
          ) : (
            ""
          )}
          {props.zoneOneCityRaceSeven ? (
            <h2 onClick={toggleShowCitiesClick} style={{ cursor: "pointer" }}>
              {props.zoneOneCityRaceSeven}
            </h2>
          ) : (
            ""
          )}
          {toggleShowCities ? (
            <div>
              <p>{props.infoCitiesRaceSeven}</p>
              {props.infoCitiesTwoRaceSeven ? (
                <section>
                  <br />
                  <br />
                  <p>{props.infoCitiesTwoRaceSeven}</p>
                </section>
              ) : (
                ""
              )}
            </div>
          ) : (
            ""
          )}
          <h2 onClick={toggleShowSecondClick} style={{ cursor: "pointer" }}>
            {props.zoneTwoRaceSeven}
          </h2>
          {toggleShowSecond ? (
            <div>
              <p>{props.infoSecondZoneFirstRuneRaceSeven}</p>
              {props.infoSecondZoneSecondRuneRaceSeven ? (
                <section>
                  <br />
                  <br />
                  <p>{props.infoSecondZoneSecondRuneRaceSeven}</p>
                </section>
              ) : (
                ""
              )}
            </div>
          ) : (
            ""
          )}
          {props.zoneThreeRaceSeven ? (
            <h2 onClick={toggleShowThirdClick} style={{ cursor: "pointer" }}>
              {props.zoneThreeRaceSeven}
            </h2>
          ) : (
            ""
          )}
          {toggleShowThird ? <p>{props.infoThirdZone}</p> : ""}
          <h2 onClick={toggleShowSecretClick} style={{ cursor: "pointer" }}>
            {props.infoMiscZoneOne ? "Miscellaneous" : ""}
          </h2>
          {toggleShowSecret ? (
            <div>
              <p>{props.infoMiscZoneOne}</p>
              {props.infoMiscZoneTwo ? (
                <section>
                  <br />
                  <br />
                  <p>{props.infoMiscZoneTwo}</p>
                </section>
              ) : (
                ""
              )}
              {props.infoMiscZoneThree ? (
                <section>
                  <br />
                  <br />
                  <p>{props.infoMiscZoneThree}</p>
                </section>
              ) : (
                ""
              )}
              {props.infoMiscZoneFour ? (
                <section>
                  <br />
                  <br />
                  <p>{props.infoMiscZoneFour}</p>
                </section>
              ) : (
                ""
              )}
              {props.infoMiscZoneFiveRaceSeven ? (
                <section>
                  <br />
                  <br />
                  <p>{props.infoMiscZoneFiveRaceSeven}</p>
                </section>
              ) : (
                ""
              )}
              {props.infoMiscZoneSixRaceSeven ? (
                <section>
                  <br />
                  <br />
                  <p>{props.infoMiscZoneSixRaceSeven}</p>
                </section>
              ) : (
                ""
              )}
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
