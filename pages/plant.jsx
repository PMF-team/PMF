import CanvasTree from "../components/CanvasTree";
import useLsystem from "../hook/lsystem.hook";
import { useState, useEffect } from "react";

export default function tree(params) {
  useLsystem("0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266");

  return (
    <div className="w-screen h-screen">
      <CanvasTree
      // sentence={sentence}
      // trigger={trigger}
      // setTrigger={setTrigger}
      // rule0={rule0}
      // rule1={rule1}
      // rule2={rule2}
      // rule3={rule3}
      // angle={angle}
      // length={segmentLength}
      // radius={segmentRadius}
      // lengthModifier={lengthModifier}
      // radialModifier={radialModifier}
      // color={color} //cтвол
      // color2={color2} //листья
      // color3={color3} //цвет плода
      // texture={texture}
      />
    </div>
  );
}
