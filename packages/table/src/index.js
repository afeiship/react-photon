import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import noop from '@feizheng/noop';

const CLASS_NAME = 'table';
const DEFAULT_TEMPLATE_COLUMN = ({ item }) => {
  return <th key={item.key}>{item.label}</th>;
};

export default class extends React.Component {
  static displayName = CLASS_NAME;
  static propsTypes = {
    striped: PropTypes.bool,
    columns: PropTypes.array,
    items: PropTypes.array,
    templateColumn: PropTypes.func,
    template: PropTypes.func
  };

  static defaultProps = {
    columns: [],
    items: [],
    templateColumn: DEFAULT_TEMPLATE_COLUMN,
    template: noop
  };

  get columnView() {
    const { columns, templateColumn } = this.props;
    return columns.map((item, index) => {
      return templateColumn({ item, index });
    });
  }

  get childView() {
    const { items, template } = this.props;
    return items.map((item, index) => {
      return template({ item, index });
    });
  }

  render() {
    const {
      className,
      striped,
      items,
      columns,
      template,
      templateColumn,
      ...props
    } = this.props;

    return (
      <table
        className={classNames(
          CLASS_NAME,
          { 'table-striped': striped },
          classNames
        )}
        {...props}>
        <thead>
          <tr>{this.columnView}</tr>
        </thead>
        <tbody>{this.childView}</tbody>
      </table>
    );
  }
}
