import { Canvas } from "@react-three/fiber";
import Boxs from "../ComponentForThree/Boxs";
import { OrbitControls } from "@react-three/drei";

import "../Style/App.css";

function App() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <directionalLight intensity={0.3} />
      <Boxs />
      <OrbitControls enableZoom={true} autoRotate autoRotateSpeed={1.5} />
    </Canvas>
  );
}

export default App;
