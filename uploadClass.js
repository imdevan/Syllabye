// 436 course page: http://www.csdl.tamu.edu/~shipman/courses/cpsc436/home.html
var classBeingUploaded;
var cni = $("#class-name-input"),
	cwp = $("#class-web-page-input"),
	pni = $("#prof-name-input"),
	pei = $("#prof-email-input"),
	poli = $("#prof-off-loc-input"),
	pohi = $("#prof-off-hrs-input"),
	tani = $("#ta-name-input"),
	taei = $("#ta-email-input"),
	taoli = $("#ta-off-loc-input"),
	taohi = $("#ta-off-hrs-input"),
	gdi = $("#grade-distro-input"),
	syli = $("#syllabus-link-input");

function clearClassInfo(){
	cni.val("");
	cwp.val("");
	pni.val("");
	pei.val("");
	poli.val("");
	pohi.val("");
	tani.val("");
	taei.val("");
	taoli.val("");
	taohi.val("");
	gdi.val("");
	syli.val("");
}
function insertClassInfo(className, classWebPage, profName, profEmail, profOffLoc, profOffHours, taName, taEmail, taOffLoc, taOffHours, gradeDist, syLink){

	cni.val(className);
	cwp.val(classWebPage);
	pni.val(profName);
	pei.val(profEmail);
	poli.val(profOffLoc);
	pohi.val(profOffHours);
	tani.val(taName);
	taei.val(taEmail);
	taoli.val(taOffLoc);
	taohi.val(taOffHours);
	gdi.val(gradeDist);
	syli.val(syLink);
}