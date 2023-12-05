// Import necessary dependencies
import React from "react";
import { Card } from "@mui/material";

// AphroditeMyths component
const AphroditeMyths = () => {
  return (
    // Background styling
    <div className={`bg-gradient-to-r from-stone-200 via-stone-300 to-stone-200`} style={{ minHeight: "100vh", padding: "10px" }}>
      {/* Page header */}
      <h1 className={`text-5xl text-red-900 font-semibold text-center`}>Aphrodite Myths</h1>

      {/* Myth sections */}
      {/* Section 1 */}
      <section className={`flex flex-col items justify-between`}>
        <h2 className="text-2xl text-red-900 font-semibold underline">Birth from the Sea Foam</h2>
        <p className="text-lg">
          Aphrodite&apos;s iconic birth from the sea foam, born fully grown and beautiful, is a myth that establishes her as the goddess of love and beauty. This divine origin sets the tone for Aphrodite&apos;s association with the sea and her captivating allure.
          <br></br>
          <div className="text-muted italic">
            From text: Hesiod, Theogony 176 ff (trans. Evelyn-White) (Greek epic C8th or 7th B.C.)[Source]
          </div>
        </p>
        <p className="text-muted">
          <strong>Characterization Analysis:</strong> Aphrodite&apos;s unique birth underscores her divine nature and enchanting beauty. The symbolism of emerging from the sea foam highlights her connection to the sea and emphasizes her role as a goddess of love, fertility, and desire.
        </p>
      </section>

      {/* Section 2 */}
      <section className={`flex flex-col items justify-between`}>
        <h2 className="text-2xl text-red-900 font-semibold underline">Adulterous Affair with Ares</h2>
        <p className="text-lg">
          Aphrodite&apos;s affair with the god Ares is a tale of passionate love and divine liaisons. This myth explores the complexities of Aphrodite&apos;s relationships and her influence over the realm of desire and war.
          <br></br>
          <div className="text-muted italic">
            From text: Homer, Odyssey 8. 267 ff (trans. Shewring) (Greek epic C8th B.C.)
          </div>
        </p>
        <p className="text-muted">
          <strong>Characterization Analysis:</strong> Aphrodite&apos;s involvement with Ares highlights her dual role as a goddess of both love and war. The affair showcases her alluring and irresistible nature, as well as the consequences of love and desire in the divine realm.
        </p>
      </section>

      {/* Section 3 */}
      <section className={`flex flex-col items justify-between`}>
        <h2 className="text-2xl text-red-900 font-semibold underline">Love for Adonis</h2>
        <p className="text-lg">
          Aphrodite&apos;s love for Adonis, a handsome Cypriot youth, leads to a tragic end when he is killed by a boar. This myth explores themes of love, beauty, and the ephemeral nature of life.
          <br></br>
          <div className="text-muted italic">
            From text: Pseudo-Apollodorus, Bibliotheca 3. 183 (trans. Aldrich) (Greek mythographer C2nd A.D.)
          </div>
        </p>
        <p className="text-muted">
          <strong>Characterization Analysis:</strong> Aphrodite&apos;s attachment to Adonis reflects the transient and vulnerable aspects of love. The tragic outcome underscores the goddess&apos;s emotional depth and the inevitable connection between love and mortality.
        </p>
      </section>

      {/* Section 4 */}
      <section className={`flex flex-col items justify-between`}>
        <h2 className="text-2xl text-red-900 font-semibold underline">Love for Anchises</h2>
        <p className="text-lg">
          Aphrodite&apos;s love for Anchises, a shepherd-prince, showcases the goddess&apos;s capacity for both divine and mortal unions. This myth explores the dynamics of love between immortals and mortals.
          <br></br>
          <div className="text-muted italic">
            From text: Homeric Hymn 5 to Aphrodite 45 ff (trans. Evelyn-White) (Greek epic C7th to 4th B.C.)
          </div>
        </p>
        <p className="text-muted">
          <strong>Characterization Analysis:</strong> Aphrodite&apos;s relationship with Anchises reveals her ability to bridge the gap between the divine and mortal worlds. The myth emphasizes her role as a goddess who can inspire love and desire across different realms.
        </p>
      </section>

      {/* Repeat the pattern for other myths */}
      {/* ... */}

      {/* Source information */}
      <div className={`flex flex-col items justify-between`}>
        <h2 className="text-2xl text-red-900 font-semibold underline"></h2>
        <p className="text-lg underline">
          <strong>Source : <a href="https://www.theoi.com/Olympios/Aphrodite.html">theoi.com: Aphrodite</a></strong>
        </p>
      </div>
    </div>
  );
};

// Export AphroditeMyths component
export default AphroditeMyths;
