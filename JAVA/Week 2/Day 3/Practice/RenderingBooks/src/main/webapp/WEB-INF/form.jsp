<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <!-- New line below to use the JSP Standard Tag Library -->
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
<script src="https://cdn.tailwindcss.com"></script>
</head>
<body>

<div class="h-screen bg-gradient-to-br from-blue-600 to-indigo-600 flex justify-center items-center w-full">

  <form action="/books/processBook" method= "POST">
    <div class="bg-white px-10 py-8 rounded-xl w-screen shadow-md max-w-sm">
      <div class="space-y-4">
        <h1 class="text-center text-2xl font-semibold text-gray-600">Create a Book!</h1>
        <div>
          <label for="number" class="block mb-1 text-gray-600 font-semibold"> Title:</label>
          <input type="text" name="title" class="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full" />
        </div>
        <div>
          <label for="city" class="block mb-1 text-gray-600 font-semibold">Language:</label>
          <input type="text" name="language" class="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full" />
        </div>
        <div>
          <label for="name" class="block mb-1 text-gray-600 font-semibold">Description:</label>
          <input type="text" name="description" class="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full" />
        </div>
        <div>
          <label for="profemail" class="block mb-1 text-gray-600 font-semibold">Number of Pages:</label>
          <input type="text" name="numOfPages" class="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full" />
        </div>
     
      </div>
      <button class="mt-4 w-full bg-gradient-to-tr from-blue-600 to-indigo-600 
      text-indigo-100 py-2 rounded-md text-lg tracking-wide">Create</button>
    </div>
  </form>
</div>








</body>
</html>