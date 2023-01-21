## Teil 2 - Endpunkte

### Aufgabe 1 - Vorbereitung unseres Servers für den Empfang von Anfragen

In den nächsten Aufgaben werden wir eine REST-API erstellen, damit sich Clients mit unserem Server verbinden und Aktionen durchführen können

1. Fügen Sie das [cors](https://www.npmjs.com/package/cors) npm-Paket zu Ihrem Middleware-Stack hinzu. Dies verhindert den gefürchteten "same origin policy"-Fehler in Ihrem Browser.

2. Fügen Sie die `express.json()` Middleware zu Ihrem Middleware-Stack hinzu. Damit wird jedes JSON, das mit dem Client-Body gesendet wird, richtig geparst.

> Denken Sie daran, Ihre Middleware vor Ihren Routen auszuführen!

### Aufgabe 2 - Erstellen der Zaubersprüche

Wir haben unsere Schemata und Modelle eingerichtet, aber wir brauchen Daten!

Unter der in `routes/magicSpell.js` erstellten Route;

1. Erstellen Sie einen Endpunkt mit dem Pfad `/create`, der es dem Benutzer ermöglicht, einen neuen Zauberspruch per **JSON** aus einer **POST**-Anfrage zu erstellen

2. Testen Sie Ihren Endpunkt, indem Sie mindestens 1 Zauberspruch in Ihrer Datenbank erstellen

### Aufgabe 3 - Hochladen von Zauberspruchdaten

Wir werden einige Zaubersprüche zu unserer Datenbank hinzufügen

Laden Sie die Datei `./data/MagicSpells.json` mit einem Desktop-Tool wie [MongoDB Compass](https://www.mongodb.com/products/compass) in Ihre Zaubersprüche-Sammlung hoch.

### Aufgabe 4 - Erstellen Sie einen Endpunkt, der alle Zaubersprüche zurückgibt

Wir möchten, dass unser Client alle Zaubersprüche in der Datenbank anzeigen kann

Unter der in `routes/magicSpell.js` erstellten Route;

- Erstellen Sie einen Endpunkt mit dem Pfad `/all`. Dieser Endpunkt sollte alle Zaubersprüche in der Datenbank zurückgeben.

### Aufgabe 5 - Erstellen der Route für den Assistenten

Wenden wir unsere Aufmerksamkeit den Assistenten zu

- Erstellen Sie einen neuen Router `wizard.js` im Ordner `/routes`, um alle Anfragen zu bearbeiten, die mit `/wizard` beginnen

### Aufgabe 6 - Erstellen eines Assistenten-Endpunkts

1. Erstellen Sie unter Verwendung des neuen Wizard-Routers einen Endpunkt mit dem Pfad `/create`, der es dem Benutzer ermöglicht, einen Wizard über **JSON** aus einer **POST**-Anfrage zu erstellen. Dieser Endpunkt sollte einen neuen Assistenten in der Datenbank erstellen.

2. Testen Sie Ihren Endpunkt, indem Sie mindestens 1 Assistenten in Ihrer Datenbank erstellen

### Aufgabe 7 - Hochladen der Assistenten-Daten

Genau wie in **Aufgabe 2** laden Sie die Datei `./data/Wizards.json` in Ihre Assistentensammlung hoch.

### Aufgabe 8 - Erstellen Sie einen Endpunkt, der alle Assistenten zurückgibt.

Wir möchten, dass unser Kunde alle Assistenten in der Datenbank sehen kann

- Erstellen Sie unter Verwendung der Route "/wizard" einen Endpunkt mit dem Pfad "/all". Dieser Endpunkt soll alle Assistenten in der Datenbank zurückgeben.

### Aufgabe 9 - Erstellen einer Route zum Lesen eines Zaubers

Erstelle innerhalb der `/magic-spell` Route einen Endpunkt mit dem Pfad `/details`. Dieser Endpunkt sollte alle Details eines **MagicSpells** zurückgeben.
   - Dieser Endpunkt sollte eine "ID" als **Anfrageparameter** erwarten.
   - Die `id` wird die **ObjectId** des **MagicSpell** Dokuments sein

> Tipp: Sie können die Mongoose Model Methode `findById()` verwenden.

### Aufgabe 10 - Erstellen einer Route zum Lesen eines Assistenten

Erstellen Sie innerhalb der Route `/wizard` einen Endpunkt mit dem Pfad `/details`. Dieser Endpunkt sollte alle Details eines **Wizard** zurückgeben.
   - Dieser Endpunkt sollte eine "ID" als **Anforderungsparameter** erwarten.
   - Die `id` wird die **ObjectId** des **Wizard** Dokuments sein

### Aufgabe 11 - Einen Assistenten hochstufen

Ein Assistent sollte aufsteigen können, wenn er genug Erfahrung hat

- Erstellen Sie innerhalb der Route "/wizard" einen Endpunkt mit dem Pfad "/levelup". Dieser Endpunkt sollte die **Level**-Eigenschaft des **Assistenten** **aktualisieren**, indem er `1` zu dem bestehenden Level hinzufügt
  - Dieser Endpunkt sollte eine "PATCH"-Anfrage erwarten

> Tipp: Sie können die Methode `findByIdAndUpdate()` verwenden.

## Bonus-Aufgaben

Siehe die [Bonus-Aufgaben](./PART_2_BONUS.md)