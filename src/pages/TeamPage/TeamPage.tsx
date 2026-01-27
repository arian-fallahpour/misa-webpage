import { alum_names } from "../../constants/alum_names";
import { profiles } from "../../constants/profiles/profiles";
import Profile from "./Profile";

const TeamPage = () => {
  const { baseClassName, description_1, descriptoin_2 } = TeamPage.constants;
  return (
    <div className={baseClassName}>
      <h1 className={`${baseClassName}-title`} style={{ color: "#d99438" }}>
        Meet Our Executive Members
      </h1>
      <h5 className={`${baseClassName}-desc`}>{description_1}</h5>
      <div className={`${baseClassName}-profiles`}>
        {profiles.map((elm, index) => {
          return (
            <Profile
              name={elm.name}
              img_url={elm.image}
              role={elm.role}
              color={index % 2 == 0 ? "#D99438" : "#4DB3C4"}
            />
          );
        })}
      </div>
      <h1 className={`${baseClassName}-title`} style={{ color: "#4DB3C4" }}>
        Alumni and Volunteers
      </h1>
      <h5 className={`${baseClassName}-desc`}>{descriptoin_2}</h5>
      <div className={`${baseClassName}-alum`}>
        {alum_names.map((elm) => (
          <span className={`${baseClassName}-alum-name`}>{elm}</span>
        ))}
      </div>
    </div>
  );
};

TeamPage.constants = {
  baseClassName: "team-page",
  description_1:
    "Our executive team is dedicated to fostering a vibrant community at McMaster University that celebrates Iranian culture and values. Through their hard work, they promote meaningful connections, cultural understanding, and a shared sense of belonging for both Iranians and non-Iranians alike.",
  descriptoin_2:
    "We sincerely thank our alumni and volunteers for their dedication and hard work over the years. Their contributions have been instrumental in shaping our community and bringing our vision to life.",
};

export default TeamPage;
