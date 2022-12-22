import { useEffect, useState } from "react";
//PROPS ??? TO CONTEXT
export default function useLsystem(blockchainAdress) {
  // const [showMenu, setMenu] = useState(false);
  //аксиома для дерева - наш кошелек
  //если при создании графики будет слишком сложное дерево, можно обрезать аксиому - оставить 3-5 символов
  //еще кошельки для примеров
  //0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266
  //0x70997970C51812dc3A010C7d01b50e0d17dc79C8
  //0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC
  const [axiom, setAxiom] = useState(blockchainAdress);
  //количество ярусов дерева - итераций, возможно сочетать потом с возрастом дерева
  const [n, setN] = useState(3);
  //правила, задающие формулу дерева
  const [sentence, setSentence] = useState(axiom);
  const [numIterations, setIterations] = useState(3);
  //задаем соответствие символа из кошелька в формулу для кусочка дерева, отражающую эти символы
  //пока наугад, потом, когда прикрутим графику, можно будет поиграть формой дерева/веток/прочего
  const [rule0, setRule0] = useState("F[&F++-][--F---]");
  const [rule1, setRule1] = useState("F[&+++F][-----F]");
  const [rule2, setRule2] = useState("[^^^^-F][&--&&F]");
  const [rule3, setRule3] = useState("F[&+++F][&&&++F]");
  //угол наклона веток к друг другу, должно быть <= 90
  const [angle, setAngle] = useState(10);

  //Параметры для рисования, в расчете формулы не используются (или почти не используются)
  //Длина ствола, по идее видимо при прорисовке ствола будет делиться и сокращаться
  const [segmentLength, setLength] = useState(3);
  //Толщина ствола, аналогично, при рисовании будет уменьшаться в диаметре
  const [segmentRadius, setRadius] = useState(0.18);
  //?
  const [lengthModifier, setLengthModifier] = useState(0.6);
  const [radialModifier, setRadialModifier] = useState(0.6);
  //Это настройки цветов в RGB
  //в данной реализации только веточки и только один цвет
  //TODO надо большего разнообразия цвета/оттенков
  //TODO надо добавить листочки
  const [color, setColor] = useState([100, 85, 75]);
  //?
  const [texture, setTexture] = useState(false);
  const [trigger, setTrigger] = useState(true);

  let curSentence = axiom;
  let newSentence = "";

  //собираем формулу дерева по аксиоме и по заданным правилам
  useEffect(() => {
    for (let i = 1; i <= n; i++) {
      for (let j = 0; j < curSentence.length; j++) {
        switch (curSentence[j]) {
          case "F":
          case "f":
          case "4":
          case "5":
            newSentence += rule0;
            break;
          case "0":
          case "1":
          case "2":
          case "3":
            newSentence += rule1;
            break;
          case "6":
          case "7":
          case "8":
          case "9":
            newSentence += rule2;
            break;
          case "A":
          case "a":
          case "C":
          case "c":
            newSentence += rule3;
          case "b":
          case "B":
          case "d":
          case "D":
            newSentence += rule3;
            break;
          default:
            newSentence += curSentence[j];
        }
      }
      curSentence = newSentence;
      newSentence = "";
    }
    setSentence(curSentence);
    setTrigger(true);
  }, []);

  return console.log("EXPORT FINAL SENTECE", sentence);
}
