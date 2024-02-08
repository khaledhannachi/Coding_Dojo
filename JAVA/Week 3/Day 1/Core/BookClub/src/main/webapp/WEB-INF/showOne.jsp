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
	<div
		class="h-screen  flex justify-center items-center w-full text-black">
		<div
			class="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
			<div class="p-6">

				<h1>
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
				<h2>
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

				<p
					class="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
					${book.thoughts}</p>
			</div>
			<div class="p-6 pt-0">
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
		</div>
	</div>

</body>
</html>
