Toggle Control
--------------

jQuery-based toggle control, aka. toggle button. Uses radio buttons to provide two named states, usually on/off or yes/no but can be any mutually-exclusive states.

## Features

- Supports text or icon-only toggles
- Keyboard accessible (tab to the control, then use cursor keys to change the toggle)
- Works with swipe gestures (with hammerjs) to better support mobile

## Demo

http://ansarada.github.io/ui-toggle/

## Setup

```html
<link rel="stylesheet" href="style/toggle.css" />
<script src="script/toggle.js"></script>
```

## Dependencies

- jQuery 1.11 (http://jquery.com/)
- hammerjs 2.0.4 (http://hammerjs.github.io/)

## Usage

###  Initialize Control

```javascript
ToggleControl.init(element);
```

Note: `element` can be a DOM element or jQuery object:

```javascript
ToggleControl.init(document.getElementById('element'));
ToggleControl.init($('.toggle'));
```

###  Destroy Control

```javascript
ToggleControl.destroy(element);
```

Note: `element` can be a DOM element or jQuery object:

```javascript
ToggleControl.destroy(document.getElementById('element'));
ToggleControl.destroy($('.toggle'));
```

## License

The MIT License (MIT) Copyright (c) 2015 [ansarada](http://ansarada.com/). See LICENSE for full details.
