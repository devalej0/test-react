import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/about";
import NotFound from "./pages/notfound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/pages/about" element={<About/>}/>

        <Route path="/pages/*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
