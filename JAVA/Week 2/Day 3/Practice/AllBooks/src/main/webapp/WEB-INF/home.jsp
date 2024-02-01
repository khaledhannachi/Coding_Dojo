<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!-- New line below to use the JSP Standard Tag Library -->
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
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
				<th>Title</th>
				<th>Language</th>
				<th>Description</th>
				<th>Pages</th>
			</tr>
		</thead>
		<tbody >
			<c:forEach items="${allBooks }" var="oneBook">
				<tr>
					<td><a href='/books/${oneBook.id }'> ${oneBook.title}</a></td>
					<td>${oneBook.language}</td>
					<td>${oneBook.description}</td>
					<td>${oneBook.numberOfPages}</td>
				</tr>
			</c:forEach>
		</tbody>
	</table>
</div>
</body>
</html>