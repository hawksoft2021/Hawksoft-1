<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
 <title>Calendar Report</title>
 <%@include file="../admin/header.jsp" %>
  </head>
<body class="hold-transition sidebar-mini">
<!-- Site wrapper -->
<div class="wrapper" id="calendar_report">

 <div class="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 class="h3 mb-0 text-gray-800">Calendar Report</h1>
                      <button type="button" class="btn btn-secondary btn-success" onclick="calendar_editModal();">New Event</button>
            <a href="#"  onclick="exportTableToExcel('bootstrap_table', 'members-data');" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i class="fas fa-download fa-sm text-white-50"></i> Generate Report</a>

    
          </div>
		<!-- Content Wrapper. Contains page content -->
		<div class="content-wrapper">
    <!-- Main content -->
<div class="table table-responsive ">
     						 <table class="table" id="bootstrap_table">
                <thead>
                <tr>
                   <th>Id</th>
                   <th>Event Date</th>
                    <th>Title</th>
                    <th>Message</th>
                      <th>Background Color</th>
                     <th>Font Color</th>
                      <th>Status</th>
                  	 <th>Action</th>
                </tr>
                </thead>
                <tbody id="calendar_list">
                
    
                </tbody>
            </table>
        </div>
        </div>
        <!-- Modal -->
<div class="modal fade" id="calendar_editModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
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
							<form name="calendar_Info">
							 <input type="hidden" id="id" name="id" >
      <div class="row">
        <div class="col-md-12">
          <div class="card card-primary">
            <div class="card-body">
            <div class="row">
             <div class="col-md-6">
             <div class="form-group">
                <label for="client_Name">Event Date<label>*</label></label>
                 <input class="form-control js-datepicker" type="text" id="event_Date" name="event_Date" readonly="readonly"> 
                
              </div>
              </div>
              <div class="col-md-6">
              <div class="form-group">
                <label for="client_Name">Title <label>*</label></label>
                <input type="text" name="title" id="title" class="form-control">
              </div>
              </div>
              <div class="col-md-6">
              <div class="form-group">
                <label for="client_Name">Message  <label>*</label></label>
                <input type="text" name="message" id="message" class="form-control">
              </div>
              </div>
              
              <div class="col-md-6">
              <div class="form-group">
                <label for="client_Name">Font Color  <label>*</label></label>
                <input type="text" name="font_color" id="font_color" class="form-control">
              </div>
              </div>
              
              <div class="col-md-6">
              <div class="form-group">
                <label for="client_Name">Background Color  <label>*</label></label>
                <input type="text" name="backgroundColor" id="backgroundColor" class="form-control">
              </div>
              </div>
                     <div class="col-md-6">
                         
               <div class="form-group">
                <label for="caterogy">Status <label>*</label></label>
                <select name="status" id="status"class="form-control custom-select" >
                  <option selected >Select one</option>
						    <option value="1">Active </option>
						    <option value="0">Deactivate </option>
                </select>
              </div>
               </div>
                </div>
                  </div>
                  
            </div>
            <!-- /.card-body -->
          </div>
          <!-- /.card -->
        </div>
      </form>
						</div>
      </div>
      <div class="modal-footer">
       <button type="button" class="btn btn-secondary btn-success" onclick="calendar_Info_entry();">Submit</button>
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
    </div>
  <jsp:include page="footer.jsp" />
  
  <script>
  $( document ).ready(function() {
	  calendar_report_onload('calendar_list');
	  $("#calendar_report").appendTo($("#parent_continer"));
	});


 
  </script>
  </body>
  </html>