# Vibe Coding 101

Vibe Coding bedeutet: Du beschreibst einem Coding Agent, was du bauen möchtest, und entwickelst gemeinsam mit ihm ein funktionierendes Projekt. Du schreibst nicht jede Codezeile selbst, sondern steuerst den Prozess über Ziele, Beispiele, Entscheidungen und Feedback.

Das kann sehr schnell sein. Es kann aber auch chaotisch werden, wenn du dem Agenten zu viel auf einmal gibst, Ergebnisse nicht prüfst oder nicht verstehst, was geändert wurde.

Für diesen Kurs heißt Vibe Coding nicht: "Die KI macht alles." Es heißt: Du benutzt einen Agenten als technisches Werkzeug, um Ideen schneller auszuprobieren, Prototypen zu bauen und den eigenen Lernprozess zu unterstützen.

## Was Vibe Coding gut kann

Vibe Coding ist besonders stark bei:

- schnelle Prototypen bauen
- kleine Webseiten, Tools oder interaktive Skizzen erstellen
- bestehende Dateien erklären lassen
- Fehler finden und Fehlermeldungen übersetzen
- einfache Features ergänzen
- Layout, Text, Struktur oder Styling iterieren
- Code in kleinere Schritte zerlegen
- Alternativen vergleichen
- Dokumentation und Setup-Anleitungen schreiben

Ein guter Coding Agent kann Dateien lesen, Änderungen vorschlagen, Code ausführen und Fehlermeldungen nutzen, um weiterzuarbeiten. Dadurch fühlt sich der Prozess oft eher wie ein Gespräch über ein Projekt an als wie klassisches Programmieren.

## Wo Vibe Coding begrenzt ist

Coding Agents machen Fehler. Sie können überzeugend klingen und trotzdem falschen Code schreiben.

Typische Probleme:

- Der Agent baut mehr als du gefragt hast.
- Der Agent verändert bestehende Logik, ohne dass es nötig ist.
- Der Agent erfindet Bibliotheken, Funktionen oder APIs.
- Der Agent übersieht Nebenwirkungen.
- Der Agent macht Code komplizierter als nötig.
- Der Agent löst ein Symptom, aber nicht die eigentliche Ursache.
- Der Agent kann Sicherheitsprobleme einbauen.
- Der Agent kann bei großen Projekten den Überblick verlieren.

Vibe Coding funktioniert deshalb nur gut, wenn du den Prozess führst. Du musst nicht jede Codezeile verstehen, aber du solltest wissen:

- Was soll das Projekt tun?
- Was wurde gerade geändert?
- Wie kann ich testen, ob es funktioniert?
- Was soll der Agent als Nächstes machen?

## Die wichtigste Regel

Arbeite in kleinen Schritten.

Schlecht:

```text
Baue mir eine komplette interaktive Website mit Login, Datenbank, Galerie, Animationen und Exportfunktion.
```

Besser:

```text
Erstelle eine einfache Startseite mit einem Titel, einem kurzen Beschreibungstext und einem Button. Nutze nur HTML und CSS. Danach zeige mir, welche Dateien du geändert hast.
```

Wenn das funktioniert, kommt der nächste Schritt.

## Gute Prompts für den Start

Ein guter Prompt enthält meistens:

- Ziel
- Kontext
- Einschränkungen
- gewünschtes Ergebnis
- Prüfschritt

Beispiel:

```text
Ich möchte eine kleine Webseite für eine interaktive Installation bauen.
Erstelle eine einfache HTML/CSS-Version mit einem Titel, einem kurzen Introtext und drei Projektkarten.
Nutze keine externen Frameworks.
Ändere nur Dateien in diesem Ordner.
Erkläre danach kurz, was du geändert hast und wie ich es im Browser öffnen kann.
```

Noch besser ist es, wenn du zuerst planen lässt:

```text
Ich möchte eine kleine Webseite bauen, kenne mich aber kaum mit Code aus.
Bitte schlage zuerst einen kurzen Plan in 3 bis 5 Schritten vor.
Ändere noch keine Dateien.
```

## OpenCode in Zed: einfache Arbeitsweise

In Zed arbeitest du mit OpenCode direkt im Projektordner.

Ein sinnvoller Ablauf:

1. Öffne das Projekt in Zed.
2. Starte einen neuen Agent-Thread.
3. Beschreibe eine kleine Aufgabe.
4. Lass dir zuerst den Plan erklären.
5. Erlaube die Änderung.
6. Prüfe das Ergebnis.
7. Gib konkretes Feedback.

Beispiel für den ersten Prompt:

```text
Schau dir dieses Projekt kurz an.
Erkläre mir in einfachen Worten, welche Dateien für den Einstieg wichtig sind.
Ändere noch nichts.
```

Beispiel für eine kleine Änderung:

```text
Erstelle eine sehr einfache HTML-Seite für ein Projekt namens "Black Box Breakout".
Sie soll einen Titel, einen kurzen Beschreibungstext und drei farbige Bereiche haben.
Nutze nur HTML und CSS.
Bitte ändere nur die Dateien, die dafür notwendig sind.
```

Beispiel für Feedback:

```text
Das ist zu textlastig.
Mach die Seite visueller, aber behalte die bestehende Struktur.
Bitte ändere nur das CSS.
```

## Was du immer prüfen solltest

Nach jeder Änderung:

1. Welche Dateien wurden geändert?
2. Kann ich das Projekt starten oder öffnen?
3. Sieht das Ergebnis ungefähr so aus, wie ich wollte?
4. Gibt es Fehlermeldungen?
5. Hat der Agent ungefragt zusätzliche Dinge eingebaut?

Wenn etwas unklar ist, frage:

```text
Erkläre mir die letzte Änderung in einfachen Worten.
Welche Datei ist am wichtigsten?
Welche Zeilen sollte ich mir anschauen?
```

## Gute Aufgaben für Anfänger*innen

Starte mit Aufgaben, die sichtbar und überschaubar sind:

- eine einfache Webseite erstellen
- Farben und Layout ändern
- Textbereiche ergänzen
- Buttons oder Karten bauen
- eine kleine Interaktion hinzufügen
- einen Fehler aus der Konsole erklären lassen
- eine README schreiben lassen
- eine vorhandene Datei zusammenfassen lassen

Vermeide am Anfang:

- Login-Systeme
- Datenbanken
- Bezahlsysteme
- komplexe Installationen
- große Refactorings
- mehrere Frameworks gleichzeitig
- Sicherheitsfunktionen, die du nicht verstehst

## Fehler sind Teil des Workflows

Wenn etwas nicht funktioniert, kopiere nicht einfach blind neue Prompts hinterher. Gib dem Agenten die Fehlermeldung und den Kontext.

Beispiel:

```text
Beim Starten bekomme ich diese Fehlermeldung:

[Fehlermeldung hier einfügen]

Bitte erkläre zuerst, was sie bedeutet.
Schlage dann den kleinsten möglichen Fix vor.
Ändere noch nichts, bevor du den Plan erklärt hast.
```

Wenn der Agent schon etwas geändert hat und es schlechter wurde:

```text
Die letzte Änderung hat das Layout kaputt gemacht.
Bitte analysiere, welche Änderung wahrscheinlich dafür verantwortlich ist.
Schlage eine minimale Korrektur vor.
```

## Grenzen setzen

Coding Agents arbeiten besser, wenn du klare Grenzen setzt.

Nützliche Einschränkungen:

```text
Ändere nur HTML und CSS.
```

```text
Füge keine neuen Abhängigkeiten hinzu.
```

```text
Erstelle zuerst einen Plan und warte auf meine Bestätigung.
```

```text
Halte die Lösung so einfach wie möglich.
```

```text
Erkläre mir am Ende, wie ich das Ergebnis testen kann.
```

## Ein guter Vibe-Coding-Zyklus

1. Idee beschreiben
2. Agenten planen lassen
3. kleine Änderung machen lassen
4. Ergebnis testen
5. Feedback geben
6. nächsten kleinen Schritt machen

Dieser Zyklus ist wichtiger als der perfekte Prompt.

## Fortgeschritten: AI Development Guide

Bei größeren Projekten lohnt es sich, dem Agenten eine feste Projektanleitung zu geben. Das kann eine Datei wie `AI_DEVELOPMENT_GUIDE.md`, `AGENTS.md` oder `CONTRIBUTING.md` sein.

