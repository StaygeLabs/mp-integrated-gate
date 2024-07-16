import Slider from 'react-slick';
import * as Colors from 'components/cssToken/colors';
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
    dots: true,
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
  position: relative;
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

  .slick-dots {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    width: auto;
    padding: 0;
    margin: 0;
    list-style: none;
    text-align: center;
    z-index: 10;
    background-color: transparent;
  }

  .slick-dots li {
    display: inline-block;
    margin-right: 5px;
    width: 6px;
    height: 6px;
    background-color: ${Colors.Neutral50};
    border-radius: 50%;
    z-index: 10;
    cursor: pointer;
  }

  .slick-dots li.slick-active {
    background-color: ${Colors.White};
  }

  .slick-dots li button {
    display: none; /* 기본 슬릭 스타일을 제거합니다. */
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
