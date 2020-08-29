import React from "react";
import { connect } from "react-redux";

import styles from "./../styles/components/buttons.module.scss";
import headerStyles from "./../styles/Header.module.scss";

import { signIn, signOut } from "./../actions";

class GoogleAuth extends React.PureComponent {
  componentDidMount = () => {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "1097189407123-891gcadp1q85269027sni1mi6qgnh53v.apps.googleusercontent.com",
          scope: "email",
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();

          this.authChange(this.auth.isSignedIn.get());

          this.auth.isSignedIn.listen(this.authChange);

          // this.setState({ isLoading: false });
        });
    });
  };

  trySignIn = () => {
    this.auth.signIn();
  };

  trySignOut = () => {
    this.auth.signOut();
  };

  authChange = (isAuth) => {
    if (isAuth) {
      this.props.signIn(
        this.auth.currentUser.get().getId(),
        this.auth.currentUser.get().getBasicProfile().getName()
      );
    } else {
      console.log("sign out");
      this.props.signOut();
    }
  };

  renderButton = () => {
    if (this.props.isAuth !== null) {
      const className = `${styles.btn} ${styles.btn__fill} ${styles.btn__medium} ${styles.btn__googleAuth} ${styles.btn__shadow} ${headerStyles.Header__auth}`;
      return this.props.isAuth ? (
        <button className={className} onClick={this.trySignOut}>
          G | Sign Out
        </button>
      ) : (
        <button className={className} onClick={this.trySignIn}>
          G | Sign up wih Google
        </button>
      );
    }
    return <div>Loading...</div>;
  };

  render() {
    return this.renderButton();
  }
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
  };
};

export default connect(mapStateToProps, {
  signIn,
  signOut,
})(GoogleAuth);
