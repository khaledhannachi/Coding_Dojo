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
  <div class="max-w-4xl mx-auto mt-16 flex w-full flex-col border rounded-lg bg-white p-8 shadow-md">
 <form:form action="/teams/processTeam" method="post" modelAttribute="team">
 <h1 class="text-center text-2xl font-bold text-gray-600">New Team!</h1>   
    <div class="mb-4">
        <form:label path="name" class="block mb-1 text-gray-600 font-semibold">Team Name</form:label>
        <form:input path="name" class="w-full rounded border border-gray-300 bg-white py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200" />
<form:errors path="name" class="text-red-600" />
    </div>
    <div class="mb-4">
        <form:label path="skill" class="block mb-1 text-gray-600 font-semibold">Skill Level</form:label>
        <form:textarea path="skill" class="h-32 w-full resize-none rounded border border-gray-300 bg-white
         py-1 px-3 text-base leading-6 text-gray-700 outline-none transition-colors duration-200 ease-in-out 
         focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200" ></form:textarea>
                <form:errors path="skill" class="text-red-600" />
    </div>
    <div class="mb-4">
        <form:label path="gameDay" class="block mb-1 text-gray-600 font-semibold">Game Day</form:label>
        <form:input type="gameDay" path="duedate" />
            <form:errors path="gameDay" class="text-red-600" />
    
    </div>
      <button type="submit" value="Create" class="mt-4 w-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-indigo-100 py-2 rounded-md text-lg tracking-wide">Submit</button>
    </form:form>
</div>


</body>
</html>


 