<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
 <title></title>
 <%@include file="../admin/header.jsp" %>
<body class="hold-transition sidebar-mini">
<!-- Site wrapper -->
<div class="wrapper">

  <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>Workout Module Entry</h1>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item active">Workout Module Entry</li>
            </ol>
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
              <h3 class="card-title">WorkOut Information</h3>

              <div class="card-tools">
                <button type="button" class="btn btn-tool" data-card-widget="collapse" data-toggle="tooltip" title="Collapse">
                  <i class="fas fa-minus"></i></button>
              </div>
            </div>
            <div class="card-body">
            <div class="row">
            <!--  <div class="col-md-6">
              <div class="form-group">
                <label for="client_Name">Client Name</label>
                <input type="text" name="client_Name" id="client_Name" class="form-control">
              </div>
              </div>
               <div class="col-md-6">
               <div class="form-group">
                <label for="client_id">Client Id</label>
                <input type="text" name="client_Id" id="client_Id" class="form-control">
              </div>
              </div> -->
              
              
           
                <div class="col-md-6">
               <div class="form-group">
                <label for="wOD">WOD</label>
                <input type="text" name="wOD" id="wOD " class="form-control">
              </div>
              </div>
                
              
              <div class="row">
               <div class="col-md-6">
               <div class="form-group">
                <label for="follow_Date">Count</label>
                <input type="text" name="count" id="count" class="form-control">
              </div>
              </div>
              
              
                    <div class="col-md-6">
               <div class="form-group">
                <label for="follow_Date">Time</label>
                <input type="text" name="time" id="time" class="form-control">
              </div>
              </div>
              
              
              
              </div>
                  <div class="col-md-6">
               <div class="form-group">
                <label for="time_Reps_count">Time/Reps count</label>
                       <select name="reps_count" id="reps_count"class="form-control custom-select">
                  <option selected disabled>Select one</option>
                    <option class="option" value="Count">Time</option>
						    <option class="option" value="Reps">Reps</option>
                </select>
              </div>
              </div>
              <div class="col-md-6">
               <div class="form-group">
                <label for="time_Reps_count">Event Date</label>
                <input class="form-control js-datepicker" type="text" name=event_date>
    
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
          <input type="submit" value="Submit" onclick="new_friday_challenge_entry();" class="btn btn-success float-right">
        </div>
      </div>
      
         <div class="row">
            <div class="box clearfix">
                     <table class="table table-hover" id="bootstrap-table">
                <thead>
                <tr>
                   <th>Id</th>
                   <th>Date</th>
                    <th>WOD</th>
                    <th>Count</th>
                       <th>Time/Reps count</th>
                       <th>Event Date</th>
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
    <script type="text/javascript" src="./vendor/jquery/jquery.min.js"></script>
<!-- 	<script src="./js/jquery.autocomplete.js"></script>	 -->
  <script src="./js/jquery.bdt.min.js" type="text/javascript"></script>
    <script src="./js/select2.min.js" type="text/javascript"></script>
 <script src="./js/jquery.sortelements.js" type="text/javascript"></script>
      <script src="./js/moment.min.js" type="text/javascript"></script>
        <script src="./js/daterangepicker.js" type="text/javascript"></script>
                <script src="./js/global.js" type="text/javascript"></script>
  
  <script>
 
  friday_challenge_report_list_request();
  </script>
  </body>
  </html>