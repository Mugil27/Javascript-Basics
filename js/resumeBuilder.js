var formattedName = HTMLheaderName.replace("%data%", "Anum Sharma");
var formattedRole = HTMLheaderRole.replace("%data%", "Full Stack Developer");
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
var bio = {
"name" : "Anum Sharma",
"role" : "Full Stack Engineer",
"contacts" : {
"mobile" : "408-888-8888",
"email" : "anumsharma@gmail.com",
"github" : "anumsh",
"location" : "Santa Clara"
},
"welcomeMessage" : "Welcome to my resume. Below, please find my skills, work history, and education",
"skills" : ["JavaScript", "HTML", "GitHub", "Python", "CSS","Flask","Linux","Google App Engine"],
"bioPic" : "images/fry.jpg"
}
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
var formattedBiopic = HTMLbioPic.replace("%data%",bio.bioPic);
$("#header").append(formattedBiopic);
$("#header").append(formattedMobile);
$("#header").append(formattedEmail);
$("#header").append(formattedGithub);
$("#header").append(formattedLocation);
$("#header").append(formattedWelcome);
if (bio.skills.length > 0) {
$("#header").append(HTMLskillsStart);
var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
$("#skills").append(formattedSkill);
formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
$("#skills").append(formattedSkill);
formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
$("#skills").append(formattedSkill);
formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
$("#skills").append(formattedSkill);
formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);
$("#skills").append(formattedSkill);
formattedSkill = HTMLskills.replace("%data%", bio.skills[5]);
$("#skills").append(formattedSkill);
formattedSkill = HTMLskills.replace("%data%", bio.skills[6]);
$("#skills").append(formattedSkill);
formattedSkill = HTMLskills.replace("%data%", bio.skills[7]);
$("#skills").append(formattedSkill);
}


/*
CONCEPTS LEARNED FROM THIS COURSE

1. append method:
example :  $("#main").append("Anum Sharma");
---------------------------------------------------------------------------------------------------
2. $ is jquery , so I am appending my name in the end of html

 <div id="main">
    <div id="header" class="center-content clear-fix">
      <ul id="topContacts" class="flex-box"></ul>
  </div>
-----------------------------------------------------------------------------------------------------
3. data types and variables:
var name="anum";
var age =20;
--------------------------------------------------------------------------------------------------------
4. console.log = to print or to display the content
example 1: console.log("anum") ;
		  it will display anum in console.
example2:  var name= "anum";
		   console.log(name);
console.log is also used  for debugging purposes.
----------------------------------------------------------------------------------------------------------
5. replace method:
example:   var email= "anum@udacity.com";
		  var new_email= email.replace("udacity", "gmail");
		   console.log(email);
		   console.log(new_email);
--------------------------------------------------------------------------------------------------------------
6. mixing replace() and append()  :
var name= "Anum Sharma"
var role= "Full Stack Engineer"

var formattedName=  HTMLheaderName.replace(%data%,name)
var formattedRole= HTMLheaderRole.replace(%data%,role)

$('#header').prepend(formattedName);
$('#header').append(formattedName);
--------------------------------------------------------------------------------------------------------------------
7. Arrays:

var skills= ["communication","hard working", "confident","learner"]
console.log(skills[0]);  // communication
console.log(skills.length)  // 4
----------------------------------------------------------------------------------------------------------------------
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
----------------------------------------------------------------------------------------------------------------------------
9. 

*/
