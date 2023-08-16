const url = window.location.search;

const urlvalues = new URLSearchParams(url);
document.getElementById('search_result').value=urlvalues.get('product');
