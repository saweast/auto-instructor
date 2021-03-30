// Add your scripts here
import '../../node_modules/slick-carousel/slick/slick.min';
import $ from 'jquery';

document.addEventListener('DOMContentLoaded', () => {
  const slickElement = document.querySelector('.review__slick');

  if (slickElement) {
    $(slickElement).slick({
      dots: false,
      infinite: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      variableWidth: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            variableWidth: false,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            variableWidth: false,
          },
        },
      ],
    });
  }
});
