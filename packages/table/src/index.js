import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import noop from '@feizheng/noop';

const CLASS_NAME = 'table';
const DEFAULT_TEMPLATE_COLUMN = ({ item }) => {
  return <th key={item.key}>{item.label}</th>;
};
const DEFAULT_TEMPLATE = ({ item, column }) => {
  return <td key={column.key}>{item[column.dataIndex]}</td>;
};

export default class extends React.Component {
  static displayName = CLASS_NAME;
  static propsTypes = {
    striped: PropTypes.bool,
    rowKey: PropTypes.string,
    columns: PropTypes.array,
    items: PropTypes.array,
    templateColumn: PropTypes.func,
    template: PropTypes.func
  };

  static defaultProps = {
    rowKey: 'id',
    columns: [],
    items: [],
    templateColumn: DEFAULT_TEMPLATE_COLUMN,
    template: DEFAULT_TEMPLATE
  };

  get columnView() {
    const { columns, templateColumn } = this.props;
    return columns.map((item, index) => {
      return templateColumn({ item, index });
    });
  }

  get childView() {
    const { rowKey, items, columns, template } = this.props;
    return items.map((item, index) => {
      console.log(item[rowKey]);

      return (
        <tr key={item[rowKey]}>
          {columns.map((column) => {
            return template({ item, column, index });
          })}
        </tr>
      );
    });
  }

  render() {
    const {
      className,
      striped,
      rowKey,
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
