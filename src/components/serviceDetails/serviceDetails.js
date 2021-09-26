import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import Slider from "infinite-react-carousel";
import { firestoreConnect } from "react-redux-firebase";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";

const BOOK_NOW_BUTTON_TEXT = "BOOK NOW";

const useStyles = {
  cardRoot: {
    boxShadow: `0px 1px 5px 0px rgba(0, 0, 0, 0.2),
       0px 2px 2px 0px rgba(0, 0, 0, 0.14), 
       0px 3px 1px -2px rgba(0, 0, 0, 0)`,
    marginRight: 10,
    width: "90% !important"
  },
  cardMedia: {
    width: "100%",
    height: 176
  },
  cardContent: {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px !important",
    height: 90
  },
  cardTitle: {
    lineHeight: 1.4,
    fontSize: "1rem",
    fontWeight: 600,
    width: 160,
    color: "var(--main-title-color)"
  },
  price: {
    lineHeight: 1.4,
    color: "black",
    fontWeight: 1000
  },
  cardAction: {
    display: "flex",
    padding: " 0 10px 10px 0",
    justifyContent: "flex-end"
  },
  buttonStyle: {
    "&:hover": {
      color: "black",
      background: "var(--main-default-bg-color)"
    },
    height: 35,
    width: 100,
    textDecoration: "none",
    borderRadius: 5,
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    color: "white",
    border: "1px solid var(--main-border-color)",
    background: "var(--main-bg-color)"
  },
  cardActionArea: {}
};

const settings = {
  arrows: false,
  autoplay: true,
  dots: true,
  autoplaySpeed: 5000
};

class ServiceDetails extends Component {
  render() {
    const {
      classes,
      serviceDetails = {},
      serviceDetails: { imageList = [], title = "", price = "" }
    } = this.props;

    return (
      <div id="ServiceDetails" className={classes.serviceContainer}>
        {Object.values(serviceDetails).length ? (
          <Card className={classes.cardRoot}>
            <Slider {...settings}>
              {imageList.map((value, index) => (
                <CardMedia
                  key={index}
                  className={classes.cardMedia}
                  image={value}
                />
              ))}
            </Slider>
            <CardContent className={classes.cardContent}>
              <Typography
                gutterBottom
                variant="h3"
                className={classes.cardTitle}
              >
                {title}
              </Typography>
              <Typography className={classes.price}>{"₹" + price}</Typography>
            </CardContent>
          </Card>
        ) : (
          ""
        )}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const serviceId = ownProps.match.params.serviceId;
  const servicesProvided = state?.firestore?.ordered?.servicesProvided;
  const serviceDetails = servicesProvided
    ? servicesProvided.find(service => {
        return service.id === serviceId;
      })
    : {};

  return {
    serviceDetails
  };
};

const serviceDetailsWithSytles = withStyles(useStyles)(ServiceDetails);

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "servicesProvided" }])
)(serviceDetailsWithSytles);
