<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
 <title>Hawk | Log in</title>
  <!-- Tell the browser to be responsive to screen width -->
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%--  <link href="<c:url value="/css/all.min.css"/>"  rel="stylesheet" type="text/css" /> --%>
  <link href="<c:url value="/css/main.css"/>"  rel="stylesheet" type="text/css" />
  <link href="<c:url value="/css/icheck-bootstrap.min.css"/>"  rel="stylesheet" type="text/css" />
  <link href="<c:url value="/css/adminlte.min.css"/>"  rel="stylesheet" type="text/css" />
  <link href="<c:url value="/css/jquery.bdt.css"/>"  rel="stylesheet" type="text/css" />
    <link href="<c:url value="/css/bootstrap-multiselect.css"/>"  rel="stylesheet" type="text/css" />
     <link href="<c:url value="/css/select2.min.css"/>"  rel="stylesheet" type="text/css" />
    <link href="<c:url value="/css/daterangepicker.css"/>"  rel="stylesheet" type="text/css" />
</head>
<body class="hold-transition login-page">
<div class="login-box">
  <div class="login-logo">
    <a ><b>Hawk Fitness Studio</b></a>
  </div>
  <!-- /.login-logo -->
  <div class="card">
    <div class="card-body login-card-body">
      <p class="login-box-msg">Sign in to start your session</p>

      <form name="login_form">
        <div class="input-group mb-3">
          <input type="text" name="user_name" class="form-control" placeholder="name">
          <div class="input-group-append">
            <div class="input-group-text">
              <span class="fas fa-envelope"></span>
            </div>
          </div>
        </div>
        <div class="input-group mb-3">
          <input type="password" name="user_pwd"class="form-control" placeholder="Password">
          <div class="input-group-append">
            <div class="input-group-text">
              <span class="fas fa-lock"></span>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-8">
            <div class="icheck-primary">
              <input type="checkbox" id="remember">
              <label for="remember">
                Remember Me
              </label>
            </div>
           
          </div>
          <!-- /.col -->
        
          <!-- /.col -->
        </div>
      </form>
  <div class="col-4">
            <button type="submit" class="btn btn-primary btn-block" onclick="login();">Sign In</button>
          </div>
      <!-- /.social-auth-links -->

    <!--   <p class="mb-1">
        <a href="forgot-password.html">I forgot my password</a>
      </p> -->
    </div>
    <!-- /.login-card-body -->
  </div>
</div>
<script>
var request = new XMLHttpRequest();

function login()
{
	var formElement = document.forms.namedItem("login_form");
	request.open("POST", base_path+"/Hawk_api_01/client_login/");
	var formData = new FormData();
var  oData = new FormData(formElement);
request.responseType = 'json';
request.send(oData);
request.onload = function() {
	var result=this.response;	
	     if(result.status==='0')
	    	 {
	    	 alert("Invalid Login...");
	    	 }
	     else if(result.status==='1')
	    	 {
	    	 sessionStorage.setItem("client_Name", result.data.client_Name);
	    	 sessionStorage.setItem("client_Id", result.data.client_Id);
	    		window.location.replace(base_path+result.view);
	    	 }	 
	  }

}
</script>
  <script type="text/javascript" src="<c:url value="/js/common_properties.js"/>"></script> 
</body>
</html>
