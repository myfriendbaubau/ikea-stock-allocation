import {defaults,evaluate} from './model.mjs';
const $=id=>document.getElementById(id),form=$('scenario');
let current=null;
const money=n=>new Intl.NumberFormat('en-GB',{style:'currency',currency:'GBP',maximumFractionDigits:2}).format(n);
const names={hold:'No transfer needed',escalate:'Escalate the shortage',review:'Review the economics',transfer:'Review a transfer'};
function render(){
 $('surge-value').textContent=$('surge').value+'%';
 if(!form.checkValidity()){current=null;$('result-title').textContent='Check the input values';$('explanation').textContent='Use the permitted non-negative values. Demand and time inputs must be at least one.';$('approve').disabled=true;return;}
 const values=Object.fromEntries([...form.elements].filter(x=>x.name).map(x=>[x.name,Number(x.value)]));
 current=evaluate(values);const r=current;
 $('result-title').textContent=names[r.recommendation];$('gap').textContent=r.gap;$('qty').textContent=r.qty;$('remaining').textContent=r.remaining;
 const covered=r.need?Math.min(100,(r.need-r.remaining)/r.need*100):100;$('covered-bar').style.width=covered+'%';$('risk-bar').style.width=(100-covered)+'%';
 const arrival=values.transferLead>=values.lead?'A transfer would arrive too late to improve this horizon.':r.earlyShortage?`${r.earlyShortage} units of demand are lost before the transfer can arrive.`:'The local stock covers demand until the proposed transfer arrives.';
 $('explanation').textContent=`Scenario demand is ${r.demand.toFixed(1)} units/day. The donor keeps ${r.donorReserve} units for its own demand, leaving ${r.surplus} available. ${arrival}`;
 $('cost').textContent=r.qty?`Illustrative transfer cost ${money(r.cost)}. Contribution protected after transfer cost: ${money(r.benefit)}. This excludes holding costs, emissions and unmodelled uncertainty.`:'No transfer cost is incurred. Review replenishment, customer promises or another source if demand remains uncovered.';
 $('approve').disabled=r.recommendation!=='transfer';$('decision-status').textContent='No decision recorded for this scenario.';
}
form.addEventListener('input',()=>{document.querySelectorAll('[data-scenario]').forEach(b=>{b.classList.remove('selected');b.setAttribute('aria-pressed','false')});render()});
const scenarios={normal:{stock:90,surge:0},surge:{},late:{transferLead:9},limited:{donor:34}};
function setScenario(name){const v={...defaults,...scenarios[name]};for(const x of form.elements)if(x.name)x.value=v[x.name];document.querySelectorAll('[data-scenario]').forEach(b=>{const on=b.dataset.scenario===name;b.classList.toggle('selected',on);b.setAttribute('aria-pressed',String(on))});render()}
document.querySelectorAll('[data-scenario]').forEach(b=>b.addEventListener('click',()=>setScenario(b.dataset.scenario)));
$('reset').addEventListener('click',()=>setScenario('surge'));
$('approve').addEventListener('click',()=>{if(current?.recommendation!=='transfer')return;$('decision-status').textContent=`Simulated approval recorded for ${current.qty} units. Nothing has been sent or ordered. Changing an input clears this decision.`;$('approve').disabled=true});
$('print').addEventListener('click',()=>window.print());
const details=[...document.querySelectorAll('details')];let openState=[];
window.addEventListener('beforeprint',()=>{openState=details.map(d=>d.open);details.forEach(d=>d.open=true)});
window.addEventListener('afterprint',()=>details.forEach((d,i)=>d.open=openState[i]));
const observer=new IntersectionObserver(entries=>{for(const e of entries)if(e.isIntersecting){document.querySelectorAll('nav a').forEach(a=>a.classList.toggle('active',a.hash==='#'+e.target.id))}},{rootMargin:'-15% 0px -65% 0px'});
document.querySelectorAll('section[id]').forEach(s=>observer.observe(s));setScenario('surge');
