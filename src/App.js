import { Route, Routes } from "react-router-dom";
import "./App.css";
import CommonPage from "./components/propertListingPage/CommonPage";
import Login from "./components/Authentication/Login";
import Profile from "./components/Authentication/Profile";
import Register from "./components/Authentication/Register";
import AddProperty from "./components/Add Property/AddProperty";
import Protected from "./Protected";
import ViewPage from "./components/viewPage/ViewPage";
import Update from "./components/updateProperty/Update";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/add"
          element={
            <Protected>
              <AddProperty />
            </Protected>
          }
        />
        <Route path="/register" element={<Register />} />
        <Route
          path="/common"
          element={
            <Protected>
              <CommonPage />
            </Protected>
          }
        />
        <Route
          path="/profile"
          element={
            <Protected>
              <Profile />
            </Protected>
          }
        />
        <Route
          path="/viewPage"
          element={
            <Protected>
              <ViewPage />
            </Protected>
          }
        />
        <Route
          path="/update"
          element={
            <Protected>
              <Update />
            </Protected>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
