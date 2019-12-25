import ToolbarActions from 'packages/toolbar-actions/main';
import Icon from 'packages/icon/main';
import Button from 'packages/button/main';
import ButtonGroup from 'packages/button-group/main';
import ToolbarHeader from 'packages/toolbar-header/main';

export default () => {
  return (
    <div className="padded">
      <ToolbarHeader title="toolbar">
        <ToolbarActions>
          <ButtonGroup>
            <Button>
              <Icon value="home" />
            </Button>
            <Button>
              <Icon value="folder" />
            </Button>
            <Button>
              <Icon value="cloud" />
            </Button>
          </ButtonGroup>
        </ToolbarActions>
      </ToolbarHeader>
    </div>
  );
};
