<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
  <script src="https://cdn.tailwindcss.com"></script>

</head>
<body>

<div class="h-screen bg-gradient-to-br from-blue-600 to-indigo-600 flex justify-center items-center w-full">


  <form action="/process" method= "POST">
    <div class="bg-white px-10 py-8 rounded-xl w-screen shadow-md max-w-sm">
      <div class="space-y-4">
        <h1 class="text-center text-2xl font-semibold text-gray-600">Send an Omikuji!</h1>
        <div>
          <label for="number" class="block mb-1 text-gray-600 font-semibold">Pick any number from 5 to 25:</label>
          <input type="number" name="number" class="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full" />
        </div>
        <div>
          <label for="city" class="block mb-1 text-gray-600 font-semibold">Enter the name of any city:</label>
          <input type="text" name="city" class="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full" />
        </div>
        <div>
          <label for="name" class="block mb-1 text-gray-600 font-semibold">Enter the name of any real person:</label>
          <input type="text" name="name" class="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full" />
        </div>
        <div>
          <label for="profemail" class="block mb-1 text-gray-600 font-semibold">Enter professional endeavor or hobby:</label>
          <input type="text" name="prof" class="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full" />
        </div>
        <div>
          <label for="thing" class="block mb-1 text-gray-600 font-semibold">Enter any type of living thing:</label>
          <input type="text" name="thing" class="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full" />
        </div>
        <div>
          <label for="someNice" class="block mb-1 text-gray-600 font-semibold">Say something nice to someone:</label>
          <input type="textarea" name="someNice" class="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full" />
        </div>

      </div>
      <button class="mt-4 w-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-indigo-100 py-2 rounded-md text-lg tracking-wide">Send</button>
    </div>
  </form>
</div>






</body>
</html>