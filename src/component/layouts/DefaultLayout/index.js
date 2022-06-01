import classNames from 'classnames/bind';
import NavBar from '../component/navBar';
import styles from './DefaultLayout.module.scss';
import 'react-tippy/dist/tippy.css';
import NewLetter from '../component/NewLetter';
import Footer from '../component/Footer';
import ConnectSpeedDial from '../component/ConnectSpeedDial';

const cx = classNames.bind(styles);
function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <NavBar />
            {children}
            <div className={cx('speedDial')}>
                <ConnectSpeedDial />
            </div>

            <NewLetter />
            <Footer />
        </div>
    );
}

export default DefaultLayout;
