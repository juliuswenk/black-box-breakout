# Installationsanleitung für den Kurs

---

**Diese Datei ist die kompakte Version des Setups.** Wenn du eine ausführlichere Erklärung brauchst, lies [macOS-setup.md](./macOS-setup.md) oder [windows-setup.md](./windows-setup.md).

---

## Voraussetzungen

Für das Setup solltest du ungefähr Folgendes einplanen:

- einen eigenen GitHub-Account und Zugriff auf deine E-Mails
- eine stabile Internetverbindung
- dein Rechner-Passwort, falls macOS oder Windows Administratorrechte abfragt
- einen Mac mit **macOS 14 Sonoma oder neuer** oder einen Windows-PC mit **Windows 10 22H2 oder neuer**
- einen 64-Bit-Rechner mit mindestens **8 GB RAM**
- mindestens **2 GB freien Speicher**, weil Ollama-Modelle mehrere Gigabyte groß sein können
- ein Terminal: auf macOS `Terminal`, auf Windows `PowerShell` oder `Windows-Terminal`
---

## macOS: Kurzinstallation

### 1. GitHub-Account erstellen

1. Öffne [https://github.com](https://github.com).
2. Erstelle einen Account.
3. Bestätige deine E-Mail-Adresse.

### 2. Homebrew installieren

Öffne das Terminal und führe aus:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
brew --version
```

### 3. Git installieren

```bash
brew install git
git --version
```

**Git einmalig einrichten:**

```bash
git config --global user.name "Dein Name"
git config --global user.email "deine-email@example.com"
```

### 4. Zed installieren

1. Lade Zed von [https://zed.dev/download](https://zed.dev/download) herunter.
2. Öffne die `.dmg`-Datei.
3. Ziehe `Zed.app` in den Programme-Ordner.
4. Öffne Zed einmal.
5. Drücke `Cmd + Shift + P`.
6. Führe `zed: install CLI` aus.

**Prüfen:**

```bash
zed --version
```

### 5. OpenCode installieren und in Zed öffnen

```bash
brew install anomalyco/tap/opencode
opencode --version
```

**OpenCode in Zed verbinden:**

1. Öffne Zed.
2. Drücke `Cmd + Shift + X` oder öffne mit `Cmd + Shift + P` den Befehl `zed: extensions`.
3. Suche nach `OpenCode` und installiere die Erweiterung.
4. Drücke `Cmd + Shift + P`.
5. Führe `zed: open settings` aus.
6. Ergänze in `settings.json`:

```json
{
  "agent_servers": {
    "OpenCode": {
      "command": "opencode",
      "args": ["acp"]
    }
  }
}
```

Wenn deine `settings.json` schon Inhalt hat, füge nur den Block `"agent_servers"` in das bestehende JSON-Objekt ein.

**Agent-Chat öffnen:**

1. Drücke in Zed `Cmd + Shift + P`.
2. Führe `agent: new thread` aus.
3. Wähle über den `+`-Button oder die Agent-Auswahl `OpenCode`, falls Zed nach dem Agent fragt.

Beim ersten Start kannst du im OpenCode-Chat `/connect` eingeben und deinen gewünschten Modellanbieter verbinden.

### 6. Python installieren

```bash
brew install python
python3 --version
pip3 --version
```

### 7. Strands SDK installieren

```bash
cd ~/Desktop
mkdir kurs-setup
cd kurs-setup
python3 -m venv .venv
source .venv/bin/activate
python3 -m pip install --upgrade pip
pip install strands-agents strands-agents-tools
pip show strands-agents
```

### 8. Ollama installieren

1. Lade Ollama von [https://ollama.com/download/mac](https://ollama.com/download/mac) herunter.
2. Öffne die `.dmg`-Datei.
3. Ziehe `Ollama.app` in den Programme-Ordner.
4. Starte Ollama einmal.

**Prüfen:**

```bash
ollama --version
```

### 9. Abschluss-Check

```bash
git --version
brew --version
opencode --version
python3 --version
pip3 --version
zed --version
ollama --version
```

---

## Windows: Kurzinstallation

### 1. GitHub-Account erstellen

1. Öffne [https://github.com](https://github.com).
2. Erstelle einen Account.
3. Bestätige deine E-Mail-Adresse.

### 2. WinGet prüfen

Öffne PowerShell oder Windows-Terminal:

```powershell
winget --version
```

Wenn `winget` nicht gefunden wird:

1. Öffne den Microsoft Store.
2. Suche nach `App Installer`.
3. Installiere oder aktualisiere die App.

### 3. Git installieren

```powershell
winget install --id Git.Git -e --source winget
git --version
```

**Git einmalig einrichten:**

```powershell
git config --global user.name "Dein Name"
git config --global user.email "deine-email@example.com"
```

### 4. Zed installieren

1. Lade Zed von [https://zed.dev/download](https://zed.dev/download) herunter.
2. Starte den Windows-Installer.
3. Folge den Installationsschritten.
4. Öffne Zed nach der Installation einmal.
5. Öffne danach ein neues Terminal.

**Prüfen:**

```powershell
zed --version
```

### 5. OpenCode installieren und in Zed öffnen

```powershell
winget install --id OpenJS.NodeJS.LTS -e --source winget
```

Öffne danach ein neues Terminal und führe aus:

```powershell
npm install -g opencode-ai
opencode --version
```

**OpenCode in Zed verbinden:**

1. Öffne Zed.
2. Drücke `Ctrl + Shift + X` oder öffne mit `Ctrl + Shift + P` den Befehl `zed: extensions`.
3. Suche nach `OpenCode` und installiere die Erweiterung.
4. Drücke `Ctrl + Shift + P`.
5. Führe `zed: open settings` aus.
6. Ergänze in `settings.json`:

```json
{
  "agent_servers": {
    "OpenCode": {
      "command": "opencode",
      "args": ["acp"]
    }
  }
}
```

Wenn deine `settings.json` schon Inhalt hat, füge nur den Block `"agent_servers"` in das bestehende JSON-Objekt ein.

**Agent-Chat öffnen:**

1. Drücke in Zed `Ctrl + Shift + P`.
2. Führe `agent: new thread` aus.
3. Wähle über den `+`-Button oder die Agent-Auswahl `OpenCode`, falls Zed nach dem Agent fragt.

Beim ersten Start kannst du im OpenCode-Chat `/connect` eingeben und deinen gewünschten Modellanbieter verbinden.

### 6. Python installieren

1. Öffne [https://www.python.org/downloads/windows/](https://www.python.org/downloads/windows/).
2. Lade den aktuellen Installer herunter.
3. Aktiviere im Installer `Add Python to PATH`, falls diese Option angezeigt wird.
4. Installiere Python.

**Prüfen:**

```powershell
python --version
```

Falls nötig:

```powershell
py --version
```

### 7. Strands SDK installieren

```powershell
cd ~/Desktop
mkdir kurs-setup
cd kurs-setup
py -m venv .venv
.venv\Scripts\Activate.ps1
python -m pip install --upgrade pip
pip install strands-agents strands-agents-tools
pip show strands-agents
```

Wenn PowerShell die Aktivierung blockiert, nutze stattdessen:

```bat
.venv\Scripts\activate.bat
```

### 8. Ollama installieren

1. Lade Ollama von [https://ollama.com/download/windows](https://ollama.com/download/windows) herunter.
2. Starte den Installer.
3. Öffne danach ein neues Terminal.

**Prüfen:**

```powershell
ollama --version
```

### 9. Abschluss-Check

```powershell
git --version
winget --version
opencode --version
python --version
py -m pip --version
zed --version
ollama --version
```

Wenn `python` nicht funktioniert:

```powershell
py --version
```

---

## Danach

Wenn dein Rechner fertig eingerichtet ist, lies als Nächstes [github-tutorial.md](./github-tutorial.md).
