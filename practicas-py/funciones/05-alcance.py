#No usar variables globales
saludo = 25



def saludar ():
    global saludo
    saludo = "Hola Mundo"
    print (saludo)


def saludachanhito():
    saludo = "Hola Chanchito"
    print (saludo)

resultado1 = saludo + 3

print (resultado1)
saludar()
resultado2 = saludo +3
print(resultado2)