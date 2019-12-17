import React from 'react';
import classNames from 'classnames';

const CLASS_NAME = 'btn';
export default class extends React.Component {
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
          {
            'btn-mini': size === 'mini',
            'btn-large': size === 'large',
            'btn-default': theme === 'default',
            'btn-primary': theme === 'primary',
            'btn-positive': theme === 'positive',
            'btn-negative': theme === 'negative',
            'btn-warning': theme === 'warning'
          },
          className
        )}
        {...props}
      />
    );
  }
}
