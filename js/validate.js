$(document).ready(function() {	
	
	$("#emptyCode").hide();
	$("#wrongCode").hide();
	
	var blankInput = false;
	var correctCaptcha = true;
	var validInput  = true;
	
	
	$("#btnUpload").click(function() {
		blankInput = checkBlankInput();
		
		if (blankInput == false && correctCaptcha == true && validInput == true) {
			//submit form
		}
		return false;
	})
})

function checkBlankInput() {
	var isBlank = false;
	
	var txtFname = $("#txtFname");
	var txtLname = $("#txtLname");
	var txtAdd1  = $("#txtAddressLine1");
	var txtCity  = $("#txtCity");
	var ddState  = $("#ddState");
	var txtZip   = $("#txtPostalCode");
	var txtPhone = $("#txtPhone");
	var txtEmail = $("#txtEmail");
	
	if (txtFname.val() == "") {
		txtFname.addClass("has-error");
		isBlank = true;
	} else {
		txtFname.addClass("has-success");
	} 
	
	if (txtLname.val() == "") {
		txtLname.addClass("has-error");
		isBlank = true;
	} else {
		txtLname.addClass("has-success");
	} 
	
	if (txtAdd1.val() == ""
			|| ddState.selectedIndex == 0
			|| txtZip.val() == "") {
		txtAdd1.addClass("has-error");
		txtCity.addClass("has-error");
		ddState.addClass("has-error");
		txtZip.addClass("has-error");
		isBlank = true;
	} else {
		txtAdd1.addClass("has-success");
		txtCity.addClass("has-success");
		ddState.addClass("has-success");
		txtZip.addClass("has-success");
	}   
	
	if (txtPhone.val() == "" 
			&& txtEmail.val() == "") {
		txtPhone.addClass("has-error");
		txtEmail.addClass("has-error");
		isBlank = true;
	} else if (txtPhone.val() == "" ){
		txtEmail.addClass("has-success");
	}  
	return isBlank;
}

function checkPhone() {
	
}
