import NavGroup from 'packages/nav-group/main';
import Container from 'root/public/components/layout/container';
import Property from 'root/public/components/layout/property';

export default () => {
  const navs = [
    { type: 'title', label: 'Favorites' },
    { icon: 'home', label: 'connors' },
    { icon: 'download', label: 'Download' },
    { icon: 'folder', label: 'Documents' },
    { icon: 'signal', label: 'AirPlay' }
  ];
  const items = [
    {
      property: 'className',
      type: 'String',
      default: '-',
      description: 'Extended class name for component.'
    }
  ];

  return (
    <Container>
      <Property items={items} />
      <NavGroup items={navs} />
    </Container>
  );
};
