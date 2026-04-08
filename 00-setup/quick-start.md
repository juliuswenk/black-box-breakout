# Installationsanleitung für den Kurs

Diese Datei ist die kompakte Version des Setups. Wenn du eine ausführlichere Erklärung brauchst, lies [setup-für-den-kurs.md](./setup-für-den-kurs.md).

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

Git einmalig einrichten:

```bash
git config --global user.name "Dein Name"
git config --global user.email "deine-email@example.com"
```

### 4. Visual Studio Code installieren

1. Lade VS Code von [https://code.visualstudio.com](https://code.visualstudio.com) herunter.
2. Öffne die `.dmg`-Datei.
3. Ziehe `Visual Studio Code.app` in den Programme-Ordner.
4. Öffne VS Code.
5. Drücke `Cmd + Shift + P`.
6. Führe `Shell Command: Install 'code' command in PATH` aus.

Prüfen:

```bash
code --version
```

Danach in VS Code die Python-Erweiterung von Microsoft installieren.

### 5. Python installieren

```bash
brew install python
python3 --version
pip3 --version
```

### 6. Strands SDK installieren

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

### 7. Ollama installieren

1. Lade Ollama von [https://ollama.com/download/mac](https://ollama.com/download/mac) herunter.
2. Öffne die `.dmg`-Datei.
3. Ziehe `Ollama.app` in den Programme-Ordner.
4. Starte Ollama einmal.

Prüfen:

```bash
ollama --version
```

### 8. Abschluss-Check

```bash
git --version
brew --version
python3 --version
pip3 --version
code --version
ollama --version
```

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

Git einmalig einrichten:

```powershell
git config --global user.name "Dein Name"
git config --global user.email "deine-email@example.com"
```

### 4. Visual Studio Code installieren

1. Lade VS Code von [https://code.visualstudio.com](https://code.visualstudio.com) herunter.
2. Starte den `User Setup`-Installer.
3. Öffne nach der Installation ein neues Terminal.

Prüfen:

```powershell
code --version
```

Danach in VS Code die Python-Erweiterung von Microsoft installieren.

### 5. Python installieren

1. Öffne [https://www.python.org/downloads/windows/](https://www.python.org/downloads/windows/).
2. Lade den aktuellen Installer herunter.
3. Aktiviere im Installer `Add Python to PATH`, falls diese Option angezeigt wird.
4. Installiere Python.

Prüfen:

```powershell
python --version
```

Falls nötig:

```powershell
py --version
```

### 6. Strands SDK installieren

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

### 7. Ollama installieren

1. Lade Ollama von [https://ollama.com/download/windows](https://ollama.com/download/windows) herunter.
2. Starte den Installer.
3. Öffne danach ein neues Terminal.

Prüfen:

```powershell
ollama --version
```

### 8. Abschluss-Check

```powershell
git --version
winget --version
python --version
py -m pip --version
code --version
ollama --version
```

Wenn `python` nicht funktioniert:

```powershell
py --version
```

## Danach

Wenn dein Rechner fertig eingerichtet ist, lies als Nächstes [github-tutorial.md](./github-tutorial.md).
