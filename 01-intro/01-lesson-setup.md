# Lesson 01 Setup: Vibe Coding mit OpenCode in Zed

Diese Anleitung richtet den ersten Termin als eigenständige Lektion ein. Du brauchst dafür kein vorheriges Kurs-Setup.

Ziel: Nach diesem Setup kannst du das Kurs-Repository in Zed öffnen und mit OpenCode direkt im Editor vibe coden.

Wir nutzen für OpenCode das kostenlose Modell **Big Pickle** über **OpenCode Zen**. Kostenlose Modelle können sich ändern oder Limits haben; wenn Big Pickle nicht angezeigt wird, wähle in OpenCode ein anderes kostenloses OpenCode-Zen-Modell.

## macOS

### 1. GitHub-Account erstellen

1. Öffne <https://github.com>.
2. Klicke auf **Sign up**.
3. Erstelle einen Account.
4. Bestätige deine E-Mail-Adresse.
5. Merke dir deinen GitHub-Benutzernamen.

### 2. Zed über die Website installieren

1. Öffne <https://zed.dev/download>.
2. Lade die macOS-Version herunter.
3. Öffne die `.dmg`-Datei.
4. Ziehe `Zed.app` in den Programme-Ordner.
5. Starte Zed einmal.

### 3. Anforderungen installieren 1/2

Öffne das macOS-Programm **Terminal**.

