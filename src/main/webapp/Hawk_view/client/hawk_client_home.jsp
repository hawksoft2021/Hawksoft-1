<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
 <title>Dashboard</title>
  <%@include file="../client/client_header.jsp" %>
<!--     <script type="text/javascript" src="https://cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.js"></script>
    <script type="text/javascript" src="https://cdn.fusioncharts.com/fusioncharts/latest/themes/fusioncharts.theme.fusion.js"></script>
   -->
 </head>
         <!-- Begin Page Content -->
        <div id="dashboard" class="container-fluid">
<!--  ICON STORE  --><!-- https://www.w3schools.com/icons/fontawesome_icons_webapp.asp -->
          <!-- Page Heading -->
          <div class="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
                   </div>

          <!-- Content Row -->
          <div class="row">

            <!-- Earnings (Monthly) Card Example -->
            <div class="col-xl-3 col-md-6 mb-4">
              <div class="card border-left-primary shadow h-100 py-2">
                <div class="card-body">
                  <div class="row no-gutters align-items-center">
                    <div class="col mr-2">
                       <div class="row no-gutters align-items-center ">
                  <a  href="#"   onclick="modal_view(1);" class="small-box-footer">Personal Information <i class="fas fa-arrow-circle-right"></i></a>
                </div>               
                    </div>
                    <div class="col-auto">
                      <i class="fa fa-lightbulb fa-2x text-gray-300"></i>
                    </div>         
                  </div>
                </div>
              </div>
            </div>
                        <div class="col-xl-3 col-md-6 mb-4">
              <div class="card border-left-primary shadow h-100 py-2">
                <div class="card-body">
                  <div class="row no-gutters align-items-center">
                    <div class="col mr-2">
                       <div class="row no-gutters align-items-center ">
                  <a  href="#" onclick="modal_view(2);" class="small-box-footer">Package<i class="fas fa-arrow-circle-right"></i></a>
                </div>               
                    </div>
                    <div class="col-auto">
                     <i class="fas  fa fa-cart-arrow-down  fa-2x text-gray-300"></i>
                    </div>         
                  </div>
                </div>
              </div>
            </div>
                        <div class="col-xl-3 col-md-6 mb-4">
              <div class="card border-left-primary shadow h-100 py-2">
                <div class="card-body">
                  <div class="row no-gutters align-items-center">
                    <div class="col mr-2">
                       <div class="row no-gutters align-items-center ">
                  <a  href="#" onclick="modal_view(3);" class="small-box-footer">Workout <i class="fas fa-arrow-circle-right"></i></a>
                </div>               
                    </div>
                    <div class="col-auto">
                      <i class="fa fa-lightbulb fa-2x text-gray-300"></i>
                    </div>         
                  </div>
                </div>
              </div>
            </div>        
            
                        <div class="col-xl-3 col-md-6 mb-4">
              <div class="card border-left-primary shadow h-100 py-2">
                <div class="card-body">
                  <div class="row no-gutters align-items-center">
                    <div class="col mr-2">
                       <div class="row no-gutters align-items-center ">
                  <a  href="#" onclick="modal_view(4);" class="small-box-footer">Friday Challenge <i class="fas fa-arrow-circle-right"></i></a>
                </div>               
                    </div>
                    <div class="col-auto">
                      <i class="fa fa-lightbulb fa-2x text-gray-300"></i>
                    </div>         
                  </div>
                </div>
              </div>
            </div>
         
          </div>


						<div class="card card-primary" >
							<div class="card-header"  data-toggle="tooltip">
								<h3 class="card-title">Attendance Calendar</h3>
							</div>

							<div class="card-body overflow-auto">
				<div id="attendance_Info" class="panel-body">
									<div id='attendance_calendar'></div>
								</div>
							</div>
							<!-- /.card-body -->
						</div>
          
          
          
         
          
           <div  id="insanity_div">
            <div class="card card-primary" >
							<div class="card-header"  data-toggle="tooltip">
								<h3 class="card-title">Assessment Module Overview</h3>
							</div>
							<div class="card-body overflow-auto table table-responsive">
<div  class="row" class="box clearfix">
	<div class="col-md-12 overflow-auto table-responsive">
      <table class="table table-bordered table table-fit" >
        <thead>
          <tr id="tcolumn">
          </tr>
        </thead>
        <tbody id="tbody">
        </tbody>
      </table>  
              </div>
