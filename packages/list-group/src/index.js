import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import ReactList from '@feizheng/react-list';
import Icon from '../../icon/main';

const CLASS_NAME = 'list-group';
const DEFAULT_TEMPLATE = ({ item, index }) => {
  const { type, ...props } = item;
  return <li key={index} className={`list-group-${type}`} {...props} />;
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
