import classnames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Button from '~/component/Button';
import styles from './NotFound404.module.scss';
import panda from '~/assets/images/panda3.png';
const cx = classnames.bind(styles);

function NotFound404() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('title')}>
                <h2></h2>
                <b>Không tìm thấy nội dung</b>
                <p>
                    Đường dẫn này <b>không tồn tại</b> hoặc đang trong <b>quá trình phát triển</b>{' '}
                </p>
                <p>
                    vui lòng quay trở lại{' '}
                    <Link to="/">
                        <b>trang chủ</b>
                    </Link>
                </p>
            </div>
            <div>
                <img className={cx('img')} src={panda} alt="icon" />
            </div>
            <Button outline rounded className={cx('customBtn')} to="/">
                Trở về trang chủ
            </Button>
        </div>
    );
}

export default NotFound404;
