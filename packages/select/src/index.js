import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import noop from '@feizheng/noop';

const CLASS_NAME = 'form-select';
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
    items: PropTypes.array
  };

  static defaultProps = {
    items: [],
    template: DEFAULT_TEMPLATE,
    onChange: noop
  };

  get childView() {
    const { items, template } = this.props;
    return items.map((item, index) => {
      return template({ index, item });
    });
  }

  render() {
    const { className, items, template, onChange, ...props } = this.props;
    return (
      <select
        className={classNames(CLASS_NAME, 'form-control', className)}
        {...props}>
        {this.childView}
      </select>
    );
  }
}
