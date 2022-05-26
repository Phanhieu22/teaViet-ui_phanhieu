import styles from './About.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function About() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('title')}>
                <h2>VỀ CHÚNG TÔI</h2>
            </div>
          
            <div className={cx('description')}>
                <p>
                    Satoen Việt Nam là doanh nghiệp 100% vốn đầu tư Nhật Bản. Chúng tôi đang sản xuất trà Nhật Bản chất
                    lượng cao tại Việt Nam. Vườn chè của Satoen Việt Nam được GLOBAL GAP cấp chứng nhận là vùng nguyên
                    liệu đạt tiêu chuẩn Thực hành Nông nghiệp Tốt Toàn cầu . Quy trình thu hoạch và sản xuất tuân thủ
                    những nguyên tắc được sử dụng trong việc lập hệ thống quản lý an toàn thực phẩm HACCP và HALAL
                </p>
            </div>
            <div className={cx('showCertificate')}>certificate</div>
        </div>
    );
}

export default About;
