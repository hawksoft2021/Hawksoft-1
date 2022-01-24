<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Client Report</title>

 <%@include file="../admin/header.jsp" %>
<body class="">
	<!-- Site wrapper -->
	<div class="" id="client_report">
 <div class="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 class="h3 mb-0 text-gray-800">Client Report</h1>
            <a href="#"  onclick="exportTableToExcel('bootstrap_table', 'members-data');" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i class="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
          </div>
		<!-- Content Wrapper. Contains page content -->
		<div class="content-wrapper">
			<!-- Content Header (Page header) -->
			<!-- Main content -->
							<div class="table table-responsive ">
							
							
							
						
<button onclick="saveFile()">Save XLSX file</button>
							
     						 <table class="table" id="bootstrap_table">
							</table>
							</div>
						
		</div>
		<!-- /.content -->
	</div>
	<!-- /.content-wrapper -->
	
	<!-- Modal -->
<div class="modal fade " id="client_report_editModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
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
							<form name="client_form">
							 <input type="hidden" id="client_Id" name="client_Id">
      <div class="row">
        <div class="col-md-12">
        
                  <div class="card card-primary">
            
            <div class="card-header"  data-card-widget="collapse" data-toggle="tooltip" title="Collapse">
              <h3 class="card-title">General Information</h3>

              <div class="card-tools">
                <button type="button" class="btn btn-tool" data-card-widget="collapse" data-toggle="tooltip" title="Collapse">
                 <i class="fa fa-plus"></i></button>
              </div>
            </div>
               <div class="card-body" style="display: none;">

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
                <input type="text" name="mobile_No" id="mobile_No" class="form-control">
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
                                    <input class="form-control js-datepicker" type="text" name="dOB" id="dob" readonly="readonly"> 
              </div>	
                   <div class="form-group">
                <label for="referral">Referral Source</label>
                <select  id="referral_Source"  name="referral_Source" class="form-control custom-select">
                  <option selected disabled>Select one</option>
                    <option class="option" value="Client Reference">Client Reference</option>
						    <option class="option" value="Social media">Social media</option>
						    <option class="option" value="Telephone">Telephone</option>
						    <option class="option" value="Telephone">Walkin</option>
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
        
                 <div class="card card-primary">
            <div class="card-header" data-card-widget="collapse" data-toggle="tooltip" title="Collapse">
              <h3 class="card-title">Package Infomation</h3>

             <div class="card-tools">
                <button type="button" class="btn btn-tool" data-card-widget="collapse" data-toggle="tooltip" title="Collapse">
                 <i class="fa fa-plus"></i></button>
              </div>
            </div>
               <div class="card-body" style="display: none;">
                <div class="row">
              <div class="col-md-6">
                   <div class="form-group">
                <label for="caterogy">Category <label>*</label></label>
                <select name="payment_History.category" id="category"class="form-control custom-select">
                  <option selected disabled>Select one</option>
						    <option value="General">General </option>
						    <option value="Student">Student </option>
						   <option value="Athelete">Athlete  </option>
						    <option value="Personal">Personal Training </option>
						    <option value="Insanity">Insanity </option>
                </select>
              </div>
            </div>
             <div class="col-md-6">
             <div class="form-group">
              <label for="package_Duration">Package <label>*</label></label>
                <select name="payment_History.package_Duration" id="package_Duration" class="form-control custom-select">
                  <option selected disabled>Select one</option>
						    <option value="1 Month">1 Month </option>
						    <option value="3 Months">3 Months </option>
						   <option value="6 Months">6 Months </option>
						    <option value="12 Months">12 Months </option>
                </select>
                </div>
				</div>          
            <div class="col-md-6">
                 <div class="form-group">
                <label for="Extension">Extension</label>
                <input type="text"  name="payment_History.extension" id="extension" class="form-control" onchange="paid_amount();">
              </div>	
              </div>
            <div class="col-md-6">
             <div class="form-group">
                <label for="target">Target</label>
                <select name="payment_History.target" id="target" class="form-control custom-select">
                  <option selected disabled>Select one</option>
						   <option class="option" value="Bodybuilding">Bodybuilding</option>
						    <option class="option" value="Fitness">Fitness</option>
						        <option class="option" value="Weight loss">Weight loss</option>
						    <option class="option" value="Weight gain">Weight gain</option>
						        <option class="option" value="Fitness">Fitness</option>
						    <option class="option" value="reporter">Endurance</option>
						        <option class="option" value="Flexibility">Flexibility</option>

                </select>
                
              </div>
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
              
              
              
               <div class="col-md-6">
               <div class="form-group">
                <label for="medications">Weight</label>
                <input type="text" name="weight" id="weight" class="form-control">
              </div>
              </div>
               <div class="col-md-6">
              <div class="form-group">
                <label for="PARQ">PARQ</label>
                <textarea name="pARQ" id="pARQ" class="form-control" rows="2"></textarea>
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
                  <div class="card card-primary">
            <div class="card-header" data-card-widget="collapse" data-toggle="tooltip" title="Collapse">
              <h3 class="card-title">Payment Details</h3>
           <div class="card-tools">
                <button type="button" class="btn btn-tool" data-card-widget="collapse" data-toggle="tooltip" title="Collapse">
                 <i class="fa fa-plus"></i></button>
              </div>
            </div> 
            <div class="card-body  overflow-auto"  style="display: none;">
            <div class="card-body">
                <div class="row">
                
            <div class="col-md-6">
             <div class="form-group">
                <label for="payment_Type">Payment Type</label>
                <select name="payment_Type" id="payment_Type" class="form-control custom-select">
                  <option  value="" selected disabled>Select one</option>
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
          <input class="form-control js-datepicker" type="text" name="due_Date" id="due_Date" readonly="readonly">
           
              </div>
                </div>
                </div>
            </div>
            <!-- /.card-body -->
          </div>
        
        <div class="card card-primary">
            <div class="card-header" data-card-widget="collapse" data-toggle="tooltip" title="Collapse">
              <h3 class="card-title">Status</h3>

             <div class="card-tools">
                <button type="button" class="btn btn-tool" data-card-widget="collapse" data-toggle="tooltip" title="Collapse">
                 <i class="fa fa-plus"></i></button>
              </div>
            </div>
  			 <div class="card-body  overflow-auto"  style="display: none;">

								<div class="row" id="client_quick_view__continer" class="panel-body">

			<div class='col-md-4'><div class='form-group'>
			<label for='Warm_ups'>Warm ups</label>
			<select name='client_Quick_View.warm_ups' id='warm_ups' class='form-control custom-select'>
			<option selected disabled>Select one</option></select>
