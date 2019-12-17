import React from 'react';
import Window from '../packages/window/main';
import WindowContent from '../packages/window-content/main';
import ToolbarHeader from '../packages/toolbar-header/main';
import ToolbarFooter from '../packages/toolbar-footer/main';
import Button from '../packages/button/main';

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
        </WindowContent>
        <ToolbarFooter title="footer" />
      </Window>
    );
  }
}
