import React, { Component } from "react";

class GoogleSignIn extends Component {
  constructor(props) {
    super(props);
    this.state = { profile: null };
  }

  componentDidMount() {
    gapi.signin2.render("g-signin2", {
      scope: "https://www.googleapis.com/auth/plus.login",
      onsuccess: this.onSignIn.bind(this)
    });
  }

  onSignIn(googleUser) {
    console.log("User signed in.");
    const profile = googleUser.getBasicProfile();
    this.setState({ profile: profile });
  }

  signOut() {
    const auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(() => {
      console.log("User signed out.");
      this.setState({ profile: null });
    });
  }

  render() {
    const { profile } = this.state;

    return (
      <div>
        <div id="g-signin2" />
        {profile ? (
          <div style={{ marginTop: "10px" }}>
            Hey {profile.getName() + "  "}
            <a href="#" onClick={this.signOut.bind(this)}>
              Sign out
            </a>
          </div>
        ) : null}
      </div>
    );
  }
}

export default GoogleSignIn;
