import React from 'react';
import classNames from 'classnames';

const CLASS_NAME = 'toolbar-footer';

export default class extends React.Component {
  static displayName = CLASS_NAME;
  render() {
    const { className, title, children, ...props } = this.props;
    return (
      <footer className={classNames('toolbar', CLASS_NAME, className)} {...props}>
        <h1 className="title">{title}</h1>
        { children }
      </footer>
    );
  }
}
