import { Route, Routes } from "react-router";
import AppLayout from "./components/AppLayout/AppLayout";
import { lazy, Suspense } from "react";
import Loading from "./components/Loading/Loading";

const Home = lazy(() => import("./pages/Home/Home"));
const PortFolio = lazy(() => import("./pages/Portfolio/PortFolio"));
const ProjectDetail = lazy(() => import("./pages/ProjectDetail/ProjectDetail"));
const Contact = lazy(() => import("./pages/Contact/Contact"));
const NotFound = lazy(() => import("./components/NotFound-404/NotFound"));

const AppRouter = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="portfolio" element={<PortFolio />} />
          <Route path="portfolio/:projectId" element={<ProjectDetail />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
