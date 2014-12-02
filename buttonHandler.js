// This is the buttonhandler it handles the reaction of each of the uttons on the page. 
var foregroundBg = $("#fore-ground-background"),
	upcomingPu = $("#upcoming-assignments-pop-up"),
	addClassPu = $("#add-class-pop-up"),
	getInfoBtn = $("#get-info-button"),
	manuallyInputLink = $("#manual-input-link"),
	acForm = $("#add-class-form"),
	c436 = $("#class-c436"),
	syURL = $("#syllabus-url-input");


// Resource Buttons .. Possibly not implemented
$("#re-open-all-button").click(function(){
    window.open("http://elearning.tamu.edu/",'')
    window.open("http://ecampus.tamu.edu/",'')
    window.open("https://piazza.com",'')
});

// Assignment Buttons .. View All will be implemented, not update
// View all open button
$("#view-all-open-button").click(function(){
	foregroundBg.fadeIn();
	upcomingPu.fadeIn();

	// To Align exit button with container
	// position of exit button = top right corner of upcoming pop up
	// topRight = upcomingPu.
});

// view all close button
$("#view-all-exit-button").click(function(){
	foregroundBg.fadeOut();
	upcomingPu.fadeOut();

});

// Class doc Buttons .. Add Class will be implemented, not update
// View all open button
$("#add-class-button").click(function(){
	foregroundBg.fadeIn();
	addClassPu.fadeIn();
});

// add class close button
function closeClassPopUp(){
	foregroundBg.fadeOut();
	addClassPu.fadeOut();
}

$("#add-class-exit-button").click(function(){
	closeClassPopUp();
	clearClassInfo();
});
$("#add-class-cancel-button").click(function(){
	closeClassPopUp();
	clearClassInfo();
});
$("#add-class-submit-button").click(function(){
	closeClassPopUp();
	clearClassInfo();
	c436.fadeIn();
});

manuallyInputLink.click(function(){
	clearClassInfo();
	acForm.fadeIn();	
});
getInfoBtn.click(function(){
	clearClassInfo();
	if(syURL.val() == "http://www.csdl.tamu.edu/~shipman/courses/cpsc436/home.html"){
			insertClassInfo("CPSC 436: Computer-Human Interaction",
							"http://www.csdl.tamu.edu/~shipman/courses/cpsc436/home.html",
							"Dr. Frank Shipman", 
							"shipman@cse.tamu.edu", 
							"HRBB 404",
							"TBA, or by appointment",
							"Gabriel Dzodom",
							"",	
							"",
							"",
							"Exams 40%  Team project            25% Short assignments  25% Class participation     10%",
		  ""
		   );
		}
		else if(syURL.val() == "https://parasol.tamu.edu/~welch/teaching/411.f14/"){
			insertClassInfo("CSCE 411-500: Design and Analysis of Algorithms",
							"https://parasol.tamu.edu/~welch/teaching/411.f14/",
							"Dr. Jennifer Welch", 
							"welch@cs.tamu.edu", 
							"HRBB 425G",
							"T 2-3:30pm, R 2:00-3:30 (oba)",
							"Yin Qu",
							"quyin@cs.tamu.edu",	
							"Teague 225C (knock on door)",
							"T 10-11:30am, R 10am-noon",
							"Weekly Quizzes 10%; Homeworks 30%; Culture Reports 10%; Exams 15%; Final 20%",
		  ""
		   );
		}


		acForm.fadeIn();

});

// For Testing	
// acForm.fadeIn();	