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
});
$("#add-class-cancel-button").click(function(){
	closeClassPopUp();
});
$("#add-class-submit-button").click(function(){
	closeClassPopUp();
	c436.fadeIn();
});

manuallyInputLink.click(function(){
	acForm.fadeIn();	
});
getInfoBtn.click(function(){
	alert("syurl val = " + syURL.val());
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


		acForm.fadeIn();

});

// For Testing	
// acForm.fadeIn();	