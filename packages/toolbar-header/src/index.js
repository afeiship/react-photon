import React from 'react';
import classNames from 'classnames';

const CLASS_NAME = 'toolbar-header';

export default class extends React.Component {
  static displayName = CLASS_NAME;
  render() {
    const { className, title, children, ...props } = this.props;
    return (
      <header className={classNames('toolbar', CLASS_NAME, classNames)} {...props}>
        <h1 className="title">{title}</h1>
        { children }
      </header>
    );
  }
}
