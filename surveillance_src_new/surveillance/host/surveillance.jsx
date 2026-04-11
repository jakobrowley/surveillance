"object"!=typeof JSON&&(JSON={}),function(){"use strict";var rx_one=/^[\],:{}\s]*$/,rx_two=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,rx_three=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,rx_four=/(?:^|:|,)(?:\s*\[)+/g,rx_escapable=/[\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,rx_dangerous=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta,rep;function f(t){return t<10?"0"+t:t}function this_value(){return this.valueOf()}function quote(t){return rx_escapable.lastIndex=0,rx_escapable.test(t)?'"'+t.replace(rx_escapable,(function(t){var e=meta[t];return"string"==typeof e?e:"\\u"+("0000"+t.charCodeAt(0).toString(16)).slice(-4)}))+'"':'"'+t+'"'}function str(t,e){var r,n,o,u,f,a=gap,i=e[t];switch(i&&"object"==typeof i&&"function"==typeof i.toJSON&&(i=i.toJSON(t)),"function"==typeof rep&&(i=rep.call(e,t,i)),typeof i){case"string":return quote(i);case"number":return isFinite(i)?String(i):"null";case"boolean":case"null":return String(i);case"object":if(!i)return"null";if(gap+=indent,f=[],"[object Array]"===Object.prototype.toString.apply(i)){for(u=i.length,r=0;r<u;r+=1)f[r]=str(r,i)||"null";return o=0===f.length?"[]":gap?"[\n"+gap+f.join(",\n"+gap)+"\n"+a+"]":"["+f.join(",")+"]",gap=a,o}if(rep&&"object"==typeof rep)for(u=rep.length,r=0;r<u;r+=1)"string"==typeof rep[r]&&(o=str(n=rep[r],i))&&f.push(quote(n)+(gap?": ":":")+o);else for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(o=str(n,i))&&f.push(quote(n)+(gap?": ":":")+o);return o=0===f.length?"{}":gap?"{\n"+gap+f.join(",\n"+gap)+"\n"+a+"}":"{"+f.join(",")+"}",gap=a,o}}"function"!=typeof Date.prototype.toJSON&&(Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null},Boolean.prototype.toJSON=this_value,Number.prototype.toJSON=this_value,String.prototype.toJSON=this_value),"function"!=typeof JSON.stringify&&(meta={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},JSON.stringify=function(t,e,r){var n;if(gap="",indent="","number"==typeof r)for(n=0;n<r;n+=1)indent+=" ";else"string"==typeof r&&(indent=r);if(rep=e,e&&"function"!=typeof e&&("object"!=typeof e||"number"!=typeof e.length))throw new Error("JSON.stringify");return str("",{"":t})}),"function"!=typeof JSON.parse&&(JSON.parse=function(text,reviver){var j;function walk(t,e){var r,n,o=t[e];if(o&&"object"==typeof o)for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(void 0!==(n=walk(o,r))?o[r]=n:delete o[r]);return reviver.call(t,e,o)}if(text=String(text),rx_dangerous.lastIndex=0,rx_dangerous.test(text)&&(text=text.replace(rx_dangerous,(function(t){return"\\u"+("0000"+t.charCodeAt(0).toString(16)).slice(-4)}))),rx_one.test(text.replace(rx_two,"@").replace(rx_three,"]").replace(rx_four,"")))return j=eval("("+text+")"),"function"==typeof reviver?walk({"":j},""):j;throw new SyntaxError("JSON.parse")})}();

var surv = {};
surv.scriptName = "Surveillance";
surv.keyNames = {};
surv.keyNames.licenseKey = "License Key";
surv.licenseKey = "";

//@include 'src/PseudoEffect/PseudoEffect.js';

