# About Me

## Purpose
The purpose of the personal website is to introduce myself and demostrate some of the front-end design learned in the past three weeks.

## Method
  The website is built with HTML, CSS, BootStrap, JavaScript and JQuery. 

## Process

### Layout
  For simplicity, a landing page with about section, photo album and contact form are included.
  
### Implementation and Discovery
* Transparent to solid navbar

...To chaange navbar color as the page scrolls past header, jQuery .scrollTop() is used to compare the header height to add and remove class.

* Smooth scroll

...jQuery [.scrollIntoView()](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView) is added for smooth scrolling when clicked on links.

* Hover effect

...The hover effects are acheived by [animate.css](https://daneden.github.io/animate.css/).
To enable repeated animation, `animation-iteration-count: infinite;` is added.

* Box shadow

...Since the hero image was circular, css property [`box-shadow`](http://thenewcode.com/598/boxshadow-property-vs-dropshadow-filter-a-complete-comparison) would not be appropriate as it produces rectangular shadow. Instead, [`filter: drop-shadow();`](https://developer.mozilla.org/en-US/docs/Web/CSS/filter#drop-shadow()) could reflect the actual outline.

