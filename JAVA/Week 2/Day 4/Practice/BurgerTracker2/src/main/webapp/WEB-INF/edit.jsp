<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!-- New line below to use the JSP Standard Tag Library -->
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ page isErrorPage="true"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
<div class="h-screen bg-gradient-to-br from-blue-600 to-indigo-600 flex justify-center items-center w-full">
	<!-- 		Create a Burger Form -->
		<form:form action="/burgers/${burger.id }" method="post"
			modelAttribute="burger">
			<input type="hidden" name="_method" value="put">
			<form:errors path="*" />
			<div>
				<form:label path="burgerName">Burger Name</form:label>
				<form:input type="text" path="burgerName" />
			</div>
			<div>
				<form:label path="restaurantName">Restaurant Name</form:label>
				<form:input type="text" path="restaurantName" />
			</div>
			<div>
				<form:label path="rating">Rating</form:label>
				<form:input type="number" path="rating" />
			</div>
			<div>
				<form:label path="notes">Notes</form:label>
				<form:input type="text" path="notes" />
			</div>
			<input type="submit" value="Submit" />
		</form:form>
</div>
</body>
</html>