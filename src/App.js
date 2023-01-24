import './App.css';
import Profile from "./components/Profile";
import About from "./components/About";
import Interests from "./components/Interests";
import Footer from "./components/Footer";

function App() {
  return (
    <main>
      <div>
        <Profile />
        <About />
        <Interests />
        <Footer />
      </div>
    </main>
  )
}

export default App;
