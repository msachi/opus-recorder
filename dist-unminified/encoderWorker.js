// Copyright 2010 The Emscripten Authors.  All rights reserved.
// Emscripten is available under two separate licenses, the MIT license and the
// University of Illinois/NCSA Open Source License.  Both these licenses can be
// found in the LICENSE file.

// The Module object: Our interface to the outside world. We import
// and export values on it. There are various ways Module can be used:
// 1. Not defined. We create it here
// 2. A function parameter, function(Module) { ..generated code.. }
// 3. pre-run appended it, var Module = {}; ..generated code..
// 4. External script tag defines var Module.
// We need to check if Module already exists (e.g. case 3 above).
// Substitution will be replaced with actual code on later stage of the build,
// this way Closure Compiler will not mangle it (e.g. case 4. above).
// Note that if you want to run closure, and also to use Module
// after the generated code, you will need to define   var Module = {};
// before the code. Then that object will be used in the code, and you
// can continue to use Module afterwards as well.
var Module = typeof Module !== 'undefined' ? Module : {};

// --pre-jses are emitted after the Module integration code, so that they can
// refer to Module (if they choose; they can also define Module)
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["EncoderWorker"] = factory();
	else
		root["EncoderWorker"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/encoderWorker.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var g;\n\n// This works in non-strict mode\ng = (function() {\n\treturn this;\n})();\n\ntry {\n\t// This works if eval is allowed (see CSP)\n\tg = g || new Function(\"return this\")();\n} catch (e) {\n\t// This works if the window reference is available\n\tif (typeof window === \"object\") g = window;\n}\n\n// g can still be undefined, but nothing to do about it...\n// We return undefined, instead of nothing here, so it's\n// easier to handle this case. if(!global) { ...}\n\nmodule.exports = g;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvd2VicGFjay9idWlsZGluL2dsb2JhbC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL0VuY29kZXJXb3JrZXIvKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzP2NkMDAiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/webpack/buildin/global.js\n");

/***/ }),