PseudoEffect.push({
	binaryString: 'RIFX\x00\x005\x00FaFXhead\x00\x00\x00\x10\x00\x00\x00\x03\x00\x00\x00D\x00\x00\x00\x01\x01\x00\x00\x00LIST\x00\x004\u00DCbescbeso\x00\x00\x008\x00\x00\x00\x01\x00\x00\x00\x01\x00\x00\x00\x00\x00\x00]\u00A8\x00\x1D\u00F8R\x00\x00\x00\x00\x00d\x00d\x00d\x00d?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u00FF\u00FF\u00FF\u00FFLIST\x00\x00\x00\u00ACtdsptdot\x00\x00\x00\x04\u00FF\u00FF\u00FF\u00FFtdpl\x00\x00\x00\x04\x00\x00\x00\x02LIST\x00\x00\x00@tdsitdix\x00\x00\x00\x04\u00FF\u00FF\u00FF\u00FFtdmn\x00\x00\x00(ADBE Effect Parade\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00@tdsitdix\x00\x00\x00\x04\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/SurveillanceTracker\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdsn\x00\x00\x00\x16Surveillance: Tracker\x00LIST\x00\x00\x00dtdsptdot\x00\x00\x00\x04\u00FF\u00FF\u00FF\u00FFtdpl\x00\x00\x00\x04\x00\x00\x00\x01LIST\x00\x00\x00@tdsitdix\x00\x00\x00\x04\u00FF\u00FF\u00FF\u00FFtdmn\x00\x00\x00(ADBE End of path sentinel\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x003Rsspcfnam\x00\x00\x000\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x15 parTparn\x00\x00\x00\x04\x00\x00\x00\x1Atdmn\x00\x00\x00(Pseudo/SurveillanceTracker-0000\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x02\x00\x00\x00\x00\x00\x00\x00\x0E\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u00FF\u00FF\u00FF\u00FF\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/SurveillanceTracker-0001\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x07Type\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x01\x00\x03\x00\x01\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pdnm\x00\x00\x002Corners|Corners & Crosshair|Full|Full & Crosshair\x00tdmn\x00\x00\x00(Pseudo/SurveillanceTracker-0002\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\nWidth\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00It$\x00\x00\x00\x00\x00E;\u0080\x00CH\x00\x00\x00\x02\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/SurveillanceTracker-0003\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\nHeight\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00It$\x00\x00\x00\x00\x00E;\u0080\x00CH\x00\x00\x00\x02\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/SurveillanceTracker-0004\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\nCorner Size\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00B\u00C8\x00\x00\x00\x00\x00\x00B\u00C8\x00\x00BH\x00\x00\x00\x02\x00\x01\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/SurveillanceTracker-0005\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\nStroke Width\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00G\u00C3P\x00\x00\x00\x00\x00BH\x00\x00Ap\x00\x00\x00\x02\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/SurveillanceTracker-0006\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\rColor\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/SurveillanceTracker-0007\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\nHue\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00C\u00B4\x00\x00\x00\x00\x00\x00C\u00B4\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/SurveillanceTracker-0008\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\nSaturation\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00B\u00C8\x00\x00\x00\x00\x00\x00B\u00C8\x00\x00B\u00C8\x00\x00\x00\x00\x00\x01\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/SurveillanceTracker-0009\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\nLightness\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00B\u00C8\x00\x00\x00\x00\x00\x00B\u00C8\x00\x00BH\x00\x00\x00\x00\x00\x01\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/SurveillanceTracker-0010\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\nOpacity\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00B\u00C8\x00\x00\x00\x00\x00\x00B\u00C8\x00\x00B\u00C8\x00\x00\x00\x00\x00\x01\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/SurveillanceTracker-0011\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x0E\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/SurveillanceTracker-0012\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\rShake\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/SurveillanceTracker-0013\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x04Shake On/Off\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x01\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pdnm\x00\x00\x00\x01\x00\x00tdmn\x00\x00\x00(Pseudo/SurveillanceTracker-0014\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\nShake Amount\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00B\u00C8\x00\x00\x00\x00\x00\x00B\u00C8\x00\x00BH\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/SurveillanceTracker-0015\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\nShake Frequency\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00F\x1C@\x00\x00\x00\x00\x00B\u00C8\x00\x00A \x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/SurveillanceTracker-0016\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x0E\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/SurveillanceTracker-0017\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\rFlicker\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/SurveillanceTracker-0018\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x04Flicker On/Off\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x01\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pdnm\x00\x00\x00\x01\x00\x00tdmn\x00\x00\x00(Pseudo/SurveillanceTracker-0019\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\nFlicker Amount\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00F\x1C@\x00\x00\x00\x00\x00B\u00C8\x00\x00BH\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/SurveillanceTracker-0020\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\nFlicker Frequency\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00F\x1C@\x00\x00\x00\x00\x00B\u00C8\x00\x00B\u00C8\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/SurveillanceTracker-0021\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x0E\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/SurveillanceTracker-0022\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\rLow Res\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/SurveillanceTracker-0023\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x04Low Res On/Off\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pdnm\x00\x00\x00\x01\x00\x00tdmn\x00\x00\x00(Pseudo/SurveillanceTracker-0024\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\nLow Res Amount\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00B\u00C8\x00\x00A \x00\x00B\u00C8\x00\x00BH\x00\x00\x00\x00\x00\x01\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/SurveillanceTracker-0025\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x0E\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x1D\u00E6tdgptdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\x16Surveillance: Tracker\x00tdmn\x00\x00\x00(Pseudo/SurveillanceTracker-0000\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00\u00DAtdbstdsb\x00\x00\x00\x04\x00\x00\x00\x03tdsn\x00\x00\x00\x01\x00\x00tdb4\x00\x00\x00|\u00DB\u0099\x00\x01\x00\x01\x00\x00\x00\x01\x00\x00\x00\x00\x02X?\x1A6\u00E2\u00EB\x1CC-?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x04\x04\u00C0\u00C0\u00C0\u00FF\u00C0\u00C0\u00C0\x00\x00\x00\x00\u0080\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00(\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdpi\x00\x00\x00\x04\x00\x00\x00\x0Etdmn\x00\x00\x00(Pseudo/SurveillanceTracker-0001\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00\u00D2tdbstdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\x05Type\x00\x00tdb4\x00\x00\x00|\u00DB\u0099\x00\x01\x00\x01\x00\x00\x00\x01\x00\x04\x00\x00]\u00A8?\x1A6\u00E2\u00EB\x1CC-?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x04\x04\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00(?\u00F0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/SurveillanceTracker-0002\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00\u00F2tdbstdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\x06Width\x00tdb4\x00\x00\x00|\u00BD\u0099\x00\x01\x00\x01\x00\x00\x00\x01\x00\u00FF\x00\x00]\u00A8\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00(@i\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdum\x00\x00\x00\b\x00\x00\x00\x00\x00\x00\x00\x00tduM\x00\x00\x00\b@\u00A7p\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/SurveillanceTracker-0003\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00\u00F4tdbstdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\x07Height\x00\x00tdb4\x00\x00\x00|\u00BD\u0099\x00\x01\x00\x01\x00\x00\x00\x01\x00\u00FF\x00\x00]\u00A8\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00(@i\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdum\x00\x00\x00\b\x00\x00\x00\x00\x00\x00\x00\x00tduM\x00\x00\x00\b@\u00A7p\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/SurveillanceTracker-0004\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00\u00F8tdbstdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\fCorner Size\x00tdb4\x00\x00\x00|\u00BD\u0099\x00\x01\x00\x01\x00\x00\x00\x01\x00\u00FF\x00\x00]\u00A8\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00(@I\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdum\x00\x00\x00\b\x00\x00\x00\x00\x00\x00\x00\x00tduM\x00\x00\x00\b@Y\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/SurveillanceTracker-0005\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00\u00FAtdbstdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\rStroke Width\x00\x00tdb4\x00\x00\x00|\u00BD\u0099\x00\x01\x00\x01\x00\x00\x00\x01\x00\u00FF\x00\x00]\u00A8\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00(@.\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdum\x00\x00\x00\b\x00\x00\x00\x00\x00\x00\x00\x00tduM\x00\x00\x00\b@I\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/SurveillanceTracker-0006\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00\u00D2tdbstdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\x06Color\x00tdb4\x00\x00\x00|\u00BD\u0099\x00\x01\x00\x01\x00\x00\x00\x01\x00\x04\x00\x00]\u00A8\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00(\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/SurveillanceTracker-0007\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00\u00F0tdbstdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\x04Hue\x00tdb4\x00\x00\x00|\u00BD\u0099\x00\x01\x00\x01\x00\x00\x00\x01\x00\u00FF\x00\x00]\u00A8\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00(\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdum\x00\x00\x00\b\x00\x00\x00\x00\x00\x00\x00\x00tduM\x00\x00\x00\b@v\u0080\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/SurveillanceTracker-0008\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00\u00F8tdbstdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\x0BSaturation\x00\x00tdb4\x00\x00\x00|\u00BD\u0099\x00\x01\x00\x01\x00\x00\x00\x01\x00\u00FF\x00\x00]\u00A8\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00(@Y\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdum\x00\x00\x00\b\x00\x00\x00\x00\x00\x00\x00\x00tduM\x00\x00\x00\b@Y\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/SurveillanceTracker-0009\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00\u00F6tdbstdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\nLightness\x00tdb4\x00\x00\x00|\u00BD\u0099\x00\x01\x00\x01\x00\x00\x00\x01\x00\u00FF\x00\x00]\u00A8\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00(@I\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdum\x00\x00\x00\b\x00\x00\x00\x00\x00\x00\x00\x00tduM\x00\x00\x00\b@Y\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/SurveillanceTracker-0010\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00\u00F4tdbstdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\bOpacity\x00tdb4\x00\x00\x00|\u00BD\u0099\x00\x01\x00\x01\x00\x00\x00\x01\x00\u00FF\x00\x00]\u00A8\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00(@Y\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdum\x00\x00\x00\b\x00\x00\x00\x00\x00\x00\x00\x00tduM\x00\x00\x00\b@Y\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/SurveillanceTracker-0011\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00\u00EEtdbstdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\x16Surveillance: Tracker\x00tdb4\x00\x00\x00|\u00BD\u0099\x00\x01\x00\x01\x00\x00\x00\x01\x00\x04\x00\x00]\u00A8\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00(\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdpi\x00\x00\x00\x04\x00\x00\x00\x0Etdmn\x00\x00\x00(Pseudo/SurveillanceTracker-0012\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00\u00D2tdbstdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\x06Shake\x00tdb4\x00\x00\x00|\u00BD\u0099\x00\x01\x00\x01\x00\x00\x00\x01\x00\x04\x00\x00]\u00A8\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00(\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/SurveillanceTracker-0013\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00\u00DAtdbstdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\rShake On/Off\x00\x00tdb4\x00\x00\x00|\u00DB\u0099\x00\x01\x00\x01\x00\x00\x00\x01\x00\x04\x00\x00]\u00A8?\x1A6\u00E2\u00EB\x1CC-?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x04\x04\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00(?\u00F0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/SurveillanceTracker-0014\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00\u00FAtdbstdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\rShake Amount\x00\x00tdb4\x00\x00\x00|\u00BD\u0099\x00\x01\x00\x01\x00\x00\x00\x01\x00\u00FF\x00\x00]\u00A8\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00(@I\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdum\x00\x00\x00\b\x00\x00\x00\x00\x00\x00\x00\x00tduM\x00\x00\x00\b@Y\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/SurveillanceTracker-0015\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00\u00FCtdbstdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\x10Shake Frequency\x00tdb4\x00\x00\x00|\u00BD\u0099\x00\x01\x00\x01\x00\x00\x00\x01\x00\u00FF\x00\x00]\u00A8\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00(@$\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdum\x00\x00\x00\b\x00\x00\x00\x00\x00\x00\x00\x00tduM\x00\x00\x00\b@Y\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/SurveillanceTracker-0016\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00\u00EEtdbstdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\x16Surveillance: Tracker\x00tdb4\x00\x00\x00|\u00BD\u0099\x00\x01\x00\x01\x00\x00\x00\x01\x00\x04\x00\x00]\u00A8\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00(\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdpi\x00\x00\x00\x04\x00\x00\x00\x0Etdmn\x00\x00\x00(Pseudo/SurveillanceTracker-0017\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00\u00D4tdbstdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\bFlicker\x00tdb4\x00\x00\x00|\u00BD\u0099\x00\x01\x00\x01\x00\x00\x00\x01\x00\x04\x00\x00]\u00A8\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00(\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/SurveillanceTracker-0018\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00\u00DCtdbstdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\x0FFlicker On/Off\x00\x00tdb4\x00\x00\x00|\u00DB\u0099\x00\x01\x00\x01\x00\x00\x00\x01\x00\x04\x00\x00]\u00A8?\x1A6\u00E2\u00EB\x1CC-?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x04\x04\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00(?\u00F0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/SurveillanceTracker-0019\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00\u00FCtdbstdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\x0FFlicker Amount\x00\x00tdb4\x00\x00\x00|\u00BD\u0099\x00\x01\x00\x01\x00\x00\x00\x01\x00\u00FF\x00\x00]\u00A8\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00(@I\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdum\x00\x00\x00\b\x00\x00\x00\x00\x00\x00\x00\x00tduM\x00\x00\x00\b@Y\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/SurveillanceTracker-0020\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00\u00FEtdbstdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\x12Flicker Frequency\x00tdb4\x00\x00\x00|\u00BD\u0099\x00\x01\x00\x01\x00\x00\x00\x01\x00\u00FF\x00\x00]\u00A8\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00(@Y\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdum\x00\x00\x00\b\x00\x00\x00\x00\x00\x00\x00\x00tduM\x00\x00\x00\b@Y\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/SurveillanceTracker-0021\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00\u00EEtdbstdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\x16Surveillance: Tracker\x00tdb4\x00\x00\x00|\u00BD\u0099\x00\x01\x00\x01\x00\x00\x00\x01\x00\x04\x00\x00]\u00A8\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00(\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdpi\x00\x00\x00\x04\x00\x00\x00\x0Etdmn\x00\x00\x00(Pseudo/SurveillanceTracker-0022\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00\u00D4tdbstdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\bLow Res\x00tdb4\x00\x00\x00|\u00BD\u0099\x00\x01\x00\x01\x00\x00\x00\x01\x00\x04\x00\x00]\u00A8\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00(\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/SurveillanceTracker-0023\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00\u00DCtdbstdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\x0FLow Res On/Off\x00\x00tdb4\x00\x00\x00|\u00DB\u0099\x00\x01\x00\x01\x00\x00\x00\x01\x00\x04\x00\x00]\u00A8?\x1A6\u00E2\u00EB\x1CC-?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x04\x04\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00(\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/SurveillanceTracker-0024\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00\u00FCtdbstdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\x0FLow Res Amount\x00\x00tdb4\x00\x00\x00|\u00BD\u0099\x00\x01\x00\x01\x00\x00\x00\x01\x00\u00FF\x00\x00]\u00A8\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00(@I\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdum\x00\x00\x00\b@$\x00\x00\x00\x00\x00\x00tduM\x00\x00\x00\b@Y\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/SurveillanceTracker-0025\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00\u00EEtdbstdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\x16Surveillance: Tracker\x00tdb4\x00\x00\x00|\u00BD\u0099\x00\x01\x00\x01\x00\x00\x00\x01\x00\x04\x00\x00]\u00A8\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00(\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdpi\x00\x00\x00\x04\x00\x00\x00\x0Etdmn\x00\x00\x00(ADBE Group End\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00{\"controlName\":\"Surveillance: Tracker\",\"matchname\":\"Pseudo/SurveillanceTracker\",\"controlArray\":[{\"name\":\"Type\",\"type\":\"popup\",\"canHaveKeyframes\":true,\"canBeInvisible\":true,\"invisible\":false,\"keyframes\":true,\"id\":5122521699,\"hold\":true,\"default\":1,\"content\":\"Corners|Corners & Crosshair|Full|Full & Crosshair\",\"error\":[\n\n]},{\"name\":\"Width\",\"type\":\"slider\",\"canHaveKeyframes\":true,\"canBeInvisible\":true,\"invisible\":false,\"keyframes\":true,\"id\":8557343967,\"hold\":false,\"default\":200,\"sliderMax\":3000,\"sliderMin\":0,\"validMax\":1000000,\"validMin\":0,\"precision\":2,\"percent\":false,\"pixel\":false,\"open\":true,\"errors\":[\n\n],\"error\":[\n\n]},{\"name\":\"Height\",\"type\":\"slider\",\"canHaveKeyframes\":true,\"canBeInvisible\":true,\"invisible\":false,\"keyframes\":true,\"id\":2008232440,\"hold\":false,\"default\":200,\"sliderMax\":3000,\"sliderMin\":0,\"validMax\":1000000,\"validMin\":0,\"precision\":2,\"percent\":false,\"pixel\":false,\"open\":true,\"errors\":[\n\n],\"error\":[\n\n]},{\"name\":\"Corner Size\",\"type\":\"slider\",\"canHaveKeyframes\":true,\"canBeInvisible\":true,\"invisible\":false,\"keyframes\":true,\"id\":9571742655,\"hold\":false,\"default\":50,\"sliderMax\":100,\"sliderMin\":0,\"validMax\":100,\"validMin\":0,\"precision\":2,\"percent\":true,\"pixel\":false,\"open\":true,\"errors\":[\n\n],\"error\":[\n\n]},{\"name\":\"Stroke Width\",\"type\":\"slider\",\"canHaveKeyframes\":true,\"canBeInvisible\":true,\"invisible\":false,\"keyframes\":true,\"id\":8427187217,\"hold\":false,\"default\":15,\"sliderMax\":50,\"sliderMin\":0,\"validMax\":100000,\"validMin\":0,\"precision\":2,\"percent\":false,\"pixel\":false,\"open\":true,\"errors\":[\n\n],\"error\":[\n\n]},{\"name\":\"Color\",\"type\":\"group\",\"canHaveKeyframes\":false,\"canBeInvisible\":true,\"invisible\":false,\"keyframes\":false,\"id\":7431239400,\"hold\":false,\"children\":[\n\n],\"open\":true,\"error\":[\n\n]},{\"name\":\"Hue\",\"type\":\"slider\",\"canHaveKeyframes\":true,\"canBeInvisible\":true,\"invisible\":false,\"keyframes\":true,\"id\":2596654958,\"hold\":false,\"default\":0,\"sliderMax\":360,\"sliderMin\":0,\"validMax\":360,\"validMin\":0,\"precision\":0,\"percent\":false,\"pixel\":false,\"open\":true,\"errors\":[\n\n],\"error\":[\n\n]},{\"name\":\"Saturation\",\"type\":\"slider\",\"canHaveKeyframes\":true,\"canBeInvisible\":true,\"invisible\":false,\"keyframes\":true,\"id\":8368238758,\"hold\":false,\"default\":100,\"sliderMax\":100,\"sliderMin\":0,\"validMax\":100,\"validMin\":0,\"precision\":0,\"percent\":true,\"pixel\":false,\"open\":true,\"errors\":[\n\n],\"error\":[\n\n]},{\"name\":\"Lightness\",\"type\":\"slider\",\"canHaveKeyframes\":true,\"canBeInvisible\":true,\"invisible\":false,\"keyframes\":true,\"id\":9809311058,\"hold\":false,\"default\":50,\"sliderMax\":100,\"sliderMin\":0,\"validMax\":100,\"validMin\":0,\"precision\":0,\"percent\":true,\"pixel\":false,\"open\":true,\"errors\":[\n\n],\"error\":[\n\n]},{\"name\":\"Opacity\",\"type\":\"slider\",\"canHaveKeyframes\":true,\"canBeInvisible\":true,\"invisible\":false,\"keyframes\":true,\"id\":4780323894,\"hold\":false,\"default\":100,\"sliderMax\":100,\"sliderMin\":0,\"validMax\":100,\"validMin\":0,\"precision\":0,\"percent\":true,\"pixel\":false,\"open\":true,\"errors\":[\n\n],\"error\":[\n\n]},{\"name\":\"EndGroup 1\",\"type\":\"endgroup\",\"canBeInvisible\":false,\"canHaveKeyframes\":false,\"keyframes\":false,\"hold\":false,\"id\":4641867955,\"groupId\":0,\"error\":[\n\n]},{\"name\":\"Shake\",\"type\":\"group\",\"canHaveKeyframes\":false,\"canBeInvisible\":true,\"invisible\":false,\"keyframes\":false,\"id\":5277624980,\"hold\":false,\"children\":[\n\n],\"open\":true,\"error\":[\n\n]},{\"name\":\"Shake On/Off\",\"type\":\"checkbox\",\"canHaveKeyframes\":true,\"canBeInvisible\":true,\"invisible\":false,\"default\":true,\"keyframes\":true,\"id\":9875082963,\"hold\":true,\"label\":\"\",\"error\":[\n\n]},{\"name\":\"Shake Amount\",\"type\":\"slider\",\"canHaveKeyframes\":true,\"canBeInvisible\":true,\"invisible\":false,\"keyframes\":true,\"id\":7547811059,\"hold\":false,\"default\":50,\"sliderMax\":100,\"sliderMin\":0,\"validMax\":100,\"validMin\":0,\"precision\":0,\"percent\":false,\"pixel\":false,\"open\":true,\"errors\":[\n\n],\"error\":[\n\n]},{\"name\":\"Shake Frequency\",\"type\":\"slider\",\"canHaveKeyframes\":true,\"canBeInvisible\":true,\"invisible\":false,\"keyframes\":true,\"id\":1987817189,\"hold\":false,\"default\":10,\"sliderMax\":100,\"sliderMin\":0,\"validMax\":10000,\"validMin\":0,\"precision\":0,\"percent\":false,\"pixel\":false,\"open\":false,\"errors\":[\n\n],\"error\":[\n\n]},{\"name\":\"EndGroup\",\"type\":\"endgroup\",\"canBeInvisible\":false,\"canHaveKeyframes\":false,\"keyframes\":false,\"hold\":false,\"id\":4510529632,\"groupId\":0,\"error\":[\n\n]},{\"name\":\"Flicker\",\"type\":\"group\",\"canHaveKeyframes\":false,\"canBeInvisible\":true,\"invisible\":false,\"keyframes\":false,\"id\":6824137767,\"hold\":false,\"children\":[\n\n],\"open\":true,\"error\":[\n\n]},{\"name\":\"Flicker On/Off\",\"type\":\"checkbox\",\"canHaveKeyframes\":true,\"canBeInvisible\":true,\"invisible\":false,\"default\":true,\"keyframes\":true,\"id\":2985105029,\"hold\":true,\"label\":\"\",\"error\":[\n\n]},{\"name\":\"Flicker Amount\",\"type\":\"slider\",\"canHaveKeyframes\":true,\"canBeInvisible\":true,\"invisible\":false,\"keyframes\":true,\"id\":4757578455,\"hold\":false,\"default\":50,\"sliderMax\":100,\"sliderMin\":0,\"validMax\":10000,\"validMin\":0,\"precision\":0,\"percent\":false,\"pixel\":false,\"open\":false,\"errors\":[\n\n],\"error\":[\n\n]},{\"name\":\"Flicker Frequency\",\"type\":\"slider\",\"canHaveKeyframes\":true,\"canBeInvisible\":true,\"invisible\":false,\"keyframes\":true,\"id\":8316601107,\"hold\":false,\"default\":100,\"sliderMax\":100,\"sliderMin\":0,\"validMax\":10000,\"validMin\":0,\"precision\":0,\"percent\":false,\"pixel\":false,\"open\":false,\"errors\":[\n\n],\"error\":[\n\n]},{\"name\":\"EndGroup\",\"type\":\"endgroup\",\"canBeInvisible\":false,\"canHaveKeyframes\":false,\"keyframes\":false,\"hold\":false,\"id\":1660640586,\"groupId\":0,\"error\":[\n\n]},{\"name\":\"Low Res\",\"type\":\"group\",\"canHaveKeyframes\":false,\"canBeInvisible\":true,\"invisible\":false,\"keyframes\":false,\"id\":5285391876,\"hold\":false,\"children\":[\n\n],\"open\":true,\"error\":[\n\n]},{\"name\":\"Low Res On/Off\",\"type\":\"checkbox\",\"canHaveKeyframes\":true,\"canBeInvisible\":true,\"invisible\":false,\"default\":false,\"keyframes\":true,\"id\":3468653867,\"hold\":true,\"label\":\"\",\"error\":[\n\n]},{\"name\":\"Low Res Amount\",\"type\":\"slider\",\"canHaveKeyframes\":true,\"canBeInvisible\":true,\"invisible\":false,\"keyframes\":true,\"id\":8912268617,\"hold\":false,\"default\":50,\"sliderMax\":100,\"sliderMin\":10,\"validMax\":100,\"validMin\":0,\"precision\":0,\"percent\":true,\"pixel\":false,\"open\":false,\"errors\":[\n\n],\"error\":[\n\n]},{\"name\":\"EndGroup\",\"type\":\"endgroup\",\"canBeInvisible\":false,\"canHaveKeyframes\":false,\"keyframes\":false,\"hold\":false,\"id\":4176915634,\"groupId\":0,\"error\":[\n\n]}],\"version\":3}',
	file: Folder.userData.fsName + '/TinyTapes/Surveillance/surveillanceTracker.ffx',
	matchName: 'Pseudo/SurveillanceTracker'
});

