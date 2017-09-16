var button1 = document.getElementById('chris');
var button2 = document.getElementById('charles');
var button3 = document.getElementById('taylor');
var button4 = document.getElementById('sam');

button1.onclick = loadChris;
button2.onclick = loadCharles;
button3.onclick = loadTaylor;
button4.onclick = loadSam;

function loadChris()
{
  document.getElementById("content").innerHTML = '<object type="text/html" data="chris.html" width=100% height=100%></object>';
}

function loadCharles()
{
  document.getElementById("content").innerHTML = '<object type="text/html" data="charles.html" width=100% height=100%></object>';
}

function loadTaylor()
{
  document.getElementById("content").innerHTML = '<object type="text/html" data="taylor.html" width=100% height=100%></object>';
}

function loadSam()
{
  document.getElementById("content").innerHTML = '<object type="text/html" data="sam.html" width=100% height=100%></object>';
}
