import React from 'react';
import classNames from 'classnames';
import noop from '@jswork/noop';

const CLASS_NAME = 'tabs';

export default class extends React.Component {
  static displayName = CLASS_NAME;
  static defaultProps = {
    onChange: noop
  };

  constructor(inProps) {
    super(inProps);
    this.state = {
      value: inProps.value
    };
  }

  get menus() {
    const { children } = this.props;
    return React.Children.map(children, (child, index) => {
      const { key, title } = child.props;
      const value = key || String(index);
      return {
        value,
        label: title
      };
    });
  }
  get contents() {
    const { children } = this.props;
    return React.Children.map(children, (child, index) => {
      const { key, children } = child.props;
      const value = key || String(index);
      return {
        value,
        children
      };
    });
  }

  get menuView() {
    const { value } = this.state;
    return this.menus.map((item, index) => {
      return (
        <div
          key={index}
          onClick={this.onClick}
          data-value={item.value}
          className={classNames('tab-item', { active: value === item.value })}>
          {item.label}
        </div>
      );
    });
  }

  get contentView() {
    const { value } = this.state;
    return this.contents.map((item) => {
      if (item.value === value) {
        return (
          <div className="tab-content" key={item.value}>
            {item.children}
          </div>
        );
      }
      return null;
    });
  }

  onClick = (inEvent) => {
    const { onChange, name } = this.props;
    const { dataset } = inEvent.target;
    const { value } = dataset;
    this.setState({ value }, () => {
      onChange({ target: { value, name } });
    });
  };

  render() {
    const { className, children, ...props } = this.props;
    return (
      <section className={classNames(CLASS_NAME, className)} {...props}>
        <nav className={`tab-group ${CLASS_NAME}__menu`}>{this.menuView}</nav>
        <div className={`${CLASS_NAME}__content`}>{this.contentView}</div>
      </section>
    );
  }
}
