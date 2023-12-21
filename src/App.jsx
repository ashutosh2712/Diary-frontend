import "./App.css";
import DiaryEntries from "./pages/diaryentries/DiaryEntries";
import DiaryEntry from "./pages/diaryentry/DiaryEntry";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<DiaryEntries />}></Route>
          <Route path="entries" element={<DiaryEntry />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="register" element={<Register />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
