window.onload = function () {
  $(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();
    const href = this.getAttribute("href");
    if (href == "#") {
      return;
    }
    const offsetTop = document.querySelector(href).offsetTop;
   
    scroll({
      top: offsetTop,
      behavior: "smooth"
    });
  });

  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-37SZFM0DP9');
};
