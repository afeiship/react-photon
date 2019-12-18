import React from 'react';
import classNames from 'classnames';
import noop from '@feizheng/noop';
import PropTypes from 'prop-types';
import TabGroup from '../../tab-group/main';
import TabItem from '../../tab-item/main';
const CLASS_NAME = 'pane';

const DEFAULT_TEMPLATE = ({ item, active }, cb) => {
  return (
    <TabItem
      key={item.value}
      data-value={item.value}
      active={active(item)}
      onClick={cb}>
      {item.label}
    </TabItem>
  );
};

export default class extends React.Component {
  static displayName = CLASS_NAME;
  static propTypes = {
    items: PropTypes.array,
    template: PropTypes.func,
    name: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func
  };

  static defaultProps = {
    items: [],
    template: DEFAULT_TEMPLATE,
    onChange: noop
  };

  constructor(inProps) {
    super(inProps);
    this.state = {
      value: inProps.value
    };
  }

  get childView() {
    const { items, template, onChange } = this.props;
    const { value } = this.state;
    const active = (item) => {
      return value === item.value;
    };

    const cb = (inEvent) => {
      const { dataset, name } = inEvent.target;
      this.setState({ value: dataset.value }, () => {
        const target = { value: dataset.value, dataset, name };
        onChange({ target });
      });
    };

    return items.map((item, index) => {
      return template({ item, active, index }, cb);
    });
  }

  render() {
    const {
      className,
      items,
      template,
      value,
      onChange,
      ...props
    } = this.props;

    return <TabGroup children={this.childView} {...props} />;
  }
}
