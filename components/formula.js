import { useEffect, useState } from "react";

export default function Lsystem(n) {
  // const [showMenu, setMenu] = useState(false);
  const [axiom, setAxiom] = useState("F");
  const [sentence, setSentence] = useState(axiom);
  const [numIterations, setIterations] = useState(3);
  const [rule, setRule] = useState("F[&+++F][-----F][^^^^-F][&&&&&F]");
  const [rule2, setRule2] = useState("");
  const [angle, setAngle] = useState(10);
  const [segmentLength, setLength] = useState(3);
  const [segmentRadius, setRadius] = useState(0.18);
  const [lengthModifier, setLengthModifier] = useState(0.6);
  const [radialModifier, setRadialModifier] = useState(0.6);
  const [color, setColor] = useState([100, 85, 75]);
  const [texture, setTexture] = useState(false);
  const [trigger, setTrigger] = useState(true);

  let curSentence = axiom;
  let newSentence = "";

  useEffect(() => {
    for (let i = 1; i <= n; i++) {
      for (let j = 0; j < curSentence.length; j++) {
        if (curSentence[j] === "F") {
          newSentence += rule;
        } else if (curSentence[j] === "X") {
          newSentence += rule2;
        } else {
          newSentence += curSentence[j];
        }
      }
      curSentence = newSentence;
      newSentence = "";
    }
    setSentence(curSentence);
    setTrigger(true);
  }, []);
  console.log("EXPORT FINAL SENTECE", sentence);
}
