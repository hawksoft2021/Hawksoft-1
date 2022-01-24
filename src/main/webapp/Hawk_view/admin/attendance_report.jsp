<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
 <title>Attendance Report</title>
 <%@include file="../admin/header.jsp" %>
    
<body class="skin-blue sidebar-mini sidebar-collapse">
<!-- Site wrapper -->

<div class="wrapper" id="attendance_report">

  <!-- Content Wrapper. Contains page content -->
 
  <div class="">
  <br>
  <!-- Nav pills -->
  <ul class="nav nav-pills" role="tablist">
    <li class="nav-item">
      <a class="nav-link active" data-toggle="pill" href="#todaylist">Today List</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" data-toggle="pill" href="#leavelist">Leave List</a>
    </li>
  </ul>

  <!-- Tab panes -->
  <div class="tab-content">
    <div id="todaylist" class="container tab-pane active"><br>
     <div class="content-wrapper">
    <!-- Content Header (Page header) -->
                                    <input class="form-control js-datepicker" type="text" name="att_date" id="att_date" readonly="readonly"> 
              

<button onclick="client_attendance_report_onload();">Filter</button>
 <div class="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 class="h3 mb-0 text-gray-800">Client Details</h1>
            <a href="#"  onclick="exportTableToExcel('bootstrap_table', 'members-data');" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i class="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
          </div>
    <!-- Main content -->
    <section class="content">
	                          <div class="card card-primary"> 
							<div class="card-body overflow-auto">
			            <div class="box clearfix">
               <table class="table table-hover overflow-auto" id="bootstrap_table">
            </table>
        </div>
    </div>

    </div><div class="card card-primary" >
							<div class="card-header"  data-toggle="tooltip">
								<h3 class="card-title">Attendance Calendar </h3>
							</div>

							<div class="card-body overflow-auto">
				<div  class="panel-body">
									<div id='attendance_calendar'></div>
								</div>
							</div>
							<!-- /.card-body -->
						</div>
					
				
    </section>
</div>
</div>
    <div id="leavelist" class="container tab-pane fade"><br>
        <div class="content-wrapper">
    <!-- Content Header (Page header) -->
 <div class="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 class="h3 mb-0 text-gray-800">Client Details</h1>
            <a href="#"  onclick="exportTableToExcel('bootstrap_table', 'members-data');" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i class="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
          </div>
    <!-- Main content -->
    <section class="content">
	                          <div class="card card-primary"> 
							<div class="card-body overflow-auto">
			            <div class="box clearfix">
               <table class="table table-hover overflow-auto" id="bootstrap_table0">
            </table>
        </div>
    </div>

    </div>
					
				
    </section>
</div>
    </div>
  </div>
</div>
  
  
  
   
  <jsp:include page="footer.jsp" />
  
  <script>
  var workout_client_id;

  client_attendance_report_onload();
  client_attendance_leave_report_onload();
    
	  $("#attendance_report").appendTo($("#parent_continer"));
	  
	  
	  function attendance_by_client(client_Id)
	  {
		  $( "#attendance_calendar").empty();
		 	 var request = new XMLHttpRequest();
	  	request.open("POST", base_path+"/Hawk_api_01/attendance_by_client");
	  		var formData = new FormData();
	     	formData.append ("client_Id",client_Id);
	  request.send(formData);
	  request.onload = function() {
		  sessionCheck(this.response);
	    var resultdata = JSON.parse(this.response);
	    try {
			attendance_Info(resultdata.suporting_data.attendance_Info,resultdata.suporting_data.calendar_event);
						} catch (err) {
			console.log("error : "+err);
		}
	  }
	  }
	  
	 function leaveSheet_click()
	 {
		 $("#leave_sheetModal").modal();
	 }
	 

	 
  </script>
  
<!--     <script type="text/javascript" src="https://cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.js"></script>
    <script type="text/javascript" src="https://cdn.fusioncharts.com/fusioncharts/latest/themes/fusioncharts.theme.fusion.js"></script>
   -->
  </body>
  </html>