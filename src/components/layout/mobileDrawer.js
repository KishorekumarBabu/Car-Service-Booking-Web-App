import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Hidden from "@material-ui/core/Hidden";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import HomeIcon from "@material-ui/icons/Home";
import SettingsApplicationsIcon from "@material-ui/icons/SettingsApplications";
import InfoIcon from "@material-ui/icons/Info";
import MovieIcon from "@material-ui/icons/Movie";
import HelpIcon from "@material-ui/icons/Help";
import RateReviewIcon from "@material-ui/icons/RateReview";
import PermContactCalendarIcon from "@material-ui/icons/PermContactCalendar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

const WELCOME_TEXT = "Hi Customer";
const useStyles = makeStyles({
  list: {
    width: 250
  },
  drawerPaper: {
    width: 250
  },
  userView: {
    backgroundColor: "var(--main-bg-color)",
    paddingLeft: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around"
  },
  listItemStyle: {
    padding: "0px 16px"
  }
});

const navLinksList = [
  {
    name: "Home",
    icon: <HomeIcon />
  },
  {
    name: "Services",
    icon: <SettingsApplicationsIcon />
  },
  {
    name: "About Us",
    icon: <InfoIcon />
  },
  {
    name: "Videos",
    icon: <MovieIcon />
  },
  {
    name: "Why Us?",
    icon: <HelpIcon />
  },
  {
    name: "Testimonials",
    icon: <RateReviewIcon />
  },
  {
    name: "Contact Us",
    icon: <PermContactCalendarIcon />
  }
];

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

export default function MobileDrawer() {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <nav className={classes.drawer} aria-label="mailbox folders">
      <Hidden only={["lg", "xl"]} implementation="css">
        <IconButton
          color="inherit"
          aria-label="menu"
          onClick={handleDrawerToggle}
        >
          <MenuIcon />
        </IconButton>
      </Hidden>

      <Drawer
        anchor={"left"}
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true // Better open performance on mobile.
        }}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div
          className={classes.list}
          role="presentation"
          onClick={handleDrawerToggle}
          onKeyDown={handleDrawerToggle}
        >
          <div className={classes.userView}>
            <div className="white-text name">{WELCOME_TEXT}</div>
            <IconButton
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerToggle}
            >
              <AccountCircleIcon fontSize="large" />
            </IconButton>
          </div>
          {navLinksList.map(navLink => (
            <List component="nav" key={navLink.name}>
              <ListItemLink
                href={`#${navLink.name}`}
                className={classes.listItemStyle}
              >
                <ListItemIcon>{navLink.icon}</ListItemIcon>
                <ListItemText primary={navLink.name} />
              </ListItemLink>
            </List>
          ))}
        </div>
      </Drawer>
    </nav>
  );
}
