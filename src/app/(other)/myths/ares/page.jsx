// Import necessary dependencies
import React from "react";
import { Card } from "@mui/material";

// AresMyths component
const AresMyths = () => {
  return (
    // Background styling
    <div className={`bg-gradient-to-r from-stone-200 via-stone-300 to-stone-200`} style={{ minHeight: "100vh", padding: "10px" }}>
      {/* Page header */}
      <h1 className={`text-5xl text-red-900 font-semibold text-center`}>Ares Myths</h1>

      {/* Myth sections */}
      {/* Section 1 */}
      <section className={`flex flex-col items justify-between`}>
        <h2 className="text-2xl text-red-900 font-semibold underline">Adulterous Affair with Aphrodite</h2>
        <p className="text-lg">
          Ares engaged in a scandalous love affair with the goddess Aphrodite, resulting in a notorious incident where Hephaistos ensnared the illicit couple in a golden net, exposing them to ridicule before the gods. This myth unfolds the repercussions of Ares&apos; forbidden romance with Aphrodite, unraveling the tumultuous and scandalous dynamics within the divine hierarchy.
          <br></br>
          <div className="text-muted italic">
            From text: Homer, Odyssey 8. 267 ff (trans. Shewring) (Greek epic C8th B.C.)
          </div>
        </p>
        <p className="text-muted">
          <strong>Characterization Analysis:</strong> Ares emerges as a passionate and impulsive deity, swayed by desire and often blinded by his emotions. The incident underscores his vulnerability to the caprices of love and the aftermath of his reckless actions.
        </p>
      </section>

      {/* Section 2 */}
      <section className={`flex flex-col items justify-between`}>
        <h2 className="text-2xl text-red-900 font-semibold underline">Jealousy and Death of Adonis</h2>
        <p className="text-lg">
          Ares, consumed by jealousy, transformed into a boar and tragically caused the death of Adonis during a hunting expedition when Aphrodite fell in love with the mortal. This myth delves into Ares&apos; emotional complexities, specifically his envy and the devastating consequences that intertwine love, rivalry, and tragedy.
          <br></br>
          <div className="text-muted italic">
            From text: Pseudo-Apollodorus, Bibliotheca 3. 180 (trans. Aldrich) (Greek mythographer C2nd A.D.)
          </div>
        </p>
        <p className="text-muted">
          <strong>Characterization Analysis:</strong> Ares is portrayed as a deity driven by intense emotions, especially possessiveness and envy. The narrative emphasizes the darker facets of Ares&apos; nature and the collateral damage caused by his unrestrained passions.
        </p>
      </section>

      {/* Section 3 */}
      <section className={`flex flex-col items justify-between`}>
        <h2 className="text-2xl text-red-900 font-semibold underline">Transformation of Harmonia and Kadmos</h2>
        <p className="text-lg">
          Ares utilized his divine powers to transform his daughter Harmonia and her husband Kadmos into serpents, leading to their relocation to the Islands of the Blessed. This myth explores Ares&apos; role as a deity capable of transformative actions, using his divine prowess to alter the destinies of those connected to him.
          <br></br>
          <div className="text-muted italic">
            From text: Pseudo-Apollodorus, Bibliotheca 3. 22 (trans. Aldrich) (Greek mythographer C2nd A.D.)
          </div>
        </p>
        <p className="text-muted">
          <strong>Characterization Analysis:</strong> Ares exhibits his capacity for both divine benevolence and severity. The metamorphosis of Harmonia and Kadmos reflects Ares&apos; influence on the fates of mortal beings, blurring the line between blessing and curse.
        </p>
      </section>

      {/* Section 4 */}
      <section className={`flex flex-col items justify-between`}>
        <h2 className="text-2xl text-red-900 font-semibold underline">Wounding by Diomedes in the Trojan War</h2>
        <p className="text-lg">
          Ares, aligning with the Trojans during the Trojan War, suffered a wound inflicted by the Greek hero Diomedes, who thrust a spear into his side, causing Ares to retreat to Olympos in anguish. This myth narrates Ares&apos; active participation in mortal conflicts, particularly his role in the Trojan War and the subsequent repercussions of his involvement.
          <br></br>
          <div className="text-muted italic">
            From text: Homer, Iliad 5. 352 ff 
          </div>
        </p>
        <p className="text-muted">
          <strong>Characterization Analysis:</strong> Ares emerges as a war deity deeply entwined with the chaos of battle. The episode underscores his vulnerability in the face of mortal heroes, contributing to a nuanced portrayal of Ares that transcends the conventional image of a relentless and invincible war god.
        </p>
      </section>

      {/* Repeat the pattern for other myths */}
      {/* ... */}

      {/* Source information */}
      <div className={`flex flex-col items justify-between`}>
        <h2 className="text-2xl text-red-900 font-semibold underline"></h2>
        <p className="text-lg underline">
          <strong>Source : <a href="https://www.theoi.com/Olympios/Ares.html">theoi.com: Ares</a></strong>
        </p>
      </div>
    </div>
  );
};

// Export AresMyths component
export default AresMyths;
