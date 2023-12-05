// Import necessary dependencies
import React from "react";
import { Card } from "@mui/material";

// DionysusMyths component
const DionysusMyths = () => {
  return (
    // Background styling
    <div className={`bg-gradient-to-r from-stone-200 via-stone-300 to-stone-200`} style={{ minHeight: "100vh", padding: "10px" }}>
      {/* Page header */}
      <h1 className={`text-5xl text-red-900 font-semibold text-center`}>Dionysus Myths</h1>

      {/* Myth sections */}
      {/* Section 1 */}
      <section className={`flex flex-col items justify-between`}>
        <h2 className="text-2xl text-red-900 font-semibold underline">Birth and Early Years of Dionysus</h2>
        <p className="text-lg">
          Dionysus, born to Zeus and the princess Semele of Thebes, faced a tragic fate due to Hera&apos;s jealousy. Hera tricked Semele into asking Zeus to appear before her in his full glory, leading to her demise. However, Zeus saved their unborn child by sewing him into his own thigh and carrying him to term.
          <br></br>
          <div className="text-muted italic">
            From text: Homeric Hymn 1 to Dionysus (trans. Evelyn-White) (Greek epic C7th to 4th B.C.)
          </div>
        </p>
        <p className="text-muted">
          <strong>Characterization Analysis:</strong> Dionysus&apos;s birth narrative showcases his resilience and unique origin. The circumstances of his birth, marked by Hera&apos;s jealousy and divine intervention, set the stage for Dionysus&apos;s role as a god associated with both life and death. His connection to Zeus and the manner of his birth contribute to the complexities of his divine character.
        </p>
      </section>

      {/* Section 2 */}
      <section className={`flex flex-col items justify-between`}>
        <h2 className="text-2xl text-red-900 font-semibold underline">Guardianship and Tragedies</h2>
        <p className="text-lg">
          After birth, Dionysus was entrusted to various guardians, including Seilenos, the nymphs of Mount Nysa, and later to his aunt Ino and her husband Athamas. However, tragedies unfolded as Hera, in her rage, drove Ino and Athamas mad, leading to the death of their children and themselves.
          <br></br>
          <div className="text-muted italic">
            From text: Pseudo-Hyginus, Fabulae 179
          </div>
        </p>
        <p className="text-muted">
          <strong>Characterization Analysis:</strong> Dionysus&apos;s early life is marked by the theme of tragedy, emphasizing the challenges and sorrows associated with his divine presence. The consequences of Hera&apos;s wrath underscore Dionysus&apos;s vulnerability and the impact of his existence on those around him. These events contribute to the god&apos;s complex persona, embodying both joy and sorrow.
        </p>
      </section>

      {/* Section 3 */}
      <section className={`flex flex-col items justify-between`}>
        <h2 className="text-2xl text-red-900 font-semibold underline">Divine Retribution and Punishment</h2>
        <p className="text-lg">
          Dionysus faced opposition from various mortal figures, including Thrakian king Lykourgos and Theban king Pentheus. Lykourgos attacked Dionysus and his companions, resulting in divine retribution that drove the king into madness. Pentheus, refusing to acknowledge Dionysus&apos;s divinity, faced a gruesome end as his daughters, driven into frenzy by the god, tore him apart.
          <br></br>
          <div className="text-muted italic">
            From text: Homer, Iliad 6. 129 ff (trans. Lattimore) (Greek epic C8th B.C.)
          </div>
        </p>
        <p className="text-muted">
          <strong>Characterization Analysis:</strong> These myths showcase Dionysus&apos;s dual nature as a god of celebration and revelry, as well as a deity capable of divine retribution. His encounters with mortal opposition highlight the consequences of denying or opposing the god, underlining the unpredictable and sometimes destructive aspects of his character.
        </p>
      </section>

      {/* Section 4 */}
      <section className={`flex flex-col items justify-between`}>
        <h2 className="text-2xl text-red-900 font-semibold underline">Exploits and Transformation of Ikarios</h2>
        <p className="text-lg">
          Dionysus instructed the hero Ikarios of Athens in winemaking, leading to a tragic misunderstanding where some shepherds, thinking they were poisoned, killed Ikarios. In sorrow, Dionysus transformed Ikarios into the constellation Bootes. Additionally, Dionysus&apos;s encounter with Tyrrhenian pirates resulted in their transformation into dolphins after attempting to sell him into slavery.
          <br></br>
          <div className="text-muted italic">
            From text: Pseudo-Apollodorus, Bibliotheca 2. 191-192 (trans. Aldrich) (Greek mythographer C2nd A.D.)
          </div>
        </p>
        <p className="text-muted">
          <strong>Characterization Analysis:</strong> These myths illustrate Dionysus&apos;s diverse interactions with mortals and the consequences of those interactions. His role as a teacher and guide in winemaking showcases his benevolent side, while the transformation of mortals into dolphins serves as a reminder of his capacity for both kindness and divine punishment. Dionysus&apos;s character emerges as multifaceted, embodying aspects of tragedy, transformation, and divine intervention.
        </p>
      </section>

      {/* Repeat the pattern for other myths */}
      {/* ... */}

      {/* Source information */}
      <div className={`flex flex-col items justify-between`}>
        <h2 className="text-2xl text-red-900 font-semibold underline"></h2>
        <p className="text-lg underline">
          <strong>Source : <a href="https://www.theoi.com/Olympios/Dionysos.html">theoi.com: Dionysos</a></strong>
        </p>
      </div>
    </div>
  );
};

// Export DionysusMyths component
export default DionysusMyths;
