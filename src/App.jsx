import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import EmptyLayout from "./layouts/EmptyLayout";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import AboutPage from "./pages/About";
import MoviesPage from "./pages/MoviesPage";
import PricingPage from "./pages/PricingPage";
import FaqPage from "./pages/FaqPage";
import Page404 from "./pages/Page404";
import PATHS from "./constants/path";
import MovieDetailPage from "./pages/MovieDetailPage";
import BreadcrumbLayout from "./layouts/BreadcrumbLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main Layout */}
        <Route path={PATHS.HOME} element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path={PATHS.MOVIES.DETAIL} element={<MovieDetailPage />} />
        </Route>

        {/* Breadcrumb Layout */}
        <Route element={<BreadcrumbLayout />}>
          <Route path={PATHS.ABOUT} element={<AboutPage />} />
          <Route path={PATHS.MOVIES.INDEX} element={<MoviesPage />} />
          <Route path={PATHS.PRICING} element={<PricingPage />} />
          <Route path={PATHS.FAQ} element={<FaqPage />} />
        </Route>

        {/* Empty Layout */}
        <Route element={<EmptyLayout />}>
          <Route path={PATHS.LOGIN} element={<LoginPage />} />
          <Route path={PATHS.REGISTER} element={<RegisterPage />} />
          <Route path={PATHS.NOT_FOUND} element={<Page404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
