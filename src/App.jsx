import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./componenets/Navbar";
import Footer from "./componenets/Footer";

function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <header>
          <Navbar />
        </header>

        {/* Main content area */}
        <main className="flex-grow">
          <Outlet />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
}

export default App;
