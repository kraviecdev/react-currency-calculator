"use strict";(self.webpackChunkreact_currency_calculator=self.webpackChunkreact_currency_calculator||[]).push([[9904],{9904:(a,o,t)=>{t.d(o,{OpacityUpdater:()=>c});var i=t(4864);class c{constructor(a){this.container=a}async init(a){const o=a.options.opacity;a.opacity=(0,i.aI)(o,1);const t=o.animation;t.enable&&(a.opacity.velocity=(0,i.qS)(t.speed)/i.sc*this.container.retina.reduceFactor,t.sync||(a.opacity.velocity*=(0,i.CE)())),await Promise.resolve()}isEnabled(a){var o,t,i,c;return!a.destroyed&&!a.spawning&&!!a.opacity&&a.opacity.enable&&((null!==(o=a.opacity.maxLoops)&&void 0!==o?o:0)<=0||(null!==(t=a.opacity.maxLoops)&&void 0!==t?t:0)>0&&(null!==(i=a.opacity.loops)&&void 0!==i?i:0)<(null!==(c=a.opacity.maxLoops)&&void 0!==c?c:0))}reset(a){a.opacity&&(a.opacity.time=0,a.opacity.loops=0)}async update(a,o){this.isEnabled(a)&&a.opacity&&((0,i.C2)(a,a.opacity,!0,a.options.opacity.animation.destroy,o),await Promise.resolve())}}}}]);
//# sourceMappingURL=9904.30ae8698.chunk.js.map