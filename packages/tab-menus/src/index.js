import React from 'react';
import classNames from 'classnames';
import noop from '@feizheng/noop';
import PropTypes from 'prop-types';
import TabGroup from '../../tab-group/main';
import TabItem from '../../tab-item/main';
const CLASS_NAME = 'pane';

const DEFAULT_TEMPLATE = ({ item }) => {
  const isActive = value === item.value;
  return <TabItem active={isActive}>{item.label}</TabItem>;
};

export default class extends React.Component {
  static displayName = CLASS_NAME;
  static propTypes = {
    items: PropTypes.array,
    template: PropTypes.func,
    value: PropTypes.any,
    onChange: PropTypes.func
  };

  static defaultProps = {
    items: [],
    template: DEFAULT_TEMPLATE,
    onChange: noop
  };

  get childView() {}

  render() {
    const { className, items, template, value, ...props } = this.props;
    return <TabGroup>{items.map((item) => {})}</TabGroup>;
  }
}
