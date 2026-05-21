---
theme: slidev-theme-dracula
title: Vibe Coding 101
info: |
  Vibe Coding, Coding Agents und (sinnvolle) Arbeitsweise
class: text-left
transition: slide-left
drawings:
  persist: false
mdc: true
---

<div class="text-6xl font-bold text-slate-000">
Vibe Coding 101
</div>

<div class="mt-5 text-xl text-slate-000">
Mit Coding Agents arbeiten, ohne die Kontrolle abzugeben
</div>

<div class="mt-12 grid grid-cols-3 gap-4 text-base text-slate-000">
  <div class="rounded bg-emerald-500 p-6">
    <div class="text-xs uppercase tracking-wide opacity-60">Teil 1</div>
    <div class="mt-2 font-bold">Was ist Vibe Coding?</div>
  </div>
  <div class="rounded bg-rose-500 p-6">
    <div class="text-xs uppercase tracking-wide opacity-60">Teil 2</div>
    <div class="mt-2 font-bold">Grenzen und Risiken</div>
  </div>
  <div class="rounded bg-sky-500 p-6">
    <div class="text-xs uppercase tracking-wide opacity-60">Teil 3</div>
    <div class="mt-2 font-bold">Guter Workflow</div>
  </div>
</div>

<!--
Ziel: kurze Einführung vor der praktischen Arbeit in Zed/OpenCode.
Nicht zu technisch werden. Fokus: Kontrolle, kleine Schritte, sichtbare Ergebnisse.
-->

---
layout: section
---

# Was ist Vibe Coding?

<div class="w-2/3 mx-auto mt-8 rounded bg-emerald-500 p-6 font-bold flex items-center justify-center text-center">
Du beschreibst ein Ziel und steuerst einen Coding Agent durch Feedback
</div>

---
layout: two-cols
layoutClass: gap-12
---

# Die Grundidee

<div class="mt-10 mb-5 rounded bg-emerald-500 text-slate-000 font-bold p-4 mx-auto flex justify-center">
Nicht jede Zeile selbst schreiben
</div>

<div class="grid grid-rows-4 justify-items-center">
  <div class="w-3/4 m-3 rounded border border-slate-000 flex justify-center p-2 text-center">
    Ziele formulieren
  </div>
  <div class="w-3/4 m-3 rounded border border-slate-000 flex justify-center p-2 text-center">
    Beispiele geben
  </div>
  <div class="w-3/4 m-3 rounded border border-slate-000 flex justify-center p-2 text-center">
    Entscheidungen treffen
  </div>
  <div class="w-3/4 m-3 rounded border border-slate-000 flex justify-center p-2 text-center">
    Ergebnisse prüfen
  </div>
</div>

::right::

<div class="mt-20 mb-5 rounded bg-sky-500 text-slate-000 font-bold p-4 mx-auto flex justify-center">
Trotzdem entwickeln lernen
</div>

<div class="mt-6 h-2/5 rounded border border-sky-500 flex flex-col justify-center p-6 text-center">
Vibe Coding heißt nicht: Die KI macht alles.
<br /><br />
Es heißt: Der Agent wird zum technischen Werkzeug für Ideen, Prototypen und Lernprozesse.
</div>

---

# Was kann gut funktionieren?

<div class="mt-10 grid grid-cols-3 gap-4">
  <div class="rounded bg-emerald-500 p-5 text-center font-bold">Prototypen</div>
  <div class="rounded bg-sky-500 p-5 text-center font-bold">kleine Webseiten</div>
  <div class="rounded bg-rose-500 p-5 text-center font-bold">interaktive Skizzen</div>
  <div class="rounded border border-slate-000 p-5 text-center">Dateien erklären</div>
  <div class="rounded border border-slate-000 p-5 text-center">Fehler übersetzen</div>
  <div class="rounded border border-slate-000 p-5 text-center">Layouts iterieren</div>
  <div class="rounded border border-slate-000 p-5 text-center">Code strukturieren</div>
  <div class="rounded border border-slate-000 p-5 text-center">Alternativen vergleichen</div>
  <div class="rounded border border-slate-000 p-5 text-center">Doku schreiben</div>
</div>

---
layout: section
---

# Wo wird es gefährlich?

<div class="w-2/3 mx-auto mt-8 rounded bg-rose-500 p-6 font-bold flex items-center justify-center text-center">
Coding Agents können überzeugend klingen und trotzdem falsch liegen
</div>

---
layout: two-cols
layoutClass: gap-12
---

# Typische Probleme