/***/ "./src/encoderWorker.js":
/*!******************************!*\
  !*** ./src/encoderWorker.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(global) {\n\nvar encoder;\nvar mainReadyResolve;\nvar mainReady = new Promise(function(resolve){ mainReadyResolve = resolve; });\n\nglobal['onmessage'] = function( e ){\n  mainReady.then(function(){\n    switch( e['data']['command'] ){\n\n      case 'encode':\n        if (encoder){\n          encoder.encode( e['data']['buffers'] );\n        }\n        break;\n\n      case 'getHeaderPages':\n        if (encoder){\n          encoder.generateIdPage();\n          encoder.generateCommentPage();\n        }\n        break;\n\n      case 'done':\n        if (encoder) {\n          encoder.encodeFinalFrame();\n          global['postMessage']( {message: 'done'} );\n          global['close']();\n        }\n        break;\n\n      case 'init':\n        encoder = new OggOpusEncoder( e['data'], Module );\n        global['postMessage']( {message: 'ready'} );\n        break;\n\n      default:\n        // Ignore any unknown commands and continue recieving commands\n    }\n  });\n};\n\n\nvar OggOpusEncoder = function( config, Module ){\n\n  if ( !Module ) {\n    throw new Error('Module with exports required to initialize an encoder instance');\n  }\n\n  this.config = Object.assign({ \n    bufferLength: 4096, // Define size of incoming buffer\n    encoderApplication: 2049, // 2048 = Voice (Lower fidelity)\n                              // 2049 = Full Band Audio (Highest fidelity)\n                              // 2051 = Restricted Low Delay (Lowest latency)\n    encoderFrameSize: 20, // Specified in ms.\n    encoderSampleRate: 48000, // Desired encoding sample rate. Audio will be resampled\n    maxFramesPerPage: 40, // Tradeoff latency with overhead\n    numberOfChannels: 1,\n    originalSampleRate: 44100,\n    resampleQuality: 3, // Value between 0 and 10 inclusive. 10 being highest quality.\n    serial: Math.floor(Math.random() * 4294967296)\n  }, config );\n\n  this._opus_encoder_create = Module._opus_encoder_create;\n  this._opus_encoder_ctl = Module._opus_encoder_ctl;\n  this._speex_resampler_process_interleaved_float = Module._speex_resampler_process_interleaved_float;\n  this._speex_resampler_init = Module._speex_resampler_init;\n  this._opus_encode_float = Module._opus_encode_float;\n  this._free = Module._free;\n  this._malloc = Module._malloc;\n  this.HEAPU8 = Module.HEAPU8;\n  this.HEAP32 = Module.HEAP32;\n  this.HEAPF32 = Module.HEAPF32;\n\n  this.pageIndex = 0;\n  this.granulePosition = 0;\n  this.segmentData = new Uint8Array( 65025 ); // Maximum length of oggOpus data\n  this.segmentDataIndex = 0;\n  this.segmentTable = new Uint8Array( 255 ); // Maximum data segments\n  this.segmentTableIndex = 0;\n  this.framesInPage = 0;\n\n  this.initChecksumTable();\n  this.initCodec();\n  this.initResampler();\n\n  if ( this.config.numberOfChannels === 1 ) {\n    this.interleave = function( buffers ) { return buffers[0]; };\n  }\n  else {\n    this.interleavedBuffers = new Float32Array( this.config.bufferLength * this.config.numberOfChannels );\n  }\n\n};\n\nOggOpusEncoder.prototype.encode = function( buffers ) {\n  var samples = this.interleave( buffers );\n  var sampleIndex = 0;\n\n  while ( sampleIndex < samples.length ) {\n\n    var lengthToCopy = Math.min( this.resampleBufferLength - this.resampleBufferIndex, samples.length - sampleIndex );\n    this.resampleBuffer.set( samples.subarray( sampleIndex, sampleIndex+lengthToCopy ), this.resampleBufferIndex );\n    sampleIndex += lengthToCopy;\n    this.resampleBufferIndex += lengthToCopy;\n\n    if ( this.resampleBufferIndex === this.resampleBufferLength ) {\n      this._speex_resampler_process_interleaved_float( this.resampler, this.resampleBufferPointer, this.resampleSamplesPerChannelPointer, this.encoderBufferPointer, this.encoderSamplesPerChannelPointer );\n      var packetLength = this._opus_encode_float( this.encoder, this.encoderBufferPointer, this.encoderSamplesPerChannel, this.encoderOutputPointer, this.encoderOutputMaxLength );\n      this.segmentPacket( packetLength );\n      this.resampleBufferIndex = 0;\n\n      this.framesInPage++;\n      if ( this.framesInPage >= this.config.maxFramesPerPage ) {\n        this.generatePage();\n      }\n    }\n  }\n};\n\nOggOpusEncoder.prototype.encodeFinalFrame = function() {\n  var finalFrameBuffers = [];\n  for ( var i = 0; i < this.config.numberOfChannels; ++i ) {\n    finalFrameBuffers.push( new Float32Array( this.config.bufferLength - (this.resampleBufferIndex / this.config.numberOfChannels) ));\n  }\n  this.encode( finalFrameBuffers );\n  this.headerType += 4;\n  this.generatePage();\n};\n\nOggOpusEncoder.prototype.getChecksum = function( data ){\n  var checksum = 0;\n  for ( var i = 0; i < data.length; i++ ) {\n    checksum = (checksum << 8) ^ this.checksumTable[ ((checksum>>>24) & 0xff) ^ data[i] ];\n  }\n  return checksum >>> 0;\n};\n\nOggOpusEncoder.prototype.generateCommentPage = function(){\n  var segmentDataView = new DataView( this.segmentData.buffer );\n  segmentDataView.setUint32( 0, 1937076303, true ) // Magic Signature 'Opus'\n  segmentDataView.setUint32( 4, 1936154964, true ) // Magic Signature 'Tags'\n  segmentDataView.setUint32( 8, 10, true ); // Vendor Length\n  segmentDataView.setUint32( 12, 1868784978, true ); // Vendor name 'Reco'\n  segmentDataView.setUint32( 16, 1919247474, true ); // Vendor name 'rder'\n  segmentDataView.setUint16( 20, 21322, true ); // Vendor name 'JS'\n  segmentDataView.setUint32( 22, 0, true ); // User Comment List Length\n  this.segmentTableIndex = 1;\n  this.segmentDataIndex = this.segmentTable[0] = 26;\n  this.headerType = 0;\n  this.generatePage();\n};\n\nOggOpusEncoder.prototype.generateIdPage = function(){\n  var segmentDataView = new DataView( this.segmentData.buffer );\n  segmentDataView.setUint32( 0, 1937076303, true ) // Magic Signature 'Opus'\n  segmentDataView.setUint32( 4, 1684104520, true ) // Magic Signature 'Head'\n  segmentDataView.setUint8( 8, 1, true ); // Version\n  segmentDataView.setUint8( 9, this.config.numberOfChannels, true ); // Channel count\n  segmentDataView.setUint16( 10, 3840, true ); // pre-skip (80ms)\n  segmentDataView.setUint32( 12, this.config.originalSampleRateOverride || this.config.originalSampleRate, true ); // original sample rate\n  segmentDataView.setUint16( 16, 0, true ); // output gain\n  segmentDataView.setUint8( 18, 0, true ); // channel map 0 = mono or stereo\n  this.segmentTableIndex = 1;\n  this.segmentDataIndex = this.segmentTable[0] = 19;\n  this.headerType = 2;\n  this.generatePage();\n};\n\nOggOpusEncoder.prototype.generatePage = function(){\n  var granulePosition = ( this.lastPositiveGranulePosition === this.granulePosition) ? -1 : this.granulePosition;\n  var pageBuffer = new ArrayBuffer(  27 + this.segmentTableIndex + this.segmentDataIndex );\n  var pageBufferView = new DataView( pageBuffer );\n  var page = new Uint8Array( pageBuffer );\n\n  pageBufferView.setUint32( 0, 1399285583, true); // Capture Pattern starts all page headers 'OggS'\n  pageBufferView.setUint8( 4, 0, true ); // Version\n  pageBufferView.setUint8( 5, this.headerType, true ); // 1 = continuation, 2 = beginning of stream, 4 = end of stream\n\n  // Number of samples upto and including this page at 48000Hz, into signed 64 bit Little Endian integer\n  // Javascript Number maximum value is 53 bits or 2^53 - 1 \n  pageBufferView.setUint32( 6, granulePosition, true );\n  if (granulePosition < 0) {\n    pageBufferView.setInt32( 10, Math.ceil(granulePosition/4294967297) - 1, true );\n  }\n  else {\n    pageBufferView.setInt32( 10, Math.floor(granulePosition/4294967296), true );\n  }\n\n  pageBufferView.setUint32( 14, this.config.serial, true ); // Bitstream serial number\n  pageBufferView.setUint32( 18, this.pageIndex++, true ); // Page sequence number\n  pageBufferView.setUint8( 26, this.segmentTableIndex, true ); // Number of segments in page.\n  page.set( this.segmentTable.subarray(0, this.segmentTableIndex), 27 ); // Segment Table\n  page.set( this.segmentData.subarray(0, this.segmentDataIndex), 27 + this.segmentTableIndex ); // Segment Data\n  pageBufferView.setUint32( 22, this.getChecksum( page ), true ); // Checksum\n\n  global['postMessage']( {message: 'page', page: page}, [page.buffer] );\n  this.segmentTableIndex = 0;\n  this.segmentDataIndex = 0;\n  this.framesInPage = 0;\n  if ( granulePosition > 0 ) {\n    this.lastPositiveGranulePosition = granulePosition;\n  }\n};\n\nOggOpusEncoder.prototype.initChecksumTable = function(){\n  this.checksumTable = [];\n  for ( var i = 0; i < 256; i++ ) {\n    var r = i << 24;\n    for ( var j = 0; j < 8; j++ ) {\n      r = ((r & 0x80000000) != 0) ? ((r << 1) ^ 0x04c11db7) : (r << 1);\n    }\n    this.checksumTable[i] = (r & 0xffffffff);\n  }\n};\n\nOggOpusEncoder.prototype.setOpusControl = function( control, value ){\n  var location = this._malloc( 4 );\n  this.HEAP32[ location >> 2 ] = value;\n  this._opus_encoder_ctl( this.encoder, control, location );\n  this._free( location );\n};\n\nOggOpusEncoder.prototype.initCodec = function() {\n  var errLocation = this._malloc( 4 );\n  this.encoder = this._opus_encoder_create( this.config.encoderSampleRate, this.config.numberOfChannels, this.config.encoderApplication, errLocation );\n  this._free( errLocation );\n\n  if ( this.config.encoderBitRate ) {\n    this.setOpusControl( 4002, this.config.encoderBitRate );\n  }\n\n  if ( this.config.encoderComplexity ) {\n    this.setOpusControl( 4010, this.config.encoderComplexity );\n  }\n\n  this.encoderSamplesPerChannel = this.config.encoderSampleRate * this.config.encoderFrameSize / 1000;\n  this.encoderSamplesPerChannelPointer = this._malloc( 4 );\n  this.HEAP32[ this.encoderSamplesPerChannelPointer >> 2 ] = this.encoderSamplesPerChannel;\n\n  this.encoderBufferLength = this.encoderSamplesPerChannel * this.config.numberOfChannels;\n  this.encoderBufferPointer = this._malloc( this.encoderBufferLength * 4 ); // 4 bytes per sample\n  this.encoderBuffer = this.HEAPF32.subarray( this.encoderBufferPointer >> 2, (this.encoderBufferPointer >> 2) + this.encoderBufferLength );\n\n  this.encoderOutputMaxLength = 4000;\n  this.encoderOutputPointer = this._malloc( this.encoderOutputMaxLength );\n  this.encoderOutputBuffer = this.HEAPU8.subarray( this.encoderOutputPointer, this.encoderOutputPointer + this.encoderOutputMaxLength );\n};\n\nOggOpusEncoder.prototype.initResampler = function() {\n  var errLocation = this._malloc( 4 );\n  this.resampler = this._speex_resampler_init( this.config.numberOfChannels, this.config.originalSampleRate, this.config.encoderSampleRate, this.config.resampleQuality, errLocation );\n  this._free( errLocation );\n\n  this.resampleBufferIndex = 0;\n  this.resampleSamplesPerChannel = this.config.originalSampleRate * this.config.encoderFrameSize / 1000;\n  this.resampleSamplesPerChannelPointer = this._malloc( 4 );\n  this.HEAP32[ this.resampleSamplesPerChannelPointer >> 2 ] = this.resampleSamplesPerChannel;\n\n  this.resampleBufferLength = this.resampleSamplesPerChannel * this.config.numberOfChannels;\n  this.resampleBufferPointer = this._malloc( this.resampleBufferLength * 4 ); // 4 bytes per sample\n  this.resampleBuffer = this.HEAPF32.subarray( this.resampleBufferPointer >> 2, (this.resampleBufferPointer >> 2) + this.resampleBufferLength );\n};\n\nOggOpusEncoder.prototype.interleave = function( buffers ) {\n  for ( var i = 0; i < this.config.bufferLength; i++ ) {\n    for ( var channel = 0; channel < this.config.numberOfChannels; channel++ ) {\n      this.interleavedBuffers[ i * this.config.numberOfChannels + channel ] = buffers[ channel ][ i ];\n    }\n  }\n\n  return this.interleavedBuffers;\n};\n\nOggOpusEncoder.prototype.segmentPacket = function( packetLength ) {\n  var packetIndex = 0;\n\n  while ( packetLength >= 0 ) {\n\n    if ( this.segmentTableIndex === 255 ) {\n      this.generatePage();\n      this.headerType = 1;\n    }\n\n    var segmentLength = Math.min( packetLength, 255 );\n    this.segmentTable[ this.segmentTableIndex++ ] = segmentLength;\n    this.segmentData.set( this.encoderOutputBuffer.subarray( packetIndex, packetIndex + segmentLength ), this.segmentDataIndex );\n    this.segmentDataIndex += segmentLength;\n    packetIndex += segmentLength;\n    packetLength -= 255;\n  }\n\n  this.granulePosition += ( 48 * this.config.encoderFrameSize );\n  if ( this.segmentTableIndex === 255 ) {\n    this.generatePage();\n    this.headerType = 0;\n  }\n};\n\n\nif (!Module) {\n  Module = {};\n}\n\nModule['mainReady'] = mainReady;\nModule['OggOpusEncoder'] = OggOpusEncoder;\nModule['onRuntimeInitialized'] = mainReadyResolve;\n\nmodule.exports = Module;\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZW5jb2Rlcldvcmtlci5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL0VuY29kZXJXb3JrZXIvLi9zcmMvZW5jb2Rlcldvcmtlci5qcz84YjNjIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG52YXIgZW5jb2RlcjtcbnZhciBtYWluUmVhZHlSZXNvbHZlO1xudmFyIG1haW5SZWFkeSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUpeyBtYWluUmVhZHlSZXNvbHZlID0gcmVzb2x2ZTsgfSk7XG5cbmdsb2JhbFsnb25tZXNzYWdlJ10gPSBmdW5jdGlvbiggZSApe1xuICBtYWluUmVhZHkudGhlbihmdW5jdGlvbigpe1xuICAgIHN3aXRjaCggZVsnZGF0YSddWydjb21tYW5kJ10gKXtcblxuICAgICAgY2FzZSAnZW5jb2RlJzpcbiAgICAgICAgaWYgKGVuY29kZXIpe1xuICAgICAgICAgIGVuY29kZXIuZW5jb2RlKCBlWydkYXRhJ11bJ2J1ZmZlcnMnXSApO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdnZXRIZWFkZXJQYWdlcyc6XG4gICAgICAgIGlmIChlbmNvZGVyKXtcbiAgICAgICAgICBlbmNvZGVyLmdlbmVyYXRlSWRQYWdlKCk7XG4gICAgICAgICAgZW5jb2Rlci5nZW5lcmF0ZUNvbW1lbnRQYWdlKCk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ2RvbmUnOlxuICAgICAgICBpZiAoZW5jb2Rlcikge1xuICAgICAgICAgIGVuY29kZXIuZW5jb2RlRmluYWxGcmFtZSgpO1xuICAgICAgICAgIGdsb2JhbFsncG9zdE1lc3NhZ2UnXSgge21lc3NhZ2U6ICdkb25lJ30gKTtcbiAgICAgICAgICBnbG9iYWxbJ2Nsb3NlJ10oKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnaW5pdCc6XG4gICAgICAgIGVuY29kZXIgPSBuZXcgT2dnT3B1c0VuY29kZXIoIGVbJ2RhdGEnXSwgTW9kdWxlICk7XG4gICAgICAgIGdsb2JhbFsncG9zdE1lc3NhZ2UnXSgge21lc3NhZ2U6ICdyZWFkeSd9ICk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICAvLyBJZ25vcmUgYW55IHVua25vd24gY29tbWFuZHMgYW5kIGNvbnRpbnVlIHJlY2lldmluZyBjb21tYW5kc1xuICAgIH1cbiAgfSk7XG59O1xuXG5cbnZhciBPZ2dPcHVzRW5jb2RlciA9IGZ1bmN0aW9uKCBjb25maWcsIE1vZHVsZSApe1xuXG4gIGlmICggIU1vZHVsZSApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ01vZHVsZSB3aXRoIGV4cG9ydHMgcmVxdWlyZWQgdG8gaW5pdGlhbGl6ZSBhbiBlbmNvZGVyIGluc3RhbmNlJyk7XG4gIH1cblxuICB0aGlzLmNvbmZpZyA9IE9iamVjdC5hc3NpZ24oeyBcbiAgICBidWZmZXJMZW5ndGg6IDQwOTYsIC8vIERlZmluZSBzaXplIG9mIGluY29taW5nIGJ1ZmZlclxuICAgIGVuY29kZXJBcHBsaWNhdGlvbjogMjA0OSwgLy8gMjA0OCA9IFZvaWNlIChMb3dlciBmaWRlbGl0eSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIDIwNDkgPSBGdWxsIEJhbmQgQXVkaW8gKEhpZ2hlc3QgZmlkZWxpdHkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAyMDUxID0gUmVzdHJpY3RlZCBMb3cgRGVsYXkgKExvd2VzdCBsYXRlbmN5KVxuICAgIGVuY29kZXJGcmFtZVNpemU6IDIwLCAvLyBTcGVjaWZpZWQgaW4gbXMuXG4gICAgZW5jb2RlclNhbXBsZVJhdGU6IDQ4MDAwLCAvLyBEZXNpcmVkIGVuY29kaW5nIHNhbXBsZSByYXRlLiBBdWRpbyB3aWxsIGJlIHJlc2FtcGxlZFxuICAgIG1heEZyYW1lc1BlclBhZ2U6IDQwLCAvLyBUcmFkZW9mZiBsYXRlbmN5IHdpdGggb3ZlcmhlYWRcbiAgICBudW1iZXJPZkNoYW5uZWxzOiAxLFxuICAgIG9yaWdpbmFsU2FtcGxlUmF0ZTogNDQxMDAsXG4gICAgcmVzYW1wbGVRdWFsaXR5OiAzLCAvLyBWYWx1ZSBiZXR3ZWVuIDAgYW5kIDEwIGluY2x1c2l2ZS4gMTAgYmVpbmcgaGlnaGVzdCBxdWFsaXR5LlxuICAgIHNlcmlhbDogTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNDI5NDk2NzI5NilcbiAgfSwgY29uZmlnICk7XG5cbiAgdGhpcy5fb3B1c19lbmNvZGVyX2NyZWF0ZSA9IE1vZHVsZS5fb3B1c19lbmNvZGVyX2NyZWF0ZTtcbiAgdGhpcy5fb3B1c19lbmNvZGVyX2N0bCA9IE1vZHVsZS5fb3B1c19lbmNvZGVyX2N0bDtcbiAgdGhpcy5fc3BlZXhfcmVzYW1wbGVyX3Byb2Nlc3NfaW50ZXJsZWF2ZWRfZmxvYXQgPSBNb2R1bGUuX3NwZWV4X3Jlc2FtcGxlcl9wcm9jZXNzX2ludGVybGVhdmVkX2Zsb2F0O1xuICB0aGlzLl9zcGVleF9yZXNhbXBsZXJfaW5pdCA9IE1vZHVsZS5fc3BlZXhfcmVzYW1wbGVyX2luaXQ7XG4gIHRoaXMuX29wdXNfZW5jb2RlX2Zsb2F0ID0gTW9kdWxlLl9vcHVzX2VuY29kZV9mbG9hdDtcbiAgdGhpcy5fZnJlZSA9IE1vZHVsZS5fZnJlZTtcbiAgdGhpcy5fbWFsbG9jID0gTW9kdWxlLl9tYWxsb2M7XG4gIHRoaXMuSEVBUFU4ID0gTW9kdWxlLkhFQVBVODtcbiAgdGhpcy5IRUFQMzIgPSBNb2R1bGUuSEVBUDMyO1xuICB0aGlzLkhFQVBGMzIgPSBNb2R1bGUuSEVBUEYzMjtcblxuICB0aGlzLnBhZ2VJbmRleCA9IDA7XG4gIHRoaXMuZ3JhbnVsZVBvc2l0aW9uID0gMDtcbiAgdGhpcy5zZWdtZW50RGF0YSA9IG5ldyBVaW50OEFycmF5KCA2NTAyNSApOyAvLyBNYXhpbXVtIGxlbmd0aCBvZiBvZ2dPcHVzIGRhdGFcbiAgdGhpcy5zZWdtZW50RGF0YUluZGV4ID0gMDtcbiAgdGhpcy5zZWdtZW50VGFibGUgPSBuZXcgVWludDhBcnJheSggMjU1ICk7IC8vIE1heGltdW0gZGF0YSBzZWdtZW50c1xuICB0aGlzLnNlZ21lbnRUYWJsZUluZGV4ID0gMDtcbiAgdGhpcy5mcmFtZXNJblBhZ2UgPSAwO1xuXG4gIHRoaXMuaW5pdENoZWNrc3VtVGFibGUoKTtcbiAgdGhpcy5pbml0Q29kZWMoKTtcbiAgdGhpcy5pbml0UmVzYW1wbGVyKCk7XG5cbiAgaWYgKCB0aGlzLmNvbmZpZy5udW1iZXJPZkNoYW5uZWxzID09PSAxICkge1xuICAgIHRoaXMuaW50ZXJsZWF2ZSA9IGZ1bmN0aW9uKCBidWZmZXJzICkgeyByZXR1cm4gYnVmZmVyc1swXTsgfTtcbiAgfVxuICBlbHNlIHtcbiAgICB0aGlzLmludGVybGVhdmVkQnVmZmVycyA9IG5ldyBGbG9hdDMyQXJyYXkoIHRoaXMuY29uZmlnLmJ1ZmZlckxlbmd0aCAqIHRoaXMuY29uZmlnLm51bWJlck9mQ2hhbm5lbHMgKTtcbiAgfVxuXG59O1xuXG5PZ2dPcHVzRW5jb2Rlci5wcm90b3R5cGUuZW5jb2RlID0gZnVuY3Rpb24oIGJ1ZmZlcnMgKSB7XG4gIHZhciBzYW1wbGVzID0gdGhpcy5pbnRlcmxlYXZlKCBidWZmZXJzICk7XG4gIHZhciBzYW1wbGVJbmRleCA9IDA7XG5cbiAgd2hpbGUgKCBzYW1wbGVJbmRleCA8IHNhbXBsZXMubGVuZ3RoICkge1xuXG4gICAgdmFyIGxlbmd0aFRvQ29weSA9IE1hdGgubWluKCB0aGlzLnJlc2FtcGxlQnVmZmVyTGVuZ3RoIC0gdGhpcy5yZXNhbXBsZUJ1ZmZlckluZGV4LCBzYW1wbGVzLmxlbmd0aCAtIHNhbXBsZUluZGV4ICk7XG4gICAgdGhpcy5yZXNhbXBsZUJ1ZmZlci5zZXQoIHNhbXBsZXMuc3ViYXJyYXkoIHNhbXBsZUluZGV4LCBzYW1wbGVJbmRleCtsZW5ndGhUb0NvcHkgKSwgdGhpcy5yZXNhbXBsZUJ1ZmZlckluZGV4ICk7XG4gICAgc2FtcGxlSW5kZXggKz0gbGVuZ3RoVG9Db3B5O1xuICAgIHRoaXMucmVzYW1wbGVCdWZmZXJJbmRleCArPSBsZW5ndGhUb0NvcHk7XG5cbiAgICBpZiAoIHRoaXMucmVzYW1wbGVCdWZmZXJJbmRleCA9PT0gdGhpcy5yZXNhbXBsZUJ1ZmZlckxlbmd0aCApIHtcbiAgICAgIHRoaXMuX3NwZWV4X3Jlc2FtcGxlcl9wcm9jZXNzX2ludGVybGVhdmVkX2Zsb2F0KCB0aGlzLnJlc2FtcGxlciwgdGhpcy5yZXNhbXBsZUJ1ZmZlclBvaW50ZXIsIHRoaXMucmVzYW1wbGVTYW1wbGVzUGVyQ2hhbm5lbFBvaW50ZXIsIHRoaXMuZW5jb2RlckJ1ZmZlclBvaW50ZXIsIHRoaXMuZW5jb2RlclNhbXBsZXNQZXJDaGFubmVsUG9pbnRlciApO1xuICAgICAgdmFyIHBhY2tldExlbmd0aCA9IHRoaXMuX29wdXNfZW5jb2RlX2Zsb2F0KCB0aGlzLmVuY29kZXIsIHRoaXMuZW5jb2RlckJ1ZmZlclBvaW50ZXIsIHRoaXMuZW5jb2RlclNhbXBsZXNQZXJDaGFubmVsLCB0aGlzLmVuY29kZXJPdXRwdXRQb2ludGVyLCB0aGlzLmVuY29kZXJPdXRwdXRNYXhMZW5ndGggKTtcbiAgICAgIHRoaXMuc2VnbWVudFBhY2tldCggcGFja2V0TGVuZ3RoICk7XG4gICAgICB0aGlzLnJlc2FtcGxlQnVmZmVySW5kZXggPSAwO1xuXG4gICAgICB0aGlzLmZyYW1lc0luUGFnZSsrO1xuICAgICAgaWYgKCB0aGlzLmZyYW1lc0luUGFnZSA+PSB0aGlzLmNvbmZpZy5tYXhGcmFtZXNQZXJQYWdlICkge1xuICAgICAgICB0aGlzLmdlbmVyYXRlUGFnZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxuT2dnT3B1c0VuY29kZXIucHJvdG90eXBlLmVuY29kZUZpbmFsRnJhbWUgPSBmdW5jdGlvbigpIHtcbiAgdmFyIGZpbmFsRnJhbWVCdWZmZXJzID0gW107XG4gIGZvciAoIHZhciBpID0gMDsgaSA8IHRoaXMuY29uZmlnLm51bWJlck9mQ2hhbm5lbHM7ICsraSApIHtcbiAgICBmaW5hbEZyYW1lQnVmZmVycy5wdXNoKCBuZXcgRmxvYXQzMkFycmF5KCB0aGlzLmNvbmZpZy5idWZmZXJMZW5ndGggLSAodGhpcy5yZXNhbXBsZUJ1ZmZlckluZGV4IC8gdGhpcy5jb25maWcubnVtYmVyT2ZDaGFubmVscykgKSk7XG4gIH1cbiAgdGhpcy5lbmNvZGUoIGZpbmFsRnJhbWVCdWZmZXJzICk7XG4gIHRoaXMuaGVhZGVyVHlwZSArPSA0O1xuICB0aGlzLmdlbmVyYXRlUGFnZSgpO1xufTtcblxuT2dnT3B1c0VuY29kZXIucHJvdG90eXBlLmdldENoZWNrc3VtID0gZnVuY3Rpb24oIGRhdGEgKXtcbiAgdmFyIGNoZWNrc3VtID0gMDtcbiAgZm9yICggdmFyIGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKyApIHtcbiAgICBjaGVja3N1bSA9IChjaGVja3N1bSA8PCA4KSBeIHRoaXMuY2hlY2tzdW1UYWJsZVsgKChjaGVja3N1bT4+PjI0KSAmIDB4ZmYpIF4gZGF0YVtpXSBdO1xuICB9XG4gIHJldHVybiBjaGVja3N1bSA+Pj4gMDtcbn07XG5cbk9nZ09wdXNFbmNvZGVyLnByb3RvdHlwZS5nZW5lcmF0ZUNvbW1lbnRQYWdlID0gZnVuY3Rpb24oKXtcbiAgdmFyIHNlZ21lbnREYXRhVmlldyA9IG5ldyBEYXRhVmlldyggdGhpcy5zZWdtZW50RGF0YS5idWZmZXIgKTtcbiAgc2VnbWVudERhdGFWaWV3LnNldFVpbnQzMiggMCwgMTkzNzA3NjMwMywgdHJ1ZSApIC8vIE1hZ2ljIFNpZ25hdHVyZSAnT3B1cydcbiAgc2VnbWVudERhdGFWaWV3LnNldFVpbnQzMiggNCwgMTkzNjE1NDk2NCwgdHJ1ZSApIC8vIE1hZ2ljIFNpZ25hdHVyZSAnVGFncydcbiAgc2VnbWVudERhdGFWaWV3LnNldFVpbnQzMiggOCwgMTAsIHRydWUgKTsgLy8gVmVuZG9yIExlbmd0aFxuICBzZWdtZW50RGF0YVZpZXcuc2V0VWludDMyKCAxMiwgMTg2ODc4NDk3OCwgdHJ1ZSApOyAvLyBWZW5kb3IgbmFtZSAnUmVjbydcbiAgc2VnbWVudERhdGFWaWV3LnNldFVpbnQzMiggMTYsIDE5MTkyNDc0NzQsIHRydWUgKTsgLy8gVmVuZG9yIG5hbWUgJ3JkZXInXG4gIHNlZ21lbnREYXRhVmlldy5zZXRVaW50MTYoIDIwLCAyMTMyMiwgdHJ1ZSApOyAvLyBWZW5kb3IgbmFtZSAnSlMnXG4gIHNlZ21lbnREYXRhVmlldy5zZXRVaW50MzIoIDIyLCAwLCB0cnVlICk7IC8vIFVzZXIgQ29tbWVudCBMaXN0IExlbmd0aFxuICB0aGlzLnNlZ21lbnRUYWJsZUluZGV4ID0gMTtcbiAgdGhpcy5zZWdtZW50RGF0YUluZGV4ID0gdGhpcy5zZWdtZW50VGFibGVbMF0gPSAyNjtcbiAgdGhpcy5oZWFkZXJUeXBlID0gMDtcbiAgdGhpcy5nZW5lcmF0ZVBhZ2UoKTtcbn07XG5cbk9nZ09wdXNFbmNvZGVyLnByb3RvdHlwZS5nZW5lcmF0ZUlkUGFnZSA9IGZ1bmN0aW9uKCl7XG4gIHZhciBzZWdtZW50RGF0YVZpZXcgPSBuZXcgRGF0YVZpZXcoIHRoaXMuc2VnbWVudERhdGEuYnVmZmVyICk7XG4gIHNlZ21lbnREYXRhVmlldy5zZXRVaW50MzIoIDAsIDE5MzcwNzYzMDMsIHRydWUgKSAvLyBNYWdpYyBTaWduYXR1cmUgJ09wdXMnXG4gIHNlZ21lbnREYXRhVmlldy5zZXRVaW50MzIoIDQsIDE2ODQxMDQ1MjAsIHRydWUgKSAvLyBNYWdpYyBTaWduYXR1cmUgJ0hlYWQnXG4gIHNlZ21lbnREYXRhVmlldy5zZXRVaW50OCggOCwgMSwgdHJ1ZSApOyAvLyBWZXJzaW9uXG4gIHNlZ21lbnREYXRhVmlldy5zZXRVaW50OCggOSwgdGhpcy5jb25maWcubnVtYmVyT2ZDaGFubmVscywgdHJ1ZSApOyAvLyBDaGFubmVsIGNvdW50XG4gIHNlZ21lbnREYXRhVmlldy5zZXRVaW50MTYoIDEwLCAzODQwLCB0cnVlICk7IC8vIHByZS1za2lwICg4MG1zKVxuICBzZWdtZW50RGF0YVZpZXcuc2V0VWludDMyKCAxMiwgdGhpcy5jb25maWcub3JpZ2luYWxTYW1wbGVSYXRlT3ZlcnJpZGUgfHwgdGhpcy5jb25maWcub3JpZ2luYWxTYW1wbGVSYXRlLCB0cnVlICk7IC8vIG9yaWdpbmFsIHNhbXBsZSByYXRlXG4gIHNlZ21lbnREYXRhVmlldy5zZXRVaW50MTYoIDE2LCAwLCB0cnVlICk7IC8vIG91dHB1dCBnYWluXG4gIHNlZ21lbnREYXRhVmlldy5zZXRVaW50OCggMTgsIDAsIHRydWUgKTsgLy8gY2hhbm5lbCBtYXAgMCA9IG1vbm8gb3Igc3RlcmVvXG4gIHRoaXMuc2VnbWVudFRhYmxlSW5kZXggPSAxO1xuICB0aGlzLnNlZ21lbnREYXRhSW5kZXggPSB0aGlzLnNlZ21lbnRUYWJsZVswXSA9IDE5O1xuICB0aGlzLmhlYWRlclR5cGUgPSAyO1xuICB0aGlzLmdlbmVyYXRlUGFnZSgpO1xufTtcblxuT2dnT3B1c0VuY29kZXIucHJvdG90eXBlLmdlbmVyYXRlUGFnZSA9IGZ1bmN0aW9uKCl7XG4gIHZhciBncmFudWxlUG9zaXRpb24gPSAoIHRoaXMubGFzdFBvc2l0aXZlR3JhbnVsZVBvc2l0aW9uID09PSB0aGlzLmdyYW51bGVQb3NpdGlvbikgPyAtMSA6IHRoaXMuZ3JhbnVsZVBvc2l0aW9uO1xuICB2YXIgcGFnZUJ1ZmZlciA9IG5ldyBBcnJheUJ1ZmZlciggIDI3ICsgdGhpcy5zZWdtZW50VGFibGVJbmRleCArIHRoaXMuc2VnbWVudERhdGFJbmRleCApO1xuICB2YXIgcGFnZUJ1ZmZlclZpZXcgPSBuZXcgRGF0YVZpZXcoIHBhZ2VCdWZmZXIgKTtcbiAgdmFyIHBhZ2UgPSBuZXcgVWludDhBcnJheSggcGFnZUJ1ZmZlciApO1xuXG4gIHBhZ2VCdWZmZXJWaWV3LnNldFVpbnQzMiggMCwgMTM5OTI4NTU4MywgdHJ1ZSk7IC8vIENhcHR1cmUgUGF0dGVybiBzdGFydHMgYWxsIHBhZ2UgaGVhZGVycyAnT2dnUydcbiAgcGFnZUJ1ZmZlclZpZXcuc2V0VWludDgoIDQsIDAsIHRydWUgKTsgLy8gVmVyc2lvblxuICBwYWdlQnVmZmVyVmlldy5zZXRVaW50OCggNSwgdGhpcy5oZWFkZXJUeXBlLCB0cnVlICk7IC8vIDEgPSBjb250aW51YXRpb24sIDIgPSBiZWdpbm5pbmcgb2Ygc3RyZWFtLCA0ID0gZW5kIG9mIHN0cmVhbVxuXG4gIC8vIE51bWJlciBvZiBzYW1wbGVzIHVwdG8gYW5kIGluY2x1ZGluZyB0aGlzIHBhZ2UgYXQgNDgwMDBIeiwgaW50byBzaWduZWQgNjQgYml0IExpdHRsZSBFbmRpYW4gaW50ZWdlclxuICAvLyBKYXZhc2NyaXB0IE51bWJlciBtYXhpbXVtIHZhbHVlIGlzIDUzIGJpdHMgb3IgMl41MyAtIDEgXG4gIHBhZ2VCdWZmZXJWaWV3LnNldFVpbnQzMiggNiwgZ3JhbnVsZVBvc2l0aW9uLCB0cnVlICk7XG4gIGlmIChncmFudWxlUG9zaXRpb24gPCAwKSB7XG4gICAgcGFnZUJ1ZmZlclZpZXcuc2V0SW50MzIoIDEwLCBNYXRoLmNlaWwoZ3JhbnVsZVBvc2l0aW9uLzQyOTQ5NjcyOTcpIC0gMSwgdHJ1ZSApO1xuICB9XG4gIGVsc2Uge1xuICAgIHBhZ2VCdWZmZXJWaWV3LnNldEludDMyKCAxMCwgTWF0aC5mbG9vcihncmFudWxlUG9zaXRpb24vNDI5NDk2NzI5NiksIHRydWUgKTtcbiAgfVxuXG4gIHBhZ2VCdWZmZXJWaWV3LnNldFVpbnQzMiggMTQsIHRoaXMuY29uZmlnLnNlcmlhbCwgdHJ1ZSApOyAvLyBCaXRzdHJlYW0gc2VyaWFsIG51bWJlclxuICBwYWdlQnVmZmVyVmlldy5zZXRVaW50MzIoIDE4LCB0aGlzLnBhZ2VJbmRleCsrLCB0cnVlICk7IC8vIFBhZ2Ugc2VxdWVuY2UgbnVtYmVyXG4gIHBhZ2VCdWZmZXJWaWV3LnNldFVpbnQ4KCAyNiwgdGhpcy5zZWdtZW50VGFibGVJbmRleCwgdHJ1ZSApOyAvLyBOdW1iZXIgb2Ygc2VnbWVudHMgaW4gcGFnZS5cbiAgcGFnZS5zZXQoIHRoaXMuc2VnbWVudFRhYmxlLnN1YmFycmF5KDAsIHRoaXMuc2VnbWVudFRhYmxlSW5kZXgpLCAyNyApOyAvLyBTZWdtZW50IFRhYmxlXG4gIHBhZ2Uuc2V0KCB0aGlzLnNlZ21lbnREYXRhLnN1YmFycmF5KDAsIHRoaXMuc2VnbWVudERhdGFJbmRleCksIDI3ICsgdGhpcy5zZWdtZW50VGFibGVJbmRleCApOyAvLyBTZWdtZW50IERhdGFcbiAgcGFnZUJ1ZmZlclZpZXcuc2V0VWludDMyKCAyMiwgdGhpcy5nZXRDaGVja3N1bSggcGFnZSApLCB0cnVlICk7IC8vIENoZWNrc3VtXG5cbiAgZ2xvYmFsWydwb3N0TWVzc2FnZSddKCB7bWVzc2FnZTogJ3BhZ2UnLCBwYWdlOiBwYWdlfSwgW3BhZ2UuYnVmZmVyXSApO1xuICB0aGlzLnNlZ21lbnRUYWJsZUluZGV4ID0gMDtcbiAgdGhpcy5zZWdtZW50RGF0YUluZGV4ID0gMDtcbiAgdGhpcy5mcmFtZXNJblBhZ2UgPSAwO1xuICBpZiAoIGdyYW51bGVQb3NpdGlvbiA+IDAgKSB7XG4gICAgdGhpcy5sYXN0UG9zaXRpdmVHcmFudWxlUG9zaXRpb24gPSBncmFudWxlUG9zaXRpb247XG4gIH1cbn07XG5cbk9nZ09wdXNFbmNvZGVyLnByb3RvdHlwZS5pbml0Q2hlY2tzdW1UYWJsZSA9IGZ1bmN0aW9uKCl7XG4gIHRoaXMuY2hlY2tzdW1UYWJsZSA9IFtdO1xuICBmb3IgKCB2YXIgaSA9IDA7IGkgPCAyNTY7IGkrKyApIHtcbiAgICB2YXIgciA9IGkgPDwgMjQ7XG4gICAgZm9yICggdmFyIGogPSAwOyBqIDwgODsgaisrICkge1xuICAgICAgciA9ICgociAmIDB4ODAwMDAwMDApICE9IDApID8gKChyIDw8IDEpIF4gMHgwNGMxMWRiNykgOiAociA8PCAxKTtcbiAgICB9XG4gICAgdGhpcy5jaGVja3N1bVRhYmxlW2ldID0gKHIgJiAweGZmZmZmZmZmKTtcbiAgfVxufTtcblxuT2dnT3B1c0VuY29kZXIucHJvdG90eXBlLnNldE9wdXNDb250cm9sID0gZnVuY3Rpb24oIGNvbnRyb2wsIHZhbHVlICl7XG4gIHZhciBsb2NhdGlvbiA9IHRoaXMuX21hbGxvYyggNCApO1xuICB0aGlzLkhFQVAzMlsgbG9jYXRpb24gPj4gMiBdID0gdmFsdWU7XG4gIHRoaXMuX29wdXNfZW5jb2Rlcl9jdGwoIHRoaXMuZW5jb2RlciwgY29udHJvbCwgbG9jYXRpb24gKTtcbiAgdGhpcy5fZnJlZSggbG9jYXRpb24gKTtcbn07XG5cbk9nZ09wdXNFbmNvZGVyLnByb3RvdHlwZS5pbml0Q29kZWMgPSBmdW5jdGlvbigpIHtcbiAgdmFyIGVyckxvY2F0aW9uID0gdGhpcy5fbWFsbG9jKCA0ICk7XG4gIHRoaXMuZW5jb2RlciA9IHRoaXMuX29wdXNfZW5jb2Rlcl9jcmVhdGUoIHRoaXMuY29uZmlnLmVuY29kZXJTYW1wbGVSYXRlLCB0aGlzLmNvbmZpZy5udW1iZXJPZkNoYW5uZWxzLCB0aGlzLmNvbmZpZy5lbmNvZGVyQXBwbGljYXRpb24sIGVyckxvY2F0aW9uICk7XG4gIHRoaXMuX2ZyZWUoIGVyckxvY2F0aW9uICk7XG5cbiAgaWYgKCB0aGlzLmNvbmZpZy5lbmNvZGVyQml0UmF0ZSApIHtcbiAgICB0aGlzLnNldE9wdXNDb250cm9sKCA0MDAyLCB0aGlzLmNvbmZpZy5lbmNvZGVyQml0UmF0ZSApO1xuICB9XG5cbiAgaWYgKCB0aGlzLmNvbmZpZy5lbmNvZGVyQ29tcGxleGl0eSApIHtcbiAgICB0aGlzLnNldE9wdXNDb250cm9sKCA0MDEwLCB0aGlzLmNvbmZpZy5lbmNvZGVyQ29tcGxleGl0eSApO1xuICB9XG5cbiAgdGhpcy5lbmNvZGVyU2FtcGxlc1BlckNoYW5uZWwgPSB0aGlzLmNvbmZpZy5lbmNvZGVyU2FtcGxlUmF0ZSAqIHRoaXMuY29uZmlnLmVuY29kZXJGcmFtZVNpemUgLyAxMDAwO1xuICB0aGlzLmVuY29kZXJTYW1wbGVzUGVyQ2hhbm5lbFBvaW50ZXIgPSB0aGlzLl9tYWxsb2MoIDQgKTtcbiAgdGhpcy5IRUFQMzJbIHRoaXMuZW5jb2RlclNhbXBsZXNQZXJDaGFubmVsUG9pbnRlciA+PiAyIF0gPSB0aGlzLmVuY29kZXJTYW1wbGVzUGVyQ2hhbm5lbDtcblxuICB0aGlzLmVuY29kZXJCdWZmZXJMZW5ndGggPSB0aGlzLmVuY29kZXJTYW1wbGVzUGVyQ2hhbm5lbCAqIHRoaXMuY29uZmlnLm51bWJlck9mQ2hhbm5lbHM7XG4gIHRoaXMuZW5jb2RlckJ1ZmZlclBvaW50ZXIgPSB0aGlzLl9tYWxsb2MoIHRoaXMuZW5jb2RlckJ1ZmZlckxlbmd0aCAqIDQgKTsgLy8gNCBieXRlcyBwZXIgc2FtcGxlXG4gIHRoaXMuZW5jb2RlckJ1ZmZlciA9IHRoaXMuSEVBUEYzMi5zdWJhcnJheSggdGhpcy5lbmNvZGVyQnVmZmVyUG9pbnRlciA+PiAyLCAodGhpcy5lbmNvZGVyQnVmZmVyUG9pbnRlciA+PiAyKSArIHRoaXMuZW5jb2RlckJ1ZmZlckxlbmd0aCApO1xuXG4gIHRoaXMuZW5jb2Rlck91dHB1dE1heExlbmd0aCA9IDQwMDA7XG4gIHRoaXMuZW5jb2Rlck91dHB1dFBvaW50ZXIgPSB0aGlzLl9tYWxsb2MoIHRoaXMuZW5jb2Rlck91dHB1dE1heExlbmd0aCApO1xuICB0aGlzLmVuY29kZXJPdXRwdXRCdWZmZXIgPSB0aGlzLkhFQVBVOC5zdWJhcnJheSggdGhpcy5lbmNvZGVyT3V0cHV0UG9pbnRlciwgdGhpcy5lbmNvZGVyT3V0cHV0UG9pbnRlciArIHRoaXMuZW5jb2Rlck91dHB1dE1heExlbmd0aCApO1xufTtcblxuT2dnT3B1c0VuY29kZXIucHJvdG90eXBlLmluaXRSZXNhbXBsZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIGVyckxvY2F0aW9uID0gdGhpcy5fbWFsbG9jKCA0ICk7XG4gIHRoaXMucmVzYW1wbGVyID0gdGhpcy5fc3BlZXhfcmVzYW1wbGVyX2luaXQoIHRoaXMuY29uZmlnLm51bWJlck9mQ2hhbm5lbHMsIHRoaXMuY29uZmlnLm9yaWdpbmFsU2FtcGxlUmF0ZSwgdGhpcy5jb25maWcuZW5jb2RlclNhbXBsZVJhdGUsIHRoaXMuY29uZmlnLnJlc2FtcGxlUXVhbGl0eSwgZXJyTG9jYXRpb24gKTtcbiAgdGhpcy5fZnJlZSggZXJyTG9jYXRpb24gKTtcblxuICB0aGlzLnJlc2FtcGxlQnVmZmVySW5kZXggPSAwO1xuICB0aGlzLnJlc2FtcGxlU2FtcGxlc1BlckNoYW5uZWwgPSB0aGlzLmNvbmZpZy5vcmlnaW5hbFNhbXBsZVJhdGUgKiB0aGlzLmNvbmZpZy5lbmNvZGVyRnJhbWVTaXplIC8gMTAwMDtcbiAgdGhpcy5yZXNhbXBsZVNhbXBsZXNQZXJDaGFubmVsUG9pbnRlciA9IHRoaXMuX21hbGxvYyggNCApO1xuICB0aGlzLkhFQVAzMlsgdGhpcy5yZXNhbXBsZVNhbXBsZXNQZXJDaGFubmVsUG9pbnRlciA+PiAyIF0gPSB0aGlzLnJlc2FtcGxlU2FtcGxlc1BlckNoYW5uZWw7XG5cbiAgdGhpcy5yZXNhbXBsZUJ1ZmZlckxlbmd0aCA9IHRoaXMucmVzYW1wbGVTYW1wbGVzUGVyQ2hhbm5lbCAqIHRoaXMuY29uZmlnLm51bWJlck9mQ2hhbm5lbHM7XG4gIHRoaXMucmVzYW1wbGVCdWZmZXJQb2ludGVyID0gdGhpcy5fbWFsbG9jKCB0aGlzLnJlc2FtcGxlQnVmZmVyTGVuZ3RoICogNCApOyAvLyA0IGJ5dGVzIHBlciBzYW1wbGVcbiAgdGhpcy5yZXNhbXBsZUJ1ZmZlciA9IHRoaXMuSEVBUEYzMi5zdWJhcnJheSggdGhpcy5yZXNhbXBsZUJ1ZmZlclBvaW50ZXIgPj4gMiwgKHRoaXMucmVzYW1wbGVCdWZmZXJQb2ludGVyID4+IDIpICsgdGhpcy5yZXNhbXBsZUJ1ZmZlckxlbmd0aCApO1xufTtcblxuT2dnT3B1c0VuY29kZXIucHJvdG90eXBlLmludGVybGVhdmUgPSBmdW5jdGlvbiggYnVmZmVycyApIHtcbiAgZm9yICggdmFyIGkgPSAwOyBpIDwgdGhpcy5jb25maWcuYnVmZmVyTGVuZ3RoOyBpKysgKSB7XG4gICAgZm9yICggdmFyIGNoYW5uZWwgPSAwOyBjaGFubmVsIDwgdGhpcy5jb25maWcubnVtYmVyT2ZDaGFubmVsczsgY2hhbm5lbCsrICkge1xuICAgICAgdGhpcy5pbnRlcmxlYXZlZEJ1ZmZlcnNbIGkgKiB0aGlzLmNvbmZpZy5udW1iZXJPZkNoYW5uZWxzICsgY2hhbm5lbCBdID0gYnVmZmVyc1sgY2hhbm5lbCBdWyBpIF07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRoaXMuaW50ZXJsZWF2ZWRCdWZmZXJzO1xufTtcblxuT2dnT3B1c0VuY29kZXIucHJvdG90eXBlLnNlZ21lbnRQYWNrZXQgPSBmdW5jdGlvbiggcGFja2V0TGVuZ3RoICkge1xuICB2YXIgcGFja2V0SW5kZXggPSAwO1xuXG4gIHdoaWxlICggcGFja2V0TGVuZ3RoID49IDAgKSB7XG5cbiAgICBpZiAoIHRoaXMuc2VnbWVudFRhYmxlSW5kZXggPT09IDI1NSApIHtcbiAgICAgIHRoaXMuZ2VuZXJhdGVQYWdlKCk7XG4gICAgICB0aGlzLmhlYWRlclR5cGUgPSAxO1xuICAgIH1cblxuICAgIHZhciBzZWdtZW50TGVuZ3RoID0gTWF0aC5taW4oIHBhY2tldExlbmd0aCwgMjU1ICk7XG4gICAgdGhpcy5zZWdtZW50VGFibGVbIHRoaXMuc2VnbWVudFRhYmxlSW5kZXgrKyBdID0gc2VnbWVudExlbmd0aDtcbiAgICB0aGlzLnNlZ21lbnREYXRhLnNldCggdGhpcy5lbmNvZGVyT3V0cHV0QnVmZmVyLnN1YmFycmF5KCBwYWNrZXRJbmRleCwgcGFja2V0SW5kZXggKyBzZWdtZW50TGVuZ3RoICksIHRoaXMuc2VnbWVudERhdGFJbmRleCApO1xuICAgIHRoaXMuc2VnbWVudERhdGFJbmRleCArPSBzZWdtZW50TGVuZ3RoO1xuICAgIHBhY2tldEluZGV4ICs9IHNlZ21lbnRMZW5ndGg7XG4gICAgcGFja2V0TGVuZ3RoIC09IDI1NTtcbiAgfVxuXG4gIHRoaXMuZ3JhbnVsZVBvc2l0aW9uICs9ICggNDggKiB0aGlzLmNvbmZpZy5lbmNvZGVyRnJhbWVTaXplICk7XG4gIGlmICggdGhpcy5zZWdtZW50VGFibGVJbmRleCA9PT0gMjU1ICkge1xuICAgIHRoaXMuZ2VuZXJhdGVQYWdlKCk7XG4gICAgdGhpcy5oZWFkZXJUeXBlID0gMDtcbiAgfVxufTtcblxuXG5pZiAoIU1vZHVsZSkge1xuICBNb2R1bGUgPSB7fTtcbn1cblxuTW9kdWxlWydtYWluUmVhZHknXSA9IG1haW5SZWFkeTtcbk1vZHVsZVsnT2dnT3B1c0VuY29kZXInXSA9IE9nZ09wdXNFbmNvZGVyO1xuTW9kdWxlWydvblJ1bnRpbWVJbml0aWFsaXplZCddID0gbWFpblJlYWR5UmVzb2x2ZTtcblxubW9kdWxlLmV4cG9ydHMgPSBNb2R1bGU7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/encoderWorker.js\n");

/***/ })

