import React from 'react';
import Window from 'packages/window/main';
import WindowContent from 'packages/window-content/main';
import ToolbarHeader from 'packages/toolbar-header/main';
import ToolbarFooter from 'packages/toolbar-footer/main';
import Pane from 'packages/pane/main';
import PaneGroup from 'packages/pane-group/main';
import NavGroup from 'packages/nav-group/main';

// udpate sw + tips
import NxOfflineSw from '@feizheng/next-offline-sw';
import ReactSwUpdateTips from '@feizheng/react-sw-update-tips';
import ReactHighlight from '@feizheng/react-highlight';
import ReactClipboard from '@feizheng/react-clipboard';
import ReactFullImage from '@feizheng/react-full-image';
import { HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

// navs,routes
const routes = require('root/public/assets/routes.json');
const navs = require('root/public/assets/navs.json');

export default class extends React.Component {
  state = { hasUpdate: false, navs };

  componentDidMount() {
    NxOfflineSw.install({
      onUpdateReady: () => {
        this.setState({ hasUpdate: true });
      }
    });
  }

  render() {
    const { hasUpdate } = this.state;
    return (
      <div className="example-component-window">
        <ReactFullImage src="//img.alicdn.com/tps/TB1h9xxIFXXXXbKXXXXXXXXXXXX.jpg" />
        <Window className="webkit-sassui-animate-float">
          <ToolbarHeader title="react-photon" />
          <WindowContent>
            <PaneGroup>
              <Router>
                <Pane sidebar mini>
                  <NavGroup items={navs} />
                </Pane>
                <Pane>
                  <Switch>
                    {routes.map((item) => {
                      const code = require(`./components/${item}/index.js.snippet`).default;
                      return (
                        <Route key={item} path={`/${item}`}>
                          {React.createElement(require(`./components/${item}`).default)}
                          <ReactHighlight extra={<ReactClipboard value={code} />}>
                            {code}
                          </ReactHighlight>
                        </Route>
                      );
                    })}

                    <Route path="/preview" children={require('./components/preview').default} />
                    <Redirect to="/preview" />
                  </Switch>
                </Pane>
              </Router>
            </PaneGroup>
          </WindowContent>
          <ToolbarFooter title="Developed by afeiship" />
        </Window>

        <ReactSwUpdateTips value={hasUpdate} />
      </div>
    );
  }
}
