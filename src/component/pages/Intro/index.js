import { Container } from '@mui/material';
import classnames from 'classnames/bind';
import styles from './Intro.module.scss';

const cx = classnames.bind(styles);

function Intro() {
    return (
        <div className={cx('wrapper')}>
            <Container>
                {' '}
                <img
                    src="https://file.hstatic.net/200000354189/file/lich_su_2cdcec271ac7429c9189cfa4a35dbe96_grande.jpg"
                    alt="img"
                />
                <div className={cx('content')}>
                    <h2>Lịch sử</h2>

                    <p>
                        Cách đây hơn 20 năm tập đoàn Satoen Nhật Bản đã cử nhiều chuyên gia và kỹ sư nông nghiệp sang
                        Việt Nam tìm hiểu, nghiên cứu để thành lập môi trường canh tác phù hợp với giống cây chè Nhật
                        Bản với các tiêu chí sau:
                    </p>
                    <ol>
                        <li>Độ cao vườn chè phải trên 1000 mét so với mặt nước biển.</li>
                        <li>
                            Sương mù bao phủ hầu hết thời gian trong ngày, nhiệt độ chênh lệch cao so với đồng bằng.
                        </li>
                        <li>Đất đai giầu dưỡng chất.</li>
                    </ol>
                    <p>
                        Qua nhiều đánh giá, thử nghiệm trên nhiều vùng đất, các chuyên gia và kỹ sư nông nghiệp Satoen
                        Nhật Bản chọn cao nguyên Vân Hồ - Tỉnh Sơn La để tạo ra cánh đồng chè hiện nay.
                    </p>
                </div>
                <div className={cx('content')}>
                    <h2>Tầm nhìn - Mục tiêu</h2>
                    <p>
                        Xây dựng và phát triển Công ty Satoen Việt Nam trở thành công ty có uy tín trong việc sản xuất
                        và phân phối các sản phẩm trà của Nhật Bản tại thị trường Việt Nam và xuất khẩu trên toàn thế
                        giới
                    </p>
                    <img
                        src="https://file.hstatic.net/200000354189/file/gia_tri_cot_loi_5f818dc08dae4a669740d8d0b953da9c_grande.jpg"
                        alt="img"
                    />
                    <h2>Giá trị cốt lõi</h2>
                    <p>Tại Satoen Việt Nam chúng tôi.</p>
                    <ul>
                        <li>
                            - Lấy chữ <b>“TÍN”</b> làm vũ khí cạnh tranh. Chúng tôi đặt chữ TÍN lên hàng đầu, trong kinh
                            doanh luôn chúng tôi lấy chữ TÍN để cạnh tranh. Chúng tôi luôn nỗ lực không ngừng để bảo vệ
                            chữ TÍN bằng việc cam kết đem lại cho khách hàng các sản phẩm, dịch vụ đúng với cam kết.{' '}
                        </li>
                        <li>
                            - Lấy chữ <b>“TÂM”</b> làm nền tảng kinh doanh. Chúng tôi đặt chữ TÂM làm nền tảng phát
                            triển kinh doanh. Cung cấp các sản phẩm và dịch vụ đem lại sức khoẻ, lợi ích và giá trị
                            thiết thực góp phần nâng cao đời sống tinh thần cho mọi người.{' '}
                        </li>
                        <li>
                            - Lấy chữ <b>“TRÍ”</b> làm đòn bẩy phát triển. Chúng tôi coi chữ TRÍ trong mỗi thành viên
                            trong công ty là đòn bẩy để công ty phát triển. Chữ TRÍ sẽ tạo ra giá khác biệt và bản sắc
                            đặc trưng (Signature) trong mỗi sản phẩm, dịch vụ của chúng tôi.{' '}
                        </li>
                        <li>
                            - Lấy chữ <b>“TINH”</b> để phát triển trường tồn. Chúng tôi lấy chữ TINH làm mục tiêu để xây
                            dựng công ty trường tồn. TINH thần phải đoàn kết, lựa trọn nhân sự phải TINH tuý, thiết kế
                            bộ máy phải TINH gọn, xây dựng sản phẩm – dịch vụ phải TINH hoa, góp một phần nhỏ tạo nên
                            cuộc sống TINH tế cho cộng đồng.{' '}
                        </li>
                    </ul>
                </div>
            </Container>
        </div>
    );
}

export default Intro;
