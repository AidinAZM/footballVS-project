import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./pages/AppLayout";
import AppMain from "./pages/AppMain";
import QuestionProvider from "./Context/QuestionContext";

function App() {
  return (
    <>
      <BrowserRouter>
        <QuestionProvider>
          <Routes>
            <Route path="/q" element={<AppLayout />} />
            <Route path="/" element={<AppMain />} />
          </Routes>
        </QuestionProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
