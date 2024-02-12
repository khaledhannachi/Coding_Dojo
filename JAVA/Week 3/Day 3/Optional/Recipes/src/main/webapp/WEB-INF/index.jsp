<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!-- New line below to use the JSP Standard Tag Library -->
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ page isErrorPage="true"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Home Page</title>
<script src="https://cdn.tailwindcss.com"></script>
</head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>


<div class="flex justify-between ml-64 mr-64 items-start">
<section class=" flex flex-col items-start">
            <nav>
                <div class="px-4 py-6">
                    
                </div>
            </nav>
            <div class="flex flex-1 items-center justify-center">
                <div class="rounded-lg sm:border-2 px-4 lg:px-24 py-16 lg:max-w-xl sm:max-w-md w-full text-center">
                    <form:form action="/register" method="POST"
		modelAttribute="newUser"  class="text-center">
                        <h1 class="font-bold tracking-wider text-3xl mb-8 w-full text-gray-600">
                            Register
                        </h1>
                        <div class="py-2 text-left">
                        <form:label path="userName" class="block mb-2 text-sm font-medium text-gray-900 ">UserName</form:label>
							<form:errors class="text-red-500" path="userName" />
                            <form:input path="userName"  class="bg-gray-200 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 "  />
                        </div>
                        <div class="py-2 text-left">
                        <form:label path="email" class="block mb-2 text-sm font-medium text-gray-900 ">Email</form:label>
							<form:errors class="text-red-500" path="email" />
                            <form:input path="email" type="email" class="bg-gray-200 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 "  />
                        </div>
                        <div class="py-2 text-left">
                         <form:label path="password" class="block mb-2 text-sm font-medium text-gray-900 ">Password</form:label>
							<form:errors class="text-red-500" path="password" />
                            <form:input path="password" type="password" class="bg-gray-200 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 "  />
                        </div>
                        <div class="py-2 text-left">
                         <form:label path="confirm" class="block mb-2 text-sm font-medium text-gray-900 ">Confirm Password</form:label>
							<form:errors class="text-red-500" path="confirm" />
                            <form:input path="confirm" type="password" class="bg-gray-200 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 " />
                        </div>
                        <div class="py-2">
                            <button type="submit" class="border-2 border-gray-100 focus:outline-none bg-purple-600 text-white font-bold tracking-wider block w-full p-2 rounded-lg focus:border-gray-700 hover:bg-purple-700">
                                Sign In
                            </button>
                        </div>
                    </form:form>
                   
                   
                </div>
            </div>
        </section>
        <section class=" flex flex-col ">
            <nav>
                <div class="px-4 py-6">
                    
                </div>
            </nav>
            <div class="flex flex-1 items-center justify-center">
                <div class="rounded-lg sm:border-2 px-4 lg:px-24 py-16 lg:max-w-xl sm:max-w-md w-full text-center">
                   <form:form action="/login" method="POST"
		modelAttribute="newLogin"  class="text-center">
                        <h1 class="font-bold tracking-wider text-3xl mb-8 w-full text-gray-600">
                            Login
                        </h1>
                        
                        <div class="py-2 text-left">
                        <form:label path="email" class="block mb-2 text-sm font-medium text-gray-900 ">Email</form:label>
							<form:errors class="text-red-500" path="email" />
                            <form:input path="email" type="email" class="bg-gray-200 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 "  />
                        </div>
                        <div class="py-2 text-left">
                         <form:label path="password" class="block mb-2 text-sm font-medium text-gray-900 ">Password</form:label>
							<form:errors class="text-red-500" path="password" />
                            <form:input path="password" type="password" class="bg-gray-200 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 "  />
                        </div>
                        
                        <div class="py-2">
                            <button type="submit" class="border-2 border-gray-100 focus:outline-none bg-purple-600 text-white font-bold tracking-wider block w-full p-2 rounded-lg focus:border-gray-700 hover:bg-purple-700">
                                Login
                            </button>
                        </div>
                    </form:form>
                   
                   
                </div>
            </div>
        </section>
</div>

</body>
</html>