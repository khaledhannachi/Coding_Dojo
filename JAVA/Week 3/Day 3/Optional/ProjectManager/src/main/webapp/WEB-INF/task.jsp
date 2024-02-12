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
					<a href="/projects"
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
 <form:form action="/projects/processProject" method="post" modelAttribute="project">
 <div class="flex flex-col justify-start text-left">
 <h1 class="text-left text-2xl font-bold text-gray-600">Project: ${project.title }</h1>   
 <h4 class="text-left text-xl font-semibold text-gray-600">Project Lead: ${project.user.userName }</h4>   
  </div>  
    <div class="mb-4">
        <form:label path="description" class="block mb-1 text-gray-600 font-semibold">Add a Task ticket for this Team</form:label>
        <form:textarea path="description" class="h-32 w-full resize-none rounded border border-gray-300 bg-white
         py-1 px-3 text-base leading-6 text-gray-700 outline-none transition-colors duration-200 ease-in-out 
         focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200" ></form:textarea>
                <form:errors path="description" class="text-red-600" />
    </div>
   
      <button type="submit" value="Create" class="mt-4 w-full bg-gradient-to-tr from-blue-600 to-indigo-600 
      text-indigo-100 py-2 rounded-md text-lg tracking-wide">Submit</button>
    </form:form>
</div>


</body>
</html>


 