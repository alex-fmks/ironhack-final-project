import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import SignUp from "./pages/SignUp/SignUp";
import Events from "./pages/Events/index";
import ProtectedRoute from "./components/ProtectedRoute";
import CreateEvent from "./pages/CreateEvent";
import Eventboard from "./pages/Eventboard";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/events"
          element={
            <ProtectedRoute redirectTo="/">
              <Events />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/create-event"
          element={
            <ProtectedRoute redirectTo="/">
              <CreateEvent />
            </ProtectedRoute>
          }
        ></Route>
        <Route path="/events/:id" element={<Eventboard />} />
      </Routes>
    </>
  );
}

export default App;
