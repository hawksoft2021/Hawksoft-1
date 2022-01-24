<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
 <title>Account Management</title>
  <%@include file="../admin/header.jsp" %>
<body class="hold-transition sidebar-mini">
<!-- Site wrapper -->
<div class="wrapper" id="account_management">

  <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>Account Management</h1>
          </div>
        </div>
      </div><!-- /.container-fluid -->
    </section>

    <!-- Main content -->
    <section class=" form content">
    <form name="account_management">
      <div class="row">
        <div class="col-md-12">
          <div class="card card-primary">
            <div class="card-header">
              <h3 class="card-title">Account Management</h3>

              <div class="card-tools">
                <button type="button" class="btn btn-tool" data-card-widget="collapse" data-toggle="tooltip" title="Collapse">
                  <i class="fas fa-minus"></i></button>
              </div>
            </div>
            <div class="card-body">
            <div class="row">
            
                 <div class="col-md-2">
               <div class="form-group">
                <label for="mode">Mode</label>
            <select name="mode" id="mode" class="form-control custom-select" onchange="mode_change()">
                  <option selected disabled>Select one</option>
						    <option value="revenue">Revenue </option>
						    <option value="expenses">Expenses</option>
                </select>
              </div>
              </div>
             <div class="col-md-2">
              <div class="form-group">
                <label for="client_Name">Category</label>
            
                    <select name="category" id="category" class="form-control custom-select">
                  <option selected disabled>Select one</option>
						  <!--   <option value="New client">New client </option>
						    <option value="Renewal">Renewal </option>
						    <option value="Due Pay">Due Pay </option>
						    <option value="Others">Others </option> -->
                </select>
              </div>
              </div>
          
              
                            <div class="col-md-2">
               <div class="form-group">
                 <label for="payment_Type">Payment Type</label>
                <select name="payment_Type" id="payment_Type" class="form-control custom-select">
                  <option selected disabled>Select one</option>
						   <option value="Cash">Cash </option>
						    <option value="Gpay">Gpay </option>
						     <option value="Epay">Epay </option>
						   <option value="others">others </option>
                </select>
              </div>
              </div>
             
              
               <div class="col-md-2">
               <div class="form-group">
                <label for="amount">Amount</label>
                <input type="text" name="amount" id="amount " class="form-control">
              </div>
              </div>
	   <div class="col-md-4">
               <div class="form-group">
                <label for="notes">Notes</label>
                       <textarea name="remarks" id="remarks" class="form-control" rows="2"></textarea>
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
      <div class="row">
        <div class="col-12">
          <a href="#" class="btn btn-secondary">Cancel</a>
          <input type="submit" value="Submit" onclick="account_management_entry();" class="btn btn-success float-right">
        </div>
      </div>
      
      
						<div id='insanity_div'  class="card card-primary" >
							<div  class="card-header " data-card-widget="collapse" data-toggle="tooltip">
								<h3 class="card-title"> Revenue & Expenses Information</h3>
							</div>

							<div class="card-body overflow-auto" >
  <select name="month" id="month" class="form-control custom-select" onchange="month_change()">
                  
                </select>
								

<div class="row" id="revenue_expenses_chart" class="panel-body">


</div>	

							</div>
							<!-- /.card-body -->
						</div>
						
											<div id='insanity_div'  class="card card-primary" >
							<div  class="card-header " data-card-widget="collapse" data-toggle="tooltip">
								<h3 class="card-title"> Revenue & Expenses</h3>
							</div>

							<div class="card-body overflow-auto" >
<!--   <select name="month" id="month" class="form-control custom-select" onchange="month_change()">
                  
                </select> -->
                <input class="form-control js-datepicker" type="text" name="from_date">
				<input class="form-control js-datepicker" type="text" name="to_date">		

<div class="row" id="revenue_expenses_all_chart" class="panel-body">
<div class="row" id="revenue_expenses_all_chart1" class="panel-body">

</div>	

							</div>
							<!-- /.card-body -->
						</div>	
						
						
						
						
						
						
						
<!--     <div id="chartContainer" style="height: 370px; width: 100%;"></div> -->
    <div class="row">
            <div class="box clearfix">
                     <table class="table table-hover" id="bootstrap-table">
                <thead>
                <tr>
                   <th>Id</th>
                    <th>Date</th>
                    <th>Category</th>
                    <th>Mode</th>
                       <th>Remarks</th>
                       <th>Amount</th>
                </tr>
                </thead>
                <tbody id="enquiry_list">
                
    
                </tbody>
            </table>
        </div>
    </div>
    
    

    
    </section>
    <!-- /.content -->
  </div>
  <!-- /.content-wrapper -->
 
  </div>
  <jsp:include page="footer.jsp" />
