import Icon from 'packages/icon/main';

export default ({ title }) => {
  return (
    <header className="layout-header">
      <Icon value="home" />
      <strong className="padded-horizontally-less">{title}</strong>
    </header>
  );
};
