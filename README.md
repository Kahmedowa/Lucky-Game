# Lucky-Game

DOM-Segment-5
Wir sind Betreiber eines Glückspiels.
Auf unserer Seite sollen Besucher um Spielgeld wetten können.

Aufbau
Wir benötigen eine index.html, eine style.css und eine index.js.
Verbinde die Dateien miteinander.
HTML
Diesmal brauchen wir kein Formular.
Deine HTML besteht aus folgenden Elementen:
Ein Kontostand zur Anzeige des Spielgeldes
Ein Button zum wetten.
Ein zweiter Button zum Reset.
Style
Verleihe deiner Seite ein schlichtes Design.
JavaScript
Diesmal sieht die Verknüpfung anders aus.
Deine Funktion darf immer noch run() heißen.
Aber diesmal bekommt dein Button die Verknüpfung, konktet: ein onclick Event.
Dein Button sieht also so aus: <button onclick="run()">Wetten!</button>
Teil 1
Anfangs hat ein Spieler einen Konstostand von 100€.
Verwende innerHTML, um die 100€ auf der Seite in der Anzeige des Spielgeldes zu setzen.
Teil 2
Nun geht es um die Wette.
Mit dem Button wird über JavaScript eine Zufallszahl generiert. Sie muss zwischen 1 und 6 liegen.
Ist die Zahl die 6, dann gewinnt der Spieler 5€.
Andernfalls verliert er einen Euro.
Bonus
Besser ist es, wenn der Nutzer die Zufallszahl sieht.
Erstelle dafür einen Platzhalter und gib bei jeder Wette die generierte Zufallszahl mit innerHTML aus.
Teil 3
Zuletzt musst du noch den Reset Button implementieren.
Verknüpfe ihn mit einer Funktion revert.
In der Funktion setzt du den Kontostand auf 100€.
Benutze innerHTML.
Test
Teste deine Seite mit unterschiedlichen Werten.
