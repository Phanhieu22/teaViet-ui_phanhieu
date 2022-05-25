import React, { useState } from 'react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import 'swiper/css/thumbs';
import Banner from '~/component/layouts/component/Banner';
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
                <Banner />
            </div>
            phanhieui
            {/* banner end */}
            {/* tin tức sự kiện start */}
            {/* <div className="news">
                <Container maxWidth="lg">
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <News newsData={data} name="Tin tức-sự kiện" />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <News newsData={data} name="Bài viết nổi bật" />
                        </Grid>
                    </Grid>
                </Container>
            </div> */}
            {/* tin tức sự kiện end */}
            {/* sản phẩm nổi bật  start*/}
            {/* sản phẩm nổi bật  end*/}
        </>
    );
}
