import React from "react";
import Typography from "@material-ui/core/Typography";
import StoreDetails from "../storeDetails/storeDetails";
import SocialMediaLinks from "../socialMediaLinks/socialMediaLinks";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";

const CONTACT_US_HEADER_TEXT = "Contact Us";

function ContactUs(props) {
  const { storeDetails = {} } = props;

  return (
    <div
      id="Contact Us"
      style={{
        backgroundColor: " #282828",
        color: "var(--main-default-text-color)"
      }}
    >
      <Typography
        gutterBottom
        variant="h4"
        className="header"
        style={{ marginBottom: 0 }}
      >
        {CONTACT_US_HEADER_TEXT}
      </Typography>
      <StoreDetails storeDetails={storeDetails} />
      <SocialMediaLinks storeDetails={storeDetails} />
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
)(ContactUs);