</div>
						</div>
							<!-- /.card-body -->
						</div>
            </div>
          
          
          
   

                
                
                
                
                
                
                
                
                
                  <!-- Content Row -->
                </div>
           
          <div id="contact_information_continer">
          	<!-- Modal -->
<div class="modal fade" id="contact_information_modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
  aria-hidden="true">
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header">
       <div class="row"> <h5 class="modal-title" id="exampleModalLabel">General Information</h5></div>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body overflow-auto">
      
						<div class="box clearfix">
							<form name="general_information" id="general_information">
      <div class="row" id="contact_information">
        <div class="col-md-12">
          <div class="card card-primary">
            <div class="card-body">
            <div class="row">
             <div class="col-md-6">
              <div class="form-group">
                <label for="client_Name">Client Id   <label>*</label></label>
                <input type="text" name="client_Id" id="client_Id" class="form-control">
              </div>
              </div>
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
                <label for="email">Email</label>
                <input type="text" name="email" id="email" class="form-control">
              </div>
                  </div>
                    <div class="col-md-6">
                <div class="form-group">
                <label for="email">Facebook Id</label>
                <input type="text" name="facebook_Id" id="facebook_Id" class="form-control">
              </div>
                  </div>
                  <div class="col-md-6">
               <div class="form-group">
                <label for="email">Instagram Id</label>
                <input type="text" name="instagram_Id" id="instagram_Id" class="form-control">
              </div>
                  </div>
                   <div class="col-md-6">
                <div class="form-group">
                <label for="gender">Gender <label>*</label></label>
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
                <label for="dOB">Date Of Birth <label>*</label></label>
                                    <input class="form-control js-datepicker" type="text" name="dOB" id="dob"> 
              </div>
               </div> 
                <div class="col-md-6">
              <div class="form-group">
                <label for="dOB">Weight<label>*</label></label>
                                     <input type="text" name="weight" id="weight" readonly="readonly" class="form-control">
              </div>
               </div> 
               <div class="col-md-6">
              <div class="form-group">
                <label for="address">Address <label>*</label></label>
                <textarea name="address" id="address" class="form-control" rows="2"></textarea>
              </div>
                  </div>	
                 
                  <div class="col-md-6">
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
                  <div class="col-md-6">
              
                  </div> 
                  <div class="col-md-6">
              
                  </div> 
                  
                  
                  
                  
            </div>
            <!-- /.card-body -->
          </div>
          <!-- /.card -->
        </div>
      </div>
        </div>
      </form>
						</div>
      </div>
      <div class="modal-footer">
      
       <button type="button" class="btn btn-secondary btn-success"  onclick="if(validateForm()){update_general_information();}">Update</button>
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
</div>
<!-- modal end -->

<div id="package_information">
          	<!-- Modal -->
<div class="modal fade" id="package_information_modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
  aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
       <div class="row"> <h5 class="modal-title" id="exampleModalLabel">Package Information</h5></div>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body overflow-auto">
      
						<div class="box clearfix">
							<form name="package_information">
      <div class="row">
        <div class="col-md-12">
          <div class="card card-primary">
            <div class="card-body">
            <div class="row">
             <div class="col-md-6">
              <div class="form-group">
                <label for="client_Name">category <label>*</label></label>
                <input type="text" name="category" id="category" class="form-control">
              </div>
              </div>
              <div class="col-md-6">
              <div class="form-group">
                <label for="client_Name">Package Duration   <label>*</label></label>
                <input type="text" name="package_Duration" id="package_Duration" class="form-control">
              </div>
              </div>
               <div class="col-md-6">
               <div class="form-group">
                <label for="mobile_No">Target<label>*</label></label>
                <input type="text" name="target" id="target" class="form-control">
              </div>
              </div>
            <div class="col-md-6">
               <div class="form-group">
                <label for="email">Due Amount</label>
                <input type="text" name="due_Amount" id="due_Amount" class="form-control">
              </div>
                  </div>
                    <div class="col-md-6">
                <div class="form-group">
                <label for="email">Due Date</label>
                <input type="text" name="due_Date" id="due_Date" class="form-control">
              </div>
                  </div>
            </div>
            <!-- /.card-body -->
          </div>
          <!-- /.card -->
        </div>
      </div>
        </div>
      </form>
						</div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
</div>
<!-- modal end -->
 <div id="workout_information">
          	<!-- Modal -->
