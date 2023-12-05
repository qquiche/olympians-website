"use client";
import React from "react";
import { Card } from "@mui/material";

const ZeusMyths = () => {
  return (
    <div className={`bg-gradient-to-r from-stone-200 via-stone-300 to-stone-200`} style={{ minHeight: "100vh", padding: "10px"}}>
      <h1 className={`text-5xl text-red-900 font-semibold text-center`}>Zeus Myths</h1>
      <section className={` flex flex-col items justify-between`}>
        <h2 className="text-2xl text-red-900 font-semibold underline">Zeus&apos;s Secret Infancy</h2>
        <p className="text-lg">
          Zeus, the youngest child of Kronos and Rheia, narrowly escapes his
          father&apos;s fate of devouring his offspring. Raised in secrecy on Mount
          Dikte in Krete, he is cared for by nymphs and guarded by the warrior
          Kouretes. This period of concealment marks the early struggles Zeus
          faced, establishing the backdrop for his eventual rise to power. 
          <br></br>
          <div className="text-muted italic">
            From text: Hesiod, Theogony 453 (trans. Evelyn-White) (Greek epic C8th or C7th B.C.)
          </div>
        </p>
        <p className="text-muted">
          <strong>Characterization Analysis:</strong> Zeus&apos;s infancy portrays
          him as a resilient figure, escaping the clutches of his Titan father.
          His upbringing in secrecy foreshadows his future as a powerful and
          strategic deity.
        </p>
      </section>

      <section className={`flex flex-col items justify-between`}>
        <h2 className="text-2xl text-red-900 font-semibold underline">Metis and the Liberation of Siblings</h2>
        <p className="text-lg">
          Upon reaching adulthood, Zeus enlists the aid of Metis, who
          orchestrates the release of his siblings swallowed by Kronos. This
          myth highlights Zeus&apos;s resourcefulness and strategic thinking as he
          builds alliances to challenge the Titans.
          <br></br>
          <div className="text-muted italic">
            From text: Pseudo-Apollodorus, Bibliotheca 1. 4 - 5 (trans. Aldrich) (Greek mythographer C2nd A.D.) 
          </div>
        </p>
        <p className="text-muted">
          <strong>Characterization Analysis:</strong> Zeus emerges as a
          tactician, relying on Metis&apos;s cunning to free his siblings. This
          showcases his ability to gather support and devise strategic plans.
        </p>
      </section>

      {/* Repeat the pattern for the other myths */}
      <section className={`flex flex-col items justify-between`}>
        <h2 className="text-2xl text-red-900 font-semibold underline">Defeat of the Titans with Kyklopes and Hekatonkheires</h2>
        <p className="text-lg">
        Zeus, armed with lightning bolts by the Kyklopes and aided by the Hekatonkheires, defeats the Titanes and banishes them to Tartaros. This victory solidifies Zeus&apos;s position as the new ruler of the cosmos.
        <br></br>
          <div className="text-muted italic">
            From text: Pseudo-Apollodorus, Bibliotheca 1. 6 - 7 (trans. Aldrich) (Greek mythographer C2nd A.D.)
          </div>
        </p>
        <p className={`$text-muted`}>
          <strong>Characterization Analysis:</strong> Zeus&apos;s triumph underscores his strength and the importance of alliances. The cooperation with powerful allies signifies his ability to unite diverse forces for a common goal
        </p>
      </section>
      <section className={`flex flex-col items justify-between`}>
        <h2 className="text-2xl text-red-900 font-semibold underline">Division of the Cosmos</h2>
        <p className="text-lg">
        Following the Titanomachy, Zeus and his brothers divide rule of the cosmos through a draw. Zeus becomes the ruler of the heavens, emphasizing the establishment of order in the divine hierarchy.
        </p>
        <p className={`$text-muted`}>
          <strong>Characterization Analysis:</strong> Zeus&apos;s role as the ruler of the heavens solidifies his position as the chief deity. The division of realms highlights his authority and the cosmic balance.
        </p>
      </section>
      <section className={`flex flex-col items justify-between`}>
        <h2 className="text-2xl text-red-900 font-semibold underline">The Birth of Athena and Zeus&apos;s Cunning Marriage</h2>
        <p className="text-lg">
        Zeus devours the pregnant Metis to prevent the birth of a potential successor. Athena is born from Zeus&apos;s head, showcasing his unconventional approach to maintaining power.   
        <br></br>
          <div className="text-muted italic">
            From text: Hesiod, Theogony 929a ff 
          </div>
        </p>
        <p className={`$text-muted`}>
          <strong>Characterization Analysis:</strong> Zeus&apos;s decision reflects a cunning and ruthless aspect of his character. The birth of Athena symbolizes his manipulation and strategic thinking.
        </p>
      </section>
      <section className={`flex flex-col items justify-between`}>
        <h2 className="text-2xl text-red-900 font-semibold underline">Troubled Marriage with Hera and Creation of Pandora</h2>
        <p className="text-lg">
        Zeus&apos;s tumultuous relationship with Hera and the creation of Pandora reveal his unpredictable nature and the consequences of his judgments.
        <br></br>
          <div className="text-muted italic">
            From text: theoi.com (Zeus Page, see bottom of page for sources)
          </div>
        </p>
        <p className={`$text-muted`}>
          <strong>Characterization Analysis:</strong> Zeus&apos;s decision reflects a cunning and ruthless aspect of his character. The birth of Athena symbolizes his manipulation and strategic thinking.
        </p>
      </section>
      <div className={`flex flex-col items justify-between`}>
        <h2 className="text-2xl text-red-900 font-semibold underline"></h2>
        <p className="text-lg underline">
        <strong>Source : <a href="https://www.theoi.com/Olympios/Zeus.html">theoi.com: Zeus</a></strong>
        </p>
        </div>
    </div>
  );
};

export default ZeusMyths;
