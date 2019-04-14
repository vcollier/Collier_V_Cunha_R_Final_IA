(() => {

console.log('fired!');

    const topBanners = document.querySelector('#gallery'),
          icon       = document.querySelector('#next');



    function animateBanners() {

      const offSet = 600;

      let currentOffset = this.dataset.offset * offSet;

      TweenMax.to(topBanners, 0.7, { right: currentOffset });
    }





    icon.addEventListener('click', animateBanners);


})();
