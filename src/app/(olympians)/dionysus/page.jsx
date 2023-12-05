"use client";
import React from "react";
import OlympianPage from "@/components/OlympianPage";

const Dionysus = () => {
  const relevantOlympians = [
    "Zeus",
    "Hera",
    "Athena",
    "Apollo",
    "Hermes"
  ];
  const relevantMyths = [
    "The Birth of Dionysus",
    "Dionysus and the Pirates",
    "Dionysus and Ariadne",
    "Orpheus and Eurydice",
    "The Bacchae"
  ];
  

  return (
    <OlympianPage 
        name={"Dionysus"}
        image="/olympian_pictures/dionysus.jpg"
        otherNames={"Bacchus, Bromios, Eleutherios, Lacchus, Liber"}
        relevantOlympians={relevantOlympians}
        title={"God of Wine and Festivity"}
        origin={"Dionysus, the Greek god of wine, festivities, and theater, has a unique and complex origin in mythology. According to one of the most well-known versions, Dionysus is the son of Zeus and the mortal princess Semele. The circumstances of his birth are extraordinary, as Zeus's lightning and thunder destroyed Semele upon her request to witness his true divine form. In an act of divine intervention, Zeus rescued the unborn Dionysus and sewed him into his own thigh until he was ready to be born. Dionysus's birth and upbringing, marked by both mortal and divine elements, contribute to the richness of his character in Greek mythology."}
        mainInfo={"Dionysus, the vibrant and enigmatic god in Greek mythology, is widely celebrated as the deity of wine, revelry, and theatrical arts. Born from the union of Zeus and the mortal Semele, Dionysus underwent a unique birth, saved by Zeus and later emerging from the thigh of the king of the gods. His worship was characterized by ecstatic celebrations, and he often symbolized the dual nature of both chaos and creative inspiration, embodying the essence of joy, madness, and the transformative power of wine. Dionysus played a central role in various myths, reflecting the diverse aspects of his persona, from the joyful festivities of his followers to his journeys and encounters with mortals and gods alike."}
        relevantMyths={relevantMyths}
        analysisInfo={"Dionysus, the god of wine and revelry, represents the liberator of inhibitions and the embodiment of joyful chaos. While not central to the Odyssey, his influence is felt in various myths, emphasizing the dual nature of celebration and madness associated with him. Dionysus symbolizes the transformative and intoxicating power of communal ecstasy, challenging conventional boundaries and inviting mortals to embrace the spontaneity of life."}
    />
  );
};

export default Dionysus