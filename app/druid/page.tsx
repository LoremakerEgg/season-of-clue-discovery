"use client";

import styles from "./page.module.scss";
import Sorting from "../components/Sorting";

export default function DruidPage() {
  return (
    <Sorting
      class="Druid"
      infoStarterZoneFirstRune="Once you're strong enough to learn new abilities, go have a word with your trainer for the first time! They might have something to show you."
      infoStarterZoneSecondRune="New flowers have sprouted across Teldrassil. Keep an eye out for what they might help!"
      infoCities="No rumors of any runes inside cities exist for you!"
      infoSecondZone="Sometimes idols have been known to enable your growth! Search for ferocious idols held by XX!"
      infoThirdZone="Hidden away in the wet marshes of the east, mushrooms can be found in caves: or on those that collect such things. It is said that ingesting these mushrooms allow you to talk to all manner of creatures, even those amphibious frogs."
      infoSecretZone="Wild begets wild. Members of the same druidic species as those that serve the Horde are rumored to hold something that might assist you, but these druids are not part of the Horde and have been said to lurk around the Stoney Mountains of the West."
      runeOneRaceOne="Fury of Stormrage"
      runeTwoRaceOne="Living Seed"
      runeThreeRaceOne="Lacerate"
      runeFourRaceOne="Lifebloom"
      runeFiveRaceOne="Mangle"
      runeSixRaceOne="Savage Roar"
      runeSevenRaceOne="Skull Bash"
      runeEightRaceOne="Starsurge"
      runeNineRaceOne="Sunfire"
      runeTenRaceOne="Survival of the Fittest"
      runeElevenRaceOne="Wild Growth"
      runeTwelveRaceOne="Wild Strikes"
      runeOneRaceOneRumor="Hit level 2 and speak to your trainer."
      runeTwoRaceOneRumor="Do something TEST PURPOSE"
    />
  );
}
