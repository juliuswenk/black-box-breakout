# GitHub-Tutorial

---

## In diesem Tutorial

In diesem Tutorial lernst du:

- **ein Repository** auf deinen Computer zu clonen
- **eigene lokale Dateien** im Ordner `student-sandbox` anzulegen
- **den neuesten Kursstand** aus GitHub zu holen, ohne deine lokalen Lern-Dateien zu verlieren
- **die wichtigsten Git-Befehle** für diesen Kurs zu verwenden

---

## Wichtige Begriffe

- **`Git`** ist das Programm, das Änderungen an Dateien verfolgt.
- **`GitHub`** ist die Online-Plattform, auf der Git-Repositories gespeichert und geteilt werden.
- Ein **`Repository`** (auch **`Repo`**) ist ein Projektordner mit Versionsgeschichte.
- **`lokal`** bedeutet: auf deinem eigenen Computer.
- **`remote`** bedeutet: online auf GitHub.
- **`pull`** bedeutet: neue Änderungen von GitHub auf deinen Computer holen.
- **`.gitignore`** sagt Git, welche lokalen Dateien nicht verfolgt werden sollen.

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
git clone https://github.com/username/projektname.git
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
- In Zed kannst du **Änderungen und den Git-Status** visuell sehen.

#### Zed installieren

Falls Zed noch nicht installiert ist, nutze zuerst die passende Setup-Anleitung:

1. [macOS-setup.md](./macOS-setup.md)
2. [windows-setup.md](./windows-setup.md)

#### Git in Zed sichtbar machen

1. Öffne Zed.
2. Öffne das **Git Panel** über das Git-Symbol in der Statusleiste oder über die Command Palette.
3. Suche in der Command Palette nach **`git panel: toggle focus`**, falls du das Panel nicht findest.
4. Wenn dein Projekt ein Git-Repository ist, zeigt Zed dort geänderte Dateien an.

#### Repository direkt in Zed clonen

1. Öffne Zed.
2. Drücke **`Cmd + Shift + P`** auf macOS oder **`Ctrl + Shift + P`** auf Windows.
3. Suche nach **`Welcome`**, falls die Willkommensseite nicht schon geöffnet ist.
4. Wähle auf der Willkommensseite **`Clone Repository`**.
5. Füge die Repository-URL ein.
6. Wähle einen lokalen Speicherort.
7. Öffne das Projekt nach dem Clonen in Zed.

---

## 2. In `student-sandbox` arbeiten

Für eigene Lern-Dateien verwendest du im Kurs den Ordner:

```text
student-sandbox
```

Dieser Ordner steht in `.gitignore`. Das bedeutet:

- Git ignoriert deine Dateien in `student-sandbox`.
- Deine Lern-Dateien werden nicht auf GitHub hochgeladen.
- Deine Lern-Dateien erscheinen normalerweise nicht in `git status`.
- Du brauchst für diese Dateien keinen eigenen Branch.
- Du brauchst für diese Dateien keinen Commit.
- Du brauchst für diese Dateien keinen Push.

### Ordner prüfen

Im Projektordner kannst du prüfen, ob `student-sandbox` schon existiert.

#### macOS

```bash
ls
```

#### Windows

```bash
dir
```

Wenn der Ordner fehlt, lege ihn an:

```bash
mkdir student-sandbox
```

### Eigene Dateien anlegen

Lege deine persönlichen Notizen, Experimente und Übungsdateien nur in `student-sandbox` ab.

Beispiele:

```text
student-sandbox/meine-notizen.md
student-sandbox/meine-dateien/test.py
student-sandbox/experiment.html
```

Danach kannst du prüfen:

```bash
git status
```

Wenn du nur Dateien in `student-sandbox` geändert hast, sollte Git weiterhin melden:

```text
nothing to commit, working tree clean
```

Das ist in diesem Kurs genau richtig.

---

## 3. Neueste Kursdateien holen

Wenn du neue Kursmaterialien oder Korrekturen bekommen möchtest, hole den neuesten Stand von GitHub:

```bash
git pull
```

Dabei bleiben deine lokalen Dateien in `student-sandbox` erhalten, weil Git diesen Ordner ignoriert.

### Sicherer Ablauf im Kurs

1. Terminal oder Zed öffnen.
2. In den Projektordner wechseln.
3. Prüfen, ob du wirklich nur in `student-sandbox` gearbeitet hast:

```bash
git status
```

4. Wenn dort `nothing to commit, working tree clean` steht, den neuesten Stand holen:

```bash
git pull
```

5. Danach weiter in `student-sandbox` arbeiten.

### Wenn `git status` andere Änderungen zeigt

Wenn `git status` Dateien außerhalb von `student-sandbox` anzeigt, hast du Kursdateien verändert.

Dann nicht sofort `git pull` ausführen. Prüfe zuerst:

- Sind die Änderungen Absicht?
- Brauchst du diese Änderungen noch?
- Soll die Kursleitung sie sehen?

Wenn du unsicher bist, frage nach, bevor du weiterarbeitest.

---

## 4. Was passiert bei Updates?

Wenn du `git pull` ausführst, aktualisiert Git die Dateien, die im Repository verwaltet werden.

Deine Dateien in `student-sandbox` sind lokale Lern-Dateien. Git verwaltet sie nicht und überschreibt sie deshalb normalerweise nicht.

Wichtig ist nur:

- Lege persönliche Dateien wirklich in `student-sandbox` ab.
- Ändere Kursdateien außerhalb von `student-sandbox` nur, wenn du dazu aufgefordert wirst.
- Die `.gitignore` muss im Repository enthalten sein, damit alle Studierenden denselben Schutz haben.

---

## 5. GitHub-Terminal-Commands Cheat Sheet

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

### Git-Grundbefehle für den Kurs

**Status prüfen:**

```bash
git status
```

**Repository clonen:**

```bash
git clone REPOSITORY-URL
```

**Neue Änderungen von GitHub holen:**

```bash
git pull
```

---

## 6. Die wichtigsten Befehle für den Anfang

Wenn du dir am Anfang nur drei Befehle merken willst, dann diese:

```bash
git status
git pull
mkdir student-sandbox
```

**Kurz gesagt:**

- `git status` zeigt dir, ob Git Änderungen sieht
- `git pull` holt die neuesten Kursdateien
- `mkdir student-sandbox` legt den lokalen Lernordner an, falls er fehlt

---

## 7. Merksatz für den Kurs

Arbeite im Kurs nach dieser Reihenfolge:

1. eigene Dateien nur in `student-sandbox` bearbeiten
2. vor Updates prüfen mit `git status`
3. neue Kursdateien holen mit `git pull`

**Wenn du unsicher bist:** Führe nicht sofort viele Befehle hintereinander aus. Erst lesen, dann verstehen, dann den nächsten Schritt machen.
