import ListGroup from 'packages/list-group/main';
import Container from 'root/public/components/layout/container';
import Property from 'root/public/components/layout/property';

export default () => {
  const lists = [
    {
      type: 'header',
      children: <input className="form-control" type="text" placeholder="Search for someone" />
    },
    {
      type: 'item',
      icon: 'https://himg.bdimg.com/sys/portrait/item/be10475f686d6c73db00.jpg',
      title: 'List item title',
      description: 'Lorem ipsum dolor sit amet.'
    },
    {
      type: 'item',
      active: true,
      icon: 'https://ws3.sinaimg.cn/large/0069RVTdgy1ftwxebpvf6j30b40b4gp8.jpg',
      title: 'List item title',
      description: 'Lorem ipsum dolor sit amet.'
    },
    {
      type: 'item',
      icon: 'https://via.placeholder.com/200x100',
      title: 'List item title',
      description: 'Lorem ipsum dolor sit amet.'
    }
  ];

  const items = [
    {
      property: 'className',
      type: 'String',
      default: '-',
      description: 'Extended class name for component.'
    },
    {
      property: 'items',
      type: 'Array',
      default: [],
      description: 'The list items.'
    },
    {
      property: 'template',
      type: 'Function',
      default: 'template({item,index})',
      description: 'The list item template.'
    }
  ];

  return (
    <Container>
      <Property items={items} />
      <ListGroup items={lists} />
    </Container>
  );
};