function canWriteFiles() {
   var appVersion, commandID, tabName;

   appVersion = parseFloat(app.version);

   commandID = 2359;
   tabName = 'General';
   if (appVersion >= 16.1) {
      commandID = 3131;
      tabName = 'Scripting & Expressions';
   }

   if (isSecurityPrefSet()) return true;

   alert(message = 'Surveillance requires access to write files.\n' +
      'Go to the "' + tabName + '" panel of the application preferences and make sure ' +
      '"Allow Scripts to Write Files and Access Network" is checked.');

   app.executeCommand(commandID);

   return isSecurityPrefSet();

   function isSecurityPrefSet() {
      return app.preferences.getPrefAsLong(
         'Main Pref Section',
         'Pref_SCRIPTING_FILE_NETWORK_SECURITY'
      ) === 1;
   }
}

function checkCanWriteFiles() {
	if (!(canWriteFiles())) {
	   return false;
	}
}

function checkUnfinished() {
	try {
		var unfinishedRootFolder = getFolderByName("_SURVEILLANCE");
		if (unfinishedRootFolder !== null) {
			var unfinishedComp = getItemByName(unfinishedRootFolder,"_SURVEILLANCE MASTER COMP");
			var unfinishedCompsFolder = getItemByName(unfinishedRootFolder,"Comps");
			if (unfinishedComp !== null || unfinishedCompsFolder !== null) {
				var win = new Window("dialog", "Surveillance");
				win.orientation = "column";
				win.alignment = ['center','top'];
				win.alignChildren = ['center', 'top'];
				win.spacing = 15;
				win.onClose = function() {
					if (ScriptUI.environment.keyboardState.keyName == "Escape") {
						okBtn.notify();
					}
				}

				var messageGroup = win.add("group");
				messageGroup.orientation = "column";
				messageGroup.spacing = 0;
				messageGroup.alignment = ['center','top'];
				messageGroup.alignChildren = ['center', 'top'];
				messageGroup.margins = [0,0,0,-8];

				messageGroup.add('statictext {text: "Unfinished assets from a previous session have", justify: "center", multiline: "true"}');
				messageGroup.add('statictext {text: "been found — these need to be removed to continue.", justify: "center", multiline: "true"}');
				win.add('statictext {text: "You can undo this action, but Surveillance won\'t work correctly.", justify: "center"}');

				var okBtn = win.add("button", undefined, "OK");
				okBtn.alignment = ["center","top"];

				okBtn.onClick = function() {
					app.beginUndoGroup("Remove unfinished assets")
					if (unfinishedComp !== null) {
						unfinishedComp.remove();
					}
					if (unfinishedCompsFolder !== null) {
						unfinishedCompsFolder.remove();
					}
					app.endUndoGroup();
					win.result = "ok";
					win.close();
				}

				win.center();
				win.show();

				return win.result;
			} else {
				return "ok";
			}
		} else {
			return "ok";
		}
	} catch (error) {
	alert(error.toString() +
		"\nScript file: " + File.decode(error.fileName).replace(/^.*[\|\/]/, "") +
		"\nError on line: " + error.line
	);}
}

function setTrackerName(layerId,name) {
	var tracker = app.project.layerByID(layerId);
	tracker.name = name;
}

function removeOfflineLicense() {
	var licenseKeyFile = new File(Folder.userData.fsName + "/com.surveillance.lic");
	if (licenseKeyFile.exists) {
		licenseKeyFile.remove();
	}
}

function checkOfflineLicense() {
	var licenseKeyFile = new File(Folder.userData.fsName + "/com.surveillance.lic");
	if (licenseKeyFile.exists) {
		licenseKeyFile.open("r");
		var content = licenseKeyFile.readln();
		licenseKeyFile.close();
		return content;
	} else {
		return "not found";
	}
}

function saveOfflineLicense(encryptedKey,email) {
	var licenseKeyFile = new File(Folder.userData.fsName + "/com.surveillance.lic");
	licenseKeyFile.open("w");
	licenseKeyFile.encoding = "UTF8";
	licenseKeyFile.writeln(encryptedKey);
	var d = Date.now();
	licenseKeyFile.writeln(d);
	licenseKeyFile.writeln(email);
	licenseKeyFile.close();
}

function getLicenseInfo() {
	var res = {};
	var licenseKeyFile = new File(Folder.userData.fsName + "/com.surveillance.lic");
	licenseKeyFile.open("r");
	var txtArray = [];
    var currentLine;
    licenseKeyFile.open("r");
    while(!licenseKeyFile.eof){
    	currentLine = licenseKeyFile.readln();
    	txtArray.push(currentLine);
    }
    licenseKeyFile.close();
    res.date = txtArray[1];
    res.email = txtArray[2];
    return JSON.stringify(res);
}

function getSetting(keyName) {
   return app.settings.getSetting(surv.scriptName, keyName);
}

function haveSetting(keyName) {
   return app.settings.haveSetting(surv.scriptName, keyName);
}

function saveSettings(keyName, value) {
   app.settings.saveSetting(surv.scriptName, keyName, value.toString());
}

function saveToDisk() {
   app.preferences.saveToDisk();
}

function launchTransitions(location) {
	surv.srcPath = location.toString() + "/src";
	defineAssets(false);
	createProjectFolders(false);
}

function applyTransition(num) {
	if (app.project.activeItem instanceof CompItem) {
		var activeComp = app.project.activeItem;
		var transition = app.project.importFile(new ImportOptions(new File(surv.transitions[num-1].fsName)));
		transition.parentFolder = surv.folderTransitions;
		var transitionLayer = activeComp.layers.add(transition);
		transitionLayer.blendingMode = BlendingMode.SCREEN;
		app.executeCommand(2156);
		transitionLayer.startTime = activeComp.time;
		consolidateFolder(surv.folderTransitions);
	} else {
		return;
	}
}

function completeSurveillance() {
	surv.masterComp.name = namePrompt();
	if (surv.masterComp.name === "") {
		return "not valid";
	} else {
		for (var i = surv.masterComp.numLayers; i >= 1; i--) {
			if (!surv.masterComp.layers[i].enabled) {
				surv.masterComp.layers[i].remove();
			}
		}
		for (var i = surv.overlaysComp.numLayers; i >= 1; i--) {
			if (!surv.overlaysComp.layers[i].enabled) {
				surv.overlaysComp.layers[i].remove();
			}
		}
		var completeFolder = surv.folderRoot.items.addFolder(surv.masterComp.name);
		surv.masterComp.parentFolder = completeFolder;
		for (var i = surv.folderComps.numItems; i >= 1; i--) {
			surv.folderComps.items[i].name = surv.masterComp.name + "_" + surv.folderComps.items[i].name;
			surv.folderComps.items[i].parentFolder = completeFolder;
		}
		surv.folderComps.remove();
		consolidateFolder(surv.folderNone);
		consolidateFolder(surv.folder2x2);
		consolidateFolder(surv.folder3x3);
		consolidateFolder(surv.folderLooks);
		consolidateFolder(surv.folderBorders);
		return "valid";
	}
}

function editTrackerSwitch(layerId,value,prop) {
	var val;
	if (value) {
		val = 0;
	} else {
		val = 1;
	}
	var tracker = app.project.layerByID(layerId);
	tracker.property("ADBE Effect Parade").property("Pseudo/SurveillanceTracker").property(prop).setValue(value);
}

function editTrackerSlider(layerId,value,prop) {
	var tracker = app.project.layerByID(layerId);
	tracker.property("ADBE Effect Parade").property("Pseudo/SurveillanceTracker").property(prop).setValue(value);
}

function setTrackerType(layerId,type) {
	var tracker = app.project.layerByID(layerId);
	tracker.property("ADBE Effect Parade").property("Pseudo/SurveillanceTracker").property("Type").setValue(type);
}

