// To print the name of peoples in list using innerhtml

<html>
<head>
<body>
<div class="people">
<script>
var persons=[{
name:"Ashwin",
Age=20
},
{
name:"Hari",
Age:20
}]
var names='';
for (var i=0;i<=persons.length;i++){
   names+=`<li>`+persons[i].name+`</li>`
   }
 document.getElementByid('people').innerHtml=names;   //Accessing innerhtml property with DOM
</script>
</body>
</html>
