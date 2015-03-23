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


## License

The MIT License (MIT)

Copyright (c) 2015 ansarada

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
