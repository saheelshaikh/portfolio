(() => {
 const $=s=>document.querySelector(s),data=window.DATA_LAB,fmt=n=>new Intl.NumberFormat('en',{maximumFractionDigits:0}).format(n);
 const metric=(label,value)=>`<div class="metric"><span>${label}</span><b>${value}</b></div>`;
 const sum=(rows,key)=>rows.reduce((a,r)=>a+r[key],0);
 function bars(entries){const max=Math.max(...entries.map(x=>x[1]),1);return entries.map(([label,value])=>`<div class="bar-row"><span>${label}</span><div class="bar-track"><div class="bar-fill" style="width:${value/max*100}%"></div></div><strong>${fmt(value)}</strong></div>`).join('');}
 function render(){
  const rows=data.orders.filter(r=>($('#region').value==='All'||r.region===$('#region').value)&&($('#category').value==='All'||r.category===$('#category').value));
  const revenue=sum(rows,'revenue'),profit=revenue-sum(rows,'cost');
  $('#metrics').innerHTML=metric('Revenue · SAR',fmt(revenue))+metric('Gross profit · SAR',fmt(profit))+metric('Gross margin',revenue?(profit/revenue*100).toFixed(1)+'%':'—')+metric('Orders',rows.length);
  $('#monthly').innerHTML=bars(['01','02','03','04','05','06'].map((m,i)=>[['Jan','Feb','Mar','Apr','May','Jun'][i],sum(rows.filter(r=>r.month==='2026-'+m),'revenue')]));
  const regions=['Riyadh','Jeddah','Dammam'].map(name=>[name,sum(rows.filter(r=>r.region===name),'revenue')]).sort((a,b)=>b[1]-a[1]);
  $('#regions').innerHTML=bars(regions);$('#insight').textContent=rows.length?`${regions[0][0]} accounts for ${(regions[0][1]/revenue*100).toFixed(1)}% of revenue in this selection.`:'No matching records.';
  $('#count').textContent=`(${rows.length})`;$('#records').innerHTML=rows.map(r=>`<tr>${Object.values(r).map(v=>`<td>${v}</td>`).join('')}</tr>`).join('');
 }
 let clean=[];
 $('#run').addEventListener('click',()=>{
  const seen=new Set(),rejects=[];clean=[];
  data.raw.forEach((r,i)=>{
   const errors=[];
   if(!r.order_id)errors.push('Missing order ID');else if(seen.has(r.order_id))errors.push('Repeated order ID');
   if(r.order_id)seen.add(r.order_id);
   if(!r.region)errors.push('Missing region');
   if(!Number.isFinite(r.revenue)||r.revenue<=0)errors.push('Invalid revenue');
   if(!Number.isFinite(r.cost)||r.cost<0||r.cost>r.revenue)errors.push('Invalid cost');
   if(errors.length)rejects.push({row:i+1,id:r.order_id||'—',reason:errors.join('; ')});else clean.push(r);
  });
  $('#quality-results').innerHTML=`<div class="metrics">${metric('Input rows',data.raw.length)}${metric('Clean rows',clean.length)}${metric('Rejected rows',rejects.length)}${metric('Pass rate',(clean.length/data.raw.length*100).toFixed(1)+'%')}</div><p>Rejected rows can have more than one issue. Duplicate detection retains only the first occurrence of each order ID.</p><div class="table-wrap"><table><caption>Rejected records</caption><thead><tr><th>Data row</th><th>Order ID</th><th>Reason</th></tr></thead><tbody>${rejects.map(r=>`<tr><td>${r.row}</td><td>${r.id}</td><td class="rejected">${r.reason}</td></tr>`).join('')}</tbody></table></div>`;
  $('#download-clean').disabled=false;$('#run').textContent='Run again';
 });
 $('#download-clean').addEventListener('click',()=>{const csv=['order_id,month,region,category,revenue,cost',...clean.map(r=>Object.values(r).join(','))].join('\n');const url=URL.createObjectURL(new Blob([csv],{type:'text/csv'}));const a=document.createElement('a');a.href=url;a.download='clean-orders.csv';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);});
 function route(){const quality=location.hash==='#quality';$('#sales').hidden=quality;$('#quality').hidden=!quality;$('#sales-tab').toggleAttribute('aria-current',!quality);$('#quality-tab').toggleAttribute('aria-current',quality);}
 $('#region').addEventListener('change',render);$('#category').addEventListener('change',render);$('#reset').addEventListener('click',()=>{$('#region').value=$('#category').value='All';render();});window.addEventListener('hashchange',route);render();route();
})();
