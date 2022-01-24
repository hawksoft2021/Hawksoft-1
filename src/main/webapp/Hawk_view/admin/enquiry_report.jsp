<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Enquiry Report</title>
 <%@include file="../admin/header.jsp" %>
<body class="">
	<!-- Site wrapper -->
	<div class="" id="enquiry_report">
 <div class="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 class="h3 mb-0 text-gray-800">Enquiry Report</h1>
            <a href="#"  onclick="exportTableToExcel('bootstrap_table', 'members-data');" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i class="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
          </div>
		<!-- Content Wrapper. Contains page content -->
		<div class="content-wrapper">
			<!-- Content Header (Page header) -->
			<!-- Main content -->
							<div class="table table-responsive ">
				<table class="table" id="bootstrap_table">
				</table>
			</div>
						
		</div>
		<!-- /.content -->
	</div>
	<!-- /.content-wrapper -->
	
	<!-- Modal -->
	<div id="enquiry_edit">
<div class="modal fade" id="enquiry_editModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
  aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
       <div class="row"> <h5 class="modal-title" id="exampleModalLabel">General Information</h5></div>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body overflow-auto">
      
						<div class="box clearfix">
							<form name="enquiry_follow">
							<input id="id" name="id" type="hidden" >
      <div class="row">
        <div class="col-md-12">
          <div class="card card-primary">
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
                <input type="text" name="mobile_No" id="mobile_No" class="form-control">
              </div>
              </div>
               <div class="col-md-6">
              <div class="form-group">
                <label for="inputStatus">Gender <label>*</label></label>
                <select name="gender" id="gender"class="form-control custom-select">
                  <option selected disabled>Select one</option>
                    <option class="option" value="Male">Male</option>
						    <option class="option" value="Female">Female</option>
						    <option class="option" value="Others">Others</option>
                </select>
              </div>
              </div>
                <div class="col-md-6">
                       <div class="form-group">
                <label for="visual_Status">Visual Staus <label>*</label></label>
                <select name="visual_Status" id="visual_Status" class="form-control custom-select">
                  <option selected disabled>Select one</option>
                   			 <option class="option" value="High">High</option>
						    <option class="option" value="Medium">Medium</option>
						    <option class="option" value="Low">Low</option>
                </select>
              </div>
              </div>
                  <div class="col-md-6">
              <div class="form-group">
                <label for="referral">Referral Source</label>
                <select  id="referral_Source"  name="referral_Source" class="form-control custom-select">
                  <option selected disabled>Select one</option>
                    <option class="option" value="Client Reference">Client Reference</option>
						    <option class="option" value="Social media">Social media</option>
						    <option class="option" value="Telephone">Telephone</option>
						    <option class="option" value="Walkin">Walkin</option>
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
                <input class="form-control js-datepicker" type="text" name="follow_Date" id="follow_Date"  > 
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
						</div>
      </div>
      <div class="modal-footer">
       <button type="button" class="btn btn-secondary btn-success" onclick="update_enquiry_follow();">Update</button>
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
</div>
<!-- END MODAL -->	
	<div id="enquiry_entroll">
