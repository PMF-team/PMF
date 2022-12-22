import { DoubleSide } from "three";
import { useContext } from "react";
import { TreeContext } from "../context/tree.context";

export default function GenerativeTree() {
  const { tree, useTree } = useContext(TreeContext);
  console.log("TREE CONTEXT:", tree);

  function constructScene() {
    let xAngle = 0;
    let yAngle = 0;
    let zAngle = 0;
    let length = props.length;
    let radius = props.radius;
    let states = [];
    let origin = createOrigin();
    origin.position.set(0, -4.5, 0);

    let prevSeg = origin;
    let prevLength = 0;

    for (let i = 0; i < props.sentence.length; i++) {
      if (props.sentence[i] === "F") {
        let mySegment = segment(
          length,
          radius,
          props.radialModifier,
          xAngle,
          yAngle,
          zAngle,
          props.lengthModifier,
          props.color,
          props.texture,
          prevLength
        );

        prevSeg.add(mySegment);
        prevSeg = mySegment;
        xAngle = 0;
        yAngle = 0;
        zAngle = 0;
        prevLength = length;
        length *= props.lengthModifier;
        radius *= props.radialModifier;

        if (radius * props.radialModifier < 0.03) {
          radius = 0.03;
        }
        if (length * props.lengthModifier < 0.3) {
          length = 0.3;
        }
      }
      if (props.sentence[i] === "+") {
        zAngle += props.angle;
      }
      if (props.sentence[i] === "-") {
        zAngle -= props.angle;
      }
      if (props.sentence[i] === "^") {
        xAngle += props.angle;
      }
      if (props.sentence[i] === "&") {
        xAngle -= props.angle;
      }
      if (props.sentence[i] === "<") {
        yAngle += props.angle;
      }
      if (props.sentence[i] === ">") {
        yAngle -= props.angle;
      }
      if (props.sentence[i] === "[") {
        states.push({
          segment: prevSeg,
          zAngle: zAngle,
          yAngle: yAngle,
          xAngle: xAngle,
          length: length,
          prevLength: prevLength,
          radius: radius,
        });
      }
      if (props.sentence[i] === "]") {
        let lastState = states[states.length - 1];
        prevSeg = lastState.segment;
        zAngle = lastState.zAngle;
        yAngle = lastState.yAngle;
        xAngle = lastState.xAngle;
        length = lastState.length;
        prevLength = lastState.prevLength;
        radius = lastState.radius;
        states.pop();
      }
    }
    props.setTrigger(false);
  }

  return (
    <group>
      <mesh position={[0, -1.5, 0]}>
        <cylinderGeometry />
        <meshStandardMaterial color="hotpink" />
      </mesh>
      <mesh position-y={-2} rotation-x={-Math.PI * 0.5} scale={6}>
        <planeBufferGeometry />
        <meshStandardMaterial color="green" side={DoubleSide} />
      </mesh>
    </group>
  );
}
