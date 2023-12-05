// Import necessary dependencies
import React from "react";
import { Card } from "@mui/material";

// HermesMyths component
const HermesMyths = () => {
  return (
    // Background styling
    <div className={`bg-gradient-to-r from-stone-200 via-stone-300 to-stone-200`} style={{ minHeight: "100vh", padding: "10px" }}>
      {/* Page header */}
      <h1 className={`text-5xl text-red-900 font-semibold text-center`}>Hermes Myths</h1>

      {/* Myth sections */}
      {/* Section 1 */}
      <section className={`flex flex-col items justify-between`}>
        <h2 className="text-2xl text-red-900 font-semibold underline">Infant Hermes and the Cattle Theft</h2>
        <p className="text-lg">
         Baby Hermes stole Apollon&apos;s cattle and invented the lyre from a tortoise shell. Zeus looked upon hermes with facor and pardned him as well as making him one of the Olympians. This myth introduces Hermes as a mischievous and clever deity, showcasing his resourcefulness and inventive nature from a young age.
          <br></br>
          <div className="text-muted italic">
            From text: Pseudo-Apollodorus, Bibliotheca 3. 112 - 115 (trans. Aldrich) (Greek mythographer C2nd A.D.)
          </div>
        </p>
        <p className="text-muted">
          <strong>Characterization Analysis:</strong> Hermes is portrayed as a cunning and audacious god, demonstrating his wit and boldness. Zeus&apos; approval reflects Hermes&apos; potential and unique qualities that distinguish him among the Olympians.
        </p>
      </section>

      {/* Section 2 */}
      <section className={`flex flex-col items justify-between`}>
        <h2 className="text-2xl text-red-900 font-semibold underline">Punishment of Battos</h2>
        <p className="text-lg">
          Hermes turned Battos the herdsman into stone for ratting him out to Apollo after Hermes stole Apollon&apos;s cattleThis myth illustrates Hermes&apos; role as a god of boundaries and enforcer of divine justice, emphasizing the consequences for betraying his trust.
          <br></br>
          <div className="text-muted italic">
            From text: Homeric Hymn 87 & 333 ff (trans. Evelyn-White) (Greek epic C7th to 4th B.C.) 
          </div>
        </p>
        <p className="text-muted">
          <strong>Characterization Analysis:</strong> Hermes&apos; decisive and sometimes stern actions highlight his commitment to maintaining order and the repercussions for those who defy divine authority. The transformation of Battos showcases Hermes&apos; role as a deity not to be trifled with.
        </p>
      </section>

      {/* Section 3 */}
      <section className={`flex flex-col items justify-between`}>
        <h2 className="text-2xl text-red-900 font-semibold underline">Slaying of Argos Panoptes</h2>
        <p className="text-lg">
          Hermes slew the hundred-eyed giant Argos Panoptes, who was guarding the heifer-nymph Io. This myth demonstrates Hermes&apos; cunning and stealth in carrying out divine missions, showcasing his role as a messenger and executor of divine will.
          <br></br>
          <div className="text-muted italic">
            From text: Ovid, Metamorphoses 1. 583 ff (trans. Melville) (Roman epic C1st B.C. to C1st A.D.)
          </div>
        </p>
        <p className="text-muted">
          <strong>Characterization Analysis:</strong> Hermes&apos; mission to slay Argos Panoptes highlights his multifaceted nature as a divine messenger and executor of divine will. The successful completion of this task reinforces Hermes&apos; resourcefulness and effectiveness in carrying out divine orders.
        </p>
      </section>

      {/* Section 4 */}
      <section className={`flex flex-col items justify-between`}>
        <h2 className="text-2xl text-red-900 font-semibold underline">Assistance to Perseus</h2>
        <p className="text-lg">
            Hermes helped Perses slay Medousa and gave him advice and gifts from the other gods. This myth showcases Hermes&apos; role as a supportive ally to mortal heroes, offering guidance and supernatural aid in their quests.
          <br></br>
          <div className="text-muted italic">
            From text: Pseudo-Apollodorus, Bibliotheca 2. 37 & 46 (trans. Aldrich) (Greek mythographer C2nd A.D.) 
          </div>
        </p>
        <p className="text-muted">
          <strong>Characterization Analysis:</strong> Hermes&apos; involvement with Perseus underscores his connection to mortal affairs and his willingness to assist those on heroic journeys. The collaboration with Perseus reflects Hermes&apos; benevolence and strategic thinking.
        </p>
      </section>

      {/* Repeat the pattern for other myths */}
      {/* ... */}

      {/* Source information */}
      <div className={`flex flex-col items justify-between`}>
        <h2 className="text-2xl text-red-900 font-semibold underline"></h2>
        <p className="text-lg underline">
          <strong>Source : <a href="https://www.theoi.com/Olympios/Hermes.html">theoi.com: Hermes</a></strong>
        </p>
      </div>
    </div>
  );
};

// Export HermesMyths component
export default HermesMyths;
