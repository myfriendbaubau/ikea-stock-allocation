export const defaults={stock:42,daily:8,surge:40,lead:7,donor:90,donorDaily:5,transferLead:2,capacity:60,unitCost:2.4,fixedCost:25,unitMargin:15};
export function evaluate(input){
 const v={...defaults,...input};
 for(const [k,n] of Object.entries(v))if(!Number.isFinite(n)||n<(k==='surge'?-100:0))throw new Error(`Invalid ${k}`);
 const demand=v.daily*(1+v.surge/100),need=Math.ceil(demand*v.lead),gap=Math.max(0,need-v.stock);
 const donorReserve=Math.ceil(v.donorDaily*v.lead),surplus=Math.max(0,v.donor-donorReserve);
 const beforeArrival=Math.ceil(demand*Math.min(v.transferLead,v.lead));
 const earlyShortage=Math.max(0,beforeArrival-v.stock);
 const qty=v.transferLead>=v.lead?0:Math.min(gap,surplus,v.capacity);
 const remaining=Math.max(earlyShortage,gap-qty),avoided=Math.max(0,gap-remaining);
 const cost=qty?v.fixedCost+qty*v.unitCost:0,benefit=avoided*v.unitMargin-cost;
 const safe=v.stock>=beforeArrival;
 const recommendation=gap===0?'hold':qty===0?'escalate':benefit<=0?'review':'transfer';
 return {demand,need,gap,donorReserve,surplus,earlyShortage,qty,remaining,avoided,cost,benefit,safe,recommendation,cover:demand?v.stock/demand:Infinity};
}