<script src="https://canvasjs.com/assets/script/jquery-1.11.1.min.js"></script>
<script src="https://canvasjs.com/assets/script/jquery.canvasjs.min.js"></script>
  
  <script>
  
  var month_data_list=[];
	var create_date_all=[];
	var seriesname_list_all = [];
	var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  
  
  function mode_change()
  {
	   
	  $('#category').empty().append('<option selected disabled>Select one</option>');
	  
  var revenue_data=["New Client","Renewal","Due Pay","Outdoor Event","Payment","Others"];
	  var expenses_data=["Rent","Salary","SEO","Marketing","Equipment","Water","Maintenance","Campaign","Courier","Outdoor Event","Payment","Pooja","Purchases","Salary Advance","Others"];     
	         
   
	  
	 var selection_val=$("#mode").val(); 
if(selection_val==="revenue")
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
	  
	  
function month_change()
{
	  var assement_type_index = month_data_list.findIndex(obj => obj.month==$("#month").val());		
	data_plot(month_data_list[assement_type_index].data);
	  }
	  

/*       $(document).ready( function () {
          $('#bootstrap-table').bdt({
              showSearchForm: 0,
              showEntriesPerPageField: 0
          });
      }); */
      account_management_report_list_request();
      
      
  
      
      
  	function data_plot(result_data_all) {
    	      
		var create_date=[];
		var seriesname_list = [];
		var expenses_data_array=[];
		var revenue_data_array=[];

			$.each(result_data_all, function(index,result_data) {	
				
				
								
				
				  var assement_type_index = seriesname_list.findIndex(obj => obj.seriesname==result_data.mode);		
				  var measurement_data_json_values = {};
				  
				if(result_data.mode.includes('revenue'))
					{
					measurement_data_json_values ["value"] =result_data.amount;	
					revenue_data_array.push(measurement_data_json_values);
					measurement_data_json_values = {};
					measurement_data_json_values ["value"] ='';
					expenses_data_array.push(measurement_data_json_values);
			}
				else
					{
					measurement_data_json_values ["value"] =result_data.amount;	
					expenses_data_array.push(measurement_data_json_values);
					measurement_data_json_values = {};
					measurement_data_json_values ["value"] ='';
					revenue_data_array.push(measurement_data_json_values);
					
					}
			    
				if (assement_type_index < 0) {
			 	 measurement_data_json = {}
			 	measurement_data_json ["seriesname"] =result_data.mode;
			measurement_data_json ["data"] =[];
			seriesname_list.push(measurement_data_json);		
					}
				
				var date = {};
				date ["label"] =(new Date(result_data.create_date)).toDateString()+"  :  "+result_data.category;
				//console.log(date ["label"])
				create_date.push(date);
			
		});
		  var assement_type_index = seriesname_list.findIndex(obj => obj.seriesname=='revenue');
		  if(assement_type_index>=0)
			  {
			  seriesname_list[assement_type_index].data=(revenue_data_array);
			  }
		 
		   assement_type_index = seriesname_list.findIndex(obj => obj.seriesname=='expenses');	
		   if(assement_type_index>=0)
			{
			   seriesname_list[assement_type_index].data=(expenses_data_array);
			}   
		FusionCharts.ready(function(){
			var chartObj = new FusionCharts({
    type: 'msline',
        renderAt: 'revenue_expenses_chart',
            width: '100%',
                height: '390',
                    dataFormat: 'json',
                        dataSource: {
        "chart": {
            "theme": "fusion",
                "caption": "Comparison of Revenue & Expenses",
                    "xAxisname": "Date",
                        "yAxisName": "Amount",
                            "numberPrefix": "$",
                                "plotFillAlpha": "100",
                                    "divLineIsDashed": "1",
                                        "divLineDashLen": "1",
                                            "divLineGapLen": "1"
        },
        "categories": [{
            "category": create_date
        }],
            "dataset": seriesname_list
            	
            	
            	/* [{
                "seriesname": "Previous Year12",
                "data": [{
                    "value": "10000"
                }, {
                    "value": "11500"
                }, {
                    "value": "12500"
                }, {
                    "value": "15000"
                }]
            }, {
                "seriesname": "Current Year",
                "data": [{
                    "value": "25400"
                }, {
                    "value": "29800"
                }, {
                    "value": "21800"
                }, {
                    "value": "26800"
                }]
            }] *//* ,
                "trendlines": [{
                    "line": [{
                        "startvalue": "12250",
                        "color": "#5D62B5",
                        "displayvalue": "Previous{br}Average",
                        "valueOnRight": "1",
                        "thickness": "1",
                        "showBelow": "1",
                        "tooltext": "Previous year quarterly target  : $13.5K"
                    }, {
                        "startvalue": "25950",
                        "color": "#29C3BE",
                        "displayvalue": "Current{br}Average",
                        "valueOnRight": "1",
                        "thickness": "1",
                        "showBelow": "1",
                        "tooltext": "Current year quarterly target  : $23K"
                    }]
                }] */
    }
});
			chartObj.render();
		});
	}
  	
  	
  	function revenue_expenses_all()
  	{
		FusionCharts.ready(function(){
			var chartObj = new FusionCharts({
    type: 'msline',
        renderAt: 'revenue_expenses_all_chart',
            width: '100%',
                height: '390',
                    dataFormat: 'json',
                        dataSource: {
        "chart": {
            "theme": "fusion",
                "caption": "Comparison of Revenue & Expenses",
                    "xAxisname": "Month",
                        "yAxisName": "Amount",
                         /*    "numberPrefix": "$", */
                                "plotFillAlpha": "80",
                                    "divLineIsDashed": "1",
                                        "divLineDashLen": "1",
                                            "divLineGapLen": "1"
        },
        "categories": [{
          "category": create_date_all
        }],
            "dataset": seriesname_list_all
    }
});
			chartObj.render();
		});
  		
  	}
  	
    $("#account_management").appendTo($("#parent_continer"));
  	
  	

  </script>
<!--     <script type="text/javascript" src="https://cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.js"></script>
    <script type="text/javascript" src="https://cdn.fusioncharts.com/fusioncharts/latest/themes/fusioncharts.theme.fusion.js"></script>
   -->  </body>
  </html>