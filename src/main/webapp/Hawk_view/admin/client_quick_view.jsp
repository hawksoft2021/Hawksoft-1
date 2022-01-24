<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
 <title>Client Quick View</title>
 <%@include file="../admin/header.jsp" %>

    <!--  <link rel="stylesheet" href="./css/report_style.css"> -->

    
<body class="skin-blue sidebar-mini sidebar-collapse">
<!-- Site wrapper -->

<div class="wrapper" id="client_quick_view">

  <!-- Content Wrapper. Contains page content -->
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
               <table class="table table-hover overflow-auto" id="bootstrap_table">
               
            </table>
        </div>
    </div>

    </div>
    			    	
					
					<div class="card card-primary" >
							<div  id="workout_information" class="card-header" data-card-widget="collapse" data-toggle="tooltip">
								<h3 class="card-title">Insanity Assessment Module Overview</h3>
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


							<!-- /.card-body -->
						</div>
						
						
						
							<div class="card card-primary" >
							<div  id="workout_information" class="card-header" data-card-widget="collapse" data-toggle="tooltip">
								<h3 class="card-title">Workout Overview</h3>
								<a href="#"  onclick="exportTableToExcel('bootstrap_table_workout_by_client', 'members-data');" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i class="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
								
							</div>

							<div class="card-body overflow-auto">
            <div class="box clearfix"> 
           <table class="table table-hover" id="bootstrap_table_workout_by_client">
                <thead>
                <tr>
                 <th> Date</th>
                  <th> Workout_Planner</th>
                    <th>Day</th>
                    <th> Workout</th>
                   <th>Expected Reps/Time</th>
					<th>Completed Reps/Time</th>
                </tr>
                </thead>
                <tbody id="client_workout_body">
                
    
                </tbody>
            </table>
            </div>
        </div>
		</div>
		<div class="card card-primary" >
							<div  id="workout_information" class="card-header" data-card-widget="collapse" data-toggle="tooltip">
								<h3 class="card-title">Workout Information</h3>
							</div>

							<div class="card-body overflow-auto">
            <div class="box clearfix">
           <table class="table table-hover" id="client_workout_bootstrap_table">
                <thead>
                <tr>
                   <th>Id</th>
                  <th> Client Module</th>
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
							<!-- /.card-body -->
						</div>
		
		
							<div class="card card-primary" >
							<div  id="workout_information" class="card-header" data-card-widget="collapse" data-toggle="tooltip">
								<h3 class="card-title">Attendance Calendar</h3>			
							</div>

							<div class="card-body overflow-auto">
            <div class="box clearfix"> 
        
           <div  class="panel-body">
									<div id='attendance_calendar'></div>
								</div>
           
           
           
           
            </div>
        </div>
		</div>

							<!-- /.card-body -->
						</div>
						
						
    </section>
</div>
   
</div>
  <jsp:include page="footer.jsp" />
  
  <script>
  var workout_client_id;

  client_quick_view_list_onload_request();
	  $("#client_quick_view").appendTo($("#parent_continer"));
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
					// console.log(keyValue+"  :::  "+testArray+"  :: value  ::"+JSON.stringify(assessmentTest[index1]));
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
							measurementContainer=measurementContainer+"<td style='min-width: 80px; max-width: 80px;'  class='row-index index text-nowrap'>"+value.measurement+"</td>";
							measurementContainer=measurementContainer+"<td style='min-width: 120px; max-width: 120px;' class='row-index'>"+value.remarks+"</td>";
						//console.log("  :: assessmentrows  ::"+JSON.stringify(value));
						 }
									}); 
				 measurementContainer=measurementContainer+"</tr>"  
				//console.log(0+"  :::  "+0+"  :: value  ::"+JSON.stringify(values));
			  $('#tbody').append(measurementContainer);
			}); 
		  
		  //console.log("resultdata  : "+ JSON.stringify(rowDataArray)); 
		  
	/* 	  ; */
		  
			} 
	  
	  
	  
	 function workout_list_by_client(workout_list)
	  {
		  $( "#client_workout_body" ).empty();
		         $.each(workout_list, function(index) {		 				
		 				var expected_count = workout_list[index].expected.split(",");
		 				var completion_count = workout_list[index].completion.split(",");
		 				var workout_count =workout_list[index].workout.split(",");
		 				 var workoutcontiner = "<tr>";
		 				
		 				var mydate = new Date(workout_list[index].create_date);
		 				workoutcontiner=workoutcontiner+"<td align='center' rowspan='"+expected_count.length+"'>"+(GetFormattedDateDDMMYY(mydate))+"</td>";
		 				workoutcontiner=workoutcontiner+"<td align='center' rowspan='"+expected_count.length+"'>"+(workout_list[index].workout_Planner)+"</td>";
		 				workoutcontiner=workoutcontiner+"<td align='center' rowspan='"+expected_count.length+"'>"+(workout_list[index].day)+"</td>";

		 				 /*  <td  rowspan="2">January</td>
		 				    <td  rowspan="2">January</td>
		 				    <td>$100</td>
		 				    <td>$50</td>
		 				  </tr>
		 				  <tr>
		 				    <td>$80</td>
		 				    <td>$870</td> */
		 				   
		 				var temp;
		 				$.each(expected_count, function(index) {
		 					temp = temp+ "<td>"+(workout_count[index])+"</td>";
		 					temp = temp+ "<td>"+(expected_count[index])+"</td>"; 
		 					temp = temp+ "<td>"+(completion_count[index])+"</td>"; 
		 					temp = temp+ "</tr><tr>";
		 					
		 				});
		 				
// 		 				workoutcontiner=workoutcontiner+"<td align='center' rowspan='"+expected_count.length+"'>"+(workout_list[index].workout)+"</td>";
		 				
		 				workoutcontiner=workoutcontiner+temp;	
		 				//temp = temp+"</td> ";
		 			
		 				workoutcontiner=workoutcontiner+"</tr>";
						$("#client_workout_body").append(workoutcontiner);
		         });
		         $("#bootstrap_table_workout_by_client").dataTable();
		 
	  }
  </script>
  </body>
  </html>