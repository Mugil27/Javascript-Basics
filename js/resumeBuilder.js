/* BIO JSON object --------------*/

var bio = {
    "name": "Anum Sharma",
    "role": "Full Stack Developer",
    "contacts": {
        "email": "anumsharma09@gmail.com",
        "github": "anumsh",
	"twitter":"@sharma_anum",
       "linkedIn":"www.linkedin.com/anumsharma"
    },
    "welcomeMessage": "Welcome to my resume. Below, please find my skills, work history, and education",
    "skills": ["Python", "Linux Configuration", "HTML/CSS", "Bootstrap", "Javacript", "Flask", "PostgreSQL", "Google App Engine"],
    "bioPic": "images/fry.jpg"
}

/* bio  display -------------------------------------*/
var displayBio = function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var formattedLinkedin = HTMLlinkedin.replace("%data%", bio.contacts.linkedIn);
    var formattedBiopic = HTMLbioPic.replace("%data%", bio.bioPic);
    var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    $("#topContacts, #footerContacts").append(formattedEmail);
    $("#topContacts, #footerContacts").append(formattedGithub);
    $("#topContacts, #footerContacts").append(formattedTwitter);
    $("#topContacts, #footerContacts").append(formattedLinkedin);
    $("#header").append(formattedBiopic);
    $("#header").append(formattedWelcome);
    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        for (var i in bio.skills) {
            var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
            $("#header").append(formattedSkills);
        }
    }
}
displayBio();

/* WORK object ---------------*/

/*
array of objects: 
var work = { 
	"jobs": [ {object1/job1}, {object2/job2}, {object3/job3}]
}
*/
var work = {
    "jobs": [{
        "employer": "Tata Consultancy Services",
        "title": "Quality Assurance",
        "location": "Bangalore, India",
        "dates": "May-2015",
        "Description": ["Developed Data Integration Framework which provides "  +
				" integrated platform for application teams (users) to develop " + 
				" their ETL jobs and perform regression testing for APIs.",
				"Developed Automation Suite for all the APIs and reviewed test cases with development team. ",
				" Offered  Migration/Self Service Module which will give set " +
				" up our DI platform/ Environment and migration module for migration the environment and code.",
				"Performed  regression testing for existing/affected APIs. "
        ]
    }]
}

/* displayWork()  function ----------------------*/

function displayWork() {
    for (job in work.jobs) {
        // create new div for work experience
        $("#workExperience").append(HTMLworkStart);
        // concate employer and title
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        $(".work-entry:last").append(formattedLocation);
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);
        if (work.jobs[job].Description.length > 0) {
            for (var i in work.jobs[job].Description) {
                var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].Description[i]);
                $(".work-entry:last").append(formattedDescription);
            }
        }
    }
}

displayWork();

var education = {
    
    "schools" : [
                {
                "name" : "Guru Nanak Dev University",
                "degree" : "Masters of Computer Applications",
                "major" : "Information Technology",
                "location" : "Amritsar,India",
                "gradDate" : "2012",
                },
{
                "name" : "Apeejay College Of Fine Arts",
                "degree" : "Bachelor of Computer Applications",
                "major" : "Information Technology",
                "location" : "Jalandhar,India",
                "gradDate" : "2009",
                } 

                ],
    
    "onlineCourses" : 
                [
                {
                "title" : "Full Stack Web Developer",
                "name" : "Udacity",
                "date" : "2017",
                "url" : "www.udacity.com"
                },
                
                {
                "title" : "Intro To Programming",    
                "name" : "Udacity",
                "date" : "2016",
                "url" : "www.udacity.com"
                }
                ]
};

var displayEducation = function(){
    for (i in education.schools){
        $("#education").append(HTMLschoolStart);    
        
            var formattedSchoolsName = HTMLschoolName.replace("%data%", education.schools[i].name);
            var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
            var formattedDates = HTMLschoolDates.replace("%data%", education.schools[i].gradDate);
            var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
            var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[i].major);
            $(".education-entry:last").append(formattedSchoolsName);
            $(".education-entry:last").append(formattedDates);
            $(".education-entry:last").append(formattedDegree);
            $(".education-entry:last").prepend(formattedLocation);
            $(".education-entry:last").append(formattedMajor);
        }
 $("#education").append(HTMLonlineClasses);
	for (i in education.onlineCourses){ 
       
            $("#education").append(HTMLschoolStart);
            var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
            var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].name);
            var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].date);
            
            $(".education-entry:last").append(formattedOnlineTitle);
            $(".education-entry:last").append(formattedOnlineSchool);
            $(".education-entry:last").append(formattedOnlineDates);
        }
        
}

displayEducation();

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
