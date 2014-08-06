(function ($, window) {
  $.fn.resizeTracker = function (content, options) {
    var settings = $.extend(true, {}, $.fn.resizeTracker.defaults, options),
      self = this;

    $(settings.bound).on(settings.events, function() {
      var contentWidth = $(content).width(),
        heightElement = trackViewportHeight ? settings.viewport : content,
        contentHeight = $(heightElement).height(),
        first = settings.widthByHeight ? contentWidth : contentHeight,
        second = settings.widthByHeight ? contentHeight : contentWidth;
      $(self).text(first + 'px x' + second + 'px');
    });
    return self;
  };

  $.fn.resizeTracker.defaults = {
    bound: window,
    trackViewportHeight: true,
    viewport: window,
    events: 'load resize',
    widthByHeight: true
  };
})(jQuery, window);
