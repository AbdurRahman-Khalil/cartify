import { Routes, Route } from "react-router-dom";

import { Navbar } from "./components/navbar/Navbar";
import { Products } from "./pages/Products";
import { Cart } from "./pages/Cart";



const App = () => {

  return (
    <div className="wrapper">
      <header>
        <Navbar />
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Products />}>
            <Route path="/cart" element={<Cart />} />
          </Route>
        </Routes>
      </main>
      <footer></footer>

    </div>
  );
};

export default App;
