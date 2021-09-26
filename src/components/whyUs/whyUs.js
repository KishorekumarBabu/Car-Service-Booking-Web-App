import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";

const WHY_US_HEADER_TEXT = "Why Us?";

const useStyles = makeStyles(theme => ({
  reasonsContainerStyle: {
    padding: "0px 30px",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between"
  },
  reasonsCard: {
    textAlign: "center",
    width: "100%",
    "@media only screen and (min-width: 1025px)": {
      width: 500
    },
    "@media only screen and (min-width: 600px) and (max-width: 1024px)": {
      width: 300
    },
    marginBottom: 15
  },
  cardContent: {
    padding: 0
  },
  cardTitle: {
    color: "var(--main-default-text-color)",
    background: "var(--main-bg-color)",
    minHeight: "auto",
    lineHeight: 1.4
  },
  textContent: {
    minHeight: "auto",
    lineHeight: 1.4,
    padding: 10
  }
}));

function WhyUs(props) {
  const classes = useStyles();
  const { reasonsList = {} } = props;

  return (
    <div id="Why Us?">
      <Typography gutterBottom variant="h4" className="header">
        {WHY_US_HEADER_TEXT}
      </Typography>
      {Object.keys(reasonsList).length ? (
        <div className={classes.reasonsContainerStyle}>
          {Object.keys(reasonsList).map(key => {
            return (
              <div key={key}>
                <Card className={classes.reasonsCard}>
                  <CardContent className={classes.cardContent}>
                    <Typography
                      gutterBottom
                      variant="h4"
                      className={classes.cardTitle}
                    >
                      {reasonsList[key].title}
                    </Typography>
                    <Typography component="p" className={classes.textContent}>
                      {reasonsList[key].subTitle}
                    </Typography>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

const mapStateToProps = state => {
  const reasonsList = state?.firestore?.data?.whyUs || {};

  return {
    reasonsList
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "whyUs" }])
)(WhyUs);
