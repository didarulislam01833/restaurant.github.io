/* ========= Contact validation ===========   */
function validation(){
				var first = document.getElementById('firstName').value; 
				var last = document.getElementById('lastName').value; 
				var emails = document.getElementById('email').value;
				var mblNumber = document.getElementById('phoneNumber').value;
				var address = document.getElementById('address').value;
				var country = document.getElementById('country').value;
				var district = document.getElementById('district').value;
				
				/* ========= First Name validation ===========   */
				if (first == ""){
					document.getElementById('firstN').innerHTML="**Plaese fill the first name field";
					return false;
				}
				
				if((first.length <= 2) || (first.length > 10)){
					document.getElementById('firstN').innerHTML="**This must be 2 to 10 character";
					return false;
				}
				
				if(!isNaN(first)){
					document.getElementById('firstN').innerHTML="**Only character are allowed to Enter";
					return false;
				}
				
				/* ========= Last Name validation ===========   */
				if (last == ""){
					document.getElementById('lastN').innerHTML = "**plaese fill the last name field";
					return false;
				}
				
				if((last.length <= 2) || (last.length > 10)){
					document.getElementById('lastN').innerHTML="**This must be 2 to 10 character";
					return false;
				}
				
				if(!isNaN(last)){
					document.getElementById('lastN').innerHTML="**Only character are allowed to Enter";
					return false;
				}
				/* ========= Email validation ===========   */
				if(emails == ""){
					document.getElementById('invalidEmail').innerHTML="**please fill the email field";
					return false;
				}
				
				if(emails.indexOf('@') <= 0 ){
					document.getElementById('invalidEmail').innerHTML="please insert @ in the field";
					return false;
				}
				
				if((emails.charAt(emails.length-4) != '.') && (emails.charAt(emails.length-3) != '.')){
					document.getElementById('invalidEmail').innerHTML="please insert . in the field";
					return false;
				}
				
				
				
				/* ========= Mobile Number validation ===========   */
				if(mblNumber == ""){
					document.getElementById('phoneN').innerHTML="**please fill the number field";
					return false;
				}
				if(isNaN(mblNumber)){
					document.getElementById('phoneN').innerHTML="**please insert only digits";
					return false;
				}
				
				if(mblNumber.length != 11){
					document.getElementById('phoneN').innerHTML="**please enter a valid numbers";
					return false;
				}
				
				
				/* ========= Address validation ===========   */
				if(address == ""){
					document.getElementById('eaddress').innerHTML="**please fill the address field";
					return false;
				}
				
				if((address.length <= 8) || (address.length > 30)){
					document.getElementById('eaddress').innerHTML="**This must be 8 to 30 character";
					return false;
				}
				
				/* ========= Country validation ===========   */
				if(country == ""){
					document.getElementById('ccountry').innerHTML="**please fill the country field";
					return false;
				}
				
				if((country.length <= 4) || (country.length > 10)){
					document.getElementById('ccountry').innerHTML="****This must be 4 to 10 character";
					return false;
				}
				
				if(!isNaN(country)){
					document.getElementById('ccountry').innerHTML="** please enter a valid country name";
					return false;
				}
				
				/* ========= District Validation ===========   */
				
				if(district == "selected"){
					document.getElementById('edistrict').innerHTML="**please choose  the district field";
					return false;
				}
				
						
			}
			