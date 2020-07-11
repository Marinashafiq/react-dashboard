import React, { useState } from "react";
import { connect } from "react-redux";
import clsx from "clsx";
import { useTheme } from "@material-ui/core/styles";
import { AppBar, Toolbar, CssBaseline, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import Navbar from "../../../components/Navbar/Navbar";
import Loader from "../../../components/Loader/Loader";
import SideMenu from "../../../components/SideMenu/SideMenu";
import { useStyles } from "./MainLayoutStyles";

function MainLayout(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  return (
    <div className={classes.root}>
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
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Navbar />
        </Toolbar>
      </AppBar>
      <SideMenu
        open={open}
        theme={theme}
        handleCloseDrawer={() => setOpen(false)}
        classes={classes}
      />
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
