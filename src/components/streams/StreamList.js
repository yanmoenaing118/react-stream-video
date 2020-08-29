import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import styles from "./../../styles/StreamList.module.scss";
import btns from "./../../styles/components/buttons.module.scss";
import links from "./../../styles/components/links.module.scss";

import { fetchStreams } from "./../../actions";

class StreamList extends React.Component {
  componentDidMount = () => {
    this.props.fetchStreams();
  };

  renderStreamsList = () => {
    const btnStyle = `${btns.btn} ${btns.btn__medium} ${btns.btn__fill} ${btns.btn__shadow}`;
    const keys = Object.keys(this.props.streams);
    if (keys.length > 0) {
      return keys.map((key) => (
        <div key={key} className={styles.StreamItem}>
          <div className={styles.StreamItem__content}>
            <Link
              to={`/streams/${this.props.streams[key].id}`}
              className={links.link}
            >
              {this.props.streams[key].title}
            </Link>
            <div>{this.props.streams[key].description}</div>
          </div>
          {this.props.streams[key].userId === this.props.userId ? (
            <div className={styles.StreamItem__settings}>
              <Link
                to={`/streams/delete/${this.props.streams[key].id}`}
                className={`${btnStyle} ${btns.btn__danger} ${styles.StreamItem__btn}`}
              >
                Delete
              </Link>
              <Link
                to={`/streams/edit/${this.props.streams[key].id}`}
                className={`${btnStyle} ${btns.btn__primary} ${styles.StreamItem__btn}`}
              >
                Edit
              </Link>
            </div>
          ) : (
            ""
          )}
        </div>
      ));
    }

    return <div className={styles.del}>Loading...</div>;
  };

  render() {
    return <div className={styles.StreamList}>{this.renderStreamsList()}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    streams: state.streams,
    userId: state.auth.userId,
    name: state.auth.name,
  };
};

export default connect(mapStateToProps, { fetchStreams })(StreamList);
