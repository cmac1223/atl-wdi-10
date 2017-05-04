window.onload = function() {
  //0. get access to button 1
  var button = document.getElementById('buttonOne');

  // 1.user will click on button 1
button.addEventListener("click", function(){
    //2. once this happens, show an alert that says "you have
    //clicked button one"
    alert('You have clicked button 1');
});

//For button two
//1 get access to button 2
//user will click on button 2
//3. once this happens
  //create a paragarph
  //
var button = document.getElementById('buttonTwo');
buttonTwo.addEventListener("click", function(){
  var par1 = document.createElement('p');
  //add a text node to that paragraph
  par1.innerHTML = 'A click event is essentially tying a function (as a callback) to an element and specifying what action needs to happen to trigger or call/invoke that function (callback).';
  // append that paragraph to the div with id of information
  document.getElementById('information').appendChild(par1);

});
//For button three
//1. get access to button 3
var buttonThree = document.getElementById('buttonThree');
// 2. user will click on button 3
buttonThree.addEventListener('click', function(){
// 3. once this happens
  //access paragaph via its tag name
  var par2 = document.getElementsByTagName('p')[0];
  // remove paragraph from the div with  the id of information
  document.getElementById('information').removeChild(par2);
});
}
