// Import necessary dependencies
import React from "react";
import { Card } from "@mui/material";

// PoseidonMyths component
const PoseidonMyths = () => {
  return (
    // Background styling
    <div className={`bg-gradient-to-r from-stone-200 via-stone-300 to-stone-200`} style={{ minHeight: "100vh", padding: "10px" }}>
      {/* Page header */}
      <h1 className={`text-5xl text-red-900 font-semibold text-center`}>Poseidon Myths</h1>

      {/* Myth sections */}
      <section className={`flex flex-col items justify-between`}>
        <h2 className="text-2xl text-red-900 font-semibold underline">Birth and Liberation of Poseidon</h2>
        <p className="text-lg">
          At birth, Poseidon faced the fate of being swallowed by his father Kronos. However, Zeus, with the assistance of the goddess Metis, orchestrated a plan to free Poseidon. Metis fed Kronos a magical elixir, compelling him to disgorge the god. This event marks Poseidon&apos;s initial struggle and sets the stage for his involvement in the divine conflicts.
        <br></br>
        <div className="text-muted italic">
            From text: Pseudo-Apollodorus, Bibliotheca 1. 4 - 5 (trans. Aldrich) (Greek mythographer C2nd A.D.) :
          </div>
        </p>
        <p className="text-muted">
          <strong>Characterization Analysis:</strong> Poseidon&apos;s early life portrays him as a deity subject to the whims of his father, emphasizing the challenges faced by the younger generation of gods in overcoming the tyranny of the Titans.
        </p>
      </section>

      {/* Repeat the pattern for other myths */}
      <section className={`flex flex-col items justify-between`}>
        <h2 className="text-2xl text-red-900 font-semibold underline">Poseidon&apos;s Role in the War of the Titanes</h2>
        <p className="text-lg">
          During the War of the Titanes, Poseidon, armed with a magical trident crafted by the Kyklopes, joined forces with his brothers Zeus and Haides. Together, they defeated the elder gods and imprisoned them in Tartaros. This victorious collaboration establishes Poseidon as a formidable force in the divine struggle for power.
          <br></br>
        <div className="text-muted italic">
            From text: Pseudo-Apollodorus, Bibliotheca 1. 6 - 7 (trans. Aldrich) (Greek mythographer C2nd A.D.)
          </div>
        </p>
        <p className="text-muted">
          <strong>Characterization Analysis:</strong> Poseidon&apos;s active participation in the war underscores his martial prowess and strategic abilities, contributing to the triumphant ascent of the Olympian gods.
        </p>
      </section>
      <section className={`flex flex-col items justify-between`}>
        <h2 className="text-2xl text-red-900 font-semibold underline">Poseidon&apos;s Wrath in the Odyssey</h2>
        <p className="text-lg">
        In the epic tale of the Odyssey, Poseidon&apos;s wrath is incurred when the hero Odysseus blinds Poseidon&apos;s son Polyphemos. In retaliation, Poseidon sends a storm to scatter and wreck Odysseus&apos;s fleet. This episode exemplifies Poseidon&apos;s vengeful nature and the enduring consequences of offenses against him.
        <br></br>
        <div className="text-muted italic">
            From text: Homer, Odyssey 9.187 - 542
          </div>
        </p>
        <p className="text-muted">
          <strong>Characterization Analysis:</strong> Poseidon&apos;s unrelenting pursuit of revenge showcases his commitment to justice, especially when his family is wronged.
        </p>
      </section>

      {/* Repeat the pattern for other myths */}
      {/* ... */}

      {/* Source information */}
      <div className={`flex flex-col items justify-between`}>
        <h2 className="text-2xl text-red-900 font-semibold underline"></h2>
        <p className="text-lg underline">
          <strong>Source : <a href="https://www.theoi.com/Olympios/Poseidon.html">theoi.com: Poseidon</a></strong>
        </p>
      </div>
    </div>
  );
};

// Export PoseidonMyths component
export default PoseidonMyths;
