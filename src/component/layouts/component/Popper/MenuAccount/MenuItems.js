import Button from '~/component/Button';
import styles from './MenuAccount.module.scss';
import classnames from 'classnames/bind';
const cx = classnames.bind(styles);
function MenuItem({ data, onClick = () => {} }) {
  return (
    <div>
      <Button className={cx('menu-item')} rightIcon={data.icon} to={data.to} onClick={onClick}>
        {data.title}
      </Button>
    </div>
  );
}

export default MenuItem;
