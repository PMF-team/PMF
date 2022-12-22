import { createContext, useState } from "react";

export const TreeContext = createContext();

export const TreeContextProvider = ({
  sentence,
  trigger,
  setTrigger,
  rule,
  angle,
  segmentLength,
  segmentRadius,
  lengthModifier,
  radialModifier,
  color,
  texture,
  children,
}) => {
  // update tree state
  const [treeState, setTreeState] = useState({
    sentence,
    trigger,
    setTrigger,
    rule,
    angle,
    segmentLength,
    segmentRadius,
    lengthModifier,
    radialModifier,
    color,
    texture,
  });
  const setTree = () => {
    setTreeState({
      sentence,
      trigger,
      setTrigger,
      rule,
      angle,
      segmentLength,
      segmentRadius,
      lengthModifier,
      radialModifier,
      color,
      texture,
    });
  };
  return (
    <TreeContext.Provider value={{ tree: setTreeState, setTree }}>
      {children}
    </TreeContext.Provider>
  );
};
