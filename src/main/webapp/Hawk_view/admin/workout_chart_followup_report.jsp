<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
 <title>Workout Chart follow Up Report</title>
 <%@include file="../admin/header.jsp" %>
  </head>  
<body class="hold-transition sidebar-mini">
<!-- Site wrapper -->
<div class="wrapper" id="workout_chart_followup_report">

 <div class="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 class="h3 mb-0 text-gray-800">Workout Chart follow Up Report</h1>
            <a href="#"  onclick="exportTableToExcel('bootstrap_table', 'members-data');" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i class="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
          </div>
		<!-- Content Wrapper. Contains page content -->
		<div class="content-wrapper">
    <!-- Main content -->
<div class="table table-responsive ">
     						 <table class="table" id="bootstrap_table">
                </tbody>
            </table>
        </div>
        </div>
        <!-- Modal -->
<div class="modal fade" id="workout_chart_followup_Modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
  aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
       <div class="row"> <h5 class="modal-title" id="exampleModalLabel">Client Quick View</h5></div>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body overflow-auto">
      
						<div class="box clearfix">
							<form name="workout_chart_client_quick_view">
      <div class="row">
        <div class="col-md-12">
          <div class="card card-primary">
            <div class="card-body">
            <div class="row">
            <div class="col-md-6">
              <div class="form-group">
                	<div class='form-group'>
			<label for='Warm_ups'>Client Id</label>
			<input type='text' name='client_Id' id='client_Id' class='form-control' readonly>
</div>              </div>
              </div>
              <div class="col-md-6">
              <div class="form-group">
                	<div class='form-group'>
			<label for='Warm_ups'>Warm ups</label>
			<select name='warm_ups' id='warm_ups' class='form-control custom-select'>
			 <option value="" selected>Select one </option> </select>
</div>              </div>
              </div>
               <div class="col-md-6">
               <div class="form-group">
               <label for='client_Name'>Workout Chart</label>
			<select name='workout_Chart' id='workout_Chart' class='form-control custom-select'>
			 <option value="" selected>Select one </option> </select>              </div>
              </div>
              
                     <div class="col-md-6">
                         
               <div class="form-group">
              <label for='client_Name'>Stretching</label>
			<select name='stretching' id='stretching' class='form-control custom-select'>
			 <option value="" selected>Select one </option> </select>
              </div>
               </div>
             <div class="col-md-6">
             <div class="form-group">
                <label for='start_Date'>Start Date</label>
		<input type='text'id='start_Date' class='form-control' readonly>
              </div>
            </div>

            <div class="col-md-6">
             <div class="form-group">
               	<label for='end_Date'>End Date</label>
		<input type='text'  id='end_Date'  class='form-control' readonly>
              </div>
            </div>
               <div class="col-md-6">
             <div class="form-group">
              	<label for='client_Name'>Duration</label>
		<input type='text' name='duration' id='duration' class='form-control' readonly>
              </div>
            </div>
              
                 <div class="col-md-6">
             <div class="form-group">
              <label for='client_Name'>Status</label>
			<select name='client_Status' id='client_Status' class='form-control custom-select'>
			  <option value="" selected>Select one </option> 
			 <option class='option' value='Active'>Active</option>
			 <option class='option' value='Inactive'>Inactive</option>
			 <option class='option' value='Idle'>Idle</option>
			</select>
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
       <button type="button" class="btn btn-secondary btn-success" onclick="quick_view_update_fn('quick_view_update/');">Update</button>
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
	
    </div>
  <jsp:include page="footer.jsp" />
  
  <script>
  workout_chart_followup_report_onload();
  $("#workout_chart_followup_report").appendTo($("#parent_continer"));





  </script>
  </body>
  </html>