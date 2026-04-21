# GitHub-Tutorial

---

## In diesem Tutorial

In diesem Tutorial lernst du:

- **ein Repository** auf deinen Computer zu clonen
- **lokale Änderungen** sicher zu speichern, ohne den gemeinsamen Stand zu überschreiben
- **den neuesten Stand** aus dem Online-Repository zu holen, ohne deine eigene Arbeit zu verlieren
- **die wichtigsten Git- und GitHub-Befehle** im Terminal zu verwenden

---

## Wichtige Begriffe

- **`Git`** ist das Programm, das Änderungen an Dateien verfolgt.
- **`GitHub`** ist die Online-Plattform, auf der Git-Repositories gespeichert und geteilt werden.
- Ein **`Repository`** (auch **`Repo`**) ist ein Projektordner mit Versionsgeschichte.
- **`lokal`** bedeutet: auf deinem eigenen Computer.
- **`remote`** bedeutet: online auf GitHub.
- **`commit`** bedeutet: einen klaren Zwischenstand deiner Arbeit speichern.
- **`push`** bedeutet: deine lokalen Commits auf GitHub hochladen.
- **`pull`** bedeutet: neue Änderungen von GitHub auf deinen Computer holen.
- **`branch`** bedeutet: eine eigene Version der Dateien, auf der man parallel arbeiten kann.

---

## 1. Ein Repository clonen

**`Clonen` bedeutet:** Du lädst ein bestehendes GitHub-Repository auf deinen Computer.

---

### Repository-URL auf GitHub kopieren

1. Öffne das gewünschte Repository auf GitHub.
2. Klicke auf den grünen Button **`Code`**.
3. Kopiere die HTTPS-URL des Repositories.

Sie sieht oft ungefähr so aus:

```text
https://github.com/username/projektname.git
```

### Im Terminal in den richtigen Ordner wechseln

Bevor du clonst, solltest du in den Ordner wechseln, in dem dein Projekt gespeichert werden soll.

#### macOS

Zum Beispiel auf den Desktop:

```bash
cd ~/Desktop
```

#### Windows

Zum Beispiel auf den Desktop:

```bash
cd ~/Desktop
```

Wenn das bei dir nicht funktioniert, kannst du im Windows-Terminal auch zuerst mit `pwd` oder `cd` prüfen, wo du gerade bist.

### Repository clonen

Ersetze die URL durch die URL deines Projekts:

```bash
git clone https://github.com/juliuswenk/black-box-breakout.git
```

Danach in den Projektordner wechseln:

```bash
cd projektname
```

Prüfen, ob alles geklappt hat:

```bash
git status
```

Wenn alles sauber ist, siehst du meist eine Meldung wie:

```text
On branch main
nothing to commit, working tree clean
```

---

### Dasselbe in Zed

#### Zed vorbereiten

Viele Studierende arbeiten parallel im Terminal und in Zed. Das ist sinnvoll:

- Im Terminal führst du **Git-Befehle** aus.
- In Zed bearbeitest du **Dateien**.
- In Zed kannst du **Änderungen, Commits und Synchronisation** auch visuell sehen.

#### Zed installieren

Falls Zed noch nicht installiert ist, nutze zuerst die passende Setup-Anleitung:

1. [macOS-setup.md](./macOS-setup.md)
2. [windows-setup.md](./windows-setup.md)

#### Git in Zed sichtbar machen

1. Öffne Zed.
2. Öffne das **Git Panel** über das Git-Symbol in der Statusleiste oder über die Command Palette.
3. Suche in der Command Palette nach **`git panel: toggle focus`**, falls du das Panel nicht findest.
4. Wenn dein Projekt ein Git-Repository ist, zeigt Zed dort geänderte Dateien, Commits und Sync-Optionen an.

#### Repository direkt in Zed clonen

1. Öffne Zed.
2. Drücke **`Cmd + Shift + P`** auf macOS oder **`Ctrl + Shift + P`** auf Windows.
3. Suche nach **`Welcome`**, falls die Willkommensseite nicht schon geöffnet ist.
4. Wähle auf der Willkommensseite **`Clone Repository`**.
5. Füge die Repository-URL ein.
6. Wähle einen lokalen Speicherort.
7. Öffne das Projekt nach dem Clonen in Zed.

---

## 2. Sicher arbeiten, ohne den gemeinsamen Stand zu überschreiben

**Das wichtigste Prinzip lautet:**

