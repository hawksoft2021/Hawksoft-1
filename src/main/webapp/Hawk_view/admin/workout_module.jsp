<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
 <title>Workout Module</title>
 <%@include file="../admin/header.jsp" %>
<body class="hold-transition sidebar-mini">

<!-- Site wrapper -->
<div class="wrapper" id="workout_module">

  <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>Workout Module</h1>
          </div>
        </div>
      </div><!-- /.container-fluid -->
    </section>

    <!-- Main content -->
    <section class=" form content">
      <div class="row">
        <div class="col-md-12">
          <div class="card card-primary">
            <div class="card-header">
              <h3 class="card-title">Workout Information  </h3>

              <div class="card-tools">
                <button type="button" class="btn btn-tool" data-card-widget="collapse" data-toggle="tooltip" title="Collapse">
                  <i class="fas fa-minus"></i></button>
              </div>
            </div>
            <div class="card-body">
            <div class="row">
                
                <div class="col-md-3">
               <div class="form-group">
                <label for="wOD">Workout Module </label>
                  <select name="client_module" onchange="days_count(this.val())" id="client_module"class="form-control custom-select">
                  <option selected disabled>Select one</option>
                  <option class="option" value="WOD">WOD</option>
                            <option class="option" value="Warm ups">Warm ups</option>
						  <option class="option" value="Stretching">Stretching</option>
						  <option class="option" value="Begineer Workout">Begineer Workout</option>
						  <option class="option" value="Intermediate workout">Intermediate workout</option>
						  <option class="option" value="Advanced workout">Advanced workout</option>		    
                </select>
                
                
              </div>
              </div>
                
                    
               <div class="col-md-3">
               <div class="form-group">
                <label for="workout_Planner">Workout Planner</label>
                <input type="text" name="workout_Planner" id="workout_Planner" class="form-control">
              </div>
              </div>
              
                  
           

              
               <div class="col-md-3">
               <div class="form-group row">
               <div class="col-md-12">
                <label for="">Action</label>
              </div>
              <div class="col-md-3">
<button type="button" class="btn btn-primary add-new" id="btn_master_add"><i class="fa fa-plus"></i></button></div>



              </div>
              </div>
              
                          </div>
                  
            </div>
            
            <!-- /.card-body -->
          </div>
          <!-- /.card -->
          
          <div id="workout_container">
          </div>
        </div>
      </div>
         <div class="row">
            <div class="box clearfix">
                     <table class="table table-hover" id="workout">
            </table>
        </div>
    </div>
    	<div class="card card-primary" >
							<div  id="workout_information" class="card-header" data-card-widget="collapse" data-toggle="tooltip">
								<h3 class="card-title">Workout Information <label id="workouttitle" class="btn btn-success"></label></h3>
							</div>
  <div class="card-tools">
                <button type="button" class="btn btn-tool" data-card-widget="collapse" data-toggle="tooltip" title="Collapse">
                  <i class="fas fa-minus"></i></button>
              </div>
							<div class="card-body overflow-auto " style="display: none;">

							  <div class="row">
            <div class="box clearfix">
             <p class="lead"> <button  onclick="csv('bootstrap_table','bootstrap_table_workout')" class="btn btn-info glyphicon glyphicon-download-alt">TO CSV</button> </p>
                     <table class="table table-hover" id="bootstrap_table_workout">
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
							
							
							
							
							<!-- /.card-body -->
						</div>
    
    
   
    
    
    </section>
    <!-- /.content -->
  </div>
  <!-- /.content-wrapper -->

  </div>
  <jsp:include page="footer.jsp" />

  <script>
  var workout_module_list=[];
  $(document).ready( function () {
	  $('#bootstrap_table').DataTable( {} );
  });
	 var workgroup_data_list=[];
	 var workout_data_list=[];
	 var workout_Planner_list=[];

	 

  function days_count(client_module)
  {
	  var days_count=0;
  
	  if(client_module==('WOD'))
	  {
		  days_count=1;
	  }
	  else
		  {
		  days_count=30;
		  }
	  

	  var option_container="<option selected disabled>Select one</option>";
	  
	  for(var i=1;i<=days_count;i++)
	  {
		  option_container=option_container+"<option class='option' value='"+i+"'>"+i+"</option>";
	  }

	  return option_container;
  }
 


  
