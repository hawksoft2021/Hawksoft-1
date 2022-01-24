<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
 <title>Insanity WorkOut Module</title>
 <%@include file="../admin/header.jsp" %>
<body class="hold-transition sidebar-mini">
<!-- Site wrapper -->
<div class="wrapper" id="insanity_workout_module">

  <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>Insanity WorkOut Module</h1>
          </div>
        </div>
      </div><!-- /.container-fluid -->
    </section>

    <!-- Main content -->
    <section class=" form content">
    <form name="new_client_form">
      <div class="row">
        <div class="col-md-12">
          <div class="card card-primary">
            <div class="card-header">
              <h3 class="card-title">Assement Information</h3>

              <div class="card-tools">
                <button type="button" class="btn btn-tool" data-card-widget="collapse" data-toggle="tooltip" title="Collapse">
                  <i class="fas fa-minus"></i></button>
              </div>
            </div>
            <div class="card-body">
            <div class="row">
           
              
              
           
                <div class="col-md-4">
               <div class="form-group">
                <label for="wOD">Assement Type</label>
                <input type="text" name="assement_Type" id="assement_Type " class="form-control">
              </div>
              </div>
                
                 <div class="col-md-4">
               <div class="form-group">
                <label for="follow_Date">Number of Test</label>
                  <select name="test_count" id="test_count"class="form-control custom-select">
               <option selected disabled>Select one</option>
                </select>
              </div>
             
              </div>
              
                     <div class="col-md-4">
               <div class="form-group row">
                 <div class="col-md-12">
                <label for="follow_Date">Action</label>
                </div>  <div class="col-md-4">
                <button type="button" class="btn btn-info add-new" id="btn_master_add"><i class="fa fa-plus"></i> Add New</button></div>
              </div>
             
              </div>
       
                
                
                
               <div class="col-md-12">
               <div class="form-group">
                <label for="follow_Date">Test</label>
              </div>
             
              <div id="test_coniner"></div>
                 <div class="row">
        <div class="col-12">
          <a href="#" class="btn btn-secondary">Cancel</a>
          <input type="submit" value="Submit" onclick="new_assement_information_module_entry();" class="btn btn-success float-right">
        </div>
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
            <div class="box clearfix">
             <p class="lead"> <button  onclick="csv('bootstrap_table','Insanity_WorkOut')" class="btn btn-info">TO CSV</button> </p>
                     <table class="table table-hover" id="bootstrap_table">
                <thead>
                <tr>
                   <th>Id</th>
                    <th>Assessment Type</th>
                    <th>Test</th>
                      <th>Action</th>
                      
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
  
  <script>
  

  
  
  for(var i=1;i<=10;i++)
	  {
	  var continer=" <option class='option' value='"+i+"'>"+i+"</option>";
 		$( "#test_count" ).append(continer);
	  }
  
  
  
  
  
  
  
  $("#btn_master_add").click(function() { 

	 var couter=$("#test_count").val();
	 
	 $("#test_coniner").empty();
	 
	 for(var i=1;i<=couter;i++)
		 {
		 var continer="  <div class='col-2'><div class='form-group'><input type='text' name='test' id='test_"+i+"' class='form-control'></div></div>";
		 $("#test_coniner").append(continer);
		 }
	
  }); 


  assement_information_module_list();
  $("#insanity_workout_module").appendTo($("#parent_continer"));
  </script>
   <!--   calender update -->
        <!--   calender update -->
            <script type="text/javascript" src="<c:url value="/calender_js/select2.min.js"/>"></script>
         <script type="text/javascript" src="<c:url value="/calender_js/moment.min.js"/>"></script>
            <script type="text/javascript" src="<c:url value="/calender_js/daterangepicker.js"/>"></script>
            <script type="text/javascript" src="<c:url value="/calender_js/global.js"/>"></script>
         <!--   calender update -->
  </body>
  </html>