<div class="modal fade" id="workout_information_modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
  aria-hidden="true">
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
    	<form name="client_workout_form">
      <div class="modal-header">
       <div class="row"> <h5 class="modal-title" id="exampleModalLabel">Workout Information - Day - <label  for='wodday'  id='wodday'></h5></label></div>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
        <input type="hidden" id="day" name="day">
      </div>
 <div class="modal-body overflow-auto">
						<div class="">
      <div class="row">
        <div class="col-md-12">

            <div class="row">
                    <div class="col-md-12">
              <div class="form-group">
			<label for='client_Name'>Client Module</label>
			<select name='workout_Chart' id='workout_Chart' class='form-control custom-select'>
			<option selected disabled>Select one</option>
			    <option class="option" value="Warm_ups">Warm ups</option>
                 <option class="option" value="Workout_Chart">Workout</option>
				<option class="option" value="Stretching">Stretching</option></select>
</div>
</div>
 <div class="col-md-12">
	<div class='form-group'>
			<label for='client_Name'>workout Module Planner</label>
		<input type='text' name='workout_Planner' id='workout_Planner' class='form-control' readonly="readonly" >
</div>
</div>
 <div class="col-md-6">
<div class='form-group'>
			
	
</div>
		</div>				
									<table class="table table-bordered" id="tbl_posts">
										<thead>
											<tr>
												<th>#</th>
												<th>Work Group</th>
												<th>Workout</th>
												<th>Reps/Time</th>
												<th>Check</th>
												<th>Completion</th>
											</tr>
										</thead>
										<tbody id="tbl_posts_body">
										</tbody>
									</table>
									</div>
							
									</div>
									</div>
	
						</div>
      </div>
      <div class="modal-footer">
       <button type="button" class="btn btn-secondary btn-success" onclick="client_Workout_entry();">Update</button>
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
   </form>
    </div>
  </div>
</div>
 </div>   
<!-- modal end -->
<!-- modal START -->
 <div id="assessment_report_information">
          	<!-- Modal -->
 </div>   
<!-- Modal -->
 <div id="friday_challenge_information">
          	<!-- Modal -->
<div class="modal fade" id="friday_challenge_modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
  aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
    	<form name="friday_challenge_form">
      <div class="modal-header">
       <div class="row"> <h5 class="modal-title" id="exampleModalLabel">Friday Challenge</h5></div>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
 <div class="modal-body overflow-auto">
								<!--   <div class="row"> -->
								<div class="row" id="friday_challenge_continer"
									class="panel-body"></div>
							<div>
								<div class="box clearfix">
									<table class="table table-hover" id="bootstrap-table">
										<thead>
											<tr>
												<th>Id</th>
												<!--   <th>Date</th> -->
												<th>Event Date</th>
												<th>WOD</th>
												<th>Time/Reps count</th>
												<th>Target</th>
												<th>completion</th>
											</tr>
										</thead>
										<tbody id="client_friday_challenge_conteiner">


										</tbody>
									</table>
								</div>
							</div>
		
      </div>
      <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
   </form>
    </div>
  </div>
</div>
 </div>   
