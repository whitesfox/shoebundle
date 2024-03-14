import { Instance, Instances } from "@react-three/drei";
import { data } from "../Serve/store";
import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { Vector3 } from "three";
import { Box } from "./Box";

function Boxs() {
  return (
    <Instances limit={1000} range={500}>
      <capsuleGeometry />
      <meshStandardMaterial />
      {data.map((props, index) => (
        <Box key={index} {...props} />
      ))}
    </Instances>
  );
}

export default Boxs;
