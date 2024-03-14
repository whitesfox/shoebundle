import { Instance, Instances } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { Vector3 } from "three";

export function Box({ ...props }) {
  const ref = useRef();
  const [hoverd, setHoverd] = useState(false);
  const num = new Vector3();
  useFrame(() => {
    ref.current.rotation.y += 0.1;
    ref.current.rotation.y += 0.1;
    ref.current.color.set(hoverd ? "red" : "white");
  });

  return (
    <group {...props}>
      <Instance
        ref={ref}
        onPointerOver={(e) => (e.stopPropagation(), setHoverd(true))}
        onPointerOut={() => setHoverd(false)}
      />
    </group>
  );
}
