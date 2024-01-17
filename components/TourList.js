'use client';

import { useEffect, useRef } from "react";

export function TourList() {
  const scriptRoot = useRef() // gets assigned to a root node
  const script = `<script>!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=0)}([function(e,t){globalThis[Symbol.for("GLIMMER_VALIDATOR_REGISTRATION")]=!1,window.define=void 0;var n=document.currentScript;function r(e=null){null===e&&(e=n.previousElementSibling&&"seated-55fdf2c0"===n.previousElementSibling.id?n.previousElementSibling:document.getElementById("seated-55fdf2c0")),e&&0===e.children.length&&"true"!==e.dataset.startLoad&&(e.dataset.startLoad="true",function(e){if(e){var t="seated-55fdf2c0-script-"+e.dataset.artistId,n=document.createElement("script");n.id=t,n.dataset.artistId=e.dataset.artistId,n.onload=function(){},"development"===e.dataset.devEnv?n.src="http://localhost:8080/widget.js":"staging"===e.dataset.devEnv?n.src=e.dataset.widgetHost+"/widget.js":n.src="https://widget.seated.com/widget.js",e.parentNode.insertBefore(n,e)}}(e))}r(),window.onload=function(){var e;r(),e=r,new(window.MutationObserver||window.WebKitMutationObserver)((function(t){for(var n=0;n<t.length;n++){var r=t[n].target.querySelector("div#seated-55fdf2c0");r&&e(r)}})).observe(document.body,{childList:!0,subtree:!0})}}]);</script>
  <div id="seated-55fdf2c0" data-artist-id="e1796c0a-1afe-4112-bb74-6059df5e2e8b" data-css-version="3"/>`
  useEffect(() => {
    // creates a document range (grouping of nodes in the document is my understanding)
    // in this case we instantiate it as empty, on purpose
    const range = document.createRange()
    // creates a mini-document (light weight version), in our range with our script in it
    const documentFragment = range.createContextualFragment(script)
    // appends it to our script root - so it renders in the correct location
    scriptRoot.current.append(documentFragment)

    console.log(scriptRoot)
  }, [])

  return <div ref={scriptRoot} />
    
}