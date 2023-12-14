"use client";

import styles from "./zone.module.scss";
import { useEffect, useState } from "react";

const Zone = (props: any) => {
  const [toggleShowStarter, setToggleShowStarter] = useState(false);
  const [toggleShowCities, setToggleShowCities] = useState(false);
  const [toggleShowSecond, setToggleShowSecond] = useState(false);
  const [toggleShowThird, setToggleShowThird] = useState(false);
  const [toggleShowSecret, setToggleShowSecret] = useState(false);

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

  return (
    <main className={styles.main}>
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
};

export default Zone;
