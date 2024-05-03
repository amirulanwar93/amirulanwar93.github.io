import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Home from "./page/Home";
import WorkingExperience from "./page/workingExperience";
import Skills from "./page/skills";
import Education from "./page/education";
import OtherExperience from "./page/otherExperience";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="/experience" element={<WorkingExperience />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/education" element={<Education />} />
        <Route path="/other" element={<OtherExperience />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
