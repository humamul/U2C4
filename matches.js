// write js code here corresponding to matches.html
var data = JSON.parse(localStorage.getItem("schedule")) ;
display(data)
function display(data){
  document.querySelector("tbody").innerHTML = "";
data.forEach(function(elem){
  var row = document.createElement('tr')
  var first = document.createElement('td')
  first.innerText = elem.num
  
  var second = document.createElement('td')
  second.innerText = elem.ta
  var third = document.createElement('td')
  third.innerText = elem.tb
  var fourth = document.createElement('td')
  fourth.innerText = elem.date
  var fifth = document.createElement('td')
  fifth.innerText = elem.venue

  var sixth = document.createElement('td')
  sixth.innerText = "Add as Favourites";
  sixth.style.color = "green";
  sixth.style.cursor = 'pointer'
  sixth.addEventListener('click',function(){
    myFuntion(elem)
  })

  row.append(first,second,third,fourth,fifth,sixth)
  document.querySelector('tbody').append(row)
 
})
}
var favArr = JSON.parse(localStorage.getItem('favourites')) || [];
function myFuntion(elem){

  var obj = {
      num: elem.num,
      ta: elem.ta,
      tb: elem.tb,
      date:elem.date,
      venue:elem.venue
  }
 favArr.push(obj)

 localStorage.setItem("favourites",JSON.stringify(favArr))
}

function filtered(){
  var x = document.querySelector("#filterVenue").value
  
  var list = data.filter(function(elem){
    return elem.venue == x;
  })
 
 display(list)
 if(x=="none") window.location.reload();
}