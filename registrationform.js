//Login
function validateForm() 
{
	var un = document.login.matric.value;
	var pw = document.login.password.value;
	var unArray = ["1425392", "1512240", "1219629", "1416510"];
	var pwArray = ["aniss", "shahida", "razaq", "nusaibah"];
	var valid = false;
	
	for (var i=0; i <unArray.length; i++)
	{
		if ((un == unArray[i]) && (pw == pwArray[i]))
		{
			valid = true;
			break;
		}
	}
	
	if (valid) 
	{
		alert ("Login was successful");
		window.location = "pageuser.html";
		return false;
	}
	else
	{
		alert ("You're not authorized. You might enter wrong login information. Please try again");
	}
}

//Registration

function formValidation()  
{  
	var fullname = document.registration.fullname.value;  
	var matric = document.registration.matric.value;  
	var no_ic = document.registration.no_ic.value;  
	var pass = document.registration.pass.value;  
	var phone_num = document.registration.phone_num.value;  
	var email = document.registration.email.value;
//	var email = /^[A-Za-z0-9._]*\@[A-Za-z]*\.[A-Za-z]{2,5}$/;  
	
	if (fullname_valid (fullname))
	{
		if (matric_valid (matric))
		{
			if (no_ic_valid (no_ic))
			{
				if (pass_valid (pass))
				{
					if (phone_num_valid (phone_num))
					{
						if (email_valid (email))
						{
							
						}
					}
				}
			}
		}
	}
}

function fullname_valid (fullname)
{
	if (fullname == "")
	{
		document.registration.fullname.focus();
		alert('Please enter your full name.');
		return false;
	}
	else
	{
		return true;
	}
}
	
function matric_valid (matric)
{
	if (matric == "")
	{
		document.registration.matric.focus();
			alert('Please enter your matric number.');
			return false;
	}
	else if(matric.length<6)
	{  
		alert("Matric number must be at least 7 characters long.");  
		return false;  
	} 
	else
	{
		return true;
	}
}

function no_ic_valid (no_ic)
{
	if (no_ic == "")
	{
		document.registration.no_ic.focus();
		alert('Please enter your IC number.');
		return false;
	}
	else if(no_ic.length<6)
	{  
		alert("IC Number must be at least 12 characters long.");  
		return false;  
	} 
	else
	{
		return true;
	}
}
	
function pass_valid (pass)
{
	if (pass == "")
	{
		document.registration.pass.focus();
		alert('Please enter your password.');
		return false;
	}
	else if(pass.length<6)
	{  
		alert("Password must be at least 6 characters long.");  
		return false;  
	} 
	else
	{
		return true;
	}
}	
	
function phone_num_valid (phone_num)
{
	if (phone_num == "")
	{
		document.registration.phone_num.focus();
		alert('Please enter your phone number.');
		return false;
	}
	else if(phone_num.length<10)
	{  
		alert("Phone number must be at least 10 characters long.");  
		return false;  
	} 
	else
	{
		return true;
	}
}
	
function email_valid (email)
{
	if (email == "")
	{
		document.registration.email.focus();
		alert('Please enter your email.');
		return false;
	}
	else
	{
		alert('You have successfully sign up!');
		return true;
	}
}	

/*
if(document.registration.gender[0].checked == false && document.registration.gender[1].checked == false)
{
	alert('Please select your gender.');
	return false;

	if (fullname != '' && matric != '' && no_ic != '' && pass != '' && phone_num != '' && email != '')
	{
		alert('You have successfully sign up!');
	}
*/