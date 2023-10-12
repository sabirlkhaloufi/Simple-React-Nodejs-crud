import Students from "./Pages/Students";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import AddStudent from "./Pages/AddStudent";
import EditStudent from "./Pages/EditStudent";
import NotFound from "./Pages/NotFound";
import './App.css';

function App() {
  return (
    <>
    <BrowserRouter >
      <Routes>
      <Route path="/edit/:id" element={<EditStudent   />} />
      <Route path="/add" element={<AddStudent   />} />
      <Route path="/" element={<Students />} />
      <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
