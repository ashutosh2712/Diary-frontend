import "./App.css";
import ProtectedRoute from "./components/ProtectedRoute";
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
          {/* <Route index element={<DiaryEntries />}></Route> */}
          <Route
            index
            element={
              <ProtectedRoute>
                <DiaryEntries />
              </ProtectedRoute>
            }
          />
          <Route
            path="entries"
            element={
              <ProtectedRoute>
                <DiaryEntry />
              </ProtectedRoute>
            }
          />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
