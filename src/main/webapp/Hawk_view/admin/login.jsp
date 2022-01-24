<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
  <%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
 <title>Hawk | Log in</title>
  <!-- Tell the browser to be responsive to screen width -->
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <!-- Font Awesome -->
   <script type="text/javascript" src="<c:url value="/js/common_properties.js"/>"></script> 
 <link href="<c:url value="/css/main.css"/>"  rel="stylesheet" type="text/css" />
  <link href="<c:url value="/css/icheck-bootstrap.min.css"/>"  rel="stylesheet" type="text/css" />
  <link href="<c:url value="/css/adminlte.min.css"/>"  rel="stylesheet" type="text/css" />
  <link href="<c:url value="/css/jquery.bdt.css"/>"  rel="stylesheet" type="text/css" />
    <link href="<c:url value="/css/bootstrap-multiselect.css"/>"  rel="stylesheet" type="text/css" />
    <script type="text/javascript" src="<c:url value="/js/commonAPI.js"/>"></script> 
  
  
  
  
  
  
</head>
<body class="hold-transition login-page">
<div class="login-box">
  <div class="login-logo">
    <a href="#"><b>Hawk Fitness Studio</b></a>
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

      <p class="mb-1">
        <a href="forgot-password.html">I forgot my password</a>
      </p>
    </div>
    <!-- /.login-card-body -->
  </div>
</div>
<!-- /.login-box -->

<!-- jQuery -->
<script src="./js/jquery.min.js"></script>
<!-- Bootstrap 4 -->
<script src="./js/bootstrap.bundle.min.js"></script>
<!-- AdminLTE App -->
<script src="./js/adminlte.min.js"></script>
   <script src="./js/global.js" type="text/javascript"></script>
 
</body>
</html>