Homebrew installieren:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
brew --version
```

Git installieren:

```bash
brew install git
git --version
```

Falls die OpenCode Erweiterung später nicht funktioniert, kannst du OpenCode als Fallback im Terminal installieren:

```bash
brew install anomalyco/tap/opencode
opencode --version
```

### 4. Repository direkt in Zed klonen

1. Öffne Zed.
2. Drücke `Cmd + Shift + P`.
3. Suche nach **clone**.
4. Wähle den Befehl **Git: Clone** oder **Project: Clone Repository**.
5. Füge diese Repository-URL ein:

```text
https://github.com/juliuswenk/black-box-breakout.git
```

6. Wähle einen Speicherort, zum Beispiel deinen Desktop.
7. Öffne den neu geklonten Ordner `black-box-breakout` in Zed.

Fallback über das Terminal:

```bash
cd ~/Desktop
git clone https://github.com/juliuswenk/black-box-breakout.git
cd black-box-breakout
zed .
```

### 5. OpenCode-Erweiterung in Zed installieren

1. Öffne Zed.
2. Drücke `Cmd + Shift + P`.
3. Suche nach **extensions**.
4. Öffne den Befehl **zed: extensions**.
5. Suche in den Erweiterungen nach **OpenCode**.
6. Installiere die **OpenCode** Agent-Erweiterung.

Du musst dafür keinen `agent_servers`-Block manuell in `settings.json` eintragen. Die Erweiterung übernimmt die Verbindung zum Zed Agent Panel.

### 6. Agent Panel öffnen und OpenCode starten

1. Drücke in Zed `Cmd + Shift + P`.
2. Führe `agent: new thread` aus.
3. Klicke im Agent Panel auf den `+`-Button oder die Agent-Auswahl.
4. Wähle **OpenCode**.
5. Falls OpenCode nach Verbindung oder Login fragt, wähle **OpenCode Zen** und folge den Anweisungen.
6. Wähle als Modell **Big Pickle** oder `opencode/big-pickle`, falls es angezeigt wird.
7. Schreibe eine kurze Testnachricht:

```text
Erkläre mir kurz, welche Dateien in diesem Projekt wichtig sind.
```

Wenn OpenCode antwortet, ist Lesson 01 vorbereitet.

### 7. Abschluss-Check

```bash
git --version
zed --version
```

## Windows

### 1. GitHub-Account erstellen

1. Öffne <https://github.com>.
2. Klicke auf **Sign up**.
3. Erstelle einen Account.
4. Bestätige deine E-Mail-Adresse.
5. Merke dir deinen GitHub-Benutzernamen.

Der GitHub-Account kann nicht sinnvoll per Terminal-Befehl erstellt werden, weil Registrierung und E-Mail-Bestätigung im Browser passieren.

### 2. Zed über die Website installieren

1. Öffne <https://zed.dev/download>.
2. Lade die Windows-Version herunter.
3. Starte den Installer.
4. Folge den Installationsschritten.
5. Öffne danach Zed einmal.

### 3. Anforderungen installieren, die nicht in requirements.txt stehen

Öffne **PowerShell** oder **Windows-Terminal**.

WinGet prüfen:

```powershell
winget --version
```

Wenn `winget` nicht gefunden wird:

1. Öffne den Microsoft Store.
2. Suche nach `App Installer`.
3. Installiere oder aktualisiere die App.
4. Öffne PowerShell danach neu.

Git installieren:

```powershell
winget install --id Git.Git -e --source winget
git --version
```

OpenCode musst du für den Zed-Extension-Weg nicht vorher per Terminal installieren. Wir installieren OpenCode gleich direkt in Zed als Erweiterung.

Falls die Erweiterung später nicht funktioniert, kannst du OpenCode als Fallback über Node.js und npm installieren:

```powershell
winget install --id OpenJS.NodeJS.LTS -e --source winget
node --version
npm --version
npm install -g opencode-ai
opencode --version
```

### 4. Repository direkt in Zed klonen

1. Öffne Zed.
2. Drücke `Ctrl + Shift + P`.
3. Suche nach **clone**.
4. Wähle den Befehl **Git: Clone** oder **Project: Clone Repository**.
5. Füge diese Repository-URL ein:

```text
https://github.com/juliuswenk/black-box-breakout.git
```

6. Wähle einen Speicherort, zum Beispiel deinen Desktop.
7. Öffne den neu geklonten Ordner `black-box-breakout` in Zed.

Fallback über PowerShell:

```powershell
cd $HOME\Desktop
git clone https://github.com/juliuswenk/black-box-breakout.git
cd black-box-breakout
zed .
```

### 5. OpenCode-Erweiterung in Zed installieren

1. Öffne Zed.
2. Drücke `Ctrl + Shift + P`.
3. Suche nach **extensions**.
4. Öffne den Befehl **zed: extensions**.
5. Suche in den Erweiterungen nach **OpenCode**.
6. Installiere die **OpenCode** Agent-Erweiterung.

Du musst dafür keinen `agent_servers`-Block manuell in `settings.json` eintragen. Die Erweiterung übernimmt die Verbindung zum Zed Agent Panel.

### 6. Agent Panel öffnen und OpenCode starten

1. Drücke in Zed `Ctrl + Shift + P`.
2. Führe `agent: new thread` aus.
3. Klicke im Agent Panel auf den `+`-Button oder die Agent-Auswahl.
4. Wähle **OpenCode**.
5. Falls OpenCode nach Verbindung oder Login fragt, wähle **OpenCode Zen** und folge den Anweisungen.
6. Wähle als Modell **Big Pickle** oder `opencode/big-pickle`, falls es angezeigt wird.
7. Schreibe eine kurze Testnachricht:

```text
Erkläre mir kurz, welche Dateien in diesem Projekt wichtig sind.
```

Wenn OpenCode antwortet, ist Lesson 01 vorbereitet.

### 7. Abschluss-Check

```powershell
git --version
zed --version
```

## Hinweise

- OpenCode Zen stellt kostenlose Modelle für den Einstieg bereit. In der OpenCode-Dokumentation wird Big Pickle als kostenloses Modell genannt, die konkrete Liste kann sich aber ändern.
- Für Lesson 01 brauchst du kein Ollama und kein lokales Llama-Modell.
- Für Lesson 01 brauchst du keine Python-Umgebung und keine `requirements.txt`.
- Für den Zed-Extension-Weg ist eine vorherige Terminal-Installation von OpenCode normalerweise nicht nötig. Die OpenCode-Erweiterung in Zed ist der primäre Weg.
- Wenn Zed OpenCode nicht starten kann, nutze die Terminal-Installation als Fallback und prüfe danach mit `opencode --version`.
