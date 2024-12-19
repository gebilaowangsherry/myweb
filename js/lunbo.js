let imgArr = [
  {
    url: "#",
    imgPath: "../index图片/(ui)创作.png",
  },
  {
    url: "#",
    imgPath: "../index图片/(ui)登录.png",
  },
  {
    url: "#",
    imgPath: "../index图片/(ui)旅游.png",
  },
  {
    url: "#",
    imgPath: "../index图片/(ui)启动.png",
  },
  {
    url: "#",
    imgPath: "../index图片/(ui)商城.png",
  },
  {
    url: "#",
    imgPath: "../index图片/(ui)启动页2.png",
  },
  {
    url: "#",
    imgPath: "../index图片/(ui)启动页3.png",
  },
  {
    url: "#",
    imgPath: "../index图片/(ui)启动页4.png",
  },
];
new Swiper({
  imgArr: imgArr,
  imgWidth: 320,
  aniTime: 1000,
  intervalTime: 1500,
  scale: 0.8,
  autoplay: false,
  gap: 0,
  clsSuffix: "-card",
}).init();

new Swiper({
  imgArr: imgArr,
  imgWidth: 320,
  aniTime: 1000,
  intervalTime: 1500,
  scale: 0.8,
  autoplay: false,
  gap: -200,
  clsSuffix: "-stack",
}).init();
