const hell = document.querySelector("#text");

setTimeout(function () {
  hell.innerText = "10";
   setTimeout(function () {
    hell.innerText = "9";
    setTimeout(function () {
      hell.innerText = "8";
      setTimeout(function () {
        hell.innerText = "7";
        setTimeout(function () {
          hell.innerText = "6";
          setTimeout(function () {
            hell.innerText = "5";
            setTimeout(function () {
              hell.innerText = "4";
              setTimeout(function () {
                hell.innerText = "3";
                setTimeout(function () {
                  hell.innerText = "2";
                  setTimeout(function () {
                    hell.innerText = "1";
                    setTimeout(function () {
                      text.innerText = "Happy Independence Day!!!";
                      setTimeout(function () {
                        startConfetti();
                    });
                      setTimeout(function () {
                        stopConfetti();
                    },2000);
                    }, 1000);
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
