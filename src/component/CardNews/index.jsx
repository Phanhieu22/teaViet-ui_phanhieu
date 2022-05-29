import { faCalendar, faGear } from '@fortawesome/free-solid-svg-icons';
import { SearchIcon } from '~/component/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '~/component/Button';
import styles from './CardNews.module.scss';
import Tippy from '@tippyjs/react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);

function CardNews({ item, onClick, className, ...passProps }) {
    const props = {
        [className]: className,
        onClick,
        ...passProps,
    };
    return (
        <Link to={item.to}>
            <div {...props} className={cx('wrapper')}>
                <img className={cx('image')} src={item.thumbnail} />
                <div className={cx('infoPoster')}>
                    <div className={cx('dateSubmitted')}>
                        <FontAwesomeIcon icon={faCalendar} />
                        <h5>{item.dateSubmitted}</h5>
                    </div>
                    <div className={cx('poster')}>
                        <span className={cx('people')}>đăng bởi:</span>{' '}
                        <span className={cx('namePoster')}>{item.author}</span>
                    </div>
                </div>
                <div className={cx('wrapperContent')}>
                    <div className={cx('title')}>
                        <h5>{item.title}</h5>
                    </div>

                    <span className={cx('intro')}>{item.intro}</span>
                </div>
                <div className={cx('layer')}></div>
            </div>
        </Link>
    );
}

export default CardNews;
