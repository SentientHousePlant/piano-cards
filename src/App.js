import "./Components/OnShowCard/OnShowCard";
import OnShowCard from "./Components/OnShowCard/OnShowCard";
let testDeck = require("./Data/Deck1.json");

function App() {
  return (
    <div className="piano-background">
      <div className="flex flex-col items-center w-1/3 h-screen mx-auto place-content-center">
        <OnShowCard deckData={testDeck} />
      </div>
    </div>
  );
}

export default App;
