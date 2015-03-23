/**
 * @license
 * Toggle Control 1.0.0
 * Copyright 2015  ansarada <http://www.ansarada.com/>
 * Available under MIT license
 */

// Dependency: jQuery 1.10.2 http://jquery.com/
// Dependency for touch input: hammerjs 2.0.4 http://hammerjs.github.io/


(function (Hammer, $) {
    'use strict';

    /** Used to determine if values are of the language type `Object`. */
    var objectTypes = {
        'function': true,
        'object': true
    };

    /** Detect free variable `window`. */
    var freeWindow = objectTypes[typeof window] && window;

    /**
     * Used as a reference to the global object.
     *
     * The `this` value is used if it is the global object to avoid Greasemonkey's
     * restricted `window` object, otherwise the `window` object is used.
     */

    var root = ((freeWindow !== (this && this.window)) && freeWindow) || this;

   root.ToggleControl =	function (element) {
        // All the child elements
        var radioOff = element.find('input[type="radio"]:first'),
            radioOn = element.find('input[type="radio"]:last'),
            inputMouse = false,
            hammerInst; // Hammer Object

        function _initHammer() {
            // Bind swipe and drag events to child label elements
            if(Hammer) {
                hammerInst = new Hammer(element[0]);
                hammerInst.get('swipe').set({'velocity': 0.3});
                hammerInst.on('swipeleft swiperight', _hammerEvents);
            }
        }

        function _bindEvents() {
            // Change the border color on toggle has focus or losts focus
            radioOff.on('focus',_focusControl);
            radioOff.on('blur',_blurControl);
            radioOn.on('focus',_focusControl);
            radioOn.on('blur',_blurControl);
            radioOff.on('keyup',_keyUpControl);
            radioOn.on('keyup',_keyUpControl);
            element.on('mousedown', _mouseDownControl);
            element.on('click', _clickControl);
        }


        function _destroyEvents() {
            //  Remove change the border color on toggle has focus or losts focus events
            radioOff.off('focus',_focusControl);
            radioOff.off('blur',_blurControl);
            radioOn.off('focus',_focusControl);
            radioOn.off('blur',_blurControl);
            radioOff.off('keyup',_keyUpControl);
            radioOn.off('keyup',_keyUpControl);
            element.off('mousedown', _mouseDownControl);
            element.off('click', _clickControl);
        }

        function _focusControl() {
            // Toggle Control has focus
            element.addClass('has-focus');
        }

        function _blurControl() {
            // Toggle Control has lost focus
            element.removeClass('has-focus');
        }

        function _mouseDownControl(){
            // Tell us there has been mouse button pressed
            inputMouse = true;
        }

        function _clickControl(event) {
            // If Mouse button has been pressed then toggle the controls
            if(inputMouse) {
                toggleControl(event);
                inputMouse = false;
            }
        }

        function _keyUpControl(event){
            // If the space bar is press do toggle the controls
            if(event.keyCode == 32) {
                toggleControl(event);
            }
        }

        function toggleControl(event){
            //Toggle selected options
            event.preventDefault();
            if(radioOn.is(":checked")){
                _moveToggle(radioOn, radioOff);
            } else {
                _moveToggle(radioOff, radioOn);
            }
        }

        function _destroyHammer() {
            // Unbind swipe and drag events
            if(Hammer) {
                hammerInst.off('swipeleft swiperight');
            }
        }

        function _moveToggle(fromToggleElement, toToggleElement){
            if(element.attr('aria-disabled') != 'true'){
                fromToggleElement.prop('checked', false);
                toToggleElement.prop('checked', true);
            }
        }

        function _hammerEvents(event) {
            // Swipe and drag hammer events
            switch(event.type){
                case 'swipeleft':
                case 'dragleft':
                    _moveToggle(radioOn, radioOff);
                    break;

                case 'swiperight':
                case 'dragright':
                    _moveToggle(radioOff, radioOn);
                    break;

                default:
                    break;
            }
        }

        function destroy() {
            _destroyHammer();
            _destroyEvents();
        }

        _bindEvents();
        _initHammer();

        this.destroy = destroy;
    };

    $.fn.toggleControl = function() {
        this.each(function(){
            var $this = $(this),
                instance = $this.data('toggleControl');
            if(!instance){
                $this.data('toggleControl', new root.ToggleControl($this));
            }
        });
        return this;
    };

    root.ToggleControl.init = function(elementSelector){
        return $(elementSelector).toggleControl();
    };

    root.ToggleControl.destroy = function(elementSelector){
        $(elementSelector).each(function(){
            var $this = $(this);
            var instance = $this.data('toggleControl');
            if(instance){
                instance.destroy();
            }
        });
    };

})(window.Hammer, window.jQuery);