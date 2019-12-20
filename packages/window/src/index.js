import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './style.scss';

const CLASS_NAME = 'window';

export default class extends React.Component {
  static displayName = CLASS_NAME;
  static propTypes = {
    relative: PropTypes.bool,
    shadowable: PropTypes.bool,
    bordered: PropTypes.bool
  };
  static defaultProps = {
    shadowable: true,
    bordered: true
  };

  render() {
    const { className, relative, shadowable, bordered, ...props } = this.props;
    return (
      <div
        className={classNames(
          CLASS_NAME,
          {
            'is-relative': relative,
            'is-shadowable': shadowable,
            'is-bordered': bordered
          },
          classNames
        )}
        {...props}
      />
    );
  }
}
