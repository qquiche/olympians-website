// Import necessary dependencies
import React from "react";
import { Card } from "@mui/material";

// HeraMyths component
const HeraMyths = () => {
  return (
    // Background styling
    <div className={`bg-gradient-to-r from-stone-200 via-stone-300 to-stone-200`} style={{ minHeight: "100vh", padding: "10px" }}>
      {/* Page header */}
      <h1 className={`text-5xl text-red-900 font-semibold text-center`}>Hera Myths</h1>

      {/* Myth sections */}
      <section className={`flex flex-col items justify-between`}>
        <h2 className="text-2xl text-red-900 font-semibold underline">Marriage to Zeus</h2>
        <p className="text-lg">
          Hera&apos;s notable myth involves her marriage to Zeus, who seduced her in the guise of a cuckoo bird. This union forms a crucial aspect of Hera&apos;s divine role, positioning her as the queen of the heavens and consort to the chief deity.
          <br></br>
          <div className="text-muted italic">
            From text: Pausanias, Description of Greece 2. 36. 1 
          </div>
        </p>
        <p className="text-muted">
          <strong>Characterization Analysis:</strong> Hera&apos;s marriage to Zeus establishes her as a central figure in the divine hierarchy, showcasing her significance as the queen of the gods. The manner of Zeus&apos;s seduction highlights Hera&apos;s vulnerability and the complexities of divine relationships.
        </p>
      </section>

      {/* Repeat the pattern for other myths */}
      <section className={`flex flex-col items justify-between`}>
        <h2 className="text-2xl text-red-900 font-semibold underline">Birth of Hephaistos</h2>
        <p className="text-lg">
          Hera alone produced Hephaistos without a father, and due to his perceived imperfection, she cast him from heaven. This myth sheds light on Hera&apos;s role as a mother and her actions when faced with challenges.
          <br></br>
          <div className="text-muted italic">
            From text: Pseudo-Apollodorus, Bibliotheca 1. 19 (trans. Aldrich) (Greek mythographer C2nd A.D.) 
          </div>
        </p>
        <p className="text-muted">
          <strong>Characterization Analysis:</strong> Hera&apos;s treatment of Hephaistos reveals aspects of her character, including her reactions to situations that defy conventional expectations. This myth explores themes of motherhood, acceptance, and rejection within the divine family.
        </p>
      </section>

       {/* Persecution of Zeus&apos;s consorts */}
       <section className={`flex flex-col items justify-between`}>
        <h2 className="text-2xl text-red-900 font-semibold underline">Persecution of Zeus&apos;s Consorts</h2>
        <p className="text-lg">
          Hera persecuted the consorts of Zeus, including Leto, Semele, and Alkmene. This series of events underscores Hera&apos;s protective and sometimes vengeful nature as she reacts to Zeus&apos;s infidelity.
          <br></br>
          <div className="text-muted italic">
            From text: Callimachus, Hymn 4 to Delos 51 ff (trans. Mair) (Greek poet C3rd B.C.) 
          </div>
        </p>
        <p className="text-muted">
          <strong>Characterization Analysis:</strong> Hera&apos;s actions against Zeus&apos;s consorts showcase her role as a guardian of marital fidelity and her determination to assert her position as the primary queen of the gods.
        </p>
      </section>

      {/* Persecution of Herakles and Dionysos */}
      <section className={`flex flex-col items justify-between`}>
        <h2 className="text-2xl text-red-900 font-semibold underline">Persecution of Herakles and Dionysos</h2>
        <p className="text-lg">
          Hera persecuted Herakles and Dionysos, the favorite bastard sons of Zeus. This myth explores Hera&apos;s complex relationships with the offspring of Zeus and her reactions to their divine status.
          <br></br>
          <div className="text-muted italic">
            From text: Pausanias, Description of Greece 9. 11. 3 (trans. Jones) (Greek travelogue C2nd A.D.)
            <br></br>
            Philostratus the Younger, Imagines 5 (trans. Fairbanks) (Greek rhetorician C3rd A.D.)
          </div>
        </p>
        <p className="text-muted">
          <strong>Characterization Analysis:</strong> Hera&apos;s treatment of Zeus&apos;s illegitimate children highlights her sense of rivalry and the challenges faced by those connected to Zeus outside of a lawful union.
        </p>
      </section>

      {/* Punishment of Ixion */}
      <section className={`flex flex-col items justify-between`}>
        <h2 className="text-2xl text-red-900 font-semibold underline">Punishment of Ixion</h2>
        <p className="text-lg">
          Hera punished Ixion by chaining him to a fiery wheel for attempting to violate the goddess. This myth showcases Hera&apos;s role in upholding divine justice and her response to impiety.
          <br></br>
          <div className="text-muted italic">
            From text: Pseudo-Apollodorus, Bibliotheca E1. 20 (trans. Aldrich) (Greek mythographer C2nd A.D.)
          </div>
        </p>
        <p className="text-muted">
          <strong>Characterization Analysis:</strong> Hera&apos;s punishment of Ixion reveals her commitment to maintaining order and punishing those who defy the divine order, emphasizing her role as a goddess of justice.
        </p>
      </section>

      {/* Assisting the Argonauts */}
      <section className={`flex flex-col items justify-between`}>
        <h2 className="text-2xl text-red-900 font-semibold underline">Assisting the Argonauts</h2>
        <p className="text-lg">
          Hera assisted the Argonauts in their quest for the golden fleece, with their leader Iason being one of her favorites. This myth portrays Hera&apos;s supportive and protective nature towards certain mortal heroes.
          <br></br>
          <div className="text-muted italic">
            From text: Pseudo-Apollodorus, Bibliotheca 1. 125 (trans. Aldrich) (Greek mythographer C2nd A.D.)
          </div>
        </p>
        <p className="text-muted">
          <strong>Characterization Analysis:</strong> Hera&apos;s support for the Argonauts underscores her capacity to align with mortal heroes, especially those favored by the gods, showcasing her role in influencing mortal destinies.
        </p>
      </section>

      {/* Judgement of Paris */}
      <section className={`flex flex-col items justify-between`}>
        <h2 className="text-2xl text-red-900 font-semibold underline">Judgement of Paris</h2>
        <p className="text-lg">
          Hera participated in the judgment of Paris, competing against Aphrodite and Athene for the prize of the golden apple. This myth delves into the complex relationships and rivalries among the goddesses.
          <br></br>
          <div className="text-muted italic">
            From text: Pseudo-Apollodorus, Bibliotheca E3. 2 (trans. Aldrich) (Greek mythographer C2nd A.D.) 
          </div>
        </p>
        <p className="text-muted">
          <strong>Characterization Analysis:</strong> Hera&apos;s involvement in the judgment of Paris highlights her desire for recognition and power, as well as the tensions among the Olympian goddesses.
        </p>
      </section>

      {/* Trojan War */}
      <section className={`flex flex-col items justify-between`}>
        <h2 className="text-2xl text-red-900 font-semibold underline">Trojan War</h2>
        <p className="text-lg">
          Hera assisted the Greeks in the Trojan War. This myth explores Hera&apos;s role in the epic conflict and her interactions with mortal heroes and gods. Hera supports the Greeks on the battlefield by inspiring them with a speech and seduces Zeus to help the Greeks.
          <br></br>
          <div className="text-muted italic">
            From text: Homer, Iliad 5. 711 ff 
          </div>
        </p>
        <p className="text-muted">
          <strong>Characterization Analysis:</strong> Hera&apos;s involvement in the Trojan War emphasizes her influence on mortal affairs and her alignment with the Greeks in the divine struggle against Troy.
        </p>
      </section>


      {/* Repeat the pattern for other myths */}
      {/* ... */}

      {/* Source information */}
      <div className={`flex flex-col items justify-between`}>
        <h2 className="text-2xl text-red-900 font-semibold underline"></h2>
        <p className="text-lg underline">
          <strong>Source : <a href="https://www.theoi.com/Olympios/Hera.html">theoi.com: Hera</a></strong>
        </p>
      </div>
    </div>
  );
};

// Export HeraMyths component
export default HeraMyths;
