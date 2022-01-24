<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Account Management</title>
 <%@include file="../admin/header.jsp" %>
</head>
<body class="hold-transition sidebar-mini">
	<!-- Site wrapper -->
	<div class="wrapper" id="account_management">
		<div class="content-wrapper">
    			    	<div class="card card-primary" >
							<div  id="workout_information" class="card-header" data-card-widget="collapse" data-toggle="tooltip">
								<h3 class="card-title">Account Management</h3>
							</div>

							<div class="card-body overflow-auto">
            <div class="box clearfix">
           			<form name="account_management">
				<!-- Content Wrapper. Contains page content -->
				<div class="card-body card card-primary">
					<div class="row">

						<div class="col-md-2">
							<div class="form-group">
								<label for="mode">Mode</label> 
								<select name="mode" id="mode"
									class="form-control custom-select" onchange="mode_change()">
									<option value=""  selected disabled>Select one</option>
									<option value="Revenue">Revenue</option>
									<option value="Expenses">Expenses</option>
								</select>
							</div>
						</div>
						<div class="col-md-2">
							<div class="form-group">
								<label for="client_Name">Category</label> <select
									name="category" id="category"
									class="form-control custom-select">
									<option value=""  selected disabled>Select one</option>
									<!--   <option value="New client">New client </option>
						    <option value="Renewal">Renewal </option>
						    <option value="Due Pay">Due Pay </option>
						    <option value="Others">Others </option> -->
								</select>
							</div>
						</div>


						<div class="col-md-2">
							<div class="form-group">
								<label for="payment_Type">Payment Type</label> <select
									name="payment_Type" id="payment_Type"
									class="form-control custom-select">
									<option value=""  selected disabled>Select one</option>
									<option value="Cash">Cash</option>
									<option value="Gpay">Gpay</option>
									<option value="Epay">Epay</option>
									<option value="others">others</option>
								</select>
							</div>
						</div>


						<div class="col-md-2">
							<div class="form-group">
								<label for="amount">Amount</label> <input type="text"
									name="amount" id="amount " class="form-control">
							</div>
						</div>
						<div class="col-md-4">
							<div class="form-group">
								<label for="notes">Notes</label>
								<textarea name="remarks" id="remarks" class="form-control"
									rows="2"></textarea>
							</div>
						</div>
					</div>
				</div>
				<!-- /.card-body -->

			</form>
