(function() {
  function initMaps() {
    var maps = document.querySelectorAll('.map');

    for (var i = 0, len = maps.length; i < len; i++) {
      var el = maps[i],
          pos = {
            lat: parseFloat(el.dataset.lat),
            lng: parseFloat(el.dataset.lng)
          };

      el.map = new google.maps.Map(el, {
        zoom: 16,
        scrollwheel: false,
        disableDefaultUI: true,
        center: pos,
        // styles: [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","stylers":[{"visibility":"off"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}]
      });

      el.marker = new google.maps.Marker({
        map: el.map,
        draggable: false,
        animation: google.maps.Animation.DROP,
        position: pos
      });
    }
  }

  function initMenu() {
    document.querySelector('#toggleNav').addEventListener('click', function(e) {
      document.querySelector('#nav').classList.toggle('nav__visible');

      var icon = this.querySelector('.icon');
      icon.classList.toggle('icon-close');
      icon.classList.toggle('icon-burger');
    });
  }

  function initCrossFade() {
    var items = document.querySelectorAll('.thumbnail--crossfading');

    for (i = 0, len = items.length; i < len; i++) {
      items[i].addEventListener('click', function(e) {
        var image = this.querySelectorAll('.thumbnail__item')[1];
        image.classList.toggle('thumbnail__item--transparent');
      });
    }
  }

  function init() {
    initMenu();
    initCrossFade();
    google.maps.event.addDomListener(window, 'load', initMaps);
  }

  init();
})();
