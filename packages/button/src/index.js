import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const CLASS_NAME = 'btn';
export default class extends React.Component {
  static propsTypes = {
    theme: PropTypes.oneOf(['default', 'primary', 'positive', 'negative', 'warning']),
    size: PropTypes.oneOf(['mini', 'large'])
  };
  static defaultProps = {
    theme: 'default',
    size: 'large'
  };
  render() {
    const { className, size, theme, ...props } = this.props;
    return (
      <button
        className={classNames(
          CLASS_NAME,
          size ? `btn-${size}` : '',
          theme ? `btn-${theme}` : '',
          className
        )}
        {...props}
      />
    );
  }
}
