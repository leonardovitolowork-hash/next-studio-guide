(() => {
'use strict';
const D=NEXT_MANUAL;
const stop=new Set('the a an for of from in on or and it to at be not with can you your is use as by how do does i my that this when will are click select then see also next cakewalk please get find explain about guide where what'.split(' '));
const normal=s=>String(s).normalize('NFKD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]+/g,' ').trim();
const words=s=>[...new Set(normal(s).split(' ').filter(w=>w.length>=3&&!stop.has(w)))];
const topics=D.topics.map((t,i)=>({...t,i}));
const rank=(query,max=12)=>{
 const q=normal(query), ts=words(q); if(!ts.length)return [];
 const scored=topics.map(t=>{
  const title=normal(t.title), keys=normal(t.keys), titleWords=new Set(words(title)), allWords=new Set(words(title+' '+keys));
  const match=ts.filter(w=>allWords.has(w)).length;
  const score=ts.reduce((a,w)=>a+(titleWords.has(w)?5:allWords.has(w)?2:0),0)+(q===title?25:title.length>5&&` ${q} `.includes(` ${title} `)?14:0)+(match===ts.length?4:0);
  return [t,score,match];
 }).filter(x=>x[2]).sort((a,b)=>b[1]-a[1]||a[0].p-b[0].p);
 return scored.slice(0,max).map(x=>x[0]);
};
const pages=(query,max=10)=>{
 const ts=words(query).filter(w=>D.index[w]); if(!ts.length)return [];
 const hits=new Map(); for(const w of ts){const list=D.index[w];for(const p of list){const [n,s]=hits.get(p)||[0,0];hits.set(p,[n+1,s+1/Math.sqrt(list.length)])}}
 const hasBody=ts.length>1 && [...hits.values()].some(([n])=>n>1);
 return [...hits].filter(([p,[n]])=>p>=7 && (!hasBody||n>1)).sort((a,b)=>b[1][0]-a[1][0]||b[1][1]-a[1][1]||a[0]-b[0]).slice(0,max).map(x=>x[0]);
};
const quick=[
['audio',271,'Configure audio/MIDI'],['project',271,'Create a project'],['recordaudio',272,'Add a track'],['instrument',273,'Play an instrument'],['record',274,'Record a take'],['automation',275,'Add automation'],['insertfx',276,'Add effects'],['export',277,'Export audio'],['bus',277,'Organize tracks']];
const shortcuts=D.short;
const escape=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const openURL=p=>D.url+'#page='+p;
const clamped=p=>Math.min(D.pages,Math.max(1,Number.isFinite(+p)?Math.floor(+p):9));
let local=null, lookup='', embedded=false;
const chapterTitle=p=>topics.find(t=>t.chapter===p)?.title||D.chapters[p]?.[0]||'Reference';
const source=(p,label='Open PDF p. '+p)=>`<a href="${openURL(p)}" target="_blank" rel="noopener noreferrer">${escape(label)} ↗</a>`;
const card=(p,label)=>`<a class="chip" href="#manual/${p}">${escape(label||'Manual p. '+p)}</a>`;
const refs=(query)=>{
 const rows=rank(query,4), found=pages(query,6);
 if(!rows.length&&!found.length) return '';
 return `<details class="manual-hits"><summary>Find it in the official manual</summary><ul>${rows.map(t=>`<li>${card(t.p,t.title+' · p. '+t.p)}</li>`).join('')}${found.length?`<li>Other keyword matches: ${found.map(p=>card(p,'p. '+p)).join(' ')}</li>`:''}</ul></details>`;
};
function render(main,id){
 let p=clamped(id||9);
 main.innerHTML=`<p class="eyebrow">SOURCE / CAKEWALK NEXT MANUAL v${D.version}</p><h1>Manual desk</h1><p class="intro">Start with Cakewalk’s own tutorials or look up a command. Browse the complete contents and open the original PDF when you need its screenshots, tables or exact instructions.</p>
 <div class="manual-grid"><section class="reading" aria-label="Manual search"><label for="manual-find">Find a tool, setting or task</label><input type="search" id="manual-find" class="search" maxlength="160" placeholder="e.g. input latency, Gate mode, bounce" value="${escape(lookup)}"><div id="manual-results"></div><div id="manual-toc"></div></section>
 <section class="reading" aria-label="Selected page"><div class="flex manual-nav"><a id="manual-prev" class="chip">← Prev</a><form class="flex" id="manual-go"><label for="manual-page">Page</label><input type="number" id="manual-page" min="1" max="${D.pages}" value="${p}" required><button>Go</button></form><a id="manual-next" class="chip">Next →</a></div>
 <div id="manual-note"></div><div class="flex toolbar" id="manual-links"></div><div class="flex"><button type="button" id="manual-preview">${embedded?'Hide preview':'Show PDF preview'}</button><label class="manual-local">Use your own PDF <input id="manual-file" type="file" accept="application/pdf,.pdf"></label></div><p class="dim" id="manual-file-status" role="status">${local?'Local PDF ready.':'Optional: open your downloaded manual here; it stays on this device.'}</p><div id="manual-frame"></div></section></div>`;
 const $=s=>main.querySelector(s);
 const topicsHtml=Object.entries(D.chapters).map(([n,[name]])=>`<details ${topics.some(t=>t.p===p&&t.chapter===+n)?'open':''}><summary>${escape(chapterTitle(+n))} · p. ${n}</summary><ul class="toc-rows">${topics.filter(t=>t.chapter===+n).map(t=>`<li><a href="#manual/${t.p}" ${t.p===p?'aria-current="location"':''}>${escape(t.title)} <span>p. ${t.p}</span></a></li>`).join('')}</ul></details>`).join('');
 $('#manual-toc').innerHTML='<h2>Full contents</h2>'+topicsHtml;
 const find=()=>{lookup=$('#manual-find').value; const hits=rank(lookup), found=pages(lookup); $('#manual-toc').hidden=!!lookup.trim();
 $('#manual-results').innerHTML=lookup.trim()?`<h2>Topic matches</h2>${hits.length?`<ul class="toc-rows">${hits.map(t=>`<li><a href="#manual/${t.p}">${escape(t.title)} <span>p. ${t.p}</span></a></li>`).join('')}</ul>`:'<p>No matching headings. Try another term or check the page matches below.</p>'}<h2>Page matches</h2><p class="dim">Matches words in the manual’s text; this does not search text inside screenshots.</p><div class="flex">${found.length?found.map(n=>card(n,'p. '+n)).join(' '):'No page matches.'}</div>`:'';};
 $('#manual-find').oninput=find;find();
 const selected=topics.filter(t=>t.p<=p).at(-1), ch=selected?.chapter||7, [heading,notes,practice]=D.chapters[ch];
 const headingList=topics.filter(t=>t.p===p).map(t=>t.title);
 $('#manual-note').innerHTML=`<p class="eyebrow">PAGE ${p} OF ${D.pages}</p><h2>${escape(headingList[0]||selected?.title||'Front matter')}</h2>${headingList.length>1?`<p class="dim">Also on this page: ${escape(headingList.slice(1).join(' · '))}</p>`:''}${D.notes[p]?`<p class="call"><strong>Page note:</strong> ${escape(D.notes[p])}</p>`:''}<h3>Chapter takeaway · ${escape(heading)}</h3><p>${escape(notes)}</p><p><strong>Try it:</strong> ${escape(practice)}</p><p class="dim">Notes are paraphrased. Refer to the original page for exact steps and figures.</p>`;
 $('#manual-prev').href='#manual/'+clamped(p-1); $('#manual-next').href='#manual/'+clamped(p+1);
 if(p===1)$('#manual-prev').hidden=true;if(p===D.pages)$('#manual-next').hidden=true;
 $('#manual-go').onsubmit=e=>{e.preventDefault();location.hash='manual/'+clamped($('#manual-page').value);};
 const showPDF=()=>{const href=local?local+'#page='+p:openURL(p); $('#manual-links').innerHTML=`${source(p,'Open official PDF · p. '+p)}${local?`<a href="${href}" target="_blank" rel="noopener">Open local copy ↗</a>`:''}`;
 $('#manual-preview').textContent=embedded?'Hide preview':'Show PDF preview'; $('#manual-frame').innerHTML=embedded?`<p class="dim">If your browser does not show PDFs inline, use the open link above.</p><iframe title="Cakewalk Next manual, page ${p}" src="${href}"></iframe>`:'';};
 $('#manual-preview').onclick=()=>{embedded=!embedded;showPDF()};
 $('#manual-file').onchange=e=>{const f=e.target.files?.[0];if(!f)return;if(f.type!=='application/pdf'&&!/\.pdf$/i.test(f.name)){ $('#manual-file-status').textContent='Choose a PDF file.';return;} if(local)URL.revokeObjectURL(local);local=URL.createObjectURL(f);embedded=true;$('#manual-file-status').textContent='Local copy open. Page links track the bundled manual edition.';showPDF();};showPDF();
}
globalThis.ManualDesk={rank,pages,render,refs,card,source,quick,shortcuts,chapterTitle};
})();