- erst den aktuellen Stand holen
- dann arbeiten
- dann nur die eigenen sinnvollen Änderungen committen

Wenn mehrere Menschen an denselben Dateien arbeiten, ist eine eigene Branch oft der sicherste Weg.

### Empfohlener Start: eigene Branch anlegen

Direkt nach dem Clonen oder bevor du mit einer neuen Aufgabe beginnst:

```bash
git switch -c vorname-stunden-name
```

Beispiel:

```bash
git switch -c mia-layout-test
```

Damit arbeitest du nicht direkt auf **`main`**, sondern auf deiner eigenen Arbeitsversion.

Prüfen:

```bash
git branch
```

Die aktuelle Branch hat ein `*`.

### Arbeitsstand prüfen

Bevor du etwas speicherst oder aktualisierst:

```bash
git status
```

**Dieser Befehl ist einer der wichtigsten überhaupt.** Er zeigt dir:

- welche Dateien geändert wurden
- welche Dateien schon für einen Commit vorgemerkt sind
- auf welcher Branch du gerade arbeitest

### Lokale Änderungen speichern

Wenn du mit einer Aufgabe fertig bist oder einen sinnvollen Zwischenstand sichern willst:

1. Status ansehen:

```bash
git status
```

2. Nur die Dateien zum Commit hinzufügen, die wirklich zu dieser Änderung gehören:

```bash
git add dateiname
```

Oder mehrere Dateien:

```bash
git add datei1 datei2
```

Wenn wirklich alle geänderten Dateien zu demselben Thema gehören:

```bash
git add .
```

3. Commit erstellen:

```bash
git commit -m "Kurze klare Beschreibung der Änderung"
```

Beispiel:

```bash
git commit -m "Nachriten-Agent erstellt"
```

4. Falls du auf einer neuen Branch arbeitest, zum ersten Mal hochladen:

```bash
git push -u origin vorname-aufgabe
```

Später reicht meist:

```bash
git push
```

---

### Dasselbe in Zed

1. Öffne das **Git Panel**.
2. Dort siehst du alle geänderten Dateien.
3. Aktiviere bei einzelnen Dateien die Checkbox, um nur diese Dateien zu stagen.
4. Schreibe unten eine **Commit Message**.
5. Klicke auf **`Commit`**.
6. Klicke anschließend auf **`Push`**, falls nötig.

---

## 3. Globale Dateien aktualisieren, ohne den eigenen Stand zu verlieren

Hier geht es darum, neue Änderungen aus dem Online-Repository zu holen, ohne deine eigene Arbeit kaputt zu machen.

### Sicherste Reihenfolge

1. Prüfen, ob du lokale Änderungen hast:

```bash
git status
```

2. Wenn du Änderungen hast, zuerst:

- committen, wenn der Stand sinnvoll ist
- oder **`stash`** verwenden, wenn es nur ein kurzer Zwischenstand ist

3. Danach neue Änderungen holen:

```bash
git pull --rebase
```

### Warum `--rebase`?

- deine eigenen Commits bleiben erhalten
- die Projektgeschichte bleibt oft übersichtlicher
- du vermeidest unnötige Merge-Commits in einfachen Arbeitsabläufen

### Typischer sicherer Ablauf

```bash
git status
git add .
git commit -m "Zwischenstand vor Update"
git pull --rebase
git push
```

### Wenn es zu einem Konflikt kommt

Ein Konflikt bedeutet: Git weiß nicht automatisch, welche Version einer Datei behalten werden soll.

Dann gilt:

1. Ruhe behalten.
2. `git status` ausführen.
3. Die betroffenen Dateien in Zed öffnen.
4. Die markierten Konfliktstellen lesen.
5. Entscheiden, welche Inhalte bleiben sollen.
6. Datei speichern.
7. Danach:

```bash
git add dateiname
git rebase --continue
```

Falls du abbrechen musst:

```bash
git rebase --abort
```

---

### Dasselbe in Zed

1. Öffne das **Git Panel**.
2. Wenn Updates vorhanden sind, kannst du dort **`Pull`**, **`Push`** oder **`Fetch`** ausführen.
3. Bei Konflikten zeigt Zed direkt Schaltflächen wie **`Use main`**, **`Use feature-branch`** oder **`Use Both`**. Die Branch-Namen können bei dir anders heißen.
4. Prüfe das Ergebnis trotzdem immer manuell.

---

## 4. Empfohlener Ablauf im Kurs

