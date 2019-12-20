import React from 'react';
import classNames from 'classnames';

const CLASS_NAME = 'form-input';

export default class extends React.Component {
  static displayName = CLASS_NAME;
  render() {
    const { className, ...props } = this.props;
    return (
      <input
        className={classNames(CLASS_NAME, 'form-control', className)}
        autoComplete="off"
        {...props}
      />
    );
  }
}
