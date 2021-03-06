Toggle Control
--------------

jQuery-based toggle control, aka. toggle button. Uses radio buttons to provide two named states, usually on/off or yes/no but can be any mutually-exclusive states.

## Support

Will not work on non-es6 browsers without consuming via babel.

## Features

- Keyboard accessible (tab to the control, then use cursor keys to change the toggle)
- Works with swipe gestures (with hammerjs) to better support mobile

## Demo

http://ansarada.github.io/ui-toggle/

## Setup

Add the style and script:
```html
<link rel="stylesheet" href="style/toggle.css" />
<script src="script/toggle.js"></script>
```

Each toggle uses a radio button pair:
```html
<div id="ts1" class="toggle-control">
    <input id="ts1off" type="radio" value="Off" name="ts1" checked="true">
    <label for="ts1off"><span class="toggle-icon toggle-icon-off" aria-hidden="true"></span><span>Off</span></label>
    <input id="ts1on" type="radio" value="On" name="ts1">
    <label for="ts1on"><span class="toggle-icon toggle-icon-on" aria-hidden="true"></span><span>On</span></label>
</div>
```
Set the initial state using `checked="true"` on the relevant input. Remember to match your ID and FOR attributes.

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
