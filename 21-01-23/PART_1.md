## Teil 1 - Schemas

### Aufgabe 1 - Schreiben Sie eine .env-Datei

Benutzen Sie die Datei `.env.example` als Vorlage, erstellen Sie eine `.env` Datei und füllen Sie diese mit Ihren MongoDB-Verbindungsdetails
   
   > Hinweis: Der Schlüssel `DB_NAME` verweist auf den Namen der Datenbank.

### Aufgabe 2 - Hinzufügen neuer Felder zum Wizard-Schema

Unser Wizard-Schema, das sich in `models/Wizard.js` befindet, ist noch nicht fertig

1. Fügen Sie dem Schema ein neues Feld namens `origin` hinzu. Dieses sollte vom Typ `String` sein.

2. Aktualisieren Sie das Feld, das Sie gerade hinzugefügt haben, so dass es NUR eine der folgenden Zeichenketten akzeptiert;

   > Hinweis: Sie müssen hier `enum` verwenden

``Text
'Ankh-Morpork','Bad Schüschein','Betrek','Borogravia','Brindisi','Chimeria','Chirm','Copperhead','Cori Celesti','Djelibeybi','Ephebe','Ghat','Hersheba', Howondaland','Klatchistan','Lipwig','Rehigreed Province','Schmaltzberg','Skund','Sto Helit','Sto Lat','Sunken Leshp','The Chalk','The Wyrmberg','Überwald'
```

Quelle: [Liste der Scheibenwelt-Orte](https://wiki.lspace.org/mediawiki/List_of_Discworld_locations)

### Aufgabe 3 - Fertigstellung des MagicSpell-Schemas

Unser MagicSpell-Schema, das sich in `models/MagicSpell.js` befindet, ist noch nicht fertig

1. Fügen Sie dem Schema ein neues Feld namens 'school' hinzu. Dieses sollte vom Typ `String` sein.

2. Aktualisieren Sie das Feld, das Sie gerade hinzugefügt haben, so dass es NUR eine der folgenden Zeichenketten akzeptiert

`Text
physisch', 'arkan', 'Feuer', 'Frost', 'Natur', 'Schatten', 'heilig'
```

Quelle: [WoW Magic Schools](https://wowpedia.fandom.com/wiki/Magic_schools)

### Aufgabe 4 - Hinzufügen von Standardwerten zum Zauberer-Schema

Füge einen Standardwert für die folgenden Felder hinzu:

- Stufe" sollte standardmäßig **1** sein
- Genauigkeit" sollte standardmäßig **0,3** sein
- Kritisch" sollte als Standardwert **0** haben.

### Aufgabe 5 - Hinzufügen von Standardwerten zum MagicSpell-Schema

Fügen Sie einen Standardwert für die folgenden Felder hinzu:

- `Schaden` sollte standardmäßig **0** lauten
- CastingTime" sollte standardmäßig **6** sein
- Level" sollte standardmäßig **1** sein
- Reichweite" sollte standardmäßig **0.1** sein
- areaOfEffect" sollte standardmäßig auf **false** gesetzt werden.

### Aufgabe 6 - Hinzufügen einer Zahlenüberprüfung zum Assistentenschema

Wir wollen nicht, dass die Kunden Werte eingeben, die außerhalb des erwarteten Bereichs liegen könnten. Zum Beispiel sollte das Alter einer Person nicht unter 1 liegen!

Fügen Sie den folgenden zahlenbasierten Feldern eine Validierung hinzu, damit die Werte nicht über oder unter den erwarteten Werten liegen

> Tipp: Nicht sicher wie? Schauen Sie unter [validation](https://mongoosejs.com/docs/validation.html#built-in-validators)

- Alter" sollte nicht unter **1** liegen
- Level" sollte nicht unter **1** liegen
- Genauigkeit" sollte nicht unter **0** und nicht über **1** liegen
- Kritisch" sollte nicht unter **0** und nicht über **1** liegen.

### Aufgabe 7 - Hinzufügen einer Zahlenüberprüfung zum MagicSpell-Schema

Fügen Sie die Validierung zu den folgenden zahlenbasierten Feldern hinzu, damit die Werte nicht über oder unter den erwarteten Werten liegen

- Kosten" sollte nicht unter **1** liegen
- Schaden" sollte nicht unter **0** fallen
- CastingTime" sollte nicht unter **0** liegen
- Level" sollte nicht unter **1** liegen
- range" sollte **0** nicht unterschreiten.

### Aufgabe 8 - Hinzufügen eines Unterdokuments zum Schema des Assistenten

1. Fügen Sie ein neues Feld `Energie` hinzu. Dieses wird das Unterdokument enthalten.

2. Fügen Sie die folgenden Felder in das Unterdokument "Energie" ein. Sie werden alle vom Typ `Zahl` sein.

    - `Gesundheit`
    - `Ausdauer`
    - Magie

3. Füge jedem dieser Felder Standardwerte hinzu

    - Gesundheit" sollte standardmäßig **1** lauten
    - Ausdauer" sollte standardmäßig **10** sein
    - Magie" sollte als Standardwert **100** haben.

4. Validierung dieser Felder

    - Gesundheit" sollte nicht unter **0** fallen
    - Ausdauer" sollte nicht unter **0** fallen
    - Magie" sollte nicht unter **0** fallen.

### Aufgabe 9 - Verknüpfung des Schemas für Zauberer mit dem Schema für Zaubersprüche

Ein Zauberer wäre ohne Zaubersprüche nicht lustig, stimmt's? Geben wir jedem Zauberer die Fähigkeit, Zaubersprüche zu lernen.

1. Füge ein neues Feld `Zaubersprüche` hinzu. Dieses wird einen Verweis auf das MagicSpell-Modell enthalten.

2. Setze den Typ auf `ObjectId`

3. Fügen Sie eine "ref" zur "MagicSpell"-Sammlung hinzu.

> Jetzt kann jedem Zauberer ein Zauberspruch zugewiesen werden.

### Aufgabe 10 - Erweitern der Kenntnisse jedes Zauberers über Zaubersprüche

Leider hat jeder Zauberer nur Zugriff auf 1 Zauberspruch, aber wir wollen ihm die Möglichkeit geben, mehrere Zaubersprüche zu besitzen

Wickeln Sie das Objekt, das Sie dem Feld "spells" zugewiesen haben, in ein Array ein. Dadurch wird `spells` ein Array von `ObjectId`'s.