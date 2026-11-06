import ComponentOne from "./components/ComponentOne";
import ComponentTwo from "./components/ComponentTwo";
import ComponentThree from "./components/ComponentThree";
function App() {
  return (
    <div>
      <ComponentOne></ComponentOne>
      <ComponentTwo />
      {ComponentThree()}
    </div>
  );
}

export default App;