/******/ });
});


// Sometimes an existing Module object exists with properties
// meant to overwrite the default module functionality. Here
// we collect those properties and reapply _after_ we configure
// the current environment's defaults to avoid having to be so
// defensive during initialization.
var moduleOverrides = {};
var key;
for (key in Module) {
  if (Module.hasOwnProperty(key)) {
    moduleOverrides[key] = Module[key];
  }
}

Module['arguments'] = [];
Module['thisProgram'] = './this.program';
Module['quit'] = function(status, toThrow) {
  throw toThrow;
};
Module['preRun'] = [];
Module['postRun'] = [];

// Determine the runtime environment we are in. You can customize this by
// setting the ENVIRONMENT setting at compile time (see settings.js).

var ENVIRONMENT_IS_WEB = false;
var ENVIRONMENT_IS_WORKER = false;
var ENVIRONMENT_IS_NODE = false;
var ENVIRONMENT_IS_SHELL = false;
ENVIRONMENT_IS_WEB = typeof window === 'object';
ENVIRONMENT_IS_WORKER = typeof importScripts === 'function';
ENVIRONMENT_IS_NODE = typeof process === 'object' && typeof require === 'function' && !ENVIRONMENT_IS_WEB && !ENVIRONMENT_IS_WORKER;
ENVIRONMENT_IS_SHELL = !ENVIRONMENT_IS_WEB && !ENVIRONMENT_IS_NODE && !ENVIRONMENT_IS_WORKER;