<div class="modal fade" id="enquiry_entrollModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
  aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
       <div class="row"> <h5 class="modal-title" id="exampleModalLabel">Enrollment Details</h5></div>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body overflow-auto">
      
						<div class="box clearfix">
							    <form name="new_client_form">
      <div class="row">
        <div class="col-md-12">
          <div class="card card-primary">
            <div class="card-header">
              <h3 class="card-title">General Information</h3>
            </div>
            <div class="card-body">
              <div class="form-group">
                <label for="create_Date">Enrollment Date <label>*</label></label>
                
                                    <input class="form-control js-datepicker" id="cus_date" type="text" name="cus_date" readonly="readonly" disabled> 
                                     <input type="checkbox" onclick="cus_date_check(this);"  value="Custom Enrollment Date">
              </div>	
              <div class="form-group">
                <label for="client_Name">Client Name <label>*</label></label>
                <input type="text" name="client_Name" id="client_Name" class="form-control">
              </div>
               <div class="form-group">
                <label for="mobile_No">Mobile No <label>*</label></label>
                <input type="text" name="mobile_No" id="mobile_No " class="form-control">
              </div>
               <div class="form-group">
                <label for="email">Email</label>
                <input type="text" name="email" id="email" class="form-control">
              </div>
                <div class="form-group">
                <label for="email">Facebook Id</label>
                <input type="text" name="facebook_Id" id="facebook_Id" class="form-control">
              </div>
                <div class="form-group">
                <label for="email">Instagram Id</label>
                <input type="text" name="instagram_Id" id="instagram_Id" class="form-control">
              </div>
              <div class="form-group">
                <label for="address">Address <label>*</label></label>
                <textarea name="address" id="address" class="form-control" rows="2"></textarea>
              </div>
              <div class="form-group">
                <label for="gender">Gender <label>*</label></label>
                <select name="gender" id="gender"class="form-control custom-select">
                  <option selected disabled>Select one</option>
                    <option class="option" value="Male">Male</option>
						    <option class="option" value="Female">Female</option>
						    <option class="option" value="Others">Others</option>
                </select>
              </div>
              <div class="form-group">
                <label for="dOB">Date Of Birth <label>*</label></label>
                                    <input class="form-control js-datepicker" type="text" name="dOB" readonly="readonly"> 
              </div>	
                   <div class="form-group">
                <label for="referral">Referral Source</label>
                <select id="referral_Source"  name="referral_Source" class="form-control custom-select">
                  <option selected disabled>Select one</option>
                    <option class="option" value="Client Reference">Client Reference</option>
						    <option class="option" value="Social media">Social media</option>
						    <option class="option" value="Telephone">Telephone</option>
						    <option class="option" value="Walkin">Walkin</option>
                </select>
              </div>
              
                 <div class="form-group">
                <label for="referral">Referral </label>
                <input type="text" name="referral" id="referral" class="form-control">
              </div>
               
                <div class="form-group">
                <label for="package_Duration">Body Type <label>*</label></label>
                <select name="body_Type" id="body_Type" class="form-control custom-select">
                  <option selected disabled>Select one</option>
						    <option value="Ectomorph">Ectomorph</option>
						    <option value="Endomorph">Endomorph </option>
						   <option value="Mesomorph">Mesomorph</option>
						 
                </select>
              </div>
              
            </div>
            <!-- /.card-body -->
          </div>
          <!-- /.card -->
        </div>
        <div class="col-md-12">
          <div class="card card-primary">
            <div class="card-header">
              <h3 class="card-title">Package Information</h3>
            </div>
            <div class="card-body">
            
                   <div class="form-group">
                <label for="caterogy">Category <label>*</label></label>
                <select name="category" id="category"class="form-control custom-select">
                  <option selected disabled>Select one</option>
						    <option value="General">General </option>
						    <option value="Student">Student </option>
						   <option value="Athelete">Athlete  </option>
						    <option value="Personal">Personal Training </option>
						    <option value="Insanity">Insanity </option>
                </select>
              </div>
              
            
             <div class="form-group">
                <label for="package_Duration">Package <label>*</label></label>
                <select name="package_Duration" id="package_Duration" class="form-control custom-select">
                  <option selected disabled>Select one</option>
						    <option value="1 Month">1 Month </option>
						    <option value="3 Months">3 Months </option>
						   <option value="6 Months">6 Months </option>
						    <option value="12 Months">12 Months </option>
                </select>
              </div>
                 <div class="form-group">
                <label for="Extension">Extension</label>
                <input type="text"  name="extension" id="extension" class="form-control" onchange="paid_amount();">
              </div>	
                <div class="form-group">
                <label for="target">Target <label>*</label></label>
                <select name="target" id="target"class="form-control custom-select">
                  <option selected disabled>Select one</option>
						    <option class="option" value="Bodybuilding">Bodybuilding</option>
						    <option class="option" value="Fitness">Fitness</option>
						        <option class="option" value="Weight loss">Weight loss</option>
						    <option class="option" value="Weight gain">Weight gain</option>
						        <option class="option" value="Fitness">Fitness</option>
						    <option class="option" value="reporter">Endurance</option>
						        <option class="option" value="Flexibility">Flexibility</option>
						        	<option value="Tone & Tempo - Body Toning">Tone & Tempo - Body Toning</option>
 	 <option value="Claws  - Body Strengthening">Claws  - Body Strengthening</option>
   <option value="Sweat & Shred - Weight Loss">Sweat & Shred - Weight Loss</option>
    <option value="Sculpting – Inch Loss & Toning">Sculpting – Inch Loss & Toning</option>
     <option value="Bridal Love – Pre-marriage">Bridal Love – Pre-marriage</option>
      <option value="Bodybuilding - Context Prep">Bodybuilding - Context Prep</option>
     <option value="Bridal Love – Pre-marriage">Bridal Love – Pre-marriage</option>
      <option value="Sport Fitness – Athlete">Sport Fitness – Athlete</option>  
                </select>
              </div>
 <div class="col-md-6">
             <div class="form-group">
                <label for="target">Type</label>
                <select name="type" id="type" class="form-control custom-select">
                  <option selected disabled>Select one</option>
						     <option class="option" value="Begineer">Begineer</option>
						  <option class="option" value="Intermediate">Intermediate</option>
						  <option class="option" value="Advanced">Advanced</option>	
                </select>
                
              </div>
              </div>
               <div class="form-group">
                <label for="client_Review">Client review</label>
                <textarea name="client_Review" id="client_Review" class="form-control" rows="2"></textarea>
              </div>
               <div class="form-group">
                <label for="weight">Weight</label>
                <input type="text" name="weight" id="weight" class="form-control">
                </div>
              <div class="form-group">
                <label for="PARQ">PARQ</label>
                <textarea name="pARQ" id="pARQ" class="form-control" rows="2"></textarea>
              </div>
              <div class="form-group">
                <label for="remarks">Remarks</label>
                <textarea name="remarks" id="remarks" class="form-control" rows="2"></textarea>
              </div>
            </div>
            <!-- /.card-body -->
          </div>
          <!-- /.card -->
        </div>
        
         <div class="col-md-12">
          <div class="card card-secondary">
            <div class="card-header">
              <h3 class="card-title">Payment Details <label>*</label></h3>
            </div>
            <div class="card-body">
                <div class="row">
                
            <div class="col-md-6">
             <div class="form-group">
                <label for="payment_Type">Payment Type</label>
                <select name="payment_Type" id="payment_Type" class="form-control custom-select">
                  <option selected disabled>Select one</option>
						   <option value="Cash">Cash </option>
						    <option value="Gpay">Gpay </option>
						     <option value="Epay">Epay </option>
						   <option value="others">others </option>
                </select>
              </div>
              </div>
              <div class="col-md-6">
                 <div class="form-group">
                <label for="traiff_Amount">Traiff Amount</label>
                <input type="text"  name="traiff_Amount" id="traiff_Amount" class="form-control" onchange="paid_amount();">
              </div>	
              </div>

          
               <div class="col-md-6">
                 <div class="form-group">
                <label for="traiff_Amount">Discount</label>
                <input type="text"  name="discount" id="discount" class="form-control" value="0" onchange="paid_amount();">
              </div>	
           </div> 
            <div class="col-md-6">
                 <div class="form-group">
                <label for="paid_Amount">Amount Paid</label>
                <input type="text"  name="paid_Amount" id="paid_Amount" class="form-control" value="0" onchange="paid_amount();">
              </div>
              </div>
                <div class="col-md-6">
                 <div class="form-group">
                <label for="due_Amount">Due Amount</label>
                   <input type="text"  name="due_Amount" id="due_Amount" class="form-control" value="0" disabled="disabled">
                        
              </div>
               </div> 
            <div class="col-md-6">
                 <div class="form-group">
                <label for="due_date">Due date</label>
          <input class="form-control js-datepicker" type="text" name="due_Date" readonly="readonly">
           
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
						</div>
      </div>
      <div class="modal-footer">
       <button type="button" class="btn btn-secondary btn-success" onclick="if(validateForm()){new_client();}">Submit</button>
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
	</div>
	<!-- END MODAL -->	
	<jsp:include page="footer.jsp" />

	<script>
  enquiry_report_onload();
  
  function validateForm() {
	  if (document.forms["new_client_form"]["client_Name"].value == "") {
	    alert("Name must be filled out");
	    return false;
	  }
	  else if (document.forms["new_client_form"]["mobile_No"].value == "") {
	    alert("Mobile No must be filled out");
	    return false;
	  }
	  else if (document.forms["new_client_form"]["address"].value == "") {
		    alert("Address must be filled out");
		    return false;
		  }
		  
	  else if (document.forms["new_client_form"]["dOB"].value == "") {
		    alert("DOB must be filled out");
		    return false;
		  }
	  else if (document.forms["new_client_form"]["gender"].value == "") {
		    alert("Gender must be filled out");
		    return false;
		  }
	  
	  else if (document.forms["new_client_form"]["body_Type"].value == "") {
		    alert("Body Type must be filled out");
		    return false;
		  }
	  
		  
	  else if (document.forms["new_client_form"]["category"].value == "") {
		    alert("Category must be filled out");
		    return false;
		  }
	  
	  
	  else if (document.forms["new_client_form"]["package_Duration"].value == "") {
		    alert("Package Duration must be filled out");
		    return false;
		  }
		  
	  else if (document.forms["new_client_form"]["target"].value == "") {
		    alert("Target must be filled out");
		    return false;
		  }
		  
	  else if (document.forms["new_client_form"]["type"].value == "") {
		    alert("Type must be filled out");
		    return false;
		  }
	  else if (document.forms["new_client_form"]["payment_Type"].value == "") {
		    alert("Payment Type must be filled out");
		    return false;
		  }
	  else if (document.forms["new_client_form"]["traiff_Amount"].value == "") {
		    alert("Traiff Amount must be filled out");
		    return false;
		  }
	  else if (document.forms["new_client_form"]["discount"].value == "") {
		    alert("Discount must be filled out");
		    return false;
		  }
	  else if (document.forms["new_client_form"]["paid_Amount"].value == "") {
		    alert("Paid Amount must be filled out");
		    return false;
		  }
	  
	  else if (document.forms["new_client_form"]["due_Amount"].value == "") {
		    alert("Due  Amount No must be filled out");
		    return false;
		  }
	  
	  else if (document.forms["new_client_form"]["due_Amount"].value != 0) {
		   if (document.forms["new_client_form"]["due_Date"].value == "") {
			    alert("Due  Date No must be filled out");
			    return false;
			  }
		   else
				  return true;
		  }
	  else
		  return true;
	} 
  
  </script>


</body>
</html>