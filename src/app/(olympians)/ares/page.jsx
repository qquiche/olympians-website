// Ares.jsx

import React from "react";
import OlympianPage from "@/components/OlympianPage";

const Ares = () => {
  const relevantOlympians = ["Zeus", "Hera", "Aphrodite", "Hephaestus", "Athena"];
  const relevantMyths = [
    "The Birth of Ares",
    "Ares and Aphrodite",
    "The Trojan War",
    "Ares and the Amazons",
    "Ares and Diomedes",
  ];

  return (
      <OlympianPage
        name="Ares"
        image="/olympian_pictures/ares.webp"
        otherNames="Mars, Enyalius"
        relevantOlympians={relevantOlympians}
        title="God of War"
        origin={`Ares, the formidable god of war in Greek mythology, emerges as a force of relentless conflict and martial prowess. \
          Born as a son of Zeus and Hera, Ares personifies the chaotic and destructive aspects of warfare. From his tumultuous birth, \
          Ares cultivated a reputation as an impulsive and belligerent deity, often reveling in the chaos and carnage of battle. \
          While his relentless nature earned him reverence on the battlefield, Ares also faced challenges and conflicts within the \
          divine pantheon, particularly with Athena, the goddess of strategic warfare. The tales of Ares intertwine with the epic stories \
          of Greek heroes and the tumultuous events of the Trojan War, solidifying his enduring presence as a god of both valor and discord.`}
        mainInfo={`Ares, the god of war, commands the realms of conflict, aggression, and the brutal essence of battle in Greek mythology. \
          Revered for his fearsome might and association with the battlefield, Ares embodies the unrestrained and chaotic aspects of warfare. \
          His tumultuous relationships with fellow Olympians, including his passionate affair with Aphrodite and contentious interactions with \
          Athena, contribute to the complex tapestry of his character. Despite his often controversial nature, Ares plays a pivotal role in the \
          mythological narratives of the Trojan War and various other legendary conflicts, showcasing the enduring influence of war in both \
          mortal and divine realms.`}
        relevantMyths={relevantMyths}
        analysisInfo={"Ares, the god of war, epitomizes the brutal and chaotic facets of conflict. While not central in the Odyssey, his impulsive and aggressive nature is evident in various myths. Ares symbolizes the destructive side of war, emphasizing the harsh realities and consequences associated with the tumultuous domain he governs."}
      />
  );
};

export default Ares;
