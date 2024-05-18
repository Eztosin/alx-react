import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "./Footer.css";
import { getFullYear, getFooterCopy } from "../utils/utils";

const Footer = ({ user }) => {
  return (
    <div className="App-footer">
      <p>
        {user ? `Logged in as ${user.email}` : "Not logged in"}
      </p>
      <p>
        Copyright {getFullYear()} - {getFooterCopy()}
      </p>
    </div>
  );
};

Footer.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string,
  }),
};

const mapStateToProps = (state) => ({
  user: state.authReducer.get('user'),
});

export default connect(mapStateToProps)(Footer);
