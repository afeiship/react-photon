import Button from 'packages/button/main';
import ButtonGroup from 'packages/button-group/main';
import Icon from 'packages/icon/main';
import ReactBlank from '@feizheng/react-blank';
import Container from 'root/public/components/layout/container';

export default () => {
  return (
    <Container>
      <ButtonGroup>
        <Button size="mini" active>Mini</Button>
        <Button size="mini">Normal</Button>
        <Button size="mini">Large</Button>
      </ButtonGroup>
      <ReactBlank value={20} />
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
      <ReactBlank value={20} />
      <ButtonGroup>
        <Button>
          <Icon value="home" />
        </Button>
        <Button>
          <Icon value="folder" />
        </Button>
        <Button active>
          <Icon value="cloud" />
        </Button>
        <Button>
          <Icon value="popup" />
        </Button>
        <Button>
          <Icon value="shuffle" />
        </Button>
      </ButtonGroup>
    </Container>
  );
};
