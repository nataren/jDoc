(function(){var e=this.jDoc=function(a){if(arguments.length===3){var b=arguments[0],c=arguments[1],d=arguments[2];this._list=b;this._index=c;this._parent=d;this.json=c>=0&&c<b.length?b[c]:null}else{this._list=a!==null?[a]:[];this._index=0;this._parent=null;this.json=a}},h=new e(null),i=function(a,b){if(typeof b==="object"&&typeof b.length==="number")for(var c=0;c<b.length;++c)a.push(b[c]);else a.push(b)},g=function(a,b,c,d){a.each(function(j){for(var k in j){var f=j[k];if(typeof f!=="function"){b(k)&&
i(d,f);if(c)if(typeof f==="object")typeof f.length==="number"?g(new e(f,0,null),b,c,d):g(new e(f),b,c,d)}}})},l=function(a){return typeof a==="function"?a:a instanceof RegExp?function(b){return a.test(b)}:function(b){return b===a}};$.extend(e.prototype,{any:function(){return this._list.length>0},first:function(){return new e(this._list,0,this._parent)},next:function(){if(!this.hasValue())return this;var a=this._index+1;if(a<this._list.length)return new e(this._list,a,this._parent);return h},each:function(a,
b){for(var c=0,d=this._list[0];typeof d!=="undefined"&&a.call(b,d)!==false;d=this._list[++c]);},get:function(a){if(a>=0&&a<this._list.length)return new e([this._list[a]],0,this);return h},count:function(){return this._list.length},where:function(a,b){var c=[];this.each(function(d){a.call(b,new e(d))&&i(c,d)});return new e(c,0,this)},hasValue:function(){return this._index<this._list.length},parent:function(){return this._parent!==null?this._parent:h},root:function(){return this._parent!==null?this._parent.root():
this},text:function(){for(var a=this.json;a!==null;)switch(typeof a){case "boolean":case "number":return a.toString();case "string":return a;case "object":if(typeof a.length==="undefined"){a=a["#text"];return typeof a!=="undefined"?a:null}else if(a.length>0)a=a[0];else return null;break;default:return null}return null},match:function(a){if(!this.hasValue())return this;var b=[];g(this,l(a),false,b);return new e(b,0,this)},deepMatch:function(a){if(!this.hasValue())return this;var b=[];g(this,l(a),true,
b);return new e(b,0,this)}})})();
