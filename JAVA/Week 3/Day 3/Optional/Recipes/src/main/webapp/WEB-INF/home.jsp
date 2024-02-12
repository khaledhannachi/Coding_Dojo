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
<title>Book Club</title>
<script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
<div class="flex justify-between pl-32 pr-32 mt-24 ">
<div class="flex flex-col gap-4">
<h2 class="text-3xl font-bold  flex">Welcome, ${postedBy.userName }</h2>
<p class="font-bold text-1xl">Recipes</p>
</div>
<div class="flex flex-col gap-4">
<button type="submit" class="  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "><a  href="/logout">Logout</a></button>
<button type="submit" class="  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "><a  href="/recipes/new">Add new recipes</a></button>
</div>
</div>

	
	<div class="pl-32 pr-32">
		<table class="min-w-full border-collapse block md:table mt-12">
			<thead class="block md:table-header-group">
				<tr
					class="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative ">

					<th
						class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">ID</th>
					<th
						class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Name</th>
					<th
						class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Image</th>
					<th
						class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Posted By</th>

				</tr>
			</thead>
			<tbody class="block md:table-row-group">

				<c:forEach var="oneRecipe" items="${allRecipes}">
					<tr class=" border border-grey-500 md:border-none block md:table-row">

						<td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">${oneRecipe.id}</td>
						<td class="p-2 md:border md:border-grey-500 text-left block md:table-cell text-blue-500"><a
							href="recipes/${oneRecipe.id }">${oneRecipe.name}</a></td>
						<td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><img src="${oneRecipe.image}" alt="name" /> </td>
						<td class="p-2 md:border md:border-grey-500 text-left  md:table-cell  flex">
							${oneRecipe.postedBy.userName }
						</td>

					</tr>
				</c:forEach>
			</tbody>
		</table>
	</div>
	
</body>
</html>