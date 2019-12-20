import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const CLASS_NAME = 'icon';

export default class extends React.Component {
  static displayName = CLASS_NAME;
  static propsTypes = {
    value: PropTypes.string
  };

  render() {
    const { className, value, ...props } = this.props;
    return (
      <span
        className={classNames(
          CLASS_NAME,
          value ? `icon-${value}` : '',
          className
        )}
        {...props}
      />
    );
  }
}
