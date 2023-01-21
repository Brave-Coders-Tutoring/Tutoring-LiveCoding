## Bonus-Aufgaben

### Spellcast! 🧙 🪄 🔥

Ein Zauberer ist kein Spaß, wenn er nicht zaubern kann!

Wir wollen, dass der Zauberer einen Zauberspruch ausspricht, mit einer Anfrage an einen Endpunkt

1. Erstellen Sie innerhalb der Route `/wizard` einen Endpunkt mit dem Pfad `/spellcast`. Dieser Endpunkt sollte eine GET-Anfrage erwarten und eine ID als Parameter oder einen Abfrage-Parameter haben.

2. Der Zauberer führt einen zufälligen Zauberspruch aus, der aus der Liste der ihm bekannten Zaubersprüche ausgewählt wird. Wenn der Zauberer keine Zaubersprüche kennt, wird die Meldung zurückgegeben:
   > `"{Zauberer Name} kennt keine Zaubersprüche."`

3. Der Zauberspruch sollte in Form einer Textnachricht vorliegen, die vom Server an den Client zurückgesendet wird, z. B.:
   > "{Zauberer Name} zaubert {Zaubername} mit {Zaubergenauigkeit} in einem Umkreis von {Zauberreichweite} Metern."

4. Berechne, ob der Zauber "trifft", basierend auf der Genauigkeit des Zauberers. Wenn die Genauigkeit des Zauberers z. B. 0,1 beträgt, liegt die Trefferchance bei 10 %. 1" (der Höchstwert) ist eine Trefferchance von 100 %.
    - Trifft der Zauber, füge der Meldung "Der Zauber trifft!
    - Wenn der Zauber nicht trifft, füge der Meldung hinzu: "Der Zauber verfehlt!

5. Berechne die Chance, kritischen Schaden zu verursachen, basierend auf dem "kritischen" Wert des Zauberers. Wenn der kritische Wert des Zauberers z.B. "0,1" beträgt, ist das eine "10%ige" Chance, einen kritischen Treffer zu verursachen. "1" (der maximale Wert) ist eine "100%ige" Chance, einen kritischen Treffer zu verursachen.
    - Wenn der Zauberer einen kritischen Treffer verursacht, wird die Meldung "Kritischer Schaden" hinzugefügt.

6. Berechne den Schaden und füge ihn in die Nachricht ein. Zum Beispiel:
   > "Der Zauber verursacht {Schadenspunkte}".
    - Der Zauber verursacht `0` Schaden, wenn er nicht trifft
    - Der Zauber verursacht den normalen Schaden des Zaubers, wenn er trifft
    - Der Zauber verursacht den doppelten Schaden {Zauberschaden} x 2, wenn er einen kritischen Treffer erzielt