function readTracker(layerId) {
	var tracker = app.project.layerByID(layerId);
	var effect = tracker.property("ADBE Effect Parade").property("Pseudo/SurveillanceTracker");
	var res = {};
	res.type = effect.property("Type").value;
	res.hue = effect.property("Hue").value;
	res.lowRes = effect.property("Low Res Amount").value;
	res.shake = effect.property("Shake Amount").value;
	res.flicker = effect.property("Flicker Amount").value;
	res.shakeSwitch = effect.property("Shake On/Off").value;
	res.flickerSwitch = effect.property("Flicker On/Off").value;
	res.lightness = effect.property("Lightness").value;
	res.lowResSwitch = effect.property("Low Res On/Off").value;
	return JSON.stringify(res);
}

function removeTracker(layerId) {
	app.project.layerByID(layerId).remove();
}

function addTracker(type,name) {
	var tracker = createTracker(surv.masterComp,name);
	tracker.moveAfter(surv.masterComp.layer(20));
	var pseudoEffect = PseudoEffect.applyByMatchName(tracker, "Pseudo/SurveillanceTracker");
	if (type === "face") {
		pseudoEffect.name = "Surveillance: Face Tracker";
	} else if (type === "body") {
		pseudoEffect.name = "Surveillance: Body Tracker";
		pseudoEffect.property("Pseudo/SurveillanceTracker-0003").setValue(650);
	}
	pseudoEffect.property("Pseudo/SurveillanceTracker-0005").setValue(15);
	tracker.property("ADBE Layer Styles").property(4).property("outerGlow/color").expression = "hsla = [effect(\"Pseudo/SurveillanceTracker\")(\"Hue\")/360,effect(\"Pseudo/SurveillanceTracker\")(\"Saturation\")/100,effect(\"Pseudo/SurveillanceTracker\")(\"Lightness\")/100,effect(\"Pseudo/SurveillanceTracker\")(\"Opacity\")/100];\rhslToRgb(hsla);";
	return tracker.id;
}

function toggleGlitch(checked) {
	surv.globalAdjLayers[1].enabled = checked;
}

function toggleNight(checked) {
	surv.globalAdjLayers[2].enabled = checked;
}

function updateSwitch(id,checked) {
	try {
		var lookNumber = parseInt(id.match(/\d+/));
		var effectParadeBefore = surv.looksBeforeAdjLayers[lookNumber-1].property("ADBE Effect Parade");
		if (surv.looksAfterAdjLayers[lookNumber-1] !== undefined) {
			var effectParadeAfter = surv.looksAfterAdjLayers[lookNumber-1].property("ADBE Effect Parade");
		}
		var switchType = id.match(/[^-]*$/)[0];
		var effectParade;
		switch (switchType) {
		case "color":
			if (effectParadeBefore.property("[S] Noise") !== null) {
				effectParade = effectParadeBefore;
			} else {
				effectParade = effectParadeAfter;
			}
			effectParade.property("[S] Noise").property("ADBE Noise2-0002").setValue(!checked);
			break;
		case "flicker":
			if (effectParadeBefore.property("[S] Solid Composite") !== null) {
				effectParade = effectParadeBefore;
			} else {
				effectParade = effectParadeAfter;
			}
			effectParade.property("[S] Solid Composite").enabled = !checked;
			break;
		case "bw":
			var val;
			if (!checked) {
				val = -100;
			} else {
				val = 0;
			}
			if (effectParadeBefore.property("[S] Color Balance (HLS)") !== null) {
				effectParade = effectParadeBefore;
			} else {
				effectParade = effectParadeAfter;
			}
			effectParade.property("[S] Color Balance (HLS)").property("ADBE Color Balance (HLS)-0003").setValue(val);
			break;
		case "glitch":
			if (effectParadeBefore.property("[S] Fast Box Blur") !== null) {
				effectParade = effectParadeBefore;
			} else {
				effectParade = effectParadeAfter;
			}
			effectParade.property("[S] Fast Box Blur").enabled = !checked;
			break;
		case "warp":
			if (effectParadeBefore.property("[S] Transform") !== null) {
				effectParade = effectParadeBefore;
			} else {
				effectParade = effectParadeAfter;
			}
			effectParade.property("[S] Transform").enabled = !checked;
			effectParade.property("[S] Wave Warp").enabled = !checked;
			break;
		default:
			break;
		}
	} catch (error) {
	alert(error.toString() +
		"\nScript file: " + File.decode(error.fileName).replace(/^.*[\|\/]/, "") +
		"\nError on line: " + error.line
	);}
}

function updateSlider(id,value) {
	try {
		if (id === "slider-glitch") {
			surv.globalAdjLayers[1].property("ADBE Effect Parade").property("Mettle SkyBox Digital Glitch").property("Mettle SkyBox Digital Glitch-0039").setValue(value);
		} else {
			var lookNumber = parseInt(id.match(/\d+/));
			var effectParadeBefore = surv.looksBeforeAdjLayers[lookNumber-1].property("ADBE Effect Parade");
			if (surv.looksAfterAdjLayers[lookNumber-1] !== undefined) {
				var effectParadeAfter = surv.looksAfterAdjLayers[lookNumber-1].property("ADBE Effect Parade");
			}
			var sliderType = id.match(/[^-]*$/)[0];
			var effectParade;
			switch (sliderType) {
			case "quality":
				if (effectParadeBefore.property("[S] Mosaic") !== null) {
					effectParade = effectParadeBefore;
				} else {
					effectParade = effectParadeAfter;
				}
				effectParade.property("[S] Mosaic").property("ADBE Mosaic-0001").setValue(value);
				effectParade.property("[S] Mosaic").property("ADBE Mosaic-0002").setValue(value);
				break;
			case "noise":
				if (effectParadeBefore.property("[S] Noise") !== null) {
					effectParade = effectParadeBefore;
				} else {
					effectParade = effectParadeAfter;
				}
				effectParade.property("[S] Noise").property("ADBE Noise2-0001").setValue(value);
				break;
			case "light":
				if (effectParadeBefore.property("[S] Threshold") !== null) {
					effectParade = effectParadeBefore;
				} else {
					effectParade = effectParadeAfter;
				}
				effectParade.property("[S] Threshold").property("ADBE Threshold2-0001").setValue(value*0.0039);
				break;
			case "flicker":
				if (effectParadeBefore.property("[S] Flicker") !== null) {
					effectParade = effectParadeBefore;
				} else {
					effectParade = effectParadeAfter;
				}
				effectParade.property("[S] Flicker").property("ADBE Slider Control-0001").setValue(value);
				break;
			case "hue":
				if (effectParadeBefore.property("[S] Color Balance (HLS)") !== null) {
					effectParade = effectParadeBefore;
				} else {
					effectParade = effectParadeAfter;
				}
				effectParade.property("[S] Color Balance (HLS)").property("ADBE Color Balance (HLS)-0001").setValue(value);
				break;
			case "edges":
				if (effectParadeBefore.property("[S] Find Edges") !== null) {
					effectParade = effectParadeBefore;
				} else {
					effectParade = effectParadeAfter;
				}
				effectParade.property("[S] Find Edges").property("ADBE Find Edges-0002").setValue(value/100);
				break;
			case "radius":
				if (effectParadeBefore.property("[S] Glow") !== null) {
					effectParade = effectParadeBefore;
				} else {
					effectParade = effectParadeAfter;
				}
				effectParade.property("[S] Glow").property("ADBE Glo2-0004").setValue(value);
				break;
			case "glow":
				if (effectParadeBefore.property("[S] Glow") !== null) {
					effectParade = effectParadeBefore;
				} else {
					effectParade = effectParadeAfter;
				}
				effectParade.property("[S] Glow").property("ADBE Glo2-0003").setValue(value);
				break;
			default:
				break;
			}
		}
	} catch (error) {
	alert(error.toString() +
		"\nScript file: " + File.decode(error.fileName).replace(/^.*[\|\/]/, "") +
		"\nError on line: " + error.line
	);}
}

function toggleFPS(state,value) {
	surv.globalAdjLayers[0].enabled = state;
	surv.globalAdjLayers[0].property("ADBE Effect Parade").property("ADBE Posterize Time").property("ADBE Posterize Time-0001").setValue(value);
}

function toggleBorder(state) {
	surv.borderLayer.enabled = state;
}

function nextLook() {
	var next = surv.curLook + 1;
	surv.looksBeforeAdjLayers[surv.curLook-1].enabled = false;
	surv.looksBeforeAdjLayers[next-1].enabled = true;

	if (surv.looksAfterAdjLayers[surv.curLook-1] !== undefined) {
		surv.looksAfterAdjLayers[surv.curLook-1].enabled = false;
	}

	if (surv.looksAfterAdjLayers[next-1] !== undefined) {
		surv.looksAfterAdjLayers[next-1].enabled = true;
	}

	if (next === 12) {
		surv.looksOverlayLayers[next-1].enabled = true;
	} else if (next === 13) {
		surv.looksOverlayLayers[surv.curLook-1].enabled = false;
		surv.looksOverlayLayers[next-1].enabled = true;
	}
	surv.curLook ++;
	return surv.looksBefore[next-1].name.replace(".ffx","").replace("_before","").replace(/_/g," ").replace("and","&");
}

function prevLook() {
	var prev = surv.curLook - 1;
	surv.looksBeforeAdjLayers[surv.curLook-1].enabled = false;
	surv.looksBeforeAdjLayers[prev-1].enabled = true;

	if (surv.looksAfterAdjLayers[surv.curLook-1] !== undefined) {
		surv.looksAfterAdjLayers[surv.curLook-1].enabled = false;
	}

	if (surv.looksAfterAdjLayers[prev-1] !== undefined) {
		surv.looksAfterAdjLayers[prev-1].enabled = true;
	}

	if (prev === 12) {
		surv.looksOverlayLayers[surv.curLook-1].enabled = false;
		surv.looksOverlayLayers[prev-1].enabled = true;
	} else if (prev === 11) {
		surv.looksOverlayLayers[surv.curLook-1].enabled = false;
	}
	surv.curLook --;
	return surv.looksBefore[prev-1].name.replace(".ffx","").replace("_before","").replace(/_/g," ").replace("and","&");
}

function nextOverlay() {
	surv.overlayLayers[surv.curOverlay + 1].enabled = true;
	if (surv.curOverlay !== 0) {
		surv.overlayLayers[surv.curOverlay].enabled = false;
	}
	surv.curOverlay ++;
	return surv.overlayLayers[surv.curOverlay].name.replace(".png","").replace(".mp4","");
}

function prevOverlay() {
	surv.overlayLayers[surv.curOverlay].enabled = false;
	if (surv.curOverlay !== 1) {
		surv.overlayLayers[surv.curOverlay - 1].enabled = true;
	}
	surv.curOverlay --;
	if (surv.curOverlay === 0) {
		return "No Overlay";
	} else {
		return surv.overlayLayers[surv.curOverlay].name.replace(".png","").replace(".mp4","");
	}
}

function licensePrompt() {
	var win = new Window("dialog", "Surveillance");
	win.orientation = "column";
	win.alignment = ['center','top'];
	win.alignChildren = ['center', 'top'];
	win.spacing = 10;
	win.onClose = function() {
		if (ScriptUI.environment.keyboardState.keyName == "Escape") {
			okBtn.notify();
			okBtn.result = "null";
		}
	}

	var message = win.add('statictext {text: "Enter your license key:", justify: "center"}');
	var licenseKey = win.add("editText",undefined,"");
	licenseKey.characters = 25;

	var okBtn = win.add("button", undefined, "OK");
	okBtn.alignment = ["center","top"];

	okBtn.onClick = function() {
		win.close();
		this.result = licenseKey.text;
	}

	win.center();
	win.show();
	return okBtn.result;
}

function namePrompt() {
	var win = new Window("dialog", "Surveillance");
	win.orientation = "column";
	win.alignment = ['center','top'];
	win.alignChildren = ['center', 'top'];
	win.spacing = 10;
	win.onClose = function() {
		if (ScriptUI.environment.keyboardState.keyName == "Escape") {
			okBtn.notify();
		}
	}

	var message = win.add('statictext {text: "Please name your final composition:", justify: "center"}');
	var compName = win.add("editText",undefined,"");
	compName.characters = 25;

	var okBtn = win.add("button", undefined, "OK");
	okBtn.alignment = ["center","top"];

	okBtn.onClick = function() {
		win.close();
		win.result = compName.text;
	}

	win.center();
	win.show();

	return win.result;
}

