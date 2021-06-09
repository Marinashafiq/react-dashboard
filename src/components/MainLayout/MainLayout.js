import React, { useState } from "react";
import { connect, useSelector } from "react-redux";
import clsx from "clsx";
import { useTheme } from "@material-ui/core/styles";
import { AppBar, Toolbar, CssBaseline, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import Navbar from "../Navbar/Navbar";
import Loader from "../Loader/Loader";
import SideMenu from "../SideMenu/SideMenu";
import { useStyles } from "./MainLayoutStyles";
import ResponsiveDrawer from "../DrawerSideMenu/DrawerSideMenu";
import { useEffect } from "react";
import "./layout.scss";

function MainLayout(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };
  const [state, setState] = React.useState({
    left: false,
    right: false,
  });

  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    console.log(width);
    width <= 768 && setOpen(false);
    width > 768 &&
      setState({
        left: false,
        right: false,
      });
    return () => window.removeEventListener("resize", updateDimensions);
  }, [width]);

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  return (
    <div className="main_contant">
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={`desktop_side_menu ${clsx(classes.menuButton, {
              [classes.hide]: open,
            })}`}
          >
            <MenuIcon />
          </IconButton>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer("left", true)}
            edge="start"
            className={"mobile_side_menu"}
          >
            <MenuIcon />
          </IconButton>
          <Navbar />
        </Toolbar>
      </AppBar>
      <div className="desktop_side_menu">
        <SideMenu
          open={open}
          theme={theme}
          handleCloseDrawer={() => setOpen(false)}
          classes={classes}
        />
      </div>
      <div className="mobile_side_menu">
        <ResponsiveDrawer toggleDrawer={toggleDrawer} state={state} />
      </div>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {props.loading ? <Loader /> : props.children}
      </main>
    </div>
  );
}

const mapStateToProps = ({ loading }) => ({
  loading,
});

export default connect(mapStateToProps, null)(MainLayout);
