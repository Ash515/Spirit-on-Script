//Filter is useful to filter  certain values by making conditions in an array or object

var array_object = [{
Name:"Ashwin",
Dept:"IT"},{
Name:"Hari",
Dept:"IT"},
Name:"Mythili",
Dept:"CSE"}]

var new_array=array_object.filter(Department=>Department.Dept==="IT");
console.log("There are" +new_array.length+ " present in the given" +array_obj.length+ "students");


