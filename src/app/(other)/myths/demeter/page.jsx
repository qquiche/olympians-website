// Import necessary dependencies
import React from "react";
import { Card } from "@mui/material";

// DemeterMyths component
const DemeterMyths = () => {
  return (
    // Background styling
    <div className={`bg-gradient-to-r from-stone-200 via-stone-300 to-stone-200`} style={{ minHeight: "100vh", padding: "10px" }}>
      {/* Page header */}
      <h1 className={`text-5xl text-red-900 font-semibold text-center`}>Demeter Myths</h1>

      {/* Myth sections */}
      {/* Section 1 */}
      <section className={`flex flex-col items justify-between`}>
        <h2 className="text-2xl text-red-900 font-semibold underline">Abduction of Persephone</h2>
        <p className="text-lg">
          The abduction of her daughter Persephone by Hades and the resulting famine she brought upon the earth. This myth recounts the heart-wrenching tale of Persephone&apos;s abduction, leading to Demeter&apos;s sorrow and the subsequent barrenness of the land during her daughter&apos;s absence.
          <br></br>
          <div className="text-muted italic">
            Source: Homeric Hymn 2 to Demeter 1 ff (translation by Evelyn-White) (Greek epic C7th or 6th B.C.)
          </div>
        </p>
        <p className="text-muted">
          <strong>Characterization Analysis:</strong> Demeter is portrayed as a fiercely protective mother. Her grief and the resulting impact on nature highlight the goddess&apos;s intimate connection to the cycle of life and her role as a nurturing deity.
        </p>
      </section>

      {/* Section 2 */}
      <section className={`flex flex-col items justify-between`}>
        <h2 className="text-2xl text-red-900 font-semibold underline">Nursing of Demophoon</h2>
        <p className="text-lg">
          The nurturing of Demophoon, the young son of King Keleus of Eleusis. Demeter cares for Demophoon, revealing her compassionate and maternal aspects as she attempts to bestow immortality upon the mortal child.
          <br></br>
          <div className="text-muted italic">
            Source: Homeric Hymn 2 to Demeter 212 ff (translation by Evelyn-White) (Greek epic C7th or 6th B.C.)
          </div>
        </p>
        <p className="text-muted">
          <strong>Characterization Analysis:</strong> Demeter&apos;s role as a caring and protective mother extends beyond Persephone. The myth emphasizes her ability to foster and nurture, showcasing her divine compassion and concern for mortals.
        </p>
      </section>

      {/* Section 3 */}
      <section className={`flex flex-col items justify-between`}>
        <h2 className="text-2xl text-red-900 font-semibold underline">Journeys of Triptolemos</h2>
        <p className="text-lg">
          The journeys of Triptolemos, a hero sent by the goddess to educate mankind in agriculture. Triptolemos embarks on a mission to teach agriculture under Demeter&apos;s guidance, symbolizing her role in the advancement of agricultural practices.
          <br></br>
          <div className="text-muted italic">
            Source: Homeric Hymn 2 to Demeter 470 ff
          </div>
        </p>
        <p className="text-muted">
          <strong>Characterization Analysis:</strong> Demeter is portrayed as a deity concerned with the well-being of humanity, actively contributing to the betterment of mortals through the gift of agriculture. This myth underscores her benevolence and the positive impact of her influence on civilization.
        </p>
      </section>

      {/* Section 4 */}
      <section className={`flex flex-col items justify-between`}>
        <h2 className="text-2xl text-red-900 font-semibold underline">Assault by Poseidon</h2>
        <p className="text-lg">
          Her encounter with Poseidon, who forcefully coupled with her in the form of a horse. Demeter faces an unwelcome union with Poseidon, resulting in the birth of a divine horse. This myth explores themes of divine interactions and their consequences.
          <br></br>
          <div className="text-muted italic">
            Source: Callimachus, Fragment 207 (from Scholiast on Lycophron 1225) (translation by Trypanis) (Greek poet C3rd B.C.)
          </div>
        </p>
        <p className="text-muted">
          <strong>Characterization Analysis:</strong> Demeter&apos;s experience with Poseidon adds complexity to her character, depicting her vulnerability to the actions of other gods. The myth contributes to a nuanced understanding of Demeter&apos;s divine relationships.
        </p>
      </section>

      {/* Repeat the pattern for other myths */}
      {/* ... */}

      {/* Source information */}
      <div className={`flex flex-col items justify-between`}>
        <h2 className="text-2xl text-red-900 font-semibold underline"></h2>
        <p className="text-lg underline">
          <strong>Source : <a href="https://www.theoi.com/Olympios/Demeter.html">theoi.com: Demeter</a></strong>
        </p>
      </div>
    </div>
  );
};

// Export DemeterMyths component
export default DemeterMyths;
