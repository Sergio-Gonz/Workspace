def es_palindromo(texto): 
    texto_c = texto.lower().replace(" ","") 
    longitud_texto = len(texto_c) 
    texto_invertido = texto_c[longitud_texto::-1]
    if texto_c == texto_invertido:
        return True
    else:
        return False        

print ("abba", es_palindromo("abba"))
print ("reconocer", es_palindromo("reconocer"))
print ("amo la paloma", es_palindromo("amo la paloma"))
print ("A cavar a caravaca",es_palindromo("a cavar a caravaca"))