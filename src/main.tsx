import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Auth } from "./context/Auth.tsx";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Auth>
      <App />
    </Auth>
    <Toaster position="top-center" reverseOrder={false} />
  </BrowserRouter>
);
