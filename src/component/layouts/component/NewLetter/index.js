import { Container } from '@mui/material';
import classnames from 'classnames/bind';
import SearchFooter from '../SearchFooter';
import styles from './NewLetter.module.scss';
const cx = classnames.bind(styles);

function NewLetter() {
    return (
        <div className={cx('wrapper')}>
            <Container maxWidth="lg">
                <div className={cx('newLetter')}>
                    <h3 className={cx('title')}>Đăng ký nhận tin khuyễn mãi</h3>
                    <SearchFooter />
                </div>
            </Container>
        </div>
    );
}

export default NewLetter;
