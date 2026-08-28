# -*- coding: utf-8 -*-
"""
Baut spanisch_phrasebook.py aus dem echten phrasebook_master-Datenstand
(de_full.json, frisch aus Supabase gezogen) + einer manuell uebersetzten
TRANSLATIONS-Tabelle. Vorteil ggue. direktem Abtippen der 189 Saetze:
scenario/tense/difficulty/category/Konzept-Reihenfolge kommen 1:1 aus der
echten Quelle statt erneut von Hand uebertragen zu werden (Fehlerquelle
beim Schwedisch-Import, siehe CLAUDE.md id-Verschiebungs-Bug - hier bewusst
vermieden).

Konzept-KEYS bleiben identisch zum Deutschen (z.B. 'wie_heisst') - das sind
interne Bezeichner, keine Nutzertexte, siehe schwedisch_phrasebook.py-Praxis.
Nur die synonyms-WERTE werden auf Spanisch uebersetzt. Cluster-Zuordnung
(verb_cluster) folgt als eigener Schritt danach (wie bei Schwedisch), nicht
in dieser Datei.

Nutzung: python build_spanisch.py  (erzeugt spanisch_phrasebook.py daneben)
"""
import json
import os

HERE = os.path.dirname(os.path.abspath(__file__))
SRC = r"C:\Users\User\AppData\Local\Temp\claude\C--Users-User-Desktop-App-500-words\e60a1fce-dc40-49c3-9f81-2f261861e4b0\scratchpad\de_full.json"

