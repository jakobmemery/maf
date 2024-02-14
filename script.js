// This would be the content of script.js
function redirectToTarget() {
  var currentDomain = window.location.hostname;
  window.location.href = 'https://example.com/?subid_1=' + encodeURIComponent(currentDomain);
}

document.querySelectorAll('.redirect-btn').forEach(button => {
  button.addEventListener('click', redirectToTarget);
});
