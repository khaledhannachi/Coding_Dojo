<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!-- c:out ; c:forEach etc. -->
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!-- Formatting (dates) -->
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<!-- form:form -->
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<!-- for rendering errors on PUT routes -->
<%@ page isErrorPage="true"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Demo JSP</title>
<script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
	<section class="relative mx-auto">
		<nav
			class="flex justify-end bg-gray-900 text-white w-screen p-2 px-20">
			<c:if test="${user_id != null}">
				<div class="flex w-20">
					<a href="/logout"
						class=" text-center w-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-indigo-100 py-2 rounded-md text-lg tracking-wide">Logout</a>
				</div>
			</c:if>
		</nav>

	</section>
	<!-- component -->
	<div class="text-gray-900">
		<div class="p-4 flex text-center  justify-between">
			<div class="p-4 flex">
				<h1 class="text-3xl">Welcom ${loggedUser.userName }</h1>
			</div>
			<div class="p-4 flex">

				<a href="/books/new"
					class=" text-center w-48 bg-gradient-to-tr from-blue-600 to-indigo-600 text-indigo-100 py-2 rounded-md text-lg tracking-wide">Add
					a Book To my Shelf</a>
			</div>

		</div>
		<div class="px-3 py-4 flex justify-center">
			<table class="w-full text-md bg-white shadow-md rounded mb-4">
				<tbody>
					<tr class="border-b bg-gray-900 text-white font-bold">
						<th class="text-center p-3 px-5">ID</th>
						<th class="text-center p-3 px-5">Tile</th>
						<th class="text-center p-3 px-5">Author Name</th>
						<th class="text-center p-3 px-5">Posted By</th>
						<th></th>
					</tr>

					<c:forEach items="${allBooks}" var="oneBook">
						<tr class="border-b hover:bg-blue-100">
							<td class="p-3 px-5 text-center">${oneBook.id}</td>
							<td class="p-3 px-5 text-center"><a href="/books/${oneBook.id}">${oneBook.title}</a></td>
							<td class="p-3 px-5 text-center">${oneBook.author}</td>
							<td class="p-3 px-5 flex justify-center gap-4 text-center">${oneBook.user.userName }</td>
					
							</td>
						</tr>
					</c:forEach>
				</tbody>
			</table>

		</div>
	</div>
</body>
</html>