<div class="row">
						<div class="col-12">
							<a href="#" class="btn btn-secondary">Cancel</a> <input
								type="submit" value="Submit" onclick="if(validateForm()){account_management_new_entry();}"
								class="btn btn-success float-right">
						</div>
					</div>
           
        </div>
		</div>
							<!-- /.card-body -->
						</div>				
				<div class="card card-primary" id="revenue_Sources" >
							<div  id="workout_information" class="card-header" data-card-widget="collapse" data-toggle="tooltip">
								<h3 class="card-title">Revenue Sources</h3>
							</div>
							<div class="card-body overflow-auto">
            <div class="box clearfix">
				<!-- Content Wrapper. Contains page content -->
				<div class="card-body card card-primary">
					<div class="row">
						<div class="col-md-12">
							<div class="form-group">
				 <div class="chart-pie pt-4 pb-2">
                   <!--  <canvas id="myPieChart"></canvas> -->
                    <div id="account_management_profitloss_chart"></div>
                  </div>
							</div>
						</div>
					</div>
					</div>
					</div>
					</div>
					</div>	
				<div class="card card-primary" id="account_Management_Report">
	<div  id="workout_information" class="card-header" data-card-widget="collapse" data-toggle="tooltip">

 <div class="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 class="h3 mb-0 text-gray-800">Account Management Report</h1>
            <a href="#"  onclick="exportTableToExcel('bootstrap_table', '')" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i class="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
          </div>

							<div class="card-body overflow-auto">
            <div class="box clearfix">
				<!-- Content Wrapper. Contains page content -->
				<div class="card-body card card-primary">
					<div class="row">

						<div class="col-md-2">
							<div class="form-group">
								<label for="mode">Mode</label> 
								<select name="fmode" id="fmode"
									class="form-control custom-select" onchange="mode_change()">
									<option value="0"  selected>Select one</option>
									<option value="Revenue">Revenue</option>
									<option value="Expenses">Expenses</option>
								</select>
							</div>
						</div>
						<div class="col-md-2">
							<div class="form-group">
								<label for="payment_Type">Payment Type</label> 
								<select name="fpayment_Type" id="fpayment_Type"
									class="form-control custom-select">
									<option value="0"  selected >Select one</option>
									<option value="Cash">Cash</option>
									<option value="Gpay">Gpay</option>
									<option value="Epay">Epay</option>
									<option value="others">others</option>
								</select>
							</div>
						</div>
						
						<div class="col-md-2">
					<div class="form-group">
              <label for="payment_Type">Start Date</label>
                
                                    <input class="form-control js-datepicker" id="start_date" type="text" name="start_date" readonly="readonly"> 
                                            </div>
              </div>
              		<div class="col-md-2">
						<div class="form-group">
                <label for="payment_Type">End Date</label>
                
                                    <input class="form-control js-datepicker" id="end_date" type="text" name="end_date" readonly="readonly"> 
                                    
              </div>	
              </div>
              
              <div class="col-md-4">
					<div class="form-group">
					   <label for="create_Date"><label></label></label>
					 <button class="btn btn-success float-center form-control" onclick="account_management_list_filter(false);">Filter</button>
					 					 </div>
					</div>              
          
			<div class="table table-responsive ">
				<table class="table" id="bootstrap_table">
				</table>
			</div>	
					</div>
				</div>
				<!-- /.card-body -->

           
        </div>
		</div>
							<!-- /.card-body -->
						</div>					
		</div>
		
		
		
	</div>
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	<jsp:include page="footer.jsp" />
	<script>
  function mode_change()
  {
	   
	  $('#category').empty().append('<option value=""  selected disabled>Select one</option>');
	  
  var revenue_data=["Outdoor Event","Payment","Others"];
	  var expenses_data=["Rent","Salary","SEO","Marketing","Equipment","Water","Maintenance","Campaign","Courier","Outdoor Event","Payment","Pooja","Purchases","Salary Advance","Others"];
	 var selection_val=$("#mode").val(); 
if(selection_val==="Revenue")
	{
	for(var i=0;i<revenue_data.length;i++){
		 $('#category').append("<option value="+revenue_data[i]+">"+revenue_data[i]+"</option>"); 
	}
	
	}
else
	{
	
	for(var i=0;i<expenses_data.length;i++){
		 $('#category').append("<option value="+expenses_data[i]+">"+expenses_data[i]+"</option>"); 
	}
	}
      } 
  account_management_list_request();
    $("#account_management").appendTo($("#parent_continer"));

    function cus_date_check(cus_date)
    {	  
  	  if(cus_date.checked)
  	  {
  		  document.getElementById("cus_date").disabled = false;;
  		}	  
  	  else
  		  { 	
  	 document.getElementById("cus_date").value="";
  	  document.getElementById("cus_date").disabled = true;;
  	
  		  }
    }
    
    function validateForm() {
  	  if (document.forms["account_management"]["mode"].value == "") {
  	    alert("Mode must be filled out");
  	    return false;
  	  }
  	  else if (document.forms["account_management"]["category"].value == "") {
  	    alert("Category must be filled out");
  	    return false;
  	  }
  	  else if (document.forms["account_management"]["payment_Type"].value == "") {
  		    alert("Payment_Type must be filled out");
  		    return false;
  		  }
  	 else if (document.forms["account_management"]["amount"].value == "") {
		    alert("Amount must be filled out");
		    return false;
		  }
  	 else if (document.forms["account_management"]["remarks"].value == "") {
		    alert("Remarks must be filled out");
		    return false;
		  }

  	  else
  		  return true;
  	} 

   function  account_management_list_filter(status)
    {
		   var dataSet = [];  
		   var create_date= [];  
var dateParts = $("#start_date").val().split("/");
var minDate = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]); 
 dateParts = $("#end_date").val().split("/");
