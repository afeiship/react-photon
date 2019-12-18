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
import Select from '../packages/select/main';
import Checkbox from '../packages/checkbox/main';
import Radio from '../packages/radio/main';
import RadioGroup from '../packages/radio-group/main';

export default class extends React.Component {
  state = {
    options: [
      { value: 'v1', label: 'Option one' },
      { value: 'v2', label: 'Option two' },
      { value: 'v3', label: 'Option three' }
    ]
  };
  onChange = (inEvent) => {
    const { name, value } = inEvent.target;
    console.log('[log]:', name, value);
  };
  render() {
    const { options } = this.state;
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
                <Input
                  name="email"
                  onChange={this.onChange}
                  type="email"
                  placeholder="Email"
                />
              </FormGroup>
              <FormGroup>
                <label>Password</label>
                <Input
                  name="password"
                  onChange={this.onChange}
                  type="password"
                  placeholder="Password"
                />
              </FormGroup>
              <FormGroup>
                <label>Description</label>
                <Textarea
                  name="description"
                  onChange={this.onChange}
                  placeholder="description"
                />
              </FormGroup>
              <Select items={options} />
              <Checkbox
                name="checkbox"
                onChange={this.onChange}
                label=" This is a checkbox"
              />

              <RadioGroup
                items={options}
                name="radios"
                onChange={this.onChange}
              />
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
