import React from "react";
import Slider from "infinite-react-carousel";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
const TESTIMONIAL_HEADER_TEXT = "Testimonials";

const settings = {
  arrows: false,
  autoplay: true,
  dots: true,
  autoplaySpeed: 5000
};

const useStyles = makeStyles(theme => ({
  imageStyle: {
    width: 25,
    height: 20
  },
  textContent: {
    textAlign: "center"
  }
}));

function Testimonials(props) {
  const classes = useStyles();
  const { testimonialsList = [] } = props;

  return (
    <div id="Testimonials">
      <Typography gutterBottom variant="h4" className="header">
        {TESTIMONIAL_HEADER_TEXT}
      </Typography>
      {testimonialsList.length ? (
        <Slider {...settings}>
          {testimonialsList.map(({ id, comment, title }) => {
            return (
              <div key={id} className={classes.textContent}>
                <img
                  className={classes.imageStyle}
                  src="https://image3.jdomni.in/banner/09092019/9B/0F/E6/D154D8DB075BD1EC057A7E23AC_1568016377741_500X.webp"
                  alt=""
                />
                <p>"{comment}"</p>
                <h3>{title}</h3>
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
  const testimonialsList = state?.firestore?.ordered?.testimonials || [];

  return {
    testimonialsList
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "testimonials" }])
)(Testimonials);
