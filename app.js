let title = document.title;
if (title == "courses"){ // courses page
document.getElementById("workshop-btn").id = "active-sidebar"
document.getElementById("active-sidebar").children[0].src="./Assets/img/lecture-green@2x.png"
}
else if(title=="CSS skillz"){ // home/index page
document.getElementById("dashboard-btn").id = "active-sidebar"
document.getElementById("active-sidebar").children[0].src="./Assets/img/lecture-green@2x.png"
}
else if(title=="Profile"){ // profile page
document.getElementById("profile-btn").id = "active-sidebar"
document.getElementById("active-sidebar").children[0].src="./Assets/img/lecture-green@2x.png"
}
else if(title=="messages"){ // home page
document.getElementById("msg-btn").id = "active-sidebar"
document.getElementById("active-sidebar").children[0].src="./Assets/img/lecture-green@2x.png"
}