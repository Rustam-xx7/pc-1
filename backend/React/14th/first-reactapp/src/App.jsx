import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Card from "./components/cards";

function App() {
  return (
    <>
      <Navbar />
      <div className="cards">
        <Card title= "card 1" desc="card 1 dsc"/>
        <Card title= "card 2" desc="card 2 dsc"/>
        <Card title= "card 3" desc="card 3 dsc"/>
        <Card title= "card 4" desc="card 4 dsc"/>
      </div>
      <Footer />
    </>
  );
}

export default App;
