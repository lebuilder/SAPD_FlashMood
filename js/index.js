/* shim loader: keep path js/index.js working by loading js/MED.js */
(function(){
    try{
        var s = document.createElement('script');
        s.src = 'js/MED.js';
        s.defer = true;
        document.head.appendChild(s);
    }catch(e){ console.error('Failed to load js/MED.js', e); }
})();
