<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Hawk Admin Dashboard</title>
<%@include file="../admin/header.jsp"%>

<!-- Begin Page Content -->
<div id="dashboard" class="container-fluid">
	<!--  ICON STORE  -->
	<!-- https://www.w3schools.com/icons/fontawesome_icons_webapp.asp -->
	<!-- Page Heading -->
	<div class="d-sm-flex align-items-center justify-content-between mb-4">
		<h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
		<a href="#"
			class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
			class="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
	</div>

	<!-- Content Row -->
	<div class="row">

		<!-- Earnings (Monthly) Card Example -->
		<div class="col-xl-3 col-md-6 mb-4">
			<div class="card border-left-primary shadow h-100 py-2">
				<div class="card-body">
					<div class="row no-gutters align-items-center">
						<div class="col mr-2">
							<div
								class="text-xs font-weight-bold text-primary text-uppercase mb-1">Enquiry</div>
							<div class="h5 mb-0 font-weight-bold text-gray-800"
								id="enquiry_count">00</div>
							<div class="row no-gutters align-items-center">
								<a href="enquiry_report/" class="small-box-footer">More info
									<i class="fas fa-arrow-circle-right"></i>
								</a>
							</div>
						</div>
						<div class="col-auto">
							<i class="fa fa-lightbulb fa-2x text-gray-300"></i>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- Conversion Rate Example -->
		<div class="col-xl-3 col-md-6 mb-4">
			<div class="card border-left-success shadow h-100 py-2">
				<div class="card-body">
					<div class="row no-gutters align-items-center">
						<div class="col mr-2">
							<div
								class="text-xs font-weight-bold text-success text-uppercase mb-1">Conversion
								Rate</div>
							<div class="h5 mb-0 font-weight-bold text-gray-800"
								id="conversion_count">000</div>
							<div class="row no-gutters align-items-center">
								<a href="conversion_rate_report/" class="small-box-footer">More
									info <i class="fas fa-arrow-circle-right"></i>
								</a>
							</div>
							<div class="col">
								<div class="progress progress-sm mr-2">
									<div class="progress-bar bg-info" role="progressbar"
										style="width: 60%" aria-valuenow="50" aria-valuemin="0"
										aria-valuemax="100"></div>
								</div>
							</div>
						</div>
						<div class="col-auto">
							<i class="fas   	fa fa-thumbs-up fa-2x text-gray-300"></i>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="col-xl-3 col-md-6 mb-4">
			<div class="card border-left-success shadow h-100 py-2">
				<div class="card-body">
					<div class="row no-gutters align-items-center">
						<div class="col mr-2">
							<div
								class="text-xs font-weight-bold text-success text-uppercase mb-1">Follow
								Workout Chart</div>
							<div class="h5 mb-0 font-weight-bold text-gray-800"
								id="workout_chart_followup_count">000</div>
							<div class="row no-gutters align-items-center">
								<a href="workout_chart_followup_report/"
									class="small-box-footer">More info <i
									class="fas fa-arrow-circle-right"></i></a>
							</div>
						</div>
						<div class="col-auto">
							<i class="fas fa fa-handshake  fa-2x text-gray-300"></i>
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
							<div
								class="text-xs font-weight-bold text-primary text-uppercase mb-1">Pending
								Due</div>
							<div class="h5 mb-0 font-weight-bold text-gray-800"
								id="pending_due_count">$0,000</div>
							<div class="row no-gutters align-items-center">
								<a href="pending_due_report" class="small-box-footer">More
									info <i class="fas fa-arrow-circle-right"></i>
								</a>
							</div>
							<div class="col">
								<div class="progress progress-sm mr-2">
									<div class="progress-bar bg-info" role="progressbar"
										style="width: 50%" aria-valuenow="50" aria-valuemin="0"
										aria-valuemax="100"></div>
								</div>
							</div>
						</div>
						<div class="col-auto">
							<i class="fas fa-dollar-sign  fa-2x text-gray-300"></i>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- Pending Requests Card Example -->
		<div class="col-xl-3 col-md-6 mb-4">
			<div class="card border-left-warning shadow h-100 py-2">
				<div class="card-body">
					<div class="row no-gutters align-items-center">
						<div class="col mr-2">
							<div
								class="text-xs font-weight-bold text-warning text-uppercase mb-1">Renewal</div>
							<div class="h5 mb-0 font-weight-bold text-gray-800"
								id="renewal_count">$0,000</div>
							<div class="row no-gutters align-items-center">
								<a href="Renewal_report/" class="small-box-footer">More info
									<i class="fas fa-arrow-circle-right"></i>
								</a>
							</div>
							<div class="col">
								<div class="progress progress-sm mr-2">
									<div class="progress-bar bg-info" role="progressbar"
										style="width: 30%" aria-valuenow="50" aria-valuemin="0"
										aria-valuemax="100"></div>
								</div>
							</div>
						</div>
						<div class="col-auto">
							<i class="fas fa-dollar-sign  fa-2x text-gray-300"></i>
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
							<div
								class="text-xs font-weight-bold text-primary text-uppercase mb-1">Insanity
								assessment</div>
							<div class="h5 mb-0 font-weight-bold text-gray-800"
								id="insanity_assesment_count">00</div>
							<div class="row no-gutters align-items-center">
								<a href="insanity_assesment_report" class="small-box-footer">More
									info <i class="fas fa-arrow-circle-right"></i>
								</a>
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
			<div class="card border-left-success shadow h-100 py-2">
				<div class="card-body">
					<div class="row no-gutters align-items-center">
						<div class="col mr-2">
							<div
								class="text-xs font-weight-bold text-success text-uppercase mb-1">Client
								Report</div>
							<div class="h5 mb-0 font-weight-bold text-gray-800"
								id="client_count">000</div>
							<div class="row no-gutters align-items-center">
								<a href="client_report" class="small-box-footer">More info <i
									class="fas fa-arrow-circle-right"></i></a>
							</div>
						</div>
						<div class="col-auto">
							<i class="fas fa fa-handshake  fa-2x text-gray-300"></i>
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
							<div
								class="text-xs font-weight-bold text-primary text-uppercase mb-1">Google
								Review</div>
							<div class="h5 mb-0 font-weight-bold text-gray-800"
								id="google_reviw_count">00</div>
							<div class="row no-gutters align-items-center">
								<a href="google_review_report" class="small-box-footer">More
									info <i class="fas fa-arrow-circle-right"></i>
								</a>
							</div>
						</div>
						<div class="col-auto">
							<i class="fas fa fa-bullseye fa-2x text-gray-300"></i>
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
							<div
								class="text-xs font-weight-bold text-primary text-uppercase mb-1">Attendance</div>
							<div class="h5 mb-0 font-weight-bold text-gray-800"
								id="attendance_count">00</div>
							<div class="row no-gutters align-items-center">
								<a href="attendance_report" class="small-box-footer">More
									info <i class="fas fa-arrow-circle-right"></i>
								</a>
							</div>
						</div>
						<div class="col-auto">
							<i class="fas fa fa-bullseye fa-2x text-gray-300"></i>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div id='feedbackTab' class="col-xl-3 col-md-6 mb-4">
			<div class="card border-left-primary shadow h-100 py-2">
				<div class="card-body">
					<div class="row no-gutters align-items-center">
						<div class="col mr-2">
							<div
								class="text-xs font-weight-bold text-primary text-uppercase mb-1">Feedback</div>
							<div class="h5 mb-0 font-weight-bold text-gray-800"
								id="feedback_count">00</div>
							<div class="row no-gutters align-items-center">
								<a href="feedback" class="small-box-footer">More info
									<i class="fas fa-arrow-circle-right"></i>
								</a>
							</div>
						</div>
						<div class="col-auto">
							<i class="fa fa-edit fa-2x text-gray-300"></i>
						</div>
					</div>
				</div>
			</div>
		</div>

	</div>

	<!-- Content Row -->

	<div class="row">

		<!-- Area Chart -->
		<div class="col-xl-12 col-lg-12">
			<div class="card shadow mb-12">
				<!-- Card Header - Dropdown -->
				<div
					class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
					<h6 class="m-0 font-weight-bold text-primary">Business Flow Overview</h6>
					<div class="dropdown no-arrow">
						<a class="dropdown-toggle" href="#" role="button"
							id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true"
							aria-expanded="false"> <i
							class="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
						</a>
						<div
							class="dropdown-menu dropdown-menu-right shadow animated--fade-in"
							aria-labelledby="dropdownMenuLink">
							<div class="dropdown-header">Dropdown Header:</div>
							<a class="dropdown-item" href="#">Action</a> <a
								class="dropdown-item" href="#">Another action</a>
							<div class="dropdown-divider"></div>
							<a class="dropdown-item" href="#">Something else here</a>

						</div>
					</div>
				</div>
				<!-- Card Body -->
				<div class="card-body">
					<div class="chart-area">
						<canvas id="myAreaChart"></canvas>
					</div>
				</div>
			</div>
		</div>




		<!-- Pie Chart -->
		<!-- <div class="col-xl-4 col-lg-5">
			<div class="card shadow mb-4">
				Card Header - Dropdown
				<div
					class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
					<h6 class="m-0 font-weight-bold text-primary">Revenue Sources</h6>
					<div class="dropdown no-arrow">
						<a class="dropdown-toggle" href="#" role="button"
							id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true"
							aria-expanded="false"> <i
							class="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
						</a>
						<div
							class="dropdown-menu dropdown-menu-right shadow animated--fade-in"
							aria-labelledby="dropdownMenuLink">
							<div class="dropdown-header">Dropdown Header:</div>
							<a class="dropdown-item" href="#">Action</a> <a
								class="dropdown-item" href="#">Another action</a>
							<div class="dropdown-divider"></div>
							<a class="dropdown-item" href="#">Something else here</a>
						</div>
					</div>
				</div>
				Card Body
				<div class="card-body">
					<div class="chart-pie pt-4 pb-2">
						<canvas id="myPieChart"></canvas>
					</div>
					<div class="mt-4 text-center small">
						<span class="mr-2"> <i class="fas fa-circle text-primary"></i>
							Enquiry
						</span> <span class="mr-2"> <i class="fas fa-circle text-success"></i>
							Conversion
						</span> <span class="mr-2"> <i class="fas fa-circle text-info"></i>
							Renewal
						</span>
						  <span class="mr-2">
                      <i class="fas fa-circle text-danger"></i> Pending Due
                    </span>
						<span class="mr-2"> <i class="fas fa-circle text-warning"></i>Workout
							Chart
						</span>


					</div>
				</div>
			</div>
		</div> -->

		<!-- Area Chart -->
		<div class="col-xl-12 col-lg-12">
			<div class="card shadow mb-4">
				<!-- Card Header - Dropdown -->
				<div
					class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
					<h6 class="m-0 font-weight-bold text-primary">Calendar</h6>
					<div class="dropdown no-arrow">
						<a class="dropdown-toggle" href="#" role="button"
							id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true"
							aria-expanded="false"> <i
							class="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
						</a>
						<div
							class="dropdown-menu dropdown-menu-right shadow animated--fade-in"
							aria-labelledby="dropdownMenuLink">
							<div class="dropdown-header">Action</div>
							<a class="dropdown-item" href="calendar_report">Event</a>


						</div>
					</div>
				</div>
				<!-- Card Body -->

				<div id='calendar'></div>

			</div>
		</div>



	</div>
