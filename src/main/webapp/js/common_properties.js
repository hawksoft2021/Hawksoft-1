/**
 * 
 */
 var base_path="";
 
 
 
 
  function GetFormattedDate(date) {
  if(date)
  {
  try
  {
	    const d_date = new Date(date);
	    const year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d_date)
	    const month = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(d_date)
	    const day = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d_date)

	    return (year + "-" + month + "-" + day);
	    }
			 catch (err) {
				console.log(date+" :: ERROR :  "+err);
				 return date;
					} 
}
	}
	
	
	  function GetFormattedDateDDMMYY(date) {
  if(date)
  {
	    const d_date =date;
	    const year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d_date)
	    const month = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(d_date)
	    const day = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d_date)
	     return (day + "/" + month + "/" +year );
}
	}
		
	
	  function GetFormattedDate_DDMMYY_to_YYMMDD(date) {
	  if(date)
	  {
var parts =date.split('/');
var str_date=parts[2]+"-"+(parts[1])+"-"+ parts[0];
console.log("str_date   "+str_date)
	    return new Date(str_date);
	    }
	}
	
	
	
	
  
  function isObject(val) {
	    if (val === null) { return false;}
	    return ( (typeof val === 'function') || (typeof val === 'object') );
	}
  function checkTextField(field) {
	    return (field.value === "") ? false : true;
	}