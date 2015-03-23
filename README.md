Toggle Control v1.0
-------------------

## Demo

http://ansarada.github.io/ui-toggle/

## Setup

```html
<link rel="stylesheet" href="style/toggle.css" />
<script src="script/toggle.js"></script>
```

## Dependencies

jQuery 1.11 (http://jquery.com/)

hammerjs 2.0.4 (http://hammerjs.github.io/)

## Usage

###  Initialize Control

```javascript
ToggleControl.init(element);
```

Note: `element` can be a DOM element or jQuery object:

```javascript
ToggleControl.init(document.getElementById('element'));
ToggleControl.init(($('.toggle'));
```

###  Destroy Control

```javascript
ToggleControl.destroy(element);
```

Note: `element` can be a DOM element or jQuery object:

```javascript
ToggleControl.destroy(document.getElementById('element'));
ToggleControl.destroy(($('.toggle'));
```
