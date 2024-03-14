import { Instance, Instances } from "@react-three/drei";
import { data } from "../Serve/store";
import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { Vector3 } from "three";
import { Box } from "./Box";

function Boxs() {
  //   const ref = useRef();
  //   const [hoverd, setHoverd] = useState(false);
  //   const num = new Vector3();
  //   useFrame(() => {
  //     ref.current.rotation.y += 0.1;
  //     ref.current.rotation.y += 0.1;
  //     ref.current.color.set(hoverd ? "red" : "white");
  //     ref.current.scale.x =
  //       ref.current.scale.y =
  //       ref.current.scale.z =
  //         num.set(hoverd ? 1.5 : 0.8);
  //   });

  return (
    <Instances limit={100} range={30}>
      <boxGeometry />
      <meshStandardMaterial />
      {data.map((props, index) => (
        <Box key={index} {...props} />
        // <Instance
        //   scale={0.8}
        //   key={index}
        //   position={item.position}
        //   rotation={item.rotation}
        //   ref={ref}
        //   onPointerOver={(e) => (e.stopPropagation(), setHoverd(true))}
        //   onPointerOut={() => setHoverd(false)}
        // />
      ))}
    </Instances>
  );
}

export default Boxs;