<div class="mt-10 grid grid-rows-4 justify-items-center">
  <div class="w-3/4 m-3 rounded bg-rose-500 flex justify-center p-2 text-center">
    baut mehr als gefragt
  </div>
  <div class="w-3/4 m-3 rounded bg-amber-500 flex justify-center p-2 text-center">
    verändert unnötig Logik
  </div>
  <div class="w-3/4 m-3 rounded bg-sky-500 flex justify-center p-2 text-center">
    erfindet APIs oder Libraries
  </div>
  <div class="w-3/4 m-3 rounded bg-emerald-500 flex justify-center p-2 text-center">
    macht Code zu kompliziert
  </div>
</div>

::right::

<div class="mt-20 mb-5 rounded border border-rose-500 text-slate-000 font-bold p-4 mx-auto flex justify-center">
Deine Aufgabe
</div>

<div class="grid grid-rows-4 justify-items-center">
  <div class="w-3/4 m-3 rounded border border-slate-000 flex justify-center p-2 text-center">
    Ziel kennen
  </div>
  <div class="w-3/4 m-3 rounded border border-slate-000 flex justify-center p-2 text-center">
    Änderungen verstehen
  </div>
  <div class="w-3/4 m-3 rounded border border-slate-000 flex justify-center p-2 text-center">
    Ergebnis testen
  </div>
  <div class="w-3/4 m-3 rounded border border-slate-000 flex justify-center p-2 text-center">
    nächsten Schritt wählen
  </div>
</div>

---
layout: center
class: text-center
---

# Die wichtigste Regel

<div class="mt-10 text-6xl font-bold text-emerald-400">
kleine Schritte
</div>

<div class="mx-auto mt-10 max-w-3xl rounded border border-slate-100 p-6 text-xl leading-relaxed">
Je größer der Prompt, desto größer die Chance, dass der Agent den Fokus verliert.
</div>

---
layout: two-cols
layoutClass: gap-12
---

# Schlechter Start

<div class="mt-10 rounded border border-rose-500 p-6 text-xl leading-relaxed text-center">
Baue mir eine komplette interaktive Website mit Login, Datenbank, Galerie, Animationen und Exportfunktion.
</div>

<div class="mt-8 rounded bg-rose-500 p-4 text-center font-bold">
zu viel auf einmal
</div>

::right::

# Besserer Start

<div class="mt-10 rounded border border-emerald-500 p-6 text-xl leading-relaxed text-center">
Erstelle eine einfache Startseite mit Titel, kurzem Text und einem Button. Nutze nur HTML und CSS.
</div>

<div class="mt-8 rounded bg-emerald-500 p-4 text-center font-bold">
sichtbar, klein, testbar
</div>

---

# Gute Prompts enthalten

<div class="mt-12 grid grid-cols-5 gap-3 text-sm">
  <div class="rounded bg-emerald-500 p-4 text-center font-bold">Ziel</div>
  <div class="rounded bg-amber-500 p-4 text-center font-bold">Kontext</div>
  <div class="rounded bg-rose-500 p-4 text-center font-bold">Grenzen</div>
  <div class="rounded bg-sky-500 p-4 text-center font-bold">Ergebnis</div>
  <div class="rounded bg-emerald-500 p-4 text-center font-bold">Prüfung</div>
</div>

<div class="mt-12 mx-auto w-2/3 rounded border border-slate-100 p-6 text-center text-xl leading-relaxed">
Je klarer der Rahmen ist, desto weniger muss der Agent raten.
</div>

---

# Ein sinnvoller Ablauf

<div class="mt-10 grid grid-cols-7 gap-3 text-sm">
  <div class="rounded bg-sky-500 p-4 text-center font-bold">Projekt öffnen</div>
  <div class="rounded border border-slate-000 p-4 text-center">Thread starten</div>
  <div class="rounded bg-emerald-500 p-4 text-center font-bold">Aufgabe beschreiben</div>
  <div class="rounded border border-slate-000 p-4 text-center">Plan lesen</div>
  <div class="rounded bg-amber-500 p-4 text-center font-bold">Änderung erlauben</div>
  <div class="rounded border border-slate-000 p-4 text-center">Ergebnis prüfen</div>
  <div class="rounded bg-rose-500 p-4 text-center font-bold">Feedback geben</div>
</div>

<div class="mt-12 rounded border border-sky-500 p-6 text-center text-xl leading-relaxed">
Der Agent arbeitet im Projekt. Du steuerst, was als Nächstes passiert.
</div>

---
layout: two-cols
layoutClass: gap-12
---

# Immer prüfen

