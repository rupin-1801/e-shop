import { Routes, Route, BrowserRouter } from "react-router-dom";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/signup" element={<LoginPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

/* valid routes for v6:

/groups
/groups/admin
/users/:id
/users/:id/messages
/files/*
/files/:id/*

*/
