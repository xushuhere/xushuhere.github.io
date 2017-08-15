var bio = {
	"name" : "Shu XU",
	"role" : " Actively seeking a job as Software Developer",
	"welcomeMessage" : "With training in Computational Chemistry, I am graduating with my master in CS from Georgia Institute of Technology December 2017.</br> Looking forward to a career with lots of coding.",
	"image" : "images/headXu.jpg",
	"contacts" : [{
		"mobile" : "567-868-3827",
		"location" : "Nashville",
		"email" : "xushuhere@gmail.com",
		"github": "github.com/xushus"
	}],
	"skills" : ["Java","C++","Python","R", "Github", "JavaScript"]
};

var work = {
	"jobs" : [
	{
		"employer" : "Vanderbilt Univeristy",
		"title" : "Research Instructor",
		"dates" : "2015 - present",
		"location" : "Nashville",
		"description" : "Crystal Structure refinement and modeling using machine learning."
	},
	{
		"employer" : "Vanderbilt Univeristy",
		"title" : "Research Fellow",
		"dates" : "2012 - 2014",
		"location" : "Nashville",
		"description" : "Studied inhibitor to protein-inhibitor interaction by crystallography and computational modeling."
	}]
};

var projects = {
	"project" : [{
		"title" : "Database Management: Handyman Tool System",
		"dates" : "2016",
		"description" : "Designed and implemented a database system for handyman tool management using MySQL, HTML, Javascript and PHP;</br> API helps managers and customers to add and edit orders and reservations; </br> Users login with usernames and passwords, add, search, and check in-and-out tools;</br> Administrators add tools, edit descriptions and track payments",
		"images" : ["images/1.jpg"]
	},
	{
		"title" : "Android Apps: Tip Calculator and Grocery List App",
		"dates" : "2017",
		"description" : "Designed, built and tested android mobile applications using Android Studio, Java and Junit tests;</br> Tip Calculator app is for the tip calculation with split properties;</br> Grocery List Management app helps customers add grocery shopping list with check-on and check-off, as well as mange the items in the database;</br> Skills: SQLite, Java, android studio, software documentation, Junit tests",
"images" : ["images/1.jpg","images/2.jpg","images/3.jpg","images/4.jpg"]
	},
	{
		"title" : "Health Informatics Age and Diagnosis Mining Project",
		"dates" : "2017",
		"description" : "Built android app to search diseases with observed symptoms;</br>Mapped the age-diagnosis relationship from eMERGE (health record database); Collaborated with Dept. of Medical Informatics at Vanderbilt;</br> Applied different algorithms in machine learning for predication;</br> Used solr and PostgreSQL for text analysis;</br> Skills: PostgreSQL, Java, android development, machine learning, API development",
	"images" : ["images/1.jpg","images/2.jpg","images/3.jpg","images/4.jpg"]
	}
]
};

var education = {
	"schools" : [
	{
		"name" : "Georgia Institute of Technology",
		"location" : "Atlanta, GA",
		"degree" : "M.S.",
		"majors" : "Computer Science",
		"dates" : "2016 - 2017",
		"url" : "www.gatech.edu"
	},
	{
		"name" : "Univeristy of Toledo",
		"location" : "Toledo, OH",
		"degree" : "Ph.D.",
		"majors" : "Computational Chemistry",
		"dates" : "2007 - 2012",
		"url" : "www.utoledo.edu"
	},
	{
		"name" : "Nanjing Univeristy",
		"location" : "Nanjing, China",
		"degree" : "B.S.",
		"majors" : "Biotechnology",
		"dates" : "2000 - 2004",
		"url" : "www.nju.edu.cn"
	},
]
};


bio.display = function() {
	var formattedName = HTMLheaderName.replace("%data%",bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
	var formattedImage = HTMLbioPic.replace("%data%",bio.image);
	var formattedMessage = HTMLWelcomeMsg.replace("%data%",bio.welcomeMessage);

	$("#header").prepend(formattedRole).prepend(formattedName).append(formattedImage,formattedMessage);
	$("#header").append(HTMLskillsStart);

	for(skill in bio.skills) {
		var formattedSkills = HTMLskills.replace("%data%",bio.skills[skill]);
		$("#skills").append(formattedSkills);
	};

	for(contact in bio.contacts) {
		var formattedMobile = HTMLmobile.replace("%data%",bio.contacts[contact].mobile);
		var formattedEmail = HTMLemail.replace("%data%",bio.contacts[contact].email);
		var formattedGithub = HTMLcontactGeneric.replace("%contact%","github").replace("%data%",bio.contacts[contact].github);
		$("#footerContacts").append(formattedMobile,formattedEmail,formattedGithub);
	};
};

education.display = function() {
	for(school in education.schools) {
		$("#education").append(HTMLschoolStart);

		var formattedName = HTMLschoolName.replace("%data%",education.schools[school].name);
		var formattedDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
		var formattedDates = HTMLschoolDates.replace("%data%",education.schools[school].dates);
		var formattedLocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);
		var formattedMajor = HTMLschoolMajor.replace("%data%",education.schools[school].majors);
		//if(education.schools[school].majors):
		$(".education-entry:last").append(formattedName + formattedDegree,formattedDates,formattedLocation,formattedMajor);
	}
};

work.display = function() {
	for(job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
		var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
		var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);

		$(".work-entry:last").append(formattedEmployer + formattedTitle,formattedDates,formattedDescription);
	}
};

projects.display = function(){
	for(item in projects.project){
		$("#projects").append(HTMLprojectStart);
		var formattedTitle = HTMLprojectTitle.replace("%data%",item.title);
		var formattedDates = HTMLprojectDates.replace("%data%",projects.project[item].dates);
		var formattedDescription = HTMLprojectDescription.replace("%data%",projects.project[item].description);

		$(".project-entry:last").append(formattedTitle,formattedDates,formattedDescription);
		for (image in projects.project[item].images) {
			var formattedImage = HTMLprojectImage.replace("%data%",projects.project[item].images[image]);
			$(".project-entry:last").append(formattedImage);
		};



	}
};

function inName(name){
	console.log(name);
	var newName = name;
	newName = newName[0].toUpperCase() + newName.slice(1,newName.indexOf(" ") + 1).toLowerCase() + newName.slice(newName.indexOf(" ") + 1).toUpperCase();

	return newName;
};


work.display();
projects.display();
education.display();
bio.display();

$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);