function newAlert(message) {
	alert(message);
}

function launchLooks(grid,launched,hd,location) {
	surv.srcPath = location.toString() + "/src";
	defineAssets(true);
	createProjectFolders(true);
	if (!launched) {
		surv.grid = grid;
		surv.hd = hd;
		surv.curLook = 1;
		surv.curOverlay = 1;
		importAssets();
		createGrid();
		addOverlays();
		addEffects();
		addGrid();
	} else {
		updateGrid();
	}
}

function getItemByName(folder,name) {
   for (var i = 1; i <= folder.numItems; i++) {
      if (folder.item(i).name === name) {
         return folder.item(i);
      }
   }
   return null;
}

function getFolderByName(name) {
   for (var i = 1; i <= app.project.numItems; i++) {
      if (app.project.item(i).name === name) {
         return app.project.item(i);
      }
   }
   return null;
}

function addOverlays() {
	surv.overlaysComp = surv.folderComps.items.addComp("Overlays", surv.masterComp.width, surv.masterComp.height, 1, surv.masterDuration, surv.frameRate);
	var overlaysFolder;
	if (surv.gridComps.length === 1) {
		overlaysFolder = surv.folderNone;
	} else if (surv.gridComps.length === 4) {
		overlaysFolder = surv.folder2x2;
		surv.borderLayer = addFootage(surv.overlaysComp,getItemByName(surv.folderBorders,"Border 2x2.png"));
	} else if (surv.gridComps.length === 9) {
		overlaysFolder = surv.folder3x3;
		surv.borderLayer = addFootage(surv.overlaysComp,getItemByName(surv.folderBorders,"Border 3x3.png"));
	}
	surv.overlayLayers = [];
	for (var i = 1; i <= overlaysFolder.numItems; i++) {
		surv.overlayLayers[i] = addFootage(surv.overlaysComp,overlaysFolder.items[i]);
		if (i !== 1) {
			surv.overlayLayers[i].enabled = false;
		}
	}
	surv.overlayCompLayer = addFootage(surv.masterComp,surv.overlaysComp);
	surv.overlayCompLayer.shy = true;
	surv.overlayCompLayer.blendingMode = BlendingMode.SCREEN;
}

function addEffects() {
	try {
		surv.masterComp.hideShyLayers = true;
		surv.globalAdjLayers = [];
		for (var i = 0; i < surv.ffx.length; i++) {
			surv.globalAdjLayers[i] = surv.masterComp.layers.addShape();
			surv.globalAdjLayers[i].shy = true;
			surv.globalAdjLayers[i].name = toTitleCase(surv.ffx[i].name.replace(".ffx","")).replace("Fps","FPS");
			surv.globalAdjLayers[i].property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
			surv.globalAdjLayers[i].property("ADBE Root Vectors Group").property(1).name = "Rectangle 1";
			surv.globalAdjLayers[i].property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Rect");
			surv.globalAdjLayers[i].property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Rectangle Path 1";
			surv.globalAdjLayers[i].property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Size").setValue([surv.masterComp.width,surv.masterComp.height]);
			surv.globalAdjLayers[i].property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
			surv.globalAdjLayers[i].property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Fill 1";
			surv.globalAdjLayers[i].property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Fill Color").setValue([1,1,1,1]);
			surv.globalAdjLayers[i].outPoint = surv.masterDuration;
			surv.globalAdjLayers[i].moveToEnd();
			surv.globalAdjLayers[i].adjustmentLayer = true;
			surv.globalAdjLayers[i].applyPreset(surv.ffx[i]);
			surv.globalAdjLayers[i].enabled = false;
		}
		surv.looksBeforeAdjLayers = [];
		surv.looksAfterAdjLayers = [];
		surv.looksOverlayLayers = [];
		for (var i = 0; i < surv.looksBefore.length; i++) {
			if (i === 11) {
				surv.looksOverlayLayers[i] = addFootage(surv.masterComp,getItemByName(surv.folderLooks,"CRT Warped.mp4"));
				surv.looksOverlayLayers[i].shy = true;
				surv.looksOverlayLayers[i].enabled = false;
				surv.looksOverlayLayers[i].blendingMode = BlendingMode.OVERLAY;
			}
			if (i === 12) {
				surv.looksOverlayLayers[i] = addFootage(surv.masterComp,getItemByName(surv.folderLooks,"CRT Warped Color.mp4"));
				surv.looksOverlayLayers[i].shy = true;
				surv.looksOverlayLayers[i].enabled = false;
				surv.looksOverlayLayers[i].blendingMode = BlendingMode.OVERLAY;
			}
			surv.looksBeforeAdjLayers[i] = surv.masterComp.layers.addShape();
			surv.looksBeforeAdjLayers[i].shy = true;
			surv.looksBeforeAdjLayers[i].name = toTitleCase(surv.looksBefore[i].name.replace(".ffx","").replace("_before"," Before").replace(/_/g," ").replace("and","&")).replace("Crt","CRT");
			surv.looksBeforeAdjLayers[i].property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
			surv.looksBeforeAdjLayers[i].property("ADBE Root Vectors Group").property(1).name = "Rectangle 1";
			surv.looksBeforeAdjLayers[i].property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Rect");
			surv.looksBeforeAdjLayers[i].property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Rectangle Path 1";
			surv.looksBeforeAdjLayers[i].property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Size").setValue([surv.masterComp.width,surv.masterComp.height]);
			surv.looksBeforeAdjLayers[i].property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
			surv.looksBeforeAdjLayers[i].property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Fill 1";
			surv.looksBeforeAdjLayers[i].property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Fill Color").setValue([1,1,1,1]);
			surv.looksBeforeAdjLayers[i].outPoint = surv.masterDuration;
			surv.looksBeforeAdjLayers[i].moveToEnd();
			surv.looksBeforeAdjLayers[i].adjustmentLayer = true;
			surv.looksBeforeAdjLayers[i].applyPreset(surv.looksBefore[i]);
			if (i !== 0) {
				surv.looksBeforeAdjLayers[i].enabled = false;
			}
		}
		for (var i = 0; i < surv.looksAfter.length; i++) {
			if (surv.looksAfter[i] !== undefined) {
				surv.looksAfterAdjLayers[i] = surv.masterComp.layers.addShape();
				surv.looksAfterAdjLayers[i].shy = true;
				surv.looksAfterAdjLayers[i].name = toTitleCase(surv.looksAfter[i].name.replace(".ffx","").replace("_after"," After").replace(/_/g," ").replace("and","&")).replace("Crt","CRT");
				surv.looksAfterAdjLayers[i].property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
				surv.looksAfterAdjLayers[i].property("ADBE Root Vectors Group").property(1).name = "Rectangle 1";
				surv.looksAfterAdjLayers[i].property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Rect");
				surv.looksAfterAdjLayers[i].property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Rectangle Path 1";
				surv.looksAfterAdjLayers[i].property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Size").setValue([surv.masterComp.width,surv.masterComp.height]);
				surv.looksAfterAdjLayers[i].property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
				surv.looksAfterAdjLayers[i].property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Fill 1";
				surv.looksAfterAdjLayers[i].property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Fill Color").setValue([1,1,1,1]);
				surv.looksAfterAdjLayers[i].outPoint = surv.masterDuration;
				surv.looksAfterAdjLayers[i].moveToEnd();
				surv.looksAfterAdjLayers[i].adjustmentLayer = true;
				surv.looksAfterAdjLayers[i].applyPreset(surv.looksAfter[i]);
				if (i !== 0) {
					surv.looksAfterAdjLayers[i].enabled = false;
				}
			}
		}
	} catch (error) {
	alert(error.toString() +
		"\nScript file: " + File.decode(error.fileName).replace(/^.*[\|\/]/, "") +
		"\nError on line: " + error.line
	);}
}

function toTitleCase(str) {
	return str.replace(/\w\S*/g, function(txt) {
	return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
	});
}

function chooseFootage() {
	surv = {};
	surv.chosenFootage = [];
	var footageNames = [];
	for (var i = 0; i < app.project.selection.length; i++) {
		if ((app.project.selection[i] instanceof CompItem || app.project.selection[i] instanceof FootageItem) && app.project.selection[i].hasVideo) {
			surv.chosenFootage.push(app.project.selection[i]);
			footageNames.push(app.project.selection[i].name);
		}
	}
	return JSON.stringify(footageNames);
}

function getFootage(index) {
	if ((app.project.selection[0] instanceof CompItem || app.project.selection[0] instanceof FootageItem) && app.project.selection[0].hasVideo) {
		surv.chosenFootage[index] = app.project.selection[0];
		return app.project.selection[0].name;
	} else {
		return false;
	}
}

function setMasterDuration(chosenFootage) {
	surv.masterDuration = -Infinity;
	for (var i = 0; i < chosenFootage.length; i++) {
		surv.masterDuration = Math.max(chosenFootage[i].duration,surv.masterDuration);
	}
	if (surv.masterDuration === 0) {
		surv.masterDuration = 30;
	}
	surv.masterComp.duration = surv.masterDuration;
}

function fitToComp(layer,comp) {
	var scale;
	if (layer.width/layer.height < comp.width/comp.height) {
		scale = 100 * (comp.width/layer.width);
	} else {
		scale = 100 * (comp.height/layer.height);
	}
	layer.property("ADBE Transform Group").property("ADBE Scale").setValue([scale,scale]);
}

function addFootage(comp,footage) {
	var layer = comp.layers.add(footage);
	layer.moveToEnd();
	fitToComp(layer,comp);
	if (layer.source instanceof CompItem) {
		loopLayer(layer,comp);
	} else {
		if (!layer.source.mainSource.isStill) {
			loopLayer(layer,comp);
		}
	}
	return layer;
}

function addGrid() {
	surv.masterComp.openInViewer();
	var curGridComp,compPositions;
	if (surv.grid === 4) {
		compPositions = surv.hd ? [[480,270],[1440,270],[480,810],[1440,810]] : [[960,540],[2880,540],[960,1620],[2880,1620]];
	} else if (surv.gridComps.length === 9) {
		compPositions = surv.hd ? [[320,180],[960,180],[1600,180],[320,540],[960,540],[1600,540],[320,900],[960,900],[1600,900]] : [[640,360],[1920,360],[3200,360],[640,1080],[1920,1080],[3200,1080],[640,1800],[1920,1800],[3200,1800]];
	}
	for (var i = 0; i < surv.gridComps.length; i++) {
		curGridComp = surv.masterComp.layers.add(surv.gridComps[i]);
		curGridComp.moveToEnd();
		curGridComp.audioEnabled = false;
		if (surv.gridComps.length > 1) {
			curGridComp.property("ADBE Transform Group").property("ADBE Position").setValue(compPositions[i]);
		}
	}
}

function createGrid() {
	var width,height;
	if (surv.hd) {
		width = 1920;
		height = 1080;
	} else {
		width = 3840;
		height = 2160;
	}
	surv.frameRate = 24;
	surv.gridComps = [];
	surv.masterComp = surv.folderRoot.items.addComp("_SURVEILLANCE MASTER COMP", width, height, 1, 1, surv.frameRate);
	setMasterDuration(surv.chosenFootage)
	surv.folderComps = surv.folderRoot.items.addFolder("Comps");
	var gridHeight,gridWidth;
	if (surv.grid === 1) {
		gridHeight = height;
		gridWidth = width;
	} else if (surv.grid === 4) {
		gridHeight = height/2;
		gridWidth = width/2;
	} else if (surv.grid === 9) {
		gridHeight = height/3;
		gridWidth = width/3;
	}
	for (var i = 0; i < surv.grid; i++) {
		surv.gridComps[i] = surv.folderComps.items.addComp("Grid Comp " + (i+1).toString(), gridWidth , gridHeight, 1, surv.masterDuration, surv.frameRate);
		addFootage(surv.gridComps[i],surv.chosenFootage[i]);
	}
}

function updateGrid() {
	setMasterDuration(surv.chosenFootage)
	var newFootageLayer;
	for (var i = 0; i < surv.gridComps.length; i++) {
		if (surv.gridComps[i].layers[1].source !== surv.chosenFootage[i].source) {
			surv.gridComps[i].layers[1].remove();
			surv.gridComps[i].duration = surv.masterDuration;
			addFootage(surv.gridComps[i],surv.chosenFootage[i]);
		}
	}
	for (var i = 1; i <= surv.overlaysComp.numLayers; i++) {
		surv.overlaysComp.layers[i].outPoint = surv.masterDuration;
	}
	for (var i = 1; i <= surv.masterComp.numLayers; i++) {
		surv.masterComp.layers[i].outPoint = surv.masterDuration;
	}
}

