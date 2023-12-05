// Import necessary dependencies
import React from "react";
import { Card } from "@mui/material";

// AthenaMyths component
const AthenaMyths = () => {
  return (
    // Background styling
    <div className={`bg-gradient-to-r from-stone-200 via-stone-300 to-stone-200`} style={{ minHeight: "100vh", padding: "10px" }}>
      {/* Page header */}
      <h1 className={`text-5xl text-red-900 font-semibold text-center`}>Athena Myths</h1>

      {/* Myth sections */}
      {/* Section 1 */}
      <section className={`flex flex-col items justify-between`}>
        <h2 className="text-2xl text-red-900 font-semibold underline">Birth from the Head of Zeus</h2>
        <p className="text-lg">
          Athena&apos;s miraculous birth from the head of Zeus, following his ingestion of her mother Metis. Emerging fully grown and armed from his forehead, Athena embodies wisdom and martial prowess from her very origin.
          <br></br>
          <div className="text-muted italic">
            Source: Hesiod, Theogony 929a ff 
          </div>
        </p>
        <p className="text-muted">
          <strong>Characterization Analysis:</strong> Athena&apos;s birth underscores her as a symbol of wisdom and warfare, emphasizing her strategic and intellectual nature from the moment of her inception.
        </p>
      </section>

      {/* Section 2 */}
      <section className={`flex flex-col items justify-between`}>
        <h2 className="text-2xl text-red-900 font-semibold underline">Contest with Poseidon</h2>
        <p className="text-lg">
          Athena&apos;s contest with Poseidon for dominion of Athens, during which she gifted the first olive tree while he produced the first horse. The competition highlights Athena&apos;s creative and beneficial contributions to Athens, symbolized by the gift of the olive tree.
          <br></br>
          <div className="text-muted italic">
            Source: Pseudo-Apollodorus, Bibliotheca 3. 14. 1 (trans. Frazer) (Greek mythographer C2nd A.D.)
          </div>
        </p>
        <p className="text-muted">
          <strong>Characterization Analysis:</strong> Athena&apos;s role as a protector and benefactor of Athens is emphasized, showcasing her association with wisdom, agriculture, and civic development.
        </p>
      </section>

      {/* Section 3 */}
      <section className={`flex flex-col items justify-between`}>
        <h2 className="text-2xl text-red-900 font-semibold underline">War of the Giants</h2>
        <p className="text-lg">
          Athena&apos;s active role in the War of the Giants, where she buried Enkelados beneath Mount Etna and fashioned her aegis from the skin of Pallas. This engagement demonstrates Athena&apos;s martial prowess and strategic abilities.
          <br></br>
          <div className="text-muted italic">
            Source: Pseudo-Apollodorus, Bibliotheca 1. 35 (trans. Aldrich) (Greek mythographer C2nd A.D.)
          </div>
        </p>
        <p className="text-muted">
          <strong>Characterization Analysis:</strong> Athena&apos;s role as a warrior and protector of the divine order is highlighted, showcasing her strength and cunning in battles against formidable foes. Her actions, such as using the skin of Pallas for her aegis, reveal her fierce and sometimes brutal nature.
        </p>
      </section>

      {/* Section 4 */}
      <section className={`flex flex-col items justify-between`}>
        <h2 className="text-2xl text-red-900 font-semibold underline">Judgement of Paris</h2>
        <p className="text-lg">
          Athena&apos;s participation in the Judgement of Paris, where she vied with Hera and Aphrodite for the golden apple. This event explores Athena&apos;s desire for recognition and power among the goddesses.
          <br></br>
          <div className="text-muted italic">
            Source: Stasinus of Cyprus or Hegesias of Aegina, Cypria Fragment 1 (as summarized in Proclus, Chrestomathia) (trans. Evelyn-White) (Greek epic C7th or 6th B.C.) 
          </div>
        </p>
        <p className="text-muted">
          <strong>Characterization Analysis:</strong> Athena&apos;s involvement in the judgment highlights her aspirations and the complexities of divine relationships, revealing her pursuit of influence and significance.
        </p>
      </section>

      {/* Repeat the pattern for other myths */}
      {/* ... */}

      {/* Source information */}
      <div className={`flex flex-col items justify-between`}>
        <h2 className="text-2xl text-red-900 font-semibold underline"></h2>
        <p className="text-lg underline">
          <strong>Source : <a href="https://www.theoi.com/Olympios/Athena.html">theoi.com: Athena</a></strong>
        </p>
      </div>
    </div>
  );
};

// Export AthenaMyths component
export default AthenaMyths;
