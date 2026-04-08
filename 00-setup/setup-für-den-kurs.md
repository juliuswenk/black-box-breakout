# Setup für den Kurs

Diese Datei erklärt den Tech Stack des Kurses und führt Schritt für Schritt durch die Installation.

Wenn du nur die Kurzversion der Installation brauchst, nutze zusätzlich [quick-start.md](./quick-start.md).

Wenn du nach dem Setup lernen möchtest, wie ihr im Kurs mit GitHub arbeitet, lies danach [github-tutorial.md](./github-tutorial.md).

---

## 1. Womit wir im Kurs arbeiten

| Tool | Wofür wir es brauchen | Pflicht? |
| --- | --- | --- |
| GitHub | Zugriff auf Kursdateien und gemeinsame Repositories | ja |
| Git | lokale Versionsverwaltung auf dem eigenen Computer | ja |
| Visual Studio Code | Code-Editor für Dateien, Projekte und Git-Ansicht | ja |
| Terminal | um Befehle auszuführen und Tools zu starten | ja |
| Homebrew (macOS) oder WinGet (Windows) | System-Paketmanager zum Installieren und Aktualisieren von Programmen | ja |
| Python 3.10 oder neuer | Laufzeit für das Strands SDK | ja |
| `pip` | Python-Paketmanager, wird mit Python verwendet | ja |
| Strands Agents SDK | Agenten-Framework, mit dem wir im Kurs arbeiten | ja |
| Ollama | lokale Laufzeit für Sprachmodelle auf dem eigenen Rechner | ja |

Wichtiger Hinweis:

- `GitHub` ist keine App, die ihr zwingend lokal installieren müsst.
- Für die Arbeit im Kurs sind vor allem ein GitHub-Account und `Git` auf dem Rechner wichtig.
- `GitHub Desktop` ist für diesen Kurs nicht erforderlich.

---

## 2. In welcher Reihenfolge du installieren solltest

Arbeite möglichst in dieser Reihenfolge:

1. GitHub-Account anlegen
2. Paketmanager prüfen oder installieren
3. Git installieren
4. Visual Studio Code installieren
5. Python installieren
6. Strands SDK in einer virtuellen Umgebung installieren
7. Ollama installieren
8. Zum Schluss alles mit kurzen Befehlen testen

---

## 3. Vor dem Start

Bevor du beginnst:

- stelle sicher, dass du eine stabile Internetverbindung hast
- halte dein Rechner-Passwort bereit, falls dein System nach Administratorrechten fragt
- plane etwas freien Speicherplatz ein
- bei Ollama brauchst du zusätzlich Platz für Modelle, oft mehrere Gigabyte

---

## 4. Setup auf macOS

### 4.1 GitHub-Account anlegen

Wenn du noch keinen GitHub-Account hast:

