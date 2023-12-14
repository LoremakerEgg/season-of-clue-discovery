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

  return (
    <main className={styles.main}>
      <div className={styles.runesDiv}>
        <div className={styles.titleDiv}>
          <Image
            src="/druid.png"
            width={40}
            height={40}
            alt={props.runeOneAlt}
          />
          <h2
            onClick={() => {
              setRumorOne(!rumorOne);
            }}
          >
            {props.runeOneRaceOne}
          </h2>
        </div>
        {rumorOne ? <p>{props.runeOneRaceOneRumor} </p> : ""}
        <div className={styles.titleDiv}>
          <Image
            src="/druid.png"
            width={40}
            height={40}
            alt={props.runeTwoAlt}
          />
          <h2
            onClick={() => {
              setRumorTwo(!rumorTwo);
            }}
          >
            {props.runeTwoRaceOne}
          </h2>
        </div>
        {rumorTwo ? <p>{props.runeTwoRaceOneRumor} </p> : ""}
        <div className={styles.titleDiv}>
          <Image
            src="/druid.png"
            width={40}
            height={40}
            alt={props.runeThreeAlt}
          />
          <h2
            onClick={() => {
              setRumorThree(!rumorThree);
            }}
          >
            {props.runeThreeRaceOne}
          </h2>
        </div>
        {rumorThree ? <p>{props.runeFourRumor} </p> : ""}
        <div className={styles.titleDiv}>
          <Image
            src="/druid.png"
            width={40}
            height={40}
            alt={props.runeFourAlt}
          />
          <h2
            onClick={() => {
              setRumorFour(!rumorFour);
            }}
          >
            {props.runeFourRaceOne}
          </h2>
        </div>
        {rumorFour ? <p>{props.runeFourRumor} </p> : ""}
        <div className={styles.titleDiv}>
          <Image
            src="/druid.png"
            width={40}
            height={40}
            alt={props.runeFiveAlt}
          />
          <h2
            onClick={() => {
              setRumorFive(!rumorFive);
            }}
          >
            {props.runeFiveRaceOne}
          </h2>
        </div>
        {rumorFive ? <p>{props.runeFiveRumor} </p> : ""}
        <div className={styles.titleDiv}>
          <Image
            src="/druid.png"
            width={40}
            height={40}
            alt={props.runeSixAlt}
          />
          <h2
            onClick={() => {
              setRumorSix(!rumorSix);
            }}
          >
            {props.runeSixRaceOne}
          </h2>
        </div>
        {rumorSix ? <p>{props.runeSixRumor} </p> : ""}
        <div className={styles.titleDiv}>
          <Image
            src="/druid.png"
            width={40}
            height={40}
            alt={props.runeSevenAlt}
          />
          <h2
            onClick={() => {
              setRumorSeven(!rumorSeven);
            }}
          >
            {props.runeSevenRaceOne}
          </h2>
        </div>
        {rumorSeven ? <p>{props.runeSevenRumor} </p> : ""}
        <div className={styles.titleDiv}>
          <Image
            src="/druid.png"
            width={40}
            height={40}
            alt={props.runeEightAlt}
          />
          <h2
            onClick={() => {
              setRumorEight(!rumorEight);
            }}
          >
            {props.runeEightRaceOne}
          </h2>
        </div>
        {rumorEight ? <p>{props.runeEightRumor} </p> : ""}
        <div className={styles.titleDiv}>
          <Image
            src="/druid.png"
            width={40}
            height={40}
            alt={props.runeNineAlt}
          />
          <h2
            onClick={() => {
              setRumorNine(!rumorNine);
            }}
          >
            {props.runeNineRaceOne}
          </h2>
        </div>
        {rumorNine ? <p>{props.runeNineRumor} </p> : ""}
        <div className={styles.titleDiv}>
          <Image
            src="/druid.png"
            width={40}
            height={40}
            alt={props.runeTenAlt}
          />
          <h2
            onClick={() => {
              setRumorTen(!rumorTen);
            }}
          >
            {props.runeTenRaceOne}
          </h2>
        </div>
        {rumorTen ? <p>{props.runeTenRumor} </p> : ""}
        <div className={styles.titleDiv}>
          <Image
            src="/druid.png"
            width={40}
            height={40}
            alt={props.runeElevenAlt}
          />
          <h2
            onClick={() => {
              setRumorEleven(!rumorEleven);
            }}
          >
            {props.runeElevenRaceOne}
          </h2>
        </div>
        {rumorEleven ? <p>{props.runeElevenRumor} </p> : ""}
        <div className={styles.titleDiv}>
          <Image
            src="/druid.png"
            width={40}
            height={40}
            alt={props.runeTwelveAlt}
          />
          <h2
            onClick={() => {
              setRumorTwelve(!rumorTwelve);
            }}
          >
            {props.runeTwelveRaceOne}
          </h2>
        </div>
        {rumorTwelve ? <p>{props.runeTwelveRumor} </p> : ""}
      </div>
    </main>
  );
};

export default Runes;
