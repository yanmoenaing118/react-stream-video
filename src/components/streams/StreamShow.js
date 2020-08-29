import React from "react";
import { connect } from "react-redux";
import { fetchStream } from "./../../actions";

class StreamShow extends React.Component {
  componentDidMount = () => {
    this.props.fetchStream(this.props.match.params.id);
  };

  renderStream = () => {};

  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <div>{this.props.stream.title}</div>
        <div>{this.props.stream.description}</div>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  console.log(state);
  return {
    stream: state.streams[props.match.params.id],
  };
};

export default connect(mapStateToProps, { fetchStream })(StreamShow);
