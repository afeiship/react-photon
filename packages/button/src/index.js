import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './style.scss';

const CLASS_NAME = 'btn';
const THEMES = ['default', 'primary', 'positive', 'negative', 'warning'];
const SIZES = ['mini', 'large'];

export default class extends React.Component {
  static propsTypes = {
    theme: PropTypes.oneOf(THEMES),
    size: PropTypes.oneOf(SIZES),
    active: PropTypes.bool,
    dropdown: PropTypes.bool,
    right: PropTypes.bool
  };
  static defaultProps = {
    theme: 'default',
  };
  render() {
    const {
      className,
      size,
      theme,
      active,
      dropdown,
      right,
      ...props
    } = this.props;
    return (
      <button
        className={classNames(
          CLASS_NAME,
          size ? `btn-${size}` : '',
          theme ? `btn-${theme}` : '',
          {
            active,
            'btn-dropdown': dropdown,
            'pull-right': right
          },
          className
        )}
        {...props}
      />
    );
  }
}
