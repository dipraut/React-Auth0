import React, { Component } from "react";

export default class Profile extends Component {
  state = {
    profile: null,
    err: ""
  };
  componentDidMount() {
    this.loadUserProfile();
  }
  loadUserProfile() {
    this.props.auth.getProfile((profile, err) => {
      this.setState({ profile, err });
    });
  }
  render() {
    const { profile } = this.state;
    if (!profile) return null;
    return (
      <>
        <h1>Profile</h1>
        <p>{profile.nickname}</p>
        <pre>{JSON.stringify(profile, null, 2)}</pre>
      </>
    );
  }
}
