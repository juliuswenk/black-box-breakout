# Lesson 02 Setup: My First Agent

Diese Anleitung richtet den zweiten Termin als eigenständige Lektion ein. Du brauchst dafür nicht zuerst alle vorherigen Lektionen gemacht zu haben.

Ziel: GitHub-Account erstellen, Zed installieren, alle Systemprogramme einrichten, das Repository in Zed klonen und danach die Python-Requirements für Strands installieren.

## 1. GitHub-Account erstellen

1. Öffne <https://github.com>.
2. Klicke auf **Sign up**.
3. Erstelle einen Account.
4. Bestätige deine E-Mail-Adresse.
5. Merke dir deinen GitHub-Benutzernamen.

Der GitHub-Account kann nicht sinnvoll per Terminal-Befehl erstellt werden, weil Registrierung und E-Mail-Bestätigung im Browser passieren.

## 2. Zed über die Website installieren

1. Öffne <https://zed.dev/download>.
2. Lade die Version für dein Betriebssystem herunter.
3. Installiere Zed.
4. Öffne Zed einmal.

macOS:

1. Öffne die `.dmg`-Datei.
2. Ziehe `Zed.app` in den Programme-Ordner.
3. Starte Zed.

Windows:

1. Starte den heruntergeladenen Installer.
2. Folge den Installationsschritten.
3. Öffne danach Zed.

---
## 3. Anforderungen installieren 1/2

### macOS

Öffne das macOS-Programm **Terminal**.

Homebrew:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
brew --version
```

Git:

```bash
brew install git
git --version
```

Python:

```bash
brew install python
python3 --version
pip3 --version
```

Ollama:

```bash
brew install --cask ollama
ollama --version
```

Kursmodell für lokale Tests:

```bash
ollama pull llama3.2:1b
ollama list
```

### Windows

Öffne **PowerShell** oder **Windows-Terminal**. (Auf deutsch auch gern: Eingabeaufforderung)

WinGet prüfen:

```powershell
winget --version
```

Wenn `winget` nicht gefunden wird:

1. Öffne den Microsoft Store.
2. Suche nach `App Installer`.
3. Installiere oder aktualisiere die App.
4. Öffne PowerShell danach neu.

Git:

```powershell
winget install --id Git.Git -e --source winget
git --version
```

Python:

```powershell
winget install --id Python.Python.3.12 -e --source winget
python --version
py --version
```

Node.js und npm:

```powershell
winget install --id OpenJS.NodeJS.LTS -e --source winget
node --version
npm --version
```

OpenCode:

```powershell
npm install -g opencode-ai
opencode --version
```

Ollama:

```powershell
winget install --id Ollama.Ollama -e --source winget
ollama --version
```

Lokales KI Modell für unsere Projekte:

```powershell
ollama pull llama3.2:1b
ollama list
```

---
## 4. Python-Requirements für Lesson 02 installieren 2/2

Die Datei `requirements.txt` liegt in diesem Ordner:

```text
02-my-first-agent/02-lesson-setup/requirements.txt
```

Sie installiert:

- `strands-agents`: das Strands Agents SDK
- `strands-agents-tools`: zusätzliche Tools für Strands Agents

### macOS

```bash
cd 02-my-first-agent/02-lesson-setup
python3 -m venv .venv
source .venv/bin/activate
python3 -m pip install --upgrade pip
pip install -r requirements.txt
python check-setup.py
```

Kurzform mit Setup-Skript:

```bash
cd 02-my-first-agent/02-lesson-setup
bash setup-macos.sh
```

### Windows

```powershell
cd 02-my-first-agent\02-lesson-setup
py -m venv .venv
.\.venv\Scripts\Activate.ps1
python -m pip install --upgrade pip
pip install -r requirements.txt
python check-setup.py
```

Kurzform mit Setup-Skript:

```powershell
cd 02-my-first-agent\02-lesson-setup
.\setup-windows.ps1
```

Falls PowerShell die Aktivierung blockiert, nutze:

```bat
.venv\Scripts\activate.bat
```

Danach erneut:

```bat
pip install -r requirements.txt
python check-setup.py
```
---
## 5. Repository direkt in Zed klonen

1. Öffne Zed.
2. Drücke `Cmd + Shift + P` auf macOS oder `Ctrl + Shift + P` auf Windows.
3. Suche nach **clone**.
4. Wähle den Befehl **Git: Clone** oder **Project: Clone Repository**.
5. Füge diese Repository-URL ein:

```text
https://github.com/juliuswenk/black-box-breakout.git
```

6. Wähle einen Speicherort, zum Beispiel deinen Desktop.
7. Öffne den neu geklonten Ordner `black-box-breakout` in Zed.

Fallback über das Terminal:

macOS:

```bash
cd ~/Desktop
git clone https://github.com/juliuswenk/black-box-breakout.git
cd black-box-breakout
zed .
```

Windows:

```powershell
cd $HOME\Desktop
git clone https://github.com/juliuswenk/black-box-breakout.git
cd black-box-breakout
zed .
```
---
## 6. Abschluss-Check (optional)

macOS:

```bash
git --version
python3 --version
zed --version
opencode --version
ollama --version
ollama list
```

Windows:

```powershell
git --version
python --version
zed --version
opencode --version
ollama --version
ollama list
```

Wenn `check-setup.py` erfolgreich läuft und `llama3.2:1b` in `ollama list` auftaucht, ist Lesson 02 vorbereitet.
