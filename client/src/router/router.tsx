import { createBrowserRouter } from "react-router-dom";
import { ProcessList } from "../pages/process-list";
import { ProcessPage } from "../pages/process";
import { App } from "../app";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        index: true,
        element: <ProcessList></ProcessList>,
      },
      {
        path: "process/:id",
        element: <ProcessPage></ProcessPage>,
      },
    ],
  },
]);