// Three configurations we can be running in:
// 1) We could be the application main() thread running in the main JS UI thread. (ENVIRONMENT_IS_WORKER == false and ENVIRONMENT_IS_PTHREAD == false)
// 2) We could be the application main() thread proxied to worker. (with Emscripten -s PROXY_TO_WORKER=1) (ENVIRONMENT_IS_WORKER == true, ENVIRONMENT_IS_PTHREAD == false)
// 3) We could be an application pthread running in a worker. (ENVIRONMENT_IS_WORKER == true and ENVIRONMENT_IS_PTHREAD == true)

// `/` should be present at the end if `scriptDirectory` is not empty
var scriptDirectory = '';
function locateFile(path) {
  if (Module['locateFile']) {
    return Module['locateFile'](path, scriptDirectory);
  } else {
    return scriptDirectory + path;
  }
}

if (ENVIRONMENT_IS_NODE) {
  scriptDirectory = __dirname + '/';

  // Expose functionality in the same simple way that the shells work
  // Note that we pollute the global namespace here, otherwise we break in node
  var nodeFS;
  var nodePath;

  Module['read'] = function shell_read(filename, binary) {
    var ret;
      if (!nodeFS) nodeFS = require('fs');
      if (!nodePath) nodePath = require('path');
      filename = nodePath['normalize'](filename);
      ret = nodeFS['readFileSync'](filename);
    return binary ? ret : ret.toString();
  };

  Module['readBinary'] = function readBinary(filename) {
    var ret = Module['read'](filename, true);
    if (!ret.buffer) {
      ret = new Uint8Array(ret);
    }
    assert(ret.buffer);
    return ret;
  };

  if (process['argv'].length > 1) {
    Module['thisProgram'] = process['argv'][1].replace(/\\/g, '/');
  }

  Module['arguments'] = process['argv'].slice(2);

  if (typeof module !== 'undefined') {
    module['exports'] = Module;
  }

  process['on']('uncaughtException', function(ex) {
    // suppress ExitStatus exceptions from showing an error
    if (!(ex instanceof ExitStatus)) {
      throw ex;
    }
  });
  // Currently node will swallow unhandled rejections, but this behavior is
  // deprecated, and in the future it will exit with error status.
  process['on']('unhandledRejection', abort);

  Module['quit'] = function(status) {
    process['exit'](status);
  };

  Module['inspect'] = function () { return '[Emscripten Module object]'; };
} else
if (ENVIRONMENT_IS_SHELL) {


  if (typeof read != 'undefined') {
    Module['read'] = function shell_read(f) {
      return read(f);
    };
  }

  Module['readBinary'] = function readBinary(f) {
    var data;
    if (typeof readbuffer === 'function') {
      return new Uint8Array(readbuffer(f));
    }
    data = read(f, 'binary');
    assert(typeof data === 'object');
    return data;
  };

  if (typeof scriptArgs != 'undefined') {
    Module['arguments'] = scriptArgs;
  } else if (typeof arguments != 'undefined') {
    Module['arguments'] = arguments;
  }

  if (typeof quit === 'function') {
    Module['quit'] = function(status) {
      quit(status);
    }
  }
} else
if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
  if (ENVIRONMENT_IS_WORKER) { // Check worker, not web, since window could be polyfilled
    scriptDirectory = self.location.href;
  } else if (document.currentScript) { // web
    scriptDirectory = document.currentScript.src;
  }
  // blob urls look like blob:http://site.com/etc/etc and we cannot infer anything from them.
  // otherwise, slice off the final part of the url to find the script directory.
  // if scriptDirectory does not contain a slash, lastIndexOf will return -1,
  // and scriptDirectory will correctly be replaced with an empty string.
  if (scriptDirectory.indexOf('blob:') !== 0) {
    scriptDirectory = scriptDirectory.substr(0, scriptDirectory.lastIndexOf('/')+1);
  } else {
    scriptDirectory = '';
  }


  Module['read'] = function shell_read(url) {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', url, false);
      xhr.send(null);
      return xhr.responseText;
  };

  if (ENVIRONMENT_IS_WORKER) {
    Module['readBinary'] = function readBinary(url) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, false);
        xhr.responseType = 'arraybuffer';
        xhr.send(null);
        return new Uint8Array(xhr.response);
    };
  }

  Module['readAsync'] = function readAsync(url, onload, onerror) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'arraybuffer';
    xhr.onload = function xhr_onload() {
      if (xhr.status == 200 || (xhr.status == 0 && xhr.response)) { // file URLs can return 0
        onload(xhr.response);
        return;
      }
      onerror();
    };
    xhr.onerror = onerror;
    xhr.send(null);
  };

  Module['setWindowTitle'] = function(title) { document.title = title };
} else
{
}

// Set up the out() and err() hooks, which are how we can print to stdout or
// stderr, respectively.
// If the user provided Module.print or printErr, use that. Otherwise,
// console.log is checked first, as 'print' on the web will open a print dialogue
// printErr is preferable to console.warn (works better in shells)
// bind(console) is necessary to fix IE/Edge closed dev tools panel behavior.
var out = Module['print'] || (typeof console !== 'undefined' ? console.log.bind(console) : (typeof print !== 'undefined' ? print : null));
var err = Module['printErr'] || (typeof printErr !== 'undefined' ? printErr : ((typeof console !== 'undefined' && console.warn.bind(console)) || out));

// Merge back in the overrides
for (key in moduleOverrides) {
  if (moduleOverrides.hasOwnProperty(key)) {
    Module[key] = moduleOverrides[key];
  }
}
// Free the object hierarchy contained in the overrides, this lets the GC
// reclaim data used e.g. in memoryInitializerRequest, which is a large typed array.
moduleOverrides = undefined;

// perform assertions in shell.js after we set up out() and err(), as otherwise if an assertion fails it cannot print the message



// Copyright 2017 The Emscripten Authors.  All rights reserved.
// Emscripten is available under two separate licenses, the MIT license and the
// University of Illinois/NCSA Open Source License.  Both these licenses can be
// found in the LICENSE file.

// {{PREAMBLE_ADDITIONS}}

var STACK_ALIGN = 16;


function staticAlloc(size) {
  var ret = STATICTOP;
  STATICTOP = (STATICTOP + size + 15) & -16;
  return ret;
}

function dynamicAlloc(size) {
  var ret = HEAP32[DYNAMICTOP_PTR>>2];
  var end = (ret + size + 15) & -16;
  HEAP32[DYNAMICTOP_PTR>>2] = end;
  if (end >= TOTAL_MEMORY) {
    var success = enlargeMemory();
    if (!success) {
      HEAP32[DYNAMICTOP_PTR>>2] = ret;
      return 0;
    }
  }
  return ret;
}

function alignMemory(size, factor) {
  if (!factor) factor = STACK_ALIGN; // stack alignment (16-byte) by default
  var ret = size = Math.ceil(size / factor) * factor;
  return ret;
}

function getNativeTypeSize(type) {
  switch (type) {
    case 'i1': case 'i8': return 1;
    case 'i16': return 2;
    case 'i32': return 4;
    case 'i64': return 8;
    case 'float': return 4;
    case 'double': return 8;
    default: {
      if (type[type.length-1] === '*') {
        return 4; // A pointer
      } else if (type[0] === 'i') {
        var bits = parseInt(type.substr(1));
        assert(bits % 8 === 0);
        return bits / 8;
      } else {
        return 0;
      }
    }
  }
}

function warnOnce(text) {
  if (!warnOnce.shown) warnOnce.shown = {};
  if (!warnOnce.shown[text]) {
    warnOnce.shown[text] = 1;
    err(text);
  }
}

