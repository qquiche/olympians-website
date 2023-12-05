"use client";
import React from "react";
import OlympianPage from "@/components/OlympianPage";

const Hermes = () => {
  const relevantOlympians = ["Hermes", "Apollo", "Zeus"];
  const relevantMyths = ["The Odyssey", "The Contest with Apollo for the Herd of Cattle", "The Birth of Hermes", "The Judgment of Paris", "The Death of Argus"];

  return (
    <OlympianPage 
        name={"Hermes"}
        image="/olympian_pictures/hermes.jpg"
        otherNames={"Mercury, The Messenger of the Gods, The Trickster, Psychopompos (Guide of Souls), Argeiphontes (Slayer of Argus)"}
        relevantOlympians={relevantOlympians}
        title={"Messenger of the Gods"}
        origin={"Hermes, the swift and cunning messenger god of Greek mythology, was born to Zeus and the Pleiad Maia. According to myth, Hermes exhibited his cleverness from the moment of his birth, as he stole Apollo's sacred cattle shortly after entering the world. Named after the ancient Greek word \"herma,\" which refers to a pile of stones or a boundary marker, Hermes embodied the transition and movement between different realms, acting as a guide and mediator among the gods and between gods and mortals. His multifaceted character, encompassing wit, commerce, and communication, made Hermes a beloved and indispensable figure in the Greek pantheon."}
        mainInfo={"Hermes, a key figure in Greek mythology, is the son of Zeus and Maia, known for his quick wit, agility, and versatility. As the messenger of the gods, Hermes facilitated communication between the divine realms and mediated conflicts among gods. He is also associated with commerce, invention, and travel, playing a central role in various myths, including the theft of Apollo's cattle and his negotiation in the story of Persephone's abduction. The iconic caduceus, a staff entwined with two serpents, symbolizes Hermes' role as a divine messenger and healer."}
        relevantMyths={relevantMyths}
        analysisInfo={"Hermes, the messenger of the gods, is a figure characterized by wit, cunning, and agility. In the Odyssey, he aids Odysseus with his cleverness and swift actions, embodying the archetype of the trickster figure in mythology. Hermes bridges the divine and mortal realms, serving as a conduit for communication and a guide for those navigating the complexities of both worlds."}
    />
  );
};

export default Hermes;
