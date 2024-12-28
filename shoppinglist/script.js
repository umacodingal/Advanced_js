myform = document.getElementById("mylist")
myinput = document.getElementById("inputitem")
myitem = document.getElementById("myitem")
myform.addEventListener("submit", function (evt) {
    evt.preventDefault();
    createitem(myinput.value)
})
function createitem(inputitem) {
    var items = `<li>${inputitem}
  <button onclick="deleteelement(this)">Delete</button></li>`
    myitem.insertAdjacentHTML("beforeend", items)
    myinput.focus()
    myinput.value = ""
}
function deleteelement(deleteelement) {
    deleteelement.parentElement.remove()
}