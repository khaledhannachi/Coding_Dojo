from Ninjas import Ninja


# class pet
class Pet:
    def __init__(self, name, type, tricks, health, energy):
        self.name = name
        self.type = type
        self.tricks = tricks
        self.health = health
        self.energy = energy

    def sleep(self):
        self.energy += 25
        return self

    def eat(self):
        self.energy += 5
        self.health += 10
        return self

    def play(self):
        self.health += 5
        return self

    def noise(self):
        if self.type == Dog:
            print(f"{self.name} barks: Woof! Woof")
        print(f"sound of {self.name}")
        return self


class Dog(Pet):
    def __init__(self, name, type, tricks, health, energy, age):
        super().__init__(name, type, tricks, health, energy)
        self.age = age


cat = Pet("kiti", "cat", "fast_moves", 10, 100)
naruto = Ninja("naruto", "ozomaki", "sushi", "fish", cat)

naruto.walk().feed().bathe()
dog = Dog("wanda", "dog", "kind", 20, 100, 2)
dog.noise().play().eat()
