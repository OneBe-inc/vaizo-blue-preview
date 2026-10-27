(() => {
  const root = document.documentElement;
  const opening = document.querySelector('.opening');
  const word = document.querySelector('.opening-word');
  const skip = document.querySelector('.opening-skip');
  const motion = matchMedia('(prefers-reduced-motion: reduce)');
  if (!opening || !root.classList.contains('is-opening')) return;

  let finished = false;
  let timer;
  let endTimer;
  const background = [...document.body.children].filter(el => el !== opening && el.tagName !== 'SCRIPT');
  function finish() {
    if (finished) return;
    finished = true;
    clearTimeout(timer);
    clearTimeout(endTimer);
    root.classList.remove('is-opening');
    opening.setAttribute('aria-hidden', 'true');
    background.forEach(el => { el.inert = false; });
    if (opening.contains(document.activeElement)) document.querySelector('.brand').focus({preventScroll:true});
    document.removeEventListener('keydown', onKey);
    document.removeEventListener('visibilitychange', onVisibility);
    window.removeEventListener('pagehide', finish);
    motion.removeEventListener('change', finish);
    skip.removeEventListener('click', finish);
  }
  function onKey(event) { if (event.key === 'Escape') finish(); }
  function onVisibility() { if (document.hidden) finish(); }
  if (motion.matches || document.hidden) { finish(); return; }
  background.forEach(el => { el.inert = true; });
  opening.setAttribute('aria-hidden', 'false');
  skip.addEventListener('click', finish);
  document.addEventListener('keydown', onKey);
  document.addEventListener('visibilitychange', onVisibility);
  window.addEventListener('pagehide', finish);
  motion.addEventListener('change', finish);
  endTimer = setTimeout(finish, 2850);

  // Two-character subsets: 24 different faces, self-hosted to keep loading light.
  const weights = [400, 900, 900, 400, 700, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 600, 400, 400, 400, 800, 800, 400, 400];
  const ready = [];
  weights.forEach((weight, index) => {
    document.fonts.load(`${weight} 100px Suki${index}`, 'スキ').then(faces => {
      if (!finished && faces.length) ready.push(index);
    }).catch(() => {});
  });
  let previous = -1;
  let bag = [];
  let count = 0;
  function changeFont() {
    if (finished) return;
    if (!bag.length) {
      bag = ready.filter(index => index !== previous);
      for (let i = bag.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [bag[i], bag[j]] = [bag[j], bag[i]];
      }
    }
    if (bag.length) {
      previous = bag.pop();
      word.style.fontFamily = `Suki${previous}, sans-serif`;
      word.style.fontWeight = weights[previous];
      word.dataset.face = String(previous);
    }
    count++;
    // Hold the final face briefly before revealing the page.
    if (count < 20) timer = setTimeout(changeFont, count > 15 ? 150 : 115);
  }
  timer = setTimeout(changeFont, 90);
})();
