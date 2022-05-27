import styles from './Product.module.scss';
import classNames from 'classnames/bind';
import { Container, Grid } from '@mui/material';
import Button from '../Button';
import CardProductItem from '../CardProductItem';

const cx = classNames.bind(styles);
function Product() {
    return (
        <Container className={cx('wrapper')} maxWidth="lg">
            <Grid container>
                <Grid item xs={12}>
                    <div className={cx('title')}>
                        <h2></h2>
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <ul className={cx('wrapperBtn')}>
                        <li>
                            <Button className={cx('customBtn')} rounded outline>
                                button
                            </Button>
                        </li>
                    </ul>
                </Grid>
                <Grid container>
                    <Grid item xs={3}>
                        <CardProductItem />
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Product;
