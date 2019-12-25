import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import ReactList from '@feizheng/react-list';
import Icon from '../../icon/main';
import { NavLink } from 'react-router-dom';

const CLASS_NAME = 'nav-group';
const DEFAULT_TEMPLATE = ({ item, index }) => {
  const { type, icon, label, to, active } = item;
  switch (type) {
    case 'title':
      return (
        <h5 key={index} className="nav-group-title">
          {label}
        </h5>
      );
    case 'nav-link':
      return (
        <NavLink key={index} to={to} className={classNames('nav-group-item', { active })}>
          <Icon value={icon} />
          {label}
        </NavLink>
      );
    default:
      return (
        <span key={index} className={classNames('nav-group-item', { active })}>
          <Icon value={icon} />
          {label}
        </span>
      );
  }
};

export default class extends React.Component {
  static displayName = CLASS_NAME;
  static propTypes = {
    className: PropTypes.string,
    items: PropTypes.array,
    template: PropTypes.func
  };

  static defaultProps = {
    items: [],
    template: DEFAULT_TEMPLATE
  };

  render() {
    const { className, ...props } = this.props;
    return <ReactList nodeName="nav" className={classNames(CLASS_NAME, className)} {...props} />;
  }
}
