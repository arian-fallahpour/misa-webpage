import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Wrapper from "./pages/Wrapper";
// import EventsPage from "./pages/EventsPage/EventsPage";
import HomePage from "./pages/HomePage/HomePage";
// import TeamPage from "./pages/TeamPage/TeamPage";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route Component={Wrapper}>
          <Route path="/" Component={HomePage} />
          {/* <Route path="/events" Component={EventsPage} /> */}
          {/* <Route path="/team" Component={TeamPage} /> */}
          // This will reroute all the extra routes to the homepage
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
