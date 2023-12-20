"use client";

import Image from "next/image";
import styles from "./races.module.scss";
import { useRaceContext } from "../context/raceContext";

const Races = (props: any) => {
  const { activeRace, setActiveRace } = useRaceContext();

  const checkImageOne = props.raceOneImage;
  const checkImageTwo = props.raceTwoImage;
  const checkImageThree = props.raceThreeImage;
  const checkImageFour = props.raceFourImage;

  return (
    <main className={styles.main}>
      <div className={styles.racesDiv}>
        <h3>Races: </h3>
        {checkImageOne ? (
          activeRace == 1 ? (
            <Image
              src={props.raceOneImage}
              alt={props.raceOne}
              width={40}
              height={40}
              className={styles.image}
            />
          ) : (
            <Image
              src={props.raceOneImage}
              alt={props.raceOne}
              width={40}
              height={40}
              onClick={() => {
                setActiveRace(1);
              }}
              style={{ cursor: "pointer" }}
            />
          )
        ) : (
          ""
        )}
        {checkImageTwo ? (
          activeRace == 2 ? (
            <Image
              src={props.raceTwoImage}
              alt={props.raceTwo}
              width={40}
              height={40}
              className={styles.image}
            />
          ) : (
            <Image
              src={props.raceTwoImage}
              alt={props.raceTwo}
              width={40}
              height={40}
              onClick={() => {
                setActiveRace(2);
              }}
              style={{ cursor: "pointer" }}
            />
          )
        ) : (
          ""
        )}
        {checkImageThree ? (
          activeRace == 3 ? (
            <Image
              src={props.raceThreeImage}
              alt={props.raceThree}
              width={40}
              height={40}
              className={styles.image}
            />
          ) : (
            <Image
              src={props.raceThreeImage}
              alt={props.raceThree}
              width={40}
              height={40}
              onClick={() => {
                setActiveRace(3);
              }}
              style={{ cursor: "pointer" }}
            />
          )
        ) : (
          ""
        )}
        {checkImageFour ? (
          activeRace == 4 ? (
            <Image
              src={props.raceFourImage}
              alt={props.raceFour}
              width={40}
              height={40}
              className={styles.image}
            />
          ) : (
            <Image
              src={props.raceFourImage}
              alt={props.raceFour}
              width={40}
              height={40}
              onClick={() => {
                setActiveRace(4);
              }}
              style={{ cursor: "pointer" }}
            />
          )
        ) : (
          ""
        )}
      </div>
    </main>
  );
};

export default Races;