1. Öffne [https://github.com](https://github.com).
2. Klicke auf `Sign up`.
3. Erstelle deinen Account.
4. Bestätige deine E-Mail-Adresse.
5. Notiere dir deinen GitHub-Benutzernamen.

### 4.2 Den Paketmanager Homebrew installieren

Homebrew ist auf macOS der einfachste Weg, Entwickler-Tools sauber zu installieren. Der Befehl für die Installation lautet:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

So führst du den Terminal-Befehl aus:

1. Öffne das Terminal. (Windows: Eingabeaufforderung)
2. Kopiere den Befehl oben in das Terminal.
3. Drücke `Enter`.
4. Lies die Hinweise im Terminal und bestätige die Installation, wenn du dazu aufgefordert wirst.
5. Wenn Homebrew fertig installiert ist, prüfe die Installation:

```bash
brew --version
```

Wenn eine Versionsnummer erscheint, ist Homebrew einsatzbereit.

### 4.3 Git installieren

Git installierst du jetzt mit dem folgenden Befehl: 'brew` ist dabei der Befehl, der Homebrew anspricht!)

- `brew install git`

Für den Kurs nehmen wir den Weg über Homebrew, weil er leicht zu aktualisieren ist.

1. Installiere Git mit dem folgenden Befehl: (`brew` ist dabei der Befehl, der jetzt Homebrew anspricht)

```bash
brew install git
```

2. Prüfe, ob Git installiert ist:

```bash
git --version
```

3. Richte Git einmalig mit deinem Namen und deiner E-Mail-Adresse ein:

```bash
git config --global user.name "Dein Name"
git config --global user.email "deine-email@example.com"
```

4. Prüfe die gespeicherten Daten:

```bash
git config --global --list
```

### 4.4 Visual Studio Code installieren

Die offizielle VS-Code-Doku für macOS empfiehlt:

So gehst du vor:

1. Öffne [https://code.visualstudio.com](https://code.visualstudio.com).
2. Lade die macOS-Version herunter.
3. Öffne die heruntergeladene `.dmg`-Datei.
4. Ziehe `Visual Studio Code.app` in den Ordner `Applications`.
5. Öffne VS Code einmal.

### 4.5 Python installieren

Für das Strands SDK brauchst du Python `3.10+`.

Mit Homebrew geht das einfach so:

```bash
brew install python
```

Danach prüfen:

```bash
python3 --version
pip3 --version
```

Wenn beide Befehle eine Version anzeigen, ist Python korrekt installiert.

### 4.6 Einen Kursordner anlegen und das Strands SDK installieren

Das Strands SDK sollte nicht wild global auf dem System landen. Für den Kurs ist eine virtuelle Umgebung der sauberste Weg.

1. Wechsle an einen Ort, an dem du deinen Kursordner speichern möchtest. Beispiel Desktop:

```bash
cd ~/Desktop
```

2. Lege einen Kursordner an:

```bash
mkdir kurs-setup
cd kurs-setup
```

3. Erzeuge eine virtuelle Umgebung:

```bash
python3 -m venv .venv
```

4. Aktiviere die virtuelle Umgebung:

```bash
source .venv/bin/activate
```

Wenn alles geklappt hat, steht oft `(.venv)` am Anfang der Terminalzeile.

5. Aktualisiere `pip`:

```bash
python3 -m pip install --upgrade pip
```

6. Installiere das Strands SDK und das Tool-Paket:

```bash
pip install strands-agents strands-agents-tools
```

7. Prüfe die Installation:

```bash
pip show strands-agents
```

Wichtig:

- Solange du im Projekt arbeitest, solltest du die virtuelle Umgebung aktiv lassen.
- Wenn du sie verlassen willst, gib ein:

```bash
deactivate
```

### 4.7 Ollama installieren

Ollama ist die lokale Modell-Laufzeit, die wir im Kurs verwenden.

So gehst du vor, um es zu installieren:

1. Öffne [https://ollama.com/download/mac](https://ollama.com/download/mac).
2. Lade die macOS-Version herunter.
3. Öffne die `.dmg`-Datei.
4. Ziehe `Ollama.app` in den Ordner `Applications`.
5. Starte Ollama einmal.
6. Falls Ollama fragt, ob das CLI verlinkt werden soll, bestätige dies.

Danach prüfen:

```bash
ollama --version
```

Wichtig:

- Die offizielle macOS-Doku nennt macOS 14 Sonoma oder neuer als Voraussetzung.
- Das konkrete Modell für den Kurs kann später noch ergänzt werden.
- Wir installieren hier zuerst die Laufzeit. Das eigentliche Modell laden wir bei Bedarf später.

### 4.8 Alles kurz testen

Wenn alles installiert ist, sollten diese Befehle funktionieren:

```bash
git --version
brew --version
python3 --version
pip3 --version
code --version
ollama --version
```

---

## 5. Setup auf Windows

### 5.1 GitHub-Account anlegen

Wenn du noch keinen GitHub-Account hast:

1. Öffne [https://github.com](https://github.com).
2. Klicke auf `Sign up`.
3. Erstelle deinen Account.
4. Bestätige deine E-Mail-Adresse.
5. Notiere dir deinen GitHub-Benutzernamen.

### 5.2 Den Paketmanager WinGet prüfen

Auf modernen Windows-Versionen ist `winget` in der Regel über `App Installer` verfügbar. Die offizielle Microsoft-Doku sagt:

- WinGet ist auf Windows 11 und modernen Windows-10-Versionen Teil von `App Installer`
- du kannst es im Terminal mit `winget` verwenden

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

### 5.3 Git installieren

Die offizielle Git-Seite für Windows nennt zwei einfache Wege:

- Download des Installers
- oder Installation mit WinGet

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

### 5.4 Visual Studio Code installieren

Die offizielle VS-Code-Doku für Windows empfiehlt den normalen Windows-Installer. Für Einsteiger*innen ist der `User setup` die beste Wahl, weil er keine Administratorrechte braucht und laut offizieller Doku die bevorzugte Installationsart ist.

So gehst du vor:

1. Öffne [https://code.visualstudio.com](https://code.visualstudio.com).
2. Lade den Windows-Installer herunter.
3. Starte die Datei `VSCodeUserSetup-...exe`.
4. Folge den Installationsschritten.
5. Öffne VS Code nach der Installation.

Wichtig:

- VS Code fügt sich unter Windows normalerweise selbst zu `%PATH%` hinzu.
- Danach kannst du `code .` im Terminal verwenden.
- Öffne nach der Installation das Terminal neu, damit die Änderung wirksam wird.

Prüfen:

```powershell
code --version
```

Empfohlen für den Kurs:

1. Öffne in VS Code links den Bereich `Extensions`.
2. Suche nach `Python`.
3. Installiere die offizielle Python-Erweiterung von Microsoft.

### 5.5 Python installieren

Für das Strands SDK brauchst du Python `3.10+`.

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

Hinweis:

- Die aktuelle Python-Dokumentation empfiehlt auf Windows besonders den Befehl `py`, wenn mehrere Python-Versionen auf einem Rechner existieren.
- Für den Kurs funktionieren `python` oder `py`, solange der Befehl auf deinem Rechner korrekt eingerichtet ist.

### 5.6 Einen Kursordner anlegen und das Strands SDK installieren

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

### 5.7 Ollama installieren

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

Wichtig:

- Laut offizieller Doku braucht Ollama auf Windows mindestens Windows 10 22H2 oder neuer.
- Für die Grundinstallation brauchst du mindestens einige Gigabyte freien Speicher.
- Das eigentliche Modell laden wir bei Bedarf später.

### 5.8 Alles kurz testen

Wenn alles installiert ist, sollten diese Befehle funktionieren:

```powershell
git --version
winget --version
python --version
py -m pip --version
code --version
ollama --version
```

Wenn `python --version` nicht funktioniert, teste stattdessen:

```powershell
py --version
```

## 6. Was wir bewusst noch nicht endgültig festlegen

Ein Punkt kann sich noch ändern:

- welches konkrete Ollama-Modell wir im Kurs standardmäßig verwenden

Der Grund ist einfach:

- Modellgrößen unterscheiden sich stark
- nicht jeder Rechner hat gleich viel Speicher oder Leistung
- für manche Sitzungen reicht ein kleines lokales Modell, für andere nicht

Deshalb installieren wir hier zuerst nur die Laufzeit `Ollama`.

## 7. Nächste Dateien für den Kurs

Wenn dein Setup fertig ist, sind diese beiden Dateien als Nächstes wichtig:

- [installationsanleitung-für-den-kurs.md](./installationsanleitung-für-den-kurs.md) für die kompakte Wiederholung
- [github-tutorial.md](./github-tutorial.md) für das Arbeiten mit Repositories, Commits, Pulls und Pushes
