import Textarea from 'packages/textarea/main';
import Container from 'root/public/components/layout/container';
import Property from 'root/public/components/layout/property';

export default () => {
  const items = [
    {
      property: 'className',
      type: 'String',
      default: '-',
      description: 'Extended class name for component.'
    }
  ];

  return (
    <Container className="padded">
      <Property items={items} />
      <Textarea name="description" placeholder="description" />
    </Container>
  );
};
