import styles from './Action.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
function Action() {
    return <div className={cx('wrapper')}>action</div>;
}

export default Action;
