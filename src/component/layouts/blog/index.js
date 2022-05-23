import classNames from 'classnames/bind';
import NavBar from '../component/navBar';
import SideBar from '../component/SideBar';
import styles from './Blog.module.scss';

const cx = classNames.bind(styles);
function BlogLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
           <NavBar/>
            <div className={cx('container')}>
                <div className={cx('content')}>{children}</div>
                <SideBar />
            </div>
        </div>
    );
}

export default BlogLayout;
