import Checkbox from 'packages/checkbox/main';
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
    <Container>
      <Property items={items} />
      <Checkbox
        name="checkbox"
        onChange={(e) => {
          console.log('value:', e.target.value);
        }}
        label=" This is a checkbox"
      />
    </Container>
  );
};