var asm2wasmImports = { // special asm2wasm imports
    "f64-rem": function(x, y) {
        return x % y;
    },
    "debugger": function() {
        debugger;
    }
};



var jsCallStartIndex = 1;
var functionPointers = new Array(0);

// 'sig' parameter is only used on LLVM wasm backend
function addFunction(func, sig) {
  var base = 0;
  for (var i = base; i < base + 0; i++) {
    if (!functionPointers[i]) {
      functionPointers[i] = func;
      return jsCallStartIndex + i;
    }
  }
  throw 'Finished up all reserved function pointers. Use a higher value for RESERVED_FUNCTION_POINTERS.';
}

function removeFunction(index) {
  functionPointers[index-jsCallStartIndex] = null;
}

var funcWrappers = {};

function getFuncWrapper(func, sig) {
  if (!func) return; // on null pointer, return undefined
  assert(sig);
  if (!funcWrappers[sig]) {
    funcWrappers[sig] = {};
  }
  var sigCache = funcWrappers[sig];
  if (!sigCache[func]) {
    // optimize away arguments usage in common cases
    if (sig.length === 1) {
      sigCache[func] = function dynCall_wrapper() {
        return dynCall(sig, func);
      };
    } else if (sig.length === 2) {
      sigCache[func] = function dynCall_wrapper(arg) {
        return dynCall(sig, func, [arg]);
      };
    } else {
      // general case
      sigCache[func] = function dynCall_wrapper() {
        return dynCall(sig, func, Array.prototype.slice.call(arguments));
      };
    }
  }
  return sigCache[func];
}


function makeBigInt(low, high, unsigned) {
  return unsigned ? ((+((low>>>0)))+((+((high>>>0)))*4294967296.0)) : ((+((low>>>0)))+((+((high|0)))*4294967296.0));
}

function dynCall(sig, ptr, args) {
  if (args && args.length) {
    return Module['dynCall_' + sig].apply(null, [ptr].concat(args));
  } else {
    return Module['dynCall_' + sig].call(null, ptr);
  }
}

var tempRet0 = 0;

var setTempRet0 = function(value) {
  tempRet0 = value;
}

var getTempRet0 = function() {
  return tempRet0;
}


var Runtime = {
  // FIXME backwards compatibility layer for ports. Support some Runtime.*
  //       for now, fix it there, then remove it from here. That way we
  //       can minimize any period of breakage.
  dynCall: dynCall, // for SDL2 port
};

// The address globals begin at. Very low in memory, for code size and optimization opportunities.
// Above 0 is static memory, starting with globals.
// Then the stack.
// Then 'dynamic' memory for sbrk.
var GLOBAL_BASE = 1024;


// === Preamble library stuff ===

// Documentation for the public APIs defined in this file must be updated in:
//    site/source/docs/api_reference/preamble.js.rst
// A prebuilt local version of the documentation is available at:
//    site/build/text/docs/api_reference/preamble.js.txt
// You can also build docs locally as HTML or other formats in site/
// An online HTML version (which may be of a different version of Emscripten)
//    is up at http://kripken.github.io/emscripten-site/docs/api_reference/preamble.js.html



//========================================
// Runtime essentials
//========================================

// whether we are quitting the application. no code should run after this.
// set in exit() and abort()
var ABORT = false;

// set by exit() and abort().  Passed to 'onExit' handler.
// NOTE: This is also used as the process return code code in shell environments
// but only when noExitRuntime is false.
var EXITSTATUS = 0;

/** @type {function(*, string=)} */
function assert(condition, text) {
  if (!condition) {
    abort('Assertion failed: ' + text);
  }
}

var globalScope = this;

// Returns the C function with a specified identifier (for C++, you need to do manual name mangling)
function getCFunc(ident) {
  var func = Module['_' + ident]; // closure exported function
  assert(func, 'Cannot call unknown function ' + ident + ', make sure it is exported');
  return func;
}

var JSfuncs = {
  // Helpers for cwrap -- it can't refer to Runtime directly because it might
  // be renamed by closure, instead it calls JSfuncs['stackSave'].body to find
  // out what the minified function name is.
  'stackSave': function() {
    stackSave()
  },
  'stackRestore': function() {
    stackRestore()
  },
  // type conversion from js to c
  'arrayToC' : function(arr) {
    var ret = stackAlloc(arr.length);
    writeArrayToMemory(arr, ret);
    return ret;
  },
  'stringToC' : function(str) {
    var ret = 0;
    if (str !== null && str !== undefined && str !== 0) { // null string
      // at most 4 bytes per UTF-8 code point, +1 for the trailing '\0'
      var len = (str.length << 2) + 1;
      ret = stackAlloc(len);
      stringToUTF8(str, ret, len);
    }
    return ret;
  }
};

// For fast lookup of conversion functions
var toC = {
  'string': JSfuncs['stringToC'], 'array': JSfuncs['arrayToC']
};


// C calling interface.
function ccall(ident, returnType, argTypes, args, opts) {
  function convertReturnValue(ret) {
    if (returnType === 'string') return Pointer_stringify(ret);
    if (returnType === 'boolean') return Boolean(ret);
    return ret;
  }

  var func = getCFunc(ident);
  var cArgs = [];
  var stack = 0;
  if (args) {
    for (var i = 0; i < args.length; i++) {
      var converter = toC[argTypes[i]];
      if (converter) {
        if (stack === 0) stack = stackSave();
        cArgs[i] = converter(args[i]);
      } else {
        cArgs[i] = args[i];
      }
    }
  }
  var ret = func.apply(null, cArgs);
  ret = convertReturnValue(ret);
  if (stack !== 0) stackRestore(stack);
  return ret;
}

function cwrap(ident, returnType, argTypes, opts) {
  argTypes = argTypes || [];
  // When the function takes numbers and returns a number, we can just return
  // the original function
  var numericArgs = argTypes.every(function(type){ return type === 'number'});
  var numericRet = returnType !== 'string';
  if (numericRet && numericArgs && !opts) {
    return getCFunc(ident);
  }
  return function() {
    return ccall(ident, returnType, argTypes, arguments, opts);
  }
}

/** @type {function(number, number, string, boolean=)} */
function setValue(ptr, value, type, noSafe) {
  type = type || 'i8';
  if (type.charAt(type.length-1) === '*') type = 'i32'; // pointers are 32-bit
    switch(type) {
      case 'i1': HEAP8[((ptr)>>0)]=value; break;
      case 'i8': HEAP8[((ptr)>>0)]=value; break;
      case 'i16': HEAP16[((ptr)>>1)]=value; break;
      case 'i32': HEAP32[((ptr)>>2)]=value; break;
      case 'i64': (tempI64 = [value>>>0,(tempDouble=value,(+(Math_abs(tempDouble))) >= 1.0 ? (tempDouble > 0.0 ? ((Math_min((+(Math_floor((tempDouble)/4294967296.0))), 4294967295.0))|0)>>>0 : (~~((+(Math_ceil((tempDouble - +(((~~(tempDouble)))>>>0))/4294967296.0)))))>>>0) : 0)],HEAP32[((ptr)>>2)]=tempI64[0],HEAP32[(((ptr)+(4))>>2)]=tempI64[1]); break;
      case 'float': HEAPF32[((ptr)>>2)]=value; break;
      case 'double': HEAPF64[((ptr)>>3)]=value; break;
      default: abort('invalid type for setValue: ' + type);
    }
}

/** @type {function(number, string, boolean=)} */
function getValue(ptr, type, noSafe) {
  type = type || 'i8';
  if (type.charAt(type.length-1) === '*') type = 'i32'; // pointers are 32-bit
    switch(type) {
      case 'i1': return HEAP8[((ptr)>>0)];
      case 'i8': return HEAP8[((ptr)>>0)];
      case 'i16': return HEAP16[((ptr)>>1)];
      case 'i32': return HEAP32[((ptr)>>2)];
      case 'i64': return HEAP32[((ptr)>>2)];
      case 'float': return HEAPF32[((ptr)>>2)];
      case 'double': return HEAPF64[((ptr)>>3)];
      default: abort('invalid type for getValue: ' + type);
    }
  return null;
}

var ALLOC_NORMAL = 0; // Tries to use _malloc()
var ALLOC_STACK = 1; // Lives for the duration of the current function call
var ALLOC_STATIC = 2; // Cannot be freed
var ALLOC_DYNAMIC = 3; // Cannot be freed except through sbrk
var ALLOC_NONE = 4; // Do not allocate

// allocate(): This is for internal use. You can use it yourself as well, but the interface
//             is a little tricky (see docs right below). The reason is that it is optimized
//             for multiple syntaxes to save space in generated code. So you should
//             normally not use allocate(), and instead allocate memory using _malloc(),
//             initialize it with setValue(), and so forth.
// @slab: An array of data, or a number. If a number, then the size of the block to allocate,
//        in *bytes* (note that this is sometimes confusing: the next parameter does not
//        affect this!)
// @types: Either an array of types, one for each byte (or 0 if no type at that position),
//         or a single type which is used for the entire block. This only matters if there
//         is initial data - if @slab is a number, then this does not matter at all and is
//         ignored.
// @allocator: How to allocate memory, see ALLOC_*
/** @type {function((TypedArray|Array<number>|number), string, number, number=)} */
function allocate(slab, types, allocator, ptr) {
  var zeroinit, size;
  if (typeof slab === 'number') {
    zeroinit = true;
    size = slab;
  } else {
    zeroinit = false;
    size = slab.length;
  }

  var singleType = typeof types === 'string' ? types : null;

  var ret;
  if (allocator == ALLOC_NONE) {
    ret = ptr;
  } else {
    ret = [typeof _malloc === 'function' ? _malloc : staticAlloc, stackAlloc, staticAlloc, dynamicAlloc][allocator === undefined ? ALLOC_STATIC : allocator](Math.max(size, singleType ? 1 : types.length));
  }

  if (zeroinit) {
    var stop;
    ptr = ret;
    assert((ret & 3) == 0);
    stop = ret + (size & ~3);
    for (; ptr < stop; ptr += 4) {
      HEAP32[((ptr)>>2)]=0;
    }
    stop = ret + size;
    while (ptr < stop) {
      HEAP8[((ptr++)>>0)]=0;
    }
    return ret;
  }

  if (singleType === 'i8') {
    if (slab.subarray || slab.slice) {
      HEAPU8.set(/** @type {!Uint8Array} */ (slab), ret);
    } else {
      HEAPU8.set(new Uint8Array(slab), ret);
    }
    return ret;
  }

  var i = 0, type, typeSize, previousType;
  while (i < size) {
    var curr = slab[i];

    type = singleType || types[i];
    if (type === 0) {
      i++;
      continue;
    }

    if (type == 'i64') type = 'i32'; // special case: we have one i32 here, and one i32 later

    setValue(ret+i, curr, type);

    // no need to look up size unless type changes, so cache it
    if (previousType !== type) {
      typeSize = getNativeTypeSize(type);
      previousType = type;
    }
    i += typeSize;
  }

  return ret;
}

// Allocate memory during any stage of startup - static memory early on, dynamic memory later, malloc when ready
function getMemory(size) {
  if (!staticSealed) return staticAlloc(size);
  if (!runtimeInitialized) return dynamicAlloc(size);
  return _malloc(size);
}

/** @type {function(number, number=)} */
function Pointer_stringify(ptr, length) {
  if (length === 0 || !ptr) return '';
  // Find the length, and check for UTF while doing so
  var hasUtf = 0;
  var t;
  var i = 0;
  while (1) {
    t = HEAPU8[(((ptr)+(i))>>0)];
    hasUtf |= t;
    if (t == 0 && !length) break;
    i++;
    if (length && i == length) break;
  }
  if (!length) length = i;

  var ret = '';

  if (hasUtf < 128) {
    var MAX_CHUNK = 1024; // split up into chunks, because .apply on a huge string can overflow the stack
    var curr;
    while (length > 0) {
      curr = String.fromCharCode.apply(String, HEAPU8.subarray(ptr, ptr + Math.min(length, MAX_CHUNK)));
      ret = ret ? ret + curr : curr;
      ptr += MAX_CHUNK;
      length -= MAX_CHUNK;
    }
    return ret;
  }
  return UTF8ToString(ptr);
}

// Given a pointer 'ptr' to a null-terminated ASCII-encoded string in the emscripten HEAP, returns
// a copy of that string as a Javascript String object.

function AsciiToString(ptr) {
  var str = '';
  while (1) {
    var ch = HEAP8[((ptr++)>>0)];
    if (!ch) return str;
    str += String.fromCharCode(ch);
  }
}

// Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
// null-terminated and encoded in ASCII form. The copy will require at most str.length+1 bytes of space in the HEAP.

function stringToAscii(str, outPtr) {
  return writeAsciiToMemory(str, outPtr, false);
}

// Given a pointer 'ptr' to a null-terminated UTF8-encoded string in the given array that contains uint8 values, returns
// a copy of that string as a Javascript String object.

var UTF8Decoder = typeof TextDecoder !== 'undefined' ? new TextDecoder('utf8') : undefined;
function UTF8ArrayToString(u8Array, idx) {
  var endPtr = idx;
  // TextDecoder needs to know the byte length in advance, it doesn't stop on null terminator by itself.
  // Also, use the length info to avoid running tiny strings through TextDecoder, since .subarray() allocates garbage.
  while (u8Array[endPtr]) ++endPtr;

  if (endPtr - idx > 16 && u8Array.subarray && UTF8Decoder) {
    return UTF8Decoder.decode(u8Array.subarray(idx, endPtr));
  } else {
    var u0, u1, u2, u3, u4, u5;

    var str = '';
    while (1) {
      // For UTF8 byte structure, see:
      // http://en.wikipedia.org/wiki/UTF-8#Description
      // https://www.ietf.org/rfc/rfc2279.txt
      // https://tools.ietf.org/html/rfc3629
      u0 = u8Array[idx++];
      if (!u0) return str;
      if (!(u0 & 0x80)) { str += String.fromCharCode(u0); continue; }
      u1 = u8Array[idx++] & 63;
      if ((u0 & 0xE0) == 0xC0) { str += String.fromCharCode(((u0 & 31) << 6) | u1); continue; }
      u2 = u8Array[idx++] & 63;
      if ((u0 & 0xF0) == 0xE0) {
        u0 = ((u0 & 15) << 12) | (u1 << 6) | u2;
      } else {
        u3 = u8Array[idx++] & 63;
        if ((u0 & 0xF8) == 0xF0) {
          u0 = ((u0 & 7) << 18) | (u1 << 12) | (u2 << 6) | u3;
        } else {
          u4 = u8Array[idx++] & 63;
          if ((u0 & 0xFC) == 0xF8) {
            u0 = ((u0 & 3) << 24) | (u1 << 18) | (u2 << 12) | (u3 << 6) | u4;
          } else {
            u5 = u8Array[idx++] & 63;
            u0 = ((u0 & 1) << 30) | (u1 << 24) | (u2 << 18) | (u3 << 12) | (u4 << 6) | u5;
          }
        }
      }
      if (u0 < 0x10000) {
        str += String.fromCharCode(u0);
      } else {
        var ch = u0 - 0x10000;
        str += String.fromCharCode(0xD800 | (ch >> 10), 0xDC00 | (ch & 0x3FF));
      }
    }
  }
}

// Given a pointer 'ptr' to a null-terminated UTF8-encoded string in the emscripten HEAP, returns
// a copy of that string as a Javascript String object.

function UTF8ToString(ptr) {
  return UTF8ArrayToString(HEAPU8,ptr);
}

// Copies the given Javascript String object 'str' to the given byte array at address 'outIdx',
// encoded in UTF8 form and null-terminated. The copy will require at most str.length*4+1 bytes of space in the HEAP.
// Use the function lengthBytesUTF8 to compute the exact number of bytes (excluding null terminator) that this function will write.
// Parameters:
//   str: the Javascript string to copy.
//   outU8Array: the array to copy to. Each index in this array is assumed to be one 8-byte element.
//   outIdx: The starting offset in the array to begin the copying.
//   maxBytesToWrite: The maximum number of bytes this function can write to the array.
//                    This count should include the null terminator,
//                    i.e. if maxBytesToWrite=1, only the null terminator will be written and nothing else.
//                    maxBytesToWrite=0 does not write any bytes to the output, not even the null terminator.
// Returns the number of bytes written, EXCLUDING the null terminator.

