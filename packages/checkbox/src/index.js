import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import noop from '@jswork/noop';

const CLASS_NAME = 'form-checkbox';

export default class extends React.Component {
  static displayName = CLASS_NAME;
  static propsTypes = {
    label: PropTypes.string,
    defaultValue: PropTypes.bool,
    value: PropTypes.bool,
    onChange: PropTypes.func
  };

  static defaultProps = {
    onChange: noop
  };

  onChange = (inEvent) => {
    const { onChange } = this.props;
    const { checked, name, dataset } = inEvent.target;
    onChange({ target: { value: checked, name, dataset } });
  };

  render() {
    const { className, label, onChange, defaultValue, value, ...props } = this.props;

    return (
      <div className={classNames(CLASS_NAME, 'checkbox', className)}>
        <label>
          <input
            type="checkbox"
            defaultChecked={defaultValue}
            checked={value}
            {...props}
            onChange={this.onChange}
          />
          {label}
        </label>
      </div>
    );
  }
}
