import styles from './Menu.module.scss';
import classnames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
const cx = classnames.bind(styles);

function HeaderMenu({ title, onBack }) {
    return (
        <header className={cx('header')}>
            <h4 className={cx('header-title')}>{title}</h4>
        </header>
    );
}

export default HeaderMenu;
