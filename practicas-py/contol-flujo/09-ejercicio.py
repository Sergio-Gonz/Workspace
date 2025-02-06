print ("Bienvenido a la calculadora")
print ("Las operaciones son: suma, resta\n, multiplicación y division")
print ("Para terminar ingrese: salir")

comando =""
while comando.lower() != "salir":
        n1 = input ("Ingrese el primer numero: ")
        if n1 ==0:
            n1 = int (n1)
        else:
            comando = input ("Ingrese la operacion:")
        if comando.lower() == "salir":
            break

        if comando.lower() == "suma":
            n2 = input ("ingrese el segundo numero: ")
            n2 = int (n2)
            resultado = n1 + n2
            resultado = int(resultado)
            n1 = resultado

        elif comando.lower() == "resta":
            n2 = input ("ingrese el segundo numero: ")
            n2 = int (n2)

            resultado = n1 - n2
            resultado = int(resultado)
            n1 = resultado

        elif comando.lower() == "multi":
            n2 = input ("ingrese el segundo numero: ")
            n2 = int(n2)

            resultado = n1 * n2
            n1 = resultado

        elif comando.lower() == "div":
            n2 = input ("ingrese el segundo numero: ")
            n2 = int (n2)
            
            resultado = n1 / n2
            n1 = resultado

        mensaje = f"El resultado es : {resultado}"
        print (mensaje)

        #falta mejorar y practucar los true and false