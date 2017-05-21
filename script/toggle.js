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
  const objectTypes = {
      'function': true,
      'object': true
  };

  /** Detect free variable `window`. */
  const freeWindow = objectTypes[typeof window] && window;

  /**
   * Used as a reference to the global object.
   *
   * The `this` value is used if it is the global object to avoid Greasemonkey's
   * restricted `window` object, otherwise the `window` object is used.
   */

  var root = ((freeWindow !== (this && this.window)) && freeWindow) || this;

  root.ToggleControl = function (element, hammerInst) {
    const radioOff = element.find('input[type="radio"]:first'),
        radioOn = element.find('input[type="radio"]:last');

    /**
     * Bind swipe and drag events to child label elements
     * @return {Object} Hammer Object returned
     */

    const _initHammer = () => {
      if(Hammer !== undefined && Hammer !== null) {
        return _setHammerEvents(new Hammer(element[0]));
      }

      return;
    }


    /**
     * Bind swipe and drag events to child label elements
     * @param {object} event - event object
     * @param {function} swipeEventFunct - swipe function
     * @return {object} hammer object
     */

    const _setHammerEvents = (hammer, swipeEventFunc) => {
       hammer.get('swipe').set({'velocity': 0.3});
       hammer.on('swipeleft swiperight', event);
       return hammer;
    }

    /**
     * Change the border color on toggle has focus or losts focus
     * @return {void}
     */
    const _bindEvents = () => {
        radioOff.on('focus', _focusControl);
        radioOff.on('blur', _blurControl);
        radioOn.on('focus', _focusControl);
        radioOn.on('blur', _blurControl);
        radioOff.on('keyup', _keyUpControl);
        radioOn.on('keyup', _keyUpControl);
        element.on('click', _clickControl);
    }

    /**
     * Remove change the border color on toggle has focus or losts focus events
     * @return {void}
     */
    const _destroyEvents = () => {
        radioOff.off('focus', _focusControl);
        radioOff.off('blur', _blurControl);
        radioOn.off('focus', _focusControl);
        radioOn.off('blur', _blurControl);
        radioOff.off('keyup', _keyUpControl);
        radioOn.off('keyup', _keyUpControl);
        element.off('click', _clickControl);
    }

    /**
     * Toggle Control has focus
     * @return {void}
     */
    const _focusControl = () => {
      element.addClass('has-focus');
    }

    /**
     * Toggle Control has lost focus
     * @return {void}
     */
    const _blurControl = () => {
      element.removeClass('has-focus');
    }

    /**
     *  If Mouse button has been pressed then toggle the controls
     * @param {object} event - event object
     * @return {void}
     */
    const _clickControl = (event) => {
      event.preventDefault();
      toggleControl(event);
    }


    /**
     * If the space bar is press do toggle the controls
     * @param {object} event - event object
     * @return {void}
     */
    const _keyUpControl = (event) => {
      if(event.keyCode === 32) {
        toggleControl(event);
      }
    }

    /**
     * Toggle selected options
     * @param {object} event - event object
     * @return {void}
     */

    const toggleControl = (event) => {
      event.preventDefault();

      if(radioOn.is(':checked')){
        _moveToggle(radioOn, radioOff, element);
      } else {
        _moveToggle(radioOff, radioOn, element);
      }
    }

    /**
     * Unbind swipe and drag events
     * @return {void}
     */

    const _destroyHammer = () => {
      if(Hammer !== undefined && Hammer !== null && hammerInst !== undefined && hammerInst !== null) {
          hammerInst.off('swipeleft swiperight');
      }
    }

    /**
     * Move toggle state from one radio element to new radio element
     * @param {object} fromToggleElement - toggle element that has the value
     * @param {object} toToggleElement - toggle element that is getting the value
     * @param {object} elementDom - toggle element wrapper
     * @return {void}
     */
    const _moveToggle = (fromToggleElement, toToggleElement, toggleWrapperElement) => {
      if(toggleWrapperElement !== undefined && toggleWrapperElement !== null &&  toggleWrapperElement.attr('aria-disabled') !== 'true'){
        fromToggleElement.prop('checked', false);
        toToggleElement.prop('checked', true);
        toToggleElement.trigger('change');
      }
    }

    /**
     * Swipe and drag hammer events
     * @param {object} event - event object
     * @return {void}
     */
    const _hammerEvents = (event) => {
      switch(event.type){
        case 'swipeleft':
        case 'dragleft':
          _moveToggle(radioOn, radioOff, element);
        break;

        case 'swiperight':
        case 'dragright':
          _moveToggle(radioOff, radioOn, element);
        break;

        default:
        break;
      }
    }

    /**
     * destroy toggle object and event binding
     * @return {void}
     */
    const destroy = () => {
      _destroyHammer();
      _destroyEvents();
    }

      _bindEvents();
      _initHammer();

      this.destroy = destroy;
    };

    $.fn.toggleControl = function() {
      this.each(function(){
          const $this = 
                $(this)
              , instance = $this.data('toggleControl');

          if(!instance){
              $this.data(
                 'toggleControl'
                , new root.ToggleControl($this)
                , new Hammer(this)
              );
          }
      });

      return this;
    };

    /**
    * Toggle object initiate
    * @param {string} elementSelector - Element selector string
    * @return {void}
    */
    root.ToggleControl.init = (elementSelector) => {
        return $(elementSelector).toggleControl();
    };

    /**
    * Toggle object destroy
    * @param {string} elementSelector - Element selector string
    * @return {void}
    */

    root.ToggleControl.destroy = (elementSelector) => {
      $(elementSelector).each(function(){
          var $this = $(this);
          var instance = $this.data('toggleControl');
          if(instance){
              instance.destroy();
          }
      });
    };

})(window.Hammer, window.jQuery);
