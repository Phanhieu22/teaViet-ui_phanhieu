import styles from './Footer.module.scss';
import classnames from 'classnames/bind';
import { Container, Grid } from '@mui/material';
import Button from '~/component/Button';
import Content from './Content';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faEnvelope,
    faEnvelopeCircleCheck,
    faFileMedicalAlt,
    faLocation,
    faLocationDot,
    faMobile,
    faMobileAlt,
    faPlus,
} from '@fortawesome/free-solid-svg-icons';
import SelectButton from '~/component/SelectButton';

const cx = classnames.bind(styles);
const configMenuFooter = [
    {
        title: 'Loại trà',
        children: [
            {
                nameItem: 'Trà xanh matcha',
                to: 'item',
            },
            {
                nameItem: 'Trà xanh Sencha',
                to: 'item',
            },
            {
                nameItem: 'Trà xanh Komachi',
                to: 'item',
            },
            {
                nameItem: 'Trà Houjicha',
                to: 'item',
            },
            {
                nameItem: 'Trà Genmaicha',
                to: 'item',
            },
        ],
    },
    {
        title: 'Về chúng tôi',
        children: [
            {
                nameItem: 'Profile & Catalogue',
                to: 'item',
            },
            {
                nameItem: 'Liên hệ với chúng tôi',
                to: 'item',
            },
            {
                nameItem: 'Tự công bố sản phẩm',
                to: 'item',
            },
            {
                nameItem: 'Phân loại trà',
                to: 'item',
            },
        ],
    },
    {
        title: 'Chăm sóc khách hàng',
        children: [
            {
                nameItem: 'Điều khoản sử dụng',
                to: 'item',
            },
            {
                nameItem: 'Tài khoản của tôi',
                to: 'item',
            },
            {
                nameItem: 'Nhãn hiệu riêng',
                to: 'item',
            },
        ],
    },
];

function Footer() {
    return (
        <footer className={cx('wrapper')}>
            <Container maxWidth="lg">
                <Grid container spacing={3}>
                    <Grid item xs={12} md={4}>
                        <img
                            className={cx('logo')}
                            src="https://theme.hstatic.net/200000354189/1000743772/14/logo.png?v=191"
                            alt="logo"
                        />
                        <div className={cx('content')}>
                            <Content
                                icon={<FontAwesomeIcon icon={faLocationDot} />}
                                boldText="CÔNG TY TNHH SATOEN VIỆT NAM"></Content>
                            <Content boldText="Văn phòng Hà Nội">
                                {' '}
                                23 Cao Bá Quát, phường Điện Biên, quận Ba Đình, Thành phố Hà Nội, Việt Nam
                            </Content>{' '}
                            <Content boldText="Nhà máy">
                                {' '}
                                Tiểu Khu Sao Đỏ 2, xã Vân Hồ, huyện Vân Hồ, tỉnh Sơn La, Việt Nam.
                            </Content>{' '}
                            <Content boldText="SHIZUOKA-HOME OF JAPANESE TEA SATOEN"> </Content>
                            <Content boldText="Địa chỉ">
                                {' '}
                                1057 Ohara, Aoi-ku, Shizuoka City, Shizuoka Prefecture 421-1392.
                            </Content>{' '}
                            <div className={cx('wrapperTitle')}>
                                <span className={cx('iconMobile')}>
                                    {' '}
                                    <FontAwesomeIcon icon={faMobileAlt} />
                                </span>{' '}
                                <h5>039 433 7519</h5>{' '}
                            </div>
                            <div className={cx('wrapperTitle')}>
                                <span className={cx('iconGmail')}> {<FontAwesomeIcon icon={faEnvelope} />}</span>{' '}
                                <h5>phanduchieu.22@gmail.com</h5>{' '}
                            </div>
                        </div>
                    </Grid>{' '}
                    <Grid className={cx('contentDesktop')} item xs={12} md={8}>
                        <Grid className={cx('menuFooterDesktop')} spacing={2} container>
                            {configMenuFooter.map((items, index) => (
                                <Grid key={index} xs={4} item>
                                    <h5>{items.title}</h5>{' '}
                                    {items.children.map((item, index) => (
                                        <Button key={index} className={cx('customBtn')} text to={item.to}>
                                            {item.nameItem}
                                        </Button>
                                    ))}
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                    <Grid className={cx('contentMobile')} item xs={12} md={8}>
                        <Grid className={cx('menuFooterMobile')} spacing={2} container>
                            {configMenuFooter.map((items, index) => (
                                <Grid key={index} xs={12} item>
                                    <SelectButton
                                        menuFooter
                                        title={items.title}
                                        rightIcon={<FontAwesomeIcon icon={faPlus} />}>
                                        {items.children.map((item, index) => (
                                            <li key={index}>
                                                <Button className={cx('customBtn')} text to={item.to}>
                                                    {item.nameItem}
                                                </Button>
                                            </li>
                                        ))}
                                    </SelectButton>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
            <div className={cx('copyRight')}></div>
        </footer>
    );
}

export default Footer;
