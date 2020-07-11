import React, { useState } from "react";
import {
  Drawer,
  List,
  Divider,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { injectIntl } from "react-intl";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import HomeIcon from "@material-ui/icons/Home";
import TableChartIcon from "@material-ui/icons/TableChart";
import { useStyles } from "./SideMenuStyles";

const SideMenu = ({
  open,
  intl: { messages },
  theme,
  handleCloseDrawer,
}) => {
  const classes = useStyles();
  const sideMenuList = [
    {
      icon: <HomeIcon />,
      text: messages.pages.dashboard,
      link: "/",
    },
    {
      icon: <InboxIcon />,
      text: messages.pages.forms,
      link: "/forms",
    },
    {
      icon: <TableChartIcon />,
      text: messages.pages.tables,
      link: "/tables",
    },
  ];

  const [selected, setSelected] = useState(0);

  const handleDrawerClose = () => {
    handleCloseDrawer(false);
  };

  const handleListItemClick = (e, index) => {
    setSelected(index);
  };

  const renderList = () => {
    return sideMenuList.map((item, index) => (
      <Link to={item.link} key={index}>
        <ListItem
          button
          selected={selected === index}
          onClick={(event) => handleListItemClick(event, index)}
        >
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText primary={item.text} />
        </ListItem>
      </Link>
    ));
  };

  return (
    <Drawer
      variant="permanent"
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: open,
        [classes.drawerClose]: !open,
      })}
      classes={{
        paper: clsx({
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        }),
      }}
    >
      <div className={classes.toolbar}>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "rtl" ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
      </div>
      <Divider />
      <List className="sideMenu">{renderList()}</List>
    </Drawer>
  );
};

export default injectIntl(SideMenu);
