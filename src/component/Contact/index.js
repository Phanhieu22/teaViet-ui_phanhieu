import styles from './Contact.module.scss';
import classNames from 'classnames/bind';
import Button from '../Button';
const cx = classNames.bind(styles);

function Contact() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('parallax')}>
                <h2>Hotline</h2>
                <Button className={cx('customBtn')} text>
                    039 433 7519
                </Button>
                <p>
                    TỪ ĐỒNG TRÀ NÀY, SATOEN VIỆT NAM MANG ĐẾN CHO BẠN NHỮNG SẢN PHẨM TRÀ XANH NHẬT BẢN CHÍNH HIỆU VỚI
                    CHẤT LƯỢNG CAO CẤP NHẤT.
                </p>
            </div>
        </div>
    );
}

export default Contact;
