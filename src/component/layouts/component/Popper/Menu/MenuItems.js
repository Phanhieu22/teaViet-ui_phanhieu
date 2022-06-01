import Button from '~/component/Button';
import styles from './Menu.module.scss';
import classnames from 'classnames/bind';
const cx = classnames.bind(styles);
function MenuItem({ data, onClick = () => {},classNameProps }) {
    return (
        <div>
            <Button className={cx('menu-item',classNameProps)} rightIcon={data.icon} to={data.to} onClick={onClick}>
                {data.title}
            </Button>
        </div>
    );
}

export default MenuItem;
