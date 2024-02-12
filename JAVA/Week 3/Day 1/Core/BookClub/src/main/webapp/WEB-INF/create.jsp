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

  <div class="max-w-4xl mx-auto mt-16 flex w-full flex-col border rounded-lg bg-white p-8 shadow-md">
 <form:form action="/books/processBook" method="post" modelAttribute="book">
 <h1 class="text-center text-2xl font-bold text-gray-600">Add a Book to Your Shelf!</h1>   
    <div class="mb-4">
        <form:label path="title" class="block mb-1 text-gray-600 font-semibold">Title</form:label>
        <form:input path="title" class="w-full rounded border border-gray-300 bg-white py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200" />
           				<form:errors path="title" class="text-red-600" />
   
    </div>
    <div class="mb-4">
        <form:label path="author" class="block mb-1 text-gray-600 font-semibold">Author</form:label>
        <form:input path="author" class="w-full rounded border border-gray-300 bg-white py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200" />
                <form:errors path="author" class="text-red-600" />
    
    </div>
    <div class="mb-4">
        <form:label path="thoughts" class="block mb-1 text-gray-600 font-semibold">My thoughts</form:label>
        <form:textarea path="thoughts" class="h-32 w-full resize-none rounded border border-gray-300 bg-white py-1 px-3 text-base leading-6 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"></form:textarea>
            <form:errors path="thoughts" class="text-red-600" />
    
    </div>
      <button type="submit" value="Create" class="mt-4 w-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-indigo-100 py-2 rounded-md text-lg tracking-wide">Submit</button>
    </form:form>
</div>


</body>
</html>


 