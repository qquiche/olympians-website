"use client";
import React from "react";
import OlympianPage from "@/components/OlympianPage";

const Zeus = () => {
  const relevantOlympians = ["Hera", "Poseidon", "Hades", "Athena", "Apollo"];
  const relevantMyths = ["The War of the Titans", "The Birth of Zeus", "Prometheus and the Theft of Fire", "The Creation of Pandora", "The Twelve Labors of Heracles"]

  return (
    <OlympianPage 
        name={"Zeus"}
        image="/olympian_pictures/zeus.jpg"
        otherNames={"Jupiter, Jove, Zeus Pater, Zeus Olympios, Zeus Xenios"}
        relevantOlympians={relevantOlympians}
        title={"The King Of The Gods"}
        origin={"Zeus, the king of the Greek gods, is a central figure in Greek mythology and has a complex origin. \
            He is the son of Cronus (also spelled Kronos) and Rhea, two Titans who were the offspring of Uranus \
            (the sky) and Gaia (the earth). In Greek mythology, Cronus overthrew his father Uranus, and later, \
            Zeus led the Olympian gods in a rebellion against his father Cronus and the Titans. This conflict, \
            known as the Titanomachy, resulted in the victory of Zeus and the establishment of the Olympian gods \
            as the new rulers of the cosmos. Zeus's birth and rise to power are significant events in Greek mythology \
            and serve as the foundation for his position as the chief deity of the Greek pantheon."}
        mainInfo={"Zeus is a prominent figure in Greek mythology, known as the king of the Olympian gods and the ruler \
            of Mount Olympus. He is often depicted as a powerful and regal deity with a thunderbolt in his hand, \
            symbolizing his control over the sky and thunder. Zeus is associated with a wide range of roles and attributes, \
            including being the god of the sky, thunder, lightning, law, order, justice, and hospitality. He is also known \
            for his numerous affairs and relationships with both gods and mortals, which led to the birth of many important \
            figures in Greek mythology. Zeus plays a central role in various Greek myths and is a key character in the overall \
            structure of Greek pantheon and religion."}
        relevantMyths={relevantMyths}
        analysisInfo={"Revered as the supreme deity, Zeus, the king of the Olympians, is a multifaceted character in Greek mythology. Often depicted wielding a thunderbolt, Zeus personifies both benevolence and wrath. In the Odyssey, his interventions in mortal affairs showcase his wisdom and protective nature, as seen when he aids Odysseus in his trials. Zeus also displays cunning in outsmarting adversaries, notably during the Titanomachy, solidifying his role as the ruler of both gods and men."}
    />
  );
};

export default Zeus;