var maxDate = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]);
//barChart_plot(account_management_list);
    	$.each(account_management_list, function(index) {      				  
    		var currentDate = new Date(new Date(account_management_list[index].create_date));      
      	
    		if(status)
    			{
    			acc_chart_flot(index,dataSet,create_date);
    			}
    		
    		else if($("#fmode").val()&&$("#fmode").val()===(account_management_list[index].mode)==1&&$("#fpayment_Type").val()&&$("#fpayment_Type").val()===(account_management_list[index].payment_Type)&&currentDate >= minDate && currentDate <= maxDate)
      			  {
      			acc_chart_flot(index,dataSet,create_date);
      			  }
      		 
      		 else  if($("#fmode").val()&&$("#fmode").val()===(account_management_list[index].mode)&&$("#fpayment_Type").val()&&$("#fpayment_Type").val()===(account_management_list[index].payment_Type))
 			  {
      			acc_chart_flot(index,dataSet,create_date);
       			  }
      		 else if($("#fmode").val()&&$("#fmode").val()===(account_management_list[index].mode)&&currentDate >= minDate && currentDate <= maxDate&&($("#fpayment_Type").val())=="0")
 			  {
      			acc_chart_flot(index,dataSet,create_date);
 			  }
      		 else if($("#fpayment_Type").val()&&$("#fpayment_Type").val()===(account_management_list[index].payment_Type)&&currentDate >= minDate && currentDate <= maxDate&&($("#fmode").val())=="0")
 			  {
      			acc_chart_flot(index,dataSet,create_date);
       			  }
     
      		 else if($("#fpayment_Type").val()&&$("#fpayment_Type").val()===(account_management_list[index].payment_Type)&&$("#fmode").val()=="0")
			  {
      			acc_chart_flot(index,dataSet,create_date);
      			  }
      		 else if($("#fmode").val()&&$("#fmode").val()===(account_management_list[index].mode)&&($("#fpayment_Type").val())== "0")
			  {
      			acc_chart_flot(index,dataSet,create_date);
			  }
      		 else if($("#fmode").val()=="0"&&($("#fpayment_Type").val())=="0"&&currentDate >= minDate && currentDate <= maxDate)
			  {
      			acc_chart_flot(index,dataSet,create_date);
      			  }
    	});
    	
    	 
    //	 var table = $('#bootstrap_table').DataTable();
    	// table .clear().draw();

        	if(!status) {
        		var table = $('#bootstrap_table').DataTable(); // Variable in global scope to store the data table instance
        	    table.destroy();  // Destroy old instance
        	}
         $('#bootstrap_table').DataTable( {
                     data: dataSet,
                     scrollX:        true,
                     scrollCollapse: true,
                     paging:         false,
                     columnDefs: [
                         { width: '1%', targets:0  },
                         { width: '1%', targets:1  },
                         { width: '1%', targets:2  },
                         { width: '1%', targets:3  },
                         { width: '1%', targets:4  },
                         { width: '1%', targets:5  },
                         {width: '1%', targets:6 }
                     ],
                     fixedColumns: true,
             columns: [
             { title: "Id" },
             { title: "Date",'iDataSort': 2 },
              {title: "SysDate", "bVisible": false},
                 { title: "Category" },
                 { title: "Mode" },
                 { title: "Payment_Type" },
                 { title: "Particulars" },
                 { title: "Amount" }
                 ]
         } );
         

         barChart_plot_account_dashbord(create_date);
      //   barChart_plot_account_dashbord_(create_date);

    }
   
   function  barChart_plot_account_dashbord(create_date)
   {
   
   var categoryList=[];
		var account_management_expenses_array=[];
		var account_management_revenue_array=[];


		
		//console.log("categoryList  "+JSON.stringify(create_date.length));
		//console.log("categoryList  "+JSON.stringify(create_date));
							//console.log("create_date  0   :"+JSON.stringify(create_date));
							
							
//Object.keys(create_date).sort().reduce((a, c) => (a[c] = create_date[c], a), {}));
//console.log("create_date 0  "+JSON.stringify(create_date));

 
 create_date=create_date.sort(function(a, b){return b.month_year <= a.month_year});

// console.log("create_date 1  "+JSON.stringify(create_date));
						
		$.each(create_date, function(index) {
			var date_date={};
			 date_date["label"]=create_date[index].date;
			categoryList.push(date_date);
			date_date={};
			 date_date["value"]=create_date[index].Revenue;
			account_management_revenue_array.push(date_date);
			date_date={};
			 date_date["value"]=create_date[index].Expenses;
			 account_management_expenses_array.push(date_date);
			
		});

   const dataSource = {
     chart: {
       caption: "Account Dashboard",
       subcaption: "",
       xaxisname: "Years",
       yaxisname: "",
       formatnumberscale: "1",
     /*   plottooltext:   "<b>$dataValue</b> apps were available on <b>$seriesName</b> in $label", */
       theme: "fusion",
       drawcrossline: "1"
     },
     categories: [
       {
         category: categoryList
       }
     ],
     dataset: [
       {
         seriesname: "Revenue",
         data: account_management_revenue_array
       },
       {
         seriesname: "Expenses",
        data: account_management_expenses_array
       }
     ]
   };

   FusionCharts.ready(function() {
     var myChart = new FusionCharts({
       type: "mscolumn2d",
       renderAt: "account_management_profitloss_chart",
       width: "100%",
       height: "100%",
       dataFormat: "json",
       dataSource
     }).render();
   });
   }
   
   
   function  barChart_plot_account_dashbord_(create_date)
   {
   
   var categoryList=[];
		var account_management_expenses_array=[];
		var account_management_revenue_array=[];


 create_date = create_date.sort((a, b) => b.month_year <= a.month_year);	

 
 var dd1=[];
		$.each(create_date, function(index_1) {
			account_management_revenue_array=[];
				
			var indus=create_date[index_1].indus;
		
			$.each(indus, function(index) {
				
				var date_date={};
				date_date["label"]=indus[index].category;
					categoryList.push(date_date);
			date_date={};
			 date_date["value"]=indus[index].amount;
			account_management_revenue_array.push(date_date);
			/* date_date={};
			 date_date["value"]=indus[index].amount;
			 account_management_expenses_array.push(date_date);
 */			});
		//	console.log("indus  "+JSON.stringify(account_management_revenue_array));

			 dd1.push({seriesname: create_date[index_1].date,data: account_management_revenue_array});
			
		});
		
		
		
		
		
   const dataSource = {
     chart: {
       caption: "Account Dashboard",
       subcaption: "",
       xaxisname: "Years",
       yaxisname: "",
       formatnumberscale: "1",
     /*   plottooltext:   "<b>$dataValue</b> apps were available on <b>$seriesName</b> in $label", */
       theme: "fusion",
       drawcrossline: "1"
     },
     categories: [
       {
         category: categoryList
       }
     ],
     dataset: dd1
   };

   FusionCharts.ready(function() {
     var myChart = new FusionCharts({
       type: "mscolumn2d",
       renderAt: "account_management_profitloss_chart-2",
       width: "100%",
       height: "100%",
       dataFormat: "json",
       dataSource
     }).render();
   });

   }
   function acc_chart_flot(index,dataSet,create_date)
   {  
	   var columns=[];
	      columns.push(index+1);
	      columns.push(GetFormattedDateDDMMYY(new Date(account_management_list[index].create_date)));
	     columns.push(moment((new Date(account_management_list[index].create_date))).format('YYYY-MM-DD'));
	       columns.push(account_management_list[index].category);
	        columns.push(account_management_list[index].mode);
	       columns.push(account_management_list[index].payment_Type);
	         columns.push(account_management_list[index].remarks);
	     columns.push("<button  style='width: 100px;' type='button' class='btn btn-success remove glyphicon '>"+account_management_list[index].amount+"</button>");
	      dataSet.push(columns);	      
			var cr_date=new Date(account_management_list[index].create_date);
			var twoDigitYear = cr_date.getFullYear().toString().substr(-2);
		    var	date_=months[cr_date.getMonth()]+"-"+twoDigitYear;
		    cr_date = cr_date.getTime();
		  //  console.log("account_management_list  "+JSON.stringify(account_management_list[index]));
				var object_index=create_date.findIndex(std=> std.date === date_);			 
				if(object_index>=0)
				{
				var object_index1=create_date[object_index]["indus"].findIndex(std=> std.category ===account_management_list[index].category);										
						
					if(object_index1>=0)
					{ 
						create_date[object_index]["indus"][object_index1].amount=parseInt(create_date[object_index]["indus"][object_index1].amount)+account_management_list[index].amount;
					}
					else
						{
						create_date[object_index]["indus"].push({category:account_management_list[index].category,amount:account_management_list[index].amount});
						}
				if(account_management_list[index].mode=="Revenue")
						{
							create_date[object_index]["Revenue"]=parseInt(create_date[object_index]["Revenue"])+account_management_list[index].amount;								
						}
						else if(account_management_list[index].mode=="Expenses")
							{
							create_date[object_index]["Expenses"]=parseInt(create_date[object_index]["Expenses"])+account_management_list[index].amount;
							}
					}
				else
					{
					if(account_management_list[index].mode=="Revenue")
					{
						create_date.push({'date':date_,'Revenue':account_management_list[index].amount,'Expenses':0,month_year:cr_date,indus:[{category:account_management_list[index].category,amount:account_management_list[index].amount}]});													

					}
					else if(account_management_list[index].mode=="Expenses")
						{
						create_date.push({'date':date_,'Revenue':0,'Expenses':account_management_list[index].amount,month_year:cr_date,indus:[{category:account_management_list[index].category,amount:account_management_list[index].amount}]});		
						}
					}     
	      
   } 
    </script>
   <script type="text/javascript" src="https://cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.js"></script>
  <script type="text/javascript" src="https://cdn.fusioncharts.com/fusioncharts/latest/themes/fusioncharts.theme.fusion.js"></script>

</body>
</html>