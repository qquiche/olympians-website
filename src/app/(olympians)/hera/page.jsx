"use client";
import React from "react";
import OlympianPage from "@/components/OlympianPage";

const Hera = () => {
  const relevantOlympians = ["Zeus", "Ares", "Hephaestus", "Hermes"];
  const relevantMyths = [
    "The Birth of Hera",
    "The Marriage of Hera and Zeus",
    "The Contest for the Golden Apple",
    "The Punishment of Echo",
    "The Twelve Labors of Heracles"
  ];

  return (
    <OlympianPage 
        name={"Hera"}
        image="/olympian_pictures/hera.jpg"
        otherNames={"Juno, Queen of the Gods, Hera Parthenos, Cow-eyed Hera, Hera Teleia"}
        relevantOlympians={relevantOlympians}
        title={"Queen of the Gods"}
        origin={"Hera, the queen of the Olympian gods in Greek mythology, is traditionally considered the daughter of Cronus and Rhea. Born into the powerful Titan family, Hera became a prominent figure in the pantheon after the overthrow of the Titans by the Olympian gods, led by her youngest brother, Zeus. Hera is known for her role as the goddess of marriage, family, and childbirth, embodying both the sanctity and challenges of domestic life. Despite her divine status, Hera's mythology is marked by conflicts, particularly with Zeus and his various mortal liaisons, reflecting her complex and multifaceted character in Greek lore."}
        mainInfo={"Hera, a central figure in Greek mythology, is the queen of the Olympian gods and the wife of Zeus. Revered as the goddess of marriage and family, Hera is often depicted as a regal figure with a complex personality, characterized by her fierce protectiveness of matrimony and her wrath against those who defy it. Her sacred animal is the peacock, symbolizing immortality, and her significant role in various myths includes both acts of benevolence and moments of divine retribution. Hera's enduring presence in Greek mythology underscores her importance in the intricate tapestry of the Olympian pantheon."}
        relevantMyths={relevantMyths}
        analysisInfo={"Hera, the queen of the gods and sister-wife to Zeus, embodies a complex blend of maternal protectiveness and a relentless pursuit of justice. The Odyssey highlights her vengeful side as she pursues Odysseus for blinding the Cyclops Polyphemus, showcasing her determination and the consequences of crossing her path. Her commitment to the institution of marriage is evident in her interactions with Zeus and her role in presiding over weddings, reflecting her multifaceted character."}
    />
  );
};

export default Hera;
