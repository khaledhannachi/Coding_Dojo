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
<script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
<div class="h-screen bg-gradient-to-br from-blue-600 to-indigo-600 flex justify-center items-center w-full ">
	<table  class="bg-white border-black">
		<thead class="bg-black text-white border-black">
			<tr>
				<th>Burger Name</th>
				<th>Restaurant Name</th>
				<th>Rating</th>
				<th>Actions</th>
			</tr>
		</thead>
		<tbody >
			<c:forEach items="${allBurgers }" var="oneBurger">
				<tr>
					<td>${oneBurger.burgerName}</td>
					<td>${oneBurger.restaurantName}</td>
					<td>${oneBurger.rating}</td>
					<td><a href="/burgers/edit/${oneBurger.id }">Edit</a>
				</tr>
			</c:forEach>
		</tbody>
	</table>
	<!-- 		Create a Burger Form -->
		<form:form action="/burgers/processBurger" method="post"
			modelAttribute="burger">
			
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
			<button type="submit" value="Submit" >Submit</button>
			
		</form:form>
</div>

</body>
</html>