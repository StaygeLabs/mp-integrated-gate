import Slider from 'react-slick';

import styled from '@emotion/styled';

interface MainBannerCarouselSectionProps {}

const MainBannerCarouselSection: React.FC<
  MainBannerCarouselSectionProps
> = () => {
  const settings = {
    slidesToShow: 1, // 동시에 보여지는 슬라이드 수 조정
    autoplaySpeed: 8000,
    initialSlide: 0,
    speed: 500,
    autoplay: true,
    arrows: false,
  };
  return (
    <Layout className='slider-container'>
      <Slider {...settings}>
        <Div>
          <img
            src='/static/images/main1.png'
            alt=''
            style={{ minHeight: '315px' }}
          />
        </Div>
        <Div>
          <img
            src='/static/images/main1.png'
            alt=''
            style={{ minHeight: '315px' }}
          />
        </Div>
        <Div>
          <img
            src='/static/images/main1.png'
            alt=''
            style={{ minHeight: '315px' }}
          />
        </Div>
        <Div>
          <img
            src='/static/images/main1.png'
            alt=''
            style={{ minHeight: '315px' }}
          />
        </Div>
        <Div>
          <img
            src='/static/images/main1.png'
            alt=''
            style={{ minHeight: '315px' }}
          />
        </Div>
        <Div>
          <img
            src='/static/images/main1.png'
            alt=''
            style={{ minHeight: '315px' }}
          />
        </Div>
      </Slider>
    </Layout>
  );
};

export default MainBannerCarouselSection;

const Layout = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  cursor: pointer;

  .slick-slider .slick-track {
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translate3d(-494px, 0px, 0px);
  }

  .slick-slide {
    width: 100%;
    height: 100%;
    overflow: hidden;
    box-sizing: border-box;
  }

  div {
    @media (max-width: 768px) {
      max-height: 315px;
      overflow: hidden;
    }
  }

  @media (max-width: 768px) {
    max-height: 315px;
  }
`;

const Div = styled.div`
  width: 100%;
`;
