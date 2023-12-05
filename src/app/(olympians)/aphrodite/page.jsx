// Aphrodite.jsx

import React from "react";
import OlympianPage from "@/components/OlympianPage";

const Aphrodite = () => {
  const relevantOlympians = ["Ares", "Hephaestus", "Eros", "Apollo", "Hera"];
  const relevantMyths = [
    "The Birth of Aphrodite",
    "Aphrodite and Ares",
    "Aphrodite and Adonis",
    "The Judgment of Paris",
    "Pygmalion and Galatea",
  ];

  return (
      <OlympianPage
        name="Aphrodite"
        image="/olympian_pictures/aphrodite.jpg"
        otherNames="Venus, Cypris"
        relevantOlympians={relevantOlympians}
        title="Goddess of Love, Beauty, and Desire"
        origin={`Aphrodite, the enchanting goddess of love and beauty, emerges from the sea foam in a captivating origin story that echoes \
          through the annals of Greek mythology. Born from the tumultuous waves after the castration of Uranus, Aphrodite embodies the allure \
          and captivating power of love. Reputed as the daughter of Zeus or, alternatively, as the offspring of Uranus, her divine essence \
          symbolizes both celestial and primal forces. Aphrodite's enchanting presence captivates the hearts of gods and mortals alike, fueling \
          tales of amorous escapades, divine unions, and the eternal pursuit of beauty and desire.`}
        mainInfo={`Aphrodite, revered as the goddess of love, beauty, and desire, graces the Olympian pantheon with her timeless allure. \
          Endowed with irresistible charm and unparalleled beauty, Aphrodite is the embodiment of romantic enticement and artistic inspiration. \
          Her myths weave a tapestry of passion and connection, from her tumultuous love affair with the god of war, Ares, to her involvement in \
          the legendary Judgment of Paris. Aphrodite's influence extends to mortals, as seen in the poignant tale of Pygmalion and Galatea. \
          Through her sacred realms of love and beauty, Aphrodite emerges as a symbol of the enduring power and complexities of human emotion.`}
        relevantMyths={relevantMyths}
        analysisInfo={"Aphrodite, goddess of love and beauty, captivates with her irresistible charm and influence over romantic relationships. The Odyssey weaves a narrative of her involvement in the affair with Ares, showcasing her capricious nature and the consequences of passionate love. Aphrodite's myths explore the intricate dynamics of desire and the enduring allure of beauty."}
      />
  );
};

export default Aphrodite;
