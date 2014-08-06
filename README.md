#jQuery Resize Tracker

Simple plugin to track the size of content on window resize and display size inside of an element.

##Usage
```javascript
$(size-display).resizeTracker(trackedElement[, options])
```
where `size-display` is an element that will display the size of the `trackedElement`

###Parameters
- `trackedElement`- element with size being tracked
- `options` - object literal with the following:
    - `bound`- the element on which the resize event will be bound to (default: window)
    - `trackViewportHeight`- if true, will track the height of the `viewport` rather than the element (default: true)
    - `viewport`- if `trackViewportHeight` is true, element with height tracked (default: window)
    - `events` - string of space-separated events which will be bound to `window` (default: 'load resize')
    - `widthByHeight`- if true, displays size as (W x H); reverse if false (default: true)

###Stylesheet
An optional stylesheet is included (`src/jquery.resizetracker.css`) that fixes a size display container in the top-right corner. See below (or `tests/basic.html`) for usage. 
```html
<div class="size-container">
  Size: <span class="size-display"></span>
</div>
```
