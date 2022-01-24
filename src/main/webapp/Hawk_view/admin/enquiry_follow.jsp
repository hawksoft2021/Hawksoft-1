<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
 <title>Enquiry Follow</title>
 <%@include file="../admin/header.jsp" %>

<body class="hold-transition sidebar-mini">
<!-- Site wrapper -->
<div class="wrapper">

  <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper" id="enquiry_follow">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>Enquiry Follow</h1>
          </div>
        </div>
      </div><!-- /.container-fluid -->
    </section>

    <!-- Main content -->
    <section class="content">
    <form name="new_client_form" id="new_client_form">
      <div class="row">
        <div class="col-md-12">
          <div class="card card-primary">
            <div class="card-header">
              <h3 class="card-title">General Information</h3>
            </div>
            <div class="card-body">
            <div class="row">
             <div class="col-md-6">
              <div class="form-group">
                <label for="client_Name">Client Name   <label>*</label></label>
                <input type="text" name="client_Name" id="client_Name" class="form-control">
              </div>
              </div>
               <div class="col-md-6">
               <div class="form-group">
                <label for="mobile_No">Mobile No <label>*</label></label>
                <input type="text" name="mobile_No" id="mobile_No " class="form-control">
              </div>
              </div>
               <div class="col-md-6">
              <div class="form-group">
                <label for="inputStatus">Gender <label>*</label></label>
                <select name="gender" id="gender"class="form-control custom-select">
                  <option  value="" selected disabled>Select one</option>
                    <option class="option" value="Male">Male</option>
						    <option class="option" value="Female">Female</option>
						    <option class="option" value="Others">Others</option>
                </select>
              </div>
              </div>
                <div class="col-md-6">
                       <div class="form-group">
                <label for="visual_Status">Visual Staus </label>
                <select name="visual_Status" id="visual_Status" class="form-control custom-select">
                  <option  value="" selected disabled>Select one</option>
                   			 <option class="option" value="High">High</option>
						    <option class="option" value="Medium">Medium</option>
						    <option class="option" value="Low">Low</option>
                </select>
              </div>
              </div>
                  <div class="col-md-6">
              <div class="form-group">
                <label for="referral">Referral Source</label>
                <select id="referral_Source"  name="referral_Source" class="form-control custom-select">
                  <option  value="" selected disabled>Select one</option>
                    <option class="option" value="Client Reference">Client Reference</option>
						    <option class="option" value="Social media">Social media</option>
						    <option class="option" value="Telephone">Telephone</option>
						    <option class="option" value="Telephone">Walkin</option>
                </select>
              </div>
              </div>
                  <div class="col-md-6">
                 <div class="form-group">
                <label for="referral">Referral </label>
                <input type="text" name="referral" id="referral" class="form-control">
              </div>
              </div>
               <div class="col-md-6">
               <div class="form-group">
                <label for="follow_Date">Follow date</label>
                <input class="form-control js-datepicker" type="text" name="follow_Date" id="follow_Date" readonly> 
              </div>
              </div>
             
               <div class="col-md-6">
                 <div class="form-group">
                <label for="remarks">Remarks</label>
                <textarea name="remarks" id="remarks" class="form-control" rows="2"></textarea>
              </div>
              </div>
                  </div>
                  
            </div>
            <!-- /.card-body -->
          </div>
          <!-- /.card -->
        </div>
      </div>
      </form>
      <div class="row">
        <div class="col-12">
          <a href="#" class="btn btn-secondary">Cancel</a>
          <input type="submit" value="Submit" onclick="if(validateForm()){new_enquiry_follow();}" class="btn btn-success float-right">
        </div>
      </div>
    </section>
    <!-- /.content -->
  </div>
  <!-- /.content-wrapper -->

  </div>
  <jsp:include page="footer.jsp" />
  <script>
  
  // give $().bootstrapDP the bootstrap-datepicker functionality
  $("#enquiry_follow").appendTo($("#parent_continer"));
  function validateForm() {
	  if (document.forms["new_client_form"]["client_Name"].value == "") {
	    alert("Name must be filled out");
	    return false;
	  }
	  else if (document.forms["new_client_form"]["mobile_No"].value == "") {
	    alert("Mobile No must be filled out");
	    return false;
	  }
	  else if (document.forms["new_client_form"]["visual_Status"].value == "") {
		    alert("visual_Status must be filled out");
		    return false;
		  }
		  
	  else if (document.forms["new_client_form"]["gender"].value == "") {
		    alert("Gender must be filled out");
		    return false;
		  }
	  
	  else if (document.forms["new_client_form"]["referral_Source"].value == "") {
		    alert("Referral Source must be filled out");
		    return false;
		  }
	  
		  
	  else if (document.forms["new_client_form"]["follow_Date"].value == "") {
		    alert("Follow Date must be filled out");
		    return false;
		  }	 
	  else if (document.forms["new_client_form"]["remarks"].value == "") {
			    alert("Remarks Date must be filled out");
			    return false;
			  }
	  
	  
	  else
		  return true;
	} 
  </script>
  </body>
  </html>