# id -> (spanischer Satz, {concept_key: [synonyme]}, {optional_concept_key: [synonyme]})
TRANSLATIONS = {
    1: ("¡Hola!", {"hallo": ["hola", "qué tal"]}, {}),
    2: ("¡Buenos días!", {"morgen_gruss": ["buenos días"]}, {}),
    3: ("¡Buenas tardes!", {"tag_gruss": ["buenas tardes"]}, {}),
    4: ("¡Buenas noches!", {"abend_gruss": ["buenas noches"]}, {}),
    5: ("¿Cómo estás?", {"wie_gehts": ["cómo estás", "qué tal", "cómo te va"]}, {}),
    6: ("Estoy bien, gracias.", {"gut_danke": ["bien", "estoy bien", "bien gracias"]}, {}),
    7: ("¿Cómo te llamas?", {"wie_heisst": ["cómo te llamas", "cuál es tu nombre"]}, {}),
    8: ("Me llamo Anna.", {"heisse_x": ["me llamo", "mi nombre es"]}, {}),
    9: ("¿De dónde eres?", {"woher": ["de dónde eres", "de dónde vienes"]}, {}),
    10: ("Vengo de Alemania.", {"komme_aus": ["vengo de alemania", "soy de alemania", "de alemania"]}, {}),
    11: ("¿Cuántos años tienes?", {"wie_alt": ["cuántos años tienes"]}, {}),
    12: ("Tengo 25 años.", {"alter": ["tengo 25 años", "25 años", "25"]}, {}),
    13: ("Mucho gusto en conocerte.", {"freut_mich": ["mucho gusto", "encantado de conocerte", "un placer conocerte"]}, {}),
    14: ("¡Adiós!", {"wiedersehen": ["adiós", "hasta la vista"]}, {}),
    15: ("¡Hasta luego!", {"bis_spaeter": ["hasta luego", "hasta después"]}, {}),
    16: ("¡Chao!", {"tschuess": ["chao", "chau", "adiós"]}, {}),
    17: ("¿A qué te dedicas?", {"beruf_frage": ["a qué te dedicas", "cuál es tu profesión", "en qué trabajas"]}, {}),
    18: ("Soy estudiante.", {"student": ["estudiante", "soy estudiante"]}, {}),
    19: ("Trabajo como profesor.", {"beruf": ["profesor", "trabajo como profesor"]}, {}),
    20: ("¿Hablas inglés?", {"sprache_frage": ["inglés", "hablas inglés"]}, {}),
    21: ("Hablo un poco de alemán.", {"bisschen_deutsch": ["un poco de alemán", "algo de alemán"]}, {}),
    22: ("¿Puedes hablar más despacio, por favor?", {"langsamer": ["más despacio", "hablar más despacio"]}, {}),
    23: ("No entiendo.", {"nicht_verstehen": ["no entiendo", "no comprendo"]}, {}),
    24: ("¿Puedes repetirlo, por favor?", {"wiederholen": ["repetirlo", "repetir", "puedes repetir"]}, {}),
    25: ("¿Cómo se dice eso en alemán?", {"wie_sagt_man": ["cómo se dice", "en alemán"]}, {}),
    26: ("¿Estás casado?", {"verheiratet": ["casado", "casada", "estás casado"]}, {}),
    27: ("¿Tienes hermanos?", {"geschwister": ["hermanos", "tienes hermanos"]}, {}),
    28: ("Tengo una hermana.", {"schwester": ["hermana"]}, {}),
    29: ("¿Cuáles son tus aficiones?", {"hobbys_frage": ["aficiones", "hobbies", "pasatiempos"]}, {}),
    30: ("Me gusta leer libros.", {"lesen": ["me gusta leer", "leer libros"]}, {}),
    31: ("¿Dónde vives?", {"wo_wohnst": ["dónde vives"]}, {}),
    32: ("Vivo en Berlín.", {"wohne_in": ["vivo en", "berlín"]}, {}),
    33: ("¿Qué hora es?", {"wie_spaet": ["qué hora es"]}, {}),
    34: ("Son las tres.", {"uhrzeit": ["son las tres", "las tres"]}, {}),
    35: ("¿A qué hora empieza la película?", {"beginn_frage": ["a qué hora", "cuándo empieza"], "film": ["película"]}, {}),
    36: ("¿Cuándo tienes tiempo?", {"wann_zeit": ["cuándo tienes tiempo"]}, {}),
    37: ("Mañana no tengo tiempo.", {"keine_zeit": ["no tengo tiempo", "mañana no tengo tiempo"]}, {}),
    38: ("¿Podemos vernos la próxima semana?", {"treffen": ["vernos", "encontrarnos", "quedar"]}, {"naechste_woche": ["próxima semana"]}),
    39: ("Tengo una cita a las 10.", {"termin": ["cita", "una cita"], "zehn_uhr": ["las 10", "las diez"]}, {}),
    40: ("¿Qué día es hoy?", {"welcher_tag": ["qué día es hoy", "qué día"]}, {}),
    41: ("Hoy es lunes.", {"tag": ["lunes"]}, {}),
    42: ("¿Cuándo es tu cumpleaños?", {"geburtstag_frage": ["cuándo es tu cumpleaños", "cumpleaños"]}, {}),
    43: ("Mi cumpleaños es en marzo.", {"geburtstag": ["cumpleaños"], "maerz": ["marzo"]}, {}),
    44: ("¿Cuánto cuesta esto?", {"kosten_frage": ["cuánto cuesta", "qué precio tiene"]}, {}),
    # Waehrungswort "euro" bewusst nicht Pflicht, siehe phrasebook_master.py-
    # Kommentar (2026-08-08) - hier direkt beim Aufbau schon so gebaut statt
    # denselben Fehler erst zu importieren und dann zu reparieren.
    45: ("Cuesta diez euros.", {"preis": ["diez", "10"]}, {"preis_euro": ["euros", "euro"]}),
    46: ("Quisiera la cuenta, por favor.", {"rechnung": ["la cuenta", "cuenta por favor"]}, {}),
    47: ("Tengo una reserva.", {"reservierung": ["una reserva", "reserva"]}, {}),
    48: ("¿Tiene alguna habitación libre?", {"zimmer_frage": ["habitación libre", "habitación"]}, {}),
    49: ("Quisiera una habitación individual, por favor.", {"einzelzimmer": ["habitación individual", "habitación sencilla"]}, {}),
    50: ("¿Cuánto cuesta la noche?", {"preis_nacht": ["cuesta la noche", "precio por noche"]}, {}),
    51: ("¿El desayuno está incluido?", {"fruehstueck": ["desayuno"]}, {}),
    52: ("¿Cuándo es el check-in?", {"checkin": ["check-in", "registro de entrada"]}, {}),
    53: ("Quisiera hacer el check-out.", {"checkout": ["check-out", "hacer el checkout"]}, {}),
    54: ("¿Hay wifi aquí?", {"wlan": ["wifi", "internet"]}, {}),
    55: ("¿Cuál es la contraseña del wifi?", {"wlan_passwort": ["contraseña", "contraseña del wifi"]}, {}),
    56: ("Mi habitación no está limpia.", {"nicht_sauber": ["no está limpia", "sucia"]}, {}),
    57: ("El aire acondicionado no funciona.", {"klimaanlage_kaputt": ["no funciona", "aire acondicionado no funciona"]}, {}),
    58: ("¿Puede llamarme un taxi?", {"taxi": ["taxi"]}, {}),
    59: ("¿Dónde está el ascensor?", {"aufzug": ["ascensor"]}, {}),
    60: ("He perdido mi llave.", {"schluessel_verloren": ["perdido mi llave", "he perdido la llave", "llave perdida"]}, {}),
    61: ("¿Dónde está la estación de tren?", {"bahnhof": ["estación de tren", "estación"]}, {}),
    62: ("¿Cuándo sale el próximo tren a Berlín?", {"naechster_zug": ["próximo tren", "tren"], "berlin": ["berlín"]}, {}),
    63: ("Quisiera un billete a Múnich, por favor.", {"fahrkarte": ["billete", "boleto"], "muenchen": ["múnich"]}, {}),
    64: ("¿Está libre este asiento?", {"platz_frei": ["asiento libre", "libre"]}, {}),
    65: ("¿Tengo que hacer transbordo?", {"umsteigen": ["transbordo", "hacer transbordo"]}, {}),
    66: ("¿De qué andén sale el tren?", {"gleis": ["andén"]}, {}),
    67: ("El tren tiene retraso.", {"verspaetung": ["retraso", "con retraso"]}, {}),
    68: ("¿Dónde está la parada de autobús?", {"bushaltestelle": ["parada de autobús", "parada de bus"]}, {}),
    69: ("¿Qué autobús va al aeropuerto?", {"bus_flughafen": ["autobús al aeropuerto"], "flughafen": ["aeropuerto"]}, {}),
    70: ("Perdí mi vuelo.", {"flug_verpasst": ["perdí mi vuelo", "vuelo perdido"]}, {}),
    71: ("¿Dónde está el mostrador de check-in?", {"checkin_schalter": ["mostrador de check-in", "check-in"]}, {}),
    72: ("Quisiera alquilar un coche.", {"mietwagen": ["alquilar un coche", "alquilar coche"]}, {}),
    73: ("¿Cómo llego al puerto?", {"hafen": ["puerto"]}, {}),
    74: ("¿Cuánto cuesta el trayecto al aeropuerto?", {"fahrt_kosten": ["cuánto cuesta el trayecto", "cuesta el trayecto"], "flughafen": ["aeropuerto"]}, {}),
    75: ("Estuve en Francia el año pasado.", {"frankreich": ["francia"]}, {"letztes_jahr": ["año pasado"]}),
    76: ("El próximo año voy a Italia.", {"italien": ["italia"]}, {"naechstes_jahr": ["próximo año"]}),
    77: ("¿Dónde puedo facturar mi equipaje?", {"gepaeck_aufgeben": ["facturar el equipaje", "equipaje"]}, {}),
    78: ("Mi equipaje no ha llegado.", {"gepaeck_fehlt": ["equipaje no ha llegado", "equipaje perdido"]}, {}),
    79: ("Quisiera una mesa para dos personas.", {"tisch": ["mesa"], "anzahl_zwei": ["dos", "2"]}, {}),
    80: ("¿Tiene una mesa libre?", {"tisch_frei": ["mesa libre", "mesa"]}, {}),
    81: ("La carta, por favor.", {"speisekarte": ["carta", "menú"]}, {}),
    82: ("¿Qué me recomienda?", {"empfehlung": ["recomienda", "recomiendo", "qué me recomienda"]}, {}),
    83: ("Soy vegetariano.", {"vegetarier": ["vegetariano", "vegetariana"]}, {}),
    84: ("Tengo una alergia a los frutos secos.", {"allergie": ["alergia"], "nuesse": ["frutos secos", "nueces"]}, {}),
    85: ("Quisiera un agua, por favor.", {"wasser": ["agua"]}, {}),
    86: ("¿Qué desea beber?", {"trinken_frage": ["beber", "qué desea beber", "qué quiere tomar"]}, {}),
    87: ("¡Buen provecho!", {"guten_appetit": ["buen provecho"]}, {}),
    88: ("La comida está muy buena.", {"schmeckt_gut": ["está muy buena", "sabe bien", "muy rica"]}, {}),
    89: ("¿Podemos pagar, por favor?", {"zahlen": ["pagar", "la cuenta por favor"]}, {}),
    90: ("¿Está incluido en el precio?", {"im_preis": ["incluido en el precio", "incluido"]}, {}),
    91: ("Quisiera pedir algo.", {"bestellen": ["pedir algo", "pedir"]}, {}),
    92: ("¿Dónde está el baño?", {"toilette": ["baño", "servicio", "aseo"]}, {}),
    93: ("Yo no pedí esto.", {"nicht_bestellt": ["no pedí esto", "no lo pedí"]}, {}),
    94: ("¿Puede traerme la cuenta por separado?", {"rechnung_getrennt": ["por separado", "cuenta separada"]}, {}),
    95: ("Ayer comí en un restaurante.", {"restaurant": ["restaurante"]}, {"gestern": ["ayer"]}),
    96: ("Quisiera reservar una mesa para mañana por la noche.", {"reservieren": ["reservar"], "morgen_abend": ["mañana por la noche"]}, {}),
    97: ("¿Está reservada esta mesa?", {"schon_reserviert": ["reservada", "ya reservada", "ya está reservada"]}, {}),
    98: ("Estaba muy rico.", {"war_lecker": ["estaba muy rico", "muy bueno", "estuvo delicioso"]}, {}),
    99: ("¿Puedo probármelo?", {"anprobieren": ["probármelo", "probarme esto"]}, {}),
    100: ("¿Dónde está el probador?", {"umkleidekabine": ["probador", "vestidor"]}, {}),
    101: ("¿Lo tiene también en talla M?", {"groesse": ["talla m", "talla"]}, {}),
    102: ("Busco un regalo para mi madre.", {"geschenk": ["regalo", "busco un regalo"]}, {"mutter": ["madre"]}),
    103: ("¿Puedo pagar con tarjeta?", {"karte_zahlen": ["pagar con tarjeta", "con tarjeta"]}, {}),
    104: ("Solo efectivo, por favor.", {"bargeld": ["efectivo", "dinero en efectivo"]}, {}),
    105: ("Es demasiado caro.", {"zu_teuer": ["demasiado caro", "muy caro"]}, {}),
    106: ("¿Hay descuento?", {"rabatt": ["descuento"]}, {}),
    107: ("Quisiera devolver esto.", {"zurueckgeben": ["devolver esto", "devolver"]}, {}),
    108: ("¿Tiene una bolsa?", {"tuete": ["bolsa"]}, {}),
    109: ("¿Cuándo cierra la tienda?", {"schliesst": ["cierra", "cuándo cierra"]}, {}),
    110: ("Solo estoy mirando.", {"nur_umschauen": ["solo estoy mirando", "solo miro"]}, {}),
    111: ("¿Puede ayudarme?", {"helfen": ["ayudarme", "ayudar"]}, {}),
    112: ("Ayer compré un vestido nuevo.", {"gekauft": ["compré"], "kleid": ["vestido"]}, {}),
    113: ("¿Lo tiene en otro color?", {"andere_farbe": ["otro color"]}, {}),
    114: ("Disculpe, ¿cómo llego a la estación de tren?", {"bahnhof": ["estación de tren", "estación"]}, {}),
    115: ("¿Está lejos de aquí?", {"weit": ["lejos", "lejos de aquí"]}, {}),
    116: ("Siga todo recto.", {"geradeaus": ["todo recto", "derecho"]}, {}),
    117: ("Gire a la izquierda.", {"links": ["a la izquierda", "izquierda"]}, {}),
    118: ("Gire a la derecha.", {"rechts": ["a la derecha", "derecha"]}, {}),
    119: ("Está a la vuelta de la esquina.", {"um_die_ecke": ["vuelta de la esquina", "a la vuelta de la esquina"]}, {}),
    120: ("¿Puede mostrármelo en el mapa?", {"auf_karte": ["en el mapa", "mapa"]}, {}),
    121: ("Me he perdido.", {"verlaufen": ["me he perdido", "estoy perdido"]}, {}),
    122: ("¿Qué tan lejos está a pie?", {"zu_fuss": ["a pie"]}, {}),
    123: ("Tome la segunda calle a la derecha.", {"zweite_strasse": ["segunda calle"]}, {}),
    124: ("¿Dónde está el supermercado más cercano?", {"supermarkt": ["supermercado"]}, {}),
    125: ("¿Está cerca?", {"in_der_naehe": ["cerca", "está cerca"]}, {}),
    126: ("¿Puede indicarme el camino?", {"weg_zeigen": ["indicarme el camino", "mostrarme el camino"]}, {}),
    127: ("El museo está frente a la iglesia.", {"museum": ["museo"], "kirche": ["iglesia"]}, {}),
    128: ("No me siento bien.", {"nicht_gut": ["no me siento bien", "no estoy bien"]}, {}),
    129: ("Tengo dolor de cabeza.", {"kopfschmerzen": ["dolor de cabeza"]}, {}),
    130: ("Tengo fiebre.", {"fieber": ["fiebre"]}, {}),
    131: ("Necesito un médico.", {"arzt": ["médico"]}, {}),
    132: ("¿Dónde está la farmacia más cercana?", {"apotheke": ["farmacia"]}, {}),
    133: ("Soy alérgico a la penicilina.", {"allergisch": ["alérgico", "alérgica"], "penizillin": ["penicilina"]}, {}),
    134: ("Me he lastimado el pie.", {"fuss_verletzt": ["lastimado el pie", "me duele el pie"]}, {}),
    135: ("¡Llame a una ambulancia, por favor!", {"krankenwagen": ["ambulancia"]}, {}),
    136: ("¡Ayuda!", {"hilfe": ["ayuda", "socorro"]}, {}),
    137: ("Necesito ayuda urgente.", {"dringend_hilfe": ["ayuda urgente", "necesito ayuda"]}, {}),
    138: ("¿Dónde está el hospital más cercano?", {"krankenhaus": ["hospital"]}, {}),
    139: ("Olvidé mis pastillas.", {"tabletten_vergessen": ["olvidé mis pastillas", "pastillas olvidadas"]}, {}),
    140: ("¿Cada cuánto tengo que tomar el medicamento?", {"medikament_haeufigkeit": ["cada cuánto", "tomar el medicamento"]}, {}),
    141: ("Me siento mareado.", {"schwindelig": ["mareado", "mareada", "me siento mareado"]}, {}),
    142: ("¿Puede darme una cita?", {"termin_geben": ["darme una cita", "una cita"]}, {}),
    143: ("Estoy resfriado.", {"erkaeltet": ["resfriado", "resfriada", "tengo un resfriado"]}, {}),
    144: ("Me duele aquí.", {"tut_weh": ["me duele aquí", "duele"]}, {}),
    145: ("Olvidé mi tarjeta del seguro.", {"versicherungskarte": ["tarjeta del seguro", "olvidé el seguro"]}, {}),
    146: ("Busco un apartamento.", {"wohnung_suchen": ["busco un apartamento", "apartamento"]}, {}),
    147: ("¿Cuánto es el alquiler?", {"miete": ["alquiler"]}, {}),
    148: ("¿Está incluido el depósito?", {"kaution": ["depósito", "fianza"]}, {}),
    149: ("¿Cuándo puedo mudarme?", {"einziehen": ["mudarme", "mudarse"]}, {}),
    150: ("¿Hay ascensor en el edificio?", {"aufzug": ["ascensor"]}, {}),
    151: ("Quisiera firmar el contrato de alquiler.", {"mietvertrag": ["contrato de alquiler"], "unterschreiben": ["firmar"]}, {}),
    152: ("Me mudé la semana pasada.", {"umgezogen": ["me mudé", "mudanza"]}, {}),
    153: ("¿Dónde encuentro a un técnico?", {"handwerker": ["técnico", "encuentro un técnico"]}, {}),
    154: ("La calefacción no funciona.", {"heizung_kaputt": ["calefacción no funciona", "no funciona"]}, {}),
    155: ("Tengo que dar de alta la electricidad.", {"strom_anmelden": ["dar de alta la electricidad", "electricidad"]}, {}),
    156: ("¿Cómo me registro en el padrón municipal?", {"einwohnermeldeamt": ["padrón municipal", "registro de residentes"]}, {}),
    157: ("Necesito un comprobante de mi dirección.", {"adressbestaetigung": ["comprobante de dirección", "comprobante"]}, {}),
    158: ("¿Hay una lavandería aquí?", {"waschraum": ["lavandería", "cuarto de lavado"]}, {}),
    159: ("Mis vecinos son muy amables.", {"nachbarn_nett": ["vecinos amables", "muy amables"]}, {}),
    160: ("¿Dónde está el aula magna?", {"hoersaal": ["aula magna", "auditorio"]}, {}),
    161: ("¿Cuándo empieza la clase?", {"vorlesung_beginn": ["empieza la clase", "clase"]}, {}),
    162: ("Estudio informática.", {"studiere": ["estudio"], "informatik": ["informática"]}, {}),
    163: ("¿En qué semestre estás?", {"semester_frage": ["qué semestre", "en qué semestre"]}, {}),
    164: ("¿Cuándo es el plazo de inscripción?", {"anmeldefrist": ["plazo de inscripción", "plazo"]}, {}),
    165: ("Aprobé el examen.", {"pruefung_bestanden": ["aprobé el examen", "aprobado"]}, {}),
    166: ("Mañana tengo un examen.", {"pruefung_morgen": ["mañana un examen", "examen mañana"]}, {}),
    167: ("¿Dónde encuentro la biblioteca?", {"bibliothek": ["biblioteca"]}, {}),
    168: ("¿Puedo pedir prestado este libro?", {"ausleihen": ["pedir prestado", "prestar"]}, {}),
    169: ("¿Cuántos créditos necesito?", {"credits": ["créditos"]}, {}),
    170: ("¿Quién es el profesor de este curso?", {"dozent": ["profesor", "docente"]}, {}),
    171: ("Olvidé la tarea.", {"hausaufgabe_vergessen": ["olvidé la tarea", "tarea olvidada"]}, {}),
    172: ("¿Podemos estudiar juntos?", {"zusammen_lernen": ["estudiar juntos", "juntos"]}, {}),
    173: ("Necesito más tiempo para el trabajo escrito.", {"mehr_zeit_hausarbeit": ["más tiempo", "trabajo escrito"]}, {}),
    174: ("¿Cómo está el tiempo hoy?", {"wetter_frage": ["cómo está el tiempo", "qué tiempo hace"]}, {}),
    175: ("Está lloviendo.", {"regnet": ["está lloviendo", "llueve"]}, {}),
    176: ("Brilla el sol.", {"sonne_scheint": ["brilla el sol", "hace sol"]}, {}),
    177: ("Hace mucho frío hoy.", {"kalt": ["hace frío", "mucho frío"]}, {}),
    178: ("¿Qué haces el fin de semana?", {"wochenende_frage": ["fin de semana", "qué haces el fin de semana"]}, {}),
    179: ("Me gusta ir al cine.", {"kino": ["cine"]}, {}),
    180: ("¿Quieres venir?", {"mitkommen": ["quieres venir", "venir conmigo"]}, {}),
    181: ("¿Dónde es el concierto?", {"konzert": ["concierto"]}, {}),
    182: ("¿Cuánto cuesta la entrada?", {"eintritt": ["entrada"]}, {}),
    183: ("Me interesa la historia.", {"interessiere_geschichte": ["me interesa la historia", "historia"]}, {}),
    184: ("¿Cuándo abre el museo?", {"museum_oeffnet": ["abre el museo", "cuándo abre"]}, {}),
    185: ("El fin de semana pasado estuve en la playa.", {"strand": ["playa"]}, {}),
    186: ("El próximo fin de semana voy de excursión.", {"wandern": ["de excursión", "ir de excursión"]}, {}),
    187: ("Fue un concierto genial.", {"tolles_konzert": ["concierto genial", "concierto fue genial"]}, {}),
    188: ("¿Haces deporte?", {"sport_frage": ["haces deporte", "deporte"]}, {}),
    189: ("Me gusta jugar al fútbol.", {"fussball": ["jugar al fútbol", "fútbol"]}, {}),
}


