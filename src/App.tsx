import { Canvas } from "@react-three/fiber";
import { Logo } from "./components/Logo";
import { SCENE } from "./state/Config";
import LandingText from "./UI/LandingText";

function App() {
  return (
    <>
      <Canvas camera={{ position: SCENE.cameraPosition }}>
        <Logo position-y={0.25} />
      </Canvas>
      <LandingText />
    </>
  );
}

export default App;
