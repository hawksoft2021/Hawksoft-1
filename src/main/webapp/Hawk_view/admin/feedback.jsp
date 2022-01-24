<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Feedback Report</title>
<%@include file="../admin/header.jsp"%>
</head>
<body class="hold-transition sidebar-mini">
	<!-- Site wrapper -->
	<div class="wrapper" id="feedback">
		<div class="card card-primary">
			<div
				class=" card-header d-sm-flex align-items-center justify-content-between mb-4"
				data-card-widget="collapse" data-toggle="tooltip">
				<h1 class="h3 mb-0 text-gray-800">FeedBack Follow Up</h1>
				<a href="#"
					onclick="if(confirm('Conform to download?') == true) {exportTableToExcel('feedback_follow_up_bootstrap_tablel', 'feedback_followup_report',1);}"
					class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
					class="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
			</div>
			<div class="card-body overflow-auto">
				<!-- Main content -->
				<div class="table table-responsive ">
					<table class="table" id="feedback_follow_up_bootstrap_tablel">
						</tbody>
					</table>
				</div>
			</div>
		</div>
				<div class="card card-primary">
			<div
				class=" card-header d-sm-flex align-items-center justify-content-between mb-4"
				data-card-widget="collapse" data-toggle="tooltip">
				<h1 class="h3 mb-0 text-gray-800">FeedBack Report</h1>
				<a href="#"
				onclick="if(confirm('Conform to download?') == true) {exportTableToExcel('feedback_report','feedback_report',1);}"
					class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
					class="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
			</div>
			<div class="card-body overflow-auto">
				<!-- Main content -->
				<div class="table table-responsive ">
					<table class="table" id="feedback_report">
						</tbody>
					</table>
				</div>
			</div>
		</div>
		<!-- Modal -->
		<div class="modal fade" id="workout_chart_followup_Modal"
			tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
			aria-hidden="true">
			<div class="modal-dialog modal-dialog-scrollable" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<div class="row">
							<h5 class="modal-title" id="exampleModalLabel">Feedback
								Entry</h5>
						</div>
						<button type="button" class="close" data-dismiss="modal"
							aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div class="modal-body overflow-auto">
						<div class="box clearfix">
							<form name="feedback_form">
								<div class="row">
									<div class="col-md-12">
										<div class="card card-primary">
											<div class="card-body">
												<div class="row">
													<div class="col-md-11">
														<div class="form-group">
															<div class='form-group'>
																<label for='Warm_ups'>Client Id</label>
																<div class="row">
																	<div class="col-md-11">
																		<input type='text' name='client_Id' id='client_Id'
																			class='form-control' readonly>
																	</div>
																	<div class="col-md-1">
																		<input class="btn btn-success" type="button" value="+"
																			onclick="add_feedback_field(0,'feedbackcontainer');">

																	</div>
																</div>
															</div>
														</div>
													</div>

													<!-- /////// -->
													<div id="feedbackcontainer"
														class="row card-body form-group"></div>
													<!-- ////// -->
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
						<button type="button" class="btn btn-secondary btn-success"
							onclick="feedbackupdate('feedback_form');">Submit</button>
						<button type="button" class="btn btn-secondary"
							data-dismiss="modal">Close</button>
					</div>
				</div>
			</div>
		</div>
		<!-- ///////////// -->
				<!-- Modal -->
		<div class="modal fade" id="feedbackupdate_Modal"
			tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
			aria-hidden="true">
			<div class="modal-dialog modal-lg modal-dialog-scrollable" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<div class="row">
							<h5 class="modal-title" id="exampleModalLabel">Feedback
								Update</h5>
						</div>
						<button type="button" class="close" data-dismiss="modal"
							aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div class="modal-body overflow-auto">
						<div class="box clearfix">
							<form name="feedbackupdate_form">
								<div class="row">
									<div class="col-md-12">
										<div class="card card-primary">
											<div class="card-body">
												<div class="row">
													<div class="col-md-11">
														<div class="form-group">
															<div class='form-group'>
																<label for='Warm_ups'>Client Id</label>
																<div class="row">
																	<div class="col-md-11">
																		<input type='text' name='client_Id' id='client_Id'
																			class='form-control' readonly>
																			<input type='text' name='id' id='id' hidden="true" >
																	</div>
																</div>
															</div>
														</div>
													</div>

													<!-- /////// -->
													<div id="feedbackviewcontainer"
														class="row card-body form-group"></div>
													<!-- ////// -->
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
						<button type="button" class="btn btn-secondary btn-success"
							onclick="feedbackupdate('feedbackupdate_form');">Submit</button>
						<button type="button" class="btn btn-secondary"
							data-dismiss="modal">Close</button>
					</div>
				</div>
			</div>
		</div>


		<jsp:include page="footer.jsp" />

		<script>
			feedback_onload();
			$("#feedback").appendTo($("#parent_continer"));
		</script>
		<script>
			function add_feedback_field(status,containerName) {
				var total_text = document.getElementsByClassName("input_text");
				total_text = total_text.length + 1;

				var feedbackDiv = document.createElement('div');
				feedbackDiv.id = "feedback_" + total_text;
				feedbackDiv.className = "form-group";

				var container = "<div  class='row'><div class='col-md-4'>";
				container = container + "<div class='form-group'>";
				container = container + "<div class='form-group'>";
				container = container
						+ "<label for='Warm_ups'>Category</label>";
				container = container
						+ "<select  name='feedback_category' class='form-control custom-select'>";
				container = container
						+ "<option value='1' selected>Actionable</option>";
				container = container
						+ "<option value='2'>Non-Actionable</option>";
				container = container + "</select>";
				container = container + "</div></div>";
				container = container + "</div>";
				container = container + "<div class='col-md-8'>";
				container = container + "<div class='form-group'>";
				container = container
						+ " <label for='remarks'>Feedback</label>";
				container = container + "<div class='row'>";
				container = container + "<div class='col-md-11'>";
				container = container+ "<textarea id='remarks' name='remarks' class='form-control'></textarea>";
				container = container+ "<input id='status' name='status' value='0' hidden>";
				container = container + "</div>";
				container = container + "<div class='col-md-1'>";
				container = container+ "<input type='button' class='btn btn-danger' value='-' onclick=remove_field('feedback_"
						+ total_text + "');>";
				container = container + "</div>";
				container = container + "</div>";
				container = container + "</div>";
				container = container + "</div>";
				container = container + "</div>";
				feedbackDiv.innerHTML = container;
				document.getElementById(containerName).appendChild(
						feedbackDiv);
			}
			function remove_field(id) {
				document.getElementById(id).remove();
			}
			
			  function feedbackupdate_Modal(id)
			  {
				var object_index = resultData.findIndex(obj => obj.id==id);
			 $('[name="client_Id"]').val(resultData[object_index].client_Id); 
			 $('[name="id"]').val(resultData[object_index].feedback_Info.id);  
			var feedback_category=resultData[object_index].feedback_Info.feedback_category.split(",");
			var feedback_remarks=resultData[object_index].feedback_Info.remarks.split(",");		
			var feedback_status=resultData[object_index].feedback_Info.status.split(",");
			var containerName='feedbackviewcontainer';
			$( "#"+containerName).empty();
			$.each(feedback_remarks, function(index) {
				
			total_text = index;
				var total_text = document.getElementsByClassName("input_text");
				var feedbackDiv = document.createElement('div');
				feedbackDiv.id = "feedback_" + total_text;
				feedbackDiv.className = "form-group";

				var container = "<div  class='row'><div class='col-md-3'>";
				container = container + "<div class='form-group'>";
				container = container + "<div class='form-group'>";
				container = container
						+ "<label for='Warm_ups'>Category</label>";
				container = container+ "<select  name='feedback_category' class='form-control custom-select'>";
				if(feedback_category[index]==1)
				{
					container = container+ "<option value='1' selected>Actionable</option>";
					container = container+ "<option value='2'>Non-Actionable</option>";
				}
				
				else if(feedback_category[index]==2)
				{
					container = container+ "<option value='1'>Actionable</option>";
					container = container+ "<option value='2' selected>Non-Actionable</option>";
				}
				container = container + "</select>";
				container = container + "</div></div>";
				container = container + "</div>";
				container = container + "<div class='col-md-6'>";
				container = container + "<div class='form-group'>";
				container = container+ " <label for='remarks'>Feedback</label>";
				container = container+ "<textarea id='remarks' name='remarks' class='form-control'>"+feedback_remarks[index]+"</textarea>";
				container = container + "</div>";
				container = container + "</div>";
				
				
				container = container + "<div class='col-md-3'>";
				container = container + "<div class='form-group'>";
				container = container+ " <label for='remarks'>Feedback</label>";
				container = container+ "<select  name='status' class='form-control custom-select'>";
				if(feedback_status[index]==0)
				{
					container = container+ "<option value='0' selected>Pending</option>";
					container = container+ "<option value='1'>Completed</option>";
				}
				
				else if(feedback_status[index]==1)
				{
					container = container+ "<option value='0'>Pending</option>";
					container = container+ "<option value='1' selected>Completed</option>";
				}
				container = container + "</select>";
				ontainer = container + "</div>";
				ontainer = container + "</div>";
				
				
				
				
				
				container = container + "</div>";
				container = container + "</div>";
				feedbackDiv.innerHTML = container;
				document.getElementById(containerName).appendChild(
						feedbackDiv);
			});
				 	$("#feedbackupdate_Modal").modal();
				 	
				 
			  }
			
		</script>
</body>
</html>