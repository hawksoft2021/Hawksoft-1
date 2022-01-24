<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
 <title>Feedback Report</title>
 <%@include file="../admin/header.jsp" %>
  </head>  
<body class="hold-transition sidebar-mini">
<!-- Site wrapper -->
<div class="wrapper" id="feedback_report">

 <div class="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 class="h3 mb-0 text-gray-800">Feedback Report</h1>
            <a href="#"  onclick="exportTableToExcel('bootstrap_table', 'members-data');" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i class="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
          </div>
		<!-- Content Wrapper. Contains page content -->
		<div class="content-wrapper">
    <!-- Main content -->
<div class="table table-responsive ">
     						 <table class="table" id="bootstrap_table">
								<thead>
									<tr>
                   <th>Id</th>
                     <th>Client Id</th>
                    <th>Name</th>
                    <th>Mobile No</th>
                    <th>Gender</th>
                       <th>Category</th>
                        <th>Package Duration</th>
                          <th>Target</th>
                            <th>Due Amount</th>
                          <th>Feedback</th>
                </tr>
                </thead>
                <tbody id="enquiry_list">
                
    
                </tbody>
            </table>
        </div>
        </div>
    </div>
  <jsp:include page="footer.jsp" />
  
  <script>
  feedback_report_onload();
  $("#feedback_report").appendTo($("#parent_continer"));
  </script>

  </body>
  </html>