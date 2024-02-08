<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!-- c:out ; c:forEach etc. --> 
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
<!-- Formatting (dates) --> 
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"  %>
<!-- form:form -->
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
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
	<section class="relative mx-auto">
		<nav class="flex justify-end bg-gray-900 text-white w-screen p-2 px-20">
			  <c:if test="${user_id != null}">
        <div class="flex w-20">
            <a href="/logout" class=" text-center w-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-indigo-100 py-2 rounded-md text-lg tracking-wide">Logout</a>
        </div>
    </c:if>
		</nav>

	</section>
<div class="flex flex-col w-screen items-center mt-96 justify-around text-black">
    <h1>Hello ${user.userName}</h1>
    <h1>This is your dashboard, nothing to see here!</h1>
 
   
  </div>
</body>
</html>
