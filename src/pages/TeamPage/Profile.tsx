import { Avatar, useMediaQuery } from "@mui/material";

interface ProfileProps {
  name: string;
  img_url: string;
  role: string;
  color: string;
}

const Profile = (props: ProfileProps) => {
  const { baseClassName } = Profile.constants;
  const { name, img_url, role, color } = props;
  const isMobile = useMediaQuery("(max-width:900px)");

  return (
    <div className={baseClassName}>
      <Avatar
        src={img_url}
        sx={isMobile ? { width: 80, height: 80 } : { width: 120, height: 120 }}
      />
      <h4 className={`${baseClassName}-role`} style={{ color: color }}>{role}</h4>
      <h5 className={`${baseClassName}-name`}>{name}</h5>
    </div>
  );
};

Profile.constants = {
  baseClassName: "profile",
};

export default Profile;
