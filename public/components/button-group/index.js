import Button from 'packages/button/main';
import ButtonGroup from 'packages/button-group/main';
import Icon from 'packages/icon/main';
import ReactBlank from '@jswork/react-blank';
import Container from 'root/public/components/layout/container';
import Property from 'root/public/components/layout/property';

export default () => {
  const items = [
    {
      property: 'className',
      type: 'String',
      default: '-',
      description: 'Extended class name for component.'
    }
  ];

  return (
    <Container>
      <Property items={items} />
      <ButtonGroup>
        <Button size="mini" active>
          Mini
        </Button>
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
