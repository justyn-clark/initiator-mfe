(function() {

  const sb = document.querySelector('.sidebar');

  var sidebar = MFE.components.sidebar = {
    openSidebar() {
      sb.classList.add('sidebar--open');
    },
    closeSidebar() {
      sb.classList.remove('sidebar--open');
    },
    delay(callback, time) {
      setTimeout(callback, time)
    },
    interval(callback, time) {
      setInterval(callback, time)
    },
    slideToggle() {
      sb.classList.toggle('sidebar--open');
    },
    init() {
      //sidebar.interval(sidebar.slideToggle, 2000);
      //sidebar.delay(sidebar.openSidebar, 50);
      sidebar.openSidebar();
    }
  }


  EVT.on('init', sidebar.init);

}());
