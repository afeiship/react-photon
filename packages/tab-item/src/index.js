import React from 'react';
import classNames from 'classnames';

const CLASS_NAME = 'tab-item';

export default class extends React.Component {
  static displayName = CLASS_NAME;
  static propsTypes = {
    active: PropTypes.bool
  };

  render() {
    const { className, active, ...props } = this.props;
    return (
      <div
        className={classNames(CLASS_NAME, { active: active }, classNames)}
        {...props}
      />
    );
  }
}
