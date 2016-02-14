document.onload = function() {

};

window.onload = function(e) {
  var activeNav = document.getElementsByClassName('nav-item active')[0].id;
  var hrPosition;
  if (activeNav === 'nav1') {
    hrPosition = '23px';
  } else if (activeNav === 'nav2') {
    hrPosition = '143px';
  } else if (activeNav === 'nav3') {
    hrPosition = '263px';
  }

  var hr = document.getElementsByTagName('hr')[0];
  document.getElementById('nav1').onmouseenter = function() {
    hr.style.marginLeft = '23px';
  }
  document.getElementById('nav2').onmouseenter = function() {
    hr.style.marginLeft = '143px';
  }
  document.getElementById('nav3').onmouseenter = function() {
    hr.style.marginLeft = '263px';
  }

  document.getElementById('nav1').onmouseleave = function() {
    hr.style.marginLeft = hrPosition;
  }
  document.getElementById('nav2').onmouseleave = function() {
    hr.style.marginLeft = hrPosition;
  }
  document.getElementById('nav3').onmouseleave = function() {
    hr.style.marginLeft = hrPosition;
  }

  if (document.getElementsByClassName('home-header')[0]) {
    document.getElementsByClassName('home-header')[0].style.height = window.innerHeight + 'px';
    var doc = document.documentElement;
    var left = (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
    var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    if (top >= parseInt(document.getElementsByClassName('home-header')[0].style.height.replace('px', '')) - 61) {
      document.getElementsByClassName('home-nav-bar')[0].style.bottom = 'auto';
      document.getElementsByClassName('home-nav-bar')[0].style.position = 'fixed';
      document.getElementsByClassName('home-nav-bar')[0].style.top = 0;
    } else if (top < parseInt(document.getElementsByClassName('home-header')[0].style.height.replace('px', '')) - 61) {
      document.getElementsByClassName('home-nav-bar')[0].style.top = 'auto';
      document.getElementsByClassName('home-nav-bar')[0].style.bottom = 0;
      document.getElementsByClassName('home-nav-bar')[0].style.position = 'absolute';
    }
    window.onresize = function(e) {
      document.getElementsByClassName('home-header')[0].style.height = window.innerHeight + 'px';
    };
    window.onscroll = function() {
      var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
      if (top >= parseInt(document.getElementsByClassName('home-header')[0].style.height.replace('px', '')) - 61) {
        document.getElementsByClassName('home-nav-bar')[0].style.bottom = 'auto';
        document.getElementsByClassName('home-nav-bar')[0].style.position = 'fixed';
        document.getElementsByClassName('home-nav-bar')[0].style.top = 0;
      } else if (top < parseInt(document.getElementsByClassName('home-header')[0].style.height.replace('px', '')) - 61) {
        document.getElementsByClassName('home-nav-bar')[0].style.top = 'auto';
        document.getElementsByClassName('home-nav-bar')[0].style.bottom = 0;
        document.getElementsByClassName('home-nav-bar')[0].style.position = 'absolute';
      }
    };
  }
};
