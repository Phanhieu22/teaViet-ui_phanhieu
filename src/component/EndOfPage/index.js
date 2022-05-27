import styles from './EndOfPage.module.scss';
import classnames from 'classnames/bind';

const cx = classnames.bind(styles);

function EndOfPage({ title }) {
    return (
        <div className={cx('title')}>
            <h2></h2>
        </div>
    );
}

export default EndOfPage;
