import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import YouTubeIcon from "@material-ui/icons/YouTube";
import RoomIcon from "@material-ui/icons/Room";
import CopyrightIcon from "@material-ui/icons/Copyright";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  socialMediaLinkStyle: {
    padding: 10,
    color: "grey",
    display: "flex",
    justifyContent: "center"
  },
  companyNameContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  socialMediaLinkConatiner: {
    display: "flex",
    justifyContent: "center"
  }
}));

export default function SocialMediaLinks(props) {
  const classes = useStyles();
  const {
    storeDetails,
    storeDetails: {
      facebookLink,
      whatsAppLink,
      instagramLink,
      youtubeLink,
      googleLink
    }
  } = props;

  const socialMediaDetails = [
    {
      icon: <FacebookIcon />,
      href: facebookLink
    },
    {
      icon: <WhatsAppIcon />,
      href: whatsAppLink
    },
    {
      icon: <InstagramIcon />,
      href: instagramLink
    },
    {
      icon: <YouTubeIcon />,
      href: youtubeLink
    },
    {
      icon: <RoomIcon />,
      href: googleLink
    }
  ];

  return Object.keys(storeDetails).length ? (
    <div className="socialMediaContainer">
      <div className={classes.companyNameContainer}>
        <CopyrightIcon />
        <p>2020 Targetone Innovations Private Limited</p>
      </div>
      <div className={classes.socialMediaLinkConatiner}>
        {socialMediaDetails.map(({ href, icon }) => (
          <a
            key={href}
            target="_blank"
            href={href}
            className={classes.socialMediaLinkStyle}
          >
            {icon}
          </a>
        ))}
      </div>
    </div>
  ) : (
    ""
  );
}
