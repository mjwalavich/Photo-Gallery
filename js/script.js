$('#search').keyup(function(){

    let userSearch = $('#search').val();
    userSearch = userSearch.toLowerCase();

    let match = document.querySelectorAll('a[data-title]');

    for (i = 0; i < match.length; i++) {

    if (match[i].getAttribute('data-title').toLowerCase().includes(userSearch)) {
    match[i].style.display='inline';
    } else {
    match[i].style.display='none';
    }
  }
});
