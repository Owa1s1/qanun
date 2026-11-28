// Header account icon (28 Nov 2026): after signing in on My account, shows the person's photo or first letter.
// account.html saves {i: initial, p: photo address} in this browser; nothing else is stored.
(function () {
  function paint(a) {
    var v = null; try { v = JSON.parse(localStorage.getItem('qanun_acct') || 'null'); } catch (e) {}
    if (!a.getAttribute('data-svg')) a.setAttribute('data-svg', a.innerHTML);
    if (!v) { a.innerHTML = a.getAttribute('data-svg'); a.classList.remove('me'); return; }
    a.classList.add('me');
    if (v.p) { var i = new Image(); i.alt = ''; i.referrerPolicy = 'no-referrer'; i.onerror = function () { a.textContent = v.i || '?'; }; i.src = v.p; a.replaceChildren(i); }
    else a.textContent = v.i || '?';
  }
  window.qanunAcctIcon = paint;
  var a = document.querySelector('header .acct'); if (a) paint(a);
})();
