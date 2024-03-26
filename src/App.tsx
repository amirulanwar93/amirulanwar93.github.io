import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Home from "./page/Home";
import WorkingExperience from "./page/workingExperience";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" >
        <Route index element={<Home />} />
        <Route path="/page/working-experience" element={<WorkingExperience />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
