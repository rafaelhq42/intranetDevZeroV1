import{$ as M,Ia as f,Ka as R,Na as F,Oa as T,Ta as O,W as _,Z as I,aa as p,fa as m,ha as a,ia as B,ka as D,na as L,ra as d,sa as l}from"./chunk-IVP2T6QE.js";var z=null;function C(){return z}function Ge(i){z??=i}var P=class{};var S=new D(""),v=(()=>{let t=class t{historyGo(e){throw new Error("")}};t.\u0275fac=function(n){return new(n||t)},t.\u0275prov=a({token:t,factory:()=>l(G),providedIn:"platform"});let i=t;return i})(),He=new D(""),G=(()=>{let t=class t extends v{constructor(){super(),this._doc=l(S),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return C().getBaseHref(this._doc)}onPopState(e){let n=C().getGlobalEventTarget(this._doc,"window");return n.addEventListener("popstate",e,!1),()=>n.removeEventListener("popstate",e)}onHashChange(e){let n=C().getGlobalEventTarget(this._doc,"window");return n.addEventListener("hashchange",e,!1),()=>n.removeEventListener("hashchange",e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,n,r){this._history.pushState(e,n,r)}replaceState(e,n,r){this._history.replaceState(e,n,r)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}};t.\u0275fac=function(n){return new(n||t)},t.\u0275prov=a({token:t,factory:()=>new t,providedIn:"platform"});let i=t;return i})();function b(i,t){if(i.length==0)return t;if(t.length==0)return i;let s=0;return i.endsWith("/")&&s++,t.startsWith("/")&&s++,s==2?i+t.substring(1):s==1?i+t:i+"/"+t}function k(i){let t=i.match(/#|\?|$/),s=t&&t.index||i.length,e=s-(i[s-1]==="/"?1:0);return i.slice(0,e)+i.slice(s)}function c(i){return i&&i[0]!=="?"?"?"+i:i}var g=(()=>{let t=class t{historyGo(e){throw new Error("")}};t.\u0275fac=function(n){return new(n||t)},t.\u0275prov=a({token:t,factory:()=>l(H),providedIn:"root"});let i=t;return i})(),j=new D(""),H=(()=>{let t=class t extends g{constructor(e,n){super(),this._platformLocation=e,this._removeListenerFns=[],this._baseHref=n??this._platformLocation.getBaseHrefFromDOM()??l(S).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return b(this._baseHref,e)}path(e=!1){let n=this._platformLocation.pathname+c(this._platformLocation.search),r=this._platformLocation.hash;return r&&e?`${n}${r}`:n}pushState(e,n,r,o){let u=this.prepareExternalUrl(r+c(o));this._platformLocation.pushState(e,n,u)}replaceState(e,n,r,o){let u=this.prepareExternalUrl(r+c(o));this._platformLocation.replaceState(e,n,u)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}};t.\u0275fac=function(n){return new(n||t)(d(v),d(j,8))},t.\u0275prov=a({token:t,factory:t.\u0275fac,providedIn:"root"});let i=t;return i})(),Ye=(()=>{let t=class t extends g{constructor(e,n){super(),this._platformLocation=e,this._baseHref="",this._removeListenerFns=[],n!=null&&(this._baseHref=n)}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}path(e=!1){let n=this._platformLocation.hash??"#";return n.length>0?n.substring(1):n}prepareExternalUrl(e){let n=b(this._baseHref,e);return n.length>0?"#"+n:n}pushState(e,n,r,o){let u=this.prepareExternalUrl(r+c(o));u.length==0&&(u=this._platformLocation.pathname),this._platformLocation.pushState(e,n,u)}replaceState(e,n,r,o){let u=this.prepareExternalUrl(r+c(o));u.length==0&&(u=this._platformLocation.pathname),this._platformLocation.replaceState(e,n,u)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}};t.\u0275fac=function(n){return new(n||t)(d(v),d(j,8))},t.\u0275prov=a({token:t,factory:t.\u0275fac});let i=t;return i})(),Y=(()=>{let t=class t{constructor(e){this._subject=new _,this._urlChangeListeners=[],this._urlChangeSubscription=null,this._locationStrategy=e;let n=this._locationStrategy.getBaseHref();this._basePath=K(k(N(n))),this._locationStrategy.onPopState(r=>{this._subject.emit({url:this.path(!0),pop:!0,state:r.state,type:r.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,n=""){return this.path()==this.normalize(e+c(n))}normalize(e){return t.stripTrailingSlash(Z(this._basePath,N(e)))}prepareExternalUrl(e){return e&&e[0]!=="/"&&(e="/"+e),this._locationStrategy.prepareExternalUrl(e)}go(e,n="",r=null){this._locationStrategy.pushState(r,"",e,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+c(n)),r)}replaceState(e,n="",r=null){this._locationStrategy.replaceState(r,"",e,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+c(n)),r)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription??=this.subscribe(n=>{this._notifyUrlChangeListeners(n.url,n.state)}),()=>{let n=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(n,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e="",n){this._urlChangeListeners.forEach(r=>r(e,n))}subscribe(e,n,r){return this._subject.subscribe({next:e,error:n,complete:r})}};t.normalizeQueryParams=c,t.joinWithSlash=b,t.stripTrailingSlash=k,t.\u0275fac=function(n){return new(n||t)(d(g))},t.\u0275prov=a({token:t,factory:()=>W(),providedIn:"root"});let i=t;return i})();function W(){return new Y(d(g))}function Z(i,t){if(!i||!t.startsWith(i))return t;let s=t.substring(i.length);return s===""||["/",";","?","#"].includes(s[0])?s:t}function N(i){return i.replace(/\/index.html$/,"")}function K(i){if(new RegExp("^(https?:)?//").test(i)){let[,s]=i.split(/\/\/[^\/]+/);return s}return i}function We(i,t){t=encodeURIComponent(t);for(let s of i.split(";")){let e=s.indexOf("="),[n,r]=e==-1?[s,""]:[s.slice(0,e),s.slice(e+1)];if(n.trim()===t)return decodeURIComponent(r)}return null}var E=/\s+/,$=[],Ze=(()=>{let t=class t{constructor(e,n){this._ngEl=e,this._renderer=n,this.initialClasses=$,this.stateMap=new Map}set klass(e){this.initialClasses=e!=null?e.trim().split(E):$}set ngClass(e){this.rawClass=typeof e=="string"?e.trim().split(E):e}ngDoCheck(){for(let n of this.initialClasses)this._updateState(n,!0);let e=this.rawClass;if(Array.isArray(e)||e instanceof Set)for(let n of e)this._updateState(n,!0);else if(e!=null)for(let n of Object.keys(e))this._updateState(n,!!e[n]);this._applyStateDiff()}_updateState(e,n){let r=this.stateMap.get(e);r!==void 0?(r.enabled!==n&&(r.changed=!0,r.enabled=n),r.touched=!0):this.stateMap.set(e,{enabled:n,changed:!0,touched:!0})}_applyStateDiff(){for(let e of this.stateMap){let n=e[0],r=e[1];r.changed?(this._toggleClass(n,r.enabled),r.changed=!1):r.touched||(r.enabled&&this._toggleClass(n,!1),this.stateMap.delete(n)),r.touched=!1}}_toggleClass(e,n){e=e.trim(),e.length>0&&e.split(E).forEach(r=>{n?this._renderer.addClass(this._ngEl.nativeElement,r):this._renderer.removeClass(this._ngEl.nativeElement,r)})}};t.\u0275fac=function(n){return new(n||t)(f(m),f(F))},t.\u0275dir=p({type:t,selectors:[["","ngClass",""]],inputs:{klass:[I.None,"class","klass"],ngClass:"ngClass"},standalone:!0});let i=t;return i})();var w=class{constructor(t,s,e,n){this.$implicit=t,this.ngForOf=s,this.index=e,this.count=n}get first(){return this.index===0}get last(){return this.index===this.count-1}get even(){return this.index%2===0}get odd(){return!this.even}},Ke=(()=>{let t=class t{set ngForOf(e){this._ngForOf=e,this._ngForOfDirty=!0}set ngForTrackBy(e){this._trackByFn=e}get ngForTrackBy(){return this._trackByFn}constructor(e,n,r){this._viewContainer=e,this._template=n,this._differs=r,this._ngForOf=null,this._ngForOfDirty=!0,this._differ=null}set ngForTemplate(e){e&&(this._template=e)}ngDoCheck(){if(this._ngForOfDirty){this._ngForOfDirty=!1;let e=this._ngForOf;if(!this._differ&&e)if(0)try{}catch{}else this._differ=this._differs.find(e).create(this.ngForTrackBy)}if(this._differ){let e=this._differ.diff(this._ngForOf);e&&this._applyChanges(e)}}_applyChanges(e){let n=this._viewContainer;e.forEachOperation((r,o,u)=>{if(r.previousIndex==null)n.createEmbeddedView(this._template,new w(r.item,this._ngForOf,-1,-1),u===null?void 0:u);else if(u==null)n.remove(o===null?void 0:o);else if(o!==null){let h=n.get(o);n.move(h,u),x(h,r)}});for(let r=0,o=n.length;r<o;r++){let h=n.get(r).context;h.index=r,h.count=o,h.ngForOf=this._ngForOf}e.forEachIdentityChange(r=>{let o=n.get(r.currentIndex);x(o,r)})}static ngTemplateContextGuard(e,n){return!0}};t.\u0275fac=function(n){return new(n||t)(f(O),f(R),f(T))},t.\u0275dir=p({type:t,selectors:[["","ngFor","","ngForOf",""]],inputs:{ngForOf:"ngForOf",ngForTrackBy:"ngForTrackBy",ngForTemplate:"ngForTemplate"},standalone:!0});let i=t;return i})();function x(i,t){i.context.$implicit=t.item}var Xe=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=M({type:t}),t.\u0275inj=B({});let i=t;return i})(),X="browser",q="server";function J(i){return i===X}function qe(i){return i===q}var Je=(()=>{let t=class t{};t.\u0275prov=a({token:t,providedIn:"root",factory:()=>J(l(L))?new y(l(S),window):new A});let i=t;return i})(),y=class{constructor(t,s){this.document=t,this.window=s,this.offset=()=>[0,0]}setOffset(t){Array.isArray(t)?this.offset=()=>t:this.offset=t}getScrollPosition(){return[this.window.scrollX,this.window.scrollY]}scrollToPosition(t){this.window.scrollTo(t[0],t[1])}scrollToAnchor(t){let s=Q(this.document,t);s&&(this.scrollToElement(s),s.focus())}setHistoryScrollRestoration(t){this.window.history.scrollRestoration=t}scrollToElement(t){let s=t.getBoundingClientRect(),e=s.left+this.window.pageXOffset,n=s.top+this.window.pageYOffset,r=this.offset();this.window.scrollTo(e-r[0],n-r[1])}};function Q(i,t){let s=i.getElementById(t)||i.getElementsByName(t)[0];if(s)return s;if(typeof i.createTreeWalker=="function"&&i.body&&typeof i.body.attachShadow=="function"){let e=i.createTreeWalker(i.body,NodeFilter.SHOW_ELEMENT),n=e.currentNode;for(;n;){let r=n.shadowRoot;if(r){let o=r.getElementById(t)||r.querySelector(`[name="${t}"]`);if(o)return o}n=e.nextNode()}}return null}var A=class{setOffset(t){}getScrollPosition(){return[0,0]}scrollToPosition(t){}scrollToAnchor(t){}setHistoryScrollRestoration(t){}},U=class{};export{C as a,Ge as b,P as c,S as d,He as e,g as f,H as g,Ye as h,Y as i,We as j,Ze as k,Ke as l,Xe as m,X as n,J as o,qe as p,Je as q,U as r};
