"use strict";(self.webpackChunkreact_currency_calculator=self.webpackChunkreact_currency_calculator||[]).push([[5984],{3604:(e,i,t)=>{t.d(i,{updateLife:()=>o});var n=t(4864);const a=0,r=-1,u=0,l=0;function o(e,i,t){if(!e.life)return;const o=e.life;let c=!1;if(e.spawning){if(o.delayTime+=i.value,!(o.delayTime>=e.life.delay))return;c=!0,e.spawning=!1,o.delayTime=a,o.time=a}if(o.duration===r)return;if(e.spawning)return;if(c?o.time=a:o.time+=i.value,o.time<o.duration)return;if(o.time=a,e.life.count>u&&e.life.count--,e.life.count===u)return void e.destroy();const s=(0,n.Ws)(l,t.width),f=(0,n.Ws)(l,t.width);e.position.x=(0,n.jy)(s),e.position.y=(0,n.jy)(f),e.spawning=!0,o.delayTime=a,o.time=a,e.reset();const d=e.options.life;d&&(o.delay=(0,n.qS)(d.delay.value)*n.Ub,o.duration=(0,n.qS)(d.duration.value)*n.Ub)}}}]);
//# sourceMappingURL=5984.2985e989.chunk.js.map