<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">

 <title>Hawk</title>
 <style type="text/css">
 textarea {
  resize: none;
  overflow: hidden;
}</style>
 
 
 
 
  <!-- Tell the browser to be responsive to screen width -->
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
  
  <link href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet">
  <!-- Custom styles for this template-->
  <link href="<c:url value="/css/sb-admin-2.min.css"/>"  rel="stylesheet" type="text/css" />
  <link href="<c:url value="/vendor/fontawesome-free/css/all.min.css"/>"  rel="stylesheet" type="text/css" />
  <link href="<c:url value="/css/jquery.bdt.css"/>"  rel="stylesheet" type="text/css" />
    <link href="<c:url value="/css/bootstrap-multiselect.css"/>"  rel="stylesheet" type="text/css" />
     <link href="<c:url value="/css/select2.min.css"/>"  rel="stylesheet" type="text/css" />
    <link href="<c:url value="/css/daterangepicker.css"/>"  rel="stylesheet" type="text/css" />
    <link href="<c:url value="https://cdn.datatables.net/1.10.21/css/jquery.dataTables.min.css"/>"  rel="stylesheet" type="text/css" />
     
      <link href="./css/calendar_main.css" rel="stylesheet" media="all">
<!--       <link href="//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap-glyphicons.css" rel="stylesheet"> -->
  
  
  
      </head>
<body id="page-top">

  <!-- Page Wrapper -->
  <div id="wrapper">


    <!-- End of Sidebar -->

    <!-- Content Wrapper -->
    <div id="content-wrapper" class="">

      <!-- Main Content -->
      <div id="content">

        <!-- Topbar -->
        <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

          <!-- Sidebar Toggle (Topbar) -->
          <button id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3">
            <i class="fa fa-bars"></i>
          </button>


 <a class="sidebar-brand d-flex align-items-center justify-content-center" onclick=" location.reload(true);"href="">
       
        <div class="sidebar-brand-text mx-3">Hawk fitness studio</div>
      </a>
          <!-- Topbar Navbar -->
          <ul class="navbar-nav ml-auto">

            <!-- Nav Item - Search Dropdown (Visible Only XS) -->
          

            <!-- Nav Item - Alerts -->
            <li class="nav-item dropdown no-arrow mx-1">
              <a class="nav-link dropdown-toggle" href="#" id="alertsDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="fas fa-bell fa-fw"></i>
                <!-- Counter - Alerts -->
                <span class="badge badge-danger badge-counter"  id="notofication_spam"></span>
                
              </a>
              <!-- Dropdown - Alerts -->
              <div class="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="alertsDropdown">
                <h6 class="dropdown-header">
                  Alerts Center
                </h6>
                <a class="dropdown-item d-flex align-items-center" href="#">
                  <div class="mr-3">
                    <div class="icon-circle bg-primary">
                      <i class="fas fa-file-alt text-white"></i>
                    </div>
                  </div>
                  <div id="notofication_body">
                  </div>
                </a>
                <a class="dropdown-item text-center small text-gray-500" href="#">Show All Alerts</a>
              </div>
            </li>

            <div class="topbar-divider d-none d-sm-block"></div>

            <!-- Nav Item - User Information -->
            <li class="nav-item dropdown no-arrow">
              <a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span class="mr-2 d-none d-lg-inline text-gray-600 small" id="client_name"></span>
                <img class="img-profile rounded-circle" src="https://images.click.in/classifieds/images/75/24_07_2019_15_12_05_a5e3f72cc62cbcb8accb9576142aa8ff_8lr9pku5ax.jpg">
              </a>
              <!-- Dropdown - User Information -->
              <div class="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
                <a class="dropdown-item disabled" href="#" id="client_name_">
                  <i class="fas fa-user fa-sm fa-fw mr-2 text-gray-400" ></i>
                 
                </a>
                <a class="dropdown-item disabled" href="#">
                  <i class="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                  Settings
                </a>
                <a class="dropdown-item disabled" href="#">
                  <i class="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                  Activity Log
                </a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                  <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                  Logout
                </a>
              </div>
            </li>

          </ul>

        </nav>
        <!-- End of Topbar -->

 <div id="parent_continer" class="container-fluid">
 </div>
        

      </div>
      <!-- End of Main Content -->

      <!-- Footer -->
      <!-- End of Footer -->

    </div>
    <!-- End of Content Wrapper -->

  </div>
  <!-- End of Page Wrapper -->

  <!-- Scroll to Top Button-->

  <!-- Logout Modal-->
  <div class="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
          <button class="close" type="button" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">�</span>
          </button>
        </div>
        <div class="modal-body">Select "Logout" below if you are ready to end your current session.</div>
        <div class="modal-footer">
          <button class="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
          <a class="btn btn-primary" onclick="logout();" href="#">Logout</a>
        </div>
      </div>
    </div>
  </div>
  
      
<script>
/* function onload_request()
{
var request = new XMLHttpRequest();
	request.open("POST", base_path+"/Hawk_api_01/client_quick_view_list/");
request.send();
request.onload = function() {
  var result = JSON.parse(this.response);
	$.each(result.data.client_quick_view, function(index) {			
	var client_Quick_View=result.data.client_quick_view[index];
	 dataSource_list.push({"name": client_Quick_View.client_Name});
	  dataSource_list.push({"name": client_Quick_View.client_Id});
	  dataSource_list.push({"name": client_Quick_View.mobile_No});
});
}
}
onload_request();
 */


</script>
  
   <!-- Page level plugins -->


  <!-- Page level plugins -->
 

   <script type="text/javascript" src="<c:url value="/vendor/jquery/jquery.min.js"/>"></script>
   <script type="text/javascript" src="<c:url value="/vendor/bootstrap/js/bootstrap.bundle.min.js"/>"></script>
	<script type="text/javascript" src="<c:url value="/vendor/jquery-easing/jquery.easing.min.js"/>"></script>
   <script type="text/javascript" src="<c:url value="/js/sb-admin-2.min.js"/>"></script>
       <script type="text/javascript" src="<c:url value="/js/jquery.bdt.min.js"/>"></script>
        <script type="text/javascript" src="<c:url value="/js/jquery.sortelements.js"/>"></script>
       <script type="text/javascript" src="<c:url value="/js/bootstrap-multiselect.js"/>"></script>
   <script type="text/javascript" src="<c:url value="/js/autocomplete.js"/>"></script> 
    <script type="text/javascript" src="<c:url value="/js/autocomplete_script.js"/>"></script> 
    <script type="text/javascript" src="<c:url value="/js/adminlte.min.js"/>"></script> 
       <script type="text/javascript" src="<c:url value="/vendor/chart.js/Chart.min.js"/>"></script> 
        <script type="text/javascript" src="<c:url value="/js/lodash.core.min.js"/>"></script> 
        <script type="text/javascript" src="<c:url value="/js/jquery.dataTables.min.js"/>"></script> 
        <script type="text/javascript" src="<c:url value="/js/common_properties.js"/>"></script> 
         <script type="text/javascript" src="<c:url value="/js/client_commonAPI.js"/>"></script> 
          <script type="text/javascript" src="<c:url value="/js/tabledata_grouping.js"/>"></script> 
       </body>
</html>
