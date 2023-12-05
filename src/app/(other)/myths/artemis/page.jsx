// Import necessary dependencies
import React from "react";
import { Card } from "@mui/material";

// ArtemisMyths component
const ArtemisMyths = () => {
  return (
    // Background styling
    <div className={`bg-gradient-to-r from-stone-200 via-stone-300 to-stone-200`} style={{ minHeight: "100vh", padding: "10px" }}>
      {/* Page header */}
      <h1 className={`text-5xl text-red-900 font-semibold text-center`}>Artemis Myths</h1>

      {/* Myth sections */}
      {/* Section 1 */}
      <section className={`flex flex-col items justify-between`}>
        <h2 className="text-2xl text-red-900 font-semibold underline">Birth on Delos</h2>
        <p className="text-lg">
          Artemis&apos; mother Leto found refuge on the floating island of Delos, where she gave birth to Artemis. The goddess assisted her mother as a midwife during the birth of her younger twin-brother Apollon. This myth explores Artemis&apos; nurturing and protective nature, emphasizing her role as a compassionate daughter and midwife.
          <br></br>
          <div className="text-muted italic">
            From text: Homeric Hymn 3 to Delian Apollo 16 ff (trans. Evelyn-White) (Greek epic C7th or 6th B.C.)
          </div>
        </p>
        <p className="text-muted">
          <strong>Characterization Analysis:</strong> Artemis is portrayed as a caring and supportive figure, showcasing her maternal instincts and dedication to her family. The myth establishes the foundation of Artemis&apos; protective and familial aspects.
        </p>
      </section>

      {/* Section 2 */}
      <section className={`flex flex-col items justify-between`}>
        <h2 className="text-2xl text-red-900 font-semibold underline">Transformation of Kallisto</h2>
        <p className="text-lg">
          Kallisto, a handmaiden of Artemis, was seduced by Zeus in Artemis&apos; form. When Artemis discovered Kallisto&apos;s pregnancy, she transformed her into a bear and exiled her to the wilds. This myth delves into Artemis&apos; sense of justice and her reactions to violations of purity within her sacred domain.
          <br></br>
          <div className="text-muted italic">
            From text: Pseudo-Hyginus, Astronomica 2. 1 (trans. Grant) (Roman mythographer C2nd A.D.)
          </div>
        </p>
        <p className="text-muted">
          <strong>Characterization Analysis:</strong> Artemis is depicted as a guardian of purity and chastity, willing to take decisive action to maintain the sanctity of her sacred spaces. The transformation of Kallisto underscores Artemis&apos; commitment to upholding divine order.
        </p>
      </section>

      {/* Section 3 */}
      <section className={`flex flex-col items justify-between`}>
        <h2 className="text-2xl text-red-900 font-semibold underline">Death and Constellation of Orion</h2>
        <p className="text-lg">
          The handsome giant Orion, a companion of Artemis, was tricked into being killed by Artemis&apos; jealous brother Apollon. A grieving Artemis placed Orion among the stars as the constellation Orion. This myth explores Artemis&apos; emotional depth and the consequences of familial conflict within the divine pantheon.
          <br></br>
          <div className="text-muted italic">
            From text: Hesiod, The Astronomy Fragment 4 (from Pseudo-Eratosthenes, Catast. 32) (trans. Evelyn-White) (Greek epic C8th or 7th B.C.)
          </div>
        </p>
        <p className="text-muted">
          <strong>Characterization Analysis:</strong> Artemis is revealed as a goddess with complex emotions, highlighting her capacity for grief and the impact of familial dynamics on her actions. The myth showcases Artemis&apos; role as both a sibling and a divine force.
        </p>
      </section>

      {/* Section 4 */}
      <section className={`flex flex-col items justify-between`}>
        <h2 className="text-2xl text-red-900 font-semibold underline">Involvement in the Trojan War</h2>
        <p className="text-lg">
          Artemis supported the Trojans during the Trojan War. In a clash between rival factions of gods, she confronted Hera, but the Queen of the Gods overpowered her, sending Artemis fleeing back to Olympos in tears. This myth highlights Artemis&apos; participation in the affairs of mortals and her interactions with fellow Olympian deities during a critical moment in Greek mythology.
          <br></br>
          <div className="text-muted italic">
            From text: Homer, Iliad 21. 470 ff 
          </div>
        </p>
        <p className="text-muted">
          <strong>Characterization Analysis:</strong> Artemis emerges as a goddess deeply connected to the mortal realm, engaging in divine conflicts with a blend of strength and vulnerability. The episode underscores Artemis&apos; commitment to her allies and the emotional toll of divine confrontations.
        </p>
      </section>

      {/* Repeat the pattern for other myths */}
      {/* ... */}

      {/* Source information */}
      <div className={`flex flex-col items justify-between`}>
        <h2 className="text-2xl text-red-900 font-semibold underline"></h2>
        <p className="text-lg underline">
          <strong>Source : <a href="https://www.theoi.com/Olympios/Artemis.html">theoi.com: Artemis</a></strong>
        </p>
      </div>
    </div>
  );
};

// Export ArtemisMyths component
export default ArtemisMyths;
