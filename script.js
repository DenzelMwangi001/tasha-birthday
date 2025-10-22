// script.js
(function(){
  const audio = document.getElementById('bg-audio');
  const overlay = document.getElementById('play-overlay');
  const playBtns = document.querySelectorAll('[id^=play-btn]');
  const yearEls = [document.getElementById('year'), document.getElementById('year2'), document.getElementById('year3'), document.getElementById('year4')];
  yearEls.forEach(el=>{ if(el) el.textContent = new Date().getFullYear(); });

  // Attempt to autoplay. Most browsers block autoplay with sound.
  function tryPlay(){
    if(!audio) return;
    const p = audio.play();
    if(p !== undefined){
      p.then(()=>{
        // autoplay succeeded
        hideOverlay();
      }).catch(()=>{
        // autoplay blocked -> show overlay play button
        showOverlay();
      });
    } else {
      // older browsers: assume success
      hideOverlay();
    }
  }

  function showOverlay(){ if(overlay) overlay.classList.remove('hidden'); }
  function hideOverlay(){ if(overlay) overlay.classList.add('hidden'); }

  // Attach play buttons
  playBtns.forEach(b=>{
    b.addEventListener('click', ()=>{
      audio.play().then(()=> hideOverlay()).catch(()=> hideOverlay());
    });
  });

  // If user interacts anywhere, try to play again
  document.addEventListener('click', function once(){ tryPlay(); document.removeEventListener('click', once); });

  // Start the attempt after DOM ready
  document.addEventListener('DOMContentLoaded', tryPlay);

})();
