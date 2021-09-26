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
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import "./services.css";
import { Link } from "react-router-dom";

const SERVICE_HEADER_TEXT = "Service";
const BOOK_NOW_BUTTON_TEXT = "BOOK NOW";

const useStyles = {
  serviceContainer: {
    marginBottom: "var(--main-margin-bottom)"
  },
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

class Service extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slidesToShow: this.getSlidesToShow()
    };
    this.setSlidesToShow = this.setSlidesToShow.bind(this);
  }

  getSlideSettings() {
    return {
      arrows: true,
      initialSlide: 0,
      centerMode: true,
      onResize: this.setSlidesToShow,
      slidesToShow: this.state.slidesToShow,
      prevArrow: (
        <button className="carousel-prev">
          <ArrowBackIcon style={{ fill: "black" }} />
        </button>
      ),
      nextArrow: (
        <button className="carousel-next">
          <ArrowForwardIcon style={{ fill: "black" }} />
        </button>
      )
    };
  }

  setSlidesToShow() {
    this.setState({
      slidesToShow: this.getSlidesToShow()
    });
  }

  getSlidesToShow() {
    const width =
      window.innerWidth > 0 ? window.innerWidth : window.screen.width;

    if (width >= 1850) {
      return 6;
    } else if (width >= 1500 && width < 1850) {
      return 5;
    } else if (width >= 1200 && width < 1500) {
      return 4;
    } else if (width >= 980 && width < 1200) {
      return 3;
    } else if (width >= 600 && width < 980) {
      return 2;
    }
    return 1;
  }

  render() {
    const { classes, servicesProvided = [] } = this.props;

    return (
      <div id="Services" className={classes.serviceContainer}>
        <Typography gutterBottom variant="h4" className="header">
          {SERVICE_HEADER_TEXT}
        </Typography>
        {servicesProvided.length ? (
          <Slider {...this.getSlideSettings()}>
            {servicesProvided.map(serviceDetails => {
              const {
                imageList,
                title,
                price,
                id,
                displayImageIndex = 0
              } = serviceDetails;
              return (
                <Card key={id} className={classes.cardRoot}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={imageList[displayImageIndex]}
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography
                      gutterBottom
                      variant="h3"
                      className={classes.cardTitle}
                    >
                      {title}
                    </Typography>
                    <Typography className={classes.price}>
                      {"₹" + price}
                    </Typography>
                  </CardContent>

                  <div className={classes.cardAction}>
                    <Link className={classes.buttonStyle} to={"/service/" + id}>
                      {BOOK_NOW_BUTTON_TEXT}
                    </Link>
                  </div>
                </Card>
              );
            })}
          </Slider>
        ) : (
          ""
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const servicesProvided = state?.firestore?.ordered?.servicesProvided || [];

  return {
    servicesProvided
  };
};

const serviceWithSytles = withStyles(useStyles)(Service);

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "servicesProvided" }])
)(serviceWithSytles);
