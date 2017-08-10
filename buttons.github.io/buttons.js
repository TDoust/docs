(function(){var t,e,n,o,a,r,i,c,d,s,l,u,h,p,f,b,m,g,w,y,v,C,x,S;"undefined"!=typeof window&&(d=window.document,s=window.encodeURIComponent,i=window.decodeURIComponent,a=function(t){return d.createElement(t)},r=function(t){return d.createTextNode(t)},e=window.Math,t=(/^http:/.test(d.location)?"http":"https")+"://buttons.github.io/","github-button","https://api.github.com","octicon","octicon-mark-github",n="faa75404-3b97-5585-b449-4bc51338fbd1",S=function(t){var e,n,o;n=[];for(e in t)null!=(o=t[e])&&n.push(s(e)+"="+s(o));return n.join("&")},m=function(t){var e,n,o,a,r,c;for(a={},e=0,n=(c=t.split("&")).length;e<n;e++)""!==(o=c[e])&&""!==(r=o.split("="))[0]&&(a[i(r[0])]=i(r.slice(1).join("=")));return a},h=function(t,e,n){t.addEventListener?t.addEventListener(""+e,n):t.attachEvent("on"+e,n)},p=function(t,e,n){var o;h(t,e,o=function(a){return t.removeEventListener?t.removeEventListener(""+e,o):t.detachEvent("on"+e,o),n(a||window.event)})},f=function(t,e){var n,o;o=0,h(t,"load",n=function(){!o&&(o=1)&&e()}),h(t,"error",n),h(t,"readystatechange",function(){/i/.test(t.readyState)||n()})},c=function(t){var e,n;/m/.test(d.readyState)||!/g/.test(d.readyState)&&!d.documentElement.doScroll?window.setTimeout(t):d.addEventListener?(n=0,p(d,"DOMContentLoaded",e=function(){!n&&(n=1)&&t()}),p(window,"load",e)):(e=function(){/m/.test(d.readyState)&&(d.detachEvent("onreadystatechange",e),t())},d.attachEvent("onreadystatechange",e))},u=function(t,e){var n,o;(o=a("script")).async=!0,o.src=t+(/\?/.test(t)?"&":"?")+"callback=_",window._=function(t){window._=null,e(t)},window._.$=o,h(o,"error",function(){window._=null}),o.readyState&&h(o,"readystatechange",function(){"loaded"===o.readyState&&o.children&&"loading"===o.readyState&&(window._=null)}),n=d.getElementsByTagName("head")[0],"[object Opera]"==={}.toString.call(window.opera)?h(d,"DOMContentLoaded",function(){n.appendChild(o)}):n.appendChild(o)},o=function(t){var n;return((n=window.devicePixelRatio||1)>1?e.ceil(e.round(t*n)/n*2)/2:e.ceil(t))||0},l=function(t){var n,a,r,i,c,d;return r=t.contentWindow.document,c=r.documentElement,n=r.body,d=c.scrollWidth,i=c.scrollHeight,n.getBoundingClientRect&&(n.style.display="inline-block",a=n.getBoundingClientRect(),d=e.max(d,o(a.width||a.right-a.left)),i=e.max(i,o(a.height||a.bottom-a.top)),n.style.display=""),[d,i]},x=function(t,e){t.style.width=e[0]+"px",t.style.height=e[1]+"px"},b=function(t){var e,n,o,a,r,i;for(n={href:t.href,"aria-label":t.getAttribute("aria-label")},a=0,r=(i=["icon","text","size","show-count"]).length;a<r;a++)n[e="data-"+(e=i[a])]=t.getAttribute(e);return null==n["data-text"]&&(n["data-text"]=t.textContent||t.innerText),(o=function(e,o,a){t.getAttribute(e)&&(n[o]=a,window.console&&window.console.warn("GitHub Buttons deprecated `"+e+"`: use `"+o+'="'+a+'"` instead. Please refer to https://github.com/ntkme/github-buttons#readme for more info.'))})("data-count-api","data-show-count","true"),o("data-style","data-size","large"),n},y=function(t){var e,n,o;return e=a("a"),e.href=t.href,/\.github\.com$/.test("."+e.hostname)?/^https?:\/\/((gist\.)?github\.com\/[^\/?#]+\/[^\/?#]+\/archive\/|github\.com\/[^\/?#]+\/[^\/?#]+\/releases\/download\/|codeload\.github\.com\/)/.test(e.href)&&(e.target="_top"):(e.href="#",e.target="_self"),e.className="btn",(n=t["aria-label"])&&e.setAttribute("aria-label",n),o=e.appendChild(a("i")),o.className="octicon "+(t["data-icon"]||"octicon-mark-github"),o.setAttribute("aria-hidden","true"),e.appendChild(r(" ")),e.appendChild(a("span")).appendChild(r(t["data-text"]||"")),d.body.appendChild(e)},v=function(t){var e,n,o,i;"github.com"===t.hostname&&(o=t.pathname.replace(/^(?!\/)/,"/").match(/^\/([^\/?#]+)(?:\/([^\/?#]+)(?:\/(?:(subscription)|(fork)|(issues)|([^\/?#]+)))?)?(?:[\/?#]|$)/))&&!o[6]&&(o[2]?(e="/repos"+(n="/"+o[1]+"/"+o[2]),o[3]?(i="subscribers_count",n+="/watchers"):o[4]?(i="forks_count",n+="/network"):o[5]?(i="open_issues_count",n+="/issues"):(i="stargazers_count",n+="/stargazers")):(e="/users/"+o[1],i="followers",n="/"+o[1]+"/"+i),u("https://api.github.com"+e,function(e){var o,c;200===e.meta.status&&(c=e.data[i],(o=a("a")).href="https://github.com"+n,o.className="social-count",o.setAttribute("aria-label",c+" "+i.replace(/_count$/,"").replace("_"," ")+" on GitHub"),o.appendChild(a("b")),o.appendChild(a("i")),o.appendChild(a("span")).appendChild(r((""+c).replace(/\B(?=(\d{3})+(?!\d))/g,","))),t.parentNode.insertBefore(o,t.nextSibling))}))},C=function(t){var e;t&&(/^large$/i.test(t["data-size"])&&(d.body.className="large"),e=y(t),/^(true|1)$/i.test(t["data-show-count"])&&v(e))},g=function(e,o){var r,i,c,s,u,h,m;if(null==e)return w();null==o&&(o=b(e)),i="#"+S(o),c=a("iframe"),h={allowtransparency:!0,scrolling:"no",frameBorder:0};for(s in h)m=h[s],c.setAttribute(s,m);x(c,[1,0]),c.style.border="none",c.src="javascript:0",d.body.appendChild(c),u=function(){var n;n=l(c),c.parentNode.removeChild(c),p(c,"load",function(){x(c,n)}),c.src=t+"buttons.html"+i,e.parentNode.replaceChild(c,e)},p(c,"load",function(){var t;(t=c.contentWindow._)?f(t.$,u):u()}),(r=c.contentWindow.document).open().write('<!DOCTYPE html><html><head><meta charset="utf-8"><title>'+n+'</title><link rel="stylesheet" href="'+t+'assets/css/buttons.css"><script>document.location.hash = "'+i+'";<\/script></head><body><script src="'+t+'buttons.js"><\/script></body></html>'),r.close()},w=function(){var t,e,n,o,a,r,i;if(e=[],d.querySelectorAll)e=d.querySelectorAll("a.github-button");else for(n=0,a=(i=d.getElementsByTagName("a")).length;n<a;n++)~(" "+(t=i[n]).className+" ").replace(/[ \t\n\f\r]+/g," ").indexOf(" github-button ")&&e.push(t);for(o=0,r=e.length;o<r;o++)t=e[o],g(t)},"function"==typeof define&&define.amd?define([],{render:g}):"object"==typeof exports&&"string"!=typeof exports.nodeName?exports.render=g:(!{}.hasOwnProperty.call(d,"currentScript")&&d.currentScript&&delete d.currentScript&&d.currentScript&&(t=d.currentScript.src.replace(/[^\/]*([?#].*)?$/,"")),d.title===n?C(m(d.location.hash.replace(/^#/,""))):c(w)))}).call(this);
//# sourceMappingURL=buttons.js.map