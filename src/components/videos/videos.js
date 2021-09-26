import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";

const VIDEOS_HEADER_TEXT = "Videos";

const useStyles = makeStyles(theme => ({
  videoContainer: {
    marginBottom: "var(--main-margin-bottom)"
  },
  videoStyle: {
    padding: "0px 30px"
  },
  iframeStyle: {
    width: "100%",
    height: 300
  }
}));

function Videos(props) {
  const classes = useStyles();
  const { videosList = {} } = props;

  return (
    <div id="Videos" className={classes.videoContainer}>
      <Typography gutterBottom variant="h4" className="header">
        {VIDEOS_HEADER_TEXT}
      </Typography>
      {Object.keys(videosList).length ? (
        <Grid container className={classes.videoStyle} spacing={2}>
          {Object.keys(videosList).map(key => {
            return (
              <Grid item xs={12} lg={6} key={key}>
                <iframe
                  className={classes.iframeStyle}
                  src={videosList[key].youtubeUrl}
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  frameBorder="0"
                  allowFullScreen
                  title={videosList[key].description}
                />{" "}
              </Grid>
            );
          })}
        </Grid>
      ) : (
        ""
      )}
    </div>
  );
}

const mapStateToProps = state => {
  const videosList = state?.firestore?.data?.videos || {};

  return {
    videosList
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "videos" }])
)(Videos);
