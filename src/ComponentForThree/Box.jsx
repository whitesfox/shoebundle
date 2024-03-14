import { Instance, Instances } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { Vector3 } from "three";
import { easing } from "maath";

export function Box({ ...props }) {
  const ref = useRef();
  const [hoverd, setHoverd] = useState(false);
  const num = new Vector3();
  useFrame((state, delta) => {
    ref.current.rotation.x += 0.1;
    ref.current.rotation.y += 0.1;
    easing.dampC(ref.current.color, hoverd ? "#EA2222" : "#D9F151", 0.7, delta);
    if (hoverd)
      easing.damp3(ref.current.scale, num.set(1.2, 1.2, 1.2), 0.4, delta);
  });

  return (
    <group {...props} scale={0.3}>
      <Instance
        ref={ref}
        onPointerOver={(e) => (e.stopPropagation(), setHoverd(true))}
        onPointerOut={() => setHoverd(false)}
      />
    </group>
  );
}
