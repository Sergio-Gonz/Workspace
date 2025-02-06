# x = input ("Ingrese el primer numero: ")
# y = input ("Ingrese el segundo numero: ")

# x = int(x)
# y = int(y)
gas = False
encendido = True
edad = 18 

if gas and encendido:
    print ("puedes avanzar")
else:
    print ("No puedes avanzar")

if gas or encendido:
    print ("puedes avanzar")

if not gas and (encendido or edad > 17):
    print ("puedes avanzar")