import Container from '@mui/material/Container';
import { Grid } from '@mui/material';

import styles from './About.module.scss';
import classNames from 'classnames/bind';
import EndOfPage from '../EndOfPage';
import CardCertifiedShow from '../CardCertifiedShow';
import CertifiedShowMobile from '~/component/CertifiedShowMobile';
const cx = classNames.bind(styles);

function About() {
    const items = [
        {
            id: '1',
            title: 'GLOBAL G.A.P.',
            content:
                'Chứng chỉ GLOBAL G.A.P (Good Agricultural Practice) là một bộ các tiêu chuẩn quốc tế chứng nhận việc thực hành sản xuất nông nghiệp tốt toàn cầu. ',
            certifiedImg: 'https://theme.hstatic.net/200000354189/1000743772/14/icon_uti_1.png?v=191',
        },
        {
            id: '2',

            title: 'HACCP CERTIFIED',
            certifiedImg: 'https://theme.hstatic.net/200000354189/1000743772/14/icon_uti_2.png?v=191',
            content:
                'Chứng chỉ HACCP (Hazard Analysis and Critical Control Points - phân tích mối nguy và kiểm soát điểm tới hạn ) là bộ những nguyên tắc được áp dụng trong việc lập hệ thống quản lý ATTP. ',
        },

        {
            id: '3',
            title: 'LIFE GREEN',
            content: 'Cùng chúng tôi hướng tới cuộc sống xanh, sống sạch, sống khẻo mạnh',
            certifiedImg: 'https://theme.hstatic.net/200000354189/1000743772/14/icon_uti_3.png?v=191',
        },
        {
            id: '4',

            title: 'HALAL CERTIFIED',
            content:
                'Chứng chỉ  HALAL là một quá trình đánh giá độc lập, khách quan \
        của cơ quan / tổ chức được cấp phép nhằm xác nhận rằng các sản phẩm / dịch vụ cụ thể được \
         đánh giá không sử dụng thành phần Haram. (Quy định của luật Hồi giáo).',
            certifiedImg: 'https://theme.hstatic.net/200000354189/1000743772/14/icon_uti_4.png?v=191',
        },
    ];
    return (
        <Container className={cx('wrapper')} maxWidth="lg">
            <Grid container>
                <Grid item xs={12}>
                    <EndOfPage title="VỀ CHÚNG TÔI" />
                </Grid>
                <Grid item xs={12}>
                    <div className={cx('description')}>
                        <p>
                            Satoen Việt Nam là doanh nghiệp 100% vốn đầu tư Nhật Bản. Chúng tôi đang sản xuất trà Nhật
                            Bản chất lượng cao tại Việt Nam. Vườn chè của Satoen Việt Nam được GLOBAL GAP cấp chứng nhận
                            là vùng nguyên liệu đạt tiêu chuẩn Thực hành Nông nghiệp Tốt Toàn cầu . Quy trình thu hoạch
                            và sản xuất tuân thủ những nguyên tắc được sử dụng trong việc lập hệ thống quản lý an toàn
                            thực phẩm HACCP và HALAL
                        </p>
                    </div>
                </Grid>

                <Grid className={cx('showCertified')} container spacing={2}>
                    <CertifiedShowMobile data={items} />
                </Grid>
            </Grid>
        </Container>
    );
}

export default About;