/*   $("#btn_master_remove").click(function() { 

	  $("#day_"+$("#day").val()).remove();
  });  */

  
	  $("#btn_master_add").click(function() { 

		  
		 //    $(this).fadeOut(); 
		 var workout_days=$("#day_continer").children('div').length;	
		  if($("#workout_Planner").val() && $("#client_module").val())
			{
		if(workout_days==0)
		 {
			 var continer=" <div id='day_' class='card card-primary'><div class='card-header'><h3 class='card-title'>Workout Information</h3>";
			 continer=continer+"<div class='card-tools'><button type='button' class='btn btn-tool' data-card-widget='collapse' data-toggle='tooltip' title='Collapse'><i class='fas fa-minus'></i>";
		     	 continer=continer+"</button></div></div></div><div class='card-body'><div id='day_continer'></div>";
				 continer=continer+"<div class='row'><div class='col-12'><a href=''#' class='btn btn-secondary'>Cancel</a>";
				 continer=continer+"<input type='submit' value='Submit' onclick='new_client();' class='btn btn-success float-right'>";
				 continer=continer+"</div></div>";
				 continer=continer+"</div>";
		

			 $("#workout_container" ).append(continer);
			 workout_header(workout_days);
			 add_sub_work(1);
		 }
		else
			{
			add_sub_work(workout_days);
			}
		  
			}
		  else
			  {
			  alert("Fill All data...");
			  }
	  
      }); 
  
     function workout_header()
     {
    	
	
		                var sub_workout="<div class='row'><div class='col-md-2 form-group'><label for='Workout Day'>Day</label></div>";
			   sub_workout=sub_workout+"<div class='col-md-2 form-group'><label for='Work Out'>Work Group</label></div>";
			   sub_workout=sub_workout+"<div class='col-md-2 form-group'><label for='Work Out'>Work Out</label></div>";
			  sub_workout=sub_workout+"<div class='col-md-2 form-group'><label for='Rep Time'>Rep/Time </label></div>";
			  sub_workout=sub_workout+"<div class='col-md-2 form-group'><label for='Action'>Action</label></div>";
			  sub_workout=sub_workout+"<div class='col-md-2 form-group'></div></div>";
			  $("#day_continer").append(sub_workout);
		
		 
     }
  function add_sub_work(selected_day)
{
	  workout_module_list.push("sub_work_row_"+(selected_day));
	   var sub_workout="<div><form name='sub_work_row_"+selected_day+"'><div id='sub_work_row_"+selected_day+"' class='row'><div class='col-md-2 form-group'><select  id='day' name='day' class='form-control custom-select'>"+days_count($("#client_module").val())+"</select></div>";
	   sub_workout=sub_workout+"<div class='col-md-2 form-group'><input class='workGroup form-control form-control-navbar' id='workGroup"+$("#day_continer").children('div').length+"' name='work_group'  placeholder='Work Group' aria-label='Search'></div>";
	   sub_workout=sub_workout+"<div class='col-md-2 form-group'><input class=' workout form-control form-control-navbar' id='workout"+$("#day_continer").children('div').length+"' name='workout'  placeholder='Workout' aria-label='Search'></div>";
	  sub_workout=sub_workout+"<div class='col-md-2 form-group'><input type='text' name='rep_Time' class='form-control'></div>";
  sub_workout=sub_workout+"<div class='col-md-2 form-group'><button type='button' class='btn btn-danger remove' onclick='remove_sub_work("+$("#day_continer").children('div').length+")' id='btn_master_remove_"+$("#day_continer").children('div').length+"'><i class='fa fa-minius'></i>-</button></div>";	
	  sub_workout=sub_workout+"<div class='col-md-2 form-group'></div></div></form></div>";
	  
	  var len=$("#day_continer").children('div').length;
	 	  $("#day_continer").append(sub_workout);
	 	   	
	 
	 	 autocomplete(document.getElementById(("Work_group"+len)), workgroup_data_list);
		  autocomplete(document.getElementById(("workout"+len)), workout_data_list);
	  }  
  function remove_sub_work(selected_day)
  {
	  $("#sub_work_row_"+(selected_day)).remove();
	  workout_module_list.splice(workout_module_list.indexOf('sub_work_row_'+(selected_day)),1);
  	  }  
  function new_client()
  {
  var request = new XMLHttpRequest();
  var jsonObject = [];
  var null_status=0;
  
  if($("#workout_Planner").val() && $("#client_module").val())
	  {
	  $.each(workout_module_list, function(index,data) {
		  if(null_status==0)
		  {
			  
		  
		 	var formElement = document.forms.namedItem(data);
		 	  var data_result = {};
		 	  
		 	 data_result["workout_Planner"] = $("#workout_Planner").val();
		 	 data_result["client_module"] = $("#client_module").val();

			    $.each(formElement, function(i, field){
			    	if(field.name.length){
			    		if(field.value.length){
			    			data_result[field.name] = field.value;
			    		}
			    		else
			    			{
			    			 null_status=1;
			    			 return false;
			    			}
			    		
			    	}
			    });
			    jsonObject.push(data_result);
		  }
		  else
			  {
			  return false;
			  }
		 }); 
	  
	  if( null_status==0)
		  {
		 	var formData = new FormData();
			formData.append ('object_list',JSON.stringify(jsonObject));
		  	request.open("POST", base_path+"/Hawk_api_01/workout_module_entry/");
		  request.responseType = 'json';
		  request.send(formData);
		  request.onload = function() {
			  sessionCheck(this.response);
		report_list_request();
		$( "#day_continer").empty();
		$( "#workout_container").empty();
		
		workout_module_list=[];
		  	  }
		  }
	  else
	  {
		  alert("Fill All data...");
	  }
		  }
	
  else{
	  alert("Fill All data...");
	  }
	
  }
  
  
  function report_list_request()
  {
	  $( "#enquiry_list" ).empty();
  var request = new XMLHttpRequest();
  	request.open("POST", base_path+"/Hawk_api_01/workout_module_list/");
  request.send();
  request.onload = function() {
	  sessionCheck(this.response);
	//  alert(this.response);
    var result = JSON.parse(this.response).suporting_data.workout_module;
   var result1 = JSON.parse(this.response).suporting_data.workout_list;
	var dataSet =[]; 			
	$.each(result, function(index) {
		var columns=[];
		 columns.push("<form><td>"+(index+1));
		columns.push(result[index].client_module);
		columns.push("<input type='text' id='workout_Planner' class='form-control text-danger' value='"+result[index].workout_Planner+"' readonly>");
		columns.push("<div class='row'> <div class='col-sm-3'><button type='button' id='"+result[index].workout_Planner+"' class='btn btn-danger remove glyphicon glyphicon-trash'    onClick='delete_click(this.id)'>-</button></div> <div class='col-sm-4'> <button type='button' id='"+result[index].workout_Planner+"' class='btn btn-success glyphicon glyphicon-eye-open'    onClick='workout_list(this.id)'>View</button></div></div><form>");
		columns.push("");
 	workout_Planner_list.push(result[index].workout_Planner);	
		 dataSet.push(columns);	
		
		
		
 	
		    
	 	$.each(result1, function(index) {
	 		workout_data_list.push(result1[index].workout);
	 	});
	 
	 	workgroup_data_list.push("W");
	 	workgroup_data_list.push("W+G");
	 	workgroup_data_list.push("W+M");
	 	workgroup_data_list.push("G");
	 	workgroup_data_list.push("G+G");
	 	workgroup_data_list.push("G+M");
	 	workgroup_data_list.push("M");
	 	workgroup_data_list.push("W+G+M");
		
});
	  autocomplete(document.getElementById("workout_Planner"), workout_Planner_list);
	  $('#workout').DataTable( {
          data: dataSet,
        
  columns: [
  { title: "Id"}, 
        { title: "Client Grouping"},
			{ title: "Workout Planner"},
			{ title: "Action"}
      ]
} ); 
	  
	}
  }
  report_list_request();
 
  function delete_click(id)
  {
	  var request = new XMLHttpRequest();
  	request.open("GET", base_path+"/Hawk_api_01/workout_panner_delete/"+id);
		request.send();
		request.onload = function() {
			 sessionCheck(this.response);
			try { 	
				    var result = (JSON.parse(this.response).status);
				    if(result.includes("0"))
				    	{
				    	alert("Unable to Delete, Workout palner Mapped to Client.....,");
				    	}
				    else
				    	{
				    	alert("success to Delete.....,");
				    	  report_list_request();
				    	}
				 
		} catch (err) {
		console.log("ERROR :  "+err);
			} 
		}
  }
  
  function delete_click_workout(id)
  {
	  var request = new XMLHttpRequest();
  	request.open("GET", base_path+"/Hawk_api_01/workout_delete/"+id);
		request.send();
		request.onload = function() {
			 sessionCheck(this.response);
		 	try { 
				    var result = JSON.parse(this.response).status;
				    if(status==="0")
				    	{
				    	alert("Unable to Delete, Workout palner Mapped to Client.....,");
				    	workout_list(id);
				    	}
				    else
				    	{
				    	alert("success to Delete.....,");
				    	workout_list(id);
				    	}
				 
		 } catch (err) {
		console.log("ERROR :  "+err);
			}  
		}
  }
  
  
  function workout_list(planner)
  {

	  $("#workouttitle").text(planner);
	  
	 if($('#workout_information').collapse('show'))
	 {

		 $( "#workout_information").click();
	 }
	  
	   
	//  alert($( "#workout_information"));
	  
	  
  var request = new XMLHttpRequest();
  	request.open("POST", base_path+"/Hawk_api_01/workout_Planner_base_report/"+planner);
  request.send();
  request.onload = function() {
	  sessionCheck(this.response);
	  $( "#tbl_posts_body" ).empty();
    var result_data = JSON.parse(this.response).data;

    $.each(result_data, function(index) {	
    	//console.log(JSON.stringify(result_data[index]));
    	var workoutcontine = "<tr><td><label id='id'  name='"+(result_data[index].id)+"'    class='sn'>"+(index + 1)+"</label> </td>";
    workoutcontine = workoutcontine+ "<td> <select  id='day"+index+"' name='day' class='form-control custom-select'>"+days_count(result_data[index].client_module)+"</select></td>";

  		  		workoutcontine = workoutcontine+ "<td> <input type='text'  class='form-control text-danger' id='work_group"+index+"'  name='work_group' value="+ (result_data[index].work_group)+ "></td>";
  		workoutcontine = workoutcontine+ "<td>  <textarea type='text'   style='min-width: 200px;' class='form-control text-danger' id='workout"+index+"' name='workout' >"+(result_data[index].workout)+"</textarea></td>";
  		workoutcontine = workoutcontine+ "<td>"+"<input type='text'   id='rep_Time"+index+"' name='rep_Time' class='form-control text-danger ' value='"+result_data[index].rep_Time+"' >"+"</td>";
  				workoutcontine = workoutcontine + "</div></div>";
  		
  		workoutcontine=workoutcontine+ "<td><div id='workout_Planner' name='"+planner+"' class='row'> <div class='col-sm-6'><button type='button' id='"+result_data[index].id+"' class='btn btn-danger remove glyphicon glyphicon-trash'    onClick='delete_click_workout(this.id)'><i class='fa fa-minius'>-</i></button></div><div class='col-sm-6'>";
  		workoutcontine = workoutcontine+" <button  class='btn btn-primary remove glyphicon glyphicon-pencil'  id='"+(index + 1)+"' onClick='update_click(this.id)'>Update</button></div></div>";
  		workoutcontine = workoutcontine+"</td>";

  		workoutcontine = workoutcontine+ "</tr>";
  		$("#tbl_posts_body").append(workoutcontine);
  	  $('#'+('day'+index)).val(result_data[index].day);		 
      
  	
    });	

  }
  }
	function update_click(id)
	{
	      var request = new XMLHttpRequest();
		request.open("POST",base_path+"/Hawk_api_01/workout_update/");
				var formData = new FormData();	  	
		     	formData.append ('id',id);
		     	formData.append ('Rep_Time',$("#"+id).val());
		request.responseType = 'json';
		request.send(formData);
		request.onload = function() {
			 sessionCheck(this.response);
			alert("workout_update success...");
			workout_list(id);
		}
		
	}
	
	
	function workout_list_update(row)
	{
		//.cells.item(2).innerHTML

		var data_val=(document.getElementById("bootstrap-table").rows[row]); 
		alert(data_val.cells.length)
		
		  var data_field=data_val.cells.item(2).innerHTML;
		   console.log(2+"   ::    "+$(data_field).attr('id')+"  :: "+ $(data_field).val());
	
		   $.each(data_val.cells, function(index) {
			
					  var data_field=data_val.cells.item(index).innerHTML;
					
					 	//formData.append ($(data_field).id(),  $(data_field).val());					   
					   
					   
				  
		    
			   
			   //console.log(index+"   ::    "+$(data_field).id()+"  :: "+ $(data_field).val());
			   
			   
			   
		   });	

	}
	
	
	  
	function update_click(row)
	{
	      var request = new XMLHttpRequest();
		request.open("POST",base_path+"/Hawk_api_01/master_workout_update/");
				var formData = new FormData();	  
				var data_val=(document.getElementById("bootstrap_table_workout").rows[row]); 
			
				   $.each(data_val.cells, function(index) {
					   
					  var data_field=data_val.cells.item(index).innerHTML;
					  if($(data_field).attr('id')!=null){
						  if($(data_field).attr('id').includes('id')||$(data_field).attr('id').includes('workout_Planner'))
							{
							formData.append ($(data_field).attr('id'),  $(data_field).attr('name'));
							
							   console.log($(data_field).attr('id')+" ::  "+$(data_field).attr('name'));
							}
						  
						else
							{
							var dc_id=$("#"+($(data_field).attr('id'))).val();
							formData.append ($(data_field).attr('name'), dc_id);	
							 			}
						  
					  }
					
					 					   
					   
				   });	
		  	
		     	
		     	request.responseType = 'json';
		request.send(formData);
		request.onload = function() {
			 sessionCheck(this.response);
			alert("workout_update success...");

			workout_list(formData.get("workout_Planner"),null);
		}
		
	}
	
	
	
	
	
/* 	var data_val=(document.getElementById("bootstrap-table").rows[row].cells.item(2).innerHTML); 
	alert($(data_val).val())

	   $.each(data_val, function(index,data) {
		   
		   console.log(index+"   ::    "+data);
		   
	   });	

} */
$("#workout_module").appendTo($("#parent_continer"));
  </script>
  
  
  
  </body>
  </html>