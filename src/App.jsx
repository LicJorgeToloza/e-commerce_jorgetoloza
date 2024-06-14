import { Navbar } from "./navbar/Navbar";
import { ItemListContainer } from ".//itemListContainer/ItemListContainer";

function App() {

    return (  
      <div>
  <h1> Jorge Toloza - Cars</h1>
  <Navbar />
  <ItemListContainer greeting={"Tienda de Autos a escala"} />
  </div>
  )
}

export default App;
