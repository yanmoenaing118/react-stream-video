import React from "react";

import { connect } from "react-redux";

import { createStream } from "./../../actions";

import Form from "./Form";

class StreamCreate extends React.Component {
  onSubmit = (formValues) => {
    console.log(formValues);
    this.props.createStream(formValues);
  };
  render() {
    return <Form onSubmit={this.onSubmit} />;
  }
}

export default connect(null, { createStream })(StreamCreate);
