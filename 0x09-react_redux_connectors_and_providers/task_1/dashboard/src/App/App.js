import React from "react";
import { connect } from "react-redux";
import { displayNotificationDrawer, hideNotificationDrawer } from "../actions/notificationActions";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import CourseList from "../CourseList/CourseList";
import Notifications from "../Notifications/Notifications";
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom";
import BodySection from "../BodySection/BodySection";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className={css(styles.App)}>
          <div className="heading-section">
            <Notifications
              displayDrawer={this.props.displayDrawer}
              handleDisplayDrawer={this.props.displayNotificationDrawer}
              handleHideDrawer={this.props.hideNotificationDrawer}
              listNotifications={this.listNotifications}
            />
            <Header />
          </div>
          {this.props.isLoggedIn ? (
            <BodySectionWithMarginBottom title="Course list">
              <CourseList listCourses={this.listCourses} /> {}
            </BodySectionWithMarginBottom>
          ) : (
            <BodySectionWithMarginBottom title="Log in to continue">
              <Login />
            </BodySectionWithMarginBottom>
          )}
          <BodySection title="News from the school">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis at tempora odio, necessitatibus repudiandae reiciendis cum nemo sed asperiores ut molestiae eaque aliquam illo ipsa
              iste vero dolor voluptates.
            </p>
          </BodySection>
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  App: {
    height: "100vh",
    maxWidth: "100vw",
    position: "relative",
    fontFamily: "Arial, Helvetica, sans-serif",
  },
});

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => {
    return;
  },
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func,
  displayDrawer: PropTypes.bool,
  displayNotificationDrawer: PropTypes.func.isRequired,
  hideNotificationDrawer: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.uiReducer.isLoggedIn,
    displayDrawer: state.uiReducer.isNotificationDrawerVisible,
  };
};

export default connect(mapStateToProps, {
  displayNotificationDrawer,
  hideNotificationDrawer,
})(App);
