import Icon from 'packages/icon/main';
const icons = require('root/public/assets/icons.json');

export default () => {
  return (
    <div className="padded exmaple-icon">
      {icons.map((item) => (
        <Icon value={item} key={item} />
      ))}
    </div>
  );
};
