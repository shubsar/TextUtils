import { useState } from "react";
import About from "./About";
import "./App.css";
import Navbar from "./Navbar";
import Textform from "./Textform";
import Alert from "./components.js/Alert";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#60628b";
      showAlert("Dark mode has been enabled.", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled.", "success");
    }
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar title={"TextUtils"} mode={mode} toggleMode={toggleMode} />
          <Textform
            showAlert={showAlert}
            heading="Enter the text to analyze"
            mode={mode}
          />
        </>
      ),
    },
    { path: "/about", element: <About /> },
  ]);
  return (
    <>
      <RouterProvider router={router}>
        <Alert alert={alert} />
      </RouterProvider>
    </>
  );
}

export default App;
