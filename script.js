// QF AI Hub concept: small behaviours only.

// 1. Logo fallback: if assets/qf-logo.png is missing, show a dashed placeholder instead of a broken image.
document.querySelectorAll('.logo').forEach(function (img) {
  var fallback = img.parentElement.querySelector('.logo-fallback');
  function useFallback() {
    img.hidden = true;
    if (fallback) fallback.hidden = false;
  }
  img.addEventListener('error', useFallback);
  if (img.complete && img.naturalWidth === 0) useFallback();
});

// 2. Copy the contact address. Falls back to selecting the text when the clipboard is blocked.
var copyBtn = document.getElementById('copy');
if (copyBtn) {
  copyBtn.addEventListener('click', function () {
    var el = document.getElementById('addr');
    var original = copyBtn.textContent;

    function done() {
      copyBtn.textContent = 'Copied';
      setTimeout(function () { copyBtn.textContent = original; }, 1800);
    }
    function select() {
      var range = document.createRange();
      range.selectNodeContents(el);
      var sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(range);
      copyBtn.textContent = 'Selected, press copy';
    }

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(el.textContent).then(done, select);
    } else {
      select();
    }
  });
}