function stringToUTF8Array(str, outU8Array, outIdx, maxBytesToWrite) {
  if (!(maxBytesToWrite > 0)) // Parameter maxBytesToWrite is not optional. Negative values, 0, null, undefined and false each don't write out any bytes.
    return 0;

  var startIdx = outIdx;
  var endIdx = outIdx + maxBytesToWrite - 1; // -1 for string null terminator.
  for (var i = 0; i < str.length; ++i) {
    // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! So decode UTF16->UTF32->UTF8.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    // For UTF8 byte structure, see http://en.wikipedia.org/wiki/UTF-8#Description and https://www.ietf.org/rfc/rfc2279.txt and https://tools.ietf.org/html/rfc3629
    var u = str.charCodeAt(i); // possibly a lead surrogate
    if (u >= 0xD800 && u <= 0xDFFF) {
      var u1 = str.charCodeAt(++i);
      u = 0x10000 + ((u & 0x3FF) << 10) | (u1 & 0x3FF);
    }
    if (u <= 0x7F) {
      if (outIdx >= endIdx) break;
      outU8Array[outIdx++] = u;
    } else if (u <= 0x7FF) {
      if (outIdx + 1 >= endIdx) break;
      outU8Array[outIdx++] = 0xC0 | (u >> 6);
      outU8Array[outIdx++] = 0x80 | (u & 63);
    } else if (u <= 0xFFFF) {
      if (outIdx + 2 >= endIdx) break;
      outU8Array[outIdx++] = 0xE0 | (u >> 12);
      outU8Array[outIdx++] = 0x80 | ((u >> 6) & 63);
      outU8Array[outIdx++] = 0x80 | (u & 63);
    } else if (u <= 0x1FFFFF) {
      if (outIdx + 3 >= endIdx) break;
      outU8Array[outIdx++] = 0xF0 | (u >> 18);
      outU8Array[outIdx++] = 0x80 | ((u >> 12) & 63);
      outU8Array[outIdx++] = 0x80 | ((u >> 6) & 63);
      outU8Array[outIdx++] = 0x80 | (u & 63);
    } else if (u <= 0x3FFFFFF) {
      if (outIdx + 4 >= endIdx) break;
      outU8Array[outIdx++] = 0xF8 | (u >> 24);
      outU8Array[outIdx++] = 0x80 | ((u >> 18) & 63);
      outU8Array[outIdx++] = 0x80 | ((u >> 12) & 63);
      outU8Array[outIdx++] = 0x80 | ((u >> 6) & 63);
      outU8Array[outIdx++] = 0x80 | (u & 63);
    } else {
      if (outIdx + 5 >= endIdx) break;
      outU8Array[outIdx++] = 0xFC | (u >> 30);
      outU8Array[outIdx++] = 0x80 | ((u >> 24) & 63);
      outU8Array[outIdx++] = 0x80 | ((u >> 18) & 63);
      outU8Array[outIdx++] = 0x80 | ((u >> 12) & 63);
      outU8Array[outIdx++] = 0x80 | ((u >> 6) & 63);
      outU8Array[outIdx++] = 0x80 | (u & 63);
    }
  }
  // Null-terminate the pointer to the buffer.
  outU8Array[outIdx] = 0;
  return outIdx - startIdx;
}

// Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
// null-terminated and encoded in UTF8 form. The copy will require at most str.length*4+1 bytes of space in the HEAP.
// Use the function lengthBytesUTF8 to compute the exact number of bytes (excluding null terminator) that this function will write.
// Returns the number of bytes written, EXCLUDING the null terminator.

function stringToUTF8(str, outPtr, maxBytesToWrite) {
  return stringToUTF8Array(str, HEAPU8,outPtr, maxBytesToWrite);
}

// Returns the number of bytes the given Javascript string takes if encoded as a UTF8 byte array, EXCLUDING the null terminator byte.

function lengthBytesUTF8(str) {
  var len = 0;
  for (var i = 0; i < str.length; ++i) {
    // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! So decode UTF16->UTF32->UTF8.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    var u = str.charCodeAt(i); // possibly a lead surrogate
    if (u >= 0xD800 && u <= 0xDFFF) u = 0x10000 + ((u & 0x3FF) << 10) | (str.charCodeAt(++i) & 0x3FF);
    if (u <= 0x7F) {
      ++len;
    } else if (u <= 0x7FF) {
      len += 2;
    } else if (u <= 0xFFFF) {
      len += 3;
    } else if (u <= 0x1FFFFF) {
      len += 4;
    } else if (u <= 0x3FFFFFF) {
      len += 5;
    } else {
      len += 6;
    }
  }
  return len;
}

// Given a pointer 'ptr' to a null-terminated UTF16LE-encoded string in the emscripten HEAP, returns
// a copy of that string as a Javascript String object.

var UTF16Decoder = typeof TextDecoder !== 'undefined' ? new TextDecoder('utf-16le') : undefined;
function UTF16ToString(ptr) {
  var endPtr = ptr;
  // TextDecoder needs to know the byte length in advance, it doesn't stop on null terminator by itself.
  // Also, use the length info to avoid running tiny strings through TextDecoder, since .subarray() allocates garbage.
  var idx = endPtr >> 1;
  while (HEAP16[idx]) ++idx;
  endPtr = idx << 1;

  if (endPtr - ptr > 32 && UTF16Decoder) {
    return UTF16Decoder.decode(HEAPU8.subarray(ptr, endPtr));
  } else {
    var i = 0;

    var str = '';
    while (1) {
      var codeUnit = HEAP16[(((ptr)+(i*2))>>1)];
      if (codeUnit == 0) return str;
      ++i;
      // fromCharCode constructs a character from a UTF-16 code unit, so we can pass the UTF16 string right through.
      str += String.fromCharCode(codeUnit);
    }
  }
}

// Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
// null-terminated and encoded in UTF16 form. The copy will require at most str.length*4+2 bytes of space in the HEAP.
// Use the function lengthBytesUTF16() to compute the exact number of bytes (excluding null terminator) that this function will write.
// Parameters:
//   str: the Javascript string to copy.
//   outPtr: Byte address in Emscripten HEAP where to write the string to.
//   maxBytesToWrite: The maximum number of bytes this function can write to the array. This count should include the null
//                    terminator, i.e. if maxBytesToWrite=2, only the null terminator will be written and nothing else.
//                    maxBytesToWrite<2 does not write any bytes to the output, not even the null terminator.
// Returns the number of bytes written, EXCLUDING the null terminator.

function stringToUTF16(str, outPtr, maxBytesToWrite) {
  // Backwards compatibility: if max bytes is not specified, assume unsafe unbounded write is allowed.
  if (maxBytesToWrite === undefined) {
    maxBytesToWrite = 0x7FFFFFFF;
  }
  if (maxBytesToWrite < 2) return 0;
  maxBytesToWrite -= 2; // Null terminator.
  var startPtr = outPtr;
  var numCharsToWrite = (maxBytesToWrite < str.length*2) ? (maxBytesToWrite / 2) : str.length;
  for (var i = 0; i < numCharsToWrite; ++i) {
    // charCodeAt returns a UTF-16 encoded code unit, so it can be directly written to the HEAP.
    var codeUnit = str.charCodeAt(i); // possibly a lead surrogate
    HEAP16[((outPtr)>>1)]=codeUnit;
    outPtr += 2;
  }
  // Null-terminate the pointer to the HEAP.
  HEAP16[((outPtr)>>1)]=0;
  return outPtr - startPtr;
}

// Returns the number of bytes the given Javascript string takes if encoded as a UTF16 byte array, EXCLUDING the null terminator byte.

function lengthBytesUTF16(str) {
  return str.length*2;
}

function UTF32ToString(ptr) {
  var i = 0;

  var str = '';
  while (1) {
    var utf32 = HEAP32[(((ptr)+(i*4))>>2)];
    if (utf32 == 0)
      return str;
    ++i;
    // Gotcha: fromCharCode constructs a character from a UTF-16 encoded code (pair), not from a Unicode code point! So encode the code point to UTF-16 for constructing.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    if (utf32 >= 0x10000) {
      var ch = utf32 - 0x10000;
      str += String.fromCharCode(0xD800 | (ch >> 10), 0xDC00 | (ch & 0x3FF));
    } else {
      str += String.fromCharCode(utf32);
    }
  }
}

// Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
// null-terminated and encoded in UTF32 form. The copy will require at most str.length*4+4 bytes of space in the HEAP.
// Use the function lengthBytesUTF32() to compute the exact number of bytes (excluding null terminator) that this function will write.
// Parameters:
//   str: the Javascript string to copy.
//   outPtr: Byte address in Emscripten HEAP where to write the string to.
//   maxBytesToWrite: The maximum number of bytes this function can write to the array. This count should include the null
//                    terminator, i.e. if maxBytesToWrite=4, only the null terminator will be written and nothing else.
//                    maxBytesToWrite<4 does not write any bytes to the output, not even the null terminator.
// Returns the number of bytes written, EXCLUDING the null terminator.

function stringToUTF32(str, outPtr, maxBytesToWrite) {
  // Backwards compatibility: if max bytes is not specified, assume unsafe unbounded write is allowed.
  if (maxBytesToWrite === undefined) {
    maxBytesToWrite = 0x7FFFFFFF;
  }
  if (maxBytesToWrite < 4) return 0;
  var startPtr = outPtr;
  var endPtr = startPtr + maxBytesToWrite - 4;
  for (var i = 0; i < str.length; ++i) {
    // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! We must decode the string to UTF-32 to the heap.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    var codeUnit = str.charCodeAt(i); // possibly a lead surrogate
    if (codeUnit >= 0xD800 && codeUnit <= 0xDFFF) {
      var trailSurrogate = str.charCodeAt(++i);
      codeUnit = 0x10000 + ((codeUnit & 0x3FF) << 10) | (trailSurrogate & 0x3FF);
    }
    HEAP32[((outPtr)>>2)]=codeUnit;
    outPtr += 4;
    if (outPtr + 4 > endPtr) break;
  }
  // Null-terminate the pointer to the HEAP.
  HEAP32[((outPtr)>>2)]=0;
  return outPtr - startPtr;
}

// Returns the number of bytes the given Javascript string takes if encoded as a UTF16 byte array, EXCLUDING the null terminator byte.

function lengthBytesUTF32(str) {
  var len = 0;
  for (var i = 0; i < str.length; ++i) {
    // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! We must decode the string to UTF-32 to the heap.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    var codeUnit = str.charCodeAt(i);
    if (codeUnit >= 0xD800 && codeUnit <= 0xDFFF) ++i; // possibly a lead surrogate, so skip over the tail surrogate.
    len += 4;
  }

  return len;
}

// Allocate heap space for a JS string, and write it there.
// It is the responsibility of the caller to free() that memory.
function allocateUTF8(str) {
  var size = lengthBytesUTF8(str) + 1;
  var ret = _malloc(size);
  if (ret) stringToUTF8Array(str, HEAP8, ret, size);
  return ret;
}

// Allocate stack space for a JS string, and write it there.
function allocateUTF8OnStack(str) {
  var size = lengthBytesUTF8(str) + 1;
  var ret = stackAlloc(size);
  stringToUTF8Array(str, HEAP8, ret, size);
  return ret;
}

function demangle(func) {
  return func;
}

function demangleAll(text) {
  var regex =
    /__Z[\w\d_]+/g;
  return text.replace(regex,
    function(x) {
      var y = demangle(x);
      return x === y ? x : (y + ' [' + x + ']');
    });
}

function jsStackTrace() {
  var err = new Error();
  if (!err.stack) {
    // IE10+ special cases: It does have callstack info, but it is only populated if an Error object is thrown,
    // so try that as a special-case.
    try {
      throw new Error(0);
    } catch(e) {
      err = e;
    }
    if (!err.stack) {
      return '(no stack trace available)';
    }
  }
  return err.stack.toString();
}

function stackTrace() {
  var js = jsStackTrace();
  if (Module['extraStackTrace']) js += '\n' + Module['extraStackTrace']();
  return demangleAll(js);
}

// Memory management

var PAGE_SIZE = 16384;
var WASM_PAGE_SIZE = 65536;
var ASMJS_PAGE_SIZE = 16777216;
var MIN_TOTAL_MEMORY = 16777216;

function alignUp(x, multiple) {
  if (x % multiple > 0) {
    x += multiple - (x % multiple);
  }
  return x;
}

var HEAP,
/** @type {ArrayBuffer} */
  buffer,
/** @type {Int8Array} */
  HEAP8,
/** @type {Uint8Array} */
  HEAPU8,
/** @type {Int16Array} */
  HEAP16,
/** @type {Uint16Array} */
  HEAPU16,
/** @type {Int32Array} */
  HEAP32,
/** @type {Uint32Array} */
  HEAPU32,
/** @type {Float32Array} */
  HEAPF32,
/** @type {Float64Array} */
  HEAPF64;

function updateGlobalBuffer(buf) {
  Module['buffer'] = buffer = buf;
}

function updateGlobalBufferViews() {
  Module['HEAP8'] = HEAP8 = new Int8Array(buffer);
  Module['HEAP16'] = HEAP16 = new Int16Array(buffer);
  Module['HEAP32'] = HEAP32 = new Int32Array(buffer);
  Module['HEAPU8'] = HEAPU8 = new Uint8Array(buffer);
  Module['HEAPU16'] = HEAPU16 = new Uint16Array(buffer);
  Module['HEAPU32'] = HEAPU32 = new Uint32Array(buffer);
  Module['HEAPF32'] = HEAPF32 = new Float32Array(buffer);
  Module['HEAPF64'] = HEAPF64 = new Float64Array(buffer);
}

var STATIC_BASE, STATICTOP, staticSealed; // static area
var STACK_BASE, STACKTOP, STACK_MAX; // stack area
var DYNAMIC_BASE, DYNAMICTOP_PTR; // dynamic area handled by sbrk

  STATIC_BASE = STATICTOP = STACK_BASE = STACKTOP = STACK_MAX = DYNAMIC_BASE = DYNAMICTOP_PTR = 0;
  staticSealed = false;




function abortOnCannotGrowMemory() {
  abort('Cannot enlarge memory arrays. Either (1) compile with  -s TOTAL_MEMORY=X  with X higher than the current value ' + TOTAL_MEMORY + ', (2) compile with  -s ALLOW_MEMORY_GROWTH=1  which allows increasing the size at runtime, or (3) if you want malloc to return NULL (0) instead of this abort, compile with  -s ABORTING_MALLOC=0 ');
}


function enlargeMemory() {
  abortOnCannotGrowMemory();
}


var TOTAL_STACK = Module['TOTAL_STACK'] || 5242880;
var TOTAL_MEMORY = Module['TOTAL_MEMORY'] || 16777216;
if (TOTAL_MEMORY < TOTAL_STACK) err('TOTAL_MEMORY should be larger than TOTAL_STACK, was ' + TOTAL_MEMORY + '! (TOTAL_STACK=' + TOTAL_STACK + ')');

// Initialize the runtime's memory



// Use a provided buffer, if there is one, or else allocate a new one
if (Module['buffer']) {
  buffer = Module['buffer'];
} else {
  // Use a WebAssembly memory where available
  if (typeof WebAssembly === 'object' && typeof WebAssembly.Memory === 'function') {
    Module['wasmMemory'] = new WebAssembly.Memory({ 'initial': TOTAL_MEMORY / WASM_PAGE_SIZE, 'maximum': TOTAL_MEMORY / WASM_PAGE_SIZE });
    buffer = Module['wasmMemory'].buffer;
  } else
  {
    buffer = new ArrayBuffer(TOTAL_MEMORY);
  }
  Module['buffer'] = buffer;
}
updateGlobalBufferViews();


