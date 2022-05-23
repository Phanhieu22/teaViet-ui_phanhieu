import classNames from 'classnames/bind';
import NavBar from '../component/navBar';
import styles from './DefaultLayout.module.scss';
import 'react-tippy/dist/tippy.css'
const cx = classNames.bind(styles);
function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <NavBar />
            {children}
        </div>
    );
}

export default DefaultLayout;
