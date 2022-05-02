// write js code here corresponding to favourites.html  
var data = JSON.parse(localStorage.getItem("favourites")) ;

data.forEach(function(elem,i){
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
    sixth.innerText = "Delete";
    sixth.style.color = "red";
    sixth.style.cursor = 'pointer'
    sixth.addEventListener('click',function(){
      mysun(elem,i)
    })
  
    row.append(first,second,third,fourth,fifth,sixth)
    document.querySelector('tbody').append(row)
   
  })
  function mysun(elem,i){
    data.splice(i,1);
    localStorage.setItem("favourites",JSON.stringify(data))
    window.location.reload()
  }