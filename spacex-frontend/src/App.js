import { ToastContainer } from "react-toastify";
import "./App.css";
import { AppRoutes } from "./Routes/AppRoutes";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <AppRoutes />
    </div>
  );
}

export default App;