<div class="mt-10 grid grid-rows-5 justify-items-center">
  <div class="w-3/4 m-2 rounded border border-slate-000 flex justify-center p-2 text-center">
    Welche Dateien wurden geändert?
  </div>
  <div class="w-3/4 m-2 rounded border border-slate-000 flex justify-center p-2 text-center">
    Kann ich es öffnen oder starten?
  </div>
  <div class="w-3/4 m-2 rounded border border-slate-000 flex justify-center p-2 text-center">
    Sieht es ungefähr richtig aus?
  </div>
  <div class="w-3/4 m-2 rounded border border-slate-000 flex justify-center p-2 text-center">
    Gibt es Fehlermeldungen?
  </div>
  <div class="w-3/4 m-2 rounded border border-slate-000 flex justify-center p-2 text-center">
    Wurde ungefragt mehr eingebaut?
  </div>
</div>

::right::

# Gute Nachfrage

<div class="mt-20 rounded bg-slate-700 p-6 text-lg leading-relaxed">
Erkläre mir die letzte Änderung in einfachen Worten.
<br /><br />
Welche Datei ist am wichtigsten?
<br /><br />
Welche Zeilen sollte ich mir anschauen?
</div>

---
layout: section
---

# Fehler gehören zum Workflow

<div class="w-2/3 mx-auto mt-8 rounded bg-amber-500 p-6 font-bold flex items-center justify-center text-center">
Nicht blind weiterprompten: Fehlermeldung, Kontext und kleinster Fix
</div>

---
layout: two-cols
layoutClass: gap-12
---

# Wenn etwas kaputt ist

<div class="mt-10 mb-5 rounded bg-amber-500 text-slate-000 font-bold p-4 mx-auto flex justify-center">
erst erklären lassen
</div>

<div class="grid grid-rows-3 justify-items-center">
  <div class="w-3/4 m-3 rounded border border-slate-000 flex justify-center p-2 text-center">
    Fehlermeldung einfügen
  </div>
  <div class="w-3/4 m-3 rounded border border-slate-000 flex justify-center p-2 text-center">
    Bedeutung erklären lassen
  </div>
  <div class="w-3/4 m-3 rounded border border-slate-000 flex justify-center p-2 text-center">
    kleinsten Fix vorschlagen lassen
  </div>
</div>

::right::

# Wenn es schlechter wurde

<div class="mt-20 mb-5 rounded bg-rose-500 text-slate-000 font-bold p-4 mx-auto flex justify-center">
zurück zur Ursache
</div>

<div class="mt-6 h-2/5 rounded border border-rose-500 flex flex-col justify-center p-6 text-center">
Welche Änderung hat wahrscheinlich das Problem verursacht?
<br /><br />
Was ist die minimale Korrektur?
</div>

---

# Gute Grenzen setzen

<div class="mt-10 grid grid-cols-2 gap-6">
  <div class="rounded border border-slate-000 p-5 text-center text-xl">Ändere nur HTML und CSS.</div>
  <div class="rounded bg-emerald-500 p-5 text-center text-xl">Stelle mir vorher ein paar Fragen(!)</div>
  <div class="rounded border border-slate-000 p-5 text-center text-xl">Erstelle zuerst einen Plan.</div>
  <div class="rounded border border-slate-000 p-5 text-center text-xl">Warte auf meine Bestätigung.</div>
  <div class="rounded border border-slate-000 p-5 text-center text-xl">Halte die Lösung einfach.</div>
  <div class="rounded border border-slate-000 p-5 text-center text-xl">Erkläre, wie ich testen kann.</div>
</div>

---
layout: center
class: text-center
---

# Der Vibe-Coding-Zyklus

<div class="mt-12 grid grid-cols-6 gap-3 text-sm">
  <div class="rounded bg-emerald-500 p-4 font-bold">Idee</div>
  <div class="rounded bg-sky-500 p-4 font-bold">Plan</div>
  <div class="rounded bg-amber-500 p-4 font-bold">Änderung</div>
  <div class="rounded bg-rose-500 p-4 font-bold">Test</div>
  <div class="rounded bg-sky-500 p-4 font-bold">Feedback</div>
  <div class="rounded bg-emerald-500 p-4 font-bold">nächster Schritt</div>
</div>

<div class="mt-12 text-2xl font-bold">
Dieser Zyklus ist wichtiger als der perfekte Prompt.
</div>

---
layout: section
---

# Fortgeschritten

<div class="w-2/3 mx-auto mt-8 rounded bg-sky-500 p-6 font-bold flex items-center justify-center text-center">
Bei größeren Projekten braucht der Agent Projektregeln
</div>

---
layout: two-cols
layoutClass: gap-12
---

# AI Development Guide

<div class="mt-10 mb-5 rounded bg-sky-500 text-slate-000 font-bold p-4 mx-auto flex justify-center">
Projektanleitung
</div>

