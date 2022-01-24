<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
 <title>Assessment Module</title>
 <%@include file="../admin/header.jsp" %>

<body class="hold-transition sidebar-mini">
<!-- Site wrapper -->

<div class="wrapper" id="assement_module">

  <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>Assessment Module</h1>
          </div>
        
        </div>
      </div><!-- /.container-fluid -->
    </section>

    <!-- Main content -->
    <section class=" form content">
    <form name="new_client_form" id="new_client_form">
      <div class="row">
        <div class="col-md-12">
          <div class="card card-primary">
            <div class="card-header">
              <h3 class="card-title">Client Information</h3>

              <div class="card-tools">
                <button type="button" class="btn btn-tool" data-card-widget="collapse" data-toggle="tooltip" title="Collapse">
                  <i class="fas fa-minus"></i></button>
              </div>
            </div>
            <div class="card-body">
            <div class="row">
             <div class="col-md-2">
              <div class="form-group">
                <label for="client_Name">Client Name</label>
                <input type="text" name="client_Name" id="client_Name" class="form-control" readonly="readonly">
              </div>
              </div>
               <div class="col-md-2">
               <div class="form-group">
                <label for="client_Id">Client Id</label>
                <input type="text" id="client_Id_assesment" class="form-control" readonly="readonly">
              </div>
              </div>
              
                <div class="col-md-2">
               <div class="form-group">
                <label for="wOD">DOJ</label>
                <input type="text" name="create_Date" id=create_Date class="form-control" readonly="readonly">
              </div>
              </div>
                
               <div class="col-md-2">
               <div class="form-group">
                <label for="follow_Date">Mobile</label>
                <input type="text" name="mobile_No" id="mobile_No" class="form-control" readonly="readonly">
              </div>
              </div>
                 <div class="col-md-4">
               <div class="form-group">
               <div class="row">
                  <div class="col-md-12">
                <label for="assement_type">Assement Type</label></div>

                 <select id="assement_type" onclick="assement_type_change()" multiple="multiple">
               <!--    <option value="Weight">Weight</option>
			            <option value="Strength">Strength</option>
<option value="Flexibility">Flexibility</option>
<option value="Endurance">Endurance</option>
<option value="Body Fat">Body Fat</option>
<option value="Strength">Core Strenght</option>
<option value="Strength">Stability</option>
<option value="Strength">Agility</option> -->


		            </select>
			          
			            </div>
              </div>
              </div>
              
                 
              </div>
              
                  
            </div>
            <!-- /.card-body -->
          </div>
          <!-- /.card -->
        </div>
         
         
                 <div class="col-md-12">
          <div class="card card-primary">
            <div class="card-header">
              <h3 class="card-title">Assement Module Information</h3>

              <div class="card-tools">
                <button type="button" class="btn btn-tool" data-card-widget="collapse" data-toggle="tooltip" title="Collapse">
                  <i class="fas fa-minus"></i></button>
              </div>
            </div>
            <div class="card-body">
            <div class="row">
            
  
              
                         <div class="col-md-2">
              <div class="form-group">
                <label for="client_Name">Assement Type</label>
                           </div>
              </div>   
                    
              
                  <div class="col-md-2">
               <div class="form-group">
                <label for="time_Reps_count">Test</label>
              </div>
              </div>
              
                    
                  <div class="col-md-2">
               <div class="form-group">
                <label for="time_Reps_count">Measurement</label>
              </div>
              </div>
              
                    
                  <div class="col-md-2">
               <div class="form-group">
                <label for="time_Reps_count">Remarks</label>
              </div>
              </div>     
              
                  </div>
                   <div id="assement_continer"></div>
                  
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
          <input type="submit" value="Submit" onclick="new_assement_module_entry();" class="btn btn-success float-right">
        </div>
      </div>
      
       <!--   <div class="row">
            <div class="box clearfix">
                     <table class="table table-hover" id="bootstrap-table">
                <thead>
                <tr>
                   <th>Id</th>
                   <th>Date</th>
 					<th>Client Id</th>
                    <th>Strength</th>
                    <th>Flexibility</th>
                       <th>Endurance</th>
                       <th>Body Fat</th>
                       <th>Stability</th>
                </tr>
                </thead>
                <tbody id="enquiry_list">
                
    
                </tbody>
            </table>
        </div>
    </div> -->
    </section>
    <!-- /.content -->
  </div>
  <!-- /.content-wrapper -->

  </div>
  <jsp:include page="footer.jsp" />
  
  <script>
  var dropdown_list={};
  

	  
  


  $(document).ready( function () {
      $('#bootstrap-table').bdt({
          showSearchForm: 0,
          showEntriesPerPageField: 0
      });
  });
  assement_module_report_list_request();

  $("#assement_module").appendTo($("#parent_continer"));
  
  </script>
     
<script type="text/javascript" src="<c:url value="/js/bootstrap-multiselect.js"/>"></script>
	
	
	
  </body>
  </html>