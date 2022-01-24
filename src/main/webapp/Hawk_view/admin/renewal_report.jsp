<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Renewal Report</title>

 <%@include file="../admin/header.jsp" %>
<body class="">
	<!-- Site wrapper -->
	<div class="" id="renewal_report">
 <div class="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 class="h3 mb-0 text-gray-800">Renewal Report</h1>
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
							<form name="client_Renewal">
      <div class="row">
        <div class="col-md-12">
          <div class="card card-primary">
            <div class="card-body">
            <div class="row">
            
            <div class="col-md-6">
             <div class="form-group">
                <label for="create_Date">Renewal Date <label>*</label></label>
                
                                    <input class="form-control js-datepicker" id="cus_date" type="text" name="cus_date" readonly="readonly" disabled> 
                                     <input type="checkbox" onclick="cus_date_check(this);"  value="Custom Enrollment Date">
              </div>	
             </div>	
            
            
             <div class="col-md-6">
              <div class="form-group">
                <label for="client_Name">Client Id   <label>*</label></label>
                <input type="text" name="client_Id" id="client_Id" class="form-control" readonly="readonly">
              </div>
              </div>
              <div class="col-md-6">
              <div class="form-group">
                <label for="client_Name">Client Name   <label>*</label></label>
                <input type="text" name="client_Name" id="client_Name" class="form-control" readonly="readonly">
              </div>
              </div>
               <div class="col-md-6">
               <div class="form-group">
                <label for="mobile_No">Mobile No <label>*</label></label>
                <input type="text" name="mobile_No" id="mobile_No" class="form-control" readonly="readonly">
              </div>
              </div>
              <div class="col-md-6">
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
              
            </div>
            <div class="col-md-6">
             <div class="form-group">
                <label for="package">Package <label>*</label></label>
                <select name="package_Duration" id="package_Duration" class="form-control custom-select">
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
                <input type="text"  name="extension" id="extension" class="form-control">
              </div>	
              </div>
            <div class="col-md-6">
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
              </div>
              
               
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
          <input class="form-control js-datepicker" type="text" name="due_Date" id="due_Date" readonly="readonly">
           
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
       <button type="button" class="btn btn-secondary btn-success" onclick="update_Renewal_report();">Renewal</button>
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
<!-- modal end -->
	<jsp:include page="footer.jsp" />
	<script>
  renewal_report_onload();
  $("#renewal_report").appendTo($("#parent_continer"));
  </script>
</body>
</html>