import React from 'react';
import classNames from 'classnames';

const CLASS_NAME = 'window';

export default class extends React.Component {
  static displayName = CLASS_NAME;
  render() {
    const { className, ...props } = this.props;
    return <div className={classNames(CLASS_NAME, classNames)} {...props} />;
  }
}
