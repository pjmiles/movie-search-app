import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import SearchBar from "./components/SearchBar";
import MovieBody from "./components/MovieBody";
import { useState } from "react";
import "./App.css";

function App() {
  const [movie, setMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  return (
    <main className="App">
      <NavBar />
      <Hero />
      <SearchBar
        setErrMsg={setErrMsg}
        setIsLoading={setIsLoading}
        setMovie={setMovie}
      />
      <MovieBody 
        movie={movie} 
        errMsg={errMsg} 
        isLoading={isLoading} 
      />
    </main>
  );
}

export default App;
