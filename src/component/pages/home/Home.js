import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import React, { useState } from 'react';
// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import 'swiper/css/thumbs';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import banner2 from '../../../assets/banner2.jpg';
import banner3 from '../../../assets/banner3.jpg';
import News from '../../layouts/news/News';
import './home.scss';

export default function Home() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const data = [
        {
            id: 'post1',
            img: 'http://baodansinh.mediacdn.vn/thumb_w/650/2019/12/3/tra-xanh-15753608547231503821242.jpg',
            title: 'Vinamilk trao thưởng 500 triệu tiền mặt và 2 năm sử dụng sản phẩm để chúc mừng thành tích đội tuyển bóng đá nữ quốc gia',
        },
        {
            id: 'post2',
            img: 'http://baodansinh.mediacdn.vn/thumb_w/650/2019/12/3/tra-xanh-15753608547231503821242.jpg',
            title: 'đông hành cùn người nông dân trong vào vệ và phát triển canh tác chè',
        },
        {
            id: 'post3',
            img: 'http://baodansinh.mediacdn.vn/thumb_w/650/2019/12/3/tra-xanh-15753608547231503821242.jpg',
            title: 'tìm kiếm thị trường hướng đến giá trị bền vững ',
        },
    ];
    return (
        <>
            <div style={{ height: '80%', width: '100%' }}>
                <Swiper
                    style={{
                        '--swiper-navigation-color': '#fff',
                        '--swiper-pagination-color': '#fff',
                    }}
                    loop={true}
                    spaceBetween={5}
                    navigation={true}
                    thumbs={{ swiper: thumbsSwiper }}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper2">
                    <SwiperSlide className="my-swiper-slide">
                        <img src={banner2} />
                        <div className="text-content">
                            <h2 className="title">
                                Nâng ly chè khởi nguồn tết đoàn viên <span>season</span>
                            </h2>
                            <p className="content">
                                Từ núi cao xuống đồng bằng, từ thành thị đến thôn quê, dù ở đâu, trong hoàn cảnh nào,
                                người Việt đều yêu thích và có cách uống trà, thưởng trà phù hợp với điều kiện của mình.
                                Uống trà từ lâu đã là một phong tục, một nét văn hóa được phổ biến rộng rãi trong đời
                                sống người Việt. Đặc biệt, trong dịp Tết Nguyên đán cổ truyền của dân tộc, chén trà càng
                                được chú trọng, nâng niu. Theo sử sách ghi chép, trà khởi nguồn ở các chùa, nơi gắn kết
                                trà với đạo Phật. Cũng bởi vì lý do đó, hình thức thưởng trà được gọi là Thiền trà.
                            </p>
                            <button className="read-btn">
                                Read More <ArrowForwardIcon className="read-btn-icon" />
                            </button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="my-swiper-slide">
                        <img src={banner3} />
                        <div className="text-content">
                            <h2 className="title">
                                Bạn có đang uống trà đúng cách <span>season</span>
                            </h2>
                            <p>
                                Từ núi cao xuống đồng bằng, từ thành thị đến thôn quê, dù ở đâu, trong hoàn cảnh nào,
                                người Việt đều yêu thích và có cách uống trà, thưởng trà phù hợp với điều kiện của mình.
                                Uống trà từ lâu đã là một phong tục, một nét văn hóa được phổ biến rộng rãi trong đời
                                sống người Việt. Đặc biệt, trong dịp Tết Nguyên đán cổ truyền của dân tộc, chén trà càng
                                được chú trọng, nâng niu. Theo sử sách ghi chép, trà khởi nguồn ở các chùa, nơi gắn kết
                                trà với đạo Phật. Cũng bởi vì lý do đó, hình thức thưởng trà được gọi là Thiền trà.
                            </p>
                            <button className="read-btn">
                                Read More <ArrowForwardIcon className="read-btn-icon" />
                            </button>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            {/* banner end */}

            {/* tin tức sự kiện start */}

            <div className="news">
                <Container maxWidth="lg">
                    <Grid container spacing={2}>
                        <Grid item xs="12" md={6}>
                            <News newsData={data} name="Tin tức-sự kiện" />
                        </Grid>
                        <Grid item xs="12" md={6}>
                            <News newsData={data} name="Bài viết nổi bật" />
                        </Grid>
                    </Grid>
                </Container>
            </div>

            {/* tin tức sự kiện end */}

            {/* sản phẩm nổi bật  start*/}

            {/* sản phẩm nổi bật  end*/}
        </>
    );
}
