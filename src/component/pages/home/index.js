import React, { useState } from 'react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import 'swiper/css/thumbs';
import Collections from '~/component/Collections';
import Banner from '~/component/layouts/component/Banner';
import styles from './home.module.scss';
import classnames from 'classnames/bind';
import About from '~/component/About';
const cx = classnames.bind(styles);

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
    const collectionsItem = [
        {
            id: '1',
            title: 'MATCHA',
            image: 'https://theme.hstatic.net/200000354189/1000743772/14/col_1.png?v=191',
            backgroundColor: '#91ad41',
            color: 'black',
            description:
                'Matcha là một loại bột trà xanh Nhật Bản cao cấp được làm từ những lá trà tốt nhất được trồng trong bóng râm. Matcha rất giàu chất chống oxy hóa, axit amin và các chất dinh dưỡng khác.',
            to: '/item',
        },
        {
            id: '2',
            title: 'SENCHA',
            image: 'https://theme.hstatic.net/200000354189/1000743772/14/col_2.png?v=191',
            backgroundColor: '#376118',
            color: 'white',
            description:
                'Tại Nhật Bản loại trà xanh được sản xuất nhiều nhất lại là Sencha. Có đến 80% sản lượng trà xanh sản xuất tại Nhật Bản là Sencha. Như vậy đủ thấy Sencha có phổ biến như thế nào tại đất nước mặt trời mọc',
            to: '/item',
        },
        {
            id: '3',
            title: 'GEMAICHA',
            image: 'https://theme.hstatic.net/200000354189/1000743772/14/col_3.png?v=191',
            backgroundColor: '#e3b375',
            color: 'white',
            description:
                'Một sự kết hợp hoàn hảo từ trà xanh Sencha và gạo lứt rang, Trà xanh Sencha Genmaicha của Satoen sẽ tỏa ra hương thơm từ gạo lứt rang từ mũi đến miệng bạn sau mỗi ngụm kết hợp với vị tươi mới của trà xanh Sencha đã tạo nên một loại trà uống hàng ngày rất tuyệt vời.',
            to: '/item',
        },
        {
            id: '4',
            title: 'HOUJICHA',
            image: 'https://theme.hstatic.net/200000354189/1000743772/14/col_4.png?v=191',
            backgroundColor: '#8b572a',
            color: 'white',
            description:
                'Với hương vị vô cùng độc đáo và mạnh mẽ, Houjicha được làm bằng cách rang trà xanh Sencha ở nhiệt độ cao. Mặc dù Houjicha thuộc họ trà xanh, nhưng quá trình rang sẽ biến lá của nó thành màu nâu đậm. Houjicha có một hương vị rất riêng biệt, với mùi Caramen nhẹ nhàng',
            to: '/item',
        },
        {
            id: '5',
            title: 'KOMACHI',
            image: 'https://theme.hstatic.net/200000354189/1000743772/14/col_5.png?v=191',
            backgroundColor: '#91ad41',
            color: 'white',
            description:
                'Trà Komachi do Satoen Việt Nam nghiên cứu và phát triển là một sản phẩm rất tuyệt vời. Nó kết hợp giữa trà xanh Sencha và trà xanh Matcha thượng hạng để tạo nên một màu nước trà xanh đẹp cùng với hương vị đậm đà đặc biệt rất dễ uống, trà Komachi cân bằng hài hòa giữa vị chát của Sencha và vị thanh khiết của Matcha.',
            to: '/item',
        },
    ];
    return (
        <>
            <div>
                <Banner />
            </div>{' '}
            {/* banner end */}
            <div className={cx('collections')}>
                <Collections items={collectionsItem} />
            </div>
            <div className={cx('about')}>
                <About/>
            </div>
        </>
    );
}
