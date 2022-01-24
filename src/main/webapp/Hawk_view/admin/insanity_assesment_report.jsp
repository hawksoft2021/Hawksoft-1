<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insanity Assessment Report</title>

 <%@include file="../admin/header.jsp" %>
<body >
	<!-- Site wrapper -->
	<div class="" id="insanity_assesment_report">
 <div class="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 class="h3 mb-0 text-gray-800">Insanity Assessment Report</h1>
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
	
	<!-- modal start -->
  <div class="modal fade" id="enquiry_editModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
  aria-hidden="true">
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header">
       <div class="row"> <h5 class="modal-title" id="exampleModalLabel">Assesment Information</h5></div>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body overflow-auto">
						<div class="box clearfix">
							
      <div class="row">
        <div class="col-md-12">
        
        
              <section class="content">
	                          <div class="card card-primary"> 
							<div class="card-body overflow-auto">
 <div class="row">
             <div class="col-md-4">
              <div class="form-group">
                <label for="client_Name">Client Id   <label>*</label></label>
                <input type="text" name="client_Id" id="client_Id" class="form-control" readonly="readonly">
              </div>
              </div>
              <div class="col-md-4">
              <div class="form-group">
                <label for="client_Name">Client Name   <label>*</label></label>
                <input type="text" name="client_Name" id="client_Name" class="form-control"   readonly="readonly">
              </div>
              </div>
              <div class="col-md-4">
              <div class="form-group">
                <label for="client_Name">Assesment Date<label>*</label></label>
                <input type="text" name="remarks" id="remarks" class="form-control"   readonly="readonly">
              </div>
              </div>
            </div>
    </div>

    </div>
    <form name="assesmentEntry">
							 <input type="hidden" id="client_Id" name="client_Id">
    			    	<div class="card card-primary" >
							<div  id="workout_information" class="card-header" data-card-widget="collapse" data-toggle="tooltip">
								<h3 class="card-title">Assesment</h3>
							</div>
							<div class="card-body overflow-auto">
            <div id="assesment" class="box clearfix">
			 <div  class="row">
             <div class="col-md-3">
              <div class="form-group">
                <label for="client_Name">Assement Type</label>
                       </div>
              </div>
              <div class="col-md-3">
              <div class="form-group">
                <label for="client_Name">Test</label>
                       </div>
              </div>
              <div class="col-md-3">
              <div class="form-group">
                <label for="client_Name">Measurement</label>
                       </div>
              </div>
              <div class="col-md-3">
              <div class="form-group">
                <label for="client_Name">Remarks</label>
                       </div>
              </div>
            </div>
			</div>
        </div>
		</div>
		</form>
		
				</section>	
					  <div class="modal-footer">
       <button type="button" class="btn btn-secondary btn-success" onclick="new_assement_module_entry(); ">Update</button>
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>		<!-- /.card-body -->
						</div>

							<!-- /.card-body -->
						</div>
						

      
      
          <!-- /.card -->
        </div>
      </div>
      
						</div>
      </div>
    </div>

	<!-- modal end -->
	

<!-- modal end -->
	<!-- /.content-wrapper -->
	<jsp:include page="footer.jsp" />

	<script>
	  var dropdown_list={};
 
  $(document).ready( function () {
      $('#bootstrap-table').bdt({
          showSearchForm: 0,
          showEntriesPerPageField: 0
      });
  });
  insanity_assesment_report_onload();
  assement_module_report_list_request();
  
  
  
  
  
  function assement_module_report_list_request()
  {
  var request = new XMLHttpRequest();
  	request.open("POST", base_path+"/Hawk_api_01/assement_module_list/");
  request.send();
  request.onload = function() {
  sessionCheck(this.response);
    var result = JSON.parse(this.response);
	$.each(result.suporting_data, function(index) {
	/////
	//console.log(result.suporting_data[index].test);
	//console.log(result.suporting_data[index].assement_Type);
	/////
	
 		  
var continer="";
continer=continer+"<div class='row'>";
continer=continer+"<div class='col-md-3'>";
continer=continer+"<div class='form-group'>";
continer=continer+"<label class='text-danger' name='assement_Type' for='client_Name'>"+result.suporting_data[index].assement_Type+"</label>";
continer=continer+"<input class='text-primary' type='hidden'  name='assement_Type' id='assement_Type"+index+"' class='form-control' value='"+result.suporting_data[index].assement_Type+"' readonly='readonly'>";
continer=continer+"</div>";
continer=continer+"</div>";
continer=continer+"<div class='col-md-3'>";

 $.each(result.suporting_data[index].test.split(","), function(index,value) {
		continer=continer+"<div class='row'>";
		continer=continer+"<div class='form-group'>";
		continer=continer+"<label  name='test' for='client_Name'>"+value+"</label>"; 
		continer=continer+"<input class='text-primary' type='hidden'  name='test' id='test"+index+"' class='form-control' value='"+value+"' readonly='readonly'>";
		continer=continer+"</div>";
		continer=continer+"</div>";
	}); 

continer=continer+"</div>";
continer=continer+"<div class='col-md-3'>";
$.each(result.suporting_data[index].test.split(","), function(index,value) {
	continer=continer+"<div class='row'>";
	continer=continer+"<div class='form-group'>";
	continer=continer+"<input type='text' name='measurement' id='measurement"+index+"' class='form-control' value='0'>";
	continer=continer+"</div>";
	continer=continer+"</div>";
}); 
continer=continer+"</div>";

continer=continer+"<div class='col-md-3'>";
$.each(result.suporting_data[index].test.split(","), function(index,value) {
	continer=continer+"<div class='row'>";
	continer=continer+"<div class='form-group'>";
	continer=continer+"<input type='text' name='remarks' id='remarks_"+index+"' class='form-control' placeholder='Remarks'>";
	continer=continer+"</div>";
	continer=continer+"</div>";
}); 
continer=continer+"</div>";
////////////
continer=continer+"</div>";

$( "#assesment" ).append(continer); 
});
  }
  }
  

  
  
  
  </script>
</body>
</html>