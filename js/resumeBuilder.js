var name= "Anum Sharma"
var role= "Full Stack Engineer"

var formattedName=  HTMLheaderName.replace(%data%,name)
var formattedRole= HTMLheaderRole.replace(%data%,role)

$('#header').prepend(formattedName);
$('#header').append(formattedName);



/*

1. append method:
example :  $("#main").append("Anum Sharma");

2. $ is jquery , so I am appending my name in the end of html

 <div id="main">
    <div id="header" class="center-content clear-fix">
      <ul id="topContacts" class="flex-box"></ul>
  </div>
3. data types and variables:
var name="anum";
var age =20;

4. console.log = to print or to display the content
example 1: console.log("anum") ;
		  it will display anum in console.
example2:  var name= "anum";
		   console.log(name);
console.log is also used  for debugging purposes.
5. replace method:
example:   var email= "anum@udacity.com";
		  var new_email= email.replace("udacity", "gmail");
		   console.log(email);
		   console.log(new_email);

6. mixing replace() and append()  :
var name= "Anum Sharma"
var role= "Full Stack Engineer"

var formattedName=  HTMLheaderName.replace(%data%,name)
var formattedRole= HTMLheaderRole.replace(%data%,role)

$('#header').prepend(formattedName);
$('#header').append(formattedName);

7. Arrays:

var skills= ["communication","hard working", "confident","learner"]
console.log(skills[0]);  // communication
console.log(skills.length)  // 4

8. objects:

var udacity={
		"address":"Mountain View",
		"isGood":"Yes",
		"NumberOfCourses": 200
		}

where : 
udacity is the object 
address, isGood, NumberOfCourses are the properties
Mountain View, Yes and 200 are the values.

Accessing the udacity object values:

$('#main').append(udacity.address);

9. 

*/