function reset() {
	surv.folderComps.remove();
	surv.masterComp.remove();
	consolidateFolder(surv.folderNone);
	consolidateFolder(surv.folder2x2);
	consolidateFolder(surv.folder3x3);
	consolidateFolder(surv.folderLooks);
	consolidateFolder(surv.folderBorders);
}

function loopLayer(layer,comp) {
	layer.timeRemapEnabled = true;
	layer.property("ADBE Time Remapping").expression = "loopOut();";
	layer.outPoint = comp.duration;
}

function createTracker(comp,name) {
	var tracker = comp.layers.addShape();
	tracker.name = name;
	tracker.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
	tracker.property("ADBE Root Vectors Group").property(1).name = "Trackers";
	tracker.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Group");
	tracker.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Full";
	tracker.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).addProperty("ADBE Vector Shape - Rect");
	tracker.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).property(1).name = "Rectangle Path 1";
	tracker.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).property(1).property("ADBE Vector Rect Size").setValue([3594,2021.625]);
	tracker.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).addProperty("ADBE Vector Graphic - Stroke");
	tracker.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).property(2).name = "Stroke";
	tracker.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).property(2).property("ADBE Vector Stroke Color").setValue([0,0,0,1]);
	tracker.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).property(2).property("ADBE Vector Stroke Width").setValue(0);
	tracker.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(3).property("ADBE Vector Group Opacity").setValue(100);
	tracker.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Group");
	tracker.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Corners";
	tracker.property("ADBE Root Vectors Group").property(1).property(2).property(2).property(2).addProperty("ADBE Vector Group");
	tracker.property("ADBE Root Vectors Group").property(1).property(2).property(2).property(2).property(1).name = "TR";
	tracker.property("ADBE Root Vectors Group").property(1).property(2).property(2).property(2).property(1).property(2).addProperty("ADBE Vector Shape - Rect");
	tracker.property("ADBE Root Vectors Group").property(1).property(2).property(2).property(2).property(1).property(2).property(1).name = "Rectangle Path 1";
	tracker.property("ADBE Root Vectors Group").property(1).property(2).property(2).property(2).property(1).property(2).property(1).property("ADBE Vector Rect Size").setValue([100,100]);
	tracker.property("ADBE Root Vectors Group").property(1).property(2).property(2).property(2).property(1).property(2).property(1).property("ADBE Vector Rect Position").setValue([0,0]);
	tracker.property("ADBE Root Vectors Group").property(1).property(2).property(2).property(2).property(1).property(2).addProperty("ADBE Vector Filter - Trim");
	tracker.property("ADBE Root Vectors Group").property(1).property(2).property(2).property(2).property(1).property(2).property(2).name = "Trim Paths 1";
	tracker.property("ADBE Root Vectors Group").property(1).property(2).property(2).property(2).property(1).property(2).property(2).property("ADBE Vector Trim End").setValue(50);
	tracker.property("ADBE Root Vectors Group").property(1).property(2).property(2).property(2).property(1).property(2).property(2).property("ADBE Vector Trim Offset").setValue(270);
	tracker.property("ADBE Root Vectors Group").property(1).property(2).property(2).property(2).addProperty("ADBE Vector Group");
	tracker.property("ADBE Root Vectors Group").property(1).property(2).property(2).property(2).property(2).name = "TL";
	tracker.property("ADBE Root Vectors Group").property(1).property(2).property(2).property(2).property(2).property(2).addProperty("ADBE Vector Shape - Rect");
	tracker.property("ADBE Root Vectors Group").property(1).property(2).property(2).property(2).property(2).property(2).property(1).name = "Rectangle Path 1";
	tracker.property("ADBE Root Vectors Group").property(1).property(2).property(2).property(2).property(2).property(2).property(1).property("ADBE Vector Rect Size").setValue([100,100]);
	tracker.property("ADBE Root Vectors Group").property(1).property(2).property(2).property(2).property(2).property(2).property(1).property("ADBE Vector Rect Position").setValue([0,0]);
	tracker.property("ADBE Root Vectors Group").property(1).property(2).property(2).property(2).property(2).property(2).addProperty("ADBE Vector Filter - Trim");
	tracker.property("ADBE Root Vectors Group").property(1).property(2).property(2).property(2).property(2).property(2).property(2).name = "Trim Paths 1";
	tracker.property("ADBE Root Vectors Group").property(1).property(2).property(2).property(2).property(2).property(2).property(2).property("ADBE Vector Trim End").setValue(50);
	tracker.property("ADBE Root Vectors Group").property(1).property(2).property(2).property(2).property(2).property(2).property(2).property("ADBE Vector Trim Offset").setValue(180);
	tracker.property("ADBE Root Vectors Group").property(1).property(2).property(2).property(2).addProperty("ADBE Vector Group");
	tracker.property("ADBE Root Vectors Group").property(1).property(2).property(2).property(2).property(3).name = "BR";
	tracker.property("ADBE Root Vectors Group").property(1).property(2).property(2).property(2).property(3).property(2).addProperty("ADBE Vector Shape - Rect");
	tracker.property("ADBE Root Vectors Group").property(1).property(2).property(2).property(2).property(3).property(2).property(1).name = "Rectangle Path 1";
	tracker.property("ADBE Root Vectors Group").property(1).property(2).property(2).property(2).property(3).property(2).property(1).property("ADBE Vector Rect Size").setValue([100,100]);
	tracker.property("ADBE Root Vectors Group").property(1).property(2).property(2).property(2).property(3).property(2).property(1).property("ADBE Vector Rect Position").setValue([0,0]);
	tracker.property("ADBE Root Vectors Group").property(1).property(2).property(2).property(2).property(3).property(2).addProperty("ADBE Vector Filter - Trim");
	tracker.property("ADBE Root Vectors Group").property(1).property(2).property(2).property(2).property(3).property(2).property(2).name = "Trim Paths 1";
	tracker.property("ADBE Root Vectors Group").property(1).property(2).property(2).property(2).property(3).property(2).property(2).property("ADBE Vector Trim End").setValue(50);
	tracker.property("ADBE Root Vectors Group").property(1).property(2).property(2).property(2).addProperty("ADBE Vector Group");
	tracker.property("ADBE Root Vectors Group").property(1).property(2).property(2).property(2).property(4).name = "BL";
	tracker.property("ADBE Root Vectors Group").property(1).property(2).property(2).property(2).property(4).property(2).addProperty("ADBE Vector Shape - Rect");
	tracker.property("ADBE Root Vectors Group").property(1).property(2).property(2).property(2).property(4).property(2).property(1).name = "Rectangle Path 1";
	tracker.property("ADBE Root Vectors Group").property(1).property(2).property(2).property(2).property(4).property(2).property(1).property("ADBE Vector Rect Size").setValue([100,100]);
	tracker.property("ADBE Root Vectors Group").property(1).property(2).property(2).property(2).property(4).property(2).property(1).property("ADBE Vector Rect Position").setValue([0,0]);
	tracker.property("ADBE Root Vectors Group").property(1).property(2).property(2).property(2).property(4).property(2).addProperty("ADBE Vector Filter - Trim");
	tracker.property("ADBE Root Vectors Group").property(1).property(2).property(2).property(2).property(4).property(2).property(2).name = "Trim Paths 1";
	tracker.property("ADBE Root Vectors Group").property(1).property(2).property(2).property(2).property(4).property(2).property(2).property("ADBE Vector Trim End").setValue(50);
	tracker.property("ADBE Root Vectors Group").property(1).property(2).property(2).property(2).property(4).property(2).property(2).property("ADBE Vector Trim Offset").setValue(90);
	tracker.property("ADBE Root Vectors Group").property(1).property(2).property(2).property(2).addProperty("ADBE Vector Graphic - Stroke");
	tracker.property("ADBE Root Vectors Group").property(1).property(2).property(2).property(2).property(5).name = "Stroke";
	tracker.property("ADBE Root Vectors Group").property(1).property(2).property(2).property(2).property(5).property("ADBE Vector Stroke Color").setValue([0,0,0,1]);
	tracker.property("ADBE Root Vectors Group").property(1).property(2).property(2).property(2).property(5).property("ADBE Vector Stroke Width").setValue(0);
	tracker.property("ADBE Root Vectors Group").property(1).property(2).property(2).property(3).property("ADBE Vector Group Opacity").setValue(100);
	tracker.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Group");
	tracker.property("ADBE Root Vectors Group").property(1).property(2).property(3).name = "Cross";
	tracker.property("ADBE Root Vectors Group").property(1).property(2).property(3).property(2).addProperty("ADBE Vector Group");
	tracker.property("ADBE Root Vectors Group").property(1).property(2).property(3).property(2).property(1).name = "Paths";
	tracker.property("ADBE Root Vectors Group").property(1).property(2).property(3).property(2).property(1).property(2).addProperty("ADBE Vector Shape - Group");
	tracker.property("ADBE Root Vectors Group").property(1).property(2).property(3).property(2).property(1).property(2).property(1).name = "Path 1";
	var sTrackerPath = tracker.property("ADBE Root Vectors Group").property(1).property(2).property(3).property(2).property(1).property(2).property(1).property("ADBE Vector Shape");
	var sTrackerPath_newShape = new Shape();
	sTrackerPath_newShape.vertices = [[-64,0],[64,0]];
	sTrackerPath_newShape.closed = false;
	sTrackerPath.setValue(sTrackerPath_newShape);
	tracker.property("ADBE Root Vectors Group").property(1).property(2).property(3).property(2).property(1).property(2).addProperty("ADBE Vector Shape - Group");
	tracker.property("ADBE Root Vectors Group").property(1).property(2).property(3).property(2).property(1).property(2).property(2).name = "Path 2";
	var sTrackerPath1 = tracker.property("ADBE Root Vectors Group").property(1).property(2).property(3).property(2).property(1).property(2).property(2).property("ADBE Vector Shape");
	var sTrackerPath1_newShape = new Shape();
	sTrackerPath1_newShape.vertices = [[0,-64],[0,64]];
	sTrackerPath1_newShape.closed = false;
	sTrackerPath1.setValue(sTrackerPath1_newShape);
	tracker.property("ADBE Root Vectors Group").property(1).property(2).property(3).property(2).addProperty("ADBE Vector Graphic - Stroke");
	tracker.property("ADBE Root Vectors Group").property(1).property(2).property(3).property(2).property(2).name = "Stroke";
	tracker.property("ADBE Root Vectors Group").property(1).property(2).property(3).property(2).property(2).property("ADBE Vector Stroke Color").setValue([0,0,0,1]);
	tracker.property("ADBE Root Vectors Group").property(1).property(2).property(3).property(2).property(2).property("ADBE Vector Stroke Width").setValue(21);
	tracker.property("ADBE Root Vectors Group").property(1).property(2).property(3).property(3).property("ADBE Vector Group Opacity").setValue(100);
	tracker.property("ADBE Root Vectors Group").property(1).property(3).property("ADBE Vector Position").setValue([0,0]);
	tracker.property("ADBE Root Vectors Group").property(1).property(3).property("ADBE Vector Group Opacity").setValue(100);
	tracker.property("ADBE Effect Parade").addProperty("ADBE Noise2");
	tracker.property("ADBE Effect Parade").property(1).name = "Low Res: Noise";
	tracker.property("ADBE Effect Parade").property(1).property("ADBE Noise2-0001").setValue(100);
	tracker.property("ADBE Effect Parade").property(1).property(4).property("ADBE Effect Mask Opacity").setValue(100);
	tracker.property("ADBE Effect Parade").addProperty("ADBE Mosaic");
	tracker.property("ADBE Effect Parade").property(2).name = "Low Res: Mosaic";
	tracker.property("ADBE Effect Parade").property(2).property("ADBE Mosaic-0001").setValue(300);
	tracker.property("ADBE Effect Parade").property(2).property("ADBE Mosaic-0002").setValue(300);
	tracker.property("ADBE Effect Parade").property(2).property(4).property("ADBE Effect Mask Opacity").setValue(100);
	tracker.containingComp.openInViewer();
	app.executeCommand(3739);
	app.executeCommand(9002);
	tracker.property("ADBE Layer Styles").property(4).property("outerGlow/color").setValue([1,1,0.74509803921569,1]);
	tracker.selected = false;
	tracker.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).property(1).property("ADBE Vector Rect Size").expression = "[effect(\"Pseudo/SurveillanceTracker\")(\"Width\"),effect(\"Pseudo/SurveillanceTracker\")(\"Height\")]";
	tracker.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).property(2).property("ADBE Vector Stroke Color").expression = "hsla = [effect(\"Pseudo/SurveillanceTracker\")(\"Hue\")/360,effect(\"Pseudo/SurveillanceTracker\")(\"Saturation\")/100,effect(\"Pseudo/SurveillanceTracker\")(\"Lightness\")/100,effect(\"Pseudo/SurveillanceTracker\")(\"Opacity\")/100];\rhslToRgb(hsla);";
	tracker.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).property(2).property("ADBE Vector Stroke Width").expression = "effect(\"Pseudo/SurveillanceTracker\")(\"Stroke Width\")";
	tracker.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(3).property("ADBE Vector Group Opacity").expression = "t = effect(\"Pseudo/SurveillanceTracker\")(\"Type\").value;\rif (t === 3 || t === 4) {\r\t100;\r} else {\r\t0;\r}";
	tracker.property("ADBE Root Vectors Group").property(1).property(2).property(2).property(2).property(1).property(2).property(1).property("ADBE Vector Rect Size").expression = "cs = effect(\"Pseudo/SurveillanceTracker\")(\"Corner Size\");\rmin = Math.min(effect(\"Pseudo/SurveillanceTracker\")(\"Width\"),effect(\"Pseudo/SurveillanceTracker\")(\"Height\"))/2;\rs = linear(cs,0,100,0,min);\r[s,s];";
	tracker.property("ADBE Root Vectors Group").property(1).property(2).property(2).property(2).property(1).property(2).property(1).property("ADBE Vector Rect Position").expression = "[effect(\"Pseudo/SurveillanceTracker\")(\"Width\")/2-content(\"Trackers\").content(\"Corners\").content(\"TR\").content(\"Rectangle Path 1\").size[0]/2,-effect(\"Pseudo/SurveillanceTracker\")(\"Height\")/2+content(\"Trackers\").content(\"Corners\").content(\"TR\").content(\"Rectangle Path 1\").size[1]/2];";
	tracker.property("ADBE Root Vectors Group").property(1).property(2).property(2).property(2).property(2).property(2).property(1).property("ADBE Vector Rect Size").expression = "cs = effect(\"Pseudo/SurveillanceTracker\")(\"Corner Size\");\rmin = Math.min(effect(\"Pseudo/SurveillanceTracker\")(\"Width\"),effect(\"Pseudo/SurveillanceTracker\")(\"Height\"))/2;\rs = linear(cs,0,100,0,min);\r[s,s];";
	tracker.property("ADBE Root Vectors Group").property(1).property(2).property(2).property(2).property(2).property(2).property(1).property("ADBE Vector Rect Position").expression = "[-effect(\"Pseudo/SurveillanceTracker\")(\"Width\")/2+content(\"Trackers\").content(\"Corners\").content(\"TL\").content(\"Rectangle Path 1\").size[0]/2,-effect(\"Pseudo/SurveillanceTracker\")(\"Height\")/2+content(\"Trackers\").content(\"Corners\").content(\"TL\").content(\"Rectangle Path 1\").size[1]/2];";
	tracker.property("ADBE Root Vectors Group").property(1).property(2).property(2).property(2).property(3).property(2).property(1).property("ADBE Vector Rect Size").expression = "cs = effect(\"Pseudo/SurveillanceTracker\")(\"Corner Size\");\rmin = Math.min(effect(\"Pseudo/SurveillanceTracker\")(\"Width\"),effect(\"Pseudo/SurveillanceTracker\")(\"Height\"))/2;\rs = linear(cs,0,100,0,min);\r[s,s];";
	tracker.property("ADBE Root Vectors Group").property(1).property(2).property(2).property(2).property(3).property(2).property(1).property("ADBE Vector Rect Position").expression = "[effect(\"Pseudo/SurveillanceTracker\")(\"Width\")/2-content(\"Trackers\").content(\"Corners\").content(\"BR\").content(\"Rectangle Path 1\").size[0]/2,effect(\"Pseudo/SurveillanceTracker\")(\"Height\")/2-content(\"Trackers\").content(\"Corners\").content(\"BR\").content(\"Rectangle Path 1\").size[1]/2];";
	tracker.property("ADBE Root Vectors Group").property(1).property(2).property(2).property(2).property(4).property(2).property(1).property("ADBE Vector Rect Size").expression = "cs = effect(\"Pseudo/SurveillanceTracker\")(\"Corner Size\");\rmin = Math.min(effect(\"Pseudo/SurveillanceTracker\")(\"Width\"),effect(\"Pseudo/SurveillanceTracker\")(\"Height\"))/2;\rs = linear(cs,0,100,0,min);\r[s,s];";
	tracker.property("ADBE Root Vectors Group").property(1).property(2).property(2).property(2).property(4).property(2).property(1).property("ADBE Vector Rect Position").expression = "[-effect(\"Pseudo/SurveillanceTracker\")(\"Width\")/2+content(\"Trackers\").content(\"Corners\").content(\"BL\").content(\"Rectangle Path 1\").size[0]/2,effect(\"Pseudo/SurveillanceTracker\")(\"Height\")/2-content(\"Trackers\").content(\"Corners\").content(\"BL\").content(\"Rectangle Path 1\").size[1]/2];";
	tracker.property("ADBE Root Vectors Group").property(1).property(2).property(2).property(2).property(5).property("ADBE Vector Stroke Color").expression = "hsla = [effect(\"Pseudo/SurveillanceTracker\")(\"Hue\")/360,effect(\"Pseudo/SurveillanceTracker\")(\"Saturation\")/100,effect(\"Pseudo/SurveillanceTracker\")(\"Lightness\")/100,effect(\"Pseudo/SurveillanceTracker\")(\"Opacity\")/100];\rhslToRgb(hsla);";
	tracker.property("ADBE Root Vectors Group").property(1).property(2).property(2).property(2).property(5).property("ADBE Vector Stroke Width").expression = "effect(\"Pseudo/SurveillanceTracker\")(\"Stroke Width\")";
	tracker.property("ADBE Root Vectors Group").property(1).property(2).property(2).property(3).property("ADBE Vector Group Opacity").expression = "t = effect(\"Pseudo/SurveillanceTracker\")(\"Type\").value;\rif (t === 1 || t === 2) {\r\t100;\r} else {\r\t0;\r}";
	tracker.property("ADBE Root Vectors Group").property(1).property(2).property(3).property(2).property(2).property("ADBE Vector Stroke Color").expression = "hsla = [effect(\"Pseudo/SurveillanceTracker\")(\"Hue\")/360,effect(\"Pseudo/SurveillanceTracker\")(\"Saturation\")/100,effect(\"Pseudo/SurveillanceTracker\")(\"Lightness\")/100,effect(\"Pseudo/SurveillanceTracker\")(\"Opacity\")/100];\rhslToRgb(hsla);";
	tracker.property("ADBE Root Vectors Group").property(1).property(2).property(3).property(2).property(2).property("ADBE Vector Stroke Width").expression = "effect(\"Pseudo/SurveillanceTracker\")(\"Stroke Width\")";
	tracker.property("ADBE Root Vectors Group").property(1).property(2).property(3).property(3).property("ADBE Vector Group Opacity").expression = "t = effect(\"Pseudo/SurveillanceTracker\")(\"Type\").value;\rif (t === 2 || t === 4) {\r\t100;\r} else {\r\t0;\r}";
	tracker.property("ADBE Root Vectors Group").property(1).property(3).property("ADBE Vector Position").expression = "c = effect(\"Pseudo/SurveillanceTracker\")(\"Shake On/Off\").value;\rif (c === 1) {\r\twiggle(effect(\"Pseudo/SurveillanceTracker\")(\"Shake Amount\"),effect(\"Pseudo/SurveillanceTracker\")(\"Shake Frequency\"));\r} else {\r\t[value[0],value[1]];\r}";
	tracker.property("ADBE Root Vectors Group").property(1).property(3).property("ADBE Vector Group Opacity").expression = "c = effect(\"Pseudo/SurveillanceTracker\")(\"Flicker On/Off\").value;\rif (c === 1) {\r\twiggle(effect(\"Pseudo/SurveillanceTracker\")(\"Flicker Amount\"),effect(\"Pseudo/SurveillanceTracker\")(\"Flicker Frequency\"));\r} else {\r\tvalue;\r}";
	tracker.property("ADBE Effect Parade").property(1).property("ADBE Noise2-0001").expression = "effect(\"Pseudo/SurveillanceTracker\")(\"Low Res Amount\");";
	tracker.property("ADBE Effect Parade").property(1).property(4).property("ADBE Effect Mask Opacity").expression = "lr = effect(\"Pseudo/SurveillanceTracker\")(\"Low Res On/Off\").value;\rif (lr === 1) {\r\t100;\r} else {\r\t0;\r}";
	tracker.property("ADBE Effect Parade").property(2).property("ADBE Mosaic-0001").expression = "linear(effect(\"Pseudo/SurveillanceTracker\")(\"Low Res Amount\"),10,100,thisComp.width/20,thisComp.width/75)";
	tracker.property("ADBE Effect Parade").property(2).property("ADBE Mosaic-0002").expression = "linear(effect(\"Pseudo/SurveillanceTracker\")(\"Low Res Amount\"),10,100,thisComp.height/20,thisComp.height/75)";
	tracker.property("ADBE Effect Parade").property(2).property(4).property("ADBE Effect Mask Opacity").expression = "lr = effect(\"Pseudo/SurveillanceTracker\")(\"Low Res On/Off\").value;\rif (lr === 1) {\r\t100;\r} else {\r\t0;\r}";
	return tracker;
}

