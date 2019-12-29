import Icon from 'packages/icon/main';
import Container from 'root/public/components/layout/container';
import Property from 'root/public/components/layout/property';
const icons = require('root/public/assets/icons.json');

export default () => {
  const items = [
    {
      property: 'className',
      type: 'String',
      default: '-',
      description: 'Extended class name for component.'
    },
    {
      property: 'value',
      type: 'String',
      default: '-',
      description: 'The icon name.'
    }
  ];
  return (
    <Container>
      <Property items={items} />
      {icons.map((item) => (
        <Icon value={item} key={item} />
      ))}
    </Container>
  );
};
