import { Container, Grid } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import classnames from 'classnames/bind';
import * as React from 'react';
import { useEffect, useState } from 'react';
import Breadcrumb_bg from '~/component/Breadcrumb_bg';
import CardProductItem from '~/component/CardProductItem';
import styles from './CollectionsPage.module.scss';
const cx = classnames.bind(styles);

const data = {
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
        {
            thumbnail:
                'https://product.hstatic.net/200000354189/product/jasmine_matcha_100g_0ce946dbe9ff4e99b1ee141c6131be92.jpg',
            nameItem: 'Trà xanh Matcha hương Nhài 100g',
            price: 125000,
            to: '/detailItem',
        },
    ],
};
function CollectionsPage() {
    const [widthScreen, setWidthScreen] = useState(0);

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

    return (
        <div className={cx('wrapper')}>
            <Breadcrumb_bg title="Tất cả sản phẩm" level1="Trang chủ" level2="Tất cả các sản phẩm" level3="trà xanh" />
            <Container>
                <Grid container className={cx('filterWrapper')}>
                    <Grid item xs={12} md={3}>
                        {' '}
                        <h2 className="title">Tất cả sản phẩm</h2>
                    </Grid>
                    <Grid item xs={12} md={9}>
                        <div className={cx('filter')}>
                            <span className={cx('titleFilter')}>Sắp xếp theo :</span>
                            <RadioGroup
                                row
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue="female"
                                name="radio-buttons-group">
                                <FormControlLabel value="female" control={<Radio />} label="A đến Z" />
                                <FormControlLabel value="male" control={<Radio />} label="Z đến A" />
                            </RadioGroup>
                            <RadioGroup
                                row
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue="female"
                                name="radio-buttons-group">
                                <FormControlLabel value="female" control={<Radio />} label="Giá tăng dần" />
                                <FormControlLabel value="male" control={<Radio />} label="Giá giảm dần" />
                            </RadioGroup>
                        </div>
                    </Grid>
                </Grid>
            </Container>

            <Container>
                <Grid className={cx('items')} spacing={3} container>
                    {data.items.map((item, index) => (
                        <Grid key={index} item xs={setCol(widthScreen)}>
                            <CardProductItem setting search key={index} item={item} />{' '}
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </div>
    );
}

export default CollectionsPage;
