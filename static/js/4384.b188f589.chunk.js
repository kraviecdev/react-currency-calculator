"use strict";(self.webpackChunkreact_currency_calculator=self.webpackChunkreact_currency_calculator||[]).push([[4384],{4384:(e,t,i)=>{i.d(t,{NoneOutMode:()=>s});var o=i(4864);class s{constructor(e){this.container=e,this.modes=["none"]}async update(e,t,i,s){var n;if(!this.modes.includes(s))return;if(null!==(n=e.options.move.distance.horizontal&&("left"===t||"right"===t))&&void 0!==n?n:e.options.move.distance.vertical&&("top"===t||"bottom"===t))return;const r=e.options.move.gravity,c=this.container,a=c.canvas.size,l=e.getRadius();if(r.enable){const i=e.position;(!r.inverse&&i.y>a.height+l&&"bottom"===t||r.inverse&&i.y<-l&&"top"===t)&&c.particles.remove(e)}else{if(e.velocity.y>0&&e.position.y<=a.height+l||e.velocity.y<0&&e.position.y>=-l||e.velocity.x>0&&e.position.x<=a.width+l||e.velocity.x<0&&e.position.x>=-l)return;(0,o.Mv)(e.position,c.canvas.size,o.Cg.origin,l,t)||c.particles.remove(e)}await Promise.resolve()}}}}]);
//# sourceMappingURL=4384.b188f589.chunk.js.map