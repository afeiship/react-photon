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
            <Button size="mini">
              <Icon value="home" />
            </Button>
            <Button size="mini">
              <Icon value="folder" />
            </Button>
            <Button size="mini" active>
              <Icon value="cloud" />
            </Button>
            <Button size="mini">
              <Icon value="popup" />
            </Button>
            <Button size="mini">
              <Icon value="shuffle" />
            </Button>
          </ButtonGroup>
        </ToolbarActions>
      </ToolbarHeader>
    </div>
  );
};
