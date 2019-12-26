import FormGroup from 'packages/form-group/main';
import Input from 'packages/input/main';
import Container from 'root/public/components/layout/container';

export default () => {
  return (
    <Container>
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
