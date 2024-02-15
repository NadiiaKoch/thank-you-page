import "./App.css";
import { ThemeProvider } from "./contexts/ThemeContext";
import Header from "./components/Header";
import ThankYou from "./Pages/ThankYou";
import Footer from "./components/Footer";

function App() {
  return (
    <ThemeProvider>
      <div className="bg-bkg flex flex-col min-h-screen">
        <Header />
        <ThankYou />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
