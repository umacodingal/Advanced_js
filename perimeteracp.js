var choice = prompt("Welcome to perimeter Calculator.\nPlease enter your choice:\n1.Perimeter of Circle\n2.Perimeter of rectangle\n3.Perimeter of triangle\n4.Perimeter of square.")
if (choice == "1") {
    var r = prompt("Enter the radius-")
    var result = 3.14 * Number(r) * 2
    alert("Perimeter of circle is " + result)
}
if (choice == "2") {
    var length = prompt("Enter the length-")
    var breadth = prompt("Enter the breadth-")
    var result = 2 * (Number(length) + Number(breadth))
    alert("Perimeter of rectangle is " + result)
}
if (choice == "3") {
    var side1 = prompt("Enter the 1st side of the triangle-")
    var side2 = prompt("Enter the 2nd side of the triangle-")
    var side3 = prompt("Enter the 3rd side of the triangle-")
    var result = Number(side1) + Number(side2) + Number(side3)
    alert("Perimeter of triangle is " + result)
}
if (choice == "4") {
    var side = prompt("Enter the side of the square-")
    var result = Number(side) * 4
    alert("Perimeter of square is " + result)
}