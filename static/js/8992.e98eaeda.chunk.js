"use strict";(self.webpackChunkreact_currency_calculator=self.webpackChunkreact_currency_calculator||[]).push([[8992],{8992:(e,t,a)=>{a.d(t,{EmojiDrawer:()=>c});var o=a(4864),n=a(7168);const i='"Twemoji Mozilla", Apple Color Emoji, "Segoe UI Emoji", "Noto Color Emoji", "EmojiOne Color"';class c{constructor(){this._emojiShapeDict=new Map}destroy(){for(const[e,t]of this._emojiShapeDict)t instanceof ImageBitmap&&(null===t||void 0===t||t.close(),this._emojiShapeDict.delete(e))}async draw(e){const{drawEmoji:t}=await a.e(2152).then(a.bind(a,2152));t(e)}async init(e){const t=e.actualOptions;if(!n.I.find((e=>(0,o.Sc)(e,t.particles.shape.type))))return;const a=[(0,o.or)(i)],c=n.I.map((e=>t.particles.shape.options[e])).find((e=>!!e));c&&(0,o.yW)(c,(e=>{e.font&&a.push((0,o.or)(e.font))})),await Promise.all(a)}particleDestroy(e){delete e.emojiData}async particleInit(e,t){var a;const n=t.shapeData;if(null===n||void 0===n||!n.value)return;const c=(0,o.pd)(n.value,t.randomIndexData),s=null!==(a=n.font)&&void 0!==a?a:i;if(!c)return;const r="".concat(c,"_").concat(s),l=this._emojiShapeDict.get(r);if(l)return void(t.emojiData=l);const p=2*(0,o.GO)(t.size.value);let f;const m=(0,o.GO)(t.size.value);if("undefined"!==typeof OffscreenCanvas){const e=new OffscreenCanvas(p,p),t=e.getContext("2d");if(!t)return;t.font="400 ".concat(2*m,"px ").concat(s),t.textBaseline="middle",t.textAlign="center",t.fillText(c,m,m),f=e.transferToImageBitmap()}else{const e=document.createElement("canvas");e.width=p,e.height=p;const t=e.getContext("2d");if(!t)return;t.font="400 ".concat(2*m,"px ").concat(s),t.textBaseline="middle",t.textAlign="center",t.fillText(c,m,m),f=e}this._emojiShapeDict.set(r,f),t.emojiData=f,await Promise.resolve()}}}}]);
//# sourceMappingURL=8992.e98eaeda.chunk.js.map