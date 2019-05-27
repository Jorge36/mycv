document.querySelector('.mybutton').addEventListener('click', function () {
    var result = Module.ccall('hello', 'number', null, null);
    document.getElementById("panel").style.fontStyle = "italic";
    document.getElementById("panel").innerHTML = "The result is " + result + ". Check console to see Hello Jhon!";
});
  