function getTotalMemory() {
  return TOTAL_MEMORY;
}

// Endianness check (note: assumes compiler arch was little-endian)

function callRuntimeCallbacks(callbacks) {
  while(callbacks.length > 0) {
    var callback = callbacks.shift();
    if (typeof callback == 'function') {
      callback();
      continue;
    }
    var func = callback.func;
    if (typeof func === 'number') {
      if (callback.arg === undefined) {
        Module['dynCall_v'](func);
      } else {
        Module['dynCall_vi'](func, callback.arg);
      }
    } else {
      func(callback.arg === undefined ? null : callback.arg);
    }
  }
}

var __ATPRERUN__  = []; // functions called before the runtime is initialized
var __ATINIT__    = []; // functions called during startup
var __ATMAIN__    = []; // functions called when main() is to be run
var __ATEXIT__    = []; // functions called during shutdown
var __ATPOSTRUN__ = []; // functions called after the main() is called

var runtimeInitialized = false;
var runtimeExited = false;


function preRun() {
  // compatibility - merge in anything from Module['preRun'] at this time
  if (Module['preRun']) {
    if (typeof Module['preRun'] == 'function') Module['preRun'] = [Module['preRun']];
    while (Module['preRun'].length) {
      addOnPreRun(Module['preRun'].shift());
    }
  }
  callRuntimeCallbacks(__ATPRERUN__);
}

function ensureInitRuntime() {
  if (runtimeInitialized) return;
  runtimeInitialized = true;
  callRuntimeCallbacks(__ATINIT__);
}

function preMain() {
  callRuntimeCallbacks(__ATMAIN__);
}

function exitRuntime() {
  callRuntimeCallbacks(__ATEXIT__);
  runtimeExited = true;
}

function postRun() {
  // compatibility - merge in anything from Module['postRun'] at this time
  if (Module['postRun']) {
    if (typeof Module['postRun'] == 'function') Module['postRun'] = [Module['postRun']];
    while (Module['postRun'].length) {
      addOnPostRun(Module['postRun'].shift());
    }
  }
  callRuntimeCallbacks(__ATPOSTRUN__);
}

function addOnPreRun(cb) {
  __ATPRERUN__.unshift(cb);
}

function addOnInit(cb) {
  __ATINIT__.unshift(cb);
}

function addOnPreMain(cb) {
  __ATMAIN__.unshift(cb);
}

function addOnExit(cb) {
  __ATEXIT__.unshift(cb);
}

function addOnPostRun(cb) {
  __ATPOSTRUN__.unshift(cb);
}

// Deprecated: This function should not be called because it is unsafe and does not provide
// a maximum length limit of how many bytes it is allowed to write. Prefer calling the
// function stringToUTF8Array() instead, which takes in a maximum length that can be used
// to be secure from out of bounds writes.
/** @deprecated */
function writeStringToMemory(string, buffer, dontAddNull) {
  warnOnce('writeStringToMemory is deprecated and should not be called! Use stringToUTF8() instead!');

  var /** @type {number} */ lastChar, /** @type {number} */ end;
  if (dontAddNull) {
    // stringToUTF8Array always appends null. If we don't want to do that, remember the
    // character that existed at the location where the null will be placed, and restore
    // that after the write (below).
    end = buffer + lengthBytesUTF8(string);
    lastChar = HEAP8[end];
  }
  stringToUTF8(string, buffer, Infinity);
  if (dontAddNull) HEAP8[end] = lastChar; // Restore the value under the null character.
}

function writeArrayToMemory(array, buffer) {
  HEAP8.set(array, buffer);
}

function writeAsciiToMemory(str, buffer, dontAddNull) {
  for (var i = 0; i < str.length; ++i) {
    HEAP8[((buffer++)>>0)]=str.charCodeAt(i);
  }
  // Null-terminate the pointer to the HEAP.
  if (!dontAddNull) HEAP8[((buffer)>>0)]=0;
}

function unSign(value, bits, ignore) {
  if (value >= 0) {
    return value;
  }
  return bits <= 32 ? 2*Math.abs(1 << (bits-1)) + value // Need some trickery, since if bits == 32, we are right at the limit of the bits JS uses in bitshifts
                    : Math.pow(2, bits)         + value;
}
function reSign(value, bits, ignore) {
  if (value <= 0) {
    return value;
  }
  var half = bits <= 32 ? Math.abs(1 << (bits-1)) // abs is needed if bits == 32
                        : Math.pow(2, bits-1);
  if (value >= half && (bits <= 32 || value > half)) { // for huge values, we can hit the precision limit and always get true here. so don't do that
                                                       // but, in general there is no perfect solution here. With 64-bit ints, we get rounding and errors
                                                       // TODO: In i64 mode 1, resign the two parts separately and safely
    value = -2*half + value; // Cannot bitshift half, as it may be at the limit of the bits JS uses in bitshifts
  }
  return value;
}


var Math_abs = Math.abs;
var Math_cos = Math.cos;
var Math_sin = Math.sin;
var Math_tan = Math.tan;
var Math_acos = Math.acos;
var Math_asin = Math.asin;
var Math_atan = Math.atan;
var Math_atan2 = Math.atan2;
var Math_exp = Math.exp;
var Math_log = Math.log;
var Math_sqrt = Math.sqrt;
var Math_ceil = Math.ceil;
var Math_floor = Math.floor;
var Math_pow = Math.pow;
var Math_imul = Math.imul;
var Math_fround = Math.fround;
var Math_round = Math.round;
var Math_min = Math.min;
var Math_max = Math.max;
var Math_clz32 = Math.clz32;
var Math_trunc = Math.trunc;

// A counter of dependencies for calling run(). If we need to
// do asynchronous work before running, increment this and
// decrement it. Incrementing must happen in a place like
// Module.preRun (used by emcc to add file preloading).
// Note that you can add dependencies in preRun, even though
// it happens right before run - run will be postponed until
// the dependencies are met.
var runDependencies = 0;
var runDependencyWatcher = null;
var dependenciesFulfilled = null; // overridden to take different actions when all run dependencies are fulfilled

function getUniqueRunDependency(id) {
  return id;
}

function addRunDependency(id) {
  runDependencies++;
  if (Module['monitorRunDependencies']) {
    Module['monitorRunDependencies'](runDependencies);
  }
}

function removeRunDependency(id) {
  runDependencies--;
  if (Module['monitorRunDependencies']) {
    Module['monitorRunDependencies'](runDependencies);
  }
  if (runDependencies == 0) {
    if (runDependencyWatcher !== null) {
      clearInterval(runDependencyWatcher);
      runDependencyWatcher = null;
    }
    if (dependenciesFulfilled) {
      var callback = dependenciesFulfilled;
      dependenciesFulfilled = null;
      callback(); // can add another dependenciesFulfilled
    }
  }
}

Module["preloadedImages"] = {}; // maps url to image data
Module["preloadedAudios"] = {}; // maps url to audio data



var memoryInitializer = null;






// Copyright 2017 The Emscripten Authors.  All rights reserved.
// Emscripten is available under two separate licenses, the MIT license and the
// University of Illinois/NCSA Open Source License.  Both these licenses can be
// found in the LICENSE file.

// Prefix of data URIs emitted by SINGLE_FILE and related options.
var dataURIPrefix = 'data:application/octet-stream;base64,';

// Indicates whether filename is a base64 data URI.
function isDataURI(filename) {
  return String.prototype.startsWith ?
      filename.startsWith(dataURIPrefix) :
      filename.indexOf(dataURIPrefix) === 0;
}




function integrateWasmJS() {
  // wasm.js has several methods for creating the compiled code module here:
  //  * 'native-wasm' : use native WebAssembly support in the browser
  //  * 'interpret-s-expr': load s-expression code from a .wast and interpret
  //  * 'interpret-binary': load binary wasm and interpret
  //  * 'interpret-asm2wasm': load asm.js code, translate to wasm, and interpret
  //  * 'asmjs': no wasm, just load the asm.js code and use that (good for testing)
  // The method is set at compile time (BINARYEN_METHOD)
  // The method can be a comma-separated list, in which case, we will try the
  // options one by one. Some of them can fail gracefully, and then we can try
  // the next.

  // inputs

  var method = 'native-wasm';

  var wasmTextFile = 'encoderWorker.wast';
  var wasmBinaryFile = 'encoderWorker.wasm';
  var asmjsCodeFile = 'encoderWorker.temp.asm.js';

  if (!isDataURI(wasmTextFile)) {
    wasmTextFile = locateFile(wasmTextFile);
  }
  if (!isDataURI(wasmBinaryFile)) {
    wasmBinaryFile = locateFile(wasmBinaryFile);
  }
  if (!isDataURI(asmjsCodeFile)) {
    asmjsCodeFile = locateFile(asmjsCodeFile);
  }

  // utilities

  var wasmPageSize = 64*1024;

  var info = {
    'global': null,
    'env': null,
    'asm2wasm': asm2wasmImports,
    'parent': Module // Module inside wasm-js.cpp refers to wasm-js.cpp; this allows access to the outside program.
  };

  var exports = null;


  function mergeMemory(newBuffer) {
    // The wasm instance creates its memory. But static init code might have written to
    // buffer already, including the mem init file, and we must copy it over in a proper merge.
    // TODO: avoid this copy, by avoiding such static init writes
    // TODO: in shorter term, just copy up to the last static init write
    var oldBuffer = Module['buffer'];
    if (newBuffer.byteLength < oldBuffer.byteLength) {
      err('the new buffer in mergeMemory is smaller than the previous one. in native wasm, we should grow memory here');
    }
    var oldView = new Int8Array(oldBuffer);
    var newView = new Int8Array(newBuffer);


    newView.set(oldView);
    updateGlobalBuffer(newBuffer);
    updateGlobalBufferViews();
  }

  function getBinary() {
    try {
      if (Module['wasmBinary']) {
        return new Uint8Array(Module['wasmBinary']);
      }
      if (Module['readBinary']) {
        return Module['readBinary'](wasmBinaryFile);
      } else {
        throw "both async and sync fetching of the wasm failed";
      }
    }
    catch (err) {
      abort(err);
    }
  }

  function getBinaryPromise() {
    // if we don't have the binary yet, and have the Fetch api, use that
    // in some environments, like Electron's render process, Fetch api may be present, but have a different context than expected, let's only use it on the Web
    if (!Module['wasmBinary'] && (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) && typeof fetch === 'function') {
      return fetch(wasmBinaryFile, { credentials: 'same-origin' }).then(function(response) {
        if (!response['ok']) {
          throw "failed to load wasm binary file at '" + wasmBinaryFile + "'";
        }
        return response['arrayBuffer']();
      }).catch(function () {
        return getBinary();
      });
    }
    // Otherwise, getBinary should be able to get it synchronously
    return new Promise(function(resolve, reject) {
      resolve(getBinary());
    });
  }

  // do-method functions


  function doNativeWasm(global, env, providedBuffer) {
    if (typeof WebAssembly !== 'object') {
      err('no native wasm support detected');
      return false;
    }
    // prepare memory import
    if (!(Module['wasmMemory'] instanceof WebAssembly.Memory)) {
      err('no native wasm Memory in use');
      return false;
    }
    env['memory'] = Module['wasmMemory'];
    // Load the wasm module and create an instance of using native support in the JS engine.
    info['global'] = {
      'NaN': NaN,
      'Infinity': Infinity
    };
    info['global.Math'] = Math;
    info['env'] = env;
    // handle a generated wasm instance, receiving its exports and
    // performing other necessary setup
    function receiveInstance(instance, module) {
      exports = instance.exports;
      if (exports.memory) mergeMemory(exports.memory);
      Module['asm'] = exports;
      Module["usingWasm"] = true;
      removeRunDependency('wasm-instantiate');
    }
    addRunDependency('wasm-instantiate');

    // User shell pages can write their own Module.instantiateWasm = function(imports, successCallback) callback
    // to manually instantiate the Wasm module themselves. This allows pages to run the instantiation parallel
    // to any other async startup actions they are performing.
    if (Module['instantiateWasm']) {
      try {
        return Module['instantiateWasm'](info, receiveInstance);
      } catch(e) {
        err('Module.instantiateWasm callback failed with error: ' + e);
        return false;
      }
    }

    function receiveInstantiatedSource(output) {
      // 'output' is a WebAssemblyInstantiatedSource object which has both the module and instance.
      // receiveInstance() will swap in the exports (to Module.asm) so they can be called
      receiveInstance(output['instance'], output['module']);
    }
    function instantiateArrayBuffer(receiver) {
      getBinaryPromise().then(function(binary) {
        return WebAssembly.instantiate(binary, info);
      }).then(receiver, function(reason) {
        err('failed to asynchronously prepare wasm: ' + reason);
        abort(reason);
      });
    }
    // Prefer streaming instantiation if available.
    if (!Module['wasmBinary'] &&
        typeof WebAssembly.instantiateStreaming === 'function' &&
        !isDataURI(wasmBinaryFile) &&
        typeof fetch === 'function') {
      WebAssembly.instantiateStreaming(fetch(wasmBinaryFile, { credentials: 'same-origin' }), info)
        .then(receiveInstantiatedSource, function(reason) {
          // We expect the most common failure cause to be a bad MIME type for the binary,
          // in which case falling back to ArrayBuffer instantiation should work.
          err('wasm streaming compile failed: ' + reason);
          err('falling back to ArrayBuffer instantiation');
          instantiateArrayBuffer(receiveInstantiatedSource);
        });
    } else {
      instantiateArrayBuffer(receiveInstantiatedSource);
    }
    return {}; // no exports yet; we'll fill them in later
  }


  // We may have a preloaded value in Module.asm, save it
  Module['asmPreload'] = Module['asm'];

  // Memory growth integration code

  var asmjsReallocBuffer = Module['reallocBuffer'];

  var wasmReallocBuffer = function(size) {
    var PAGE_MULTIPLE = Module["usingWasm"] ? WASM_PAGE_SIZE : ASMJS_PAGE_SIZE; // In wasm, heap size must be a multiple of 64KB. In asm.js, they need to be multiples of 16MB.
    size = alignUp(size, PAGE_MULTIPLE); // round up to wasm page size
    var old = Module['buffer'];
    var oldSize = old.byteLength;
    if (Module["usingWasm"]) {
      // native wasm support
      try {
        var result = Module['wasmMemory'].grow((size - oldSize) / wasmPageSize); // .grow() takes a delta compared to the previous size
        if (result !== (-1 | 0)) {
          // success in native wasm memory growth, get the buffer from the memory
          return Module['buffer'] = Module['wasmMemory'].buffer;
        } else {
          return null;
        }
      } catch(e) {
        return null;
      }
    }
  };

  Module['reallocBuffer'] = function(size) {
    if (finalMethod === 'asmjs') {
      return asmjsReallocBuffer(size);
    } else {
      return wasmReallocBuffer(size);
    }
  };

  // we may try more than one; this is the final one, that worked and we are using
  var finalMethod = '';

  // Provide an "asm.js function" for the application, called to "link" the asm.js module. We instantiate
  // the wasm module at that time, and it receives imports and provides exports and so forth, the app
  // doesn't need to care that it is wasm or polyfilled wasm or asm.js.

  Module['asm'] = function(global, env, providedBuffer) {
    // import table
    if (!env['table']) {
      var TABLE_SIZE = Module['wasmTableSize'];
      if (TABLE_SIZE === undefined) TABLE_SIZE = 1024; // works in binaryen interpreter at least
      var MAX_TABLE_SIZE = Module['wasmMaxTableSize'];
      if (typeof WebAssembly === 'object' && typeof WebAssembly.Table === 'function') {
        if (MAX_TABLE_SIZE !== undefined) {
          env['table'] = new WebAssembly.Table({ 'initial': TABLE_SIZE, 'maximum': MAX_TABLE_SIZE, 'element': 'anyfunc' });
        } else {
          env['table'] = new WebAssembly.Table({ 'initial': TABLE_SIZE, element: 'anyfunc' });
        }
      } else {
        env['table'] = new Array(TABLE_SIZE); // works in binaryen interpreter at least
      }
      Module['wasmTable'] = env['table'];
    }

    if (!env['__memory_base']) {
      env['__memory_base'] = Module['STATIC_BASE']; // tell the memory segments where to place themselves
    }
    if (!env['__table_base']) {
      env['__table_base'] = 0; // table starts at 0 by default, in dynamic linking this will change
    }

    // try the methods. each should return the exports if it succeeded

    var exports;
    exports = doNativeWasm(global, env, providedBuffer);

    assert(exports, 'no binaryen method succeeded.');


    return exports;
  };

  var methodHandler = Module['asm']; // note our method handler, as we may modify Module['asm'] later
}

