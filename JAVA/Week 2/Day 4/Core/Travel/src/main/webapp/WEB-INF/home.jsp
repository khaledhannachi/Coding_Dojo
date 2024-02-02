<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
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
<meta charset="ISO-8859-1">
<title>Insert title here</title>
<script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
<div class="h-screen bg-gradient-to-br from-blue-600 to-indigo-600 flex justify-center items-center w-full ">
	<table  class="bg-white border-black">
		<thead class="bg-black text-white border-black">
			<tr>
				<th>Expense</th>
				<th>Vendor</th>
				<th>Amount</th>
				<th>Actions</th>
			</tr>
		</thead>
		<tbody >
			<c:forEach items="${allTravels }" var="oneTravel">
				<tr>
					<td><a href="/travels/${oneTravel.id}">${oneTravel.expense}</a></td>
					<td>${oneTravel.vendor}</td>
					<td>${oneTravel.amount} $</td>
					<td><a href="/travels/edit/${oneTravel.id }">Edit</a>
					<form action="/travels/${oneTravel.id}" method="post">
								<input type="hidden" name="_method" value="delete"> <input
									type="submit" value="Delete">
							</form></td>
				</tr>
			</c:forEach>
		</tbody>
	</table>
	<div class="h-screen bg-gradient-to-br from-blue-600 to-indigo-600 flex justify-center items-center w-full">
	<!-- 		Create a Travel Form -->
		<form:form action="/travels/processTravel" method="post"
			modelAttribute="travel">
			<form:errors path="*" />
			<div class:"flex">
				<form:label path="expense">Expense</form:label>
				<form:input type="text" path="expense" />
			</div>
			
			<div class:"flex">
				<form:label path="vendor">Vendor</form:label>
				<form:input type="text" path="vendor" />
			</div>
			<div class:"flex">
				<form:label path="amount">Amount</form:label>
				<form:input type="number" path="amount" />
			</div>
			<div class:"flex">
				<form:label path="description">Description</form:label>
				<form:input type="text" path="description" />
			</div>
			
			<input type="submit" value="Submit" />
		</form:form>
</div>
</div>

</body>
</html>