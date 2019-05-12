function contactformValidation()  
{  
	var fname = document.contact_form.fname.value;    
	var email1 = document.contact_form.email1.value;
	var subject = document.contact_form.subject.value;  
	var message = document.contact_form.message.value; 
	
	if (fname_valid (fname))
	{
		if (email1_valid (email1))
		{
			if (subject_valid (subject))
			{
					if (message_valid (message))
					{
						
					}
				
			}
		}
	}


function fname_valid (fname)
{
	if (fname == "")
	{
		document.contact_form.fname.focus();
		alert('Please enter your full name.');
		return false;
	}
	else
	{
		return true;
	}
}
	
function email1_valid (email1)
{
	if (email1 == "")
	{
		document.contact_form.email1.focus();
			alert('Please enter your email.');
			return false;
	}
	
	else
	{
		return true;
	}
}

function subject_valid (subject)
{
	if (subject == "")
	{
		document.contact_form.subject.focus();
		alert('Please enter your IC subject.');
		return false;
	}

	else
	{
		return true;
	}
}
	
function message_valid (message)
{
	if (message == "")
	{
		document.contact_form.message.focus();
		alert('Please enter your message.');
		return false;
	}
	
	else
	{
	    alert('You have successfully send your message!');
		return true;
	}
}

}
	
	
