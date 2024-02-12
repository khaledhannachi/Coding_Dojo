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

<div class="max-w-2xl mx-auto text-center mt-20">

    		<h1 class="text-4xl font-bold tracking-tight text-black sm:text-5xl xl:text-5xl sm:tracking-tight">
					<c:choose>
						<c:when test="${book.user.id==user_id }">
							<span class="text-orange-700">You</span>
						</c:when>
						<c:otherwise>
							<span class="text-orange-700">${book.user.userName }</span>
						</c:otherwise>
					</c:choose>
					read ${book.title} by ${book.author}
				</h1>
				<h2 class="text-xl font-bold tracking-tight text-black sm:text-lg xl:text-4xl sm:tracking-tight">
					Here are
					<c:choose>
						<c:when test="${book.user.id==user_id }">
							<span class="text-orange-700">Your</span>
						</c:when>
						<c:otherwise>
							<span class="text-orange-700">${book.user.userName }'s</span>
						</c:otherwise>
					</c:choose>
					thoughts:
				</h2>
    <p class="mt-6 text-lg leading-7 text-black/70 lg:leading-8 lg:text-xl">
        	${book.thoughts}
    </p>
    <div class="mt-8 flex justify-end">
       <c:if test="${book.user.id==user_id }">
					<button type="button"
						class="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">
						<a href="/books/edit/${book.id }">Edit</a>
					</button>

					<form action="/books/${book.id}" method="post">
						<button type="submit"
							class="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
							type="hidden" name="_method" value="delete">Delete</button>

					</form>
				</c:if>
    </div>
    <p class="mt-8 text-sm font-normal text-gray-600">
    </p>
</div>
</body>
</html>
