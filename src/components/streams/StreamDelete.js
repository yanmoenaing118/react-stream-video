import React from "react";
import { connect } from "react-redux";

import styles from "./../../styles/StreamDelete.module.scss";
import btns from "./../../styles/components/buttons.module.scss";
import Modal from "./../Modal";
import { deleteStream } from "./../../actions";

class StreamDelete extends React.Component {
  deleteStream = () => {
    this.props.deleteStream(this.props.match.params.id);
  };

  render() {
    const btnStyle = btns.btn + " " + btns.btn__fill + " " + btns.btn__shadow;
    if (!this.props.stream) {
      this.props.history.push("/");
      return <div></div>;
    }
    return (
      <Modal clicked={() => this.props.history.push("/")}>
        <div className={styles.delete_confirm_box}>
          <h3>Delete Stream</h3>
          <div className={styles.confirm_text}>
            {`Are you sure to delete "${this.props.stream.title}" stream?`}
          </div>
          <div className={styles.confirm_btns}>
            <button
              className={btnStyle + " " + btns.btn__primary}
              onClick={() => this.props.history.push("/")}
            >
              Cancel
            </button>
            <button
              className={btnStyle + " " + btns.btn__danger}
              onClick={this.deleteStream}
            >
              Delte
            </button>
          </div>
        </div>
      </Modal>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    stream: state.streams[props.match.params.id],
  };
};

export default connect(mapStateToProps, { deleteStream })(StreamDelete);
