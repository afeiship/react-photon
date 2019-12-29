import Table from 'packages/table/main';
import Window from 'packages/window/main';
import WindowContent from 'packages/window-content/main';

export default ({ items }) => {
  const table = {
    columns: [
      { key: 'property', label: 'property', dataIndex: 'property' },
      { key: 'type', label: 'type', dataIndex: 'type' },
      { key: 'default', label: 'default', dataIndex: 'default' },
      { key: 'description', label: 'description', dataIndex: 'description' }
    ]
  };

  return (
    <div className="padded-vertically-more">
      <Window relative shadowable={false}>
        <WindowContent>
          <Table striped className="layout-property" rowKey="property" columns={table.columns} items={items} />
        </WindowContent>
      </Window>
    </div>
  );
};
