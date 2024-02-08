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
  <div class="flex justify-center items-center w-full">


  <form:form action="/books/processBook" method="post" modelAttribute="book">
    <div class="bg-white px-10 py-8 rounded-xl w-screen shadow-md max-w-sm">
      <div class="space-y-4">
        <h1 class="text-center text-2xl font-bold text-gray-600">Add a Book to Your Shelf!</h1>
        <div>
          <form:label path="title" for="number" class="block mb-1 text-gray-600 font-semibold">Title </form:label>
          <form:input path="title" type="text" name="title" class="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full" />
        				<form:errors path="title" class="text-red-600" />
        
        </div>
        <div>
          <form:label path="author" for="city" class="block mb-1 text-gray-600 font-semibold">Author</form:label>
          <form:input path="author" type="text" name="city" class="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full" />
        <form:errors path="author" class="text-red-600" />
        </div>
       
        <div>
          <form:label path="thoughts" for="someNice" class="block mb-1 text-gray-600 font-semibold">My thoughts</form:label>
          <form:input path="thoughts" type="textarea" name="thoughts" class="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full" />
        <form:errors path="thoughts" class="text-red-600" />
        </div>

      </div>
      <button type="submit" value="Create" class="mt-4 w-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-indigo-100 py-2 rounded-md text-lg tracking-wide">Submit</button>
    </div>
 </form:form>
</div>


</body>
</html>
