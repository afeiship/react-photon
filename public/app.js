import React from 'react';

export default class extends React.Component {
  render() {
    return (
      <div>
        <header className="toolbar toolbar-header">
          <h1 className="title">Header</h1>
          <div className="toolbar-actions">
            <div className="btn-group">
              <button className="btn btn-default">
                <span className="icon icon-home"></span>
              </button>
              <button className="btn btn-default">
                <span className="icon icon-folder"></span>
              </button>
              <button className="btn btn-default active">
                <span className="icon icon-cloud"></span>
              </button>
              <button className="btn btn-default">
                <span className="icon icon-popup"></span>
              </button>
              <button className="btn btn-default">
                <span className="icon icon-shuffle"></span>
              </button>
            </div>
          </div>
        </header>

        <footer className="toolbar toolbar-footer">
          <h1 className="title">Footer</h1>
          <div class="toolbar-actions">
            <button class="btn btn-default">Cancel</button>

            <button class="btn btn-primary pull-right">Save</button>
          </div>
        </footer>
      </div>
    );
  }
}
