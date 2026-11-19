(() => {
  const clean = t => String(t).normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]+/g,' ').trim();
  const ignore = new Set('how do i can you does what is the a an to in on of that it this my use with and please me get work works install change move set make into from its'.split(' '));
  const words = t => [...new Set(clean(t).split(' ').filter(w => w && !ignore.has(w)))];
  const search = (q,items) => {
    const phrase = clean(q), tokens = words(q);
    if (!tokens.length) return [];
    return items.map(l => {
      const fields = [l.title,...l.terms].map(clean), keywords = new Set(fields.flatMap(words));
      const overlap = tokens.filter(t => keywords.has(t)).length;
      const phraseScore = Math.max(0,...fields.map(k => k === phrase ? 13 : k.includes(' ') && ` ${phrase} `.includes(` ${k} `) ? 5+words(k).length*2 : 0));
      return [l,overlap*2.5 + phraseScore + (tokens.every(t=>keywords.has(t))?2:0)];
    }).filter(([,n])=>n>=4).sort((a,b)=>b[1]-a[1]);
  };
  const ask = (q,items,last) => {
    const p = clean(q);
    if (/\b(that|this|it)\b/.test(p) && /\b(effect|plugin|one|it|bypass|where)\b/.test(p) && words(p).every(t=>['bypass','effect','plugin','one','toggle','hear','compare','add','adjust','settings','find','turn','off','where','out','put','switch','remove'].includes(t))) return last && ['insertfx','eq','compressor','reverb','delay'].includes(last.id) ? last : null;
    const ranked=search(q,items);
    if(!ranked.length || (ranked[1] && ranked[0][1]===ranked[1][1] && ranked[0][1]<8)) return null;
    return ranked[0][0];
  };
  const seed = () => Array.from({length:3},(_,r)=>Array.from({length:16},(_,i)=>(r===0?[0,8,10]:r===1?[4,12]:[0,2,4,6,8,10,12,14]).includes(i)));
  globalThis.StudioEngine={clean,search,ask,seed};
})();