Diese Datei beschreibt, wie der Agent im Projekt arbeiten soll.

Sie kann enthalten:

- Was ist das Ziel des Projekts?
- Welche Dateien sind wichtig?
- Wie startet man das Projekt?
- Welche Befehle testen das Projekt?
- Welche Designregeln gelten?
- Welche Dateien darf der Agent ändern?
- Welche Dateien soll der Agent nicht anfassen?
- Wie ausführlich soll der Agent erklären?
- Wann soll der Agent erst fragen, bevor er ändert?

Beispiel:

```md
# AI Development Guide

Dieses Projekt ist ein kleiner Prototyp für eine interaktive Installation.

## Arbeitsweise

- Mache kleine, verständliche Änderungen.
- Erkläre vor größeren Änderungen zuerst deinen Plan.
- Füge keine neuen Libraries hinzu, ohne zu fragen.
- Ändere keine Setup-Dateien, außer es ist wirklich nötig.

## Testen

- Öffne `index.html` im Browser.
- Prüfe, ob Text und Buttons sichtbar sind.
- Prüfe die Browser-Konsole auf Fehler.

## Design

- Halte das Layout einfach.
- Nutze klare Kontraste.
- Keine überladenen Animationen.
```

So eine Datei macht den Agenten nicht perfekt, aber sie reduziert Missverständnisse.

## Fortgeschritten: Projekt in Phasen aufteilen

Für größere Projekte solltest du nicht alles in einem Thread bauen.

Teile das Projekt in Phasen:

1. Konzept
2. Grundstruktur
3. Erste sichtbare Version
4. Interaktion
5. Styling
6. Tests
7. Aufräumen
8. Dokumentation

Für jede Phase kannst du einen eigenen Agent-Thread starten. Das hält den Kontext sauberer und verhindert, dass alte Entscheidungen den neuen Schritt verwirren.

## Fortgeschritten: Erst fragen, dann bauen

Bei größeren Änderungen ist dieser Prompt nützlich:

```text
Bitte ändere noch nichts.
Analysiere zuerst das Projekt und schlage einen Plan für die nächste Änderung vor.
Nenne genau, welche Dateien du ändern würdest.
Warte danach auf meine Bestätigung.
```

Das gibt dir Kontrolle zurück.

## Fortgeschritten: Agenten nicht alles glauben

Wenn ein Agent eine technische Entscheidung trifft, frage nach dem Grund:

```text
Warum hast du diese Lösung gewählt?
Welche einfachere Alternative gäbe es?
Welche Nachteile hat deine Lösung?
```

Gerade bei Anfänger*innen ist das wichtig, weil Agenten oft zu komplexe Lösungen vorschlagen. Einfacher Code ist meistens besser für den Lernprozess.

## Fortgeschritten: Git als Sicherheitsnetz

Git speichert Projektstände. Wenn du mit Coding Agents arbeitest, ist das besonders wichtig.

Gute Gewohnheit:

1. Starte mit einem funktionierenden Zustand.
2. Lass den Agenten eine kleine Änderung machen.
3. Teste.
4. Wenn es gut ist, speichere den Stand mit Git.

Nützliche Befehle:

```bash
git status
git diff
git add .
git commit -m "Add first prototype"
```

Wenn du noch nicht sicher mit Git bist, frage den Agenten:

```text
Erkläre mir, was `git status` gerade bedeutet.
Ändere nichts.
```

## Gute Abschlussfrage nach jeder Session

Beende eine Vibe-Coding-Session nicht einfach, sobald etwas funktioniert. Lass dir den Stand zusammenfassen:

```text
Fasse zusammen:
1. Was wurde gebaut?
2. Welche Dateien wurden geändert?
3. Wie teste ich das Projekt?
4. Was wäre der sinnvollste nächste Schritt?
5. Gibt es bekannte Probleme oder Risiken?
```

Diese Zusammenfassung hilft dir, später wieder einzusteigen.

## Kurzfassung

Vibe Coding ist gut für schnelle Prototypen und kreative Experimente. Es ersetzt aber nicht dein Urteilsvermögen.

Arbeite klein, prüfe oft, setze klare Grenzen und lass dir Änderungen erklären. Je größer das Projekt wird, desto wichtiger werden Projektregeln, Tests, Git und klare Phasen.
