(function() {
	"object"!=typeof JSON&&(JSON={}),function(){"use strict";var rx_one=/^[\],:{}\s]*$/,rx_two=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,rx_three=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,rx_four=/(?:^|:|,)(?:\s*\[)+/g,rx_escapable=/[\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,rx_dangerous=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta,rep;function f(t){return t<10?"0"+t:t}function this_value(){return this.valueOf()}function quote(t){return rx_escapable.lastIndex=0,rx_escapable.test(t)?'"'+t.replace(rx_escapable,(function(t){var e=meta[t];return"string"==typeof e?e:"\\u"+("0000"+t.charCodeAt(0).toString(16)).slice(-4)}))+'"':'"'+t+'"'}function str(t,e){var r,n,o,u,f,a=gap,i=e[t];switch(i&&"object"==typeof i&&"function"==typeof i.toJSON&&(i=i.toJSON(t)),"function"==typeof rep&&(i=rep.call(e,t,i)),typeof i){case"string":return quote(i);case"number":return isFinite(i)?String(i):"null";case"boolean":case"null":return String(i);case"object":if(!i)return"null";if(gap+=indent,f=[],"[object Array]"===Object.prototype.toString.apply(i)){for(u=i.length,r=0;r<u;r+=1)f[r]=str(r,i)||"null";return o=0===f.length?"[]":gap?"[\n"+gap+f.join(",\n"+gap)+"\n"+a+"]":"["+f.join(",")+"]",gap=a,o}if(rep&&"object"==typeof rep)for(u=rep.length,r=0;r<u;r+=1)"string"==typeof rep[r]&&(o=str(n=rep[r],i))&&f.push(quote(n)+(gap?": ":":")+o);else for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(o=str(n,i))&&f.push(quote(n)+(gap?": ":":")+o);return o=0===f.length?"{}":gap?"{\n"+gap+f.join(",\n"+gap)+"\n"+a+"}":"{"+f.join(",")+"}",gap=a,o}}"function"!=typeof Date.prototype.toJSON&&(Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null},Boolean.prototype.toJSON=this_value,Number.prototype.toJSON=this_value,String.prototype.toJSON=this_value),"function"!=typeof JSON.stringify&&(meta={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},JSON.stringify=function(t,e,r){var n;if(gap="",indent="","number"==typeof r)for(n=0;n<r;n+=1)indent+=" ";else"string"==typeof r&&(indent=r);if(rep=e,e&&"function"!=typeof e&&("object"!=typeof e||"number"!=typeof e.length))throw new Error("JSON.stringify");return str("",{"":t})}),"function"!=typeof JSON.parse&&(JSON.parse=function(text,reviver){var j;function walk(t,e){var r,n,o=t[e];if(o&&"object"==typeof o)for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(void 0!==(n=walk(o,r))?o[r]=n:delete o[r]);return reviver.call(t,e,o)}if(text=String(text),rx_dangerous.lastIndex=0,rx_dangerous.test(text)&&(text=text.replace(rx_dangerous,(function(t){return"\\u"+("0000"+t.charCodeAt(0).toString(16)).slice(-4)}))),rx_one.test(text.replace(rx_two,"@").replace(rx_three,"]").replace(rx_four,"")))return j=eval("("+text+")"),"function"==typeof reviver?walk({"":j},""):j;throw new SyntaxError("JSON.parse")})}();

	var surv = {};
	surv.orderNo = "";
	surv.author = "tinytapes"
	surv.name = "Surveillance";
	surv.licensedOffline = false;
	surv.licensedOnline = false;
	surv.footagePage = 1;
	surv.curLook = 1;
	surv.curOverlay = 1;
	surv.curTransition = 1;
	surv.trackers = [];
	surv.faceTrackers = [];
	surv.bodyTrackers = [];
	surv.grid = 1;
	surv.launched = false;
	surv.trackerType = 1;
	surv.trackerTypes = ["Corners","Corners & Crosshair","Full","Full & Crosshair"];
	surv.licenseKeyListToken = "zq2tC1i2Pvr8HwfTj51aKXa5w6vGwctpUfUR";
	surv.licenseAPIKey='ck_60bbfd050bb532fc54354a7cd5104f09a203b2d0';
	surv.licenseSecretKey='cs_8ea328e5927e16aab8472579b122491cf4defcff';
	surv.activateUrl = "https://tinytapes.com/wp-json/lmfwc/v2/licenses/activate/";
	surv.validdateUrl = "https://tinytapes.com/wp-json/lmfwc/v2/licenses/validate/";
	surv.deactivateUrl = "https://tinytapes.com/wp-json/lmfwc/v2/licenses/deactivate/";
	surv.csi = new CSInterface();
	surv.requestOptions = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
	};
	surv.flyoutXmlString = '<Menu><MenuItem Label="---" /><MenuItem Id="activate" Label="Activate License" Enabled="true" Checked="false"/><MenuItem Id="deactivate" Label="Deactivate License" Enabled="false" Checked="false"/><MenuItem Label="---" /><MenuItem Id="support" Label="Get Support" Enabled="true" Checked="false"/></Menu>';

	surv.csi.setPanelFlyoutMenu(surv.flyoutXmlString,flyoutMenuCallback);
	surv.csi.addEventListener("com.adobe.csxs.events.flyoutMenuClicked", flyoutMenuCallback);
	surv.path = surv.csi.getSystemPath(SystemPath.EXTENSION) + '/host/';

	checkOfflineLicense();

	surv.csi.evalScript("checkUnfinished()", function(res){
		if (res === "ok") {
			const sliders = document.querySelectorAll(".slider");
			lookSliders = document.querySelectorAll(".look-slider");
			radioModeBtns = document.querySelectorAll("input[name='radio-mode']"),
			screen = document.getElementById("screen"),
			gridSection = document.getElementById("grid-section"),
			noGrid = document.getElementById("radio-no-grid"),
			grid2x2 = document.getElementById("radio-2x2"),
			grid3x3 = document.getElementById("radio-3x3"),
			chooseFootageBtn = document.getElementById("choose-footage-btn"),
			noGridPreview = document.getElementById("no-grid-preview"),
			grid2x2Preview = document.getElementById("grid-2x2-preview"),
			grid3x3Preview = document.getElementById("grid-3x3-preview"),
			radioGridBtns = document.querySelectorAll("input[name='radio-grid']"),
			footageSection = document.getElementById("footage-section"),
			footageBackBtn = document.getElementById("footage-back-btn"),
			footageRestartBtn = document.getElementById("footage-restart-btn"),
			looksBtn = document.getElementById("looks-btn"),
			footageContainers = document.querySelectorAll(".footage-container"),
			footageLEDs = document.querySelectorAll(".led"),
			footageNames = document.querySelectorAll(".load-layer-screen"),
			paginationContainer = document.getElementById("pagination-container"),
			paginationBackBtn = document.getElementById("pagination-back"),
			paginationText = document.getElementById("pagination-text"),
			paginationNextBtn = document.getElementById("pagination-next"),
			hd = document.getElementById("radio-hd"),
			uhd = document.getElementById("radio-uhd"),
			radioStageBtns = document.querySelectorAll("input[name='radio-stage']"),
			looksCarouselBackBtn = document.getElementById("looks-carousel-back-btn"),
			looksCarouselNextBtn = document.getElementById("looks-carousel-next-btn"),
			overlayCarouselBackBtn = document.getElementById("overlay-carousel-back-btn"),
			overlayCarouselNextBtn = document.getElementById("overlay-carousel-next-btn"),
			editSwitches = document.getElementById("edit-switches"),
			glitchSlider = document.getElementById("slider-glitch"),
			fpsSwitches = document.querySelectorAll("input[name='radio-fps']"),
			fpsCheck = document.getElementById("check-fps"),
			borderCheck = document.getElementById("check-border"),
			looksSection = document.getElementById("looks-section"),
			looksBackBtn = document.getElementById("looks-back-btn"),
			looksSectionBtns = document.getElementById("looks-section-btns"),
			baseSection = document.getElementById("base-section"),
			lookName = document.getElementById("looks-text"),
			overlayName = document.getElementById("overlay-text"),
			editSection = document.getElementById("edit-section"),
			editLookSections = document.querySelectorAll(".edit-look-section"),
			lookSwitches = document.querySelectorAll("label[name='look-switch']"),
			checkGlitchLabel = document.getElementById("check-glitch-label"),
			checkGlitch = document.getElementById("check-glitch"),
			checkNight = document.getElementById("check-night"),
			trackSection = document.getElementById("track-section"),
			trackEditSection = document.getElementById("track-edit-section"),
			trackEditBackBtn = document.getElementById("track-edit-back-btn"),
			addTrackerBtns = document.querySelectorAll(".add-tracker-btn"),
			trackersContainer = document.getElementById("trackers-container"),
			trackersPage1 = document.getElementById("trackers-page-1"),
			trackersPage2 = document.getElementById("trackers-page-2"),
			faceTracker = document.getElementById("face-tracker"),
			bodyTracker = document.getElementById("body-tracker"),
			trackerPrevBtn = document.getElementById("trackers-prev"),
			trackerNextBtn = document.getElementById("trackers-next"),
			trackerEditBtns = document.querySelectorAll(".tracker-edit-btn"),
			trackerTrashBtns = document.querySelectorAll(".tracker-trash-btn"),
			trackerTypeText = document.getElementById("tracker-type-text"),
			trackerTypePrevBtn = document.getElementById("tracker-type-prev"),
			trackerTypeNextBtn = document.getElementById("tracker-type-next"),
			trackerHueSlider = document.getElementById("tracker-hue"),
			trackerResSlider = document.getElementById("tracker-res"),
			trackerShakeSlider = document.getElementById("tracker-shake"),
			trackerFlickerSlider = document.getElementById("tracker-flicker"),
			trackerResCheck = document.getElementById("tracker-res-check"),
			trackerShakeCheck = document.getElementById("tracker-shake-check"),
			trackerFlickerCheck = document.getElementById("tracker-flicker-check"),
			trackerBlack = document.getElementById("radio-black"),
			trackerWhite = document.getElementById("radio-white"),
			transitionsSection = document.getElementById("transitions-section"),
			transitionVideo = document.getElementById("transition-video"),
			transitionPrevBtn = document.getElementById("transitions-prev-btn"),
			transitionNextBtn = document.getElementById("transitions-next-btn"),
			applyTransitionBtn = document.getElementById("apply-btn"),
			transitionText = document.getElementById("transitions-text"),
			doneBtn = document.getElementById("done-btn");

			displayEditLookSection(surv.curLook);
			syncTrackerType(surv.trackerType);
			toggleSlider(glitchSlider, false);
			for (var i = 0; i < sliders.length; i++) {
				syncSliderGradient(sliders[i]);
			}

			transitionPrevBtn.addEventListener("click", function(){
				if (surv.curTransition > 1) {
					surv.curTransition --;
					transitionVideo.src = "previews/" + surv.curTransition + ".webm";
					transitionVideo.load();
					transitionVideo.play();
					transitionText.innerHTML = "Transition 0" + surv.curTransition;
				}
			});

			transitionNextBtn.addEventListener("click", function(){
				if (surv.curTransition < 5) {
					surv.curTransition ++;
					transitionVideo.src = "previews/" + surv.curTransition + ".webm";
					transitionVideo.load();
					transitionVideo.play();
					transitionText.innerHTML = "Transition 0" + surv.curTransition;
				}
			});

			applyTransitionBtn.addEventListener("click", function(){
				surv.csi.evalScript("applyTransition(" + surv.curTransition + ")");
			});

			radioModeBtns.forEach(item => {
				item.addEventListener('click', () => {
					surv.csi.evalScript("canWriteFiles()", function(res){
						if (res === "false") {
							if (document.getElementById("radio-looks").checked && item.id === "radio-looks") {
								return;
							} else if (document.getElementById("radio-looks").checked && item.id === "radio-looks") {
								return;
							}
							if (item.id === "radio-looks") {
								document.getElementById("radio-transitions").checked = true;
							} else {
								document.getElementById("radio-looks").checked = true;
							}
							return;
						} else {
							if (item.id === "radio-looks") {
								transitionVideo.pause();
								transitionVideo.load();
								transitionsSection.style.display = "none";
								footageRestartBtn.click();
								gridSection.style.display = "flex";
							} else if (item.id === "radio-transitions") {
								if (surv.licensedOffline || surv.licensedOnline) {
									transitionVideo.play();
									screen.innerHTML = "> Choose a transition & click apply to insert it into your comp at the current time";
									if (surv.launched) {
										surv.csi.evalScript("reset()");
									}
									surv.launched = false;
									surv.csi.evalScript("launchTransitions('" + surv.path.toString() + "')");
									transitionsSection.style.display = "flex";
									gridSection.style.display = "none";
									footageSection.style.display = "none";
									looksSection.style.display = "none";
								} else {
									surv.csi.evalScript("newAlert('" + surv.name + " is not licensed. Please activate from the extension menu.')");
									document.getElementById("radio-looks").checked = true;
									return;
								}
							}
						}
					});
				});
			});

			doneBtn.addEventListener("click", function() {
				surv.csi.evalScript("completeSurveillance()", function(res) {
					if (res === "valid") {
						document.getElementById("edit-section-form").reset();
						document.getElementById("global-switches-form").reset();
						syncAllSliders();
						lookName.innerHTML = "Black & White Camcorder";
						overlayName.innerHTML = "Camera";
						hd.checked = true;
						surv.footagePage = 1;
						surv.curLook = 1;
						displayEditLookSection(surv.curLook);
						surv.curOverlay = 1;
						surv.trackers = [];
						surv.faceTrackers = [];
						surv.bodyTrackers = [];
						surv.grid = 1;
						surv.launched = false;
						surv.trackerType = 1;
						radioStageBtns[0].click();
						for (var i = trackersPage1.childElementCount - 1; i >= 0; i--) {
							trackersPage1.children[i].remove();
						}
						for (var i = trackersPage2.childElementCount - 1; i >= 0; i--) {
							trackersPage2.children[i].remove();
						}
						surv.faceTrackers = document.querySelectorAll(".face-tracker");
						surv.bodyTrackers = document.querySelectorAll(".body-tracker");
						surv.trackers = document.querySelectorAll(".tracker");
						syncTrackerType(1);
						trackerHueSlider.value = 0;
						syncSliderGradient(trackerHueSlider);
						trackerResSlider.value = 50;
						syncSliderGradient(trackerResSlider);
						trackerShakeSlider.value = 50;
						syncSliderGradient(trackerShakeSlider);
						trackerFlickerSlider.value = 50;
						syncSliderGradient(trackerFlickerSlider);
						trackerResCheck.checked = 0;
						toggleSlider(trackerResSlider,trackerResCheck.checked);
						trackerShakeCheck.checked = 1;
						toggleSlider(trackerShakeSlider,trackerShakeCheck.checked);
						trackerFlickerCheck.checked = 1;
						toggleSlider(trackerFlickerSlider,trackerFlickerCheck.checked);
						trackerWhite.checked = false;
						trackerBlack.checked = false;
						for (var i = 0; i < footageLEDs.length; i++) {
							footageLEDs[i].classList.remove("led-on");
							footageLEDs[i].classList.add("led-off");
							footageNames[i].innerHTML = "Load footage " + (i+1);
						}
						screen.innerHTML = "> Do you want to make a grid?";
						footageSection.style.display = "none";
						noGrid.click();
						gridSection.style.display = "flex";
						looksSection.style.display = "none";
						footageRestartBtn.style.display = "none";
						footageBackBtn.style.display = "flex";
						setFootagePagination(surv.footagePage);
					}
				});
			});

			trackerPrevBtn.addEventListener("click", () => {
				trackersPage1.style.display = "flex";
				trackersPage2.style.display = "none";
			});

			trackerNextBtn.addEventListener("click", () => {
				surv.trackers = document.querySelectorAll(".tracker");
				if (surv.trackers.length < 5 ) {
					return;
				}
				trackersPage2.style.display = "flex";
				trackersPage1.style.display = "none";
			});

			trackEditBackBtn.addEventListener("click", () => {
				screen.innerHTML = "> Add face & body trackers";
				looksSectionBtns.style.display = "flex";
				trackSection.style.display = "flex";
				trackEditSection.style.display = "none";
			});

			trackerTypePrevBtn.addEventListener("click", () => {
				if (surv.trackerType > 1) {
					surv.trackerType --;
					trackerTypeText.innerHTML = surv.trackerTypes[surv.trackerType-1];
					surv.csi.evalScript("setTrackerType(" + surv.activeTrackerId + "," + surv.trackerType + ")");
				} else {
					return;
				}
			});

			trackerTypeNextBtn.addEventListener("click", () => {
				if (surv.trackerType < 4) {
					surv.trackerType ++;
					trackerTypeText.innerHTML = surv.trackerTypes[surv.trackerType-1];
					surv.csi.evalScript("setTrackerType(" + surv.activeTrackerId + "," + surv.trackerType + ")");
				} else {
					return;
				}
			});

			trackerHueSlider.addEventListener("input", function () {
				surv.csi.evalScript("editTrackerSlider(" + surv.activeTrackerId + ", 50 ,'Lightness')");
				surv.csi.evalScript("editTrackerSlider(" + surv.activeTrackerId + "," + this.value + ",'Hue')");
				syncSliderGradient(this);
				trackerBlack.checked = false;
				trackerWhite.checked = false;
			});

			trackerResSlider.addEventListener("input", function () {
				surv.csi.evalScript("editTrackerSlider(" + surv.activeTrackerId + "," + this.value + ",'Low Res Amount')");
				syncSliderGradient(this);
			});

			trackerShakeSlider.addEventListener("input", function () {
				surv.csi.evalScript("editTrackerSlider(" + surv.activeTrackerId + "," + this.value + ",'Shake Amount')");
				syncSliderGradient(this);
			});

			trackerFlickerSlider.addEventListener("input", function () {
				surv.csi.evalScript("editTrackerSlider(" + surv.activeTrackerId + "," + this.value + ",'Flicker Amount')");
				syncSliderGradient(this);
			});

			trackerResCheck.addEventListener("click", function () {
				surv.csi.evalScript("editTrackerSwitch(" + surv.activeTrackerId + "," + this.checked + ",'Low Res On/Off')");
				toggleSlider(trackerResSlider,this.checked);
			});

			trackerShakeCheck.addEventListener("click", function () {
				surv.csi.evalScript("editTrackerSwitch(" + surv.activeTrackerId + "," + this.checked + ",'Shake On/Off')");
				toggleSlider(trackerShakeSlider,this.checked);
			});

			trackerFlickerCheck.addEventListener("click", function () {
				surv.csi.evalScript("editTrackerSwitch(" + surv.activeTrackerId + "," + this.checked + ",'Flicker On/Off')");
				toggleSlider(trackerFlickerSlider,this.checked);
			});

			trackerWhite.addEventListener("click", function () {
				surv.csi.evalScript("editTrackerSlider(" + surv.activeTrackerId + ", 100 ,'Lightness')");
			});

			trackerBlack.addEventListener("click", function () {
				surv.csi.evalScript("editTrackerSlider(" + surv.activeTrackerId + ", 0 ,'Lightness')");
			});

			addTrackerBtns.forEach(item => {
				item.addEventListener("click", function() {
					surv.trackers = document.querySelectorAll(".tracker");
					if (surv.trackers.length === 8) {
						return;
					}

					var className, type, defaultName, arr, template;
					if (item.id.indexOf("face") !== -1) {
						className = "tracker face-tracker";
						type = "face";
						defaultName = "FACE TRACKER ";
						arr = surv.faceTrackers;
						template = faceTracker;
					} else {
						className = "tracker body-tracker";
						type = "body";
						defaultName = "BODY TRACKER ";
						arr = surv.bodyTrackers;
						template = bodyTracker;
					}

					var tracker = template.content.cloneNode(true);
					tracker.querySelector("div").className = className;
					var trackerInput = tracker.querySelector("input");

					trackerInput.value = defaultName + checkTrackerNumbers(arr.length + 1,arr);
					trackerInput.value = checkTrackerNames(trackerInput,trackerInput.value,surv.trackers,true,type);

					if (trackersPage1.childElementCount === 4) {
						trackersPage2.prepend(trackersPage1.children[3]);
					}

					trackersPage1.prepend(tracker);

					trackersContainer.style.display = "flex";
					surv.faceTrackers = document.querySelectorAll(".face-tracker");
					surv.bodyTrackers = document.querySelectorAll(".body-tracker");
					surv.trackers = document.querySelectorAll(".tracker");
					var newTracker = surv.trackers[0];

					surv.csi.evalScript("addTracker('" + type + "','" + trackerInput.value + "')", function (res) {
						var trackerEditBtn = newTracker.querySelector(".tracker-edit-btn");
						trackerEditBtn.id = "edit-" + res;
						var trackerTrashBtn = newTracker.querySelector(".tracker-trash-btn");
						trackerTrashBtn.id = "trash-" + res;
						var trackerName = newTracker.querySelector(".tracker-name");
						trackerName.id = "name-" + res;

						trackerName.addEventListener("change", function() {
							surv.activeTrackerId = this.id.substr(5);
							if (this.value.length === 0) {
								this.value = this.defaultValue + " 1";
							}
							this.value = checkTrackerNames(this,this.value,surv.trackers,false,type);
							surv.csi.evalScript("setTrackerName(" + surv.activeTrackerId + ",'" + this.value + "')");
						});

						trackerEditBtn.addEventListener("click", function() {
							surv.activeTrackerId = this.id.substr(5);
							screen.innerHTML = "> Editing: " + this.parentElement.querySelector("input").value;
							looksSectionBtns.style.display = "none";
							trackSection.style.display = "none";
							trackEditSection.style.display = "flex";
							surv.csi.evalScript("readTracker(" + surv.activeTrackerId + ")", function (res) {
								var result = JSON.parse(res);
								syncTrackerType(result.type);
								trackerHueSlider.value = result.hue;
								syncSliderGradient(trackerHueSlider);
								trackerResSlider.value = result.lowRes;
								syncSliderGradient(trackerResSlider);
								trackerShakeSlider.value = result.shake;
								syncSliderGradient(trackerShakeSlider);
								trackerFlickerSlider.value = result.flicker;
								syncSliderGradient(trackerFlickerSlider);
								trackerResCheck.checked = result.lowResSwitch;
								toggleSlider(trackerResSlider,trackerResCheck.checked);
								trackerShakeCheck.checked = result.shakeSwitch;
								toggleSlider(trackerShakeSlider,trackerShakeCheck.checked);
								trackerFlickerCheck.checked = result.flickerSwitch;
								toggleSlider(trackerFlickerSlider,trackerFlickerCheck.checked);
								if (result.lightness.toString() === "100") {
									trackerWhite.checked = true;
								} else if (result.lightness.toString() === "0") {
									trackerBlack.checked = true;
								} else {
									trackerWhite.checked = false;
									trackerBlack.checked = false;
								}
							});
						});

						trackerTrashBtn.addEventListener("click", function() {
							surv.csi.evalScript("removeTracker(" + this.id.substr(6) + ")");
							newTracker.remove();
							surv.faceTrackers = document.querySelectorAll(".face-tracker");
							surv.faceTrackers = document.querySelectorAll(".body-tracker");
							surv.trackers = document.querySelectorAll(".tracker");

							if (trackersPage1.childElementCount === 3) {
								trackersPage1.appendChild(trackersPage2.children[0]);
							}

							if (surv.trackers.length === 0) {
								trackersContainer.style.display = "none";
							} else if (surv.trackers.length < 5) {
								trackerPrevBtn.click();
							}
						});
					});
				});
			});

			borderCheck.addEventListener("click", () => {
				surv.csi.evalScript("toggleBorder(" + borderCheck.checked + ")");
			});

			fpsSwitches.forEach((item,index) => {
				item.addEventListener("click", () => {
					fpsCheck.checked = true;
					var value;
					if (index === 0) {
						value = 8;
					} else if (index === 1) {
						value = 12;
					} else if (index === 2) {
						value = 18;
					}
					surv.csi.evalScript("toggleFPS(" + fpsCheck.checked + "," + value + ")");
				});
			});

			fpsCheck.addEventListener("click", () => {
				surv.csi.evalScript("toggleFPS(" + fpsCheck.checked + ",8)");
				if (!fpsCheck.checked) {
					for (var i = 0; i < fpsSwitches.length; i++) {
						fpsSwitches[i].checked = false;
					}
				} else {
					fpsSwitches[0].click();
				}
			});

			radioGridBtns.forEach(item => {
				item.addEventListener('click', () => {
					if (item.id === "radio-no-grid") {
						surv.grid = 1;
						noGridPreview.style.display = "flex";
						grid2x2Preview.style.display = "none";
						grid3x3Preview.style.display = "none";
					} else if (item.id === "radio-2x2") {
						surv.grid = 4;
						noGridPreview.style.display = "none";
						grid2x2Preview.style.display = "flex";
						grid3x3Preview.style.display = "none";
					} else if (item.id === "radio-3x3") {
						surv.grid = 9;
						noGridPreview.style.display = "none";
						grid2x2Preview.style.display = "none";
						grid3x3Preview.style.display = "flex";
					}
				});
			});

			footageContainers.forEach((item,index) => {
				item.querySelector(".normal-btn").addEventListener("click", () => {
					surv.csi.evalScript("getFootage(" + index + ")", function(res) {
						if (res === "false") {
							return;
						} else {
							surv.chosenFootageNames[index] = res;
							if (surv.chosenFootageNames[index].length > 25) {
								footageNames[index].innerHTML = surv.chosenFootageNames[index].substr(0,25) + "...";
							} else {
								footageNames[index].innerHTML = surv.chosenFootageNames[index];
							}
							toggleLED(footageLEDs[index],true);
						}
					});
				});
			});

			chooseFootageBtn.addEventListener("click", function() {
				surv.csi.evalScript("canWriteFiles()", function(res){
					if (res === "false") {
						return;
					}
				});
				if (surv.licensedOffline || surv.licensedOnline) {
					surv.csi.evalScript("chooseFootage()", function(res) {
						if (!res) {
							return;
						} else {
							surv.chosenFootageNames = JSON.parse(res);
							if (surv.chosenFootageNames.length !== 0) {
								for (var i = 0; i < surv.chosenFootageNames.length; i++) {
									if (surv.chosenFootageNames[i].length > 25) {
										footageNames[i].innerHTML = surv.chosenFootageNames[i].substr(0,25) + "...";
									} else {
										footageNames[i].innerHTML = surv.chosenFootageNames[i];
									}
									toggleLED(footageLEDs[i],true);
								}
							}
							screen.innerHTML = "> Load either footage or compositions into each slot" +
							"<br/>" +
							"<br/>" +
							"1. Select an item" + 
							"<br/>" +
							"2. Click the load button";
							footageSection.style.display = "flex";
							gridSection.style.display = "none";
							var numContainers;
							if (noGrid.checked) {
								paginationContainer.style.display = "none";
								numContainers = 1;
							} else if (grid2x2.checked) {
								paginationContainer.style.display = "none";
								numContainers = 4;
							} else if (grid3x3.checked) {
								paginationContainer.style.display = "flex";
								numContainers = 3;
							}
							for (var i = 0; i < footageContainers.length; i++) {
								if (i < numContainers) {
									footageContainers[i].style.display = "flex";
								} else {
									footageContainers[i].style.display = "none";
								}
							}
						}
					});
				} else {
					surv.csi.evalScript("newAlert('" + surv.name + " is not licensed. Please activate from the extension menu.')");
					return;
				}
			});

			footageBackBtn.addEventListener("click", function() {
				screen.innerHTML = "> Do you want to make a grid?";
				footageSection.style.display = "none";
				gridSection.style.display = "flex";
				surv.footagePage = 1;
				setFootagePagination(surv.footagePage);
			});

			footageRestartBtn.addEventListener("click", function() {
				try {
				surv.csi.evalScript("reset()");
				document.getElementById("edit-section-form").reset();
				document.getElementById("global-switches-form").reset();
				syncAllSliders();
				lookName.innerHTML = "Black & White Camcorder";
				overlayName.innerHTML = "Camera";
				hd.checked = true;
				surv.footagePage = 1;
				surv.curLook = 1;
				displayEditLookSection(surv.curLook);
				surv.curOverlay = 1;
				surv.trackers = [];
				surv.faceTrackers = [];
				surv.bodyTrackers = [];
				surv.grid = 1;
				surv.launched = false;
				surv.trackerType = 1;
				radioStageBtns[0].click();
				for (var i = trackersPage1.childElementCount - 1; i >= 0; i--) {
					trackersPage1.children[i].remove();
				}
				for (var i = trackersPage2.childElementCount - 1; i >= 0; i--) {
					trackersPage2.children[i].remove();
				}
				surv.faceTrackers = document.querySelectorAll(".face-tracker");
				surv.bodyTrackers = document.querySelectorAll(".body-tracker");
				surv.trackers = document.querySelectorAll(".tracker");
				syncTrackerType(1);
				trackerHueSlider.value = 0;
				syncSliderGradient(trackerHueSlider);
				trackerResSlider.value = 50;
				syncSliderGradient(trackerResSlider);
				trackerShakeSlider.value = 50;
				syncSliderGradient(trackerShakeSlider);
				trackerFlickerSlider.value = 50;
				syncSliderGradient(trackerFlickerSlider);
				trackerResCheck.checked = 0;
				toggleSlider(trackerResSlider,trackerResCheck.checked);
				trackerShakeCheck.checked = 1;
				toggleSlider(trackerShakeSlider,trackerShakeCheck.checked);
				trackerFlickerCheck.checked = 1;
				toggleSlider(trackerFlickerSlider,trackerFlickerCheck.checked);
				trackerWhite.checked = false;
				trackerBlack.checked = false;
				for (var i = 0; i < footageLEDs.length; i++) {
					footageLEDs[i].classList.remove("led-on");
					footageLEDs[i].classList.add("led-off");
					footageNames[i].innerHTML = "Load footage " + (i+1);
				}
				screen.innerHTML = "> Do you want to make a grid?";
				footageSection.style.display = "none";
				noGrid.click();
				gridSection.style.display = "flex";
				footageRestartBtn.style.display = "none";
				footageBackBtn.style.display = "flex";
				surv.footagePage = 1;
				setFootagePagination(surv.footagePage);
				} catch (err) {
					alert(err);
				}
			});

			looksBtn.addEventListener("click", function() {
				for (var i = 0; i < surv.grid; i++) {
					if (footageLEDs[i].classList.contains("led-off")) {
						// add warning
						return;
					}
				}
				surv.csi.evalScript("launchLooks(" + surv.grid + "," + surv.launched + "," + hd.checked + ",'" + surv.path.toString() + "')");
				surv.launched = true;
				screen.innerHTML = "> Choose a base look and a graphic overlay" +
				"<br/>" +
				"<br/>" +
				"> Turn posterize time on/off & choose frame rate";
				footageSection.style.display = "none";
				looksSection.style.display = "flex";
				if (surv.grid === 1) {
					borderCheck.checked = false;
					borderCheck.disabled = true;
				}
			});

			paginationNextBtn.addEventListener("click", function() {
				if (surv.footagePage < 3) {
					surv.footagePage ++;
					setFootagePagination(surv.footagePage);
				} else {
					return;
				}
			});

			paginationBackBtn.addEventListener("click", function() {
				if (surv.footagePage > 1) {
					surv.footagePage --;
					setFootagePagination(surv.footagePage);
				} else {
					return;
				}
			});

			radioStageBtns.forEach(item => {
				item.addEventListener('click', () => {
					if (item.id === "radio-base") {
						trackEditBackBtn.click();
						screen.innerHTML = "> Choose a base look and a graphic overlay" +
						"<br/>" +
						"<br/>" +
						"> Turn posterize time on/off & choose frame rate";
						baseSection.style.display = "flex";
						editSection.style.display = "none";
						trackSection.style.display = "none";
					} else if (item.id === "radio-edit") {
						trackEditBackBtn.click();
						screen.innerHTML = "> Use the sliders & switches to fine tune your look";
						baseSection.style.display = "none";
						editSection.style.display = "flex";
						trackSection.style.display = "none";
					} else if (item.id === "radio-track") {
						trackEditBackBtn.click();
						screen.innerHTML = "> Add face & body trackers";
						baseSection.style.display = "none";
						editSection.style.display = "none";
						trackSection.style.display = "flex";
					}
				});
			});

			looksBackBtn.addEventListener("click", function() {
				screen.innerHTML = "> Load either footage or compositions into each slot" +
				"<br/>" +
				"<br/>" +
				"1. Select an item" + 
				"<br/>" +
				"2. Click the load button";
				looksSection.style.display = "none";
				footageSection.style.display = "flex";
				footageRestartBtn.style.display = "flex";
				footageBackBtn.style.display = "none";
			});

			looksCarouselNextBtn.addEventListener("click", function() {
				if (surv.curLook < 13) {
					surv.csi.evalScript("nextLook()",function (res){
						lookName.innerHTML = res;
						surv.curLook ++;
						displayEditLookSection(surv.curLook);
					});
				}
			});

			looksCarouselBackBtn.addEventListener("click", function() {
				if (surv.curLook > 1) {
					surv.csi.evalScript("prevLook()",function (res){
						lookName.innerHTML = res;
						surv.curLook --;
						displayEditLookSection(surv.curLook);
					});
				}
			});

			overlayCarouselNextBtn.addEventListener("click", function() {
				if (surv.curOverlay < 9) {
					surv.csi.evalScript("nextOverlay()",function (res) {
						overlayName.innerHTML = res;
						surv.curOverlay ++;
					});
				}
			});

			overlayCarouselBackBtn.addEventListener("click", function() {
				if (surv.curOverlay > 0) {
					surv.csi.evalScript("prevOverlay()",function (res){
						overlayName.innerHTML = res;
						surv.curOverlay --;
					});
				}
			});

			lookSliders.forEach(item => {
				item.addEventListener("input", () => {
					surv.csi.evalScript("updateSlider('" + item.id + "'," + item.value + ")");
					syncSliderGradient(item);
				});
			});

			lookSwitches.forEach(item => {
				item.addEventListener("click", () => {
					var input = document.getElementById(item.htmlFor);
					surv.csi.evalScript("updateSwitch('" + input.id + "'," + input.checked + ")");
				});
			});

			checkGlitch.addEventListener("click", function(){
				surv.csi.evalScript("toggleGlitch(" + this.checked + ")");
				toggleSlider(glitchSlider, this.checked);
			});

			checkNight.addEventListener("click", function(){
				surv.csi.evalScript("toggleNight(" + this.checked + ")");
			});

			function syncAllSliders() {
				for (var i = 0; i < sliders.length; i++) {
					syncSliderGradient(sliders[i]);
				}
			}

			function syncTrackerType(type) {
				trackerTypeText.innerHTML = surv.trackerTypes[type-1];
				surv.trackerType = type;
			}

			function displayEditLookSection(section) {
				for (var i = 0; i < editLookSections.length; i++) {
					if (section === i + 1) {
						editLookSections[i].children[0].appendChild(editSwitches);
						editLookSections[i].style.display = "flex";
					} else {
						editLookSections[i].style.display = "none";
					}
				}
				for (var i = 0; i < lookSwitches.length; i++) {
					var regex = new RegExp("^(" + section.toString() + "-)");
					if (lookSwitches[i].htmlFor.match(regex) === null) {
						lookSwitches[i].style.display = "none";
					} else {
						lookSwitches[i].style.display = "flex";
					}
					if (section === 2 || section === 4 || section === 9 || section === 12 || section === 13) {
						checkGlitchLabel.classList.remove("middle-icon-btn");
						checkGlitchLabel.classList.add("right-icon-btn");
					} else {
						checkGlitchLabel.classList.remove("right-icon-btn");
						checkGlitchLabel.classList.add("middle-icon-btn");
					}
				}	
			}

			function setFootagePagination(page) {
				var low = (page * 3) - 3;
				var high = (page * 3) - 1;
				paginationText.innerHTML = "Footage " + (low + 1) + "-" + (high + 1);
				for (var i = 0; i < footageContainers.length; i++) {
					if (i < low || i > high) {
						footageContainers[i].style.display = "none";
					} else {
						footageContainers[i].style.display = "flex";
					}
				}
			}
		}
	});

	function mailTo(orderNo) {
		var url;
		if (surv.orderNo === "") {
			url = "mailto:surveillance@tinytapes.ca?subject=Support%20ticket";
		} else {
			url = "mailto:surveillance@tinytapes.ca?subject=Support%20ticket%20for%20order%20" + orderNo.toString();
		}
		surv.csi.openURLInDefaultBrowser(url);
	}

	function flyoutMenuCallback(event) {
		if (event.type === "com.adobe.csxs.events.flyoutMenuClicked") {
			switch(event.data.menuId) {
			case "support":
				mailTo(surv.orderNo);
				break;
			case "activate":
				surv.csi.evalScript("licensePrompt()", function(res) {
					if (res !== "null") {
						surv.licenseKey = res.trim();
						validateLicenseKey(surv.licenseKey,true);
					} else {
						return;
					}
				});
				break;
			case "deactivate":
				var url = surv.deactivateUrl+surv.licenseKey;
				const username = surv.licenseAPIKey;
				const password = surv.licenseSecretKey;

				// Encode the username and password to Base64
				const basicAuth = btoa(`${username}:${password}`);

				fetch(url, {
				method: 'GET', // or 'POST', 'PUT', etc.
				headers: {
					'Authorization': `Basic ${basicAuth}`,
					'Content-Type': 'application/json'
				}
				})
				.then(response => {
					return response.json();
				  })
				  .then(data => {
					var data = data.data;
					if (data.error !== undefined) {
						if (data.error.toString() === "License key not found") {
							throw new Error("License key not found. Please contact us for support.");
						}
					} 
					else 
					{
						if (data.orderId !==undefined)
						{
							surv.csi.evalScript("removeOfflineLicense()");
								surv.licensedOffline = false;
								surv.licensedOnline = false;
								deactivateMenu();
								surv.csi.evalScript("newAlert('" + surv.name + " is now deactivated. Please contact us with your order number #" + data.orderId + " to reactivate.')");
						}
						else
						{
							throw new Error("License key not found. Please contact us for support.");
						}
					}					
				  })
				  .catch(error => {
					if (error.message && error.message === 'Network Error')
					{
						surv.csi.evalScript("newAlert('No network connection detected. We could not deactivate your license.')");
					}
					else 
					{
							surv.csi.evalScript("newAlert('" + error + " If the issue persists, please contact us for support.')");
					}
				  });
				break;
			default:
				break;
			}
		}
	}

	function setMenuList() { 
		xmlDoc = $.parseXML(surv.flyoutXmlString);
		$xml = $(xmlDoc);
		var i = 0;
		$($xml).find("MenuItem").each(function() {
			var option = document.createElement("option");
			var name = $(this).attr("Label");
			if (-1 == name.indexOf('---')) {
				option.value = ++i;
				option.appendChild(document.createTextNode(name));
			}
		});
	}

	function checkOfflineLicense() {
		surv.csi.evalScript("checkOfflineLicense()", function(res) {
			if (res !== "not found") {
				// alert("Found offline license file. Attempting to validate online.");
				surv.licenseKey = decrypt(surv.author,res);
				if (surv.licenseKey.match(/^(SURV)[A-Z0-9-]{19}(TT)$/) !== null || surv.licenseKey.match(/^(SURV)[A-Z0-9]{16}(TT)$/) !== null)  {
					surv.licensedOffline = true;
					validateLicenseKey(surv.licenseKey,false);
				} else {
					// alert("Offline license file is invalid — removing file.");
					deactivateMenu();
					surv.csi.evalScript("removeOfflineLicense()");
				}
			}
		});
	}

	function licenseMenu(email) {
		var newXmlString = '<Menu><MenuItem Label="---" /><MenuItem Id="activate" Label="Licensed' + '" Enabled="false" Checked="false"/><MenuItem Id="deactivate" Label="Deactivate License" Enabled="true" Checked="false"/><MenuItem Label="---" /><MenuItem Id="support" Label="Get Support" Enabled="true" Checked="false"/></Menu>';
		surv.csi.setPanelFlyoutMenu(newXmlString,flyoutMenuCallback);
		surv.flyoutXmlString = newXmlString;
		setMenuList();
	}

	function deactivateMenu() {
		var newXmlString = '<Menu><MenuItem Label="---" /><MenuItem Id="activate" Label="Activate License" Enabled="true" Checked="false"/><MenuItem Id="deactivate" Label="Deactivate License" Enabled="false" Checked="false"/><MenuItem Label="---" /><MenuItem Id="support" Label="Get Support" Enabled="true" Checked="false"/></Menu>';
		surv.csi.setPanelFlyoutMenu(newXmlString,flyoutMenuCallback);
		surv.flyoutXmlString = newXmlString;
		setMenuList();
	}

	function daysToMilliseconds(days) {
		return days * 24 * 60 * 60 * 1000;
	}

	function millisecondsToDays(milliseconds) {
		return milliseconds / 1000 / 60 / 60 / 24;
	}

	function sanitizeLicense(input)
	{
		if (!input) return "";
	  
		return input
		  .normalize("NFKC") // normalize different Unicode forms
		  .replace(/[\u200B-\u200D\uFEFF]/g, "") // strip zero-width chars
		  .replace(/\s+/g, "") // remove all spaces/newlines
		  .trim()
		  .toUpperCase(); // optional: force uppercase
	  };

	function validateLicenseKey(licenseKey,increment) {
		licenseKey = sanitizeLicense(licenseKey);
		var url = increment ? surv.activateUrl:surv.validdateUrl;
		url += licenseKey;

		const username = surv.licenseAPIKey;
		const password = surv.licenseSecretKey;

		// Encode the username and password to Base64
		const basicAuth = btoa(`${username}:${password}`);

		fetch(url, {
		method: 'GET', // or 'POST', 'PUT', etc.
		headers: {
			'Authorization': `Basic ${basicAuth}`,
			'Content-Type': 'application/json'
		}
		})
		.then(response => {
			return response.json();
		})
		.then(data => {

			var data = data.data;

			if (data.errors !==undefined && data.errors.lmfwc_rest_data_error !==undefined)
			{
				if(data.errors.lmfwc_rest_data_error.length>0)
				{
					if(data.errors.lmfwc_rest_data_error[0].includes("reached maximum activation count."))
					{
						throw new Error('Maximum number of activations reached. Please deactivate ' + surv.name + ' on one of your other computers and contact us with your order number for a new license key.');

					}
					if(data.errors.lmfwc_rest_data_error[0].includes("could not be found."))
					{
						throw new Error('License could not be found.');
					}
				}
			}

			if (data.timesActivated !==undefined && data.timesActivatedMax !==undefined)
			{
				if(data.timesActivated<=data.timesActivatedMax)
				{
					var email = "test@gmail.com";
					var encryptedLicenseKey = crypt(surv.author,licenseKey);
					surv.csi.evalScript("saveOfflineLicense('" + encryptedLicenseKey + "','" + email + "')", function(res) {
						if (!surv.licensedOffline) 
						{
							surv.licensedOffline = true;
							surv.licensedOnline = true;
							licenseMenu(email);
							surv.csi.evalScript("newAlert('Thanks for purchasing " + surv.name + ". You have used " + data.timesActivated + " of 2 activations.')");
						}
						else
						{
							surv.licensedOffline = true;
							surv.licensedOnline = true;
							licenseMenu(email);
						}
					});
					return;
				}
			}
			throw new Error('License could not be found.');
		})
		.catch(error => {
			if (error.message && error.message === 'Network Error')
			{
				if (surv.licensedOffline) {
					surv.csi.evalScript("getLicenseInfo()",function(res){
						var email = JSON.parse(res).email;
						var prevDate = JSON.parse(res).date;
						var now = Date.now();
						var delta = now - prevDate;
						var daysElapsed = millisecondsToDays(delta);
						if (delta > daysToMilliseconds(30)) {
							surv.licensedOffline = false;
							surv.licensedOnline = false;
							surv.csi.evalScript("newAlert('No network connection detected. We have not been able to verify your license key in " + daysElapsed + ". Please connect to the internet to continue.')");
						} else {
							licenseMenu(email);
							surv.csi.evalScript("newAlert('No network connection detected. You have " + (30 - parseInt(daysElapsed)).toString() + " days left to connect to the internet and verify your license key.')");
						}
					});
				} else {
					deactivateMenu();
					surv.licensedOffline = false;
					surv.licensedOnline = false;
					surv.csi.evalScript("newAlert('No network connection detected. We have not been able to verify your license key. Please connect to the internet to continue.')");
				}
			}
			else
			{
				if (surv.licensedOffline) {
					// alert("Invalid license key — removing offline license file");
					deactivateMenu();
					surv.licensedOffline = false;
					surv.licensedOnline = false;
					surv.csi.evalScript("removeOfflineLicense()");
				}
				surv.licensedOffline = false;
				surv.licensedOnline = false;
				surv.csi.evalScript("newAlert('" + error + "')");
			}
		});
	}

	function toggleLED(led,state) {
		if (state) {
			led.classList.remove("led-off");
			led.classList.add("led-on");
		} else {
			led.classList.remove("led-on");
			led.classList.add("led-off");
		}
	}

	function checkTrackerNumbers(checkNumber,arr) {
		for (var i = 0; i < arr.length; i++) {
			if (arr[i].querySelector("input").value === "FACE TRACKER " + checkNumber) {
				checkNumber += 1;
				return checkTrackerNumbers(checkNumber,arr);
			}
		}
		return checkNumber;
	}

	function checkTrackerNames(item,name,arr,bothTypes,trackerType) {
		var count = 0;
		var matchCount;
		if (bothTypes) {
			matchCount = 0;
		} else {
			matchCount = 1;
		}
		for (var i = 0; i < arr.length; i++) {
			if (arr[i].querySelector("input").value === name) {
				count++;
			}
		}
		if (count > matchCount) {
			if (/\d$/.test(name)) {
				var root = name.replace(/\d+$/,"");
				var num = name.match(/\d+$/);
				name = root + (parseInt(num)+1).toString();
			} else {
				name += " 2";
			}
			item.value = name;
			return checkTrackerNames(item,name,arr,bothTypes,trackerType);
		}
		return name;
	}

	function toggleSlider(slider, enabled) {
		slider.disabled = !enabled;
		if (enabled) {
			slider.style.filter = "grayscale(0%)";
		} else {
			slider.style.filter = "grayscale(100%)";
		}
	}

	function syncSliderGradient(slider) {
		var sliderVal = ((slider.value - slider.min) * 100 / (slider.max - slider.min)).toString();
		var sliderColor;
		if (slider.id.indexOf("hue") !== -1) {
			sliderColor = "hsl(" + slider.value.toString() + ",100%,50%)";
		} else {
			sliderColor = "red";
		}
		slider.style.background = "linear-gradient(to right, " + sliderColor + " " + sliderVal + "% , transparent " + sliderVal + "%)";
	}

	function rangeMap(x, inMin, inMax, outMin, outMax) {
		return (x - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
	}

	const crypt = (salt, text) => {
		const textToChars = (text) => text.split("").map((c) => c.charCodeAt(0));
		const byteHex = (n) => ("0" + Number(n).toString(16)).substr(-2);
		const applySaltToChar = (code) => textToChars(salt).reduce((a, b) => a ^ b, code);
		return text
		.split("")
		.map(textToChars)
		.map(applySaltToChar)
		.map(byteHex)
		.join("");
	};

	const decrypt = (salt, encoded) => {
		const textToChars = (text) => text.split("").map((c) => c.charCodeAt(0));
		const applySaltToChar = (code) => textToChars(salt).reduce((a, b) => a ^ b, code);
		return encoded
		.match(/.{1,2}/g)
		.map((hex) => parseInt(hex, 16))
		.map(applySaltToChar)
		.map((charCode) => String.fromCharCode(charCode))
		.join("");
	};
	
}());