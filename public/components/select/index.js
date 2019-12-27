import Select from 'packages/select/main';
import Container from 'root/public/components/layout/container';
import Property from 'root/public/components/layout/property';

export default () => {
  const options = [
    { value: 'v1', label: 'Option one' },
    { value: 'v2', label: 'Option two' },
    { value: 'v3', label: 'Option three' }
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
      <Select items={options} />
    </Container>
  );
};
