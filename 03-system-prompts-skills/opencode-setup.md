# OpenCode installieren und in Zed öffnen

---

## macOS

**OpenCode** ist ein Open-Source Coding-Agent, mit einigen Modellen, die ihr gratis verwenden könnt. In Zed läuft OpenCode über das **Agent Client Protocol (ACP)**. Zed startet dafür im Hintergrund den Befehl `opencode acp`.

Da Homebrew schon installiert ist, installierst du OpenCode auf macOS so:

```bash
brew install anomalyco/tap/opencode
```

Danach prüfen:

```bash
opencode --version
```

---
## Windows:

### OpenCode installieren und in Zed öffnen

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

---

# OpenCode mit Zed verbinden

1. Öffne Zed.
2. Öffne das `Extensions`-Fenster über `Zed > Extensions` oder `Cmd + Shift + X`.
3. Suche nach `OpenCode` und installiere die Erweiterung.
4. Öffne das Agent Panel mit der Schaltfläche unten rechts oder `Cmd + ?`.
5. Klicke auf das Plus-Symbol oben rechts und wähle `OpenCode`.
6. Verbinde beim ersten Start deinen gewünschten Modellanbieter mit `/connect`, falls OpenCode danach fragt.

Jetzt kannst du mit dem Coding Agent entwickeln. Wie man dabei am Besten vorgeht, erfährst du in den anderen Tutorials in diesem Ordner
