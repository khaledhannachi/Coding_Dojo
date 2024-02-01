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


<div class="h-screen bg-gradient-to-br from-blue-600 to-indigo-600 flex justify-center items-center w-full text-black">
<div class="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
  <div class="p-6">
    <h1 class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
      Here's Your Book
    </h1>
    <p class="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
  	<h1>${book.title }</h1>
    <p>Description : ${book.description }</p>
    <p>Language : ${book.language }</p>
    <p>Pages : ${book.numberOfPages }</p>
    </p>
  </div>
  <div class="p-6 pt-0">
    <button
      class="mt-4 w-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-indigo-100 py-2 rounded-md text-lg tracking-wide"
      type="button"
      data-ripple-light="true"
    >
      <a href="/books">All Books</a>
    </button>
  </div>
</div>
</div>






</body>
</html>