import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Store } from "./pages/Store";
import { About } from "./pages/About";
import { Navbar } from "./components/Navbar";
import { ShoppingCart } from "./components/ShoppingCart";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";

function App() {
    return (
        <ShoppingCartProvider>
            <Navbar />
            <div className="container mx-auto">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/store" element={<Store />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </div>
            <ShoppingCart />
        </ShoppingCartProvider>
    );
}

export default App;