function removeDuplicateFiles(folder) {
	var toRemove = [];
	for (var i = 1; i <= folder.numItems; i++) {
		var marked = false;
		for (var l = 0; l < toRemove.length; l++) {
			if (folder.items[i] === toRemove[i]) {
				marked = true;
				continue;
			}
		}
		if (!marked) {
			var item01 = folder.items[i].mainSource.file;
			for (var k = i + 1; k <= folder.numItems; k++) {
				var item02 = folder.items[k].mainSource.file;
				if (item01.toString() === item02.toString()) {
					toRemove.push(folder.items[k]);
				}
			}
		}
	}
	for (var i = toRemove.length - 1; i >= 0; i--) {
		toRemove[i].remove();
	}
}

function consolidateFolder(folder) {
	for (var i = 1; i <= folder.numItems; i++) {
		var item01 = folder.items[i].mainSource.file;
		for (var k = i + 1; k <= folder.numItems; k++) {
			var item02 = folder.items[k].mainSource.file;
			if (item01.toString() === item02.toString()) {
				var item02UsedIn = folder.items[k].usedIn;
				for (var l = 0; l < item02UsedIn.length; l++) {
					for (var m = 1; m <= item02UsedIn[l].numLayers; m++) {
						var layer = item02UsedIn[l].layer(m);
						if (layer.source instanceof FootageItem) {
							if (layer.source.mainSource instanceof FileSource) {
								if (layer.source.mainSource.file.toString() === item01.toString()) {
									layer.replaceSource(folder.items[i], false);
								}
							}
						}
					}
				}
			}
		}
	}
	for (var i = folder.numItems; i > 0; i--) {
		if (folder.items[i].usedIn.length === 0) {
			folder.items[i].remove();
		}
	}
	if (folder.numItems === 0) {
		folder.remove();
	}
}

