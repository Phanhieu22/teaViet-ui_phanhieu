import styles from './Product.module.scss';
import classNames from 'classnames/bind';
import { Container, Grid } from '@mui/material';
import Button from '../Button';
import CardProductItem from '../CardProductItem';
import { useEffect, useState } from 'react';
import SelectButton from '../SelectButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function Product() {
    const [widthScreen, setWidthScreen] = useState(0);
    const data = [
        {
            nameItems: 'Trà xanh matcha',
            items: [
                {
                    thumbnail:
                        'https://product.hstatic.net/200000354189/product/jasmine_matcha_100g_0ce946dbe9ff4e99b1ee141c6131be92.jpg',
                    nameItem: 'Trà xanh Matcha hương Nhài 100g',
                    price: 125000,
                    to: '/detailItem',
                },
                {
                    thumbnail:
                        'https://product.hstatic.net/200000354189/product/jasmine_matcha_100g_0ce946dbe9ff4e99b1ee141c6131be92.jpg',
                    nameItem: 'Trà xanh Matcha hương Nhài 100g',
                    price: 125000,
                    to: '/detailItem',
                },
                {
                    thumbnail:
                        'https://product.hstatic.net/200000354189/product/jasmine_matcha_100g_0ce946dbe9ff4e99b1ee141c6131be92.jpg',
                    nameItem: 'Trà xanh Matcha hương Nhài 100g',
                    price: 125000,
                    to: '/detailItem',
                },
                {
                    thumbnail:
                        'https://product.hstatic.net/200000354189/product/jasmine_matcha_100g_0ce946dbe9ff4e99b1ee141c6131be92.jpg',
                    nameItem: 'Trà xanh Matcha hương Nhài 100g',
                    price: 125000,
                    to: '/detailItem',
                },
                {
                    thumbnail:
                        'https://product.hstatic.net/200000354189/product/jasmine_matcha_100g_0ce946dbe9ff4e99b1ee141c6131be92.jpg',
                    nameItem: 'Trà xanh Matcha hương Nhài 100g',
                    price: 125000,
                    to: '/detailItem',
                },
            ],
        },
        {
            nameItems: 'Trà xanh sencha',
            items: [
                {
                    thumbnail:
                        'https://product.hstatic.net/200000354189/product/jasmine_matcha_100g_0ce946dbe9ff4e99b1ee141c6131be92.jpg',
                    nameItem: 'Trà xanh Matcha hương Nhài 100g',
                    price: 125000,
                    to: '/detailItem',
                },
                {
                    thumbnail:
                        'https://product.hstatic.net/200000354189/product/jasmine_matcha_100g_0ce946dbe9ff4e99b1ee141c6131be92.jpg',
                    nameItem: 'Trà xanh Matcha hương Nhài 100g',
                    price: 125000,
                    to: '/detailItem',
                },
                {
                    thumbnail:
                        'https://product.hstatic.net/200000354189/product/jasmine_matcha_100g_0ce946dbe9ff4e99b1ee141c6131be92.jpg',
                    nameItem: 'Trà xanh Matcha hương Nhài 100g',
                    price: 125000,
                    to: '/detailItem',
                },
            ],
        },
        {
            nameItems: 'Trà xanh Komachi',
            items: [
                {
                    thumbnail:
                        'https://product.hstatic.net/200000354189/product/jasmine_matcha_100g_0ce946dbe9ff4e99b1ee141c6131be92.jpg',
                    nameItem: 'Trà xanh Matcha hương Nhài 100g',
                    price: 125000,
                    to: '/detailItem',
                },
                {
                    thumbnail:
                        'https://product.hstatic.net/200000354189/product/jasmine_matcha_100g_0ce946dbe9ff4e99b1ee141c6131be92.jpg',
                    nameItem: 'Trà xanh Matcha hương Nhài 100g',
                    price: 125000,
                    to: '/detailItem',
                },
                {
                    thumbnail:
                        'https://product.hstatic.net/200000354189/product/jasmine_matcha_100g_0ce946dbe9ff4e99b1ee141c6131be92.jpg',
                    nameItem: 'Trà xanh Matcha hương Nhài 100g',
                    price: 125000,
                    to: '/detailItem',
                },
            ],
        },
        {
            nameItems: 'Trà xanh Houijcha',
            items: [
                {
                    thumbnail:
                        'https://product.hstatic.net/200000354189/product/jasmine_matcha_100g_0ce946dbe9ff4e99b1ee141c6131be92.jpg',
                    nameItem: 'Trà xanh Matcha hương Nhài 100g',
                    price: 125000,
                    to: '/detailItem',
                },
                {
                    thumbnail:
                        'https://product.hstatic.net/200000354189/product/jasmine_matcha_100g_0ce946dbe9ff4e99b1ee141c6131be92.jpg',
                    nameItem: 'Trà xanh Matcha hương Nhài 100g',
                    price: 125000,
                    to: '/detailItem',
                },
                {
                    thumbnail:
                        'https://product.hstatic.net/200000354189/product/jasmine_matcha_100g_0ce946dbe9ff4e99b1ee141c6131be92.jpg',
                    nameItem: 'Trà xanh Matcha hương Nhài 100g',
                    price: 125000,
                    to: '/detailItem',
                },
            ],
        },
        {
            nameItems: 'Trà xanh Genmaicha',
            items: [
                {
                    thumbnail:
                        'https://product.hstatic.net/200000354189/product/jasmine_matcha_100g_0ce946dbe9ff4e99b1ee141c6131be92.jpg',
                    nameItem: 'Trà xanh Matcha hương Nhài 100g',
                    price: 125000,
                    to: '/detailItem',
                },
                {
                    thumbnail:
                        'https://product.hstatic.net/200000354189/product/jasmine_matcha_100g_0ce946dbe9ff4e99b1ee141c6131be92.jpg',
                    nameItem: 'Trà xanh Matcha hương Nhài 100g',
                    price: 125000,
                    to: '/detailItem',
                },
                {
                    thumbnail:
                        'https://product.hstatic.net/200000354189/product/jasmine_matcha_100g_0ce946dbe9ff4e99b1ee141c6131be92.jpg',
                    nameItem: 'Trà xanh Matcha hương Nhài 100g',
                    price: 125000,
                    to: '/detailItem',
                },
            ],
        },
    ];
    const [productItemActive, setProductItemActive] = useState(data[0]);

    const handleSetItemsActive = (items) => {
        setProductItemActive(items);
    };
    function getWindowDimensions() {
        const { innerWidth: width, innerHeight: height } = window;

        return {
            width,
            height,
        };
    }
    useEffect(() => {
        function handleResize() {
            setWidthScreen(getWindowDimensions().width);
        }
        setWidthScreen(window.innerWidth);
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const setCol = (width) => {
        if (width > 1200) {
            return 3;
        } else {
        }
        if (width > 600) {
            return 4;
        } else {
            return 6;
        }
    };
    return (
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
                                        productItemActive.nameItems === items.nameItems ? 'active' : ''
                                    )}
                                    rounded
                                    outline>
                                    {items.nameItems}
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
                                            productItemActive.nameItems === items.nameItems ? 'activeMobile' : ''
                                        )}>
                                        {items.nameItems}
                                    </Button>
                                </li>
                            ))}
                        </SelectButton>
                    </div>
                </Grid>{' '}
                <Grid className={cx('items')} spacing={3} container>
                    {productItemActive.items.map((item, index) => (
                        <Grid key={index} item xs={setCol(widthScreen)}>
                            <CardProductItem key={index} item={item} />{' '}
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Container>
    );
}

export default Product;
