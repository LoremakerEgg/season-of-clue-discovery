"use client";
import { useState } from "react";
import styles from "./runes.module.scss";
import Image from "next/image";
import { useRaceContext } from "../context/raceContext";

const Runes = (props: any) => {
  const [rumorOne, setRumorOne] = useState(false);
  const [rumorTwo, setRumorTwo] = useState(false);
  const [rumorThree, setRumorThree] = useState(false);
  const [rumorFour, setRumorFour] = useState(false);
  const [rumorFive, setRumorFive] = useState(false);
  const [rumorSix, setRumorSix] = useState(false);
  const [rumorSeven, setRumorSeven] = useState(false);
  const [rumorEight, setRumorEight] = useState(false);
  const [rumorNine, setRumorNine] = useState(false);
  const [rumorTen, setRumorTen] = useState(false);
  const [rumorEleven, setRumorEleven] = useState(false);
  const [rumorTwelve, setRumorTwelve] = useState(false);

  const { activeRace } = useRaceContext();

  if (activeRace == 1) {
    return (
      <main className={styles.main}>
        <div className={styles.runesDiv}>
          <div className={styles.titleDiv}>
            <Image
              src={props.runeOneImage}
              width={40}
              height={40}
              alt={props.runeOneAlt}
            />
            <h2
              onClick={() => {
                setRumorOne(!rumorOne);
              }}
              style={{ cursor: "pointer" }}
            >
              {props.runeOne}
            </h2>
          </div>
          {rumorOne ? <p>{props.runeOneRumorRaceOne} </p> : ""}
          <div className={styles.titleDiv}>
            <Image
              src={props.runeTwoImage}
              width={40}
              height={40}
              alt={props.runeTwoAlt}
            />
            <h2
              onClick={() => {
                setRumorTwo(!rumorTwo);
              }}
              style={{ cursor: "pointer" }}
            >
              {props.runeTwo}
            </h2>
          </div>
          {rumorTwo ? <p>{props.runeTwoRumorRaceOne} </p> : ""}
          <div className={styles.titleDiv}>
            <Image
              src={props.runeThreeImage}
              width={40}
              height={40}
              alt={props.runeThreeAlt}
            />
            <h2
              onClick={() => {
                setRumorThree(!rumorThree);
              }}
              style={{ cursor: "pointer" }}
            >
              {props.runeThree}
            </h2>
          </div>
          {rumorThree ? <p>{props.runeThreeRumorRaceOne} </p> : ""}
          <div className={styles.titleDiv}>
            <Image
              src={props.runeFourImage}
              width={40}
              height={40}
              alt={props.runeFourAlt}
            />
            <h2
              onClick={() => {
                setRumorFour(!rumorFour);
              }}
              style={{ cursor: "pointer" }}
            >
              {props.runeFour}
            </h2>
          </div>
          {rumorFour ? <p>{props.runeFourRumorRaceOne} </p> : ""}
          <div className={styles.titleDiv}>
            <Image
              src={props.runeFiveImage}
              width={40}
              height={40}
              alt={props.runeFiveAlt}
            />
            <h2
              onClick={() => {
                setRumorFive(!rumorFive);
              }}
              style={{ cursor: "pointer" }}
            >
              {props.runeFive}
            </h2>
          </div>
          {rumorFive ? <p>{props.runeFiveRumorRaceOne} </p> : ""}
          <div className={styles.titleDiv}>
            <Image
              src={props.runeSixImage}
              width={40}
              height={40}
              alt={props.runeSixAlt}
            />
            <h2
              onClick={() => {
                setRumorSix(!rumorSix);
              }}
              style={{ cursor: "pointer" }}
            >
              {props.runeSix}
            </h2>
          </div>
          {rumorSix ? <p>{props.runeSixRumorRaceOne} </p> : ""}
          <div className={styles.titleDiv}>
            <Image
              src={props.runeSevenImage}
              width={40}
              height={40}
              alt={props.runeSevenAlt}
            />
            <h2
              onClick={() => {
                setRumorSeven(!rumorSeven);
              }}
              style={{ cursor: "pointer" }}
            >
              {props.runeSeven}
            </h2>
          </div>
          {rumorSeven ? <p>{props.runeSevenRumorRaceOne} </p> : ""}
          <div className={styles.titleDiv}>
            <Image
              src={props.runeEightImage}
              width={40}
              height={40}
              alt={props.runeEightAlt}
            />
            <h2
              onClick={() => {
                setRumorEight(!rumorEight);
              }}
              style={{ cursor: "pointer" }}
            >
              {props.runeEight}
            </h2>
          </div>
          {rumorEight ? <p>{props.runeEightRumorRaceOne} </p> : ""}
          <div className={styles.titleDiv}>
            <Image
              src={props.runeNineImage}
              width={40}
              height={40}
              alt={props.runeNineAlt}
            />
            <h2
              onClick={() => {
                setRumorNine(!rumorNine);
              }}
              style={{ cursor: "pointer" }}
            >
              {props.runeNine}
            </h2>
          </div>
          {rumorNine ? <p>{props.runeNineRumorRaceOne} </p> : ""}
          <div className={styles.titleDiv}>
            <Image
              src={props.runeTenImage}
              width={40}
              height={40}
              alt={props.runeTenAlt}
            />
            <h2
              onClick={() => {
                setRumorTen(!rumorTen);
              }}
              style={{ cursor: "pointer" }}
            >
              {props.runeTen}
            </h2>
          </div>
          {rumorTen ? <p>{props.runeTenRumorRaceOne} </p> : ""}
          <div className={styles.titleDiv}>
            <Image
              src={props.runeElevenImage}
              width={40}
              height={40}
              alt={props.runeElevenAlt}
            />
            <h2
              onClick={() => {
                setRumorEleven(!rumorEleven);
              }}
              style={{ cursor: "pointer" }}
            >
              {props.runeEleven}
            </h2>
          </div>
          {rumorEleven ? <p>{props.runeElevenRumorRaceOne} </p> : ""}
          <div className={styles.titleDiv}>
            <Image
              src={props.runeTwelveImage}
              width={40}
              height={40}
              alt={props.runeTwelveAlt}
            />
            <h2
              onClick={() => {
                setRumorTwelve(!rumorTwelve);
              }}
              style={{ cursor: "pointer" }}
            >
              {props.runeTwelve}
            </h2>
          </div>
          {rumorTwelve ? <p>{props.runeTwelveRumorRaceOne} </p> : ""}
        </div>
      </main>
    );
  } else if (activeRace == 2) {
    return (
      <main className={styles.main}>
        <div className={styles.runesDiv}>
          <div className={styles.titleDiv}>
            <Image
              src={props.runeOneImage}
              width={40}
              height={40}
              alt={props.runeOneAlt}
            />
            <h2
              onClick={() => {
                setRumorOne(!rumorOne);
              }}
              style={{ cursor: "pointer" }}
            >
              {props.runeOne}
            </h2>
          </div>
          {rumorOne ? <p>{props.runeOneRumorRaceTwo} </p> : ""}
          <div className={styles.titleDiv}>
            <Image
              src={props.runeTwoImage}
              width={40}
              height={40}
              alt={props.runeTwoAlt}
            />
            <h2
              onClick={() => {
                setRumorTwo(!rumorTwo);
              }}
              style={{ cursor: "pointer" }}
            >
              {props.runeTwo}
            </h2>
          </div>
          {rumorTwo ? <p>{props.runeTwoRumorRaceTwo} </p> : ""}
          <div className={styles.titleDiv}>
            <Image
              src={props.runeThreeImage}
              width={40}
              height={40}
              alt={props.runeThreeAlt}
            />
            <h2
              onClick={() => {
                setRumorThree(!rumorThree);
              }}
              style={{ cursor: "pointer" }}
            >
              {props.runeThree}
            </h2>
          </div>
          {rumorThree ? <p>{props.runeThreeRumorRaceTwo} </p> : ""}
          <div className={styles.titleDiv}>
            <Image
              src={props.runeFourImage}
              width={40}
              height={40}
              alt={props.runeFourAlt}
            />
            <h2
              onClick={() => {
                setRumorFour(!rumorFour);
              }}
              style={{ cursor: "pointer" }}
            >
              {props.runeFour}
            </h2>
          </div>
          {rumorFour ? <p>{props.runeFourRumorRaceTwo} </p> : ""}
          <div className={styles.titleDiv}>
            <Image
              src={props.runeFiveImage}
              width={40}
              height={40}
              alt={props.runeFiveAlt}
            />
            <h2
              onClick={() => {
                setRumorFive(!rumorFive);
              }}
              style={{ cursor: "pointer" }}
            >
              {props.runeFive}
            </h2>
          </div>
          {rumorFive ? <p>{props.runeFiveRumorRaceTwo} </p> : ""}
          <div className={styles.titleDiv}>
            <Image
              src={props.runeSixImage}
              width={40}
              height={40}
              alt={props.runeSixAlt}
            />
            <h2
              onClick={() => {
                setRumorSix(!rumorSix);
              }}
              style={{ cursor: "pointer" }}
            >
              {props.runeSix}
            </h2>
          </div>
          {rumorSix ? <p>{props.runeSixRumorRaceTwo} </p> : ""}
          <div className={styles.titleDiv}>
            <Image
              src={props.runeSevenImage}
              width={40}
              height={40}
              alt={props.runeSevenAlt}
            />
            <h2
              onClick={() => {
                setRumorSeven(!rumorSeven);
              }}
              style={{ cursor: "pointer" }}
            >
              {props.runeSeven}
            </h2>
          </div>
          {rumorSeven ? <p>{props.runeSevenRumorRaceTwo} </p> : ""}
          <div className={styles.titleDiv}>
            <Image
              src={props.runeEightImage}
              width={40}
              height={40}
              alt={props.runeEightAlt}
            />
            <h2
              onClick={() => {
                setRumorEight(!rumorEight);
              }}
              style={{ cursor: "pointer" }}
            >
              {props.runeEight}
            </h2>
          </div>
          {rumorEight ? <p>{props.runeEightRumorRaceTwo} </p> : ""}
          <div className={styles.titleDiv}>
            <Image
              src={props.runeNineImage}
              width={40}
              height={40}
              alt={props.runeNineAlt}
            />
            <h2
              onClick={() => {
                setRumorNine(!rumorNine);
              }}
              style={{ cursor: "pointer" }}
            >
              {props.runeNine}
            </h2>
          </div>
          {rumorNine ? <p>{props.runeNineRumorRaceTwo} </p> : ""}
          <div className={styles.titleDiv}>
            <Image
              src={props.runeTenImage}
              width={40}
              height={40}
              alt={props.runeTenAlt}
            />
            <h2
              onClick={() => {
                setRumorTen(!rumorTen);
              }}
              style={{ cursor: "pointer" }}
            >
              {props.runeTen}
            </h2>
          </div>
          {rumorTen ? <p>{props.runeTenRumorRaceTwo} </p> : ""}
          <div className={styles.titleDiv}>
            <Image
              src={props.runeElevenImage}
              width={40}
              height={40}
              alt={props.runeElevenAlt}
            />
            <h2
              onClick={() => {
                setRumorEleven(!rumorEleven);
              }}
              style={{ cursor: "pointer" }}
            >
              {props.runeEleven}
            </h2>
          </div>
          {rumorEleven ? <p>{props.runeElevenRumorRaceTwo} </p> : ""}
          <div className={styles.titleDiv}>
            <Image
              src={props.runeTwelveImage}
              width={40}
              height={40}
              alt={props.runeTwelveAlt}
            />
            <h2
              onClick={() => {
                setRumorTwelve(!rumorTwelve);
              }}
              style={{ cursor: "pointer" }}
            >
              {props.runeTwelve}
            </h2>
          </div>
          {rumorTwelve ? <p>{props.runeTwelveRumorRaceTwo} </p> : ""}
        </div>
      </main>
    );
  } else if (activeRace == 3) {
    return (
      <main className={styles.main}>
        <div className={styles.runesDiv}>
          <div className={styles.titleDiv}>
            <Image
              src={props.runeOneImage}
              width={40}
              height={40}
              alt={props.runeOneAlt}
            />
            <h2
              onClick={() => {
                setRumorOne(!rumorOne);
              }}
              style={{ cursor: "pointer" }}
            >
              {props.runeOne}
            </h2>
          </div>
          {rumorOne ? <p>{props.runeOneRumorRaceThree} </p> : ""}
          <div className={styles.titleDiv}>
            <Image
              src={props.runeTwoImage}
              width={40}
              height={40}
              alt={props.runeTwoAlt}
            />
            <h2
              onClick={() => {
                setRumorTwo(!rumorTwo);
              }}
              style={{ cursor: "pointer" }}
            >
              {props.runeTwo}
            </h2>
          </div>
          {rumorTwo ? <p>{props.runeTwoRumorRaceThree} </p> : ""}
          <div className={styles.titleDiv}>
            <Image
              src={props.runeThreeImage}
              width={40}
              height={40}
              alt={props.runeThreeAlt}
            />
            <h2
              onClick={() => {
                setRumorThree(!rumorThree);
              }}
              style={{ cursor: "pointer" }}
            >
              {props.runeThree}
            </h2>
          </div>
          {rumorThree ? <p>{props.runeThreeRumorRaceThree} </p> : ""}
          <div className={styles.titleDiv}>
            <Image
              src={props.runeFourImage}
              width={40}
              height={40}
              alt={props.runeFourAlt}
            />
            <h2
              onClick={() => {
                setRumorFour(!rumorFour);
              }}
              style={{ cursor: "pointer" }}
            >
              {props.runeFour}
            </h2>
          </div>
          {rumorFour ? <p>{props.runeFourRumorRaceThree} </p> : ""}
          <div className={styles.titleDiv}>
            <Image
              src={props.runeFiveImage}
              width={40}
              height={40}
              alt={props.runeFiveAlt}
            />
            <h2
              onClick={() => {
                setRumorFive(!rumorFive);
              }}
              style={{ cursor: "pointer" }}
            >
              {props.runeFive}
            </h2>
          </div>
          {rumorFive ? <p>{props.runeFiveRumorRaceThree} </p> : ""}
          <div className={styles.titleDiv}>
            <Image
              src={props.runeSixImage}
              width={40}
              height={40}
              alt={props.runeSixAlt}
            />
            <h2
              onClick={() => {
                setRumorSix(!rumorSix);
              }}
              style={{ cursor: "pointer" }}
            >
              {props.runeSix}
            </h2>
          </div>
          {rumorSix ? <p>{props.runeSixRumorRaceThree} </p> : ""}
          <div className={styles.titleDiv}>
            <Image
              src={props.runeSevenImage}
              width={40}
              height={40}
              alt={props.runeSevenAlt}
            />
            <h2
              onClick={() => {
                setRumorSeven(!rumorSeven);
              }}
              style={{ cursor: "pointer" }}
            >
              {props.runeSeven}
            </h2>
          </div>
          {rumorSeven ? <p>{props.runeSevenRumorRaceThree} </p> : ""}
          <div className={styles.titleDiv}>
            <Image
              src={props.runeEightImage}
              width={40}
              height={40}
              alt={props.runeEightAlt}
            />
            <h2
              onClick={() => {
                setRumorEight(!rumorEight);
              }}
              style={{ cursor: "pointer" }}
            >
              {props.runeEight}
            </h2>
          </div>
          {rumorEight ? <p>{props.runeEightRumorRaceThree} </p> : ""}
          <div className={styles.titleDiv}>
            <Image
              src={props.runeNineImage}
              width={40}
              height={40}
              alt={props.runeNineAlt}
            />
            <h2
              onClick={() => {
                setRumorNine(!rumorNine);
              }}
              style={{ cursor: "pointer" }}
            >
              {props.runeNine}
            </h2>
          </div>
          {rumorNine ? <p>{props.runeNineRumorRaceThree} </p> : ""}
          <div className={styles.titleDiv}>
            <Image
              src={props.runeTenImage}
              width={40}
              height={40}
              alt={props.runeTenAlt}
            />
            <h2
              onClick={() => {
                setRumorTen(!rumorTen);
              }}
              style={{ cursor: "pointer" }}
            >
              {props.runeTen}
            </h2>
          </div>
          {rumorTen ? <p>{props.runeTenRumorRaceThree} </p> : ""}
          <div className={styles.titleDiv}>
            <Image
              src={props.runeElevenImage}
              width={40}
              height={40}
              alt={props.runeElevenAlt}
            />
            <h2
              onClick={() => {
                setRumorEleven(!rumorEleven);
              }}
              style={{ cursor: "pointer" }}
            >
              {props.runeEleven}
            </h2>
          </div>
          {rumorEleven ? <p>{props.runeElevenRumorRaceThree} </p> : ""}
          <div className={styles.titleDiv}>
            <Image
              src={props.runeTwelveImage}
              width={40}
              height={40}
              alt={props.runeTwelveAlt}
            />
            <h2
              onClick={() => {
                setRumorTwelve(!rumorTwelve);
              }}
              style={{ cursor: "pointer" }}
            >
              {props.runeTwelve}
            </h2>
          </div>
          {rumorTwelve ? <p>{props.runeTwelveRumorRaceThree} </p> : ""}
        </div>
      </main>
    );
  } else if (activeRace == 4) {
    return (
      <main className={styles.main}>
        <div className={styles.runesDiv}>
          <div className={styles.titleDiv}>
            <Image
              src={props.runeOneImage}
              width={40}
              height={40}
              alt={props.runeOneAlt}
            />
            <h2
              onClick={() => {
                setRumorOne(!rumorOne);
              }}
              style={{ cursor: "pointer" }}
            >
              {props.runeOne}
            </h2>
          </div>
          {rumorOne ? <p>{props.runeOneRumorRaceFour} </p> : ""}
          <div className={styles.titleDiv}>
            <Image
              src={props.runeTwoImage}
              width={40}
              height={40}
              alt={props.runeTwoAlt}
            />
            <h2
              onClick={() => {
                setRumorTwo(!rumorTwo);
              }}
              style={{ cursor: "pointer" }}
            >
              {props.runeTwo}
            </h2>
          </div>
          {rumorTwo ? <p>{props.runeTwoRumorRaceFour} </p> : ""}
          <div className={styles.titleDiv}>
            <Image
              src={props.runeThreeImage}
              width={40}
              height={40}
              alt={props.runeThreeAlt}
            />
            <h2
              onClick={() => {
                setRumorThree(!rumorThree);
              }}
              style={{ cursor: "pointer" }}
            >
              {props.runeThree}
            </h2>
          </div>
          {rumorThree ? <p>{props.runeThreeRumorRaceFour} </p> : ""}
          <div className={styles.titleDiv}>
            <Image
              src={props.runeFourImage}
              width={40}
              height={40}
              alt={props.runeFourAlt}
            />
            <h2
              onClick={() => {
                setRumorFour(!rumorFour);
              }}
              style={{ cursor: "pointer" }}
            >
              {props.runeFour}
            </h2>
          </div>
          {rumorFour ? <p>{props.runeFourRumorRaceFour} </p> : ""}
          <div className={styles.titleDiv}>
            <Image
              src={props.runeFiveImage}
              width={40}
              height={40}
              alt={props.runeFiveAlt}
            />
            <h2
              onClick={() => {
                setRumorFive(!rumorFive);
              }}
              style={{ cursor: "pointer" }}
            >
              {props.runeFive}
            </h2>
          </div>
          {rumorFive ? <p>{props.runeFiveRumorRaceFour} </p> : ""}
          <div className={styles.titleDiv}>
            <Image
              src={props.runeSixImage}
              width={40}
              height={40}
              alt={props.runeSixAlt}
            />
            <h2
              onClick={() => {
                setRumorSix(!rumorSix);
              }}
              style={{ cursor: "pointer" }}
            >
              {props.runeSix}
            </h2>
          </div>
          {rumorSix ? <p>{props.runeSixRumorRaceFour} </p> : ""}
          <div className={styles.titleDiv}>
            <Image
              src={props.runeSevenImage}
              width={40}
              height={40}
              alt={props.runeSevenAlt}
            />
            <h2
              onClick={() => {
                setRumorSeven(!rumorSeven);
              }}
              style={{ cursor: "pointer" }}
            >
              {props.runeSeven}
            </h2>
          </div>
          {rumorSeven ? <p>{props.runeSevenRumorRaceFour} </p> : ""}
          <div className={styles.titleDiv}>
            <Image
              src={props.runeEightImage}
              width={40}
              height={40}
              alt={props.runeEightAlt}
            />
            <h2
              onClick={() => {
                setRumorEight(!rumorEight);
              }}
              style={{ cursor: "pointer" }}
            >
              {props.runeEight}
            </h2>
          </div>
          {rumorEight ? <p>{props.runeEightRumorRaceFour} </p> : ""}
          <div className={styles.titleDiv}>
            <Image
              src={props.runeNineImage}
              width={40}
              height={40}
              alt={props.runeNineAlt}
            />
            <h2
              onClick={() => {
                setRumorNine(!rumorNine);
              }}
              style={{ cursor: "pointer" }}
            >
              {props.runeNine}
            </h2>
          </div>
          {rumorNine ? <p>{props.runeNineRumorRaceFour} </p> : ""}
          <div className={styles.titleDiv}>
            <Image
              src={props.runeTenImage}
              width={40}
              height={40}
              alt={props.runeTenAlt}
            />
            <h2
              onClick={() => {
                setRumorTen(!rumorTen);
              }}
              style={{ cursor: "pointer" }}
            >
              {props.runeTen}
            </h2>
          </div>
          {rumorTen ? <p>{props.runeTenRumorRaceFour} </p> : ""}
          <div className={styles.titleDiv}>
            <Image
              src={props.runeElevenImage}
              width={40}
              height={40}
              alt={props.runeElevenAlt}
            />
            <h2
              onClick={() => {
                setRumorEleven(!rumorEleven);
              }}
              style={{ cursor: "pointer" }}
            >
              {props.runeEleven}
            </h2>
          </div>
          {rumorEleven ? <p>{props.runeElevenRumorRaceFour} </p> : ""}
          <div className={styles.titleDiv}>
            <Image
              src={props.runeTwelveImage}
              width={40}
              height={40}
              alt={props.runeTwelveAlt}
            />
            <h2
              onClick={() => {
                setRumorTwelve(!rumorTwelve);
              }}
              style={{ cursor: "pointer" }}
            >
              {props.runeTwelve}
            </h2>
          </div>
          {rumorTwelve ? <p>{props.runeTwelveRumorRaceFour} </p> : ""}
        </div>
      </main>
    );
  } else if (activeRace == 5) {
    return (
      <main className={styles.main}>
        <div className={styles.runesDiv}>
          <div className={styles.titleDiv}>
            <Image
              src={props.runeOneImage}
              width={40}
              height={40}
              alt={props.runeOneAlt}
            />
            <h2
              onClick={() => {
                setRumorOne(!rumorOne);
              }}
              style={{ cursor: "pointer" }}
            >
              {props.runeOne}
            </h2>
          </div>
          {rumorOne ? <p>{props.runeOneRumorRaceFive} </p> : ""}
          <div className={styles.titleDiv}>
            <Image
              src={props.runeTwoImage}
              width={40}
              height={40}
              alt={props.runeTwoAlt}
            />
            <h2
              onClick={() => {
                setRumorTwo(!rumorTwo);
              }}
              style={{ cursor: "pointer" }}
            >
              {props.runeTwo}
            </h2>
          </div>
          {rumorTwo ? <p>{props.runeTwoRumorRaceFive} </p> : ""}
          <div className={styles.titleDiv}>
            <Image
              src={props.runeThreeImage}
              width={40}
              height={40}
              alt={props.runeThreeAlt}
            />
            <h2
              onClick={() => {
                setRumorThree(!rumorThree);
              }}
              style={{ cursor: "pointer" }}
            >
              {props.runeThree}
            </h2>
          </div>
          {rumorThree ? <p>{props.runeThreeRumorRaceFive} </p> : ""}
          <div className={styles.titleDiv}>
            <Image
              src={props.runeFourImage}
              width={40}
              height={40}
              alt={props.runeFourAlt}
            />
            <h2
              onClick={() => {
                setRumorFour(!rumorFour);
              }}
              style={{ cursor: "pointer" }}
            >
              {props.runeFour}
            </h2>
          </div>
          {rumorFour ? <p>{props.runeFourRumorRaceFive} </p> : ""}
          <div className={styles.titleDiv}>
            <Image
              src={props.runeFiveImage}
              width={40}
              height={40}
              alt={props.runeFiveAlt}
            />
            <h2
              onClick={() => {
                setRumorFive(!rumorFive);
              }}
              style={{ cursor: "pointer" }}
            >
              {props.runeFive}
            </h2>
          </div>
          {rumorFive ? <p>{props.runeFiveRumorRaceFive} </p> : ""}
          <div className={styles.titleDiv}>
            <Image
              src={props.runeSixImage}
              width={40}
              height={40}
              alt={props.runeSixAlt}
            />
            <h2
              onClick={() => {
                setRumorSix(!rumorSix);
              }}
              style={{ cursor: "pointer" }}
            >
              {props.runeSix}
            </h2>
          </div>
          {rumorSix ? <p>{props.runeSixRumorRaceFive} </p> : ""}
          <div className={styles.titleDiv}>
            <Image
              src={props.runeSevenImage}
              width={40}
              height={40}
              alt={props.runeSevenAlt}
            />
            <h2
              onClick={() => {
                setRumorSeven(!rumorSeven);
              }}
              style={{ cursor: "pointer" }}
            >
              {props.runeSeven}
            </h2>
          </div>
          {rumorSeven ? <p>{props.runeSevenRumorRaceFive} </p> : ""}
          <div className={styles.titleDiv}>
            <Image
              src={props.runeEightImage}
              width={40}
              height={40}
              alt={props.runeEightAlt}
            />
            <h2
              onClick={() => {
                setRumorEight(!rumorEight);
              }}
              style={{ cursor: "pointer" }}
            >
              {props.runeEight}
            </h2>
          </div>
          {rumorEight ? <p>{props.runeEightRumorRaceFive} </p> : ""}
          <div className={styles.titleDiv}>
            <Image
              src={props.runeNineImage}
              width={40}
              height={40}
              alt={props.runeNineAlt}
            />
            <h2
              onClick={() => {
                setRumorNine(!rumorNine);
              }}
              style={{ cursor: "pointer" }}
            >
              {props.runeNine}
            </h2>
          </div>
          {rumorNine ? <p>{props.runeNineRumorRaceFive} </p> : ""}
          <div className={styles.titleDiv}>
            <Image
              src={props.runeTenImage}
              width={40}
              height={40}
              alt={props.runeTenAlt}
            />
            <h2
              onClick={() => {
                setRumorTen(!rumorTen);
              }}
              style={{ cursor: "pointer" }}
            >
              {props.runeTen}
            </h2>
          </div>
          {rumorTen ? <p>{props.runeTenRumorRaceFive} </p> : ""}
          <div className={styles.titleDiv}>
            <Image
              src={props.runeElevenImage}
              width={40}
              height={40}
              alt={props.runeElevenAlt}
            />
            <h2
              onClick={() => {
                setRumorEleven(!rumorEleven);
              }}
              style={{ cursor: "pointer" }}
            >
              {props.runeEleven}
            </h2>
          </div>
          {rumorEleven ? <p>{props.runeElevenRumorRaceFive} </p> : ""}
          <div className={styles.titleDiv}>
            <Image
              src={props.runeTwelveImage}
              width={40}
              height={40}
              alt={props.runeTwelveAlt}
            />
            <h2
              onClick={() => {
                setRumorTwelve(!rumorTwelve);
              }}
              style={{ cursor: "pointer" }}
            >
              {props.runeTwelve}
            </h2>
          </div>
          {rumorTwelve ? <p>{props.runeTwelveRumorRaceFive} </p> : ""}
        </div>
      </main>
    );
  } else if (activeRace == 6) {
    return (
      <main className={styles.main}>
        <div className={styles.runesDiv}>
          <div className={styles.titleDiv}>
            <Image
              src={props.runeOneImage}
              width={40}
              height={40}
              alt={props.runeOneAlt}
            />
            <h2
              onClick={() => {
                setRumorOne(!rumorOne);
              }}
              style={{ cursor: "pointer" }}
            >
              {props.runeOne}
            </h2>
          </div>
          {rumorOne ? <p>{props.runeOneRumorRaceSix} </p> : ""}
          <div className={styles.titleDiv}>
            <Image
              src={props.runeTwoImage}
              width={40}
              height={40}
              alt={props.runeTwoAlt}
            />
            <h2
              onClick={() => {
                setRumorTwo(!rumorTwo);
              }}
              style={{ cursor: "pointer" }}
            >
              {props.runeTwo}
            </h2>
          </div>
          {rumorTwo ? <p>{props.runeTwoRumorRaceSix} </p> : ""}
          <div className={styles.titleDiv}>
            <Image
              src={props.runeThreeImage}
              width={40}
              height={40}
              alt={props.runeThreeAlt}
            />
            <h2
              onClick={() => {
                setRumorThree(!rumorThree);
              }}
              style={{ cursor: "pointer" }}
            >
              {props.runeThree}
            </h2>
          </div>
          {rumorThree ? <p>{props.runeThreeRumorRaceSix} </p> : ""}
          <div className={styles.titleDiv}>
            <Image
              src={props.runeFourImage}
              width={40}
              height={40}
              alt={props.runeFourAlt}
            />
            <h2
              onClick={() => {
                setRumorFour(!rumorFour);
              }}
              style={{ cursor: "pointer" }}
            >
              {props.runeFour}
            </h2>
          </div>
          {rumorFour ? <p>{props.runeFourRumorRaceSix} </p> : ""}
          <div className={styles.titleDiv}>
            <Image
              src={props.runeFiveImage}
              width={40}
              height={40}
              alt={props.runeFiveAlt}
            />
            <h2
              onClick={() => {
                setRumorFive(!rumorFive);
              }}
              style={{ cursor: "pointer" }}
            >
              {props.runeFive}
            </h2>
          </div>
          {rumorFive ? <p>{props.runeFiveRumorRaceSix} </p> : ""}
          <div className={styles.titleDiv}>
            <Image
              src={props.runeSixImage}
              width={40}
              height={40}
              alt={props.runeSixAlt}
            />
            <h2
              onClick={() => {
                setRumorSix(!rumorSix);
              }}
              style={{ cursor: "pointer" }}
            >
              {props.runeSix}
            </h2>
          </div>
          {rumorSix ? <p>{props.runeSixRumorRaceSix} </p> : ""}
          <div className={styles.titleDiv}>
            <Image
              src={props.runeSevenImage}
              width={40}
              height={40}
              alt={props.runeSevenAlt}
            />
            <h2
              onClick={() => {
                setRumorSeven(!rumorSeven);
              }}
              style={{ cursor: "pointer" }}
            >
              {props.runeSeven}
            </h2>
          </div>
          {rumorSeven ? <p>{props.runeSevenRumorRaceSix} </p> : ""}
          <div className={styles.titleDiv}>
            <Image
              src={props.runeEightImage}
              width={40}
              height={40}
              alt={props.runeEightAlt}
            />
            <h2
              onClick={() => {
                setRumorEight(!rumorEight);
              }}
              style={{ cursor: "pointer" }}
            >
              {props.runeEight}
            </h2>
          </div>
          {rumorEight ? <p>{props.runeEightRumorRaceSix} </p> : ""}
          <div className={styles.titleDiv}>
            <Image
              src={props.runeNineImage}
              width={40}
              height={40}
              alt={props.runeNineAlt}
            />
            <h2
              onClick={() => {
                setRumorNine(!rumorNine);
              }}
              style={{ cursor: "pointer" }}
            >
              {props.runeNine}
            </h2>
          </div>
          {rumorNine ? <p>{props.runeNineRumorRaceSix} </p> : ""}
          <div className={styles.titleDiv}>
            <Image
              src={props.runeTenImage}
              width={40}
              height={40}
              alt={props.runeTenAlt}
            />
            <h2
              onClick={() => {
                setRumorTen(!rumorTen);
              }}
              style={{ cursor: "pointer" }}
            >
              {props.runeTen}
            </h2>
          </div>
          {rumorTen ? <p>{props.runeTenRumorRaceSix} </p> : ""}
          <div className={styles.titleDiv}>
            <Image
              src={props.runeElevenImage}
              width={40}
              height={40}
              alt={props.runeElevenAlt}
            />
            <h2
              onClick={() => {
                setRumorEleven(!rumorEleven);
              }}
              style={{ cursor: "pointer" }}
            >
              {props.runeEleven}
            </h2>
          </div>
          {rumorEleven ? <p>{props.runeElevenRumorRaceSix} </p> : ""}
          <div className={styles.titleDiv}>
            <Image
              src={props.runeTwelveImage}
              width={40}
              height={40}
              alt={props.runeTwelveAlt}
            />
            <h2
              onClick={() => {
                setRumorTwelve(!rumorTwelve);
              }}
              style={{ cursor: "pointer" }}
            >
              {props.runeTwelve}
            </h2>
          </div>
          {rumorTwelve ? <p>{props.runeTwelveRumorRaceSix} </p> : ""}
        </div>
      </main>
    );
  } else if (activeRace == 7) {
    return (
      <main className={styles.main}>
        <div className={styles.runesDiv}>
          <div className={styles.titleDiv}>
            <Image
              src={props.runeOneImage}
              width={40}
              height={40}
              alt={props.runeOneAlt}
            />
            <h2
              onClick={() => {
                setRumorOne(!rumorOne);
              }}
              style={{ cursor: "pointer" }}
            >
              {props.runeOne}
            </h2>
          </div>
          {rumorOne ? <p>{props.runeOneRumorRaceSeven} </p> : ""}
          <div className={styles.titleDiv}>
            <Image
              src={props.runeTwoImage}
              width={40}
              height={40}
              alt={props.runeTwoAlt}
            />
            <h2
              onClick={() => {
                setRumorTwo(!rumorTwo);
              }}
              style={{ cursor: "pointer" }}
            >
              {props.runeTwo}
            </h2>
          </div>
          {rumorTwo ? <p>{props.runeTwoRumorRaceSeven} </p> : ""}
          <div className={styles.titleDiv}>
            <Image
              src={props.runeThreeImage}
              width={40}
              height={40}
              alt={props.runeThreeAlt}
            />
            <h2
              onClick={() => {
                setRumorThree(!rumorThree);
              }}
              style={{ cursor: "pointer" }}
            >
              {props.runeThree}
            </h2>
          </div>
          {rumorThree ? <p>{props.runeThreeRumorRaceSeven} </p> : ""}
          <div className={styles.titleDiv}>
            <Image
              src={props.runeFourImage}
              width={40}
              height={40}
              alt={props.runeFourAlt}
            />
            <h2
              onClick={() => {
                setRumorFour(!rumorFour);
              }}
              style={{ cursor: "pointer" }}
            >
              {props.runeFour}
            </h2>
          </div>
          {rumorFour ? <p>{props.runeFourRumorRaceSeven} </p> : ""}
          <div className={styles.titleDiv}>
            <Image
              src={props.runeFiveImage}
              width={40}
              height={40}
              alt={props.runeFiveAlt}
            />
            <h2
              onClick={() => {
                setRumorFive(!rumorFive);
              }}
              style={{ cursor: "pointer" }}
            >
              {props.runeFive}
            </h2>
          </div>
          {rumorFive ? <p>{props.runeFiveRumorRaceSeven} </p> : ""}
          <div className={styles.titleDiv}>
            <Image
              src={props.runeSixImage}
              width={40}
              height={40}
              alt={props.runeSixAlt}
            />
            <h2
              onClick={() => {
                setRumorSix(!rumorSix);
              }}
              style={{ cursor: "pointer" }}
            >
              {props.runeSix}
            </h2>
          </div>
          {rumorSix ? <p>{props.runeSixRumorRaceSeven} </p> : ""}
          <div className={styles.titleDiv}>
            <Image
              src={props.runeSevenImage}
              width={40}
              height={40}
              alt={props.runeSevenAlt}
            />
            <h2
              onClick={() => {
                setRumorSeven(!rumorSeven);
              }}
              style={{ cursor: "pointer" }}
            >
              {props.runeSeven}
            </h2>
          </div>
          {rumorSeven ? <p>{props.runeSevenRumorRaceSeven} </p> : ""}
          <div className={styles.titleDiv}>
            <Image
              src={props.runeEightImage}
              width={40}
              height={40}
              alt={props.runeEightAlt}
            />
            <h2
              onClick={() => {
                setRumorEight(!rumorEight);
              }}
              style={{ cursor: "pointer" }}
            >
              {props.runeEight}
            </h2>
          </div>
          {rumorEight ? <p>{props.runeEightRumorRaceSeven} </p> : ""}
          <div className={styles.titleDiv}>
            <Image
              src={props.runeNineImage}
              width={40}
              height={40}
              alt={props.runeNineAlt}
            />
            <h2
              onClick={() => {
                setRumorNine(!rumorNine);
              }}
              style={{ cursor: "pointer" }}
            >
              {props.runeNine}
            </h2>
          </div>
          {rumorNine ? <p>{props.runeNineRumorRaceSeven} </p> : ""}
          <div className={styles.titleDiv}>
            <Image
              src={props.runeTenImage}
              width={40}
              height={40}
              alt={props.runeTenAlt}
            />
            <h2
              onClick={() => {
                setRumorTen(!rumorTen);
              }}
              style={{ cursor: "pointer" }}
            >
              {props.runeTen}
            </h2>
          </div>
          {rumorTen ? <p>{props.runeTenRumorRaceSeven} </p> : ""}
          <div className={styles.titleDiv}>
            <Image
              src={props.runeElevenImage}
              width={40}
              height={40}
              alt={props.runeElevenAlt}
            />
            <h2
              onClick={() => {
                setRumorEleven(!rumorEleven);
              }}
              style={{ cursor: "pointer" }}
            >
              {props.runeEleven}
            </h2>
          </div>
          {rumorEleven ? <p>{props.runeElevenRumorRaceSeven} </p> : ""}
          <div className={styles.titleDiv}>
            <Image
              src={props.runeTwelveImage}
              width={40}
              height={40}
              alt={props.runeTwelveAlt}
            />
            <h2
              onClick={() => {
                setRumorTwelve(!rumorTwelve);
              }}
              style={{ cursor: "pointer" }}
            >
              {props.runeTwelve}
            </h2>
          </div>
          {rumorTwelve ? <p>{props.runeTwelveRumorRaceSeven} </p> : ""}
        </div>
      </main>
    );
  }
  else if (activeRace == 8) {
    return (
      <main className={styles.main}>
        <div className={styles.runesDiv}>
          <div className={styles.titleDiv}>
            <Image
              src={props.runeOneImage}
              width={40}
              height={40}
              alt={props.runeOneAlt}
            />
            <h2
              onClick={() => {
                setRumorOne(!rumorOne);
              }}
              style={{ cursor: "pointer" }}
            >
              {props.runeOne}
            </h2>
          </div>
          {rumorOne ? <p>{props.runeOneRumorRaceEight} </p> : ""}
          <div className={styles.titleDiv}>
            <Image
              src={props.runeTwoImage}
              width={40}
              height={40}
              alt={props.runeTwoAlt}
            />
            <h2
              onClick={() => {
                setRumorTwo(!rumorTwo);
              }}
              style={{ cursor: "pointer" }}
            >
              {props.runeTwo}
            </h2>
          </div>
          {rumorTwo ? <p>{props.runeTwoRumorRaceEight} </p> : ""}
          <div className={styles.titleDiv}>
            <Image
              src={props.runeThreeImage}
              width={40}
              height={40}
              alt={props.runeThreeAlt}
            />
            <h2
              onClick={() => {
                setRumorThree(!rumorThree);
              }}
              style={{ cursor: "pointer" }}
            >
              {props.runeThree}
            </h2>
          </div>
          {rumorThree ? <p>{props.runeThreeRumorRaceEight} </p> : ""}
          <div className={styles.titleDiv}>
            <Image
              src={props.runeFourImage}
              width={40}
              height={40}
              alt={props.runeFourAlt}
            />
            <h2
              onClick={() => {
                setRumorFour(!rumorFour);
              }}
              style={{ cursor: "pointer" }}
            >
              {props.runeFour}
            </h2>
          </div>
          {rumorFour ? <p>{props.runeFourRumorRaceEight} </p> : ""}
          <div className={styles.titleDiv}>
            <Image
              src={props.runeFiveImage}
              width={40}
              height={40}
              alt={props.runeFiveAlt}
            />
            <h2
              onClick={() => {
                setRumorFive(!rumorFive);
              }}
              style={{ cursor: "pointer" }}
            >
              {props.runeFive}
            </h2>
          </div>
          {rumorFive ? <p>{props.runeFiveRumorRaceEight} </p> : ""}
          <div className={styles.titleDiv}>
            <Image
              src={props.runeSixImage}
              width={40}
              height={40}
              alt={props.runeSixAlt}
            />
            <h2
              onClick={() => {
                setRumorSix(!rumorSix);
              }}
              style={{ cursor: "pointer" }}
            >
              {props.runeSix}
            </h2>
          </div>
          {rumorSix ? <p>{props.runeSixRumorRaceEight} </p> : ""}
          <div className={styles.titleDiv}>
            <Image
              src={props.runeSevenImage}
              width={40}
              height={40}
              alt={props.runeSevenAlt}
            />
            <h2
              onClick={() => {
                setRumorSeven(!rumorSeven);
              }}
              style={{ cursor: "pointer" }}
            >
              {props.runeSeven}
            </h2>
          </div>
          {rumorSeven ? <p>{props.runeSevenRumorRaceEight} </p> : ""}
          <div className={styles.titleDiv}>
            <Image
              src={props.runeEightImage}
              width={40}
              height={40}
              alt={props.runeEightAlt}
            />
            <h2
              onClick={() => {
                setRumorEight(!rumorEight);
              }}
              style={{ cursor: "pointer" }}
            >
              {props.runeEight}
            </h2>
          </div>
          {rumorEight ? <p>{props.runeEightRumorRaceEight} </p> : ""}
          <div className={styles.titleDiv}>
            <Image
              src={props.runeNineImage}
              width={40}
              height={40}
              alt={props.runeNineAlt}
            />
            <h2
              onClick={() => {
                setRumorNine(!rumorNine);
              }}
              style={{ cursor: "pointer" }}
            >
              {props.runeNine}
            </h2>
          </div>
          {rumorNine ? <p>{props.runeNineRumorRaceEight} </p> : ""}
          <div className={styles.titleDiv}>
            <Image
              src={props.runeTenImage}
              width={40}
              height={40}
              alt={props.runeTenAlt}
            />
            <h2
              onClick={() => {
                setRumorTen(!rumorTen);
              }}
              style={{ cursor: "pointer" }}
            >
              {props.runeTen}
            </h2>
          </div>
          {rumorTen ? <p>{props.runeTenRumorRaceEight} </p> : ""}
          <div className={styles.titleDiv}>
            <Image
              src={props.runeElevenImage}
              width={40}
              height={40}
              alt={props.runeElevenAlt}
            />
            <h2
              onClick={() => {
                setRumorEleven(!rumorEleven);
              }}
              style={{ cursor: "pointer" }}
            >
              {props.runeEleven}
            </h2>
          </div>
          {rumorEleven ? <p>{props.runeElevenRumorRaceEight} </p> : ""}
          <div className={styles.titleDiv}>
            <Image
              src={props.runeTwelveImage}
              width={40}
              height={40}
              alt={props.runeTwelveAlt}
            />
            <h2
              onClick={() => {
                setRumorTwelve(!rumorTwelve);
              }}
              style={{ cursor: "pointer" }}
            >
              {props.runeTwelve}
            </h2>
          </div>
          {rumorTwelve ? <p>{props.runeTwelveRumorRaceEight} </p> : ""}
        </div>
      </main>
    );
  }
};

export default Runes;