function defineAssets(looks) {
	surv.folder = {};
	if (looks) {
		surv.folder.looks = Folder(surv.srcPath + "/looks");
		surv.folder.ffx = Folder(surv.srcPath + "/ffx");
		surv.folder.overlaysNone = Folder(surv.srcPath + "/overlays/none");
		surv.folder.overlays2x2 = Folder(surv.srcPath + "/overlays/2x2");
		surv.folder.overlays3x3 = Folder(surv.srcPath + "/overlays/3x3");
		surv.folder.borders = Folder(surv.srcPath + "/overlays/borders");
		surv.folder.overlaysLooks = Folder(surv.srcPath + "/overlays/looks");
		surv.looksBefore = [];
		surv.looksBefore[0] = File(surv.folder.looks.fsName + "/black_and_white_camcorder_before.ffx");
		surv.looksBefore[1] = File(surv.folder.looks.fsName + "/black_and_white_flicker_before.ffx");
		surv.looksBefore[2] = File(surv.folder.looks.fsName + "/basic_camcorder_before.ffx");
		surv.looksBefore[3] = File(surv.folder.looks.fsName + "/colored_camcorder_before.ffx");
		surv.looksBefore[4] = File(surv.folder.looks.fsName + "/intense_crt_before.ffx");
		surv.looksBefore[5] = File(surv.folder.looks.fsName + "/digital_synth_before.ffx");
		surv.looksBefore[6] = File(surv.folder.looks.fsName + "/intense_digital_synth_before.ffx");
		surv.looksBefore[7] = File(surv.folder.looks.fsName + "/digital_synth_2_before.ffx");
		surv.looksBefore[8] = File(surv.folder.looks.fsName + "/security_cam_before.ffx");
		surv.looksBefore[9] = File(surv.folder.looks.fsName + "/thermal_before.ffx");
		surv.looksBefore[10] = File(surv.folder.looks.fsName + "/night_vision_crt_before.ffx");
		surv.looksBefore[11] = File(surv.folder.looks.fsName + "/crt_warped_before.ffx");
		surv.looksBefore[12] = File(surv.folder.looks.fsName + "/crt_warped_color_before.ffx");
		surv.looksAfter = [];
		surv.looksAfter[0] = File(surv.folder.looks.fsName + "/black_and_white_camcorder_after.ffx");
		surv.looksAfter[1] = File(surv.folder.looks.fsName + "/black_and_white_flicker_after.ffx");
		surv.looksAfter[3] = File(surv.folder.looks.fsName + "/colored_camcorder_after.ffx");
		surv.looksAfter[5] = File(surv.folder.looks.fsName + "/digital_synth_after.ffx");
		surv.looksAfter[7] = File(surv.folder.looks.fsName + "/digital_synth_2_after.ffx");
		surv.looksAfter[9] = File(surv.folder.looks.fsName + "/thermal_after.ffx");
		surv.looksAfter[10] = File(surv.folder.looks.fsName + "/night_vision_crt_after.ffx");
		surv.ffx = [];
		surv.ffx[0] = File(surv.folder.ffx.fsName + "/fps.ffx");
		surv.ffx[1] = File(surv.folder.ffx.fsName + "/glitch.ffx");
		surv.ffx[2] = File(surv.folder.ffx.fsName + "/night.ffx");
		surv.trackerFFX = File(surv.folder.ffx.fsName + "/tracker.ffx");
		surv.overlaysNone = [];
		surv.overlaysNone[0] = File(surv.folder.overlaysNone.fsName + "/Camera.png");
		surv.overlaysNone[1] = File(surv.folder.overlaysNone.fsName + "/Corners.png");
		surv.overlaysNone[2] = File(surv.folder.overlaysNone.fsName + "/Digital Timer.mp4");
		surv.overlaysNone[3] = File(surv.folder.overlaysNone.fsName + "/Rec with Battery.mp4");
		surv.overlaysNone[4] = File(surv.folder.overlaysNone.fsName + "/Rec with Crosshairs.mp4");
		surv.overlaysNone[5] = File(surv.folder.overlaysNone.fsName + "/Rec.mp4");
		surv.overlaysNone[6] = File(surv.folder.overlaysNone.fsName + "/Scope.mp4");
		surv.overlaysNone[7] = File(surv.folder.overlaysNone.fsName + "/Time with Wave.mp4");
		surv.overlaysNone[8] = File(surv.folder.overlaysNone.fsName + "/Time.mp4");
		surv.overlays2x2 = [];
		surv.overlays2x2[0] = File(surv.folder.overlays2x2.fsName + "/Camera.png");
		surv.overlays2x2[1] = File(surv.folder.overlays2x2.fsName + "/Corners.png");
		surv.overlays2x2[2] = File(surv.folder.overlays2x2.fsName + "/Digital Timer.mp4");
		surv.overlays2x2[3] = File(surv.folder.overlays2x2.fsName + "/Rec with Battery.mp4");
		surv.overlays2x2[4] = File(surv.folder.overlays2x2.fsName + "/Rec with Crosshairs.mp4");
		surv.overlays2x2[5] = File(surv.folder.overlays2x2.fsName + "/Rec.mp4");
		surv.overlays2x2[6] = File(surv.folder.overlays2x2.fsName + "/Scope.mp4");
		surv.overlays2x2[7] = File(surv.folder.overlays2x2.fsName + "/Time with Wave.mp4");
		surv.overlays2x2[8] = File(surv.folder.overlays2x2.fsName + "/Time.mp4");
		surv.overlays3x3 = [];
		surv.overlays3x3[0] = File(surv.folder.overlays3x3.fsName + "/Camera.png");
		surv.overlays3x3[1] = File(surv.folder.overlays3x3.fsName + "/Corners.png");
		surv.overlays3x3[2] = File(surv.folder.overlays3x3.fsName + "/Digital Timer.mp4");
		surv.overlays3x3[3] = File(surv.folder.overlays3x3.fsName + "/Rec with Battery.mp4");
		surv.overlays3x3[4] = File(surv.folder.overlays3x3.fsName + "/Rec with Crosshairs.mp4");
		surv.overlays3x3[5] = File(surv.folder.overlays3x3.fsName + "/Rec.mp4");
		surv.overlays3x3[6] = File(surv.folder.overlays3x3.fsName + "/Scope.mp4");
		surv.overlays3x3[7] = File(surv.folder.overlays3x3.fsName + "/Time with Wave.mp4");
		surv.overlays3x3[8] = File(surv.folder.overlays3x3.fsName + "/Time.mp4");
		surv.border2x2 = File(surv.folder.borders.fsName + "/Border 2x2.png");
		surv.border3x3 = File(surv.folder.borders.fsName + "/Border 3x3.png");
		surv.crtWarped = File(surv.folder.overlaysLooks.fsName + "/CRT Warped.mp4");
		surv.crtWarpedColor = File(surv.folder.overlaysLooks.fsName + "/CRT Warped Color.mp4");
	} else {
		surv.folder.transitions = Folder(surv.srcPath + "/transitions");
		surv.transitions = [];
		surv.transitions[0] = File(surv.folder.transitions.fsName + "/1.mp4");
		surv.transitions[1] = File(surv.folder.transitions.fsName + "/2.mp4");
		surv.transitions[2] = File(surv.folder.transitions.fsName + "/3.mp4");
		surv.transitions[3] = File(surv.folder.transitions.fsName + "/4.mp4");
		surv.transitions[4] = File(surv.folder.transitions.fsName + "/5.mp4");
	}
}

function createProjectFolders(looks) {
	var folderExists = false;
	for (var i = 1; i <= app.project.numItems; i++) {
		if (app.project.items[i].name === "_SURVEILLANCE" && app.project.items[i] instanceof FolderItem) {
			folderExists = true;
			surv.folderRoot = app.project.items[i];
			break;
		}
	}
	if (!folderExists) {
		surv.folderRoot = app.project.items.addFolder("_SURVEILLANCE");
		if (looks) {
			surv.folderAssets = surv.folderRoot.items.addFolder("Assets");
			surv.folderNone = surv.folderAssets.items.addFolder("No Grid");
			surv.folder2x2 = surv.folderAssets.items.addFolder("2x2");
			surv.folder3x3 = surv.folderAssets.items.addFolder("3x3");
			surv.folderBorders = surv.folderAssets.items.addFolder("Borders");
			surv.folderLooks = surv.folderAssets.items.addFolder("Looks");
		} else {
			surv.folderTransitions = surv.folderRoot.items.addFolder("Transitions");
		}
	} else {
		if (looks) {
			folderExists = false;
			for (var i = 1; i <= surv.folderRoot.numItems; i++) {
				if (surv.folderRoot.items[i].name === "Assets" && surv.folderRoot.items[i] instanceof FolderItem) {
					folderExists = true;
					surv.folderAssets = surv.folderRoot.items[i];
					break;
				}
			}
			if (!folderExists) {
				surv.folderAssets = surv.folderRoot.items.addFolder("Assets");
			}
			folderExists = false;
			for (var i = 1; i <= surv.folderAssets.numItems; i++) {
				if (surv.folderAssets.items[i].name === "No Grid" && surv.folderAssets.items[i] instanceof FolderItem) {
					folderExists = true;
					surv.folderNone = surv.folderAssets.items[i];
					break;
				}
			}
			if (!folderExists) {
				surv.folderNone = surv.folderAssets.items.addFolder("No Grid");
			}
			folderExists = false;
			for (var i = 1; i <= surv.folderAssets.numItems; i++) {
				if (surv.folderAssets.items[i].name === "2x2" && surv.folderAssets.items[i] instanceof FolderItem) {
					folderExists = true;
					surv.folder2x2 = surv.folderAssets.items[i];
					break;
				}
			}
			if (!folderExists) {
				surv.folder2x2 = surv.folderAssets.items.addFolder("2x2");
			}
			folderExists = false;
			for (var i = 1; i <= surv.folderAssets.numItems; i++) {
				if (surv.folderAssets.items[i].name === "3x3" && surv.folderAssets.items[i] instanceof FolderItem) {
					folderExists = true;
					surv.folder3x3 = surv.folderAssets.items[i];
					break;
				}
			}
			if (!folderExists) {
				surv.folder3x3 = surv.folderAssets.items.addFolder("3x3");
			}
			folderExists = false;
			for (var i = 1; i <= surv.folderAssets.numItems; i++) {
				if (surv.folderAssets.items[i].name === "Looks" && surv.folderAssets.items[i] instanceof FolderItem) {
					folderExists = true;
					surv.folderLooks = surv.folderAssets.items[i];
					break;
				}
			}
			if (!folderExists) {
				surv.folderLooks = surv.folderAssets.items.addFolder("Looks");
			}
			folderExists = false;
			for (var i = 1; i <= surv.folderAssets.numItems; i++) {
				if (surv.folderAssets.items[i].name === "Borders" && surv.folderAssets.items[i] instanceof FolderItem) {
					folderExists = true;
					surv.folderBorders = surv.folderAssets.items[i];
					break;
				}
			}
			if (!folderExists) {
				surv.folderBorders = surv.folderAssets.items.addFolder("Borders");
			}
		} else {
			folderExists = false;
			for (var i = 1; i <= surv.folderRoot.numItems; i++) {
				if (surv.folderRoot.items[i].name === "Transitions" && surv.folderRoot.items[i] instanceof FolderItem) {
					folderExists = true;
					surv.folderTransitions = surv.folderRoot.items[i];
					break;
				}
			}
			if (!folderExists) {
				surv.folderTransitions = surv.folderRoot.items.addFolder("Transitions");
			}
		}
	}
}

function importAssets() {
	var curAsset;
	for (var i = 0; i < surv.overlaysNone.length; i++) {
		curAsset = app.project.importFile(new ImportOptions(new File(surv.overlaysNone[i].fsName)));
		curAsset.parentFolder = surv.folderNone;
		curAsset = app.project.importFile(new ImportOptions(new File(surv.overlays2x2[i].fsName)));
		curAsset.parentFolder = surv.folder2x2;
		curAsset = app.project.importFile(new ImportOptions(new File(surv.overlays3x3[i].fsName)));
		curAsset.parentFolder = surv.folder3x3;
	}
	curAsset = app.project.importFile(new ImportOptions(new File(surv.border2x2.fsName)));
	curAsset.parentFolder = surv.folderBorders;
	curAsset = app.project.importFile(new ImportOptions(new File(surv.border3x3.fsName)));
	curAsset.parentFolder = surv.folderBorders;
	curAsset = app.project.importFile(new ImportOptions(new File(surv.crtWarped.fsName)));
	curAsset.parentFolder = surv.folderLooks;
	curAsset = app.project.importFile(new ImportOptions(new File(surv.crtWarpedColor.fsName)));
	curAsset.parentFolder = surv.folderLooks;
	removeDuplicateFiles(surv.folderNone);
	removeDuplicateFiles(surv.folder2x2);
	removeDuplicateFiles(surv.folder3x3);
	removeDuplicateFiles(surv.folderBorders);
	removeDuplicateFiles(surv.folderLooks);
}