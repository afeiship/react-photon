import FormGroup from 'packages/form-group/main';
import Input from 'packages/input/main';
import Property from 'root/public/components/layout/property';
import Container from 'root/public/components/layout/container';

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
      description: 'The value of input.'
    },
    {
      property: 'onChange',
      type: 'Function',
      default: 'noop',
      description: 'When value change will trigger.'
    }
  ];

  return (
    <Container>
      <Property items={items} />
      <form>
        <FormGroup>
          <label>Email address:</label>
          <Input name="email" type="email" placeholder="Email" />
        </FormGroup>
        <FormGroup>
          <label>Password:</label>
          <Input name="password" type="password" placeholder="Password" />
        </FormGroup>
      </form>
    </Container>
  );
};
