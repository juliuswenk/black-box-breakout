# Setup für macOS

---

Diese Datei führt Schritt für Schritt durch die Installation auf macOS.

Wenn du einen Windows-Rechner nutzt, lies [windows-setup.md](./windows-setup.md).

Wenn du nur die Kurzversion brauchst, nutze [quick-start.md](./quick-start.md).

---

## 1. Voraussetzungen

Für das macOS-Setup solltest du ungefähr Folgendes einplanen:

- einen eigenen GitHub-Account und Zugriff auf deine E-Mails
- eine stabile Internetverbindung
- dein Mac-Passwort, falls macOS Administratorrechte abfragt
- einen Mac mit **macOS 14 Sonoma oder neuer**
- einen 64-Bit-Mac mit Intel oder Apple Silicon
- mindestens **8 GB RAM**
- mindestens **3 GB freien Speicher**, weil Ollama-Modelle mehrere Gigabyte groß sein können
- das macOS-Programm `Terminal`
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

## 3. Den Paketmanager Homebrew installieren

**Homebrew** ist auf macOS der einfachste Weg, Entwickler-Tools sauber zu installieren.

Der Befehl für die Installation lautet:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

So führst du den Terminal-Befehl aus:

1. Öffne das Terminal.
2. Kopiere den Befehl oben in das Terminal.
3. Drücke `Enter`.
4. Lies die Hinweise im Terminal und bestätige die Installation, wenn du dazu aufgefordert wirst.
5. Wenn Homebrew fertig installiert ist, prüfe die Installation:

```bash
brew --version
```

Wenn eine Versionsnummer erscheint, ist Homebrew einsatzbereit.

---

## 4. Git installieren

Für den Kurs nehmen wir den Weg über Homebrew, weil er leicht zu aktualisieren ist.

1. Installiere Git mit dem folgenden Befehl:

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

---

## 5. Zed installieren

**Zed** ist der Code-Editor, den wir im Kurs für Dateien, Projekte und die Git-Ansicht verwenden.

1. Öffne [https://zed.dev/download](https://zed.dev/download).
2. Lade die macOS-Version herunter.
3. Öffne die heruntergeladene `.dmg`-Datei.
4. Ziehe `Zed.app` in den Ordner `Applications`.
5. Öffne Zed einmal.
6. Drücke `Cmd + Shift + P`.
7. Führe `zed: install CLI` aus.

Prüfen:

```bash
zed --version
```

---

## 6. Python installieren

Für das Strands SDK brauchst du Python **`3.10+`**.

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

---

## 7. Einen Kursordner anlegen und das Strands SDK installieren

**Das Strands SDK sollte nicht global auf dem System landen.** Für den Kurs ist eine virtuelle Umgebung der sauberste Weg.

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

Wenn alles geklappt hat, steht oft **`(.venv)`** am Anfang der Terminalzeile.

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

### Wichtig

- Solange du im Projekt arbeitest, solltest du die virtuelle Umgebung aktiv lassen.
- Wenn du sie verlassen willst, gib ein:

```bash
deactivate
```

---

## 8. Ollama installieren

**Ollama** ist die lokale Modell-Laufzeit, die wir im Kurs verwenden.

So gehst du vor:

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

### Wichtig

- Die offizielle macOS-Doku nennt **macOS 14 Sonoma oder neuer** als Voraussetzung.
- Das konkrete Modell für den Kurs kann später noch ergänzt werden.
- Wir installieren hier zuerst die Laufzeit. Das eigentliche Modell laden wir bei Bedarf später.

---

## 19. Alles kurz testen

Wenn alles installiert ist, sollten diese Befehle funktionieren:

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

## 10. Danach

Wenn dein Setup fertig ist, lies als Nächstes [github-tutorial.md](./github-tutorial.md).
