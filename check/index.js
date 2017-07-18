import {CFCMCheckbox} from './src/Plugins_es6_checkbox.babel.min.js'
export default {
 	install: function(Vue) {
	 Object.defineProperty(Vue.prototype, '$Check', { value: CFCMCheckbox });
  }
}