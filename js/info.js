/* Info page JS: load markdown using marked + DOMPurify and theme handling */
async function loadInfo(){
  try{
    const def = await fetch('info/defcon.md').then(r=>r.text());
    document.getElementById('defcon_pre').innerHTML = DOMPurify.sanitize(marked.parse(def));
  }catch(e){ const el=document.getElementById('defcon_pre'); if(el) el.innerText = 'Erreur de chargement.'; }
  try{
    const cat = await fetch('info/categories.md').then(r=>r.text());
    document.getElementById('categories_pre').innerHTML = DOMPurify.sanitize(marked.parse(cat));
  }catch(e){ const el=document.getElementById('categories_pre'); if(el) el.innerText = 'Erreur de chargement.'; }
  try{
    const notes = await fetch('info/notes.md').then(r=>r.text());
    document.getElementById('notes_pre').innerHTML = DOMPurify.sanitize(marked.parse(notes));
  }catch(e){ const el=document.getElementById('notes_pre'); if(el) el.innerText='(vide)'; }
}


document.addEventListener('DOMContentLoaded', ()=>{
  try{ document.documentElement.style.scrollBehavior = 'smooth'; }catch(e){}
  loadInfo();
  // Theme handled by js/theme.js (shared module)
});
