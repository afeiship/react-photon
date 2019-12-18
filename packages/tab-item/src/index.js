import React from 'react';
import classNames from 'classnames';

const CLASS_NAME = 'tab-item';

export default class extends React.Component {
  static displayName = CLASS_NAME;
  static propsTypes = {
    closeable: PropTypes.bool,
    fixed: PropTypes.bool,
    active: PropTypes.bool
  };

  render() {
    const {
      className,
      active,
      closeable,
      fixed,
      children,
      ...props
    } = this.props;
    return (
      <div
        className={classNames(
          CLASS_NAME,
          { active: active, 'tab-item-fixed': fixed },
          classNames
        )}
        {...props}>
        {closeable && <span class="icon icon-cancel icon-close-tab" />}
        {children}
      </div>
    );
  }
}
