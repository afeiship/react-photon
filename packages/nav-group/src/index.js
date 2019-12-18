import React from 'react';
import classNames from 'classnames';

const CLASS_NAME = 'nav-group';

export default class extends React.Component {
  static displayName = CLASS_NAME;
  render() {
    const { className, ...props } = this.props;
    return <nav className={classNames(CLASS_NAME, classNames)} {...props} />;
  }
}
