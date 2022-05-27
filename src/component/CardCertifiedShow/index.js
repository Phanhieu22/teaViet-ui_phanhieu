import styles from './CardCertifiedShow.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);



function CardCertifiedShow({data}) {
    return (
        <div className={cx('swapper')}>
            <img className={cx('image')} src={data.certifiedImg} alt="certified" />
            <h4 className={cx('title')}>{data.title}</h4>
            <p className={cx('content')}>{data.content}</p>
        </div>
    );
}

export default CardCertifiedShow;