</div>
</div>

	<div class='col-md-4'><div class='form-group'>
			<label for='client_Name'>Workout Chart</label>
			<select name='client_Quick_View.workout_Chart' id='workout_Chart' class='form-control custom-select'>
			<option selected disabled>Select one</option></select>
</div>
</div>
	<div class='col-md-4'><div class='form-group'>
			<label for='client_Name'>Stretching</label>
			<select name='client_Quick_View.stretching' id='stretching' class='form-control custom-select'>
			<option selected disabled>Select one</option></select>
</div>
</div>
<div class='col-md-4'><div class='form-group'>
			<label for='client_Name'>End Date</label>
		<input type='text'  id='end_Date' class='form-control' readonly>
</div>
</div>

<div class='col-md-4'><div class='form-group'>
			<label for='client_Name'>Duration</label>
		<input type='text' name='duration' id='duration' class='form-control' readonly>
</div>
</div>
		
		<div class='col-md-4'><div class='form-group'>
<label for='client_Name'>Status</label>
			<select name='client_Quick_View.client_Status' id='client_Status' class='form-control custom-select'>
			<option selected disabled>Select one</option>
			 <option class='option' value='Active'>Active</option>
			 <option class='option' value='Inactive'>Inactive</option>
			  <option class='option' value='Idle'>Idle</option>
			</select></div></div>
					</div>				
