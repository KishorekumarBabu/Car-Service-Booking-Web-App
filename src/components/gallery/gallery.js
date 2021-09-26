import React from "react";
import Slider from "infinite-react-carousel";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";

const settings = {
  arrows: false,
  autoplay: true,
  dots: true,
  autoplaySpeed: 2000
};

const useStyles = makeStyles(theme => ({
  galleryContainer: {},
  imageStyle: {
    "@media only screen and (min-width: 600px)": {
      height: 600
    },
    height: 250,
    width: "100%"
  }
}));

function CustomSlider(props) {
  const classes = useStyles();
  const { imageList = [] } = props;

  return (
    <div id="Home" className={classes.galleryContainer}>
      {imageList.length ? (
        <Slider {...settings}>
          {imageList.map(key => {
            return (
              <div key={key}>
                <img className={classes.imageStyle} src={key} alt="" />
              </div>
            );
          })}
        </Slider>
      ) : (
        ""
      )}
    </div>
  );
}

const mapStateToProps = state => {
  const gallery = state?.firestore?.ordered?.gallery || [];
  const imageList = gallery.length ? gallery[0].imageList || [] : [];

  return {
    imageList
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "gallery" }])
)(CustomSlider);
