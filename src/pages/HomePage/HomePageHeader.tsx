import { useMediaQuery } from "@mui/material";

const HomePageHeader = () => {
  const { baseClassName } = HomePageHeader.constants;

  const isMobile = useMediaQuery("(max-width: 900px)");
  return (
    <>
      <div className={baseClassName}>
        {isMobile ? (
          <></>
        ) : (
          <>
            <span className={`${baseClassName}-title`}>McMaster Iranian Students' Association</span>
            <span className={`${baseClassName}-desc`}>
              MISA is a non-profit student organization at McMaster University, dedicated to
              bringing together the Iranian community through social gatherings and cultural events.
            </span>
          </>
        )}
      </div>
      {isMobile ? (
        <div className={`${baseClassName}-mobile`}>
          <span className={`${baseClassName}-title`}>McMaster Iranian Students Association</span>
          <span className={`${baseClassName}-desc`}>
            MISA is a non-profit student organization at McMaster University, dedicated to bringing
            together the Iranian community through social gatherings and cultural events.
          </span>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

HomePageHeader.constants = {
  baseClassName: "home-page-header",
};

export default HomePageHeader;
