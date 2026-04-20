# Setup für Windows

---

Diese Datei führt Schritt für Schritt durch die Installation auf Windows.

Wenn du einen Mac nutzt, lies [macOS-setup.md](./macOS-setup.md).

Wenn du nur die Kurzversion brauchst, nutze [quick-start.md](./quick-start.md).

---

## 1. Voraussetzungen

Für das Windows-Setup solltest du ungefähr Folgendes einplanen:

- einen eigenen GitHub-Account und Zugriff auf deine E-Mails
- eine stabile Internetverbindung
- dein Windows-Passwort, falls Windows Administratorrechte abfragt
- einen Windows-PC mit **Windows 10 22H2 oder neuer**, besser Windows 11
- einen 64-Bit-Rechner mit x64 oder Arm64
- mindestens **8 GB RAM**
- mindestens **3 GB freien Speicher**, weil Ollama-Modelle mehrere Gigabyte groß sein können
- `PowerShell` oder `Windows-Terminal`
- für OpenCode einen Modellanbieter oder API-Key, den du später mit `/connect` einrichtest

---

## 2. GitHub-Account anlegen

Wenn du noch keinen GitHub-Account hast:

1. Öffne [https://github.com](https://github.com).
2. Klicke auf `Sign up`.
3. Erstelle deinen Account.
4. Bestätige deine E-Mail-Adresse.
5. Notiere dir deinen GitHub-Benutzernamen.

---

## 3. Den Paketmanager WinGet prüfen

Auf modernen Windows-Versionen ist **`winget`** in der Regel über **`App Installer`** verfügbar.

So prüfst du es:

1. Öffne `PowerShell` oder das `Windows-Terminal`.
2. Gib ein:

```powershell
winget --version
```

Wenn eine Versionsnummer erscheint, ist WinGet bereit.

Wenn `winget` nicht gefunden wird:

1. Öffne den Microsoft Store.
2. Suche nach `App Installer`.
3. Installiere oder aktualisiere die App.
4. Starte das Terminal neu.
5. Prüfe erneut:

```powershell
winget --version
```

---

## 4. Git installieren

Für den Kurs ist die WinGet-Variante praktisch:

```powershell
winget install --id Git.Git -e --source winget
```

Danach prüfen:

```powershell
git --version
```

Danach Git einmalig einrichten:

```powershell
git config --global user.name "Dein Name"
git config --global user.email "deine-email@example.com"
```

Prüfen:

```powershell
git config --global --list
```

---

## 5. Zed installieren

Für Einsteiger*innen ist der offizielle Installer von Zed die einfachste Wahl.

1. Öffne [https://zed.dev/download](https://zed.dev/download).
2. Lade die Windows-Version herunter.
3. Starte den Installer.
4. Folge den Installationsschritten.
5. Öffne Zed nach der Installation einmal.

### Wichtig

- Zed fügt sich unter Windows normalerweise selbst zu **`%PATH%`** hinzu.
- Danach kannst du `zed .` im Terminal verwenden.
- Öffne nach der Installation das Terminal neu, damit die Änderung wirksam wird.

Prüfen:

```powershell
zed --version
```

---

## 6. OpenCode installieren und in Zed öffnen

**OpenCode** ist ein Coding-Agent. In Zed läuft OpenCode über das **Agent Client Protocol (ACP)**. Zed startet dafür im Hintergrund den Befehl `opencode acp`.

Die OpenCode-Dokumentation empfiehlt für Windows grundsätzlich WSL. Für dieses native Windows-Setup installieren wir OpenCode über Node.js und `npm`.

1. Installiere Node.js LTS:

```powershell
winget install --id OpenJS.NodeJS.LTS -e --source winget
```

2. Öffne danach ein neues Terminal.
3. Installiere OpenCode:

```powershell
npm install -g opencode-ai
```

4. Prüfe die Installation:

```powershell
opencode --version
```

Node.js ist hier nötig, weil OpenCode in diesem Windows-Setup über `npm` installiert wird. Für die Zed-Erweiterung allein müsstest du Node.js nicht separat installieren.

### OpenCode mit Zed verbinden

1. Öffne Zed.
2. Öffne das `Extensions`-Fenster über `Zed > Extensions` oder `Ctrl + Shift + X`.
3. Suche nach `OpenCode` und installiere die Erweiterung.
4. Öffne das Agent Panel mit der Schaltfläche unten rechts oder `Ctrl + ?`.
5. Klicke auf das Plus-Symbol oben rechts und wähle `OpenCode`.
6. Verbinde beim ersten Start deinen gewünschten Modellanbieter mit `/connect`, falls OpenCode danach fragt.

Jetzt kannst du mit dem Coding Agent entwickeln.

---

## 7. Python installieren

Für das Strands SDK brauchst du Python **`3.10+`**.

Der für Anfänger*innen einfachste Weg ist die offizielle Python-Seite:

1. Öffne [https://www.python.org/downloads/windows/](https://www.python.org/downloads/windows/).
2. Lade den aktuellen Windows-Installer herunter.
3. Starte den Installer.
4. Wenn eine Option wie `Add Python to PATH` oder `Add to PATH` angezeigt wird, aktiviere sie.
5. Führe die Installation aus.

Danach prüfen:

```powershell
python --version
```

Wenn `python` nicht funktioniert, probiere:

```powershell
py --version
```

### Hinweis

- Die aktuelle Python-Dokumentation empfiehlt auf Windows besonders den Befehl `py`, wenn mehrere Python-Versionen auf einem Rechner existieren.
- Für den Kurs funktionieren `python` oder `py`, solange der Befehl auf deinem Rechner korrekt eingerichtet ist.

---

## 8. Einen Kursordner anlegen und das Strands SDK installieren

Wie auf macOS arbeiten wir auch unter Windows mit einer virtuellen Umgebung.

1. Öffne PowerShell oder Windows-Terminal.
2. Wechsle zum Desktop:

```powershell
cd ~/Desktop
```

3. Lege einen Kursordner an:

```powershell
mkdir kurs-setup
cd kurs-setup
```

4. Erzeuge eine virtuelle Umgebung:

```powershell
py -m venv .venv
```

5. Aktiviere die virtuelle Umgebung in PowerShell:

```powershell
.venv\Scripts\Activate.ps1
```

Wenn PowerShell die Ausführung blockiert, nutze stattdessen die Eingabeaufforderung mit:

```bat
.venv\Scripts\activate.bat
```

6. Aktualisiere `pip`:

```powershell
python -m pip install --upgrade pip
```

7. Installiere das Strands SDK und das Tool-Paket:

```powershell
pip install strands-agents strands-agents-tools
```

8. Prüfe die Installation:

```powershell
pip show strands-agents
```

Wenn du die virtuelle Umgebung wieder verlassen willst:

```powershell
deactivate
```

---

## 9. Ollama installieren

Die offizielle Ollama-Doku für Windows sagt:

- Ollama läuft als native Windows-App
- nach der Installation ist der Befehl `ollama` in `cmd`, `PowerShell` und anderen Terminals verfügbar

Für Anfänger*innen ist der einfachste Weg der offizielle Installer:

1. Öffne [https://ollama.com/download/windows](https://ollama.com/download/windows).
2. Lade den Installer herunter.
3. Starte die Installationsdatei.
4. Folge den Schritten des Installers.
5. Öffne danach ein neues Terminal.

Prüfen:

```powershell
ollama --version
```

### Wichtig

- Laut offizieller Doku braucht Ollama auf Windows mindestens **Windows 10 22H2** oder neuer.
- Für die Grundinstallation brauchst du mindestens einige Gigabyte freien Speicher.
- Das eigentliche Modell laden wir bei Bedarf später.

---

## 10. Alles kurz testen

Wenn alles installiert ist, sollten diese Befehle funktionieren:

```powershell
git --version
winget --version
opencode --version
python --version
py -m pip --version
zed --version
ollama --version
```

Wenn `python --version` nicht funktioniert, teste stattdessen:

```powershell
py --version
```

---

## 11. Danach

Wenn dein Setup fertig ist, lies als Nächstes [github-tutorial.md](./github-tutorial.md).
