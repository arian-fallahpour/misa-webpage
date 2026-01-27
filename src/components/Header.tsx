import { useState } from "react";
import {
  Button,
  Drawer,
  IconButton,
  useMediaQuery,
  Box,
  Toolbar,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";

const PageHeader = () => {
  const { baseClassName, links } = PageHeaderConstants;

  const isMobile = useMediaQuery("(max-width:900px)");
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };
  const navigate = useNavigate();

  const navLinks = (
    <>
      {links.map((elm) => {
        return <Button onClick={() => handleReroute(elm.page)}>{elm.text}</Button>;
      })}
      <Button variant="contained" className={`${baseClassName}-links-join`}>
        Join Us
      </Button>
    </>
  );

  const handleReroute = (page: string) => {
    navigate(`/${page}`);
  };

  const navMobileLinks = (
    <>
      <List>
        {links.map((elm) => (
          <ListItem key={elm.text} disablePadding>
            <ListItemButton onClick={() => handleReroute(elm.page)}>
              <ListItemText primary={elm.text} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem key={"join"} disablePadding>
          <ListItemButton onClick={() => handleReroute("")}>
            <ListItemText primary={"Join Us"} />
          </ListItemButton>
        </ListItem>
      </List>
    </>
  );

  return (
    <div className={baseClassName}>
      <div className={`${baseClassName}-logo`} />

      {isMobile ? (
        <>
          <IconButton onClick={toggleDrawer(true)}>
            <MenuIcon sx={{ color: "white" }} />
          </IconButton>
          <Drawer
            anchor="right"
            open={drawerOpen}
            onClose={toggleDrawer(false)}
            sx={{
              "& .MuiDrawer-paper": {
                backgroundColor: "#262626",
                color: "white",
              },
            }}
          >
            <Toolbar />
            <Box
              sx={{ width: 250 }}
              role="presentation"
              onClick={toggleDrawer(false)}
              onKeyDown={toggleDrawer(false)}
            >
              {navMobileLinks}
            </Box>
          </Drawer>
        </>
      ) : (
        <div className={`${baseClassName}-links`}>{navLinks}</div>
      )}
    </div>
  );
};

const PageHeaderConstants = {
  baseClassName: "page-header",
  links: [
    { text: "Home", page: "" },
    { text: "Events", page: "events" },
    // { text: "Our Team", page: "team" },
    // {
    //   text: "Join Us",
    //   page: "https://linktr.ee/mcmastermisa?fbclid=PAZXh0bgNhZW0CMTEAAaaSw6Dr1VbKM4E7uuDOgcuHFSg8ysNPULjS0KzNCStUc7kZwNvuxFpi0sI_aem_vPf3x_RaLK5JRdLf3Ghpkg",
    // },
  ],
};

export default PageHeader;
