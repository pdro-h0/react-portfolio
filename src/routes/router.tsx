import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../components/RootLayout";
import { AboutMe } from "../components/AboutMe";
import { MyProjects } from "../components/MyProjects";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <AboutMe />,
      },
      {
        path: "projects",
        element:<MyProjects />
      },
    ],
  },
]);

export default router
