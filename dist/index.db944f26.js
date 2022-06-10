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
})({"kZ7Jh":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "07066df9db944f26";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, importScripts */ /*::
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
interface ExtensionContext {
  runtime: {|
    reload(): void,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else if ("reload" in location) location.reload();
            else {
                // Web extension context
                var ext = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome;
                if (ext && ext.runtime && ext.runtime.reload) ext.runtime.reload();
            }
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
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
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
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
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                if (asset.type === "js") {
                    if (typeof document !== "undefined") {
                        let script = document.createElement("script");
                        script.src = asset.url;
                        return new Promise((resolve, reject)=>{
                            var _document$head;
                            script.onload = ()=>resolve(script);
                            script.onerror = reject;
                            (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
                        });
                    } else if (typeof importScripts === "function") return new Promise((resolve, reject)=>{
                        try {
                            importScripts(asset.url);
                        } catch (err) {
                            reject(err);
                        }
                    });
                }
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id1][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
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
    bundle.hotData = {};
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

},{}],"ZmWkT":[function(require,module,exports) {
let counter = 0;
let clickEarning = 1;
/* Adding an event listener to the element with the id "amberHeard" and when the element is clicked, it
will add the value of clickEarning to the counter and update the counter on the page. */ document.getElementById("amberHeard").addEventListener("click", ()=>{
    counter += clickEarning;
    document.getElementById("counter").innerHTML = "$" + counter;
    let moneyAnimate = document.createElement("p");
    moneyAnimate.innerHTML = "+" + clickEarning;
    document.getElementById("moneyAnimation").appendChild(moneyAnimate);
    moneyAnimate.classList.add("moneyAnimation", "text-white"); // Add the class that animates
    console.log("clicked");
    setTimeout(()=>{
        document.getElementById("moneyAnimation").removeChild(moneyAnimate);
    }, 1000);
});
const bonusClickBtn = document.getElementById("bonusClick");
let bonusBtnClicked = false;
let bonusClick = 3;
const bonusCounter = document.getElementById("bonusCounter");
window.setInterval(function() {
    bonusClickBtn.classList.remove("hidden");
    bonusBtnClicked = true;
}, Math.floor(Math.random() * 100000 + 200000));
document.getElementById("bonusClick").addEventListener("click", ()=>{
    if (bonusBtnClicked === true) {
        alert("You have activated a bonus! Your click earning is now tripled for 30sec!");
        let bonusClickEarning = clickEarning;
        bonusClickEarning *= bonusClick;
        clickEarning = bonusClickEarning;
        bonusCounter.classList.remove("hidden");
        bonusCounter.innerHTML = "3x ";
        bonusClickBtn.classList.add("hidden");
        bonusBtnClicked = false;
        /* A timer that will divide the bonusClickEarning by the bonusClick after 30 seconds. */ window.setTimeout(function() {
            bonusCounter.classList.add("hidden");
            bonusClickEarning /= bonusClick;
            clickEarning = bonusClickEarning;
        }, 30000);
    }
});
const helperList = document.getElementById("helperList");
const shopList = document.getElementById("shopList");
const upgradeList = document.getElementById("upgradeList");
//@note helperBtn
document.getElementById("helper").addEventListener("click", ()=>{
    /* Checking if the helperList has the class hidden. If it does, it will remove the class hidden from
 the helperList. If the shopList and upgradeList do not have the class hidden, it will add the class
 hidden to the shopList and upgradeList. If the helperList does not have the class hidden, it will
 add the class hidden to the helperList. */ if (helperList.classList.contains("hidden")) {
        helperList.classList.remove("hidden");
        if (shopList.querySelector("hidden") !== "hidden" && upgradeList.querySelector("hidden") !== "hidden") {
            shopList.classList.add("hidden");
            upgradeList.classList.add("hidden");
        }
    } else helperList.classList.add("hidden");
});
//@note shopBtn
document.getElementById("shop").addEventListener("click", ()=>{
    /* Checking if the shopList has the class hidden. If it does, it will remove the class hidden from
    the shopList. If the helperList and upgradeList do not have the class hidden, it will add the
    class hidden to the helperList and upgradeList. If the shopList does not have the class hidden,
    it will add the class hidden to the shopList. */ if (shopList.classList.contains("hidden")) {
        shopList.classList.remove("hidden");
        if (helperList.querySelector("hidden") !== "hidden" && upgradeList.querySelector("hidden") !== "hidden") {
            helperList.classList.add("hidden");
            upgradeList.classList.add("hidden");
        }
    } else shopList.classList.add("hidden");
});
//@note upgradeBtn
document.getElementById("upgrade").addEventListener("click", ()=>{
    /* Checking if the upgradeList has the class hidden. If it does, it will remove the class hidden
    from the upgradeList. If the shopList and helperList do not have the class hidden, it will add
    the class hidden to the shopList and helperList. If the upgradeList does not have the class
    hidden, it will add the class hidden to the upgradeList. */ if (upgradeList.classList.contains("hidden")) {
        upgradeList.classList.remove("hidden");
        if (shopList.querySelector("hidden") !== "hidden" && shopList.querySelector("hidden") !== "hidden") {
            shopList.classList.add("hidden");
            helperList.classList.add("hidden");
        }
    } else upgradeList.classList.add("hidden");
});
let rumCost = 15000000;
let rumBought = false;
document.getElementById("bRum").onclick = function buyRum() {
    console.log("clicked");
    if (rumBought === false) {
        alert("Rum Diary will permanently double your click earning and will reset the game!");
        if (confirm("Are you sure you want to buy Rum Diary?")) {
            if (counter >= rumCost) {
                counter -= rumCost;
                document.getElementById("rumCost").innerHTML = "Bought";
                rumBought = true;
                alert("You have bought Rum Diary! Your earning per click is now doubled!");
                rumUnlocked();
            }
        }
    } else document.getElementById("bRum").classList.add("pointer-events-none", "cursor-not-allowed");
};
let aquaCost = 15000000;
let aquaBought = false;
document.getElementById("bAqua").onclick = function buyAqua() {
    console.log("clicked");
    if (aquaBought === false) {
        alert("Aquaman will permanently double your earning per second and will reset the game!");
        if (confirm("Are you sure you want to buy Aquaman?")) {
            if (counter >= aquaCost) {
                counter -= aquaCost;
                document.getElementById("aquaCost").innerHTML = "Bought";
                aquaBought = true;
                aquaUnlocked();
            }
        }
    } else document.getElementById("bAqua").classList.add("pointer-events-none", "cursor-not-allowed");
};
let meraCost = 1000000000;
let meraBought = false;
document.getElementById("bMera").onclick = function buyMera() {
    console.log("clicked");
    if (meraBought === false) {
        alert("Mera is a unknowned special upgrade!");
        if (confirm("Are you sure you want to buy Mera?")) {
            if (counter >= meraCost) {
                counter -= meraCost;
                clickEarning *= 2;
                alert("Congratulations! You have just wasted you precious like on playing this stupid game!");
                location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
            }
        }
    } else document.getElementById("bMera").classList.add("pointer-events-none", "cursor-not-allowed");
};
function rumUnlocked() {
    if (rumBought === true) {
        clickEarning *= 2;
        document.getElementById("multi").innerHTML = "$" + clickEarning;
    }
}
function aquaUnlocked() {
    if (aquaBought === true) {
        earnPerSec *= 2;
        document.getElementById("multi").innerHTML = "$" + earnPerSec;
    }
}
//@note shop
let apCost = 50;
let apMulti = 0;
let apBought = false;
document.getElementById("bAP").onclick = function buyAP() {
    if (counter >= apCost) {
        counter -= apCost;
        clickEarning *= apMulti;
        apMulti += 1;
        apCost = Math.round(apCost * 1.5);
        document.getElementById("counter").innerHTML = counter;
        document.getElementById("apCost").innerHTML = apCost;
        document.getElementById("apMulti").innerHTML = apMulti;
        updateClickEarning();
    }
};
let handCost = 500;
let handMulti = 0;
let handBought = false;
document.getElementById("bHand").onclick = function buyHand() {
    if (counter >= handCost) {
        counter -= handCost;
        clickEarning *= handMulti;
        handMulti += 10;
        handCost = Math.round(handCost * 1.5);
        document.getElementById("counter").innerHTML = "$" + counter;
        document.getElementById("handCost").innerHTML = "$" + handCost;
        document.getElementById("handMulti").innerHTML = handMulti;
        updateClickEarning();
    }
};
let milaniCost = 1000;
let milanimulti = 0;
let milaniBought = false;
document.getElementById("bMilani").onclick = function buyMilani() {
    if (counter >= milaniCost) {
        counter -= milaniCost;
        clickEarning *= milanimulti;
        milanimulti += 100;
        milaniCost = Math.round(milaniCost * 1.5);
        document.getElementById("counter").innerHTML = "$" + counter;
        document.getElementById("milaniCost").innerHTML = "$" + milaniCost;
        document.getElementById("milaniMulti").innerHTML = milanimulti;
        updateClickEarning();
    }
};
/*document.getElementById("bLawyer").onclick = function buyLawyer(numToCount, costOfLawyer){ counter -= lawyerCost;
    lawyers += 1;
    lawyerCost = Math.round(lawyerCost * 1.2);

    document.getElementById("counter").innerHTML = "$"+counter;
    document.getElementById("lawyerCost").innerHTML = "$"+lawyerCost;
    document.getElementById("lawyers").innerHTML = lawyers;
    updateEarning();}
function buyLawyers(){
     Checking if the counter is greater than or equal to the lawyerCost. If it is, it will subtract
    the lawyerCost from the counter, add 1 to the lawyers, and multiply the lawyerCost by 1.2. Then
    it will update the counter, lawyerCost, and lawyers on the page. 
    if(counter >= lawyerCost) {
       buyLawyer(counter, lawyerCost);
    }
};*/ let jamesCost = 30;
let james = 0;
/* A function that is called when the button with the id "bJames" is clicked. */ document.getElementById("bJames").onclick = function buyJames() {
    /* Checking if the counter is greater than or equal to the jamesCost. If it is, it will subtract
    the jamesCost from the counter, add 1 to the james, and multiply the jamesCost by 1.1. Then
    it will update the counter, jamesCost, and james on the page. */ if (counter >= jamesCost) {
        counter -= jamesCost;
        james += 1;
        jamesCost = Math.round(jamesCost * 1.1);
        document.getElementById("counter").innerHTML = "$" + counter;
        document.getElementById("jamesCost").innerHTML = "$" + jamesCost;
        document.getElementById("james").innerHTML = james;
        updateEarning();
    }
};
let lawyerCost = 500;
let lawyers = 0;
/* A function that is called when the button with the id "bLawyer" is clicked. */ document.getElementById("bLawyer").onclick = function buyLawyer() {
    /* Checking if the counter is greater than or equal to the lawyerCost. If it is, it will subtract
    the lawyerCost from the counter, add 1 to the lawyers, and multiply the lawyerCost by 1.2. Then
    it will update the counter, lawyerCost, and lawyers on the page. */ if (counter >= lawyerCost) {
        counter -= lawyerCost;
        lawyers += 1;
        lawyerCost = Math.round(lawyerCost * 1.2);
        document.getElementById("counter").innerHTML = "$" + counter;
        document.getElementById("lawyerCost").innerHTML = "$" + lawyerCost;
        document.getElementById("lawyers").innerHTML = lawyers;
        updateEarning();
    }
};
let elonCost = 1000;
let elon = 0;
/* A function that is called when the button with the id "bElon" is clicked. */ document.getElementById("bElon").onclick = function buyElon() {
    /* Checking if the counter is greater than or equal to the celonost. If it is, it will subtract the
    elonCost from the counter, add 1 to the elon, and multiply the celonost by 1.3. Then it will update
    the counter, elonCost, and elon on the page. */ if (counter >= elonCost) {
        counter -= elonCost;
        elon += 1;
        elonCost = Math.round(elonCost * 1.3);
        document.getElementById("counter").innerHTML = "$" + counter;
        document.getElementById("elonCost").innerHTML = "$" + elonCost;
        document.getElementById("elon").innerHTML = elon;
        updateEarning();
    }
};
/* Adding the value of james, lawyers, and elon to the counter every second. */ setInterval(function() {
    counter += james;
    counter += lawyers * 5;
    counter += elon * 10;
    document.getElementById("counter").innerHTML = "$" + counter;
}, 1000); // 1000ms = 1s
let earnPerSec = 0;
function updateEarning() {
    /* Updating the earnPerSec variable and updating the earnPerSec on the page. */ earnPerSec = james + lawyers * 5 + elon * 10;
    document.getElementById("earn").innerHTML = "$" + earnPerSec;
}
function updateClickEarning() {
    /* Updating the earnPerClick variable and updating the earnPerClick on the page. */ if (apBought == false || handBought == false || milaniBought == false) {
        apBought = true;
        handBought = true;
        milaniBought = true;
        clickEarning = 1;
    } else clickEarning = apMulti + handMulti + milanimulti;
    document.getElementById("multi").innerHTML = "$" + clickEarning;
}
function paidJohnny() {
    if (counter >= 15000000) {
        alert("You are about to pay Johnny Depp, $15,000,000. This will reset the game with the permanent upgrade unlocked.");
        counter = 0;
        james = 0;
        lawyers = 0;
        elon = 0;
        jamesCost = 30;
        lawyerCost = 500;
        elonCost = 1000;
        apCost = 100;
        handCost = 50;
        milaniCost = 50;
        apMulti = 0;
        handMulti = 0;
        milanimulti = 0;
        clickEarning = 1;
        document.getElementById("counter").innerHTML = "$" + counter;
        document.getElementById("james").innerHTML = james;
        document.getElementById("lawyers").innerHTML = lawyers;
        document.getElementById("elon").innerHTML = elon;
        document.getElementById("jamesCost").innerHTML = "$" + jamesCost;
        document.getElementById("lawyerCost").innerHTML = "$" + lawyerCost;
        document.getElementById("elonCost").innerHTML = "$" + elonCost;
        document.getElementById("apCost").innerHTML = "$" + apCost;
        document.getElementById("handCost").innerHTML = "$" + handCost;
        document.getElementById("milaniCost").innerHTML = "$" + milaniCost;
        document.getElementById("apMulti").innerHTML = apMulti;
        document.getElementById("handMulti").innerHTML = handMulti;
        document.getElementById("milaniMulti").innerHTML = milanimulti;
        document.getElementById("multi").innerHTML = "$" + clickEarning;
    }
}
//@note savegame
/* Saving the game. */ document.getElementById("saveGame").onclick = function gameSaved() {
    console.log("Game Saved");
    let gameSave = {
        counter: counter,
        earnPerSec: earnPerSec,
        jamesCost: jamesCost,
        james: james,
        lawyerCost: lawyerCost,
        lawyers: lawyers,
        elonCost: elonCost,
        elon: elon,
        apCost: apCost,
        apMulti: apMulti,
        handCost: handCost,
        handMulti: handMulti,
        milaniCost: milaniCost,
        milanimulti: milanimulti,
        clickEarning: clickEarning,
        apCost: apCost,
        apMulti: apMulti,
        handCost: handCost,
        handMulti: handMulti,
        milaniCost: milaniCost,
        milanimulti: milanimulti,
        apBought: apBought,
        handBought: handBought,
        milaniBought: milaniBought
    };
    function store() {}
    store("key", "");
    localStorage.setItem("gameSave", JSON.stringify(gameSave));
};
//@note autoSave
/* Saving the game every 30 seconds. */ setInterval(()=>{
    console.log("Game Auto Saved");
    let gameSave = {
        counter: counter,
        earnPerSec: earnPerSec,
        jamesCost: jamesCost,
        james: james,
        lawyerCost: lawyerCost,
        lawyers: lawyers,
        elonCost: elonCost,
        elon: elon,
        apCost: apCost,
        apMulti: apMulti,
        handCost: handCost,
        handMulti: handMulti,
        milaniCost: milaniCost,
        milanimulti: milanimulti,
        clickEarning: clickEarning,
        apCost: apCost,
        apMulti: apMulti,
        handCost: handCost,
        handMulti: handMulti,
        milaniCost: milaniCost,
        milanimulti: milanimulti,
        apBought: apBought,
        handBought: handBought,
        milaniBought: milaniBought
    };
    localStorage.setItem("gameSave", JSON.stringify(gameSave));
}, 30000); // 30000ms = 30s
//@note Ctrl + S save
/* Saving the game when the user presses Ctrl + S. */ document.addEventListener("keydown", function(event) {
    if (event.ctrlKey && event.keyCode == 83) {
        event.preventDefault();
        gameSaved();
    }
});
//@note loadgame
/* If there is a gameSave in localStorage, then set the variables to the values in the gameSave.
 */ function loadGame() {
    let gameSave = JSON.parse(localStorage.getItem("gameSave"));
    if (gameSave !== null) {
        counter = gameSave.counter;
        earnPerSec = gameSave.earnPerSec;
        jamesCost = gameSave.jamesCost;
        james = gameSave.james;
        lawyerCost = gameSave.lawyerCost;
        lawyers = gameSave.lawyers;
        elonCost = gameSave.elonCost;
        elon = gameSave.elon;
        apCost = gameSave.apCost;
        apMulti = gameSave.apMulti;
        handCost = gameSave.handCost;
        handMulti = gameSave.handMulti;
        milaniCost = gameSave.milaniCost;
        milanimulti = gameSave.milanimulti;
        clickEarning = gameSave.clickEarning;
        apCost = gameSave.apCost;
        apMulti = gameSave.apMulti;
        handCost = gameSave.handCost;
        handMulti = gameSave.handMulti;
        milaniCost = gameSave.milaniCost;
        milanimulti = gameSave.milanimulti;
        apBought = gameSave.apBought;
        handBought = gameSave.handBought;
        milaniBought = gameSave.milaniBought;
    }
}
//@note resetGame
document.getElementById("resetGame").onclick = function resetGame() {
    if (confirm("Are you sure you want to reset the game?")) {
        localStorage.removeItem("gameSave");
        location.reload();
    }
};
//@note onLoad
/* Updating the page with the values of the variables. */ window.onload = function() {
    loadGame();
    updateEarning();
    updateClickEarning();
    document.getElementById("counter").innerHTML = "$" + counter;
    document.getElementById("lawyerCost").innerHTML = "$" + lawyerCost;
    document.getElementById("lawyers").innerHTML = lawyers;
    document.getElementById("jamesCost").innerHTML = "$" + jamesCost;
    document.getElementById("james").innerHTML = james;
    document.getElementById("elonCost").innerHTML = "$" + elonCost;
    document.getElementById("elon").innerHTML = elon;
    document.getElementById("apCost").innerHTML = "$" + apCost;
    document.getElementById("apMulti").innerHTML = "$" + apMulti;
    document.getElementById("handCost").innerHTML = "$" + handCost;
    document.getElementById("handMulti").innerHTML = "$" + handMulti;
    document.getElementById("milaniCost").innerHTML = "$" + milaniCost;
    document.getElementById("milaniMulti").innerHTML = "$" + milanimulti;
    document.getElementById("multi").innerHTML = "$" + clickEarning;
};

},{}]},["kZ7Jh","ZmWkT"], "ZmWkT", "parcelRequire94c2")

//# sourceMappingURL=index.db944f26.js.map
