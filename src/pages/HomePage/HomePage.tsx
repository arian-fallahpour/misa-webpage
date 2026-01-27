import HomePageContent from "./HomePageContent";
import HomePageHeader from "./HomePageHeader";

const HomePage = () => {
  const { baseClassName } = HomePage.constants;
  return (
    <div className={baseClassName}>
      <HomePageHeader />
      <HomePageContent />
    </div>
  );
};

HomePage.constants = {
  baseClassName: "home-page",
};

export default HomePage;
