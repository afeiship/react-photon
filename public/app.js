import React from 'react';
import Window from '../packages/window/main';
import WindowContent from '../packages/window-content/main';
import ToolbarHeader from '../packages/toolbar-header/main';
import ToolbarFooter from '../packages/toolbar-footer/main';
import Button from '../packages/button/main';
import ButtonGroup from '../packages/button-group/main';
import FormGroup from '../packages/form-group/main';
import Input from '../packages/input/main';
import Textarea from '../packages/textarea/main';

export default class extends React.Component {
  render() {
    return (
      <Window>
        <ToolbarHeader title="header" />
        <WindowContent style={{ flexDirection: 'column' }}>
          <div className="is-body" style={{ padding: 10 }}>
            <Button>Default</Button>
            <Button theme="primary">Primary</Button>
            <Button theme="positive">Positive</Button>
            <Button theme="negative">Negative</Button>
            <Button theme="warning">Warning</Button>
          </div>
          <div className="is-body" style={{ padding: 10 }}>
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
          </div>
          <div className="is-body" style={{ padding: 10 }}>
            <ButtonGroup>
              <Button size="mini">Default</Button>
              <Button size="mini" theme="primary">
                Primary
              </Button>
            </ButtonGroup>
          </div>

          <div className="is-body" style={{ padding: 10 }}>
            <form>
              <FormGroup>
                <label>Email address</label>
                <Input type="email" placeholder="Email" />
              </FormGroup>
              <FormGroup>
                <label>Password</label>
                <Input type="password" placeholder="Password" />
              </FormGroup>
              <FormGroup>
                <label>Description</label>
                <Textarea placeholder="description" />
              </FormGroup>
            </form>
          </div>

          <iframe
            hidden
            className="component-example"
            src="http://photonkit.com/components/icons.html"></iframe>
        </WindowContent>
        <ToolbarFooter title="footer" />
      </Window>
    );
  }
}
