import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Hidden from "@material-ui/core/Hidden";

const useStyles = makeStyles(theme => ({
  menuLink: {
    margin: "auto"
  },
  buttonStyle: {
    color: "#FFFFFF",
    padding: 10,
    textDecoration: "none"
  }
}));

export default function DesktopMenuLink() {
  const classes = useStyles();

  return (
    <Hidden
      only={["sm", "xs", "md"]}
      implementation="css"
      className={classes.menuLink}
    >
      {[
        "Home",
        "Services",
        "About Us",
        "Videos",
        "Why Us?",
        "Testimonials",
        "Contact Us"
      ].map(text => (
        <a href={`#${text}`} className={classes.buttonStyle} key={text}>
          {" "}
          {text}{" "}
        </a>
      ))}
    </Hidden>
  );
}
