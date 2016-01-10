/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	/*if (process.env.NODE_ENV === 'development') {
	    require('../../app/index.html')
	}
	
	var jQuery = require("bundle!jquery");
	require('../styles/preloader.scss');
	console.log(jQuery);
	jQuery("#progress").txt("Hello World!");*/
	
	/*
	var queue        = new preloadjs.LoadQueue(),
	    $state       = $('#state'),
	    $progress    = $('#progress'),
	    $progressbar = $('#progressbar .bar');
	
	
	queue.on('complete',     onComplete);
	queue.on('error',        onError);
	queue.on('fileload',     onFileLoad);
	queue.on('fileprogress', onFileProgress);
	queue.on('progress',     onProgress);
	
	
	queue.loadManifest([
	    {
	        id:   '1',
	        src:  'http://upload.wikimedia.org/wikipedia/commons/a/a2/Polycyclic_Aromatic_Hydrocarbons_In_Space.jpg'
	    },
	    {
	        id: '2',
	        src: 'http://static3.businessinsider.com/image/522746c56bb3f72e2a316155/photo-airbus-proves-its-huge-new-warplane-doesnt-need-a-paved-runway.jpg'
	    },
	    {
	        id:   '3',
	        src:  'http://www.chem.gla.ac.uk/staff/wynne/i/2005/TRVS/TRVS-group-photo-huge.jpg'
	    },
	    {
	        id:   '4',
	        src:  'http://upload.wikimedia.org/wikipedia/commons/c/cb/WA_-_Dry_Falls_-_Huge_Channel_v1.png'
	    }
	]);
	
	
	
	function onComplete(event) {
	    console.log('Complete', event);
	    $state.text( $state.text() + '[All loaded]' );
	    $progressbar.addClass('complete');
	}
	
	function onError(event) {
	    console.log('Error', event);
	    $state.text( $state.text() + '[' + event.item.id + ' errored] ');
	}
	
	function onFileLoad(event) {
	    console.log('File loaded', event);
	    $state.text( $state.text() + '[' + event.item.id + ' loaded] ');
	}
	
	function onFileProgress(event) {
	    console.log('File progress', event);
	}
	
	function onProgress(event) {
	    var progress = Math.round(event.loaded * 100);
	
	    console.log('General progress', Math.round(event.loaded) * 100, event);
	    $progress.text(progress + '%');
	    $progressbar.css({
	        'width': progress + '%'
	    });
	}*/


