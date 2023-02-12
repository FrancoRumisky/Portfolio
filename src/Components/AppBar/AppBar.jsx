import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Drawer from "@mui/material/Drawer";
import Typography from "@mui/material/Typography";
import s from "../AppBar/AppBar.module.css"

function AppBar(props) {
  const [state, setState] = React.useState(false);

  const navigate = useNavigate();

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState(open);
  };

  return (
    <>
      <div>
        <React.Fragment key={"top"}>
          <div
            onClick={toggleDrawer(!state)}
            className={`${s.menu_toggle} ${state === true ? s.open : ""} `}
          >
            <i></i>
          </div>
          <Drawer
            anchor={"top"}
            open={state}
            onClose={toggleDrawer(false)}
            sx={{ opacity: "0.9" }}
          >
            <div className={s.menuItems}>
              <Typography
                align="center"
                variant="h2"
                mt={"12rem"}
                onClick={(e) => {
                  navigate("/");
                  setState(false);
                }}
              >
                About
              </Typography>
              <Typography
                align="center"
                variant="h2"
                mt={10}
                onClick={() => {
                  navigate("/proyects");
                  setState(false);
                }}
              >
                Proyects
              </Typography>
              <Typography
                align="center"
                variant="h2"
                mt={10}
                onClick={() => {
                  navigate("/contact");
                  setState(false);
                }}
              >
                Contact
              </Typography>
            </div>
          </Drawer>
        </React.Fragment>
      </div>
      <Outlet />
    </>
  );
}

export default AppBar;
