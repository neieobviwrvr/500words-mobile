# Wireframe-Index

Diese Bilder gehoeren zu den Screen-IDs (S1-S5) aus der CLAUDE.md im
Projekt-Root. Beim Bauen eines Screens jeweils das passende Bild referenzieren,
nicht raten.

## flow-uebersicht-S1-S2-S3-S4-S5.jpeg
Zeigt den kompletten Zusammenhang aller Screens auf einen Blick, inkl. der
Pfeile, die zeigen, welche Aktion zu welchem Screen fuehrt:
- S1 Startscreen (Pfad-Ansicht)
- S2 Kategorie-Detail-Screen (Beispiel "Club + Drinking")
- S3 Shop-Screen ("Pakete + Shop", radialer Skilltree als Katalog)
- S4 Uebungs-Screen (Beispiel "Bestellen" - Club+Drinking Wortabfrage)
- S5 SRS-/Wiederholen-Auswahl-Screen
Nutzen: erster Referenzpunkt, um den Gesamtzusammenhang/Navigationsfluss zu
verstehen, bevor ein einzelner Screen gebaut wird.

## S1-startscreen-scrollbox-detail.jpeg
Zoomt auf S1 (Startscreen) allein, zeigt das Scrollbox-Layout praezise:
Pfad liegt in eigener scrollbarer Box mit fester Hoehe, "Wiederholen + Ueben"-
Button liegt fest ausserhalb dieser Box (siehe Layout-Hinweis in CLAUDE.md,
Abschnitt S1). Nutzen: Referenz beim Bauen des Layouts, wenn die Trennung
Scroll-Bereich/fixer Button umgesetzt wird.

## S3-shop-kategorien-detail.jpeg
Zeigt den radialen Skilltree im Detail, wie er innerhalb von S3 als Katalog
dargestellt wird: alle 13 Kategorie-Knoten, Verbindungslinien zwischen
thematisch verwandten Kategorien, Schloss-Icons fuer gesperrte Kategorien.
Nutzen: Referenz fuer die visuelle Anordnung/Verknuepfung der Kategorie-Knoten
in S3, unabhaengig vom aktuellen Preismodell (das steht separat in CLAUDE.md
und ist noch nicht final).

## Hinweis zu aelteren Bildern
Es gab fruehere Entwuerfe, bei denen der radiale Skilltree noch die
Haupt-Navigation (statt nur Shop-Katalog) war. Diese sind NICHT mehr
aktuell und bewusst nicht in diesen Ordner uebernommen worden, um
Verwechslungen zu vermeiden. Massgeblich ist ausschliesslich das
Screen-Inventar in CLAUDE.md (linearer Pfad = S1, radialer Tree nur
innerhalb von S3).
