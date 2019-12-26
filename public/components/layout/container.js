import cx from 'classnames';
import Header from './header';

export default ({ children, className }) => {
  const name = location.hash.slice(2);
  return (
    <div className={cx(`padded exmaple-${name}`, className)}>
      <Header title={name} />
      {children}
    </div>
  );
};
