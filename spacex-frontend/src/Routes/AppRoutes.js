import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
const LandingPage = lazy(() => import("../Screens/LandingPage/LandingPage"));
export const AppRoutes = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </Suspense>
  );
};
