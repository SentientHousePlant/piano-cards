import "./Components/OnShowCard/CurrentCard";
import OnShowCard from "./Components/OnShowCard/CurrentCard";
let testDeck = require("./Data/Deck1.json");

function App() {
  return (
    <div className="w-screen h-screen piano-background">
      <div className="flex flex-col w-2/3 h-screen mx-auto place-content-center">
        <OnShowCard deckData={testDeck} />
      </div>
    </div>
  );
}

export default App;
