<script>
  git = document.querySelector('[data-panel="Custom1"]');
  function changeLink() {
    var link = document.getElementById('source-link');
    var href = link.getAttribute('href');

    var path = window.location.pathname;
    var html = path.split('/');
    html = html[html.length - 1];
    var qmd = html.replace('html', 'qmd');
    link.setAttribute('href', href.concat('/' + qmd));

    var issueLink = document.getElementById('issue-link');
    issueLink.setAttribute('href', issueLink.getAttribute('href').concat('?title=').concat(html));
  }
  git.addEventListener("click", changeLink);
</script>
