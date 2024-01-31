<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
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
      Here's Your Omikuji!
    </h1>
    <p class="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
 In ${keynumber} years, you will live in ${keycity} with ${keyname}
as your roommate, ${keyprof} for a living. The next time 
you see a ${keything},you will have a good luck. 
Also, ${keysomeNice}.
    </p>
  </div>
  <div class="p-6 pt-0">
    <button
      class="mt-4 w-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-indigo-100 py-2 rounded-md text-lg tracking-wide"
      type="button"
      data-ripple-light="true"
    >
      <a href="/omikuji">Go Back</a>
    </button>
  </div>
</div>
</div>


</body>
</html>