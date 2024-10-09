
var nav = document.getElementById('navbar');
var display = 0;

function hideBar()
{
  if(display == 1) {
    nav.style.display = 'block';
    display = 0;
  }
  else {
    nav.style.display = 'none';
    display = 1;
  }
}