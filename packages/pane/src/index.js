import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const CLASS_NAME = 'pane';

export default class extends React.Component {
  static displayName = CLASS_NAME;
  static propTypes = {
    mini: PropTypes.bool,
    sidebar: PropTypes.bool
  };

  render() {
    const { className, mini, sidebar, ...props } = this.props;
    return (
      <div
        className={classNames(
          CLASS_NAME,
          {
            sidebar,
            'pane-sm': mini
          },
          className
        )}
        {...props}
      />
    );
  }
}
