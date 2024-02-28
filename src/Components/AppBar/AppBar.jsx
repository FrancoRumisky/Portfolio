import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Drawer from "@mui/material/Drawer";
import Typography from "@mui/material/Typography";
import s from "../AppBar/AppBar.module.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

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

  const orient = window.screen.width > 500 ? "top" : "bottom"


  return (
    <>
      <div>
        <React.Fragment key={orient}>
          <div
            onClick={toggleDrawer(!state)}
            className={`${s.menu_toggle} ${state === true ? s.open : ""} `}
          >
            <i></i>
          </div>
          <Drawer
            anchor={orient}
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
      <div className={s.toggleLeft}>
        <a href="https://www.linkedin.com/in/franco-rumisky-882b2b241/" target="_blank" rel="noreferrer">
        <div className={s.linkeContainer} >
          <LinkedInIcon sx={{ fontSize: "40px"}} className={s.linke}/>
        </div>
        </a>
        <a href="https://github.com/FrancoRumisky" target="_blank" rel="noreferrer">
        <div className={s.gitContainer}>
          <GitHubIcon sx={{ fontSize: "40px"}} className={s.git} />
        </div>
        </a>
        <a href="https://www.instagram.com/franco.rumisky/" target="_blank" rel="noreferrer">
        <div className={s.instaContainer}>
          <InstagramIcon sx={{ fontSize: "40px"}} className={s.insta} />
        </div>
        </a>
        <a href="./Franco Rumisky CV plano 2024" target="_blank" rel="noreferrer">
        <div className={s.PDFPreviewContainer}>
          <PictureAsPdfIcon sx={{ fontSize: "40px"}} className={s.PDFPreview} />
        </div>
        </a>
      </div>
      <Outlet />
    </>
  );
}

export default AppBar;
