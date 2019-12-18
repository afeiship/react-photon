import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import noop from '@feizheng/noop';

const CLASS_NAME = 'form-checkbox';
const DEFAULT_TEMPLATE = ({ item }) => {
  return (
    <option key={item.value} value={item.value}>
      {item.label}
    </option>
  );
};

export default class extends React.Component {
  static displayName = CLASS_NAME;
  static propsTypes = {
    label: PropTypes.string,
    value: PropTypes.any
  };

  static defaultProps = {
    onChange: noop
  };

  render() {
    const { className, label, onChange, ...props } = this.props;
    return (
      <div
        className={classNames(CLASS_NAME, 'checkbox', classNames)}
        {...props}>
        <label>
          <input type="checkbox" /> {label}
        </label>
      </div>
    );
  }
}
