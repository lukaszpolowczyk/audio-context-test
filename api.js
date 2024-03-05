(()=> {
"use strict";
globalThis.bootstrap = class extends ExtensionAPI {
	getAPI() {
		return {
			bootstrap: {
				loadScript: async ()=>{
					Services.wm.addListener({	onOpenWindow: ()=>{} });
					const w = Services.wm.getMostRecentWindow("navigator:browser");
					const c = new w.AudioContext();
					()=>{c}
				},
			}
		}
	}
}
})();
