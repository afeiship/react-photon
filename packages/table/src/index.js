import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const CLASS_NAME = 'table';

export default class extends React.Component {
  static displayName = CLASS_NAME;
  static propsTypes = {
    striped: PropTypes.bool
  };

  render() {
    const { className, striped, ...props } = this.props;
    return (
      <table
        className={classNames(
          CLASS_NAME,
          { 'table-striped': striped },
          classNames
        )}
        {...props}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Kind</th>
            <th>File Size</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>photon.css</td>
            <td>CSS</td>
            <td>28K</td>
          </tr>
        </tbody>
      </table>
    );
  }
}
