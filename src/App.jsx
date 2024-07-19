import {
  Route,
  createRoutesFromElements,
  RouterProvider,
  createHashRouter,
} from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
import Homepage from "./pages/Homepage";
import Aboutpage from "./pages/Aboutpage";
import Servicepage from "./pages/Servicepage";
import Journalpage from "./pages/Journalpage";
import Contactpage from "./pages/Contactpage";

function App() {
  const router = createHashRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Homepage />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/service" element={<Servicepage />} />
        <Route path="/journal" element={<Journalpage />} />
        <Route path="/contact" element={<Contactpage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
