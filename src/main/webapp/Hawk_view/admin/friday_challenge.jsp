<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Friday Challenge</title>
 <%@include file="../admin/header.jsp" %>
<body class="hold-transition sidebar-mini">
	<!-- Site wrapper -->
	<div class="wrapper" id="friday_challenge">
 <div class="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 class="h3 mb-0 text-gray-800">Renewal Report</h1>
            <a href="#"  onclick="exportTableToExcel('bootstrap_table', 'members-data');" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i class="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
          </div>
		<!-- Content Wrapper. Contains page content -->
		<div class="content-wrapper">
			<!-- Content Header (Page header) -->
			<section class="content-header">
				<div class="container-fluid">
					<div class="row mb-2">
						<div class="col-sm-6">
							<h1>Friday Challenge</h1>
						</div>
					</div>
				</div>
				<!-- /.container-fluid -->
			</section>

			<!-- Main content -->
			<section class=" form content">
				<form name="new_client_form">
					<div class="row">
						<div class="col-md-12">
							<div class="card card-primary">
								<div class="card-header" data-card-widget="collapse"
									data-toggle="tooltip" title="Collapse">
									<h3 class="card-title">Challenge Information</h3>

									<div class="card-tools">
										<button type="button" class="btn btn-tool"
											data-card-widget="collapse" data-toggle="tooltip"
											title="Collapse">
											<i class="fas fa-minus"></i>
										</button>
									</div>
								</div>
								<div class="card-body">
									<div class="row">
										<div class="col-md-6">
											<div class="form-group">
												<label for="wOD">WOD</label> <select name="wOD" id="wOD"
													class='form-control custom-select'></select>
											</div>
										</div>



										<div class="col-md-6">
											<div class="form-group">
												<label for="time_Reps_count">Time/Reps count</label> <select
													name="reps_count" id="reps_count"
													class="form-control custom-select">
													<option selected disabled>Select one</option>
													<option class="option" value="Time">Time</option>
													<option class="option" value="Reps Count">Reps
														Count</option>
												</select>
											</div>
										</div>

										<div class="col-md-6">
											<div class="form-group">
												<label for="follow_Date">Target</label> <input
													type="text" name="target_Limit" id="target_Limit"
													class="form-control">
											</div>
										</div>
										<div class="col-md-6">
											<div class="form-group">
												<label for="time_Reps_count">Event Date</label> <input
													class="form-control js-datepicker" type="text"
													name=event_date>

											</div>
										</div>
									</div>
									<div class="row">
										<div class="col-12">
											<a href="#" class="btn btn-secondary">Cancel</a> <input
												type="submit" value="Submit" onclick="new_friday_challenge_entry();"
												class="btn btn-success float-right">
										</div>
									</div>
								</div>
								<!-- /.card-body -->
							</div>
							<!-- /.card -->
						</div>

					</div>
				</form>




				<div class="card card-primary" >
					<div class="card-header" data-card-widget="collapse"
						data-toggle="tooltip" title="Collapse">
						<h3 class="card-title">Friday Challenge Report</h3>
						<div class="card-tools">
							<button type="button" class="btn btn-tool"
								data-card-widget="collapse" data-toggle="tooltip"
								title="Collapse">
								<i class="fas fa-minus"></i>
							</button>
						</div>
					</div>
					<div class="card-body overflow-auto">
						<div class="box clearfix">
						<div class="table table-responsive ">
     						 <table class="table" id="bootstrap_table">
							</table>
							</div>
						</div>
					</div>
				</div>
			</section>
			<!-- /.content -->
		</div>
		<!-- /.content-wrapper -->

	</div>
	<jsp:include page="footer.jsp" />
	<script>



		friday_challenge_report_list_request();
		  $("#friday_challenge").appendTo($("#parent_continer"));
	</script>
<!-- Modal -->
<div class="modal fade" id="fridayChallengeBord" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
  aria-hidden="true">
   <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header">
       <div class="row"><div class="col-sm-9"> <h5 class="modal-title" id="exampleModalLabel">Friday Challenge Bord </h5></div><div class="col-sm-2"><h5 id="model_event_date"></h5></div></div>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body overflow-auto">
      
						<div class="box clearfix">
			<div class="table table-responsive ">
     						 <table class="table" id="bootstrap_table1">
								<thead>
									<tr>
										<th>Id</th>
										<th>Client Id</th>
										<th>WOD</th>
										<th>Time/Reps count</th>
										<th>Target</th>
										<th>completion</th>
									</tr>
								</thead>
								<tbody id="rank_list">


								</tbody>
							</table>
						</div>
						
						
							</div>
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
  <!--   calender update -->
        <!--   calender update -->
            <script type="text/javascript" src="<c:url value="/calender_js/select2.min.js"/>"></script>
         <script type="text/javascript" src="<c:url value="/calender_js/moment.min.js"/>"></script>
            <script type="text/javascript" src="<c:url value="/calender_js/daterangepicker.js"/>"></script>
            <script type="text/javascript" src="<c:url value="/calender_js/global.js"/>"></script>
         <!--   calender update -->
</body>
</html>