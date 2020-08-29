import React from "react";
import { Field, reduxForm } from "redux-form";

import btnStyles from "./../../styles/components/buttons.module.scss";
import formStyles from "./../../styles/components/form.module.scss";

class Form extends React.Component {
  renderInput = (formProps) => {
    let errMsg;
    if (formProps.meta.touched && formProps.meta.error) {
      errMsg = formProps.meta.error;
    }

    return (
      <div
        className={`${formStyles.form__group} ${
          errMsg ? formStyles.form__error : ""
        }`}
      >
        <label className={`${formStyles.form__label}`}>{formProps.label}</label>
        <input
          {...formProps.input}
          className={`${formStyles.form__input} ${
            errMsg ? formStyles.form__error : ""
          }`}
        />
        <div className={`${formStyles.form__error}`}>{errMsg}</div>
      </div>
    );
  };

  render() {
    const btnStyle = `${btnStyles.btn} ${btnStyles.btn__big} ${btnStyles.btn__fill} ${btnStyles.btn__primary}`;

    return (
      <form
        onSubmit={this.props.handleSubmit(this.props.onSubmit)}
        className={formStyles.form}
        autoComplete="off"
      >
        <Field
          name="title"
          component={this.renderInput}
          label="Enter title"
          value="title value"
        />
        <Field
          name="description"
          value="hello"
          component={this.renderInput}
          label="Enter Description"
        />
        <div className={`${formStyles.form__group}`}>
          <button className={btnStyle}>Submit</button>
        </div>
      </form>
    );
  }
}

const validate = (formValues) => {
  const error = {};
  if (!formValues.title) {
    error.title = "A stream must have a title";
  }
  if (!formValues.description) {
    error.description = "A stream must have description";
  }
  return error;
};

export default reduxForm({
  form: "streamCreateEdit",
  validate,
})(Form);
