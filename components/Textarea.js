import styles from "~/components/Textarea.module.scss";

import * as React from "react";
import * as U from "~/common/utilities";

export default class Textarea extends React.Component {
  _input;

  componentDidMount = () => {
    if (this.props.autoFocus) {
      this._input.focus();
    }
  };

  _handleCopy = (e) => {
    this._input.select();
    document.execCommand("copy");
  };

  _handleKeyUp = (e) => {
    if (this.props.onKeyUp) {
      this.props.onKeyUp(e);
    }

    if ((e.which === 13 || e.keyCode === 13) && this.props.onSubmit) {
      this.props.onSubmit(e);
      return;
    }
  };

  _handleChange = (e) => {
    if (this.props.pattern && !U.isEmpty(e.target.value)) {
      if (!this.props.pattern.test(e.target.value)) {
        e.preventDefault();
        return;
      }
    }

    if (e.target.value && e.target.value.length > this.props.max) {
      e.preventDefault();
      return;
    }

    if (this.props.onChange) {
      this.props.onChange(e);
    }
  };

  render() {
    return (
      <div className={styles.container} style={this.props.style}>
        <textarea
          className={styles.textarea}
          ref={(c) => {
            this._input = c;
          }}
          autoComplete="off"
          autoFocus={this.props.autoFocus}
          value={this.props.value}
          name={this.props.name}
          type={this.props.type}
          placeholder={this.props.placeholder}
          onChange={this._handleChange}
          onFocus={this.props.onFocus}
          onBlur={this.props.onBlur}
          onKeyUp={this._handleKeyUp}
          disabled={this.props.disabled}
          readOnly={this.props.readOnly}
          maxLength={this.props.maxLength}
          style={{
            ...this.props.inputStyle,
          }}
        />
      </div>
    );
  }
}