<!-- modal end -->
 <jsp:include page="footer.jsp" />
 <script>
 const oneDay = 24 * 60 * 60 * 1000;
 $("#insanity_div").hide();
 {
	 var request = new XMLHttpRequest();
		var attendance_details_list;
		var workout_info_data;
		var workout_chart_list={};
	  	var resultdata;
	 $("#dashboard").appendTo($("#parent_continer"));
	 

	  function dashbord_data()
	  {
		   request = new XMLHttpRequest();
	 request.open("POST", base_path+"/Hawk_api_01/client_information/");
	  request.responseType = 'json';
	  request.send();
	  request.onload = function() {
		  resultdata=this.response;
		  
		  if(resultdata.data==null||resultdata.data=="")
  		window.location.replace(base_path+"/client");
		  
		  general_information_fill(resultdata.data);
		  workout_info_data=resultdata.suporting_data.work_out_details;
			try {
				attendance_Info(resultdata.suporting_data.attendance_Info,resultdata.suporting_data.calendar_event);
				if(resultdata.suporting_data.friday_challenge_info)
				friday_challenge_fn(resultdata.suporting_data.friday_challenge_info);
							} catch (err) {
				console.log("error : "+err);
			}
			try {
				client_Friday_Challenge_list(resultdata.suporting_data.client_friday_challenge_info);
			} catch (err) {
				//console.log("error : "+err);
			}
			try {
				data_plot(resultdata.suporting_data.assessment_module,resultdata.suporting_data.assessment_info);
			} catch (err) {
				//console.log("error : "+err);
			}
	  	  }  
	  }
	  
	  dashbord_data();
	  
	  function general_information_fill(resultdata)
	  {  
		  if(resultdata.payment_History.category=='Insanity' ||resultdata.payment_History.category=='Personal')
			{
			 $("#insanity_div").show();
			}

		$.each(resultdata, function(key,value) {	
		$("#"+key).val(value);	
		$("#client_Id").attr('readonly', true);
		});
		$("#client_name").text(resultdata.client_Name);
		$("#client_name_").text(resultdata.client_Name);
		
		$.each(resultdata, function(key,value) {	
			$("#"+key).val(value);	
			$("#client_Id").attr('readonly', true);
			});
		
		
		workout_chart_list['Warm_ups']=resultdata.client_Quick_View.warm_ups;
		workout_chart_list['Workout_Chart']=resultdata.client_Quick_View.workout_Chart;
		workout_chart_list['Stretching']=resultdata.client_Quick_View.stretching;
		$("#notofication_spam").html('');
		$("#notofication_body").html('');
		
		var mydate = new Date(resultdata.create_Date);
		const diffDays = Math.round(Math.abs(( mydate -  new Date()) / oneDay));
		$("#notofication_body").empty();
		if(diffDays>31) 
		{
		if(resultdata.client_Quick_View.feedback=='')
		{
			$("#notofication_spam").html('1');
			$("#notofication_body").append("<li><a  class='float-right' href='https://docs.google.com/forms/d/e/1FAIpQLSew5nobWE4UxnMnjInMZJCENwUEtquFlEfqOGGRPqperka56A/viewform?usp=sf_link'>FeedBack</a></li>");
		}
		
		if(resultdata.client_Quick_View.feedback=='1' && resultdata.client_Quick_View.google_review=='')
		{
			$("#notofication_spam").html('1');
			$("#notofication_body").append("<li><a href='https://bit.ly/2x9T7Dp'>Google Review</a></li>");
		}
		}
		
		
		
		$.each(resultdata.payment_History, function(key,value) {	
			$("#"+key).val(value);	
			$("#"+key).attr('readonly', true); 
			});
	  }

	  
	  
	  function modal_view(tagid)
	  {
		  if(tagid==1)
		  $("#contact_information_modal").modal(); 
		  else if(tagid==2)
			  $("#package_information_modal").modal(); 
		  else if(tagid==3)
			  $("#workout_information_modal").modal(); 
		  else if(tagid==4)
			  $("#friday_challenge_modal").modal();  

		  
	  }
	  
	  function update_general_information()
	  {
		   request = new XMLHttpRequest();
		  	var formElement = document.forms.namedItem("general_information");
		  	request.open("POST", base_path+"/Hawk_api_01/update_general_information/");
		  	var formData = new FormData();
		  var  oData = new FormData(formElement);
		  request.responseType = 'json';
		  request.send(oData);
		  request.onload = function() {
			  if(this.response.status==="1")
				  {
				  alert("Updated....");
			    	onload_request();
				  }
			  else
				  {
				  alert("Invalid Update(ErrorCode-801)....");
				  }
		  	  }
	  }
	
	  
	  
		function client_Workout_entry() {
			var formElement = document.forms.namedItem("client_workout_form");
			request.open("POST", base_path+"/Hawk_api_01/client_Workout_entry/");

			var formData = new FormData();
			var oData = new FormData(formElement);
			oData.append('client_Id', $("#client_id").val());
			request.responseType = 'json';
			request.send(oData);
			request.onload = function() {
				var	response=this.response;
				
				if(response.status=="1")
					{
					alert("Workout Entry success...");
					  location.reload(true);
					}
				else
					{
					window.location.replace("/"+response.view);	
					}
				
			}
		}
	  
	  
		function friday_challenge_fn(friday_challenge) {
			try
			{
			 console.log("friday_challenge  : "+ JSON.stringify(friday_challenge));
			var index = 0;

			var continer = "<div class='col-md-6'><div class='form-group'>";
			continer = continer + "<label for='client_Name'>wOD</label>";
			continer = continer
					+ "<input type='text' name='wOD' id='wOD' class='form-control' value='"+friday_challenge.wod+"' readonly>";
			continer = continer + "</div></div>";
			continer = continer + "<div class='col-md-6'><div class='form-group'>";
			continer = continer + "<label for='client_Name'>Reps/Count</label>";
			continer = continer
					+ "<input type='text' name='reps_count' id='reps_count' class='form-control' value='"+friday_challenge.reps_count+"' readonly>";
			continer = continer + "</div></div>";
			continer = continer + "<div class='col-md-6'><div class='form-group'>";
			continer = continer + "<label for='client_Name'>Target Limit</label>";
			continer = continer
					+ "<input type='text' name='target_Limit' id='target_Limit' class='form-control' value='"+friday_challenge.target_Limit+"' readonly>";
			continer = continer + "</div></div>";
			continer = continer + "<div class='col-md-6'><div class='form-group'>";
			continer = continer + "<label for='client_Name'>Competition</label>";
			continer = continer+ "<input type='text' name='competition' id='competition' class='form-control' placeholder='completion'>";
			continer = continer + "</div></div>";
			continer = continer+ " <input type='hidden'  name='event_date' value='"+GetFormattedDateDDMMYY(new Date(friday_challenge.event_date))+"'>";
		    continer = continer+"<div class='col-12'> <button type='button' class='btn btn-secondary btn-success float-right' onclick='client_Friday_Challenge_entry();'>Update</button></div>";
		$("#friday_challenge_continer").append(continer);
			}
		catch (err) {
			console.log("friday_challenge_fn :::error : "+err);
		}
		
		}
		function client_Friday_Challenge_list(friday_challenge_list) {

			$.each(friday_challenge_list, function(index) {
				var continer = "<tr><td>" + (index + 1) + "</td>";
				continer = continer + " <td>"
						+GetFormattedDateDDMMYY(new Date(friday_challenge_list[index].event_date))+ "</td>";
				continer = continer + "<td>" + friday_challenge_list[index].wod
						+ "</td>";
				continer = continer + "<td>"
						+ friday_challenge_list[index].reps_count + "</td>";
				continer = continer + "<td>"
						+ friday_challenge_list[index].target_Limit + "</td>";
				continer = continer + "<td>"
						+ friday_challenge_list[index].competition + "</td>";
				continer = continer + "</tr>";
				$("#client_friday_challenge_conteiner").append(continer);
			});

		}
	  
	  
		function client_Friday_Challenge_entry() {
			var competition=$('#competition').val();
if(competition&&competition!=='')
	{
			var formElement = document.forms.namedItem("friday_challenge_form");
			request.open("POST",base_path+"/Hawk_api_01/client_Friday_Challenge_entry/");
			var formData = new FormData();
			var oData = new FormData(formElement);
			oData.append('client_Id', $("#client_id").val());
			request.responseType = 'json';
			request.send(oData);
			request.onload = function() {
				alert("Friday Challenge Entry success...");
				  location.reload(true);
			}
		}
else
	alert("Invalid Data....");
		}
	  
	  function AreaChartplot(account_management)
	  {
		 var months=["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
			var create_date=[];
			var seriesname_list = [];
			var enquiry_data_array=[];
			var conversion_data_array=[];
			
				$.each(account_management, function(index) {
					var yearAndMonth=new Date(account_management[index].create_Date);
					yearAndMonth=(yearAndMonth.getMonth());	
						{
						var object_index=create_date.findIndex(std=> std.yearAndMonth === yearAndMonth && account_management[index].client_Id);
						if(object_index>=0)
						{
							create_date[object_index]['count']=parseInt(create_date[object_index]['count'])+1;
						}
						else
							{
							create_date.push({'yearAndMonth':yearAndMonth,'client_Id':account_management[index].client_Id,"count":1});													

							}
						}
				});
		
		var staring_month = _.chain(create_date).sortBy('yearAndMonth').map(function(o) { return o.yearAndMonth ;})
		  .head()
		  .value();
		for(var i=0; i < months.length; i++){
			enquiry_data_array[i]=0;
			conversion_data_array[i]=0;
		}  
		
			$.each(create_date, function(index) {
			if(create_date[index].client_Id&&create_date[index].client_Id!==null)
				{
				conversion_data_array[create_date[index].yearAndMonth]=(create_date[index].count);
				}
			else
				{
				enquiry_data_array[create_date[index].yearAndMonth]=(create_date[index].count);
				}
		 });
  	seriesname_list.push({
	        label: "Enquiry",
	        lineTension: 0.3,
	        backgroundColor: "rgba(78, 115, 223, 0.05)",
	        borderColor: "#ff0066",
	        pointRadius: 3,
	        pointBackgroundColor: "#ff0066",
	        pointBorderColor: "rgba(78, 115, 223, 1)",
	        pointHoverRadius: 3,
	        pointHoverBackgroundColor: "rgba(78, 115, 223, 1)",
	        pointHoverBorderColor: "rgba(7, 15, 223, 1)",
	        pointHitRadius: 10,
	        pointBorderWidth: 2,
	        data:enquiry_data_array,
	      }); 
		seriesname_list.push({
	        label: "New Joining",
	        lineTension: 0.3,
	        backgroundColor: "rgba(78, 115, 223, 0.05)",
	        borderColor: "rgba(78, 115, 223, 1)",
	        pointRadius: 3,
	        pointBackgroundColor: "rgba(78, 115, 223, 1)",
	        pointBorderColor: "rgba(78, 115, 223, 1)",
	        pointHoverRadius: 3,
	        pointHoverBackgroundColor: "rgba(78, 115, 223, 1)",
	        pointHoverBorderColor: "rgba(78, 115, 223, 1)",
	        pointHitRadius: 10,
	        pointBorderWidth: 2,
	        data:conversion_data_array,
	      });
		
		
		
		  
		  var ctx = document.getElementById("myAreaChart");
		  var myLineChart = new Chart(ctx, {
		    type: 'line',
		    data: {
		      labels: months,
		      datasets: seriesname_list,
		    },
		    options: {
		      maintainAspectRatio: false,
		      layout: {
		        padding: {
		          left: 10,
		          right: 25,
		          top: 25,
		          bottom: 0
		        }
		      },
		      scales: {
		        xAxes: [{
		          time: {
		            unit: 'date'
		          },
		          gridLines: {
		            display: false,
		            drawBorder: true
		          }
		        
		        }],
		        yAxes: [{
		          ticks: {
		            maxTicksLimit: 5,
		            padding: 10,
		            // Include a dollar sign in the ticks
		            callback: function(value, index, values) {
		              return '' + number_format(value);
		            }
		          },
		          gridLines: {
		            color: "rgb(234, 236, 244)",
		            zeroLineColor: "rgb(234, 236, 244)",
		            drawBorder: false,
		            borderDash: [2],
		            zeroLineBorderDash: [2]
		          }
		        }],
		      },
		      legend: {
		        display: false
		      },
		      tooltips: {
		        backgroundColor: "rgb(255,255,255)",
		        bodyFontColor: "#858796",
		        titleMarginBottom: 10,
		        titleFontColor: '#6e707e',
		        titleFontSize: 14,
		        borderColor: '#dddfeb',
		        borderWidth: 1,
		        xPadding: 15,
		        yPadding: 15,
		        displayColors: false,
		        intersect: false,
		        mode: 'index',
		        caretPadding: 10,
		        callbacks: {
		          label: function(tooltipItem, chart) {
		            var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
		            return datasetLabel + ':' + number_format(tooltipItem.yLabel);
		          }
		        }
		      }
		    }
		  });
		  
		  
		  
	  }

	}
 
	function completion_check(obj) {
		var check_id = obj.id;
		var check_val = obj.name;
		if ( $(obj).is(':checked')) {
			check_id = check_id + '_completion';
			$('#' + check_id).val(check_val);
		} else {
			check_id = check_id + '_completion';
			$('#' + check_id).val("0");
		}

	}
 
 
 
/*  $("#enquiry_details").click(function() {
	 url_request("enquiry_details");
 });
 
 
 function url_request(url)
 {
	 alert("URL   :: "+url);
 var request = new XMLHttpRequest();
		request.open("GET", "/"+url);
	request.send();
 }
  */
 
 
 

  $("#workout_Chart").change(function(){
		var result_data=workout_info_data;
		$("#tbl_posts_body").empty();
		$("#workout_Planner").val("");
		var selecetd_child=$(this).val();
		
		//console.log("result_data   : "+result_data);

	//	$.each(result_data,function(index) {
					{	
			$('#workout_Planner').val((workout_chart_list[selecetd_child]));
		request.open("POST", base_path+"/Hawk_api_01/client_Workout_day/");
		var formData = new FormData();
		formData.append ('workout_Planner',(workout_chart_list[selecetd_child]));
		formData.append('Client_Id', $("#client_Id").val());
		request.responseType = 'json';
		request.send(formData);
		request.onload = function() {	
			
			
			var	wod_day=this.response.status;
		var workout_list=this.response.data;
		$("#wodday").text(wod_day);
			$("#day").val(wod_day);
			if(workout_list.length<=0)
				{
				$("#day").val(wod_day+this.response.view);
				$("#wodday").text(wod_day+this.response.view);
				}
				$.each((workout_list), function(index) {
				var workoutcontiner = "<tr id=''><td><span class='sn'></span>"+ (index + 1)	+ "</td>";
				workoutcontiner = workoutcontiner+ "<td>"+ (workout_list[index].work_group)+ "</td>";
				workoutcontiner = workoutcontiner+ "<td><textarea type='text' id='"+(workout_list[index].workout)+index+"_workout' style='min-width: 200px;' name='workout' value="+JSON.stringify(workout_list[index].workout)+"  class='form-control' readonly>"+(workout_list[index].workout)+"</textarea></td>";	
				workoutcontiner = workoutcontiner+ "<td><input type='text' id='"+(workout_list[index].rep_Time)+index+"_rep_Time' name='expected' value="+workout_list[index].rep_Time+"  class='form-control' readonly></td>";
				var workout_data=(workout_list[index].workout.replace(/[^a-zA-Z ]/g, ""));
				workout_data=workout_data.replace(/\s/g, "");
				workout_data=workout_data+index;
				workoutcontiner = workoutcontiner+ "<td><input type='checkbox'  id='"+workout_data+"' class='icheck-primary' name='"+(workout_list[index].rep_Time)+"' onclick='completion_check(this)' value='Completed'> Completed<br></td>";
					workoutcontiner = workoutcontiner+ "<td><input type='text' id='"+workout_data+"_completion' name='completion' value='0'  class='form-control'><br>";
				workoutcontiner = workoutcontiner+ "</tr>";
					$("#tbl_posts_body").append(workoutcontiner);
					 autosize();
				});	
		}
					}		
	//					});

	    });
  
  
  
  
  
  
  ///////////// ASSESMENT 
	  function data_plot(result_data,assessment_info) {
		  var assessmentrows=[];
		  var assessmentTest=[];
		  
	  //////////////////////
		  	$.each(assessment_info, function(index0) {
 $.each(assessment_info[index0].test.split(","), function(index,value) {
		assessmentrows.push([{'rowspan':assessment_info[index0].test.split(",").length,'type':assessment_info[index0].assement_Type,'test':value}]);
		assessmentTest.push(value);	
 }); 
});
var measurementContainer;
var rowDataArray=[];	
var measurementContainer;
var rowDataArray=[];	
$( "#tcolumn").empty();
$( "#tbody").empty();

$('#tcolumn').append("<th class='text-center' colspan='1'>Assement Type</th>");
$('#tcolumn').append("<th class='text-center' colspan='1'>Test</th>");
		  $.each(result_data, function(index) {
			  var DateDDMMYY=GetFormattedDateDDMMYY(new Date(result_data[index].create_date));
			  $('#tcolumn').append("<th class='text-center' colspan='2'>"+DateDDMMYY+"</th>");
			  var testArray = result_data[index].test.split(",");
				var measurement = result_data[index].measurement.split(",");
				var remarks = result_data[index].remarks.split(",");
	//
				$.each(assessmentTest, function(index1) {
					let keyValue = testArray.indexOf(assessmentTest[index1]);
					if(keyValue>=0){
						assessmentrows[index1].push({'measurement':measurement[keyValue],'remarks':remarks[keyValue]});

					}
					else{
							assessmentrows[index1].push({'measurement':'0','remarks':''});
						}
				}); 
			//	$.each(measurement, function(index1) {}); 
		  });  
 //console.log(0+"  :::  "+0+"  :: assessmentrows  ::"+JSON.stringify(assessmentrows));
		  var test=[];
		  $.each(assessmentrows, function(index,values) {
			var  measurementContainer=measurementContainer+"<tr>";
			  $.each(values, function(index0,value) {		
				  if(value.type!= null&&!test.includes(value.type)){
					  test.push(value.type);
				  measurementContainer=measurementContainer+"<td style='vertical-align:middle min-width: 200px; max-width: 500px;' rowspan='"+value.rowspan+"' class='row-index'>"+value.type+"</td>";
				  }
					 if(value.test!= null){
						  measurementContainer=measurementContainer+"<td class='row-index'>"+value.test+"</td>";
					 }

					 if(value.measurement!= null)
						 {
							measurementContainer=measurementContainer+"<td style='min-width: 100px; max-width: 100px;'  class='row-index index text-nowrap'>"+value.measurement+"</td>";
							measurementContainer=measurementContainer+"<td style='min-width: 100px; max-width: 100px;' class='row-index'>"+value.remarks+"</td>";
						//console.log("  :: assessmentrows  ::"+JSON.stringify(value));
						 }
									}); 
				 measurementContainer=measurementContainer+"</tr>"  
			  $('#tbody').append(measurementContainer);			}); 
		  
			} 

///attendance_Info
  function attendance_Info(attendance_details,calendar_event) {
		var dates_list = [];
		var now = new Date();
		$.each((attendance_details), function(list_idex) {
			dates_list.push({
				title : 'P',
				start : attendance_details[list_idex],
				description : '',
				className : 'blue main'
			});
		});
		
		var event_count=$("#notofication_spam").html();
		$.each((calendar_event), function(list_idex) {	
						dates_list.push({
				title : calendar_event[list_idex].title,
				start : GetFormattedDate(calendar_event[list_idex].event_Date),
				description : calendar_event[list_idex].message,
				className : 'success'
				
			});	
					 	if(now.toLocaleDateString() === (new Date(calendar_event[list_idex].event_Date)).toLocaleDateString())
							{
					 		event_count++;
					 		$("#notofication_spam").html(event_count);
					 		$("#notofication_body").append( '<li>' +calendar_event[list_idex].title+ '</li>');
							}
						
		});
		var dob=(new Date($("#dob").val())).getDate()+"/"+((new Date($("#dob").val())).getMonth()+1)+"/"+(new Date().getFullYear());
		  		//console.log(now.toLocaleDateString().localeCompare(dob));
  		
if( now.toLocaleDateString().localeCompare(dob)==0)
  		{
		$("#notofication_spam").html(event_count+1);
 		$("#notofication_body").append( '<li> <p style="color:red;">' +"Happy B-day "+$("#client_Name").val()+ '</p></li>');

  		}	
  
		var initialTimeZone = 'local';
		var calendarEl = document.getElementById('attendance_calendar');
		var calendar = new FullCalendar.Calendar(calendarEl, {
			plugins : [ 'interaction', 'dayGrid', 'timeGrid', 'list' ],
			events : dates_list
		});

		calendar.render();

	}
	
	
	
	
  function validateForm() {
	  if (document.forms["general_information"]["client_Name"].value == "") {
	    alert("Name must be filled out");
	    return false;
	  }
	  else if (document.forms["general_information"]["mobile_No"].value == "") {
	    alert("Mobile No must be filled out");
	    return false;
	  }
	  else if (document.forms["general_information"]["address"].value == "") {
		    alert("Address must be filled out");
		    return false;
		  }
		  
	  else if (document.forms["general_information"]["dOB"].value == "") {
		    alert("DOB must be filled out");
		    return false;
		  }
	  else if (document.forms["general_information"]["gender"].value == "") {
		    alert("Gender must be filled out");
		    return false;
		  }
	  
	  else if (document.forms["general_information"]["body_Type"].value == "") {
		    alert("Body Type must be filled out");
		    return false;
		  }

	  else
		  return true;
	}
  autosize();
  function autosize(){
	    var text = $('textarea');

	    text.each(function(){
	        $(this).attr('rows',1);
	        resize($(this));
	    });

	    text.on('input', function(){
	        resize($(this));
	    });
	    
	    function resize ($text) {
	        $text.css('height', 'auto');
	        $text.css('height', $text[0].scrollHeight+'px');
	    }
	}
  </script>


         <script src="./js/calendar_main.js" type="text/javascript"></script>
<script src="./js/day_calendar_main.js" type="text/javascript"></script>
  <!--   calender update -->
        <!--   calender update -->
            <script type="text/javascript" src="<c:url value="/calender_js/select2.min.js"/>"></script>
         <script type="text/javascript" src="<c:url value="/calender_js/moment.min.js"/>"></script>
            <script type="text/javascript" src="<c:url value="/calender_js/daterangepicker.js"/>"></script>
            <script type="text/javascript" src="<c:url value="/calender_js/global.js"/>"></script>
         <!--   calender update -->
         </body>
</html>
 