/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgN2U2ODRmZDU2M2Y2MDdmY2VlYjc/OTA2ZiIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9wcmUtbG9hZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O0FDdENBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBd0M7O0FBRXhDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0wsRUFBQyIsImZpbGUiOiJwcmVsb2FkZXIuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCA3ZTY4NGZkNTYzZjYwN2ZjZWViN1xuICoqLyIsIi8qaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgcmVxdWlyZSgnLi4vLi4vYXBwL2luZGV4Lmh0bWwnKVxufVxuXG52YXIgalF1ZXJ5ID0gcmVxdWlyZShcImJ1bmRsZSFqcXVlcnlcIik7XG5yZXF1aXJlKCcuLi9zdHlsZXMvcHJlbG9hZGVyLnNjc3MnKTtcbmNvbnNvbGUubG9nKGpRdWVyeSk7XG5qUXVlcnkoXCIjcHJvZ3Jlc3NcIikudHh0KFwiSGVsbG8gV29ybGQhXCIpOyovXG5cbi8qXG52YXIgcXVldWUgICAgICAgID0gbmV3IHByZWxvYWRqcy5Mb2FkUXVldWUoKSxcbiAgICAkc3RhdGUgICAgICAgPSAkKCcjc3RhdGUnKSxcbiAgICAkcHJvZ3Jlc3MgICAgPSAkKCcjcHJvZ3Jlc3MnKSxcbiAgICAkcHJvZ3Jlc3NiYXIgPSAkKCcjcHJvZ3Jlc3NiYXIgLmJhcicpO1xuXG5cbnF1ZXVlLm9uKCdjb21wbGV0ZScsICAgICBvbkNvbXBsZXRlKTtcbnF1ZXVlLm9uKCdlcnJvcicsICAgICAgICBvbkVycm9yKTtcbnF1ZXVlLm9uKCdmaWxlbG9hZCcsICAgICBvbkZpbGVMb2FkKTtcbnF1ZXVlLm9uKCdmaWxlcHJvZ3Jlc3MnLCBvbkZpbGVQcm9ncmVzcyk7XG5xdWV1ZS5vbigncHJvZ3Jlc3MnLCAgICAgb25Qcm9ncmVzcyk7XG5cblxucXVldWUubG9hZE1hbmlmZXN0KFtcbiAgICB7XG4gICAgICAgIGlkOiAgICcxJyxcbiAgICAgICAgc3JjOiAgJ2h0dHA6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvY29tbW9ucy9hL2EyL1BvbHljeWNsaWNfQXJvbWF0aWNfSHlkcm9jYXJib25zX0luX1NwYWNlLmpwZydcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6ICcyJyxcbiAgICAgICAgc3JjOiAnaHR0cDovL3N0YXRpYzMuYnVzaW5lc3NpbnNpZGVyLmNvbS9pbWFnZS81MjI3NDZjNTZiYjNmNzJlMmEzMTYxNTUvcGhvdG8tYWlyYnVzLXByb3Zlcy1pdHMtaHVnZS1uZXctd2FycGxhbmUtZG9lc250LW5lZWQtYS1wYXZlZC1ydW53YXkuanBnJ1xuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogICAnMycsXG4gICAgICAgIHNyYzogICdodHRwOi8vd3d3LmNoZW0uZ2xhLmFjLnVrL3N0YWZmL3d5bm5lL2kvMjAwNS9UUlZTL1RSVlMtZ3JvdXAtcGhvdG8taHVnZS5qcGcnXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiAgICc0JyxcbiAgICAgICAgc3JjOiAgJ2h0dHA6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvY29tbW9ucy9jL2NiL1dBXy1fRHJ5X0ZhbGxzXy1fSHVnZV9DaGFubmVsX3YxLnBuZydcbiAgICB9XG5dKTtcblxuXG5cbmZ1bmN0aW9uIG9uQ29tcGxldGUoZXZlbnQpIHtcbiAgICBjb25zb2xlLmxvZygnQ29tcGxldGUnLCBldmVudCk7XG4gICAgJHN0YXRlLnRleHQoICRzdGF0ZS50ZXh0KCkgKyAnW0FsbCBsb2FkZWRdJyApO1xuICAgICRwcm9ncmVzc2Jhci5hZGRDbGFzcygnY29tcGxldGUnKTtcbn1cblxuZnVuY3Rpb24gb25FcnJvcihldmVudCkge1xuICAgIGNvbnNvbGUubG9nKCdFcnJvcicsIGV2ZW50KTtcbiAgICAkc3RhdGUudGV4dCggJHN0YXRlLnRleHQoKSArICdbJyArIGV2ZW50Lml0ZW0uaWQgKyAnIGVycm9yZWRdICcpO1xufVxuXG5mdW5jdGlvbiBvbkZpbGVMb2FkKGV2ZW50KSB7XG4gICAgY29uc29sZS5sb2coJ0ZpbGUgbG9hZGVkJywgZXZlbnQpO1xuICAgICRzdGF0ZS50ZXh0KCAkc3RhdGUudGV4dCgpICsgJ1snICsgZXZlbnQuaXRlbS5pZCArICcgbG9hZGVkXSAnKTtcbn1cblxuZnVuY3Rpb24gb25GaWxlUHJvZ3Jlc3MoZXZlbnQpIHtcbiAgICBjb25zb2xlLmxvZygnRmlsZSBwcm9ncmVzcycsIGV2ZW50KTtcbn1cblxuZnVuY3Rpb24gb25Qcm9ncmVzcyhldmVudCkge1xuICAgIHZhciBwcm9ncmVzcyA9IE1hdGgucm91bmQoZXZlbnQubG9hZGVkICogMTAwKTtcblxuICAgIGNvbnNvbGUubG9nKCdHZW5lcmFsIHByb2dyZXNzJywgTWF0aC5yb3VuZChldmVudC5sb2FkZWQpICogMTAwLCBldmVudCk7XG4gICAgJHByb2dyZXNzLnRleHQocHJvZ3Jlc3MgKyAnJScpO1xuICAgICRwcm9ncmVzc2Jhci5jc3Moe1xuICAgICAgICAnd2lkdGgnOiBwcm9ncmVzcyArICclJ1xuICAgIH0pO1xufSovXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3NjcmlwdHMvcHJlLWxvYWRlci5qc1xuICoqIG1vZHVsZSBpZCA9IDBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=