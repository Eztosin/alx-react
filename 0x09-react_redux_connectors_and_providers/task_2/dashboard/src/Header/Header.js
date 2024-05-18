import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import logo from "../assets/holberton-logo.jpg";
import { logout } from "../actions/authActions";
import { StyleSheet, css } from "aphrodite";

class Header extends React.Component {
  render() {
    const { user, logout } = this.props;
    return (
      <div className={css(styles["App-header"])}>
        <img src={logo} className={css(styles.img)} alt="logo" />
        <h1>School dashboard</h1>
        {user && (
          <div className={css(styles.userSection)}>
            <p>
              Welcome, {user.email} (<a href="#" onClick={logout}>Logout</a>)
            </p>
          </div>
        )}
      </div>
    );
  }
}

const styles = StyleSheet.create({
  "App-header": {
    fontSize: "1.4rem",
    color: "#e0354b",
    display: "flex",
    alignItems: "center",
    borderBottom: "3px solid #e0354b",
  },

  img: {
    width: "200px",
    height: "200px",
  },
  userSection: {
    marginLeft: "auto",
  }
});

Header.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string,
  }),
  logout: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.authReducer.get('user'),
});

export default connect(mapStateToProps, { logout })(Header);
