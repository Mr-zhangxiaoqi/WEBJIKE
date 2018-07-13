!function(t,e){"use strict";function i(t,i){return t!==e?t:i}function n(t){return"[object Function]"===f.call(t)}function r(t){return"number"==typeof t&&t>0&&t===Math.floor(t)}function s(t,i,n){if(!t||!i)return t;for(var r in i)r!=e&&h.call(i,r)&&(n||t[r]===e)&&(t[r]=i[r]);return t}function a(t,e,i,n){for(var r=t[i||e],s=[];r;){if(1==r.nodeType){if(!n)return r;s.push(r)}r=r[e]}return n?s:null}function o(t){return t.firstElementChild||a(t,"nextSibling","firstChild",!1)}function l(t,e,i){var n=document.createElement(t);return e&&(n.className=e),i&&(n.innerHTML=i),n}function u(e){var i=e||t.event;return i.target||(i.target=i.srcElement),i}function c(t){return y.test(t)}function d(t,e,i){t=+t;for(var n=0,s="number"==typeof(e=e||1024),a=1,o=r(i)?i:s?100:e.length;t>=a&&n<o;)a*=s?e:e[n],n++;return n&&t<a&&(a/=s?e:e.last(),n--),{value:n?t/a:t,level:n}}var f=Object.prototype.toString,h=Object.prototype.hasOwnProperty,p=Array.prototype.slice;s(Object,{forEach:function(t,e,i){for(var n in t)h.call(t,n)&&e.call(i,n,t[n],t)}}),s(Array.prototype,{forEach:function(t,e){for(var i=0,n=this.length;i<n;i++)i in this&&t.call(e,this[i],i,this)}}),s(Date,{now:function(){return+new Date}});var v;(t.ActiveXObject||t.msIndexedDB)&&(v=document.documentMode||(t.XMLHttpRequest?7:6)),t.JSON||(t.JSON={}),JSON.parse||(JSON.parse=function(t,e){if(!1!==e&&!/^[\],:{}\s]*$/.test(t.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))throw new Error("JSON SyntaxError");try{return new Function("return "+t)()}catch(t){}});var m,g;document.addEventListener?(m=function(t,e,i){t.addEventListener(e,i,!1)},g=function(t,e,i){t.removeEventListener(e,i,!1)}):document.attachEvent&&(m=function(t,e,i){t.attachEvent("on"+e,i)},g=function(t,e,i){t.detachEvent("on"+e,i)});var y=/^https?:\/\//i,w=["B","KB","MB","GB","TB","PB","EB"],x={def:i,isFunc:n,isUInt:r,fire:function(t,e){if(n(t))return t.apply(e,p.call(arguments,2))},extend:s,ie:v,setOpacity:function(t,i){i<=1&&(i*=100),t.style.opacity!=e?t.style.opacity=i/100:t.style.filter!=e&&(t.style.filter="alpha(opacity="+parseInt(i)+")")},getOffset:function(t,e){var i=0,n=0,r=t.offsetWidth,s=t.offsetHeight;do{i+=t.offsetLeft,n+=t.offsetTop,t=t.offsetParent}while(t&&t!=e);return{left:i,top:n,width:r,height:s}},walk:a,getPrev:function(t){return t.previousElementSibling||a(t,"previousSibling",null,!1)},getNext:function(t){return t.nextElementSibling||a(t,"nextSibling",null,!1)},getFirst:o,getLast:function(t){return t.lastElementChild||a(t,"previousSibling","lastChild",!1)},getChilds:function(t){return t.children||a(t,"nextSibling","firstChild",!0)},createEle:l,parseHTML:function(t,e){var i=l("div","",t);return e?i.childNodes:o(i)},isHttpURL:c,isSameHost:function(t){if(!c(t))return!0;var i=RegExp.lastMatch.length,n=t.indexOf("/",i);return t.slice(0,-1!=n?n:e).toLowerCase()==(location.protocol+"//"+location.host).toLowerCase()},parseLevel:d,formatSize:function(t,n){if(n=!0===n?{all:!0}:n||{},isNaN(t)||t==e||t<0){var r=n.error||"--";return n.all?{text:r}:r}var s=d(t,n.steps,n.limit),a=s.value.toFixed(i(n.digit,2));return!1!==n.trim&&-1!=a.lastIndexOf(".")&&(a=a.replace(/\.?0+$/,"")),s.text=a+(n.join||"")+(n.units||w)[s.level+(n.start||0)],n.all?s:s.text}};v&&(x["ie"+(v<6?6:v)]=!0),x.event={fix:u,stop:function(t,e,i){var n=u(t);!1!==e&&(n.preventDefault?n.preventDefault():n.returnValue=!1),!1!==i&&(n.stopPropagation?n.stopPropagation():n.cancelBubble=!0)},trigger:function(t,e){if(n(t[e]))t[e]();else if(t.fireEvent)t.fireEvent("on"+e);else if(t.dispatchEvent){var i=document.createEvent("HTMLEvents");i.initEvent(e,!0,!0),t.dispatchEvent(i)}},add:function(t,e,i,n){var r=function(s){i.call(t,u(s)),n&&g(t,e,r)};if(m(t,e,r),!n)return{stop:function(){g(t,e,r)}}}},t.Q=x}(window),function(t,e){"use strict";function i(t,e){var i=t.lastIndexOf(e);return-1!=i?t.slice(i):""}function n(t){if(t){for(var e=t.split(","),i={},n=0,r=e.length;n<r;n++)i[e[n]]=!0;return i}}function r(t){this.guid=t.guid||"uploader"+ ++_,this.url=t.url,this.dataType=t.dataType||"json",this.data=t.data,this.targets=t.target||[],this.targets.forEach||(this.targets=[this.targets]),this.target=this.targets[0],this.html5=x&&!!s(t.html5,!0),this.multiple=E&&this.html5&&!!s(t.multiple,!0),this.clickTrigger=S&&!!s(t.clickTrigger,!0),this.workerThread=this.html5?t.workerThread||1:1,this.workerIdle=this.workerThread,this.auto=!1!==t.auto,this.upName=t.upName||"upfile",this.allows=n(t.allows),this.disallows=n(t.disallows),this.maxSize=+t.maxSize||0,this.chunkSize=t.chunkSize||2097152,this.isSlice=!!t.isSlice,this.isQueryState=!!s(t.isQueryState,this.isSlice),this.isMd5=!!s(t.isMd5,this.isSlice),this.isUploadAfterHash=!1!==t.isUploadAfterHash,this.container=t.container||document.body,t.getPos&&(this.getPos=t.getPos);var e=t.UI||{};e.init&&(this.init=e.init),e.draw&&(this.draw=e.draw),e.update&&(this.update=e.update),e.over&&(this.over=e.over),this.fns=t.on||{},this.ops=t,this.list=[],this.map={},this.index=0,this.started=!1,this._init()}var s=Q.def,a=Q.fire,o=Q.extend,l=Q.getFirst,u=Q.getLast,c=JSON.parse,d=Q.createEle,f=Q.parseHTML,h=Q.setOpacity,p=Q.getOffset,v=Q.md5File,m=Q.event,g=m.add,y=m.trigger,w=m.stop,x=!1,E=!1,S=!1,_=0,T=0,b=0,L=-1;r.prototype={constructor:r,_init:function(){var t=this;if(!t._inited){t._inited=!0;var e=t.guid,i=t.container,n=d("div","upload-input "+e);if(i.appendChild(n),t.boxInput=n,!t.html5){var r="upload_iframe_"+e,s=d("div","upload-html4 "+e,'<iframe class="u-iframe" name="'+r+'"></iframe><form class="u-form" action="" method="post" enctype="multipart/form-data" target="'+r+'"></form>');i.appendChild(s);var a=l(s),o=u(s);t.iframe=a,t.form=o,function(t,e){t.attachEvent?t.attachEvent("onload",e):t.addEventListener("load",e,!1)}(a,function(){if(0==t.workerIdle){var e;try{e=a.contentWindow.document.body.innerHTML}catch(t){}t.complete(void 0,2,e)}})}return t.targets.forEach(function(e){t.clickTrigger?g(e,"click",function(e){!1!==t.fire("select",e)&&(t.resetInput(),y(t.inputFile,"click"))}):g(e,"mouseover",function(e){t.target=this,t.updatePos()})}),t.clickTrigger||(g(n,"click",function(e){!1===t.fire("select",e)&&w(e)}),h(n,0),t.resetInput()),t.fire("init"),t.run("init")}},resetInput:function(){var t=this,e=t.boxInput;e.innerHTML='<input type="file" name="'+t.upName+'" style="'+(t.clickTrigger?"visibility: hidden;":"font-size:100px;")+'"'+(t.multiple?' multiple="multiple"':"")+">";var i=l(e);return g(i,"change",function(e){t.add(this),t.html5||t.resetInput()}),t.inputFile=i,t.updatePos()},updatePos:function(t){if(this.clickTrigger)return this;var e=this.getPos||p,i=this.boxInput,n=l(i),r=this.target,s=r.offsetWidth,a=r.offsetHeight,o=0==s?{left:-1e4,top:-1e4}:e(r);return i.style.width=n.style.width=s+"px",i.style.height=n.style.height=a+"px",i.style.left=o.left+"px",i.style.top=o.top+"px",t&&(i.style.zIndex=++b),this},fire:function(t,e,i){if(!i)return a(this.fns[t],this,e);var n=this.fns[t+"Async"];if(n)return a(n,this,e,i);i(a(this.fns[t],this,e))},run:function(t,e){var i=this[t];return i&&a(i,this,e),this},addTask:function(t,e){if(t||e){var n,r;e?(n=e.name||e.fileName,r=e.size||e.fileSize):(n=i(t.value,"\\").slice(1)||t.value,r=-1);var s,a=this,o=i(n,".").toLowerCase();a.disallows&&a.disallows[o]||a.allows&&!a.allows[o]?s="ext":-1!=r&&a.maxSize&&r>a.maxSize&&(s="size");var l={id:++T,name:n,ext:o,size:r,input:t,file:e,state:s?L:0};return s&&(l.limited=s,l.disabled=!0),a.fire("add",l,function(t){!1===t||l.disabled||l.limited||(l.index=a.list.length,a.list.push(l),a.map[l.id]=l,a.run("draw",l),a.auto&&a.start())}),l}},add:function(t){if("INPUT"==t.tagName){var e=t.files;if(e)for(var i=0,n=e.length;i<n;i++)this.addTask(t,e[i]);else this.addTask(t)}else this.addTask(void 0,t)},addList:function(t){for(var e=0,i=t.length;e<i;e++)this.add(t[e])},get:function(t){if(void 0!=t)return this.map[t]},cancel:function(t,e){var i=this.get(t);if(i){var n=i.state;if(0!=n&&1!=n)return this;if(1==n){var r=i.xhr;if(r)return r.abort(),this;this.iframe.contentWindow.location="about:blank"}return e?this:this.complete(i,-2)}},remove:function(t){var e=this.get(t);e&&(1==e.state&&this.cancel(t),e.deleted=!0,this.fire("remove",e))},start:function(){var t=this.workerIdle,e=this.list,i=this.index,n=e.length;if(this.started||(this.started=!0),n<=0||i>=n||t<=0)return this;var r=e[i];return this.index++,this.upload(r)},upload:function(t){var e=this;return!t||0!=t.state||t.skip?e.start():(t.url=e.url,e.workerIdle--,e.fire("upload",t,function(i){if(!1===i)return e.complete(t,L);e.html5&&t.file?e._upload_html5_ready(t):t.input?e._upload_html4(t):e.complete(t,L)}),e)},queryState:function(t,e){var i=this,n=i.url,r=new XMLHttpRequest;return t.queryUrl=n+(-1==n.indexOf("?")?"?":"&")+"action=query&hash="+(t.hash||encodeURIComponent(t.name))+"&fileName="+encodeURIComponent(t.name),i.fire("sliceQuery",t),r.open("GET",t.queryUrl),r.onreadystatechange=function(){if(4==r.readyState){var n,s;if(r.status>=200&&r.status<400)if("ok"===(n=r.responseText)?s={ret:1}:n&&(s=c(n)),s&&"number"!=typeof s||(s={ret:0,start:s}),t.response=n,t.json=s,1==s.ret)t.queryOK=!0,i.cancel(t.id,!0).complete(t,2);else{var o=+s.start||0;o!=Math.floor(o)&&(o=0),t.sliceStart=o}a(e,i,r)}},r.onerror=function(){a(e,i,r)},r.send(null),i},_upload_html5_ready:function(t){var e=this,i=function(){2!=t.state&&(e.isSlice?e._upload_slice(t):e._upload_html5(t))},n=function(i){e.fire("hash",t,function(){t.hash&&e.isQueryState&&2!=t.state?e.queryState(t,i):i()})},r=function(i){if(e.isMd5&&v){var r=e.fns.hashProgress;v(t.file,function(e,r){t.hash=e,t.timeHash=r,n(i)},function(i){a(r,e,t,i)})}else n(i)};return e.isUploadAfterHash?r(i):(i(),r()),e},_process_params:function(t,e){this.data&&Object.forEach(this.data,e),t.data&&Object.forEach(t.data,e)},_upload_html5:function(t){var e=this,i=new XMLHttpRequest;t.xhr=i,i.upload.addEventListener("progress",function(i){e.progress(t,i.total,i.loaded)},!1),i.addEventListener("load",function(i){e.complete(t,2,i.target.responseText)},!1),i.addEventListener("error",function(){e.complete(t,-3)},!1),i.addEventListener("abort",function(){e.complete(t,-2)},!1);var n=new FormData;e._process_params(t,function(t,e){n.append(t,e)}),n.append("fileName",t.name),n.append(e.upName,t.blob||t.file,t.name),i.open("POST",t.url),e.fire("send",t,function(r){if(!1===r)return e.complete(t,L);i.send(n),e._afterSend(t)})},_upload_html4:function(t){var e=this,i=e.form,n=t.input;if(n._uploaded)return e.complete(t,2);n._uploaded=!0,n.name=e.upName,i.innerHTML="",i.appendChild(n),i.action=t.url,e._process_params(t,function(t,e){i.appendChild(f('<input type="hidden" name="'+t+'" value="'+e+'">'))}),e.fire("send",t,function(n){if(!1===n)return e.complete(t,L);i.submit(),e._afterSend(t)})},_afterSend:function(t){t.lastTime=t.startTime=Date.now(),t.state=1,this._lastTask=t,this.progress(t)},progress:function(t,e,i){e||(e=t.size),(!i||i<0)&&(i=0);var n=t.state||0;i>e&&(i=e),i>0&&0==n&&(t.state=n=1),2==n&&(e=i=t.size),function(t,e,i){if(e&&!(e<=0)){var n,r=Date.now();if(i>=e)return(n=r-t.startTime)?t.avgSpeed=Math.min(Math.round(1e3*e/n),e):t.speed||(t.avgSpeed=t.speed=e),t.time=n||0,void(t.endTime=r);(n=r-t.lastTime)<200||(t.speed=Math.min(Math.round(1e3*(i-t.loaded)/n),t.total),t.lastTime=r)}}(t,e,i),t.total=e,t.loaded=i,this.fire("progress",t),this.run("update",t)},_process_response:function(t,e){t.response=e,e&&"json"==this.dataType&&(t.json=c(e))},complete:function(t,e,i){return t||1!=this.workerThread||(t=this._lastTask),t&&(void 0!=e&&(t.state=e),1!=t.state&&2!=e||(t.state=2,this.progress(t,t.size,t.size)),void 0!==i&&this._process_response(t,i)),this.run("update",t).run("over",t),-2==e&&this.fire("cancel",t),this.fire("complete",t),this.workerIdle++,this.started&&this.start(),this}},r.extend=function(t,e){o(r.prototype,t,e)},function(){var e=t.XMLHttpRequest;e&&(new e).upload&&t.FormData&&(x=!0);var i=document.createElement("input");i.type="file",E=!!i.files,S=x}(),o(r,{support:{html5:x,multiple:E},READY:0,PROCESSING:1,COMPLETE:2,SKIP:L,CANCEL:-2,ERROR:-3,UI:{},Lang:{status_ready:"准备中",status_processing:"上传中",status_complete:"已完成",status_skip:"已跳过",status_cancel:"已取消",status_error:"已失败"},getStatusText:function(t){var e=r.Lang;switch(t){case 0:return e.status_ready;case 1:return e.status_processing;case 2:return e.status_complete;case L:return e.status_skip;case-2:return e.status_cancel;case-3:return e.status_error}return t}}),Q.Uploader=r}(window),function(t,e){"use strict";function i(t,e){t.className+=" "+e}function n(t,e){t&&(t.innerHTML=e||"")}var r=Q.def,s=Q.getFirst,a=Q.getLast,o=Q.getNext,l=Q.createEle,u=Q.formatSize,c=Q.event.add,d=Q.Uploader,f=d.Lang;d.UI.File={init:function(){var t=this.ops.view;t&&i(t,"ui-file "+(this.html5?"html5":"html4"))},draw:function(t){var e=this,i=e.ops,n=i.view;if(n){var o=i.button||{},u=r(f.cancel||o.cancel,"取消"),d=r(f.remove||o.remove,"删除"),h=t.name,p='<div class="fl"><div class="u-name" title="'+h+'">'+h+'</div></div><div class="fr"><div class="u-size"></div><div class="u-speed">--/s</div><div class="u-progress-bar"><div class="u-progress" style="width:1%;"></div></div><div class="u-detail">0%</div><div class="u-state"></div><div class="u-op"><a class="u-op-cancel">'+u+'</a><a class="u-op-remove">'+d+'</a></div></div><div class="clear"></div>',v=t.id,m=l("div","u-item",p);m.taskId=v,t.box=m,n.appendChild(m);var g=a(m.childNodes[1]),y=s(g),w=a(g);c(y,"click",function(){e.cancel(v)}),c(w,"click",function(){e.remove(v),n.removeChild(m)}),e.update(t)}},update:function(t){if(t&&t.box){var e=t.total||t.size,i=t.loaded,r=t.state,a=t.box.childNodes[1],l=s(a),c=o(l),f=o(c),h=s(f),p=o(f);if(n(o(p),d.getStatusText(r)),!(e<0)){var v="";if(this.html5&&void 0!=i&&i>=0){var m;r==d.PROCESSING?"100.0"==(m=Math.min(100*i/e,100).toFixed(1))&&(m="99.9"):r==d.COMPLETE&&(m="100"),m&&(m+="%",h.style.width=m,n(p,m)),v='<span class="u-loaded">'+u(i)+"</span> / ";var g=t.avgSpeed||t.speed;n(c,u(g)+"/s")}n(l,v+='<span class="u-total">'+u(e)+"</span>")}}},over:function(t){t&&t.box&&i(t.box,"u-over")}},d.extend(d.UI.File)}(window);