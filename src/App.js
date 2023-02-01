import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import SearchBar from "./components/SearchBar";
import "./App.css";

function App() {
  const [movie, setMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  return (
    <main className="App">
      <NavBar />
      <Hero />
      <SearchBar />
    </main>
  );
}

export default App;
