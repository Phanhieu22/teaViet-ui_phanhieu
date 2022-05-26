import { Grid } from '@mui/material';
import classnames from 'classnames/bind';
import Button from '../Button';
import styles from './Collections.module.scss';
const cx = classnames.bind(styles);

function CollectionItem({ data }) {
    return (
        <Grid item xs={16} sm={8} md={8} lg={3.2}>
            <div className={cx('wrapper')} style={{ backgroundColor: data.backgroundColor }}>
                <div className={cx('container')}>
                    <div className={cx('content')}>
                        <div className={cx('title')}>
                            <Button text className={cx('customBtnTitle')} to={data.to}>
                                {data.title}
                            </Button>
                        </div>
                        <div className={cx('description')}>
                            <p className={cx('text')} style={{ color: data.color }}>
                                {data.description}
                            </p>{' '}
                        </div>{' '}
                        <img className={cx('image')} src={data.image} />
                    </div>

                    <Button btnCollections className={cx('customBtn')} to={data.to}>
                        Xem ngay
                    </Button>
                </div>
            </div>
        </Grid>
    );
}

export default CollectionItem;
