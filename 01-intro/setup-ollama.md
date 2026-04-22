# Setup: Llama 3.2 1B in Ollama

Diese Anleitung installiert nicht Ollama selbst. Ollama wurde bereits in den allgemeinen Setup-Anleitungen eingerichtet:

- macOS: `00-setup/macOS-setup.md`
- Windows: `00-setup/windows-setup.md`
- Kurzversion: `00-setup/quick-start.md`

Hier geht es nur darum, das kleine freie Llama-Modell `llama3.2:1b` herunterzuladen, zu starten und kurz zu testen.

`llama3.2:1b` ist etwa 1.3 GB gross. Es ist nicht das staerkste Modell, aber es ist klein, schnell und gut fuer erste lokale Tests geeignet.

## 1. Terminal oder PowerShell oeffnen

Auf macOS:

1. Oeffne **Spotlight** mit `Cmd + Space`.
2. Suche nach **Terminal**.
3. Oeffne die Terminal-App.

Auf Windows:

1. Oeffne das Startmenue.
2. Suche nach **PowerShell**.
3. Oeffne **Windows PowerShell**.

## 2. Pruefen, ob Ollama bereit ist

Gib ein:

```bash
ollama --version
```

Wenn eine Versionsnummer erscheint, ist Ollama bereit.

Falls der Befehl nicht gefunden wird, gehe zur passenden allgemeinen Setup-Anleitung zurueck und pruefe die Ollama-Installation:

- `00-setup/macOS-setup.md`
- `00-setup/windows-setup.md`
- `00-setup/quick-start.md`

## 3. Llama 3.2 1B installieren und starten

Gib ein:

```bash
ollama run llama3.2:1b
```

Beim ersten Start laedt Ollama das Modell herunter. Das kann einige Minuten dauern.

Wenn der Download fertig ist, erscheint eine Eingabezeile im Terminal oder in PowerShell. Du kannst nun mit dem Modell chatten.

Beispiel:

```text
Schreibe einen kurzen deutschen Ausstellungstext ueber eine interaktive KI-Installation.
```

## 4. Kurzer Funktionstest

Wenn du pruefen willst, ob alles funktioniert, schreibe im Chat:

```text
Antworte in einem Satz: Was ist ein lokales Sprachmodell?
```

Wenn eine Antwort kommt, ist das Setup fertig.

## 5. Chat beenden

Um den Chat zu beenden, schreibe:

```text
/bye
```

Oder druecke `Ctrl + D`.

## 6. Spaeter erneut starten

Nach der ersten Installation musst du das Modell nicht erneut herunterladen. Starte es einfach wieder mit:

```bash
ollama run llama3.2:1b
```

## 7. Installierte Modelle anzeigen

Mit diesem Befehl siehst du, welche Modelle lokal installiert sind:

```bash
ollama list
```

## Typische Probleme

### `ollama` wird nicht gefunden

Ollama ist wahrscheinlich noch nicht korrekt installiert oder das Terminal wurde nach der Installation nicht neu geoeffnet.

1. Schliesse Terminal oder PowerShell.
2. Oeffne Terminal oder PowerShell erneut.
3. Versuche noch einmal:

   ```bash
   ollama --version
   ```

Wenn das nicht hilft, gehe zur passenden allgemeinen Setup-Anleitung zurueck:

- `00-setup/macOS-setup.md`
- `00-setup/windows-setup.md`
- `00-setup/quick-start.md`

### Der Download ist langsam

Das ist beim ersten Modell-Download normal. `llama3.2:1b` ist etwa 1.3 GB gross.

### Das Modell antwortet langsam

Das haengt von deinem Computer ab. Kleine Modelle wie `llama3.2:1b` laufen meist auch ohne starke Grafikkarte, aber auf aelteren Rechnern koennen Antworten trotzdem etwas dauern.

### Ollama laeuft nicht

Starte die Ollama-App manuell und versuche danach noch einmal:

```bash
ollama run llama3.2:1b
```

## Nuetzliche Befehle

```bash
ollama --version
ollama list
ollama run llama3.2:1b
/bye #zum Beenden des Chats
```

## Quellen

- Ollama Modellseite fuer `llama3.2:1b`: <https://ollama.com/library/llama3.2:1b>
