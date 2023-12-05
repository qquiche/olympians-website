// Import necessary dependencies
import React from "react";
import { Card } from "@mui/material";

// ApolloMyths component
const ApolloMyths = () => {
  return (
    // Background styling
    <div className={`bg-gradient-to-r from-stone-200 via-stone-300 to-stone-200`} style={{ minHeight: "100vh", padding: "10px" }}>
      {/* Page header */}
      <h1 className={`text-5xl text-red-900 font-semibold text-center`}>Apollo Myths</h1>

      {/* Myth sections */}
      {/* Section 1 */}
      <section className={`flex flex-col items justify-between`}>
        <h2 className="text-2xl text-red-900 font-semibold underline">Birth on the Island of Delos</h2>
        <p className="text-lg">
          Apollo&apos;s birth on the island of Delos is a pivotal moment in his divine narrative, emphasizing the symbolic connection between the god and this sacred location. Born of the Titaness Leto, Apollo&apos;s arrival on Delos establishes a profound link between the god and this sacred space.
          <br></br>
          <div className="text-muted italic">
            From text: Pseudo-Apollodorus, Bibliotheca 1. 21 (trans. Aldrich) (Greek mythographer C2nd A.D.)
          </div>
        </p>
        <p className="text-muted">
          <strong>Characterization Analysis:</strong> Apollo&apos;s birth on Delos is laden with symbolism, signifying purity and renewal. The myth portrays him as a god of light and prophecy, destined for greatness. His connection to Delos underscores his role as a deity associated with sacred spaces and oracular wisdom.
        </p>
      </section>

      {/* Section 2 */}
      <section className={`flex flex-col items justify-between`}>
        <h2 className="text-2xl text-red-900 font-semibold underline">Slaying of the Serpent Python</h2>
        <p className="text-lg">
          Apollo&apos;s slaying of the serpent Python at Delphi exemplifies his role as a divine protector and purifier. The serpent, guardian of the oracular shrine, represents chaos and obstruction. Apollo&apos;s triumph over Python establishes him as a force of order and clarity.
          <br></br>
          <div className="text-muted italic">
            From text: Homeric Hymn 3 to Apollo 356 ff (trans. Evelyn-White) (Greek epic C7th - 4th B.C.)
          </div>
        </p>
        <p className="text-muted">
          <strong>Characterization Analysis:</strong> In defeating Python, Apollo showcases his mastery over forces that hinder divine communication. This myth accentuates Apollo&apos;s authority as a god of prophecy and purification, reinforcing his association with Delphi and the pursuit of divine knowledge.
        </p>
      </section>

      {/* Section 3 */}
      <section className={`flex flex-col items justify-between`}>
        <h2 className="text-2xl text-red-900 font-semibold underline">Slaying of the Giant Tityos</h2>
        <p className="text-lg">
          Apollo&apos;s intervention in the defense of his mother Leto against the giant Tityos reveals the god&apos;s protective nature and filial devotion. Tityos, a threat to Leto, becomes the target of Apollo&apos;s divine retribution, underscoring Apollo&apos;s commitment to familial bonds.
          <br></br>
          <div className="text-muted italic">
            From text: Quintus Smyrnaeus, Fall of Troy 3. 390 ff (trans. Way) (Greek epic C4th A.D.)
          </div>
        </p>
        <p className="text-muted">
          <strong>Characterization Analysis:</strong> Apollo&apos;s defense of Leto highlights his loyalty to family and underscores the consequences of threatening divine order. The myth contributes to Apollo&apos;s multifaceted character, portraying him as both a fierce protector and an enforcer of divine justice.
        </p>
      </section>

      {/* Section 4 */}
      <section className={`flex flex-col items justify-between`}>
        <h2 className="text-2xl text-red-900 font-semibold underline">Destruction of the Niobides</h2>
        <p className="text-lg">
          Apollo&apos;s role in the destruction of the Niobides explores themes of divine retribution and the consequences of mortal arrogance. Niobe&apos;s boasts provoke Apollo&apos;s wrath, leading to a tragic outcome that serves as a cautionary tale about the limits of mortal pride.
          <br></br>
          <div className="text-muted italic">
            From text: Homer, Iliad 24. 602 ff (trans. Lattimore) (Greek epic C8th B.C.)
          </div>
        </p>
        <p className="text-muted">
          <strong>Characterization Analysis:</strong> Apollo&apos;s involvement in Niobe&apos;s tragedy reflects his role as an agent of divine justice. The myth portrays Apollo as a deity who upholds the cosmic order, punishing hubris and asserting the boundaries between mortals and gods.
        </p>
      </section>

      {/* Repeat the pattern for other myths */}
      {/* ... */}

      {/* Source information */}
      <div className={`flex flex-col items justify-between`}>
        <h2 className="text-2xl text-red-900 font-semibold underline"></h2>
        <p className="text-lg underline">
          <strong>Source : <a href="https://www.theoi.com/Olympios/Apollon.html">theoi.com: Apollo</a></strong>
        </p>
      </div>
    </div>
  );
};

// Export ApolloMyths component
export default ApolloMyths;
