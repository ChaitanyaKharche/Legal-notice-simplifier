import { BrowserRouter as Router } from "react-router-dom";
import RoutesProvider from "./routes";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster />
      <Router>
        <RoutesProvider />
      </Router>
    </>
  );
}

export default App;
