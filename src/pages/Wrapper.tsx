import { Outlet, useLocation } from "react-router-dom";
import PageHeader from "../components/Header";
import PageFooter from "../components/Footer";
import { useEffect } from "react";

const Wrapper = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="base-page">
      <PageHeader />
      <Outlet />
      <PageFooter />
    </div>
  );
};

export default Wrapper;
