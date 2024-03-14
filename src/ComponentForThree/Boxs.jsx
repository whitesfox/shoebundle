import { Instance, Instances } from "@react-three/drei";
import { data, range } from "../Serve/store";
import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { Vector3 } from "three";
import { Box } from "./Box";
import { useControls } from "leva";

function Boxs() {
  const { range } = useControls({
    range: { value: 500, min: 0, max: 1000, step: 50 },
  });

  return (
    <Instances limit={1000} range={range} scale={0.3}>
      <capsuleGeometry />
      <meshStandardMaterial />
      {data.map((props, index) => (
        <Box key={index} {...props} />
      ))}
    </Instances>
  );
}

export default Boxs;
