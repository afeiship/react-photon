import FormGroup from 'packages/form-group/main';
import Input from 'packages/input/main';

export default () => {
  return (
    <div className="padded">
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
    </div>
  );
};
