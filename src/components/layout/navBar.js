import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MobileDrawer from "./mobileDrawer";
import DesktopMenuLink from "./desktopMenuLink";
import CssBaseline from "@material-ui/core/CssBaseline";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    fontFamily: "Lobster",
    display: "table",
    fontStyle: "italic",
    fontWeight: "bold"
  },
  appBarStyle: {
    backgroundColor: "#339AC2",
    display: "flex",
    flexDirection: "row",
    position: "fixed"
  },
  storeLogo: {
    color: "#339ac2",
    backgroundColor: "#FFFFFF",
    width: "50px",
    height: "50px",
    borderRadius: "4px",
    position: "static",
    padding: 0,
    margin: 0,
    fontSize: "22px",
    display: "table-cell",
    textAlign: "center",
    verticalAlign: "middle"
  },
  storeName: {
    textAlign: "center",
    display: "table-cell",
    verticalAlign: "middle",
    paddingLeft: "8px"
  },
  menuLink: {
    paddingLeft: "50px"
  }
}));

function NavBar(props) {
  const classes = useStyles();
  const { storeDetails = {} } = props;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="static" className={classes.appBarStyle}>
        <MobileDrawer />
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <span className={classes.storeLogo}>{storeDetails.initials}</span>
            <span className={classes.storeName}>{storeDetails.name}</span>
          </Typography>
        </Toolbar>
        <DesktopMenuLink />
      </AppBar>
    </div>
  );
}

const mapStateToProps = state => {
  const storeDetails = state?.firestore?.ordered?.storeDetails || [];

  return {
    storeDetails: storeDetails[0]
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "storeDetails" }])
)(NavBar);
