// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"19Ls1":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "4a236f9275d0a351";
module.bundle.HMR_BUNDLE_ID = "51cf58d705cf099e";
"use strict";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"lA0Es":[function(require,module,exports) {
var _modelsJs = require("./models.js");
var _viewsJs = require("./views.js");
const searchBtn = document.getElementById('btn-search');
const resultsContainer = document.getElementById('results-container');
const toggleFavoritesBtn = document.getElementById('btn-toggle-favorites');
const favoritesList = document.getElementById('favorites-list');
init();
function init() {
    _modelsJs.getToken();
}
searchBtn.addEventListener('click', ()=>{
    _modelsJs.hasTokenExpired();
    _viewsJs.deleteChildren(resultsContainer);
    _modelsJs.getFormData();
    _modelsJs.searchForPets(_viewsJs.renderHtml, resultsContainer);
});
resultsContainer.addEventListener('click', _modelsJs.likeOrDislikeBtn, false);
toggleFavoritesBtn.addEventListener('click', ()=>{
    _viewsJs.toggleElement(favoritesList);
});

},{"./models.js":"iux65","./views.js":"eF3no"}],"iux65":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getToken", ()=>getToken
);
parcelHelpers.export(exports, "getFormData", ()=>getFormData
);
parcelHelpers.export(exports, "searchForPets", ()=>searchForPets
);
parcelHelpers.export(exports, "hasTokenExpired", ()=>hasTokenExpired
);
parcelHelpers.export(exports, "trackWhenTokenExpires", ()=>trackWhenTokenExpires
);
parcelHelpers.export(exports, "likeOrDislikeBtn", ()=>likeOrDislikeBtn
);
var _preludeLs = require("prelude-ls");
var _config = require("./config");
var _views = require("./views");
let whenTokenExpires = 0;
let token = "";
let jsonString = "";
let searchResults;
const getToken = async function() {
    try {
        let res = await fetch('https://api.petfinder.com/v2/oauth2/token', {
            method: 'POST',
            body: `grant_type=client_credentials&client_id=${_config.KEY}&client_secret=${_config.SECRET}`,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });
        let data = await res.json();
        token = data.access_token;
        trackWhenTokenExpires();
    } catch (err) {
        console.log(err);
    }
};
function getFormData() {
    console.log('getting data');
    let forms = document.forms;
    let formData = {
        gender: "",
        age: "",
        size: "",
        coat: ""
    };
    const categories = [
        'age',
        'gender',
        'size',
        'coat'
    ];
    let formsArr = Array.from(forms);
    // Iterate through each form in the HTML
    formsArr.forEach((form)=>{
        let missingInput = true;
        // Check each form to see if the user clicked any of its checkboxes
        for(i = 0; i < form.length; i++)if (form[i].checked === true) {
            missingInput = false;
            // See which word from the categories array is in the checkboxes's ID. That's the property the input value will go to.
            for (el of categories)if (form[i].id.includes(el)) {
                // Pass the input's value to the matching object property
                for(petProperty in formData)if (form[i].id.includes(petProperty)) {
                    const inputValue = form[i].value.toLowerCase();
                    // Add comma if this isn't the first value of that property
                    if (formData[petProperty] !== "") formData[petProperty] += `,${inputValue}`;
                    else formData[petProperty] += inputValue;
                }
            }
        }
        if (missingInput) console.log("Input is missing!");
    });
    jsonString = `/?type=dog&gender=${formData.gender}&age=${formData.age}&size=${formData.size}&coat=${formData.coat}`;
}
const searchForPets = async function(renderHtml, resultsContainer) {
    try {
        let res = await fetch(`https://api.petfinder.com/v2/animals${jsonString}`, {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });
        searchResults = await res.json();
        let allDogs = createHtmlforResults();
        renderHtml(allDogs, resultsContainer, "beforeEnd");
    // add event listeners for buttons
    } catch (err) {
        console.log(err);
    }
};
function trackWhenTokenExpires() {
    const currTime = Date.now();
    whenTokenExpires = currTime + 3600;
}
function hasTokenExpired() {
    const currTime = Date.now();
    if (currTime >= whenTokenExpires) getToken();
}
function createHtmlforResults() {
    let allDogs = [];
    for(let i = 0; i < searchResults.animals.length; i++){
        let currDog = searchResults.animals;
        let templateCopy = `<div id="result-${i}" class="result">
        <img src="${currDog[i].primary_photo_cropped.full}" class="result-img" alt="">
        <div class="result-text">
            <p class="name">${currDog[i].name}</p>
            <p class="description">${currDog[i].description}</p>
        </div>
        <div class="btn-rate-result">
        <img src="images/heart.png" id="favorite-btn-${i}" class="result-icons" alt="Favorite button">
        <img src="images/dislike.png" id="dislike-btn-${i}" class="result-icons" alt="Dislike button">
        </div>
        </div>
        `;
        allDogs.push(templateCopy);
    }
    return allDogs;
}
function likeOrDislikeBtn(e) {
    let btn = e.target;
    // Find what div this button is in so we can pull data from it to our favorites panel
    if (btn.id.includes("favorite-btn")) {
        let parentResult = btn.closest("div.result");
        addToFavorites(parentResult);
    }
    //if the id of the clicked element is "dislike-btn", do this
    e.stopPropagation();
}
function addToFavorites(parentResult) {
    /*
    get image and name of the element, then create the html to pass to renderHtml()
    */ let favoritesContainer = document.getElementById("favorites-list");
    let parentImg = parentResult.querySelector(".result-img").src;
    let parentName = parentResult.querySelector(".name").textContent;
    let html = [
        `<div id="favorite-${i}" class="favorite">
   <img src="${parentImg}" class="favorite-img" alt="">
   <div class="favorite-text">
       <p class="name">${parentName}</p>
   </div>
   <img src="images/close.png" id="delete-btn-${i}" class="delete-icon" alt="Delete button">
   </div>`
    ];
    _views.renderHtml(html, favoritesContainer, "beforeEnd");
}

},{"prelude-ls":"2lp6C","./config":"6V52N","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV","./views":"eF3no"}],"2lp6C":[function(require,module,exports) {
// Generated by LiveScript 1.4.0
var Func, List, Obj, Str, Num, id, isType, replicate, prelude, toString$ = {
}.toString;
Func = require('./Func.js');
List = require('./List.js');
Obj = require('./Obj.js');
Str = require('./Str.js');
Num = require('./Num.js');
id = function(x) {
    return x;
};
isType = curry$(function(type, x) {
    return toString$.call(x).slice(8, -1) === type;
});
replicate = curry$(function(n, x) {
    var i$, results$ = [];
    for(i$ = 0; i$ < n; ++i$)results$.push(x);
    return results$;
});
Str.empty = List.empty;
Str.slice = List.slice;
Str.take = List.take;
Str.drop = List.drop;
Str.splitAt = List.splitAt;
Str.takeWhile = List.takeWhile;
Str.dropWhile = List.dropWhile;
Str.span = List.span;
Str.breakStr = List.breakList;
prelude = {
    Func: Func,
    List: List,
    Obj: Obj,
    Str: Str,
    Num: Num,
    id: id,
    isType: isType,
    replicate: replicate
};
prelude.each = List.each;
prelude.map = List.map;
prelude.filter = List.filter;
prelude.compact = List.compact;
prelude.reject = List.reject;
prelude.partition = List.partition;
prelude.find = List.find;
prelude.head = List.head;
prelude.first = List.first;
prelude.tail = List.tail;
prelude.last = List.last;
prelude.initial = List.initial;
prelude.empty = List.empty;
prelude.reverse = List.reverse;
prelude.difference = List.difference;
prelude.intersection = List.intersection;
prelude.union = List.union;
prelude.countBy = List.countBy;
prelude.groupBy = List.groupBy;
prelude.fold = List.fold;
prelude.foldl = List.foldl;
prelude.fold1 = List.fold1;
prelude.foldl1 = List.foldl1;
prelude.foldr = List.foldr;
prelude.foldr1 = List.foldr1;
prelude.unfoldr = List.unfoldr;
prelude.andList = List.andList;
prelude.orList = List.orList;
prelude.any = List.any;
prelude.all = List.all;
prelude.unique = List.unique;
prelude.uniqueBy = List.uniqueBy;
prelude.sort = List.sort;
prelude.sortWith = List.sortWith;
prelude.sortBy = List.sortBy;
prelude.sum = List.sum;
prelude.product = List.product;
prelude.mean = List.mean;
prelude.average = List.average;
prelude.concat = List.concat;
prelude.concatMap = List.concatMap;
prelude.flatten = List.flatten;
prelude.maximum = List.maximum;
prelude.minimum = List.minimum;
prelude.maximumBy = List.maximumBy;
prelude.minimumBy = List.minimumBy;
prelude.scan = List.scan;
prelude.scanl = List.scanl;
prelude.scan1 = List.scan1;
prelude.scanl1 = List.scanl1;
prelude.scanr = List.scanr;
prelude.scanr1 = List.scanr1;
prelude.slice = List.slice;
prelude.take = List.take;
prelude.drop = List.drop;
prelude.splitAt = List.splitAt;
prelude.takeWhile = List.takeWhile;
prelude.dropWhile = List.dropWhile;
prelude.span = List.span;
prelude.breakList = List.breakList;
prelude.zip = List.zip;
prelude.zipWith = List.zipWith;
prelude.zipAll = List.zipAll;
prelude.zipAllWith = List.zipAllWith;
prelude.at = List.at;
prelude.elemIndex = List.elemIndex;
prelude.elemIndices = List.elemIndices;
prelude.findIndex = List.findIndex;
prelude.findIndices = List.findIndices;
prelude.apply = Func.apply;
prelude.curry = Func.curry;
prelude.flip = Func.flip;
prelude.fix = Func.fix;
prelude.over = Func.over;
prelude.split = Str.split;
prelude.join = Str.join;
prelude.lines = Str.lines;
prelude.unlines = Str.unlines;
prelude.words = Str.words;
prelude.unwords = Str.unwords;
prelude.chars = Str.chars;
prelude.unchars = Str.unchars;
prelude.repeat = Str.repeat;
prelude.capitalize = Str.capitalize;
prelude.camelize = Str.camelize;
prelude.dasherize = Str.dasherize;
prelude.values = Obj.values;
prelude.keys = Obj.keys;
prelude.pairsToObj = Obj.pairsToObj;
prelude.objToPairs = Obj.objToPairs;
prelude.listsToObj = Obj.listsToObj;
prelude.objToLists = Obj.objToLists;
prelude.max = Num.max;
prelude.min = Num.min;
prelude.negate = Num.negate;
prelude.abs = Num.abs;
prelude.signum = Num.signum;
prelude.quot = Num.quot;
prelude.rem = Num.rem;
prelude.div = Num.div;
prelude.mod = Num.mod;
prelude.recip = Num.recip;
prelude.pi = Num.pi;
prelude.tau = Num.tau;
prelude.exp = Num.exp;
prelude.sqrt = Num.sqrt;
prelude.ln = Num.ln;
prelude.pow = Num.pow;
prelude.sin = Num.sin;
prelude.tan = Num.tan;
prelude.cos = Num.cos;
prelude.acos = Num.acos;
prelude.asin = Num.asin;
prelude.atan = Num.atan;
prelude.atan2 = Num.atan2;
prelude.truncate = Num.truncate;
prelude.round = Num.round;
prelude.ceiling = Num.ceiling;
prelude.floor = Num.floor;
prelude.isItNaN = Num.isItNaN;
prelude.even = Num.even;
prelude.odd = Num.odd;
prelude.gcd = Num.gcd;
prelude.lcm = Num.lcm;
prelude.VERSION = '1.1.2';
module.exports = prelude;
function curry$(f, bound) {
    var context, _curry = function(args) {
        return f.length > 1 ? function() {
            var params = args ? args.concat() : [];
            context = bound ? context || this : this;
            return params.push.apply(params, arguments) < f.length && arguments.length ? _curry.call(context, params) : f.apply(context, params);
        } : f;
    };
    return _curry();
}

},{"./Func.js":"iwFPK","./List.js":"34koF","./Obj.js":"8u0wJ","./Str.js":"ai8nx","./Num.js":"8OWAZ"}],"iwFPK":[function(require,module,exports) {
// Generated by LiveScript 1.4.0
var apply, curry, flip, fix, over, memoize, slice$ = [].slice, toString$ = {
}.toString;
apply = curry$(function(f, list) {
    return f.apply(null, list);
});
curry = function(f) {
    return curry$(f);
};
flip = curry$(function(f, x, y) {
    return f(y, x);
});
fix = function(f) {
    return (function(g) {
        return function() {
            return f(g(g)).apply(null, arguments);
        };
    })(function(g) {
        return function() {
            return f(g(g)).apply(null, arguments);
        };
    });
};
over = curry$(function(f, g, x, y) {
    return f(g(x), g(y));
});
memoize = function(f) {
    var memo;
    memo = {
    };
    return function() {
        var args, key, arg;
        args = slice$.call(arguments);
        key = (function() {
            var i$, ref$, len$, results$ = [];
            for(i$ = 0, len$ = (ref$ = args).length; i$ < len$; ++i$){
                arg = ref$[i$];
                results$.push(arg + toString$.call(arg).slice(8, -1));
            }
            return results$;
        })().join('');
        return memo[key] = key in memo ? memo[key] : f.apply(null, args);
    };
};
module.exports = {
    curry: curry,
    flip: flip,
    fix: fix,
    apply: apply,
    over: over,
    memoize: memoize
};
function curry$(f, bound) {
    var context, _curry = function(args) {
        return f.length > 1 ? function() {
            var params = args ? args.concat() : [];
            context = bound ? context || this : this;
            return params.push.apply(params, arguments) < f.length && arguments.length ? _curry.call(context, params) : f.apply(context, params);
        } : f;
    };
    return _curry();
}

},{}],"34koF":[function(require,module,exports) {
// Generated by LiveScript 1.4.0
var each, map, compact, filter, reject, partition, find, head, first, tail, last, initial, empty, reverse, unique, uniqueBy, fold, foldl, fold1, foldl1, foldr, foldr1, unfoldr, concat, concatMap, flatten, difference, intersection, union, countBy, groupBy, andList, orList, any, all, sort, sortWith, sortBy, sum, product, mean, average, maximum, minimum, maximumBy, minimumBy, scan, scanl, scan1, scanl1, scanr, scanr1, slice, take, drop, splitAt, takeWhile, dropWhile, span, breakList, zip, zipWith, zipAll, zipAllWith, at, elemIndex, elemIndices, findIndex, findIndices, toString$ = {
}.toString, slice$ = [].slice;
each = curry$(function(f, xs) {
    var i$, len$, x;
    for(i$ = 0, len$ = xs.length; i$ < len$; ++i$){
        x = xs[i$];
        f(x);
    }
    return xs;
});
map = curry$(function(f, xs) {
    var i$, len$, x, results$ = [];
    for(i$ = 0, len$ = xs.length; i$ < len$; ++i$){
        x = xs[i$];
        results$.push(f(x));
    }
    return results$;
});
compact = function(xs) {
    var i$, len$, x, results$ = [];
    for(i$ = 0, len$ = xs.length; i$ < len$; ++i$){
        x = xs[i$];
        if (x) results$.push(x);
    }
    return results$;
};
filter = curry$(function(f, xs) {
    var i$, len$, x, results$ = [];
    for(i$ = 0, len$ = xs.length; i$ < len$; ++i$){
        x = xs[i$];
        if (f(x)) results$.push(x);
    }
    return results$;
});
reject = curry$(function(f, xs) {
    var i$, len$, x, results$ = [];
    for(i$ = 0, len$ = xs.length; i$ < len$; ++i$){
        x = xs[i$];
        if (!f(x)) results$.push(x);
    }
    return results$;
});
partition = curry$(function(f, xs) {
    var passed, failed, i$, len$, x;
    passed = [];
    failed = [];
    for(i$ = 0, len$ = xs.length; i$ < len$; ++i$){
        x = xs[i$];
        (f(x) ? passed : failed).push(x);
    }
    return [
        passed,
        failed
    ];
});
find = curry$(function(f, xs) {
    var i$, len$, x;
    for(i$ = 0, len$ = xs.length; i$ < len$; ++i$){
        x = xs[i$];
        if (f(x)) return x;
    }
});
head = first = function(xs) {
    return xs[0];
};
tail = function(xs) {
    if (!xs.length) return;
    return xs.slice(1);
};
last = function(xs) {
    return xs[xs.length - 1];
};
initial = function(xs) {
    if (!xs.length) return;
    return xs.slice(0, -1);
};
empty = function(xs) {
    return !xs.length;
};
reverse = function(xs) {
    return xs.concat().reverse();
};
unique = function(xs) {
    var result, i$, len$, x;
    result = [];
    for(i$ = 0, len$ = xs.length; i$ < len$; ++i$){
        x = xs[i$];
        if (!in$(x, result)) result.push(x);
    }
    return result;
};
uniqueBy = curry$(function(f, xs) {
    var seen, i$, len$, x, val, results$ = [];
    seen = [];
    for(i$ = 0, len$ = xs.length; i$ < len$; ++i$){
        x = xs[i$];
        val = f(x);
        if (in$(val, seen)) continue;
        seen.push(val);
        results$.push(x);
    }
    return results$;
});
fold = foldl = curry$(function(f, memo, xs) {
    var i$, len$, x;
    for(i$ = 0, len$ = xs.length; i$ < len$; ++i$){
        x = xs[i$];
        memo = f(memo, x);
    }
    return memo;
});
fold1 = foldl1 = curry$(function(f, xs) {
    return fold(f, xs[0], xs.slice(1));
});
foldr = curry$(function(f, memo, xs) {
    var i$, x;
    for(i$ = xs.length - 1; i$ >= 0; --i$){
        x = xs[i$];
        memo = f(x, memo);
    }
    return memo;
});
foldr1 = curry$(function(f, xs) {
    return foldr(f, xs[xs.length - 1], xs.slice(0, -1));
});
unfoldr = curry$(function(f, b) {
    var result, x, that;
    result = [];
    x = b;
    while((that = f(x)) != null){
        result.push(that[0]);
        x = that[1];
    }
    return result;
});
concat = function(xss) {
    return [].concat.apply([], xss);
};
concatMap = curry$(function(f, xs) {
    var x;
    return [].concat.apply([], function() {
        var i$, ref$, len$, results$ = [];
        for(i$ = 0, len$ = (ref$ = xs).length; i$ < len$; ++i$){
            x = ref$[i$];
            results$.push(f(x));
        }
        return results$;
    }());
});
flatten = function(xs) {
    var x;
    return [].concat.apply([], function() {
        var i$, ref$, len$, results$ = [];
        for(i$ = 0, len$ = (ref$ = xs).length; i$ < len$; ++i$){
            x = ref$[i$];
            if (toString$.call(x).slice(8, -1) === 'Array') results$.push(flatten(x));
            else results$.push(x);
        }
        return results$;
    }());
};
difference = function(xs) {
    var yss, results, i$, len$, x, j$, len1$, ys;
    yss = slice$.call(arguments, 1);
    results = [];
    outer: for(i$ = 0, len$ = xs.length; i$ < len$; ++i$){
        x = xs[i$];
        for(j$ = 0, len1$ = yss.length; j$ < len1$; ++j$){
            ys = yss[j$];
            if (in$(x, ys)) continue outer;
        }
        results.push(x);
    }
    return results;
};
intersection = function(xs) {
    var yss, results, i$, len$, x, j$, len1$, ys;
    yss = slice$.call(arguments, 1);
    results = [];
    outer: for(i$ = 0, len$ = xs.length; i$ < len$; ++i$){
        x = xs[i$];
        for(j$ = 0, len1$ = yss.length; j$ < len1$; ++j$){
            ys = yss[j$];
            if (!in$(x, ys)) continue outer;
        }
        results.push(x);
    }
    return results;
};
union = function() {
    var xss, results, i$, len$, xs, j$, len1$, x;
    xss = slice$.call(arguments);
    results = [];
    for(i$ = 0, len$ = xss.length; i$ < len$; ++i$){
        xs = xss[i$];
        for(j$ = 0, len1$ = xs.length; j$ < len1$; ++j$){
            x = xs[j$];
            if (!in$(x, results)) results.push(x);
        }
    }
    return results;
};
countBy = curry$(function(f, xs) {
    var results, i$, len$, x, key;
    results = {
    };
    for(i$ = 0, len$ = xs.length; i$ < len$; ++i$){
        x = xs[i$];
        key = f(x);
        if (key in results) results[key] += 1;
        else results[key] = 1;
    }
    return results;
});
groupBy = curry$(function(f, xs) {
    var results, i$, len$, x, key;
    results = {
    };
    for(i$ = 0, len$ = xs.length; i$ < len$; ++i$){
        x = xs[i$];
        key = f(x);
        if (key in results) results[key].push(x);
        else results[key] = [
            x
        ];
    }
    return results;
});
andList = function(xs) {
    var i$, len$, x;
    for(i$ = 0, len$ = xs.length; i$ < len$; ++i$){
        x = xs[i$];
        if (!x) return false;
    }
    return true;
};
orList = function(xs) {
    var i$, len$, x;
    for(i$ = 0, len$ = xs.length; i$ < len$; ++i$){
        x = xs[i$];
        if (x) return true;
    }
    return false;
};
any = curry$(function(f, xs) {
    var i$, len$, x;
    for(i$ = 0, len$ = xs.length; i$ < len$; ++i$){
        x = xs[i$];
        if (f(x)) return true;
    }
    return false;
});
all = curry$(function(f, xs) {
    var i$, len$, x;
    for(i$ = 0, len$ = xs.length; i$ < len$; ++i$){
        x = xs[i$];
        if (!f(x)) return false;
    }
    return true;
});
sort = function(xs) {
    return xs.concat().sort(function(x, y) {
        if (x > y) return 1;
        else if (x < y) return -1;
        else return 0;
    });
};
sortWith = curry$(function(f, xs) {
    return xs.concat().sort(f);
});
sortBy = curry$(function(f, xs) {
    return xs.concat().sort(function(x, y) {
        if (f(x) > f(y)) return 1;
        else if (f(x) < f(y)) return -1;
        else return 0;
    });
});
sum = function(xs) {
    var result, i$, len$, x;
    result = 0;
    for(i$ = 0, len$ = xs.length; i$ < len$; ++i$){
        x = xs[i$];
        result += x;
    }
    return result;
};
product = function(xs) {
    var result, i$, len$, x;
    result = 1;
    for(i$ = 0, len$ = xs.length; i$ < len$; ++i$){
        x = xs[i$];
        result *= x;
    }
    return result;
};
mean = average = function(xs) {
    var sum1, i$, len$, x;
    sum1 = 0;
    for(i$ = 0, len$ = xs.length; i$ < len$; ++i$){
        x = xs[i$];
        sum1 += x;
    }
    return sum1 / xs.length;
};
maximum = function(xs) {
    var max, i$, ref$, len$, x;
    max = xs[0];
    for(i$ = 0, len$ = (ref$ = xs.slice(1)).length; i$ < len$; ++i$){
        x = ref$[i$];
        if (x > max) max = x;
    }
    return max;
};
minimum = function(xs) {
    var min, i$, ref$, len$, x;
    min = xs[0];
    for(i$ = 0, len$ = (ref$ = xs.slice(1)).length; i$ < len$; ++i$){
        x = ref$[i$];
        if (x < min) min = x;
    }
    return min;
};
maximumBy = curry$(function(f, xs) {
    var max, i$, ref$, len$, x;
    max = xs[0];
    for(i$ = 0, len$ = (ref$ = xs.slice(1)).length; i$ < len$; ++i$){
        x = ref$[i$];
        if (f(x) > f(max)) max = x;
    }
    return max;
});
minimumBy = curry$(function(f, xs) {
    var min, i$, ref$, len$, x;
    min = xs[0];
    for(i$ = 0, len$ = (ref$ = xs.slice(1)).length; i$ < len$; ++i$){
        x = ref$[i$];
        if (f(x) < f(min)) min = x;
    }
    return min;
});
scan = scanl = curry$(function(f, memo, xs) {
    var last1, x;
    last1 = memo;
    return [
        memo
    ].concat(function() {
        var i$, ref$, len$, results$ = [];
        for(i$ = 0, len$ = (ref$ = xs).length; i$ < len$; ++i$){
            x = ref$[i$];
            results$.push(last1 = f(last1, x));
        }
        return results$;
    }());
});
scan1 = scanl1 = curry$(function(f, xs) {
    if (!xs.length) return;
    return scan(f, xs[0], xs.slice(1));
});
scanr = curry$(function(f, memo, xs) {
    xs = xs.concat().reverse();
    return scan(f, memo, xs).reverse();
});
scanr1 = curry$(function(f, xs) {
    if (!xs.length) return;
    xs = xs.concat().reverse();
    return scan(f, xs[0], xs.slice(1)).reverse();
});
slice = curry$(function(x, y, xs) {
    return xs.slice(x, y);
});
take = curry$(function(n, xs) {
    if (n <= 0) return xs.slice(0, 0);
    else return xs.slice(0, n);
});
drop = curry$(function(n, xs) {
    if (n <= 0) return xs;
    else return xs.slice(n);
});
splitAt = curry$(function(n, xs) {
    return [
        take(n, xs),
        drop(n, xs)
    ];
});
takeWhile = curry$(function(p, xs) {
    var len, i;
    len = xs.length;
    if (!len) return xs;
    i = 0;
    while(i < len && p(xs[i]))i += 1;
    return xs.slice(0, i);
});
dropWhile = curry$(function(p, xs) {
    var len, i;
    len = xs.length;
    if (!len) return xs;
    i = 0;
    while(i < len && p(xs[i]))i += 1;
    return xs.slice(i);
});
span = curry$(function(p, xs) {
    return [
        takeWhile(p, xs),
        dropWhile(p, xs)
    ];
});
breakList = curry$(function(p, xs) {
    return span(compose$(p, not$), xs);
});
zip = curry$(function(xs, ys) {
    var result, len, i$, len$, i, x;
    result = [];
    len = ys.length;
    for(i$ = 0, len$ = xs.length; i$ < len$; ++i$){
        i = i$;
        x = xs[i$];
        if (i === len) break;
        result.push([
            x,
            ys[i]
        ]);
    }
    return result;
});
zipWith = curry$(function(f, xs, ys) {
    var result, len, i$, len$, i, x;
    result = [];
    len = ys.length;
    for(i$ = 0, len$ = xs.length; i$ < len$; ++i$){
        i = i$;
        x = xs[i$];
        if (i === len) break;
        result.push(f(x, ys[i]));
    }
    return result;
});
zipAll = function() {
    var xss, minLength, i$, len$, xs, ref$, i, lresult$, j$, results$ = [];
    xss = slice$.call(arguments);
    minLength = undefined;
    for(i$ = 0, len$ = xss.length; i$ < len$; ++i$){
        xs = xss[i$];
        minLength <= (ref$ = xs.length) || (minLength = ref$);
    }
    for(i$ = 0; i$ < minLength; ++i$){
        i = i$;
        lresult$ = [];
        for(j$ = 0, len$ = xss.length; j$ < len$; ++j$){
            xs = xss[j$];
            lresult$.push(xs[i]);
        }
        results$.push(lresult$);
    }
    return results$;
};
zipAllWith = function(f) {
    var xss, minLength, i$1, len$1, xs, ref$1, i, results$1 = [];
    xss = slice$.call(arguments, 1);
    minLength = undefined;
    for(i$1 = 0, len$1 = xss.length; i$1 < len$1; ++i$1){
        xs = xss[i$1];
        minLength <= (ref$1 = xs.length) || (minLength = ref$1);
    }
    for(i$1 = 0; i$1 < minLength; ++i$1){
        i = i$1;
        results$1.push(f.apply(null, fn$()));
    }
    function fn$() {
        var i$, ref$, len$, results$ = [];
        for(i$ = 0, len$ = (ref$ = xss).length; i$ < len$; ++i$){
            xs = ref$[i$];
            results$.push(xs[i]);
        }
        return results$;
    }
    return results$1;
};
at = curry$(function(n, xs) {
    if (n < 0) return xs[xs.length + n];
    else return xs[n];
});
elemIndex = curry$(function(el, xs) {
    var i$, len$, i, x;
    for(i$ = 0, len$ = xs.length; i$ < len$; ++i$){
        i = i$;
        x = xs[i$];
        if (x === el) return i;
    }
});
elemIndices = curry$(function(el, xs) {
    var i$, len$, i, x, results$ = [];
    for(i$ = 0, len$ = xs.length; i$ < len$; ++i$){
        i = i$;
        x = xs[i$];
        if (x === el) results$.push(i);
    }
    return results$;
});
findIndex = curry$(function(f, xs) {
    var i$, len$, i, x;
    for(i$ = 0, len$ = xs.length; i$ < len$; ++i$){
        i = i$;
        x = xs[i$];
        if (f(x)) return i;
    }
});
findIndices = curry$(function(f, xs) {
    var i$, len$, i, x, results$ = [];
    for(i$ = 0, len$ = xs.length; i$ < len$; ++i$){
        i = i$;
        x = xs[i$];
        if (f(x)) results$.push(i);
    }
    return results$;
});
module.exports = {
    each: each,
    map: map,
    filter: filter,
    compact: compact,
    reject: reject,
    partition: partition,
    find: find,
    head: head,
    first: first,
    tail: tail,
    last: last,
    initial: initial,
    empty: empty,
    reverse: reverse,
    difference: difference,
    intersection: intersection,
    union: union,
    countBy: countBy,
    groupBy: groupBy,
    fold: fold,
    fold1: fold1,
    foldl: foldl,
    foldl1: foldl1,
    foldr: foldr,
    foldr1: foldr1,
    unfoldr: unfoldr,
    andList: andList,
    orList: orList,
    any: any,
    all: all,
    unique: unique,
    uniqueBy: uniqueBy,
    sort: sort,
    sortWith: sortWith,
    sortBy: sortBy,
    sum: sum,
    product: product,
    mean: mean,
    average: average,
    concat: concat,
    concatMap: concatMap,
    flatten: flatten,
    maximum: maximum,
    minimum: minimum,
    maximumBy: maximumBy,
    minimumBy: minimumBy,
    scan: scan,
    scan1: scan1,
    scanl: scanl,
    scanl1: scanl1,
    scanr: scanr,
    scanr1: scanr1,
    slice: slice,
    take: take,
    drop: drop,
    splitAt: splitAt,
    takeWhile: takeWhile,
    dropWhile: dropWhile,
    span: span,
    breakList: breakList,
    zip: zip,
    zipWith: zipWith,
    zipAll: zipAll,
    zipAllWith: zipAllWith,
    at: at,
    elemIndex: elemIndex,
    elemIndices: elemIndices,
    findIndex: findIndex,
    findIndices: findIndices
};
function curry$(f, bound) {
    var context, _curry = function(args) {
        return f.length > 1 ? function() {
            var params = args ? args.concat() : [];
            context = bound ? context || this : this;
            return params.push.apply(params, arguments) < f.length && arguments.length ? _curry.call(context, params) : f.apply(context, params);
        } : f;
    };
    return _curry();
}
function in$(x, xs) {
    var i = -1, l = xs.length >>> 0;
    while(++i < l)if (x === xs[i]) return true;
    return false;
}
function compose$() {
    var functions = arguments;
    return function() {
        var i, result;
        result = functions[0].apply(this, arguments);
        for(i = 1; i < functions.length; ++i)result = functions[i](result);
        return result;
    };
}
function not$(x) {
    return !x;
}

},{}],"8u0wJ":[function(require,module,exports) {
// Generated by LiveScript 1.4.0
var values, keys, pairsToObj, objToPairs, listsToObj, objToLists, empty, each, map, compact, filter, reject, partition, find;
values = function(object) {
    var i$, x, results$ = [];
    for(i$ in object){
        x = object[i$];
        results$.push(x);
    }
    return results$;
};
keys = function(object) {
    var x, results$ = [];
    for(x in object)results$.push(x);
    return results$;
};
pairsToObj = function(object) {
    var i$, len$, x, resultObj$ = {
    };
    for(i$ = 0, len$ = object.length; i$ < len$; ++i$){
        x = object[i$];
        resultObj$[x[0]] = x[1];
    }
    return resultObj$;
};
objToPairs = function(object) {
    var key, value, results$ = [];
    for(key in object){
        value = object[key];
        results$.push([
            key,
            value
        ]);
    }
    return results$;
};
listsToObj = curry$(function(keys1, values1) {
    var i$, len$, i, key, resultObj$ = {
    };
    for(i$ = 0, len$ = keys1.length; i$ < len$; ++i$){
        i = i$;
        key = keys1[i$];
        resultObj$[key] = values1[i];
    }
    return resultObj$;
});
objToLists = function(object) {
    var keys2, values2, key, value;
    keys2 = [];
    values2 = [];
    for(key in object){
        value = object[key];
        keys2.push(key);
        values2.push(value);
    }
    return [
        keys2,
        values2
    ];
};
empty = function(object) {
    var x;
    for(x in object)return false;
    return true;
};
each = curry$(function(f, object) {
    var i$, x;
    for(i$ in object){
        x = object[i$];
        f(x);
    }
    return object;
});
map = curry$(function(f, object) {
    var k, x, resultObj$ = {
    };
    for(k in object){
        x = object[k];
        resultObj$[k] = f(x);
    }
    return resultObj$;
});
compact = function(object) {
    var k, x, resultObj$ = {
    };
    for(k in object){
        x = object[k];
        if (x) resultObj$[k] = x;
    }
    return resultObj$;
};
filter = curry$(function(f, object) {
    var k, x, resultObj$ = {
    };
    for(k in object){
        x = object[k];
        if (f(x)) resultObj$[k] = x;
    }
    return resultObj$;
});
reject = curry$(function(f, object) {
    var k, x, resultObj$ = {
    };
    for(k in object){
        x = object[k];
        if (!f(x)) resultObj$[k] = x;
    }
    return resultObj$;
});
partition = curry$(function(f, object) {
    var passed, failed, k, x;
    passed = {
    };
    failed = {
    };
    for(k in object){
        x = object[k];
        (f(x) ? passed : failed)[k] = x;
    }
    return [
        passed,
        failed
    ];
});
find = curry$(function(f, object) {
    var i$, x;
    for(i$ in object){
        x = object[i$];
        if (f(x)) return x;
    }
});
module.exports = {
    values: values,
    keys: keys,
    pairsToObj: pairsToObj,
    objToPairs: objToPairs,
    listsToObj: listsToObj,
    objToLists: objToLists,
    empty: empty,
    each: each,
    map: map,
    filter: filter,
    compact: compact,
    reject: reject,
    partition: partition,
    find: find
};
function curry$(f, bound) {
    var context, _curry = function(args) {
        return f.length > 1 ? function() {
            var params = args ? args.concat() : [];
            context = bound ? context || this : this;
            return params.push.apply(params, arguments) < f.length && arguments.length ? _curry.call(context, params) : f.apply(context, params);
        } : f;
    };
    return _curry();
}

},{}],"ai8nx":[function(require,module,exports) {
// Generated by LiveScript 1.4.0
var split, join, lines, unlines, words, unwords, chars, unchars, reverse, repeat, capitalize, camelize, dasherize;
split = curry$(function(sep, str) {
    return str.split(sep);
});
join = curry$(function(sep, xs) {
    return xs.join(sep);
});
lines = function(str) {
    if (!str.length) return [];
    return str.split('\n');
};
unlines = function(it) {
    return it.join('\n');
};
words = function(str) {
    if (!str.length) return [];
    return str.split(/[ ]+/);
};
unwords = function(it) {
    return it.join(' ');
};
chars = function(it) {
    return it.split('');
};
unchars = function(it) {
    return it.join('');
};
reverse = function(str) {
    return str.split('').reverse().join('');
};
repeat = curry$(function(n, str) {
    var result, i$;
    result = '';
    for(i$ = 0; i$ < n; ++i$)result += str;
    return result;
});
capitalize = function(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
};
camelize = function(it) {
    return it.replace(/[-_]+(.)?/g, function(arg$, c) {
        return (c != null ? c : '').toUpperCase();
    });
};
dasherize = function(str) {
    return str.replace(/([^-A-Z])([A-Z]+)/g, function(arg$, lower, upper) {
        return lower + "-" + (upper.length > 1 ? upper : upper.toLowerCase());
    }).replace(/^([A-Z]+)/, function(arg$, upper) {
        if (upper.length > 1) return upper + "-";
        else return upper.toLowerCase();
    });
};
module.exports = {
    split: split,
    join: join,
    lines: lines,
    unlines: unlines,
    words: words,
    unwords: unwords,
    chars: chars,
    unchars: unchars,
    reverse: reverse,
    repeat: repeat,
    capitalize: capitalize,
    camelize: camelize,
    dasherize: dasherize
};
function curry$(f, bound) {
    var context, _curry = function(args) {
        return f.length > 1 ? function() {
            var params = args ? args.concat() : [];
            context = bound ? context || this : this;
            return params.push.apply(params, arguments) < f.length && arguments.length ? _curry.call(context, params) : f.apply(context, params);
        } : f;
    };
    return _curry();
}

},{}],"8OWAZ":[function(require,module,exports) {
// Generated by LiveScript 1.4.0
var max, min, negate, abs, signum, quot, rem, div, mod, recip, pi, tau, exp, sqrt, ln, pow, sin, tan, cos, asin, acos, atan, atan2, truncate, round, ceiling, floor, isItNaN, even, odd, gcd, lcm;
max = curry$(function(x$, y$) {
    return x$ > y$ ? x$ : y$;
});
min = curry$(function(x$, y$) {
    return x$ < y$ ? x$ : y$;
});
negate = function(x) {
    return -x;
};
abs = Math.abs;
signum = function(x) {
    if (x < 0) return -1;
    else if (x > 0) return 1;
    else return 0;
};
quot = curry$(function(x, y) {
    return ~~(x / y);
});
rem = curry$(function(x$, y$) {
    return x$ % y$;
});
div = curry$(function(x, y) {
    return Math.floor(x / y);
});
mod = curry$(function(x$, y$) {
    var ref$;
    return (x$ % (ref$ = y$) + ref$) % ref$;
});
recip = function(it) {
    return 1 / it;
};
pi = Math.PI;
tau = pi * 2;
exp = Math.exp;
sqrt = Math.sqrt;
ln = Math.log;
pow = curry$(function(x$, y$) {
    return Math.pow(x$, y$);
});
sin = Math.sin;
tan = Math.tan;
cos = Math.cos;
asin = Math.asin;
acos = Math.acos;
atan = Math.atan;
atan2 = curry$(function(x, y) {
    return Math.atan2(x, y);
});
truncate = function(x) {
    return ~~x;
};
round = Math.round;
ceiling = Math.ceil;
floor = Math.floor;
isItNaN = function(x) {
    return x !== x;
};
even = function(x) {
    return x % 2 === 0;
};
odd = function(x) {
    return x % 2 !== 0;
};
gcd = curry$(function(x, y) {
    var z;
    x = Math.abs(x);
    y = Math.abs(y);
    while(y !== 0){
        z = x % y;
        x = y;
        y = z;
    }
    return x;
});
lcm = curry$(function(x, y) {
    return Math.abs(Math.floor(x / gcd(x, y) * y));
});
module.exports = {
    max: max,
    min: min,
    negate: negate,
    abs: abs,
    signum: signum,
    quot: quot,
    rem: rem,
    div: div,
    mod: mod,
    recip: recip,
    pi: pi,
    tau: tau,
    exp: exp,
    sqrt: sqrt,
    ln: ln,
    pow: pow,
    sin: sin,
    tan: tan,
    cos: cos,
    acos: acos,
    asin: asin,
    atan: atan,
    atan2: atan2,
    truncate: truncate,
    round: round,
    ceiling: ceiling,
    floor: floor,
    isItNaN: isItNaN,
    even: even,
    odd: odd,
    gcd: gcd,
    lcm: lcm
};
function curry$(f, bound) {
    var context, _curry = function(args) {
        return f.length > 1 ? function() {
            var params = args ? args.concat() : [];
            context = bound ? context || this : this;
            return params.push.apply(params, arguments) < f.length && arguments.length ? _curry.call(context, params) : f.apply(context, params);
        } : f;
    };
    return _curry();
}

},{}],"6V52N":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "KEY", ()=>KEY
);
parcelHelpers.export(exports, "SECRET", ()=>SECRET
);
const KEY = "VolA8e7Orq9dDfwn91VnKL1NApICUBTXYPoM5vZE0Ceeo52DID";
const SECRET = 'Kf8eksZUhsTsMOoasD70ICQ2hETdAH970MBaBs17';

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"ciiiV":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"eF3no":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "renderHtml", ()=>renderHtml
);
parcelHelpers.export(exports, "deleteChildren", ()=>deleteChildren
);
parcelHelpers.export(exports, "toggleElement", ()=>toggleElement
);
// Render an array of HTML strings at the specified element
function renderHtml(htmlArr, parentEl, posRelativeToParent) {
    htmlArr.forEach((htmlString)=>{
        parentEl.insertAdjacentHTML(posRelativeToParent, htmlString);
    });
}
function deleteChildren(parent) {
    const children = parent.querySelectorAll('div.result');
    for(let i = 0; i < children.length; i++)children[i].remove();
}
function toggleElement(el) {
    const cssObj = window.getComputedStyle(el, null);
    let displayVal = cssObj.getPropertyValue("display");
    if (displayVal === "none") el.style.display = "inline";
    if (displayVal === "block" || displayVal === "inline") el.style.display = "none";
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}]},["19Ls1","lA0Es"], "lA0Es", "parcelRequire5a1e")

//# sourceMappingURL=index.05cf099e.js.map
