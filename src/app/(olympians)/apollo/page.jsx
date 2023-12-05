// Apollo.jsx

import React from "react";
import OlympianPage from "@/components/OlympianPage";

const Apollo = () => {
  const relevantOlympians = ["Artemis", "Zeus", "Leto", "Hermes", "Ares"];
  const relevantMyths = [
    "The Birth of Apollo and Artemis",
    "Apollo and Daphne",
    "The Contest of Apollo and Pan",
    "The Death of Python",
    "Apollo and Cassandra",
  ];

  return (
      <OlympianPage
        name="Apollo"
        image="/olympian_pictures/apollo.jpg"
        otherNames="Phoebus Apollo, Apollon"
        relevantOlympians={relevantOlympians}
        title="God of the Sun, Music, and Prophecy"
        origin={`Apollo, the radiant god of the sun, music, and prophecy, illuminates the Greek pantheon with his multifaceted brilliance. \
          Born as the son of Zeus and Leto and the twin brother of Artemis, Apollo's birth was marked by the island of Delos and accompanied \
          by the melodious hymns of the Muses. Endowed with unparalleled beauty and artistic talents, Apollo swiftly ascended to prominence \
          as a deity of both celestial and creative realms. His divine portfolio encompasses the radiant charioteer of the sun, the patron \
          of music, and the bestower of prophetic wisdom. Apollo's mythology unfolds in a series of captivating tales, from his musical \
          contests with Pan to his pursuit of the elusive Daphne, showcasing the god's influence in both the ethereal and mortal spheres.`}
        mainInfo={`Apollo, revered as the god of the sun, music, and prophecy, casts his radiant presence across the realms of Olympus. \
          With his golden lyre in hand, Apollo orchestrates the celestial harmony of the cosmos and graces humanity with the gifts of music, \
          poetry, and artistic inspiration. As the prophetic deity, Apollo's sacred oracles at Delphi are sought by mortals seeking guidance \
          and foresight. His myths intertwine with moments of artistic triumph, such as the musical contest with the satyr Pan, and poignant \
          tales of unrequited love, as seen in the transformation of the nymph Daphne. Apollo's enduring influence extends beyond the divine, \
          embodying the ideals of beauty, enlightenment, and creative expression.`}
        relevantMyths={relevantMyths}
        analysisInfo={"Apollo, god of music, prophecy, and healing, is a paragon of artistic and intellectual brilliance. In the Odyssey, he emerges as a multifaceted deity, aiding Odysseus and his son with his healing abilities and prophetic insights. Apollo's role in fostering the arts and guiding mortals reflects a harmonious blend of creativity and rationality, making him a revered figure in the pantheon."}
      />
  );
};

export default Apollo;
