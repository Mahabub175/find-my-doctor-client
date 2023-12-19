const CustomSliderBullet = (
  activeBulletColor = "#e74e84",
  bulletSize = "10px",
  inActiveBulletColor = "#999999",
  bulletGap = "5px",
  marginTop = "10px"
) => {
  return {
    "--swiper-pagination-color": `${activeBulletColor}`,
    "--swiper-pagination-bullet-inactive-color": `${inActiveBulletColor}`,
    "--swiper-pagination-bullet-inactive-opacity": "1",
    "--swiper-pagination-bullet-size": `${bulletSize}`,
    "--swiper-pagination-bullet-horizontal-gap": `${bulletGap}`,
    "--swiper-pagination-bullet-margin-top": `${marginTop}`,
  };
};

export default CustomSliderBullet;
