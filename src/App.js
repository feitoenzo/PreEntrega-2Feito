import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import CartWidget from "./Components/CartWidget/CartWidget";

function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer
        greeting={"Bienvenidos a Relojes -El timepo es oro-"}
      />
      <Footer />
    </div>
  );
}

export default App;
