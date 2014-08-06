(function ($, window) {
  $.fn.resizeTracker = function (content, options) {
    var settings = $.extend(true, {}, $.fn.resizeTracker.defaults, options),
      self = this;

    $(settings.bound).on(settings.events, function() {
      var contentWidth = $(content).width(),
        heightElement = settings.trackViewportHeight ? settings.viewport : content,
        contentHeight = $(heightElement).height();
      $(self).html(settings.format(contentWidth, contentHeight));
    });
    return self;
  };

  $.fn.resizeTracker.defaults = {
    bound: window,
    trackViewportHeight: true,
    viewport: window,
    events: 'load resize',
    format: function(width, height) {
      return width + 'px x ' + height + 'px';
    }
  };
})(jQuery, window);
