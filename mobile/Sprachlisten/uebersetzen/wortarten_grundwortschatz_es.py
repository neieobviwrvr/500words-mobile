# -*- coding: utf-8 -*-
"""Wort-fuer-Wort-Tagging fuer spanisch_phrasebook/grundwortschatz.

Nomen/Verb/Adjektiv/Konjunktion, wie fuer Deutsch/Schwedisch.
Erzeugt aus _erzeuge_grundwortschatz_es.py (Einmal-Helfer).

**Keine Konjunktion im Bestand** - wie in den anderen Sprachen: die
Grundwortschatz-Saetze sind zu kurz fuer echte Satzverbindungen.
"""

TAGS = [
    {"id": 1, "tags": [{"w": '¡Hola!', "c": None}]},  # ¡Hola!
    {"id": 2, "tags": [{"w": '¡Buenos', "c": 'a'}, {"w": 'días!', "c": 'n'}]},  # ¡Buenos días!
    {"id": 3, "tags": [{"w": '¡Buenas', "c": 'a'}, {"w": 'tardes!', "c": 'n'}]},  # ¡Buenas tardes!
    {"id": 4, "tags": [{"w": '¡Buenas', "c": 'a'}, {"w": 'noches!', "c": 'n'}]},  # ¡Buenas noches!
    {"id": 5, "tags": [{"w": '¿Cómo', "c": None}, {"w": 'estás?', "c": 'v'}]},  # ¿Cómo estás?
    {"id": 6, "tags": [{"w": 'Estoy', "c": 'v'}, {"w": 'bien,', "c": 'a'}, {"w": 'gracias.', "c": 'n'}]},  # Estoy bien, gracias.
    {"id": 7, "tags": [{"w": '¿Cómo', "c": None}, {"w": 'te', "c": None}, {"w": 'llamas?', "c": 'v'}]},  # ¿Cómo te llamas?
    {"id": 8, "tags": [{"w": 'Me', "c": None}, {"w": 'llamo', "c": 'v'}, {"w": 'Anna.', "c": 'n'}]},  # Me llamo Anna.
    {"id": 9, "tags": [{"w": '¿De', "c": None}, {"w": 'dónde', "c": None}, {"w": 'eres?', "c": 'v'}]},  # ¿De dónde eres?
    {"id": 10, "tags": [{"w": 'Vengo', "c": 'v'}, {"w": 'de', "c": None}, {"w": 'Alemania.', "c": 'n'}]},  # Vengo de Alemania.
    {"id": 11, "tags": [{"w": '¿Cuántos', "c": None}, {"w": 'años', "c": 'n'}, {"w": 'tienes?', "c": 'v'}]},  # ¿Cuántos años tienes?
    {"id": 12, "tags": [{"w": 'Tengo', "c": 'v'}, {"w": '25', "c": None}, {"w": 'años.', "c": 'n'}]},  # Tengo 25 años.
    {"id": 13, "tags": [{"w": 'Mucho', "c": None}, {"w": 'gusto', "c": 'n'}, {"w": 'en', "c": None}, {"w": 'conocerte.', "c": 'v'}]},  # Mucho gusto en conocerte.
    {"id": 14, "tags": [{"w": '¡Adiós!', "c": None}]},  # ¡Adiós!
    {"id": 15, "tags": [{"w": '¡Hasta', "c": None}, {"w": 'luego!', "c": None}]},  # ¡Hasta luego!
    {"id": 16, "tags": [{"w": '¡Chao!', "c": None}]},  # ¡Chao!
    {"id": 20, "tags": [{"w": '¿Hablas', "c": 'v'}, {"w": 'inglés?', "c": 'n'}]},  # ¿Hablas inglés?
    {"id": 21, "tags": [{"w": 'Hablo', "c": 'v'}, {"w": 'un', "c": None}, {"w": 'poco', "c": None}, {"w": 'de', "c": None}, {"w": 'español.', "c": 'n'}]},  # Hablo un poco de español.
    {"id": 22, "tags": [{"w": '¿Puedes', "c": 'v'}, {"w": 'hablar', "c": 'v'}, {"w": 'más', "c": None}, {"w": 'despacio,', "c": 'a'}, {"w": 'por', "c": None}, {"w": 'favor?', "c": 'n'}]},  # ¿Puedes hablar más despacio, por favor?
    {"id": 23, "tags": [{"w": 'No', "c": None}, {"w": 'entiendo.', "c": 'v'}]},  # No entiendo.
    {"id": 24, "tags": [{"w": '¿Puedes', "c": 'v'}, {"w": 'repetirlo,', "c": 'v'}, {"w": 'por', "c": None}, {"w": 'favor?', "c": 'n'}]},  # ¿Puedes repetirlo, por favor?
    {"id": 25, "tags": [{"w": '¿Cómo', "c": None}, {"w": 'se', "c": None}, {"w": 'dice', "c": 'v'}, {"w": 'eso', "c": None}, {"w": 'en', "c": None}, {"w": 'español?', "c": 'n'}]},  # ¿Cómo se dice eso en español?
    {"id": 33, "tags": [{"w": '¿Qué', "c": None}, {"w": 'hora', "c": 'n'}, {"w": 'es?', "c": 'v'}]},  # ¿Qué hora es?
    {"id": 34, "tags": [{"w": 'Son', "c": 'v'}, {"w": 'las', "c": None}, {"w": 'tres.', "c": None}]},  # Son las tres.
    {"id": 35, "tags": [{"w": '¿A', "c": None}, {"w": 'qué', "c": None}, {"w": 'hora', "c": 'n'}, {"w": 'empieza', "c": 'v'}, {"w": 'la', "c": None}, {"w": 'película?', "c": 'n'}]},  # ¿A qué hora empieza la película?
    {"id": 36, "tags": [{"w": '¿Cuándo', "c": None}, {"w": 'tienes', "c": 'v'}, {"w": 'tiempo?', "c": 'n'}]},  # ¿Cuándo tienes tiempo?
    {"id": 37, "tags": [{"w": 'Mañana', "c": None}, {"w": 'no', "c": None}, {"w": 'tengo', "c": 'v'}, {"w": 'tiempo.', "c": 'n'}]},  # Mañana no tengo tiempo.
    {"id": 38, "tags": [{"w": '¿Podemos', "c": 'v'}, {"w": 'vernos', "c": 'v'}, {"w": 'la', "c": None}, {"w": 'próxima', "c": 'a'}, {"w": 'semana?', "c": 'n'}]},  # ¿Podemos vernos la próxima semana?
    {"id": 39, "tags": [{"w": 'Tengo', "c": 'v'}, {"w": 'una', "c": None}, {"w": 'cita', "c": 'n'}, {"w": 'a', "c": None}, {"w": 'las', "c": None}, {"w": '10.', "c": None}]},  # Tengo una cita a las 10.
    {"id": 40, "tags": [{"w": '¿Qué', "c": None}, {"w": 'día', "c": 'n'}, {"w": 'es', "c": 'v'}, {"w": 'hoy?', "c": None}]},  # ¿Qué día es hoy?
    {"id": 41, "tags": [{"w": 'Hoy', "c": None}, {"w": 'es', "c": 'v'}, {"w": 'lunes.', "c": 'n'}]},  # Hoy es lunes.
    {"id": 42, "tags": [{"w": '¿Cuándo', "c": None}, {"w": 'es', "c": 'v'}, {"w": 'tu', "c": None}, {"w": 'cumpleaños?', "c": 'n'}]},  # ¿Cuándo es tu cumpleaños?
    {"id": 43, "tags": [{"w": 'Mi', "c": None}, {"w": 'cumpleaños', "c": 'n'}, {"w": 'es', "c": 'v'}, {"w": 'en', "c": None}, {"w": 'marzo.', "c": 'n'}]},  # Mi cumpleaños es en marzo.
    {"id": 44, "tags": [{"w": '¿Cuánto', "c": None}, {"w": 'cuesta', "c": 'v'}, {"w": 'esto?', "c": None}]},  # ¿Cuánto cuesta esto?
    {"id": 45, "tags": [{"w": 'Cuesta', "c": 'v'}, {"w": 'diez', "c": None}, {"w": 'euros.', "c": 'n'}]},  # Cuesta diez euros.
    {"id": 46, "tags": [{"w": 'Quisiera', "c": 'v'}, {"w": 'la', "c": None}, {"w": 'cuenta,', "c": 'n'}, {"w": 'por', "c": None}, {"w": 'favor.', "c": 'n'}]},  # Quisiera la cuenta, por favor.
    {"id": 92, "tags": [{"w": '¿Dónde', "c": None}, {"w": 'está', "c": 'v'}, {"w": 'el', "c": None}, {"w": 'baño?', "c": 'n'}]},  # ¿Dónde está el baño?
    {"id": 136, "tags": [{"w": '¡Ayuda!', "c": 'n'}]},  # ¡Ayuda!
    {"id": 190, "tags": [{"w": '¡Gracias!', "c": 'n'}]},  # ¡Gracias!
    {"id": 191, "tags": [{"w": '¡Muchas', "c": 'a'}, {"w": 'gracias!', "c": 'n'}]},  # ¡Muchas gracias!
    {"id": 192, "tags": [{"w": 'De', "c": None}, {"w": 'nada.', "c": None}]},  # De nada.
    {"id": 193, "tags": [{"w": '¡Perdón!', "c": 'n'}]},  # ¡Perdón!
    {"id": 194, "tags": [{"w": 'Lo', "c": None}, {"w": 'siento.', "c": 'v'}]},  # Lo siento.
    {"id": 195, "tags": [{"w": 'No', "c": None}, {"w": 'hay', "c": 'v'}, {"w": 'problema.', "c": 'n'}]},  # No hay problema.
    {"id": 196, "tags": [{"w": 'Sí.', "c": None}]},  # Sí.
    {"id": 197, "tags": [{"w": 'No.', "c": None}]},  # No.
    {"id": 198, "tags": [{"w": 'No', "c": None}, {"w": 'lo', "c": None}, {"w": 'sé.', "c": 'v'}]},  # No lo sé.
    {"id": 199, "tags": [{"w": 'Uno,', "c": None}, {"w": 'dos,', "c": None}, {"w": 'tres.', "c": None}]},  # Uno, dos, tres.
    {"id": 200, "tags": [{"w": '¿Cuántos?', "c": None}]},  # ¿Cuántos?
    {"id": 201, "tags": [{"w": 'Dos,', "c": None}, {"w": 'por', "c": None}, {"w": 'favor.', "c": 'n'}]},  # Dos, por favor.
    {"id": 202, "tags": [{"w": 'Solo', "c": None}, {"w": 'uno,', "c": None}, {"w": 'por', "c": None}, {"w": 'favor.', "c": 'n'}]},  # Solo uno, por favor.
    {"id": 203, "tags": [{"w": 'Es', "c": 'v'}, {"w": 'suficiente.', "c": 'a'}]},  # Es suficiente.
    {"id": 204, "tags": [{"w": '¿Cuánto', "c": None}, {"w": 'es', "c": 'v'}, {"w": 'en', "c": None}, {"w": 'total?', "c": None}]},  # ¿Cuánto es en total?
    {"id": 205, "tags": [{"w": 'Somos', "c": 'v'}, {"w": 'cuatro', "c": None}, {"w": 'personas.', "c": 'n'}]},  # Somos cuatro personas.
    {"id": 206, "tags": [{"w": 'Necesito', "c": 'v'}, {"w": 'ayuda.', "c": 'n'}]},  # Necesito ayuda.
    {"id": 207, "tags": [{"w": '¿Dónde', "c": None}, {"w": 'está', "c": 'v'}, {"w": 'la', "c": None}, {"w": 'salida?', "c": 'n'}]},  # ¿Dónde está la salida?
    {"id": 208, "tags": [{"w": 'He', "c": 'v'}, {"w": 'perdido', "c": 'v'}, {"w": 'mi', "c": None}, {"w": 'móvil.', "c": 'n'}]},  # He perdido mi móvil.
    {"id": 209, "tags": [{"w": 'He', "c": 'v'}, {"w": 'perdido', "c": 'v'}, {"w": 'mi', "c": None}, {"w": 'pasaporte.', "c": 'n'}]},  # He perdido mi pasaporte.
    {"id": 210, "tags": [{"w": 'Este', "c": None}, {"w": 'es', "c": 'v'}, {"w": 'mi', "c": None}, {"w": 'amigo.', "c": 'n'}]},  # Este es mi amigo.
    {"id": 211, "tags": [{"w": 'Es', "c": 'v'}, {"w": 'mi', "c": None}, {"w": 'primera', "c": None}, {"w": 'vez', "c": 'n'}, {"w": 'aquí.', "c": None}]},  # Es mi primera vez aquí.
    {"id": 212, "tags": [{"w": '¿Qué', "c": None}, {"w": 'significa', "c": 'v'}, {"w": 'eso?', "c": None}]},  # ¿Qué significa eso?
    {"id": 213, "tags": [{"w": '¿Puede', "c": 'v'}, {"w": 'escribirlo,', "c": 'v'}, {"w": 'por', "c": None}, {"w": 'favor?', "c": 'n'}]},  # ¿Puede escribirlo, por favor?
    {"id": 478, "tags": [{"w": 'Perdone,', "c": 'v'}, {"w": '¿dónde', "c": None}, {"w": 'está', "c": 'v'}, {"w": 'el', "c": None}, {"w": 'baño?', "c": 'n'}]},  # Perdone, ¿dónde está el baño?
    {"id": 479, "tags": [{"w": 'Nos', "c": None}, {"w": 'quedamos', "c": 'v'}, {"w": 'cinco', "c": None}, {"w": 'minutos.', "c": 'n'}]},  # Nos quedamos cinco minutos.
    {"id": 480, "tags": [{"w": 'Dilo', "c": 'v'}, {"w": 'otra', "c": None}, {"w": 'vez,', "c": 'n'}, {"w": 'por', "c": None}, {"w": 'favor.', "c": 'n'}]},  # Dilo otra vez, por favor.
    {"id": 481, "tags": [{"w": '¿Sois', "c": 'v'}, {"w": 'estudiantes?', "c": 'n'}]},  # ¿Sois estudiantes?
    {"id": 482, "tags": [{"w": 'Solo', "c": None}, {"w": 'tengo', "c": 'v'}, {"w": 'uno.', "c": None}]},  # Solo tengo uno.
]
