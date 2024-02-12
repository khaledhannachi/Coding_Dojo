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
			<div class="p-4 flex flex-col text-start">
				<h1 class="text-3xl">Welcome ${loggedUser.userName }</h1>
				<h1 class="text-3xl">All Projects</h1>
			</div>
			<div class="p-4 flex">

				<a href="/projects/new"
					class=" text-center w-72 h-12 bg-gradient-to-tr from-blue-600 to-indigo-600
					 text-indigo-100 py-2 rounded-md text-lg tracking-wide">
					 Add New Project</a>
			</div>

		</div>
		<div class="px-3 py-4 flex justify-center">
			<table class="w-full text-md bg-white shadow-md rounded mb-4">
				<tbody>
					<tr class="border-b bg-gray-900 text-white font-bold">
						<th class="text-center p-3 px-5">Project</th>
						<th class="text-center p-3 px-5">Team Lead</th>
						<th class="text-center p-3 px-5">Due Date</th>
						<th class="text-center p-3 px-5">Actions</th>
						<th></th>
					</tr>

					<c:forEach items="${allProjects}" var="oneProject">
						<c:if test="${oneProject.teamMembers.contains(loggedUser) eq false}">
						<tr class="border-b hover:bg-blue-100">
							<td class="p-3 px-5 text-center"><a
								href="/projects/${oneProject.id}">${oneProject.title}</a></td>
							<td class="p-3 px-5 text-center">${oneProject.user.userName }</td>
							<td class="p-3 px-5 text-center">
							<fmt:formatDate value="${oneProject.duedate}" pattern="MMM-dd"/></td>
							<td class="p-3 px-5 flex justify-center gap-4 text-center">
							<c:if test="${oneProject.teamMembers.contains(loggedUser) eq false}">
								<button type="button"
									class="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">
									<a href="/projects/addtoteam/${oneProject.id}">Join Team</a>
								</button>
								</c:if>
							</td>
							</td>
						</tr>
						</c:if>
					</c:forEach>
					
				</tbody>
			</table>

		</div>
	</div>
	
<!-- Second table -->
	<div class="text-gray-900">
		<div class="p-4 flex text-center  justify-between">
			<div class="p-4 flex flrx-col text-start">
				<h1 class="text-3xl">Your Project</h1>
			</div>
		
		</div>
		<div class="px-3 py-4 flex justify-center">
			<table class="w-full text-md bg-white shadow-md rounded mb-4">
				<tbody>
					<tr class="border-b bg-gray-900 text-white font-bold">
						<th class="text-center p-3 px-5">Project</th>
						<th class="text-center p-3 px-5">Team Lead</th>
						<th class="text-center p-3 px-5">Due Date</th>
						<th class="text-center p-3 px-5">Actions</th>
						<th></th>
					</tr>
					<c:forEach items="${allProjects}" var="oneProject">
						<c:if test="${oneProject.teamMembers.contains(loggedUser) eq true }">
						<tr class="border-b hover:bg-blue-100">
							<td class="p-3 px-5 text-center"><a
								href="/projects/${oneProject.id}">${oneProject.title}</a></td>
							<td class="p-3 px-5 text-center">${oneProject.user.userName }</td>
							<td class="p-3 px-5 text-center"><fmt:formatDate value="${oneProject.duedate}" pattern="MMM-dd"/></td>
							<td class="p-3 px-5 flex justify-center gap-4 text-center">
							<c:if test="${oneProject.user.id.equals(loggedUser.id)}">
								<button type="button"
									class="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">
									<a href="/projects/edit/${oneProject.id}">Edit</a>
								</button>
							</c:if>
							<c:if test="${!oneProject.user.id.equals(loggedUser.id)}">
								<button type="button"
									class="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">
									<a href="/projects/removeFromteam/${oneProject.id}">Leave Team</a>
								</button>
							</c:if>
							</td>
							</td>
						</tr>
							</c:if>
					</c:forEach>
					
				</tbody>
			</table>

		</div>
	</div>
</body>
</html>
