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
		<form:form action="/dojos/process" method="post"
			modelAttribute="dojo">
			<form:errors path="*" />
			<div class:"flex gap-10">
				<form:label path="name">Dojo Name  :</form:label>

				<form:input path="name" />
			</div>
			
			<input type="submit" value="Create" />
		</form:form>

</body>
</html>