Wenn du an einem Kurstag am Repository arbeitest, ist diese Reihenfolge für viele Situationen sinnvoll:

1. Terminal oder Zed öffnen.
2. In den Projektordner wechseln.
3. Arbeitsstand prüfen:

```bash
git status
```

4. Neueste Änderungen holen:

```bash
git pull --rebase
```

5. An Dateien arbeiten.
6. Wieder `git status` prüfen.
7. Eigene Änderungen stagen:

```bash
git add dateiname
```

8. Commit erstellen:

```bash
git commit -m "Kurze Beschreibung"
```

9. Änderungen hochladen:

```bash
git push
```

Wenn du mit Branches arbeitest und noch nie gepusht hast:

```bash
git push -u origin branch-name
```

---

## 5. GitHub Best Practices

### Gute Commit Messages schreiben

Eine gute Commit Message ist:

- kurz
- konkret
- inhaltlich klar

**Gut:**

- `Git-Begriffe im Tutorial ergänzt`
- `Fehler in der Clone-Anleitung korrigiert`
- `Abschnitt zu Zed hinzugefügt`

**Weniger gut:**

- `update`
- `stuff`
- `änderungen`

### Wann committen?

Committe:

- nach einem klaren Arbeitsschritt
- wenn ein Abschnitt sinnvoll abgeschlossen ist
- bevor du größere Updates aus dem Remote holst
- bevor du eine Pause machst, wenn du einen sauberen Zwischenstand hast

### Wie viel auf einmal committen?

Am besten nicht zu viel und nicht zu wenig.

**Gut ist:**

- ein Commit = eine zusammenhängende Idee oder Änderung

Beispiele:

- ein Commit für einen neuen Textabschnitt
- ein Commit für eine Korrektur mehrerer Tippfehler
- ein Commit für eine klar abgegrenzte Layout-Änderung

**Weniger gut ist:**

- viele komplett verschiedene Themen in einem einzigen Commit
- jede winzige Einzelzeile als eigener Commit

### Vor jedem Push kurz prüfen

Bevor du **`push`** verwendest, frage dich:

- Habe ich die richtigen Dateien ausgewählt?
- Ist die Commit Message verständlich?
- Arbeite ich auf der richtigen Branch?
- Ist mein Stand aktuell genug?

---

## 6. GitHub-Terminal-Commands Cheat Sheet

### Navigation

**In einen Ordner wechseln:**

```bash
cd ordnername
```

**In den nächsthöheren Ordner wechseln:**

```bash
cd ..
```

**Aktuellen Ordner anzeigen:**

```bash
pwd
```

**Dateien im aktuellen Ordner anzeigen:**

#### macOS

```bash
ls
```

#### Windows

```bash
dir
```

### Git-Grundbefehle

**Status prüfen:**

```bash
git status
```

**Repository clonen:**

```bash
git clone REPOSITORY-URL
```

**In eine neue Branch wechseln und sie gleichzeitig anlegen:**

```bash
git switch -c branch-name
```

**Vorhandene Branches anzeigen:**

```bash
git branch
```

**Datei für Commit vormerken:**

```bash
git add dateiname
```

**Alle geänderten Dateien vormerken:**

```bash
git add .
```

**Commit erstellen:**

```bash
git commit -m "Beschreibung"
```

**Neue Änderungen von GitHub holen:**

```bash
git pull --rebase
```

**Eigene Änderungen auf GitHub hochladen:**

```bash
git push
```

**Zwischenstand kurzfristig sichern:**

```bash
git stash push -m "Zwischenstand"
```

**Zwischenstand zurückholen:**

```bash
git stash pop
```

---

## 7. Die drei wichtigsten Befehle für den Anfang

Wenn du dir am Anfang nur drei Befehle merken willst, dann diese:

```bash
git status
git add .
git commit -m "Beschreibung"
```

**Kurz gesagt:**

- `git status` zeigt dir, was los ist
- `git add` wählt Dateien für den nächsten Commit aus
- `git commit` speichert deinen Arbeitsstand sinnvoll ab

---

## 8. Merksatz für den Kurs

Arbeite ruhig und in kleinen Schritten:

1. erst schauen mit `git status`
2. dann sinnvoll speichern mit `git add` und `git commit`
3. dann aktualisieren oder hochladen mit `git pull --rebase` und `git push`

**Wenn du unsicher bist:** Führe nicht sofort viele Befehle hintereinander aus. Erst lesen, dann verstehen, dann den nächsten Schritt machen.
