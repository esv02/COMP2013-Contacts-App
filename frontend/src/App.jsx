import "./App.css";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import ContactsApp from "./Components/ContactsApp";
import LoginPage from "./Components/LoginPage";
import RegisterPage from "./Components/RegisterPage";
import NotAuthorized from "./Components/NotAuthorized";
import PageNotFound from "./Components/PageNotFound";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />}/>
          <Route path="/contacts" element={<ContactsApp />}/>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/not-authorized" element={<NotAuthorized />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
