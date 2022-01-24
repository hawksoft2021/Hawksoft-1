<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
 <title>Workout Report</title>
 <%@include file="../admin/header.jsp" %>
    <!--  <link rel="stylesheet" href="./css/report_style.css"> -->
     <link rel="stylesheet" href="./css/jquery.bdt.css">
    
<body class="hold-transition sidebar-mini">
<!-- Site wrapper -->
<div class="wrapper">

  <!-- Content Wrapper. Contains page content -->
  	<form name="new_client_form">
  	</form>
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <div class="container-fluid">
      
      
      
        
        <div class="row mb-2">
        
          <div class="col-sm-6">
             <div class="form-group">
                <label for="gender">Workout Planner</label>
                <select name="gender" id="workout_planner" onchange="workout_list();"  class="form-control custom-select">
                  
                </select>
              </div>
          </div>
        
        </div>
      
      
      
      
        <div class="row mb-2">
        
          <div class="col-sm-6">
            <h1>Workout Report</h1>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item active">Workout Report</li>
            </ol>
          </div>

        </div>
      </div><!-- /.container-fluid -->
    </section>

    <!-- Main content -->
    <section class="content">
   
   
   <div class="container">
    <div class="row">
            <div class="box clearfix">
             <p class="lead"> <button  onclick="csv('bootstrap_table','Feedback_Report')" class="btn btn-info">TO CSV</button> </p>
                     <table class="table table-hover" id="bootstrap_table">
                <thead>
                <tr>
                   <th>Id</th>
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
</div>
   
   
   
   
   
   
    </section>
    <!-- /.content -->
  </div>
  <!-- /.content-wrapper -->

  </div>
  <jsp:include page="footer.jsp" />
  
  <script>

  function workout_list123()
  {
	  var planner=  $( "#workout_planner").val();
  var request = new XMLHttpRequest();
  
  console.log("planner     "+planner);
  	request.open("POST", "/Hawk/Hawk_api_01/workout_report/"+planner);
  request.send();
  request.onload = function() {
	  sessionCheck(this.response);
	  $( "#tbl_posts_body" ).empty();
    var result_data = JSON.parse(this.response).data;

    $.each(result_data, function(index) {
			
		var workoutcontine = "<tr id=''><td><span class='sn'></span>"+ (index + 1)	+ "</td>";
		workoutcontine = workoutcontine+ "<td>"+ (result_data[index].day)+ "</td>";
		workoutcontine = workoutcontine+ "<td>"+ (result_data[index].workGroup)+ "</td>";
		workoutcontine = workoutcontine+ "<td>"+ JSON.stringify(result_data[index].workout)+ "</td>";
		workoutcontine = workoutcontine+ "<td>"+"<input type='text' name='client_Name' id='"+result_data[index].id+"' class='form-control text-danger' value='"+result_data[index].rep_Time+"' >"+"</td>";
				workoutcontine = workoutcontine + "</div></div>";
		
		workoutcontine=workoutcontine+ "<td><div class='row'> <div class='col-sm-6'><button type='button' id='"+result_data[index].id+"' class='btn btn-danger remove'    onClick='delete_click(this.id)'><i class='fa fa-minius'></i>-</button></div><div class='col-sm-6'>";
		workoutcontine = workoutcontine+" <button  class='btn btn-primary remove'  id='"+result_data[index].id+"' onClick='update_click(this.id)'>Update</button></div></div>";
		workoutcontine = workoutcontine+"</td>";

		workoutcontine = workoutcontine+ "</tr>";
		$("#tbl_posts_body").append(workoutcontine);
		
	
	
    });	

  }
  }
  onload_request();
  
  
	function update_click(id)
	{
	      var request = new XMLHttpRequest();
		request.open("POST","/Hawk/Hawk_api_01/workout_update/");
				var formData = new FormData();	  	
		     	formData.append ('id',id);
		     	formData.append ('Rep_Time',$("#"+id).val());
		request.responseType = 'json';
		request.send(formData);
		request.onload = function() {
			 sessionCheck(this.response);
			alert("workout_update success...");
			workout_list();
		}
		
	}
  
 
  function delete_click(id)
  {
	  var request = new XMLHttpRequest();
  	request.open("GET", "/Hawk/Hawk_api_01/workout_delete/"+id);
		request.send();
		request.onload = function() {
			 sessionCheck(this.response);
		 	try { 
				    var result = JSON.parse(this.response).status;
		
		alert("DELETE    :: "+result);
				    if(status==="1")
				    	{
				    	alert("Unable to Delete, Workout palner Mapped to Client.....,");
				    	workout_list();
				    	}
				    else
				    	{
				    	workout_list();
				    	}
				 
		 } catch (err) {
		console.log("ERROR :  "+err);
			}  
		}
  }
  
	function onload_request()
	{
	      var request = new XMLHttpRequest();
		request.open("POST","/Hawk/Hawk_api_01/workout_module_list/");
		request.responseType = 'json';
		request.send();
		request.onload = function() {
			 sessionCheck(this.response);
			  var result = (this.response).suporting_data.workout_module;
				$("#workout_planner").append("<option selected disabled>Select one</option>");
				$.each(result, function(index) {				

					var continer="<option value='"+result[index].workout_Planner+"'>"+result[index].workout_Planner+"</option>";
					
					$("#workout_planner").append(continer);
					
				});
			
			  
		
		
		}
		
	}
  
	
	
	$("#workout_planner").empty();
  
	
  
  
  
  
    
  </script>
  
  <script src="./js/jquery.sortelements.js" type="text/javascript"></script>
  <script src="./js/jquery.bdt.min.js" type="text/javascript"></script>

  </body>
  </html>