"use client";
import React from "react";
import OlympianPage from "@/components/OlympianPage";

const Poseidon = () => {
  const relevantOlympians = ["Zeus", "Hades", "Hera", "Athena"];
  const relevantMyths = ["The Contest with Athena for Athens", "The Creation of the Horse", "The Punishment of Odysseus", "The Birth of Pegasus and Chrysaor", "The Foundation of Corinth"];

  return (
    <OlympianPage 
        name={"Poseidon"}
        image="/olympian_pictures/poseidon.jpg"
        otherNames={"Neptune, Earthshaker, God of the Sea, Poseidon Pater, Enosichthon (Earth-shaker)"}
        relevantOlympians={relevantOlympians}
        title={"Ruler of the Sea"}
        origin={"Poseidon, the powerful god of the sea and earthquakes in Greek mythology, has his origins rooted in the lineage of the Titans. He is the son of Cronus, the Titan ruler, and Rhea, making him a sibling to Zeus, Hades, Hera, Demeter, and Hestia. Like his siblings, Poseidon played a pivotal role in the overthrow of the Titans during the Titanomachy, securing the reign of the Olympian gods. Poseidon's distinct dominion over the seas, his association with horses, and his iconic trident are key elements that define his character and contributions to Greek mythology."}
        mainInfo={"Poseidon, a prominent figure in Greek mythology, is the god of the sea, earthquakes, and horses. As one of the 12 Olympian gods, he is the brother of Zeus and Hades, collectively ruling over the cosmos. Poseidon is often depicted wielding a trident, symbolizing his authority over the seas. He plays key roles in various myths, including conflicts with other gods, the creation of creatures like horses, and his involvement in the foundation of cities."}
        relevantMyths={relevantMyths}
        analysisInfo={"Poseidon, god of the sea, stands as a symbol of both the vastness of the oceans and the capricious nature of the waves. The Odyssey weaves tales of Poseidon's wrath, notably directed at Odysseus for blinding his son Polyphemus. This highlights Poseidon's powerful, often vengeful persona, underscoring the formidable force of the seas and the unpredictable challenges they pose to mortal endeavors."}
    />
  );
};

export default Poseidon;
