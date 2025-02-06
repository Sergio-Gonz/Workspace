n1 = input("Ingresa primer numero: ")
n2 = input("Ingresa segundo numero: ")

n1 = int (n1)
n2 = int (n2)

suma = n1 + n2 
resta = n1 - n2 
multi = n1 * n2 
div = n1 / n2

mensaje = f"""
Para los números {n1} y {n2},
El  resutad de la suma es: {suma}.
El resutad de la resta es: {resta}.
El resutad de la multiplicacion es: {multi}.
El resutad de la division es: {div}.

"""

print (mensaje)
