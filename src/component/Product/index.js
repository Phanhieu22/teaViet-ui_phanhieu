import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Grid } from '@mui/material';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '~/redux/collections/actions';
import { selectorCollections } from '~/redux/collections/selector';
import Button from '../Button';
import CardProductItem from '../CardProductItem';
import SelectButton from '../SelectButton';
import styles from './Product.module.scss';
const cx = classNames.bind(styles);

const data = [
    {
        nameProducts: 'Trà xanh matcha',
        productPortfolio: 'tra-xanh-matcha',
    },
    {
        nameProducts: 'Trà xanh sencha',
        productPortfolio: 'tra-xanh-sencha',
    },
    {
        nameProducts: 'Trà xanh Komachi',
        productPortfolio: 'tra-xanh-komachi',
    },
    {
        nameProducts: 'Trà xanh Houijcha',
        productPortfolio: 'tra-xanh-houijcha',
    },
    {
        nameProducts: 'Trà xanh Genmaicha',
        productPortfolio: 'tra-xanh-genmaicha',
    },
];
function Product({ setting = false }) {
    const dispatch = useDispatch();

    const [productPortfolioActive, setProductPortfolioActive] = useState(data[0].productPortfolio);

    useEffect(() => {
        dispatch(actions.getAllCollections.getAllCollectionsRequest(productPortfolioActive));
    }, [productPortfolioActive]);

    const response = useSelector(selectorCollections);

    const handleSetItemsActive = (items) => {
        setProductPortfolioActive(items.productPortfolio);
    };
    return (
        <div className={cx('wrapper')}>
            <Container className={cx('wrapper')} maxWidth="lg">
                <Grid container>
                    <Grid item xs={12}>
                        <div className={cx('title')}>
                            <h2></h2>
                        </div>
                    </Grid>
                    <Grid item xs={12}>
                        <ul className={cx('wrapperBtnDesktop')}>
                            {data.map((items, index) => (
                                <li key={index}>
                                    <Button
                                        onClick={() => handleSetItemsActive(items)}
                                        className={cx(
                                            'customBtn',
                                            items.productPortfolio === productPortfolioActive ? 'active' : ''
                                        )}
                                        rounded
                                        outline>
                                        {items.nameProducts}
                                    </Button>
                                </li>
                            ))}
                        </ul>
                        <div className={cx('wrapperBtnMobile')}>
                            <SelectButton
                                title="DANH MỤC SẢN PHẨM"
                                outline
                                rounded
                                rightIcon={<FontAwesomeIcon icon={faCaretDown} />}>
                                {data.map((items, index) => (
                                    <li key={index}>
                                        <Button
                                            onClick={() => handleSetItemsActive(items)}
                                            className={cx(
                                                'customBtn',
                                                items.productPortfolio === productPortfolioActive ? 'active' : ''
                                            )}
                                            rounded
                                            outline>
                                            {items.nameProducts}
                                        </Button>
                                    </li>
                                ))}
                            </SelectButton>
                        </div>
                    </Grid>{' '}
                    <Grid className={cx('items')} spacing={3} container>
                        {response.length > +0 &&
                            response.map((item, index) => (
                                <Grid key={index} item xs={6} sm={4} md={3} lg={3}>
                                    <CardProductItem setting={setting} key={index} item={item} />{' '}
                                </Grid>
                            ))}
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

export default Product;
