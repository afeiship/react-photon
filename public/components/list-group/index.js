import ListGroup from 'packages/list-group/main';

export default () => {
  const lists = [
    {
      type: 'header',
      children: <input className="form-control" type="text" placeholder="Search for someone" />
    },
    {
      type: 'item',
      icon: 'http://avatar.chsword.net/avatar/1',
      title: 'List item title',
      description: 'Lorem ipsum dolor sit amet.'
    },
    {
      type: 'item',
      active: true,
      icon: 'http://avatar.chsword.net/avatar/2',
      title: 'List item title',
      description: 'Lorem ipsum dolor sit amet.'
    },
    {
      type: 'item',
      icon: 'http://avatar.chsword.net/avatar/3',
      title: 'List item title',
      description: 'Lorem ipsum dolor sit amet.'
    }
  ];

  return (
    <div className="padded">
      <ListGroup items={lists} />
    </div>
  );
};
