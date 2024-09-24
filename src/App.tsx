import { Canvas } from "@react-three/fiber";
import { Logo } from "./components/Logo";
import { SCENE } from "./state/Config";

function App() {
  return (
    <>
      <Canvas camera={{ position: SCENE.cameraPosition }}>
        <Logo />
      </Canvas>
    </>
  );
}

export default App;
