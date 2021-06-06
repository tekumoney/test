name_of_the_student_array = [];
function submit(){
    var display_student_array = [];
    for (var i = 1; i<=3;i++)
    {
        var name_of_the_student = document.getElementById("name_of_the_student_"+i).Value;
        console.log(name_of_the_student);
        name_of_the_student_array.push(name_of_the_student);

    }
    console.log(name_of_the_student_array);
    var lenght_of_name_of_the_student_array=name_of_the_student.lenght;
console.log(lenght_of_name_of_the_student_array);
for(var a=0; a<lenght_of_name_of_the_student_array; a++)
{
    display_student_array.push("<h4>name-"+name_of_the_student_array[a]+"</h4>")
    console.log(display_student_array);
}
console.log(display_student_array);
document.getElementById("display_name_with_comma").innerHTML = display_student_array;
var remove_comma=display_student_array.join(" ");
console.log(remove_comma);
document.getElementById("display_name_without_comma").innerHTML=remove_comma;
document.getElementById("submit_button").style.display="none";
document.getElementById("sort_button").style.display="inline-block";
}
function sorting()
{
    name_of_the_student_array.sort();
    console.log(name_of_the_student_array);
    var display_student_array_sorting=[];
    var lenght_of_name_of_the_student_array=name_of_the_student_array.lenght;
    console.log(lenght_of_name_of_the_student_array);
    for(var a=0;a<lenght_of_name_of_the_student_array;a++)
    {
     display_student_array_sorting.push("<h4>name-"+name_of_the_student_array[a]+"</h4>");
     console.log(display_student_array_sorting);
    }
        var remove_comma=display_student_array_sorting.join(" ");
        console.log(remove_comma);
        document.getElementById("display-name_without_comma").innerHTML=remove_comma;
}
function new_update()
{
    document.getElementById("display_name_without_comma").innerHTML="<h1>"+name_of_the_student_array+"</h1>";
    
}