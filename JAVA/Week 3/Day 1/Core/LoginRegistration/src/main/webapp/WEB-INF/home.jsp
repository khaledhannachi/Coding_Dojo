<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!-- c:out ; c:forEach etc. --> 
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
<!-- Formatting (dates) --> 
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"  %>
<!-- form:form -->
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>

<!-- for rendering errors on PUT routes -->
<%@ page isErrorPage="true" %>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Demo JSP</title>
        <script src="https://cdn.tailwindcss.com"></script>
    </head>
<body>
<div class="flex flex-col items-center justify-center w-screen h-screen bg-gray-200 text-gray-700">
<form:form action="/users/process" method="post" modelAttribute="user" class="flex flex-col bg-white rounded shadow-lg p-12 mt-12">
<form:label path="username" class="font-semibold text-xs" for="usernameField">Email</form:label>
<form:input path="username" class="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2" type="text"/> 
<form:label path="email" class="font-semibold text-xs" for="usernameField">Email</form:label>
<form:input path="email" class="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2" type="text"/> 
<form:label path="password" class="font-semibold text-xs mt-3" for="passwordField">Password</form:label> 
<form:input path="password" class="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2" type="password"/>
<form:label path="confirmpassword" class="font-semibold text-xs mt-3" for="passwordField">Password</form:label> 
<form:input path="confirmpassword" class="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2" type="password"/>
<button type="submit" value="Create" class="flex items-center justify-center h-12 px-6 w-64 bg-blue-600 mt-8 rounded font-semibold text-sm text-blue-100 hover:bg-blue-700">Login</button>
</form:form>
</div>
<div class="flex flex-col items-center justify-center w-screen h-screen bg-gray-200 text-gray-700">
<form:form action="/users/process" method="post" modelAttribute="user" class="flex flex-col bg-white rounded shadow-lg p-12 mt-12">
<form:label path="email" class="font-semibold text-xs" for="usernameField">Email</form:label>
<form:input path="email" class="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2" type="text"/> 
<form:label path="password" class="font-semibold text-xs mt-3" for="passwordField">Password</form:label> 
<form:input path="password" class="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2" type="password"/>
<button type="submit" value="Create" class="flex items-center justify-center h-12 px-6 w-64 bg-blue-600 mt-8 rounded font-semibold text-sm text-blue-100 hover:bg-blue-700">Login</button>
</form:form>
</div>
</body>
</html>
