import React from "react";
import OlympianPage from "@/components/OlympianPage";

const Artemis = () => {
  const relevantOlympians = ["Apollo", "Zeus", "Hera", "Leto"];
  const relevantMyths = [
    "The Birth of Artemis adn Apollo",
    "Actaeon's Transformation",
    "The Calydonian Bear Hunt",
    "Niobe's Hubris",
    "Orion's Fate",
  ];

  return (
      <OlympianPage
        name="Artemis"
        image="/olympian_pictures/artemis1.jpg"
        otherNames="Diana, Cynthia, Pheobe, Selene"
        relevantOlympians={relevantOlympians}
        title="Goddess of the Hunt, Wilderness, and the Moon"
        origin={`Artemis, a compelling figure in Greek mythology, boasts a captivating origin that underscores her \
         connection to the natural world and her unique role among the Olympian deities. Born as the twin sister of Apollo, \
          Artemis emerged from the womb of her mother, Leto, after a challenging labor on the secluded island of Delos. Swift \
          and independent from her earliest moments, Artemis swiftly assumed the mantle of the goddess of the hunt and wilderness. \
          Gifted with a bow and arrows by her father, Zeus, Artemis became a formidable huntress, embodying the untamed spirit \
          of the wilderness. Her dedication to preserving the sanctity of nature and her association with the moon further contribute \
          to Artemis's multifaceted character, making her a revered and influential deity in Greek mythology.`}
        mainInfo={`Artemis, a preeminent figure in Greek mythology, reigns as the formidable goddess of the hunt, wilderness, \
        and the moon. As the twin sister of Apollo and the daughter of Zeus and Leto, Artemis swiftly asserted her autonomy, embodying \
        the untamed spirit of the natural world. Renowned for her exceptional skills with the bow and arrow, she is revered as a \
        vigilant protector of wild animals and a relentless huntress. Artemis's sacred domain extends beyond the terrestrial realm \
        to the celestial sphere, as she holds a symbolic connection to the moon. As a virgin goddess, Artemis encapsulates purity and \
        independence, remaining steadfast in her commitment to safeguarding the untamed beauty of the wilderness and preserving \
        the delicate balance between humanity and nature. Her myths resonate as a testament to the potency of female strength, resilience, \
        and the enduring bond between the divine and the natural world.`}
        relevantMyths={relevantMyths}
        analysisInfo={"Artemis, Apollo's twin sister and goddess of the hunt, wilderness, and wild animals, embodies independence and a fierce dedication to her values. The Odyssey portrays Artemis as a distant but potent force, reflecting her untamed nature. Her myths often underline her role as a protector of the natural world and a symbol of feminine strength."}
      />
  );
};

export default Artemis;