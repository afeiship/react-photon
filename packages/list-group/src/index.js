import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import ReactList from '@feizheng/react-list';
import Icon from '../../icon/main';

const CLASS_NAME = 'list-group';
const DEFAULT_TEMPLATE = ({ item, index }) => {
  const { type, icon, title, description, active, ...props } = item;
  switch (type) {
    case 'header':
      return <li key={index} className="list-group-header" {...props} />;
    default:
      return (
        <li
          key={index}
          className={classNames('list-group-item', { active })}
          {...props}>
          <img
            className="img-circle media-object pull-left"
            src={icon}
            width="32"
            height="32"
          />
          <div className="media-body">
            <strong>{title}</strong>
            <p>{description}</p>
          </div>
        </li>
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
    return (
      <ReactList
        nodeName="ul"
        className={classNames(CLASS_NAME, classNames)}
        {...props}
      />
    );
  }
}
