import Button from 'packages/button/main';
import ReactBlank from '@feizheng/react-blank';
import Container from 'root/public/components/layout/container';
import Property from 'root/public/components/layout/property';

export default () => {
  const items = [
    {
      property: 'className',
      type: 'String',
      default: '-',
      description: 'Extended class name for component.'
    },
    {
      property: 'active',
      type: 'Boolean',
      default: '-',
      description: 'If true, set active; if false, set un active.'
    }
  ];

  return (
    <Container>
      <Property items={items} />
      <Button>Default</Button>
      <Button theme="primary">Primary</Button>
      <Button theme="positive">Positive</Button>
      <Button theme="negative">Negative</Button>
      <Button theme="warning">Warning</Button>
      <ReactBlank value={20} />
      <Button size="mini">Default</Button>
      <Button size="mini" theme="primary">
        Primary
      </Button>
      <Button size="mini" theme="positive">
        Positive
      </Button>
      <Button size="mini" theme="negative">
        Negative
      </Button>
      <Button size="mini" theme="warning">
        Warning
      </Button>
    </Container>
  );
};
