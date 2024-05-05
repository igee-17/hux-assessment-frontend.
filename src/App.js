import { Landing, Register, Error } from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  SendMoney,
  MakeTransfer,
  Profile,
  SharedLayout,
  Stats,
} from "./pages/dashboard";
import ProtectedRoute from "./pages/ProtectedRoute";
import CreateContact from "./pages/dashboard/CreateContact";
import EditContact from "./pages/dashboard/EditContact";
import ContactDetails from "./pages/dashboard/ContactDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <SharedLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Stats />} />
          <Route path="create-contact" element={<CreateContact />} />
          <Route path="edit-contact/:id" element={<EditContact />} />
          <Route path="contact-details/:id" element={<ContactDetails />} />
        </Route>

        <Route path="landing" element={<Landing />} />
        <Route path="register" element={<Register />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <ToastContainer position="top-center" />
    </BrowserRouter>
  );
}

export default App;
