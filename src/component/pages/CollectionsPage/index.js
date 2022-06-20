import { Box, Container, Grid } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import classnames from 'classnames/bind';
import * as React from 'react';
import { useEffect, useState } from 'react';
import Breadcrumb_bg from '~/component/Breadcrumb_bg';
import CardProductItem from '~/component/CardProductItem';
import { useParams } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import * as actions from '~/redux/collections/actions';

import styles from './CollectionsPage.module.scss';
import { selectorCollections } from '~/redux/collections/selector';
import formatProductPortfolio from '~/utils/formatProductPortfolio';
const cx = classnames.bind(styles);

const CollectionsPage = (props) => {
    const dispatch = useDispatch();
    const data = useSelector(selectorCollections);

    const { productPortfolio } = useParams();
    useEffect(() => {
        dispatch(actions.getAllCollections.getAllCollectionsRequest(productPortfolio));
    }, [productPortfolio]);

    return (
        <div className={cx('wrapper')}>
            <Breadcrumb_bg
                title={formatProductPortfolio(productPortfolio)}
                level2="Tất cả các sản phẩm"
                toLv2="/collections/tat-ca-san-pham"
                level3={formatProductPortfolio(productPortfolio)}
            />
            <Container>
                <Grid container className={cx('filterWrapper')}>
                    <Grid item xs={12} md={3}>
                        {' '}
                        <h2 className="title">{formatProductPortfolio(productPortfolio)}</h2>
                    </Grid>
                    <Grid item xs={12} md={9}>
                        <div className={cx('filter')}>
                            <span className={cx('titleFilter')}>Sắp xếp theo :</span>
                            <RadioGroup
                                row
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue="female"
                                name="radio-buttons-group">
                                <FormControlLabel
                                    value="female"
                                    control={<Radio />}
                                    label={
                                        <Box component="div" fontSize={15}>
                                            A đến Z
                                        </Box>
                                    }
                                />
                                <FormControlLabel
                                    value="male"
                                    control={<Radio />}
                                    label={
                                        <Box component="div" fontSize={15}>
                                            Z đến A
                                        </Box>
                                    }
                                />
                            </RadioGroup>
                            <RadioGroup
                                row
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue="female"
                                name="radio-buttons-group">
                                <FormControlLabel
                                    value="female"
                                    control={<Radio />}
                                    label={
                                        <Box component="div" fontSize={15}>
                                            Giá tăng dần
                                        </Box>
                                    }
                                />
                                <FormControlLabel
                                    value="male"
                                    control={<Radio />}
                                    label={
                                        <Box component="div" fontSize={15}>
                                            Giá giảm dần
                                        </Box>
                                    }
                                />
                            </RadioGroup>
                        </div>
                    </Grid>
                </Grid>
            </Container>

            <Container>
                <Grid className={cx('items')} spacing={3} container>
                    {data.map((item, index) => (
                        <Grid key={index} item xs={6} sm={4} md={3} lg={3}>
                            <CardProductItem favorite key={index} item={item} />{' '}
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </div>
    );
};

export default CollectionsPage;
