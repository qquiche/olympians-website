"use client";
import React from "react";
import OlympianPage from "@/components/OlympianPage";

const Hephaestus = () => {
  const relevantOlympians = ["Hera", "Zeus", "Aphrodite", "Athena", "Ares"];
  const relevantMyths = [
    "The Fall of Hephaestus",
    "Hephaestus and the Creation of Pandora",
    "Hephaestus' Revenge on Hera",
    "The Binding of Prometheus",
    "Hephaestus and the Aegis Shield"
  ];
  

  return (
    <OlympianPage 
        name={"Hephaestus"}
        image="/olympian_pictures/hephaestus.webp"
        otherNames={"Vulcan, Mulciber, God of the Forge, Divine Blacksmith, Fire-God"}
        relevantOlympians={relevantOlympians}
        title={"The God of Fire"}
        origin={"Hephaestus, the Greek god of blacksmiths, craftsmen, and fire, has a unique origin in Greek mythology. According to one version, he is the son of Hera, conceived without a father, making him a parthenogenetic creation. In another account, Hephaestus is said to be the son of both Zeus and Hera, but Hera, displeased with his physical deformity, cast him out of Olympus. Hephaestus, skilled in metallurgy and craftsmanship, eventually found his place as the divine smith of the gods, forging magnificent weapons and artifacts for the Olympian pantheon. Despite his challenging beginnings, Hephaestus's talents and contributions make him a respected and essential figure in Greek mythology."}
        mainInfo={"Hephaestus, the Greek god of blacksmiths and craftsmen, is renowned for his exceptional skills in metallurgy and invention. Born either of a parthenogenetic union with Hera or as the son of Zeus and Hera, Hephaestus faced rejection from his mother due to his physical deformity. Despite this, he found solace and purpose in his craft, becoming the divine blacksmith of Mount Olympus. Hephaestus forged powerful weapons and crafted exquisite works of art, earning him a revered place among the Olympian gods despite his initial challenges."}
        relevantMyths={relevantMyths}
        analysisInfo={"Hephaestus, the god of blacksmiths and craftsmen, emerges as a hardworking and skilled artisan. His role in the Odyssey involves crafting divine items, underscoring his creative and practical talents. Hephaestus symbolizes the transformative power of craftsmanship, blending the elements of fire and metal into works of enduring artistry."}
    />
  );
};

export default Hephaestus