integrateWasmJS();

// === Body ===

var ASM_CONSTS = [];





STATIC_BASE = GLOBAL_BASE;

STATICTOP = STATIC_BASE + 48032;
/* global initializers */  __ATINIT__.push();







var STATIC_BUMP = 48032;
Module["STATIC_BASE"] = STATIC_BASE;
Module["STATIC_BUMP"] = STATIC_BUMP;

/* no memory initializer */
var tempDoublePtr = STATICTOP; STATICTOP += 16;

function copyTempFloat(ptr) { // functions, because inlining this code increases code size too much
  HEAP8[tempDoublePtr] = HEAP8[ptr];
  HEAP8[tempDoublePtr+1] = HEAP8[ptr+1];
  HEAP8[tempDoublePtr+2] = HEAP8[ptr+2];
  HEAP8[tempDoublePtr+3] = HEAP8[ptr+3];
}

function copyTempDouble(ptr) {
  HEAP8[tempDoublePtr] = HEAP8[ptr];
  HEAP8[tempDoublePtr+1] = HEAP8[ptr+1];
  HEAP8[tempDoublePtr+2] = HEAP8[ptr+2];
  HEAP8[tempDoublePtr+3] = HEAP8[ptr+3];
  HEAP8[tempDoublePtr+4] = HEAP8[ptr+4];
  HEAP8[tempDoublePtr+5] = HEAP8[ptr+5];
  HEAP8[tempDoublePtr+6] = HEAP8[ptr+6];
  HEAP8[tempDoublePtr+7] = HEAP8[ptr+7];
}

// {{PRE_LIBRARY}}


  
  var SYSCALLS={buffers:[null,[],[]],printChar:function (stream, curr) {
        var buffer = SYSCALLS.buffers[stream];
        assert(buffer);
        if (curr === 0 || curr === 10) {
          (stream === 1 ? out : err)(UTF8ArrayToString(buffer, 0));
          buffer.length = 0;
        } else {
          buffer.push(curr);
        }
      },varargs:0,get:function (varargs) {
        SYSCALLS.varargs += 4;
        var ret = HEAP32[(((SYSCALLS.varargs)-(4))>>2)];
        return ret;
      },getStr:function () {
        var ret = Pointer_stringify(SYSCALLS.get());
        return ret;
      },get64:function () {
        var low = SYSCALLS.get(), high = SYSCALLS.get();
        if (low >= 0) assert(high === 0);
        else assert(high === -1);
        return low;
      },getZero:function () {
        assert(SYSCALLS.get() === 0);
      }};function ___syscall140(which, varargs) {SYSCALLS.varargs = varargs;
  try {
   // llseek
      var stream = SYSCALLS.getStreamFromFD(), offset_high = SYSCALLS.get(), offset_low = SYSCALLS.get(), result = SYSCALLS.get(), whence = SYSCALLS.get();
      // NOTE: offset_high is unused - Emscripten's off_t is 32-bit
      var offset = offset_low;
      FS.llseek(stream, offset, whence);
      HEAP32[((result)>>2)]=stream.position;
      if (stream.getdents && offset === 0 && whence === 0) stream.getdents = null; // reset readdir state
      return 0;
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
  }

  
  function flush_NO_FILESYSTEM() {
      // flush anything remaining in the buffers during shutdown
      var fflush = Module["_fflush"];
      if (fflush) fflush(0);
      var buffers = SYSCALLS.buffers;
      if (buffers[1].length) SYSCALLS.printChar(1, 10);
      if (buffers[2].length) SYSCALLS.printChar(2, 10);
    }function ___syscall146(which, varargs) {SYSCALLS.varargs = varargs;
  try {
   // writev
      // hack to support printf in FILESYSTEM=0
      var stream = SYSCALLS.get(), iov = SYSCALLS.get(), iovcnt = SYSCALLS.get();
      var ret = 0;
      for (var i = 0; i < iovcnt; i++) {
        var ptr = HEAP32[(((iov)+(i*8))>>2)];
        var len = HEAP32[(((iov)+(i*8 + 4))>>2)];
        for (var j = 0; j < len; j++) {
          SYSCALLS.printChar(stream, HEAPU8[ptr+j]);
        }
        ret += len;
      }
      return ret;
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
  }

  function ___syscall6(which, varargs) {SYSCALLS.varargs = varargs;
  try {
   // close
      var stream = SYSCALLS.getStreamFromFD();
      FS.close(stream);
      return 0;
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
  }

  function _abort() {
      Module['abort']();
    }

   

  var _llvm_cos_f64=Math_cos;

  
  function _llvm_exp2_f32(x) {
      return Math.pow(2, x);
    }function _llvm_exp2_f64() {
  return _llvm_exp2_f32.apply(null, arguments)
  }

  
  function _llvm_log10_f32(x) {
      return Math.log(x) / Math.LN10; // TODO: Math.log10, when browser support is there
    }function _llvm_log10_f64() {
  return _llvm_log10_f32.apply(null, arguments)
  }

  var _llvm_sin_f64=Math_sin;

  function _llvm_stackrestore(p) {
      var self = _llvm_stacksave;
      var ret = self.LLVM_SAVEDSTACKS[p];
      self.LLVM_SAVEDSTACKS.splice(p, 1);
      stackRestore(ret);
    }

  function _llvm_stacksave() {
      var self = _llvm_stacksave;
      if (!self.LLVM_SAVEDSTACKS) {
        self.LLVM_SAVEDSTACKS = [];
      }
      self.LLVM_SAVEDSTACKS.push(stackSave());
      return self.LLVM_SAVEDSTACKS.length-1;
    }

  
  function _emscripten_memcpy_big(dest, src, num) {
      HEAPU8.set(HEAPU8.subarray(src, src+num), dest);
      return dest;
    } 

   

   

  
    

  
  function ___setErrNo(value) {
      if (Module['___errno_location']) HEAP32[((Module['___errno_location']())>>2)]=value;
      return value;
    } 
DYNAMICTOP_PTR = staticAlloc(4);

STACK_BASE = STACKTOP = alignMemory(STATICTOP);

STACK_MAX = STACK_BASE + TOTAL_STACK;

DYNAMIC_BASE = alignMemory(STACK_MAX);

HEAP32[DYNAMICTOP_PTR>>2] = DYNAMIC_BASE;

staticSealed = true; // seal the static portion of memory

var ASSERTIONS = false;

// Copyright 2017 The Emscripten Authors.  All rights reserved.
// Emscripten is available under two separate licenses, the MIT license and the
// University of Illinois/NCSA Open Source License.  Both these licenses can be
// found in the LICENSE file.

/** @type {function(string, boolean=, number=)} */
function intArrayFromString(stringy, dontAddNull, length) {
  var len = length > 0 ? length : lengthBytesUTF8(stringy)+1;
  var u8array = new Array(len);
  var numBytesWritten = stringToUTF8Array(stringy, u8array, 0, u8array.length);
  if (dontAddNull) u8array.length = numBytesWritten;
  return u8array;
}

function intArrayToString(array) {
  var ret = [];
  for (var i = 0; i < array.length; i++) {
    var chr = array[i];
    if (chr > 0xFF) {
      if (ASSERTIONS) {
        assert(false, 'Character code ' + chr + ' (' + String.fromCharCode(chr) + ')  at offset ' + i + ' not in 0x00-0xFF.');
      }
      chr &= 0xFF;
    }
    ret.push(String.fromCharCode(chr));
  }
  return ret.join('');
}



Module['wasmTableSize'] = 16;

Module['wasmMaxTableSize'] = 16;

Module.asmGlobalArg = {};

Module.asmLibraryArg = { "abort": abort, "assert": assert, "enlargeMemory": enlargeMemory, "getTotalMemory": getTotalMemory, "setTempRet0": setTempRet0, "getTempRet0": getTempRet0, "abortOnCannotGrowMemory": abortOnCannotGrowMemory, "___setErrNo": ___setErrNo, "___syscall140": ___syscall140, "___syscall146": ___syscall146, "___syscall6": ___syscall6, "_abort": _abort, "_emscripten_memcpy_big": _emscripten_memcpy_big, "_llvm_cos_f64": _llvm_cos_f64, "_llvm_exp2_f32": _llvm_exp2_f32, "_llvm_exp2_f64": _llvm_exp2_f64, "_llvm_log10_f32": _llvm_log10_f32, "_llvm_log10_f64": _llvm_log10_f64, "_llvm_sin_f64": _llvm_sin_f64, "_llvm_stackrestore": _llvm_stackrestore, "_llvm_stacksave": _llvm_stacksave, "flush_NO_FILESYSTEM": flush_NO_FILESYSTEM, "DYNAMICTOP_PTR": DYNAMICTOP_PTR, "tempDoublePtr": tempDoublePtr, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX };
// EMSCRIPTEN_START_ASM
var asm =Module["asm"]// EMSCRIPTEN_END_ASM
(Module.asmGlobalArg, Module.asmLibraryArg, buffer);

Module["asm"] = asm;
var _free = Module["_free"] = function() {  return Module["asm"]["_free"].apply(null, arguments) };
var _llvm_bswap_i32 = Module["_llvm_bswap_i32"] = function() {  return Module["asm"]["_llvm_bswap_i32"].apply(null, arguments) };
var _malloc = Module["_malloc"] = function() {  return Module["asm"]["_malloc"].apply(null, arguments) };
var _memcpy = Module["_memcpy"] = function() {  return Module["asm"]["_memcpy"].apply(null, arguments) };
var _memmove = Module["_memmove"] = function() {  return Module["asm"]["_memmove"].apply(null, arguments) };
var _memset = Module["_memset"] = function() {  return Module["asm"]["_memset"].apply(null, arguments) };
var _opus_encode_float = Module["_opus_encode_float"] = function() {  return Module["asm"]["_opus_encode_float"].apply(null, arguments) };
var _opus_encoder_create = Module["_opus_encoder_create"] = function() {  return Module["asm"]["_opus_encoder_create"].apply(null, arguments) };
var _opus_encoder_ctl = Module["_opus_encoder_ctl"] = function() {  return Module["asm"]["_opus_encoder_ctl"].apply(null, arguments) };
var _rintf = Module["_rintf"] = function() {  return Module["asm"]["_rintf"].apply(null, arguments) };
var _sbrk = Module["_sbrk"] = function() {  return Module["asm"]["_sbrk"].apply(null, arguments) };
var _speex_resampler_destroy = Module["_speex_resampler_destroy"] = function() {  return Module["asm"]["_speex_resampler_destroy"].apply(null, arguments) };
var _speex_resampler_init = Module["_speex_resampler_init"] = function() {  return Module["asm"]["_speex_resampler_init"].apply(null, arguments) };
var _speex_resampler_process_interleaved_float = Module["_speex_resampler_process_interleaved_float"] = function() {  return Module["asm"]["_speex_resampler_process_interleaved_float"].apply(null, arguments) };
var establishStackSpace = Module["establishStackSpace"] = function() {  return Module["asm"]["establishStackSpace"].apply(null, arguments) };
var setThrew = Module["setThrew"] = function() {  return Module["asm"]["setThrew"].apply(null, arguments) };
var stackAlloc = Module["stackAlloc"] = function() {  return Module["asm"]["stackAlloc"].apply(null, arguments) };
var stackRestore = Module["stackRestore"] = function() {  return Module["asm"]["stackRestore"].apply(null, arguments) };
var stackSave = Module["stackSave"] = function() {  return Module["asm"]["stackSave"].apply(null, arguments) };
var dynCall_ii = Module["dynCall_ii"] = function() {  return Module["asm"]["dynCall_ii"].apply(null, arguments) };
var dynCall_iiii = Module["dynCall_iiii"] = function() {  return Module["asm"]["dynCall_iiii"].apply(null, arguments) };
var dynCall_iiiiiii = Module["dynCall_iiiiiii"] = function() {  return Module["asm"]["dynCall_iiiiiii"].apply(null, arguments) };
var dynCall_viiiiiii = Module["dynCall_viiiiiii"] = function() {  return Module["asm"]["dynCall_viiiiiii"].apply(null, arguments) };
;



// === Auto-generated postamble setup entry stuff ===

Module['asm'] = asm;












































































/**
 * @constructor
 * @extends {Error}
 * @this {ExitStatus}
 */
function ExitStatus(status) {
  this.name = "ExitStatus";
  this.message = "Program terminated with exit(" + status + ")";
  this.status = status;
};
ExitStatus.prototype = new Error();
ExitStatus.prototype.constructor = ExitStatus;

var initialStackTop;
var calledMain = false;

dependenciesFulfilled = function runCaller() {
  // If run has never been called, and we should call run (INVOKE_RUN is true, and Module.noInitialRun is not false)
  if (!Module['calledRun']) run();
  if (!Module['calledRun']) dependenciesFulfilled = runCaller; // try this again later, after new deps are fulfilled
}





/** @type {function(Array=)} */
function run(args) {
  args = args || Module['arguments'];

  if (runDependencies > 0) {
    return;
  }


  preRun();

  if (runDependencies > 0) return; // a preRun added a dependency, run will be called later
  if (Module['calledRun']) return; // run may have just been called through dependencies being fulfilled just in this very frame

  function doRun() {
    if (Module['calledRun']) return; // run may have just been called while the async setStatus time below was happening
    Module['calledRun'] = true;

    if (ABORT) return;

    ensureInitRuntime();

    preMain();

    if (Module['onRuntimeInitialized']) Module['onRuntimeInitialized']();


    postRun();
  }

  if (Module['setStatus']) {
    Module['setStatus']('Running...');
    setTimeout(function() {
      setTimeout(function() {
        Module['setStatus']('');
      }, 1);
      doRun();
    }, 1);
  } else {
    doRun();
  }
}
Module['run'] = run;


function exit(status, implicit) {

  // if this is just main exit-ing implicitly, and the status is 0, then we
  // don't need to do anything here and can just leave. if the status is
  // non-zero, though, then we need to report it.
  // (we may have warned about this earlier, if a situation justifies doing so)
  if (implicit && Module['noExitRuntime'] && status === 0) {
    return;
  }

  if (Module['noExitRuntime']) {
  } else {

    ABORT = true;
    EXITSTATUS = status;
    STACKTOP = initialStackTop;

    exitRuntime();

    if (Module['onExit']) Module['onExit'](status);
  }

  Module['quit'](status, new ExitStatus(status));
}

var abortDecorators = [];

function abort(what) {
  if (Module['onAbort']) {
    Module['onAbort'](what);
  }

  if (what !== undefined) {
    out(what);
    err(what);
    what = JSON.stringify(what)
  } else {
    what = '';
  }

  ABORT = true;
  EXITSTATUS = 1;

  throw 'abort(' + what + '). Build with -s ASSERTIONS=1 for more info.';
}
Module['abort'] = abort;

if (Module['preInit']) {
  if (typeof Module['preInit'] == 'function') Module['preInit'] = [Module['preInit']];
  while (Module['preInit'].length > 0) {
    Module['preInit'].pop()();
  }
}


  Module["noExitRuntime"] = true;

run();





// {{MODULE_ADDITIONS}}



