document.addEventListener("DOMContentLoaded", function(event) {
    var cursor = document.querySelector(".custom-cursor");
    var links = document.querySelectorAll("a");
    var textactions = document.querySelectorAll("span.nav-item, span.footer-item, .main-sub-text>a>p, div.menu-wrapper");
    var initCursor = false;
  
    for (var i = 0; i < links.length; i++) {
      var selfLink = links[i];
  
      selfLink.addEventListener("mouseover", function() {
        cursor.classList.add("custom-cursor--box");
      });
      selfLink.addEventListener("mouseout", function() {
        cursor.classList.remove("custom-cursor--box");
      });
    }
    for (var i = 0; i < textactions.length; i++) {
      var selfText = textactions[i];
    
      selfText.addEventListener("mouseover", function() {
        cursor.classList.add("custom-cursor--box");
      });
      selfText.addEventListener("mouseout", function() {
        cursor.classList.remove("custom-cursor--box");
      });
    }
  
    window.onmousemove = function(e) {
      var mouseX = e.clientX;
      var mouseY = e.clientY;
  
      if (!initCursor) {
        // cursor.style.opacity = 1;
        TweenLite.to(cursor, 0.3, {
          opacity: 1
        });
        initCursor = true;
      }
  
      TweenLite.to(cursor, 0, {
        top: mouseY + "px",
        left: mouseX + "px"
      });
    };
  
    window.onmouseout = function(e) {
      TweenLite.to(cursor, 0.3, {
        opacity: 0
      });
      initCursor = false;
    };
  });
  