import React from 'react';
import Window from '../packages/window/main';
import WindowContent from '../packages/window-content/main';
import ToolbarHeader from '../packages/toolbar-header/main';
import ToolbarFooter from '../packages/toolbar-footer/main';
import Pane from '../packages/pane/main';
import PaneGroup from '../packages/pane-group/main';
import NavGroup from '../packages/nav-group/main';

// udpate sw + tips
import NxOfflineSw from '@feizheng/next-offline-sw';
import ReactSwUpdateTips from '@feizheng/react-sw-update-tips';
import { HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import ReactHighlight from '@feizheng/react-highlight';
import ReactClipboard from '@feizheng/react-clipboard';
import ReactFullImage from '@feizheng/react-full-image';

const routes = require('root/public/assets/routes.json');

export default class extends React.Component {
  state = {
    hasUpdate: false,
    navs: [
      { type: 'title', label: 'Preview' },
      { type: 'nav-link', icon: 'search', label: 'all', to: '/all' },
      { type: 'title', label: 'Components' },
      { type: 'nav-link', icon: 'note-beamed', label: 'button', to: '/button' },
      { type: 'nav-link', icon: 'music', label: 'button-group', to: '/button-group' },
      { type: 'nav-link', icon: 'search', label: 'checkbox', to: '/checkbox' },
      { type: 'nav-link', icon: 'flashlight', label: 'form-group', to: '/form-group' },
      { type: 'nav-link', icon: 'mail', label: 'icon', to: '/icon' },
      { type: 'nav-link', icon: 'heart', label: 'input', to: '/input' },
      { type: 'nav-link', icon: 'star', label: 'list-group', to: '/list-group' },
      { type: 'nav-link', icon: 'user', label: 'nav-group', to: '/nav-group' },
      { type: 'nav-link', icon: 'video', label: 'select', to: '/select' },
      { type: 'nav-link', icon: 'camera', label: 'table', to: '/table' },
      { type: 'nav-link', icon: 'layout', label: 'tabs', to: '/tabs' },
      { type: 'nav-link', icon: 'check', label: 'textarea', to: '/textarea' },
      { type: 'nav-link', icon: 'help', label: 'toolbar', to: '/toolbar' },
      { type: 'nav-link', icon: 'quote', label: 'window', to: '/window' }
    ]
  };

  get component() {
    return location.hash.slice(2);
  }

  componentDidMount() {
    NxOfflineSw.install({
      onUpdateReady: () => {
        this.setState({ hasUpdate: true });
      }
    });
  }

  render() {
    const { navs, hasUpdate } = this.state;
    return (
      <div className="example-component-window">
        <ReactFullImage src="http://photonkit.com/assets/img/photo-couch.png" />
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

                    <Route path="/all" children={require('./components/all').default} />
                    <Redirect to="/all" />
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
