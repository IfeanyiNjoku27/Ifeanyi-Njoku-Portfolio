import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import Navbar from "./NavBar";
import { Toaster } from "react-hot-toast";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
    {/* Renders notification popup globally */}
    <Toaster 
      position="top-right"
      toastOptions={{
        style: {
          background: '#333',
          color: '#fff'
        },
        success: {
          iconTheme: {
            primary: '#28a745',
            secondary: '#fff'
          },
        }
      }}
    />
      <Navbar />
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
