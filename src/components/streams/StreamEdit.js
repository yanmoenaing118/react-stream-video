import React from "react";
import { connect } from "react-redux";

import { fetchStream, editStream } from "./../../actions";
import Form from "./Form";

class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }
  onSubmit = (formValues) => {
    this.props.editStream(formValues, this.props.match.params.id);
  };
  render() {
    return this.props.stream ? (
      <Form
        onSubmit={this.onSubmit}
        stream={this.props.stream}
        initialValues={{
          title: this.props.stream.title,
          description: this.props.stream.description,
        }}
      />
    ) : (
      <div>Loading...</div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    stream: state.streams[props.match.params.id],
  };
};

export default connect(mapStateToProps, { fetchStream, editStream })(
  StreamEdit
);
