import Header from "./components/Header";
import { Footer } from "./components/Footer";
import { About, Contact } from "./components/Info";

function App() {
  return (
    <div style={{ padding: "30px" , fontFamily: "Arial"}}>
      <h1>Import and Export Component Example</h1>
      <Header />
      <Footer />
      <About />
      <Contact />
    </div>
  );
}

export default App;