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
			class="flex justify-between bg-gray-900 text-white w-screen p-2 px-20">
			<div class="flex w-20">
				<a href="/home"
					class=" text-center w-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-indigo-100 py-2 rounded-md text-lg tracking-wide">Home</a>
			</div>
			<c:if test="${user_id != null}">
				<div class="flex w-20">
					<a href="/logout"
						class=" text-center w-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-indigo-100 py-2 rounded-md text-lg tracking-wide">Logout</a>
				</div>
			</c:if>
		</nav>

	</section>
	<!-- component -->
	<div class="max-w-6xl mx-auto text-left mt-20 shadow-md p-10">
		<h1
			class="text-2xl font-bold tracking-tight text-black sm:text-5xl xl:text-2xl sm:tracking-tight">

			<span class="text-orange-600">${team.name }</span>

		</h1>

			<h2
				class="text-xl font-bold tracking-tight text-black sm:text-5xl xl:text-xl sm:tracking-tight">

				<span class="text-gray-900">Team Name : </span>${team.teamcreator.userName}

			</h2>

			<h2
				class="text-xl font-bold tracking-tight text-black sm:text-xl xl:text-xl sm:tracking-tight">
				<span class="text-gray-900">Skill Level : </span>${team.skill}

			</h2>
			<h2
				class="text-xl font-bold tracking-tight text-black sm:text-xl xl:text-xl sm:tracking-tight">
				<span class="text-gray-900">Game Day : </span>${team.gameDay}

			</h2>
			
			<div class="mt-8 flex justify-end">
				<c:if test="${team.teamcreator.id==user_id }">
					<button type="button"
						class="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">
						<a href="/teams/${team.id }/edit">Edit</a>
					</button>


					<form action="/teams/${team.id}" method="post">
						<button type="submit"
							class="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
							type="hidden" name="_method" value="delete">Delete</button>
					</form>
				</c:if>
			</div>
			<p class="mt-8 text-sm font-normal text-gray-600"></p>
		</div>
	
	</div>
</body>
</html>
