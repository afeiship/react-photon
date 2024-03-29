import Button from 'packages/button/main';
import ReactBlank from '@jswork/react-blank';
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
      default: 'false',
      description: 'If true, set active; if false, set un active.'
    },
    {
      property: 'theme',
      type: 'String',
      default: 'default',
      description: "'default', 'primary', 'positive', 'negative', 'warning'"
    },
    {
      property: 'size',
      type: 'String',
      default: 'default',
      description: "-"
    },
    {
      property: 'dropdown',
      type: 'Boolean',
      default: 'false',
      description: "If has dropdown icon"
    }
  ];

  return (
    <Container>
      <Property items={items} />
      <Button size="large">Default</Button>
      <Button size="large" theme="primary">
        Primary
      </Button>
      <Button size="large" theme="positive">
        Positive
      </Button>
      <Button size="large" theme="negative">
        Negative
      </Button>
      <Button size="large" theme="warning">
        Warning
      </Button>
      <ReactBlank value={20} />
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
