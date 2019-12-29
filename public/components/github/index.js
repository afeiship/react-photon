import Property from 'root/public/components/layout/property';
import Container from 'root/public/components/layout/container';
import ReactHighlight from '@feizheng/react-highlight';
import ReactClipboard from '@feizheng/react-clipboard';
import Icon from 'packages/icon/main';

export default () => {
  return (
    <Container>
      <div className="padded-vertically">
        <p>
          <a target="_blank" href="https://github.com/afeiship/react-photon">
            <Icon value="link" />
            <span>react-photon</span>
          </a>
        </p>
        <p>
          <a target="_blank" href="http://photonkit.com/">
            <Icon value="link" />
            <span>photonkit</span>
          </a>
        </p>
      </div>
    </Container>
  );
};
