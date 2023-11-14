# variable declaration
# Primitive
num1 = 42  #         Numbers
num2 = 2.3  #         Numbers
boolean = True  #         Boolean
string = "Hello World"  #         Strings
# - List
pizza_toppings = ["Pepperoni", "Sausage", "Jalepenos", "Cheese", "Olives"]
# - Dictionary
person = {"name": "John", "location": "Salt Lake", "age": 37, "is_balding": False}
# - Tuples
fruit = ("blueberry", "strawberry", "banana")
print(type(fruit))  #  type check
print(pizza_toppings[1])  # - log statement
pizza_toppings.append("Mushrooms")  # - add value
print(person["name"])  # - log statement
person["name"] = "George"
person["eye_color"] = "blue"
print(fruit[2])  # - log statement
# - conditional
#     - if
#     - else if
#     - else
if num1 > 45:
    print("It's greater")
else:
    print("It's lower")

if len(string) < 5:
    print("It's a short word!")
elif len(string) > 15:
    print("It's a long word!")
else:
    print("Just right!")
# - for loop
#     - start
#     - stop
#     - increment
#     - break
#     - continue
#     - sequence
for x in range(5):
    print(x)
for x in range(2, 5):
    print(x)
for x in range(2, 10, 3):
    print(x)
x = 0
# - while loop
#     - start
#     - stop
#     - increment
while x < 5:
    print(x)
    x += 1

pizza_toppings.pop()
pizza_toppings.pop(1)

print(person)  # - log statement
person.pop("eye_color")
print(person)  # - log statement

for topping in pizza_toppings:
    if topping == "Pepperoni":
        continue
    print("After 1st if statement")
    if topping == "Olives":
        break
# - function
#     - parameter
#     - argument
#     - return


def print_hello_ten_times():
    for num in range(10):
        print("Hello")


print_hello_ten_times()


def print_hello_x_times(x):
    for num in range(x):
        print("Hello")


print_hello_x_times(4)


def print_hello_x_or_ten_times(x=10):
    for num in range(x):
        print("Hello")


print_hello_x_or_ten_times()
print_hello_x_or_ten_times(4)


"""
Bonus section
"""

# print(num3)
# num3 = 72
# fruit[0] = 'cranberry'                    - TypeError: 'tuple' object does not support item assignment
# print(person['favorite_team'])            - KeyError: 'favorite_team'
# print(pizza_toppings[7])                  - IndexError: list index out of range
#   print(boolean)
# fruit.append('raspberry')                 - AttributeError: 'tuple' object has no attribute 'append'
# fruit.pop(1)                              - AttributeError: 'tuple' object has no attribute 'pop'
