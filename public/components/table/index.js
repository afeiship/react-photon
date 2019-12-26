import Table from 'packages/table/main';
import Window from 'packages/window/main';
import WindowContent from 'packages/window-content/main';
import ReactBlank from '@feizheng/react-blank';
import Container from 'root/public/components/layout/container';

export default () => {
  const table = {
    columns: [
      { key: 'name', label: 'Name', dataIndex: 'name' },
      { key: 'kind', label: 'Kind', dataIndex: 'kind' },
      { key: 'date', label: 'Date Modified', dataIndex: 'date' },
      { key: 'author', label: 'Author', dataIndex: 'author' }
    ],
    items: [
      {
        id: 'bars.scss',
        name: 'bars.scss',
        kind: 'Document',
        date: 'Oct 13, 2015',
        author: 'connors'
      },
      {
        id: 'buttons.scss',
        name: 'buttons.scss',
        kind: 'Document',
        date: 'Oct 13, 2015',
        author: 'afei'
      },
      {
        id: 'lists.scss',
        name: 'lists.scss',
        kind: 'Document',
        date: 'Oct 13, 2015',
        author: 'afeiship'
      }
    ]
  };

  return (
    <Container>
      <Window relative>
        <WindowContent>
          <Table columns={table.columns} items={table.items} />
        </WindowContent>
      </Window>
      <ReactBlank value={20} />
      <Window relative>
        <WindowContent>
          <Table striped columns={table.columns} items={table.items} />
        </WindowContent>
      </Window>
    </Container>
  );
};