<!--   <div class="row"> -->
      <!--   <div class="col-12">
          <a href="#" class="btn btn-secondary">Cancel</a>
            <a href="#" onclick="quick_view_update_fn('quick_view_update/');" class="btn btn-secondary btn btn-success float-right">Submit</a>
        </div> -->

      </div>
      </div>
        
        <!-- <div class="card card-primary">
            <div class="card-header" data-card-widget="collapse" data-toggle="tooltip" title="Collapse">
              <h3 class="card-title">Workout Information</h3>

             <div class="card-tools">
                <button type="button" class="btn btn-tool" data-card-widget="collapse" data-toggle="tooltip" title="Collapse">
                 <i class="fa fa-plus"></i></button>
              </div>
            </div>
  	<div class="card-body overflow-auto " style="display: none;">

							  <div class="row">
            <div class="box clearfix">
             <p class="lead"> <button  onclick="csv('bootstrap_table_workout','Workout_Report')" class="btn btn-info">TO CSV</button> </p>
                     <table class="table table-hover" id="bootstrap_table_workout">
                <thead>
                <tr>
                  <th> Client Module</th>
                    <th>Day</th>
                   <th>Work Group</th>
					<th>Workout</th>
					<th>Reps/Time</th>
					<th>Action</th>
                </tr>
                </thead>
                <tbody id="tbl_posts_body">
                
    
                </tbody>
            </table>
        </div>
        </div>
		</div>
							
							
							
							
							/.card-body
						</div> -->
					
     
          <!-- /.card -->
        </div>
      </div>
      </form>
						</div>
      </div>
      <div class="modal-footer">
       <button type="button" class="btn btn-secondary btn-success" onclick="update_client_details();">Update</button>
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
<!-- SHOW PAYMENT -->

<div class="modal fade " id="client_report_showModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
  aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
       <div class="row"> <h5 class="modal-title" id="exampleModalLabel">Payment Information</h5></div>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body overflow-auto">
						<div class="box clearfix">
							<div class="table table-responsive ">
							
							
     						 <table class="table" id="bootstrap_table">
								<thead>
									<tr>
										<th scope="col">Id</th>
										<th scope="col">Date</th>
										<th scope="col">Client Id</th>
										<th scope="col">Name</th>
										<th scope="col">Mobile No</th>
										<th scope="col">Category</th>
										<th scope="col">Package</th>
										<th scope="col">Target</th>
										<th scope="col">Package Amount</th>
										<th scope="col">Due Amount</th>
										<th scope="col">Status</th>
										<th scope="col">Renewal Date</th>
										<th scope="col">FeedBack</th>
										<th scope="col">Google Review</th>
										<th scope="col">Action</th>
									</tr>
								</thead>
								<tbody id="enquiry_list">
								</tbody>
							</table>
							</div>
						
						</div>
      </div>

    </div>
  </div>
</div>






<!-- modal end -->
	<jsp:include page="footer.jsp" />
	<script>
	client_report_onload();
  $("#client_report").appendTo($("#parent_continer"));
  
  
  
  
  
  window.saveFile = function saveFile () {
	  var data1 = [{a:1,b:10},{a:2,b:20}];
	      var data2 = [{a:100,b:10},{a:200,b:20}];
	    //  console.log("resultdata  : "+ resultData));      
	      
	      var opts = [{sheetid:'One',header:true},{sheetid:'Two',header:false}];
	      var res = alasql('SELECT * INTO XLSX("restest344b.xlsx",?) FROM ?',
	                       [opts,[client_data_dump]]);
	  }
  
  
  
  
  
  
  
  
  
  </script>
  	<script src="https://cdn.jsdelivr.net/alasql/0.3/alasql.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.7.12/xlsx.core.min.js"></script>
  <!--   calender update -->
        <!--   calender update -->
            <script type="text/javascript" src="<c:url value="/calender_js/select2.min.js"/>"></script>
         <script type="text/javascript" src="<c:url value="/calender_js/moment.min.js"/>"></script>
            <script type="text/javascript" src="<c:url value="/calender_js/daterangepicker.js"/>"></script>
            <script type="text/javascript" src="<c:url value="/calender_js/global.js"/>"></script>
         <!--   calender update -->
  
</body>
</html>