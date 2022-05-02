// write js code here corresponding to index.html
// You should add submit event on the form
document.querySelector("form").addEventListener("submit",myFun)
var indexArr =  JSON.parse(localStorage.getItem("schedule")) || [];
function myFun(){
    event.preventDefault();

    var obj = {
        num: masaiForm.matchNum.value,
        ta: masaiForm.teamA.value,
        tb: masaiForm.teamB.value,
        date: masaiForm.date.value,
        venue: masaiForm.venue.value
    }
   indexArr.push(obj)
   localStorage.setItem("schedule",JSON.stringify(indexArr))
}