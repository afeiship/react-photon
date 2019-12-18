import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from '@feizheng/noop';

const CLASS_NAME = 'form-radio-group';

export default class extends Component {
  static displayName = CLASS_NAME;

  /*===properties start===*/
  static propTypes = {
    className: PropTypes.string,
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
    items: PropTypes.array,
    onChange: PropTypes.func
  };

  static defaultProps = {
    items: [],
    onChange: noop
  };
  /*===properties end===*/

  onChange = (inEvent) => {
    const { value } = inEvent.target.dataset;
    const { name, onChange } = this.props;
    onChange({ target: { value, name } });
  };

  render() {
    const {
      className,
      defaultValue,
      items,
      name,
      onChange,
      ...props
    } = this.props;
    return (
      <div className={classNames(CLASS_NAME, className)} {...props}>
        {items.map((item) => {
          const { value, label, ...itemProps } = item;
          return (
            <div key={value} className={`radio ${CLASS_NAME}__item`}>
              <label>
                <input
                  onChange={this.onChange}
                  type="radio"
                  name={name}
                  data-value={value}
                  defaultChecked={defaultValue === value}
                  {...itemProps}
                />
                <span>{label}</span>
              </label>
            </div>
          );
        })}
      </div>
    );
  }
}
