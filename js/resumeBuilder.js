/*
This is empty on purpose! Your code to build the resume will go here.
 */



var education = {
    "schools":[
        {
            "name":"Shanghai Sanda University",
            "location":"Shanghai,China",
            "degree":"Management",
            "major":"Management Information System",
            "dates":"2011-09",
            "url":"http://www.sandau.edu.cn"
        },
        {
           "name":"Centria University of Applied Science",
            "location":"Kokkola,Finland",
            "degree":"Engineering",
            "major":"Information Technology",
            "dates":"2014-01",
            "url":"http://www.centria.fi"
        },
        {
            "name":"Udacity",
            "location":"Online",
            "degree":"Full Stack Web Developer Nanodegree",
            "major":"Full Stack Web Developer",
            "dates":"2016-21",
            "url":"http://www.udacity.com"
        }
    ]
}
education.display = function() {
    for(school in education.schools){
        $("#education").append(HTMLschoolStart);
        
        var formattedschoolName = HTMLschoolName.replace("%data%",education.schools[school].name);
        var formattedschoolDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
        var formattedNameDegree = formattedschoolName+formattedschoolDegree;
        $(".education-entry:last").append(formattedNameDegree);
        
        var formattedschoolDates = HTMLschoolDates.replace("%data%",education.schools[school].dates);
        $(".education-entry:last").append(formattedschoolDates);
        
        var formattedschoolLocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);
        $(".education-entry:last").append(formattedschoolLocation);
        
        var formattedschoolMajor = HTMLschoolMajor.replace("%data%",education.schools[school].major);
        $(".education-entry:last").append(formattedschoolMajor);
    }
}
education.display();

var work = {
    "jobs":[
        {
            "employer":"Shanghai Science&Technology Museum",
            "title":"IT Intern",
            "location":"Shanghai,China",
            "dates":"2015-06-16",
            "description":"description1"
            
        },
        {
            "employer":"Municipality Information Office",
            "title":"Website backend trainee",
            "location":"Shanghai,China",
            "dates":"2013-06-16",
            "description":"description2" 
        }
    ]
}

for(job in work.jobs){
    $("#workExperience").append(HTMLworkStart);
    
    var formattedworkEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
    var formattedworkEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
    var formattedEmployerTitle = formattedworkEmployer+formattedTitle;
    var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
    var formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);
    var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
    
    $(".work-entry:last").append(formattedEmployerTitle);
    $(".work-entry:last").append(formattedDates);
    $(".work-entry:last").append(formattedLocation);
    $(".work-entry:last").append(formattedDescription);
    
}


var projects = {
    "projects":[
        {
            "title":"Responksive Blog",
            "dates":"2016-02",
            "description":"description project 1",
            "images":"www.google.fi"
        },
        { 
            "title":"Tournament Result",
            "dates":"May 2016",
            "description":"description project 2",
            "images":"github.com/gringoirejyc/FullStack/tree/master/vagrant/tournament"   
        },
        {
            "title":"Navigation Drawer",
            "dates":"February 2016",
            "description":"description project 3",
            "images":"github.com/gringoirejyc/Navigation-Drawer-with-Fragment-"
        },
        {
            "title":"RecyclerView with Animation",
            "dates":"March 2016",
            "description":"description project 4",
            "images":"images/screenrecyclerview1.png"
        }
    ]
}
projects.display = function(){
    for (project in projects.projects){
        $("#projects").append(HTMLprojectStart);
    
        var formattedprojectTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
        $(".project-entry:last").append(formattedprojectTitle);
    
        var formattedprojectDates = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
        $(".project-entry:last").append(formattedprojectDates);
    
        var formattedprojectDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
        $(".project-entry:last").append(formattedprojectDescription);
   
        if(projects.projects[project].images.length>0){
        var formattedprojectImage = HTMLprojectImage.replace("%data%",projects.projects[project].images);
        $(".project-entry:last").append(formattedprojectImage);
    }
    }
    
}
projects.display();

var bio = {
    "name":"JI YICHENG",
    "role":"Full Stack Web Developer",
    "welcomeMessage":"Welcome to see my CV, if you are interested in my skills, please refers to other employer",
    "contacts":{
        "Mobile":"+(358)465402679",
        "email":"gringoirejyc@outlook.com",
        "github":"gringoirejyc",
        "blog":"www.ji-yicheng.com",
        "location":"Helsinki,Finland"
    },
    "bioPic":"images/jipic.jpg",
    "skills":["HTML5","CSS3","JavaScript","PHP","MySQL","JAVA","Python","JSON"]
}

bio.display = function () {
    var formattedheaderName = HTMLheaderName.replace("%data%",bio.name);
    $("#header").append(formattedheaderName);
    
    var formattedheadRole =   HTMLheaderRole.replace("%data%",bio.role);
    $("#header").append(formattedheadRole);
    
    var formattedwelcomeMsg =   HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
    $("#header").append(formattedwelcomeMsg);
    
    var formattedbioPic =   HTMLbioPic.replace("%data%",bio.bioPic);
    $("#header").append(formattedbioPic);
    
        
        var formattedmobile = HTMLmobile.replace("%data%",bio.contacts.Mobile);
        $("#topContacts").append(formattedmobile);
        
    var formattedemail = HTMLemail.replace("%data%",bio.contacts.email);
    $("#topContacts").append(formattedemail);
    
    var formattedgithub = HTMLgithub.replace("%data%",bio.contacts.github);
    $("#topContacts").append(formattedgithub);
    
    var formattedblog = HTMLblog.replace("%data%",bio.contacts.blog);
    $("#topContacts").append(formattedblog);
    
    var formattedlocation = HTMLlocation.replace("%data%",bio.contacts.location);
    $("#topContacts").append(formattedlocation);
    
}
bio.display();
if(bio.skills.length>0){
    $("#header").append(HTMLskillsStart);
    
    var formattedSkill = HTMLskills.replace("%data%",bio.skills[0]);
    $("#skills").append(formattedSkill);
    
    var formattedSkill = HTMLskills.replace("%data%",bio.skills[1]);
    $("#skills").append(formattedSkill);
    
    var formattedSkill = HTMLskills.replace("%data%",bio.skills[2]);
    $("#skills").append(formattedSkill);
    
    var formattedSkill = HTMLskills.replace("%data%",bio.skills[3]);
    $("#skills").append(formattedSkill);
    
    var formattedSkill = HTMLskills.replace("%data%",bio.skills[4]);
    $("#skills").append(formattedSkill);
    
    var formattedSkill = HTMLskills.replace("%data%",bio.skills[5]);
    $("#skills").append(formattedSkill);
    
    var formattedSkill = HTMLskills.replace("%data%",bio.skills[6]);
    $("#skills").append(formattedSkill);
    
    var formattedSkill = HTMLskills.replace("%data%",bio.skills[7]);
    $("#skills").append(formattedSkill);
    
}




