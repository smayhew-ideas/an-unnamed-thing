import { createBrowserRouter } from "react-router";
import HomePage from "./pages/HomePage";
import LetterPage from "./pages/LetterPage";
import ModelPage from "./pages/ModelPage";
import SubstratePage from "./pages/SubstratePage";
import LabPage from "./pages/LabPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomePage,
  },
  {
    path: "/letter",
    Component: LetterPage,
  },
  {
    path: "/model",
    Component: ModelPage,
  },
  {
    path: "/substrate",
    Component: SubstratePage,
  },
  {
    path: "/lab",
    Component: LabPage,
  },
]);
