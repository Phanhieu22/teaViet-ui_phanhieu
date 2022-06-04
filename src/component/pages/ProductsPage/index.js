import { Breadcrumbs, Container, Grid, Link, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import classnames from 'classnames/bind';
import React, { useEffect, useState } from 'react';
import Button from '~/component/Button';
import CardProductItem from '~/component/CardProductItem';
import ImageProduct from '~/component/ImageProduct';
import styles from './product.module.scss';
import Breadcrumb_bg from '~/component/Breadcrumb_bg';

const cx = classnames.bind(styles);

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}>
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}
const ProductsPage = () => {
    const [value, setValue] = useState(0);
    const [widthScreen, setWidthScreen] = useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
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

    return (
        <div className={cx('wrapper')}>
            <Breadcrumb_bg
                title="Chè xanh matcha"
                level1="Trang chủ"
                toLv1="/"
                level2="Chè xanh matcha"
                toLv2="/products"
                level3="Trà xanh Matcha hương Nhài 1kg"
            />
            <Container>
                <Grid container>
                    <Grid item xs={12} md={6}>
                        <ImageProduct img="https://product.hstatic.net/200000354189/product/jasmine_matcha_1kg_56298c226fc644ceb279083680b7a6f2_1024x1024.jpg" />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <div className={cx('nameProduct')}>
                            <h2>Trà xanh Matcha hương Nhài 1kg</h2>
                        </div>
                        <div className={cx('status')}>
                            <span>
                                Thương hiệu : <span className={cx('colorPrimary')}>SATOEN</span>
                            </span>
                            <span className={cx('split')}></span>
                            <span>
                                Tình trạng : <span className={cx('colorPrimary')}>còn hàng</span>
                            </span>
                        </div>
                        <div className={cx('price')}>
                            <h3>1,100,000</h3> <span className={cx('currency')}>đ</span>
                        </div>
                        <div className={cx('intro')}>
                            <p>
                                Hoàn hảo để uống hàng ngày, Trà xanh Matcha hương Nhài của Satoen có màu xanh ngọc bích
                                rực rỡ và vị ngọt nhẹ tự nhiên. Độ se nhẹ từ catechin của trà cân bằng hoàn hảo vị ngọt
                                từ các axit amin L-theanines
                            </p>
                        </div>
                        <div className={cx('ingredientProduction')}>
                            <b>Thành phần :</b> <span>Trà xanh Matcha Special, hương hoa Nhài.</span>
                        </div>
                        <div className={cx('packaging')}>
                            <b>Đóng gói :</b> <span>Túi zip 1kg</span>
                        </div>
                        <div className={cx('expiry')}>
                            <b>Hạn sử dụng :</b> <span>12 tháng kể từ ngày sản xuất</span>
                        </div>
                        <div className={cx('EanCode')}>
                            <b>EAN code :</b> <span>8938515476480</span>
                        </div>

                        <div className={cx('weight')}>
                            <h3>Trọng lượng</h3>
                            <Button rounded outline className={cx('customBtn')} text>
                                1kg
                            </Button>
                            <Button rounded outline className={cx('customBtn')} text>
                                Hơn 10kg
                            </Button>
                        </div>
                        <div className={cx('amount')}>
                            <h3>Số lượng</h3>
                            <Button className={cx('customBtn2')} count>
                                -
                            </Button>
                            <Button className={cx('customBtn2')} count>
                                1
                            </Button>
                            <Button className={cx('customBtn2')} count>
                                +
                            </Button>
                        </div>
                        <div className={cx('buyButton')}>
                            <Button rounded outline className={cx('customBtn')}>
                                {' '}
                                Mua ngay
                            </Button>
                            <Button rounded outline className={cx('customBtn')}>
                                {' '}
                                Thêm vào giỏ hàng
                            </Button>
                        </div>
                        <div>
                            <p>Gọi đặt mua: 0394337519 để nhanh chóng đặt hàng</p>
                        </div>
                    </Grid>
                </Grid>
                <div className={cx('breadcrumb_background2')}></div>
                <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
                    <Tabs value={value} onChange={handleChange} centered>
                        <Tab label="Mô tả sản phẩm" />
                        <Tab label="Chi tiết sản phẩm" />
                        <Tab label="Công bố an toàn thưc phẩm" />
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    Mô tả sản phẩm đang được cập nhật
                </TabPanel>
                <TabPanel value={value} index={1}>
                    chi tiết sản phẩm đang được cập nhật
                </TabPanel>
                <TabPanel value={value} index={2}>
                    công bố an toàn thưc phẩm đang được cập nhật
                </TabPanel>

                <div className={cx('title')}>
                    <h2></h2>
                </div>
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
};

export default ProductsPage;
