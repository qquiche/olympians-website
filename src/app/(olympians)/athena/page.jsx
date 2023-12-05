import React from "react";
import OlympianPage from "@/components/OlympianPage";

const Athena = () => {
  const relevantOlympians = ["Zeus", "Ares", "Hephaestus", "Apollo", "Artemis"];
  const relevantMyths = [
    "The Birth of Athena",
    "The Contest of Poseidon and Athena",
    "The Judgment of Paris",
    "The Adventures of Perseus",
    "The Trojan War",
  ];

  return (
      <OlympianPage
        name="Athena"
        image="/olympian_pictures/athena.jpg"
        otherNames="Pallas Athena, Athene, Minerva"
        relevantOlympians={relevantOlympians}
        title="Goddess of Wisdom, War, and Crafts"
        origin={`Athena, the goddess of wisdom, war, and crafts, has a unique and captivating origin. \
        She is said to have been born fully grown and armored from the forehead of her father, Zeus, after he \
        swallowed her pregnant mother, Metis. This extraordinary birth is symbolic of Athena's association with \
        wisdom and strategic intelligence. Known for her keen intellect and prowess in battle, Athena is often depicted \
        with her iconic owl and aegis. Her strategic counsel and patronage of heroes, such as Odysseus, make her an integral \
        figure in Greek mythology.`}
        mainInfo={`Athena, also known as Pallas Athena, is a multifaceted deity revered for her wisdom, strategic warfare, \
        and patronage of the arts. She is the embodiment of rationality and civilization, symbolized by her contributions to crafts \
         and civilization. As the protector of Athens, her namesake city, Athena holds a prominent place in Greek mythology and civic life. \
         Her myths, including the famous contest with Poseidon for the patronage of Athens and her role in the Trojan War, further highlight \
         her significance as a divine force in Greek culture.`}
        relevantMyths={relevantMyths}
        analysisInfo={"Athena, the goddess of wisdom, warfare, and strategy, stands out for her intellect, tactical prowess, and dedication to justice. The Odyssey showcases Athena as a guardian and mentor to Odysseus and his son Telemachus, embodying the idealized feminine qualities of wisdom and strategic thinking. Her interventions in mortal affairs underscore her role as a wise and benevolent deity."}
      />
  );
};

export default Athena;