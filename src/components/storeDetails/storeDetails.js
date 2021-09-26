import React from "react";
import Typography from "@material-ui/core/Typography";
import DirectionsCarIcon from "@material-ui/icons/DirectionsCar";
import EmailIcon from "@material-ui/icons/Email";
import CallIcon from "@material-ui/icons/Call";
import ScheduleIcon from "@material-ui/icons/Schedule";
import DateRangeIcon from "@material-ui/icons/DateRange";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  title: {
    color: "var(--main-header-color)",
    fontSize: "1rem"
  },
  contactDetailsContainer: {
    "@media only screen and (min-width: 1024px)": {
      gridTemplateColumns: "50% 50%",
      padding: "1rem"
    },
    padding: "0 30px",
    display: "grid",
    gridAutoRows: "minmax(min-content,max-content)",
    paddingTop: 10
  },
  contactDetails: {
    margin: "auto",
    display: "grid",
    gridTemplateColumns: "1fr 1fr"
  },
  iconHeader: {
    paddingTop: 13,
    paddingBottom: 13,
    display: "flex",
    alignItems: "center"
  },
  storeLogoContainer: {
    display: "flex",
    alignItems: "center"
  },
  contactTitleStyle: {
    margin: 0,
    paddingLeft: 5
  },
  contactValue: {
    paddingTop: 13,
    paddingBottom: 13
  },
  contactValueLinkStyle: {
    paddingTop: 13,
    paddingBottom: 13,
    textDecoration: "none",
    color: "inherit"
  }
}));

export default function StoreDetails(props) {
  const classes = useStyles();
  const {
    storeDetails,
    storeDetails: {
      address1,
      email,
      name,
      phoneNumber,
      workingDays,
      workingHours
    }
  } = props;

  const contactDetails = [
    {
      icon: <EmailIcon fontSize="small" />,
      value: email,
      href: `mailto:${email}`,
      title: "Email"
    },
    {
      icon: <CallIcon fontSize="small" />,
      href: `tel:${phoneNumber}`,
      value: phoneNumber,
      title: "Phone Number"
    },
    {
      icon: <DateRangeIcon fontSize="small" />,
      value: workingDays,
      title: "Working Days"
    },
    {
      icon: <ScheduleIcon fontSize="small" />,
      value: workingHours,
      title: "Working Hours"
    }
  ];

  return Object.keys(storeDetails).length ? (
    <div className={classes.contactDetailsContainer}>
      <div className="adressContainer">
        <div className={classes.storeLogoContainer}>
          <DirectionsCarIcon style={{ fontSize: "2.5rem", margin: 10 }} />
          <Typography variant="h5">{name}</Typography>
        </div>
        <div className="address">
          <p>{address1}</p>
        </div>
      </div>
      <div className="contactContainer">
        {contactDetails.map(({ title, value, icon, href }) => (
          <div className={classes.contactDetails} key={value}>
            <span className={classes.iconHeader}>
              {icon}
              <h5 className={classes.contactTitleStyle}>{title}</h5>
            </span>

            {href ? (
              <a href={href} className={classes.contactValueLinkStyle}>
                {value}
              </a>
            ) : (
              <span className={classes.contactValue}>{value}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  ) : (
    ""
  );
}
