import { EventType } from "../../Types/EventType";
import { ListItemButton } from "@mui/material";

const Event = (props: EventType) => {
  const { name_en, name_farsi, img_url, url } = props;
  const { baseClassName } = Event.constants;
  return (
    <ListItemButton
      className={baseClassName}
      style={{ backgroundImage: `url(${img_url})` }}
      href={url ? url : ""}
    >
      <div className={`${baseClassName}-gallery`}>Gallery</div>
      <div className={`${baseClassName}-en`}>{name_en}</div>
      <div className={`${baseClassName}-farsi`}>{name_farsi}</div>
    </ListItemButton>
  );
};

Event.constants = {
  baseClassName: "event",
};

export default Event;