def build():
    with open(SRC, encoding="utf-8") as f:
        source = json.load(f)

    missing = [r["id"] for r in source if r["id"] not in TRANSLATIONS]
    if missing:
        raise SystemExit(f"Fehlende Uebersetzungen fuer ids: {missing}")

    lines = []
    lines.append("# -*- coding: utf-8 -*-")
    lines.append('"""')
    lines.append("Spanische Uebersetzung von phrasebook_master.py (189 Saetze), inkl.")
    lines.append("accepted_concepts mit spanischen Synonymen (gleiche required/optional-")
    lines.append("Struktur wie im deutschen Original, Konzept-KEYS unveraendert uebernommen).")
    lines.append("Automatisch generiert aus build_spanisch.py + der echten phrasebook_master-")
    lines.append("Quelle (nicht von Hand abgetippt) - scenario/tense/difficulty/category")
    lines.append("stammen 1:1 aus der Datenbank, nur target_text + Synonyme sind neu.")
    lines.append("Cluster-Zuordnung (verb_cluster) folgt als eigener Schritt danach, wie bei")
    lines.append("Schwedisch.")
    lines.append('"""')
    lines.append("")
    lines.append("SENTENCES = [")

    for row in source:
        rid = row["id"]
        target_text, required_map, optional_map = TRANSLATIONS[rid]
        ac = row["accepted_concepts"]

        required_out = []
        for group in ac["required"]:
            concept = group["concept"]
            syns = required_map.get(concept)
            if syns is None:
                raise SystemExit(f"id={rid}: kein spanisches Konzept fuer '{concept}'")
            required_out.append({"concept": concept, "synonyms": syns})

        optional_out = []
        for group in ac.get("optional") or []:
            concept = group["concept"]
            syns = optional_map.get(concept)
            if syns is None:
                raise SystemExit(f"id={rid}: kein spanisches optional-Konzept fuer '{concept}'")
            optional_out.append({"concept": concept, "synonyms": syns})

        entry = {
            "target_text": target_text,
            "german": row["german"],
            "scenario": row["scenario"],
            "tense": row["tense"],
            "difficulty": row["difficulty"],
            "category": row["category"],
            "accepted_concepts": {"required": required_out, "optional": optional_out},
        }
        lines.append("    " + repr(entry) + ",")

    lines.append("]")

    out_path = os.path.join(HERE, "spanisch_phrasebook.py")
    with open(out_path, "w", encoding="utf-8") as f:
        f.write("\n".join(lines) + "\n")
    print(f"Fertig: {len(source)} Saetze -> {out_path}")


if __name__ == "__main__":
    build()
