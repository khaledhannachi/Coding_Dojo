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
   
<!-- 		Create a Book Form -->
		<form:form action="/ninjas/new/process" method="post"
			modelAttribute="ninja">
			<form:errors path="*" />
			<div class="flex">
				<form:label path="dojo">Dojo </form:label>
				<form:select path="dojo">
				<c:forEach items="${dojos}" var="dojo">
				<option value="${dojo.id}">
				${dojo.name }
				</option>
				</c:forEach>
				</form:select>
			</div>
			<div>
				<form:label path="firstname">Title</form:label>
				<form:input path="firstname"/>
			</div>
			<div>
				<form:label path="lastname">Author</form:label>

				<form:input path="lastname" />
			</div>

			<div>
				<form:label path="age">Pages</form:label>

				<form:input type="number" path="age" />
			</div>
			
			
			<input type="submit" value="Create" />
		</form:form>
    
    
    
    
</body>
</html>
