import styles from './Footer.module.scss';
import classnames from 'classnames/bind';

const cx = classnames.bind(styles);

function Content({ icon, boldText, children }) {
    return (
        <div className={cx('wrapperTitle')}>
            <span className={cx('icon')}> {icon}</span>{' '}
            <h5>
                {boldText} {children && ':'} <span className={cx('text')}>{children}</span>
            </h5>{' '}
        </div>
    );
}

export default Content;