<div class="grid grid-rows-4 justify-items-center">
  <div class="w-3/4 m-3 rounded border border-slate-000 flex justify-center p-2 text-center">
    Ziel des Projekts
  </div>
  <div class="w-3/4 m-3 rounded border border-slate-000 flex justify-center p-2 text-center">
    wichtige Dateien
  </div>
  <div class="w-3/4 m-3 rounded border border-slate-000 flex justify-center p-2 text-center">
    Start- und Testbefehle
  </div>
  <div class="w-3/4 m-3 rounded border border-slate-000 flex justify-center p-2 text-center">
    Design- und Änderungsregeln
  </div>
</div>

::right::

# Wirkung

<div class="mt-20 h-2/5 rounded border border-sky-500 flex flex-col justify-center p-6 text-center">
So eine Datei macht den Agenten nicht perfekt.
<br /><br />
Aber sie reduziert Missverständnisse und hält größere Projekte stabiler.
</div>

---
layout: two-cols
layoutClass: gap-12
---

# In Phasen arbeiten

<div class="mt-10 grid grid-rows-4 justify-items-center">
  <div class="w-3/4 m-2 rounded bg-emerald-500 flex justify-center p-2 text-center">Konzept</div>
  <div class="w-3/4 m-2 rounded bg-sky-500 flex justify-center p-2 text-center">Grundstruktur</div>
  <div class="w-3/4 m-2 rounded bg-amber-500 flex justify-center p-2 text-center">sichtbare Version</div>
  <div class="w-3/4 m-2 rounded bg-rose-500 flex justify-center p-2 text-center">Interaktion</div>
</div>

::right::

<div class="mt-20 grid grid-rows-4 justify-items-center">
  <div class="w-3/4 m-2 rounded border border-slate-000 flex justify-center p-2 text-center">Styling</div>
  <div class="w-3/4 m-2 rounded border border-slate-000 flex justify-center p-2 text-center">Tests</div>
  <div class="w-3/4 m-2 rounded border border-slate-000 flex justify-center p-2 text-center">Aufräumen</div>
  <div class="w-3/4 m-2 rounded border border-slate-000 flex justify-center p-2 text-center">Dokumentation</div>
</div>

---
layout: two-cols
layoutClass: gap-12
---

# Erst fragen, dann bauen

<div class="mt-10 rounded bg-slate-700 p-6 text-lg leading-relaxed">
Bitte ändere noch nichts.
<br /><br />
Analysiere zuerst das Projekt und schlage einen Plan vor.
<br /><br />
Nenne genau, welche Dateien du ändern würdest.
</div>

::right::

# Agenten kritisch nutzen

<div class="mt-20 grid grid-rows-3 justify-items-center">
  <div class="w-3/4 m-3 rounded border border-slate-000 flex justify-center p-2 text-center">
    Warum diese Lösung?
  </div>
  <div class="w-3/4 m-3 rounded border border-slate-000 flex justify-center p-2 text-center">
    Welche einfachere Alternative?
  </div>
  <div class="w-3/4 m-3 rounded border border-slate-000 flex justify-center p-2 text-center">
    Welche Nachteile?
  </div>
</div>

---
layout: center
class: text-center
---

# Git als Sicherheitsnetz

<div class="mt-12 grid grid-cols-4 gap-4 text-base">
  <div class="rounded bg-emerald-500 p-5 font-bold">funktionierender Stand</div>
  <div class="rounded bg-sky-500 p-5 font-bold">kleine Änderung</div>
  <div class="rounded bg-amber-500 p-5 font-bold">testen</div>
  <div class="rounded bg-rose-500 p-5 font-bold">committen</div>
</div>

<div class="mt-12 rounded border border-slate-100 p-6 text-xl">
Git macht Vibe Coding weniger riskant, weil gute Zwischenstände speicherbar bleiben.
</div>

---
layout: center
class: text-center
---

# Gute Abschlussfrage

<div class="mx-auto mt-10 max-w-3xl rounded border border-slate-100 p-6 text-xl leading-relaxed">
Was wurde gebaut?
<br />
Welche Dateien wurden geändert?
<br />
Wie teste ich das Projekt?
<br />
Was ist der sinnvollste nächste Schritt?
</div>

---
layout: center
class: text-center
---

# Kurzfassung

<div class="mt-10 text-4xl font-bold text-emerald-400">
klein arbeiten · oft prüfen · klare Grenzen setzen
</div>

<div class="mx-auto mt-10 max-w-3xl rounded border border-slate-100 p-6 text-xl leading-relaxed">
Vibe Coding ist stark für schnelle Prototypen und kreative Experimente.
<br /><br />
Es ersetzt aber nicht dein Urteilsvermögen.
</div>
