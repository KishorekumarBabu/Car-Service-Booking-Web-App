import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";

const ABOUT_US_HEADER_TEXT = "About Us";

const useStyles = makeStyles(theme => ({
  aboutUsContainer: {
    marginBottom: "var(--main-margin-bottom)"
  },
  aboutUsStyle: {
    padding: "0px 30px"
  },
  imageStyle: {
    width: "100%",
    height: "100%"
  },
  textContent: {
    minHeight: "auto",
    lineHeight: 1.5,
    fontSize: "1.25rem"
  },
  gridMargin: {
    margin: "auto"
  }
}));

function AboutUs(props) {
  const classes = useStyles();
  const { storeDetails = {} } = props;

  return (
    <div id="About Us" className={classes.aboutUsContainer}>
      <Typography gutterBottom variant="h4" className="header">
        {ABOUT_US_HEADER_TEXT}
      </Typography>
      {Object.keys(storeDetails).length ? (
        <Grid container className={classes.aboutUsStyle} spacing={2}>
          <Grid item xs={12} lg={6}>
            <img
              className={classes.imageStyle}
              src={storeDetails.imageSrc}
              alt=""
            />
          </Grid>
          <Grid item xs={12} lg={6} className={classes.gridMargin}>
            <p className={classes.textContent}>{storeDetails.aboutUs}</p>
          </Grid>
        </Grid>
      ) : (
        ""
      )}
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
)(AboutUs);
