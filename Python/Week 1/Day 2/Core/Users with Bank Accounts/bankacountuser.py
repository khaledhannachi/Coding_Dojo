class BankAccount:
    def __init__(self, int_rate=0.01, balance=0):
        self.int_rate = int_rate
        self.balance = balance

    def deposit(self, amount):
        self.balance += amount
        return self

    def withdraw(self, amount):
        if self.balance >= amount:
            self.balance -= amount
        else:
            print("Insufficient funds: Charging a $5 fee")
            self.balance -= 5
        return self

    def display_account_info(self):
        print(f"Balance: ${self.balance}")
        return self

    def yield_interest(self):
        if self.balance > 0:
            interest = self.balance * self.int_rate
            self.balance += interest
        return self


class User:
    def __init__(self, name, email):
        self.name = name
        self.email = email
        self.account = BankAccount(int_rate=0.02, balance=0)

    def make_deposit(self, amount):
        self.account.deposit(amount)
        return self

    def make_withdrawal(self, amount):
        self.account.withdraw(amount)
        return self

    def display_user_balance(self):
        print(f"User: {self.name}, Email: {self.email}")
        self.account.display_account_info()
        return self

    def transfer_money(self, other_user, amount):
        self.make_withdrawal(amount)
        other_user.make_deposit(amount)
        return self


# Example Usage:
user1 = User("Alice", "alice@email.com")
user2 = User("Bob", "bob@email.com")

user1.make_deposit(500).make_withdrawal(200).display_user_balance()
# Output: User: Alice, Email: alice@email.com\nBalance: $300

user2.make_deposit(1000).make_withdrawal(100).display_user_balance()
# Output: User: Bob, Email: bob@email.com\nBalance: $900

user1.transfer_money(user2, 50).display_user_balance()
# Output: User: Alice, Email: alice@email.com\nBalance: $250
# User: Bob, Email: bob@email.com\nBalance: $950
