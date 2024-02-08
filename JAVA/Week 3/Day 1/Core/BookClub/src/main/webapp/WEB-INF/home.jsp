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
<div
		class="flex w-screen items-start justify-around text-black">
	

		<div
			class="flex flex-col items-center justify-center text-gray-700 mt-20">
			<h1 class="font-bold text-4xl ">Register</h1>
			<form:form action="/register" method="post" modelAttribute="newUser"
				class="flex flex-col bg-white rounded shadow-2xl p-12 mt-12 ">
				<form:label path="userName" class="font-semibold text-xs"
					for="usernameField">UserName</form:label>
				<form:input path="userName"
					class="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2"
					type="text" />
				<form:errors path="userName" class="text-red-600" />

				<form:label path="email" class="font-semibold text-xs"
					for="usernameField">Email</form:label>
				<form:input path="email"
					class="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2"
					type="text" />
				<form:errors path="email" class="text-red-600" />
				<form:label path="password" class="font-semibold text-xs mt-3"
					for="passwordField">Password</form:label>
				<form:input path="password"
					class="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2"
					type="password" />
				<form:errors path="password" class="text-red-600" />
				<form:label path="confirm" class="font-semibold text-xs mt-3"
					for="passwordField">Confirm Password</form:label>
				<form:input path="confirm"
					class="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2"
					type="password" />
				<form:errors path="confirm" class="text-red-600" />

				<button type="submit" value="Create"
					class="flex items-center justify-center h-12 px-6 w-64 bg-blue-600 mt-8 rounded font-semibold text-sm text-blue-100 hover:bg-blue-700">Login</button>
			</form:form>
		</div>
		<div
			class="flex mt-20 flex-col items-center justify-center text-gray-700">
			<h1 class="font-bold text-4xl ">Login</h1>
			<form:form action="/login" method="post" modelAttribute="newLogin"
				class="flex flex-col bg-white rounded shadow-2xl p-12 mt-12">
				<form:label path="email" class="font-semibold text-xs"
					for="usernameField">Email</form:label>
				<form:input path="email"
					class="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2"
					type="text" />
				<form:errors path="email" class="text-red-600" />

				<form:label path="password" class="font-semibold text-xs mt-3"
					for="passwordField">Password</form:label>
				<form:input path="password"
					class="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2"
					type="password" />
				<form:errors path="password" class="text-red-600" />

				<button type="submit" value="Create"
					class="flex items-center justify-center h-12 px-6 w-64 bg-blue-600 mt-8 rounded font-semibold text-sm text-blue-100 hover:bg-blue-700">Login</button>
			</form:form>
		</div>
	</div>
</body>
</html>
