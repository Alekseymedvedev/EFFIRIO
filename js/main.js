$(function () {
    $('.reviews__inner').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]       
      });
      
      $('.history-slider__inner').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        responsive: [
          {
            breakpoint: 975,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 700,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }

        ]
      });

      $('.slider__inner').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });

    $('.header__btn').on('click', function(){
        $(this).toggleClass('header__btn-active');
       });

       $('.header__btn').on('click', function(){
        $('.header__menu').toggleClass('header__menu-active');
        });

        $('.header__btn').on('click', function(){
            $('.header__btn-off').toggleClass('header__btn-off--active');
        });




        $('.audio__img').on('click', function(){
          $('.audio1').toggleClass('audio1-active');
      });


        var acc = document.getElementsByClassName("accordion__btn");
        var i;
        
        for (i = 0; i < acc.length; i++) {
          acc[i].addEventListener("click", function() {
            /* Переключение между добавлением и удалением класса "active",
            чтобы выделить кнопку, управляющую панелью */
            this.classList.toggle("active");
        
            /* Переключение между скрытием и отображением активной панели */
            var panel = this.nextElementSibling;
            if (panel.style.display === "block") {
              panel.style.display = "none";
            } else {
              panel.style.display = "block";
            }
          });
        }

     
});


f12youtube = {
  findVideos: function () {
      let videos = document.querySelectorAll('.video');

      for (let i = 0; i < videos.length; i++) {
          this.setupVideo(videos[i]);
      }
  },

  setupVideo: function (video) {
      let link = video.querySelector('.video__link');
      let media = video.querySelector('.video__media');
      let button = video.querySelector('.video__button');
      let id = this.parseMediaURL(media);

      video.addEventListener('click', () => {
          let iframe = this.createIframe(id);

          link.remove();
          button.remove();
          video.appendChild(iframe);
      });

      link.removeAttribute('href');
      video.classList.add('video--enabled');
  },

  parseMediaURL: function (media) {
      let regexp = /https:\/\/i\.ytimg\.com\/vi\/([a-zA-Z0-9_-]+)\/maxresdefault\.jpg/i;
      let url = media.src;
      let match = url.match(regexp);

      return match[1];
  },

  createIframe: function (id) {
      let iframe = document.createElement('iframe');

      iframe.setAttribute('allowfullscreen', '');
      iframe.setAttribute('allow', 'autoplay');
      iframe.setAttribute('src', this.generateURL(id));
      iframe.classList.add('video__media');

      return iframe;
  },

  generateURL: function (id) {
      let query = '?rel=0&showinfo=0&autoplay=1';

      return 'https://www.youtube.com/embed/' + id + query;
  }
};


f12youtube.findVideos();