</div>
<!-- /.container-fluid -->

</head>
<jsp:include page="footer.jsp" />

<script>
 {
	
	 $("#dashboard").appendTo($("#parent_continer"));
	

	  
	  admin_dashbord_onload();
	  
	  
	  function AreaChartplot(account_management,enquiry_details,calendar_event,client_details)
	  {
		  var create_date=[];
			var seriesname_list = [];
			var enquiry_data_array=[];
			var conversion_data_array=[];
			
				$.each(account_management, function(index) {
					var yearAndMonth=new Date(account_management[index].create_Date);
					yearAndMonth=(yearAndMonth.getMonth());	
						{
						var object_index=create_date.findIndex(std=> std.yearAndMonth === yearAndMonth);
						if(object_index>=0)
						{
							create_date[object_index]['count']=parseInt(create_date[object_index]['count'])+1;
						}
						else
							{
							create_date.push({'yearAndMonth':yearAndMonth,"count":1});													

							}
						}
				});
				
		var staring_month = _.chain(create_date).sortBy('yearAndMonth').map(function(o) { return o.yearAndMonth ;})
		  .head()
		  .value();
		for(var i=0; i < months.length; i++){
			conversion_data_array[i]=0;
		}  
		
			$.each(create_date, function(index) {
				conversion_data_array[create_date[index].yearAndMonth]=(create_date[index].count);
		 });
			
			
			
/* 		enquiry_details	 */
			
			$.each(enquiry_details, function(index) {
				 yearAndMonth=new Date(enquiry_details[index].create_Date);
				yearAndMonth=(yearAndMonth.getMonth());	
					{
					 object_index=create_date.findIndex(std=> std.yearAndMonth === yearAndMonth);
					if(object_index>=0)
					{
						create_date[object_index]['count']=parseInt(create_date[object_index]['count'])+1;
					}
					else
						{
						create_date.push({'yearAndMonth':yearAndMonth,"count":1});													

						}
					}
			});
			
	 staring_month = _.chain(create_date).sortBy('yearAndMonth').map(function(o) { return o.yearAndMonth ;})
	  .head()
	  .value();
	for(var i=0; i < months.length; i++){
		enquiry_data_array[i]=0;
	}  
			
			$.each(create_date, function(index) {
				enquiry_data_array[create_date[index].yearAndMonth]=(create_date[index].count);
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
		  
		  
			var dates_list = [];
		  $.each((calendar_event), function(list_idex) {		
				dates_list.push({
					title : calendar_event[list_idex].title,
					start : GetFormattedDate(calendar_event[list_idex].event_Date),
					description : calendar_event[list_idex].message,
					className : 'success'
					
				});
			});
		  ///
		  		  $.each((client_details), function(list_idex) {
		  			  if(client_details[list_idex].dob)
		  				  {
		  				  try
		  				  {
		  					 var dateObject = moment(client_details[list_idex].dob, "DD/MM/YYYY");
			  					var cal_date=	(new Date(dateObject.toDate()));
		  			  		var dob=(new Date().getFullYear()+"-"+(cal_date.getMonth()+1)+"-"+cal_date.getDate());
		  			  		dates_list.push({
		  						title : "HBD-"+client_details[list_idex].client_Id+"-"+client_details[list_idex].client_Name,
		  						start : GetFormattedDate(new Date(dob)),
		  						description :"HBD",
		  						className : 'success'
		  						
		  					});
		  				  }
		  				  catch (err) {
		  					 console.log(list_idex+"   "+client_details[list_idex].dob)
		  						console.log("ERROR :  "+err);
		  							} 
		  				  }
			});

		  
		  
		  
		  
		  
			var initialTimeZone = 'local';
			var calendarEl = document.getElementById('calendar');
			var calendar = new FullCalendar.Calendar(calendarEl, {
				plugins : [ 'interaction', 'dayGrid', 'timeGrid', 'list' ],
			events : dates_list
			});

			calendar.render();
	  }

	}
  function  donetChart_plot(donetChart_data)
 {
//Pie Chart Example
  var ctx = document.getElementById("myPieChart");
  var myPieChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ["Enquiry","Conversion", "Renewal","Follow Workout Chart"],
      datasets: [{
        data:donetChart_data ,
        backgroundColor: ['#4e73df', '#1cc88a', '#36b9cc'],
        hoverBackgroundColor: ['#2e59d9', '#17a673', '#2c9faf'],
        hoverBorderColor: "rgba(234, 236, 244, 1)",
      }],
    },
    options: {
      maintainAspectRatio: false,
      tooltips: {
        backgroundColor: "rgb(255,255,255)",
        bodyFontColor: "#858796",
        borderColor: '#dddfeb',
        borderWidth: 1,
        xPadding: 15,
        yPadding: 15,
        displayColors: false,
        caretPadding: 10,
      },
      legend: {
        display: false
      },
      cutoutPercentage: 80,
    },
  });
 }
  
 </script>
</body>
</html>
