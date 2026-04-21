---
theme: slidev-theme-dracula
title: Einführungsinput
info: |
  Einführung zu lokalen LLMs, Modellqualität und AI Agents
class: text-left
transition: slide-left
drawings:
  persist: false
mdc: true
---
<div class ="text-6xl font-bold text-slate-000">
Black-Box-Breakout: Intro
</div>

<div class ="mt-5 text-xl text-slate-000">
Lokale LLMs, Cloud-Anbieter und AI Agents
</div>

<div class="mt-12 grid grid-cols-3 gap-4 text-base text-slate-000">
  <div class="rounded bg-emerald-500 p-6">
    <div class="text-xs uppercase tracking-wide opacity-60">Teil 1</div>
    <div class="mt-2 font-bold">Why go local?</div>
  </div>
  <div class="rounded bg-rose-500 p-6">
    <div class="text-xs uppercase tracking-wide opacity-60">Teil 2</div>
    <div class="mt-2 font-bold">Was macht Modelle effektiv?</div>
  </div>
  <div class="rounded bg-sky-500 p-6">
    <div class="text-xs uppercase tracking-wide opacity-60">Teil 3</div>
    <div class="mt-2 font-bold">Chatbot vs. Agent</div>
  </div>
</div>

---
layout: section
---

# Lokale LLMs vs. Cloud-Anbieter

<div class="w-1/4 mx-auto mt-8 rounded bg-emerald-500 p-6 font-bold flex items-center justify-center">
Why go local?
</div>


---
layout: two-cols
layoutClass: gap-12
---

# Was ist der Unterschied?

<div class = "mt-10 mb-5 rounded bg-sky-500 text-slate-000 font-bold p-4 mx-auto flex justify-center"> Cloud-LLMs </div>

<div class="grid grid-rows-4 justify-items-center">
    <div class="w-3/4 m-3 rounded border border-slate-000 flex justify-center p-2">
        laufen auf Servern großer Anbieter </div>
    <div class="w-3/4 m-3 rounded border border-slate-000 flex justify-center p-2">
        brauchen Internet und API-Key </div>
    <div class="w-3/4 m-3 rounded border border-slate-000 flex justify-center p-2">
        kosten meist pro Token </div>
    <div class="w-3/4 m-3 rounded border border-slate-000 flex justify-center p-2">
        bieten oft hohe Qualität </div>
</div>

::right::

<div class = "mt-20 mb-5 rounded bg-emerald-500 text-slate-000 font-bold p-4 mx-auto flex justify-center"> Lokale-LLMs </div>

<div class="grid grid-rows-4 justify-items-center">
    <div class="w-2/3 m-3 rounded border border-slate-000 flex justify-center p-2">
        Laufen auf deinem Rechner </div>
    <div class="w-2/3 m-3 rounded border border-slate-000 flex justify-center p-2">
        Modell liegt als Datei lokal </div>
    <div class="w-2/3 m-3 rounded border border-slate-000 flex justify-center p-2">
        Keine Tokenkosten pro Anfrage </div>
    <div class="w-2/3 m-3 rounded border border-slate-000 flex justify-center p-2">
        Brauchen eigene Hardware </div>
</div>

---
layout: two-cols
layoutClass: gap-12
---

# Warum überhaupt lokal?


<div class="mt-10 grid grid-rows-4 justify-items-center">
    <div class="w-2/3 h-15 m-3 rounded items-center bg-emerald-500 mx-auto flex justify-center p-2">
        Mehr Kontrolle über Daten </div>
    <div class="w-2/3 h-15 m-3 rounded items-center bg-sky-500 flex justify-center p-2">
        Offline nutzbar </div>
    <div class="w-2/3 h-15 m-3 rounded items-center bg-rose-500 flex justify-center p-2">
        Weniger Vendor Lock-in </div>
    <div class="w-2/3 m-3 rounded items-center bg-amber-500 flex justify-center p-2">
        Freieres Experimentieren </div>
</div>

::right::

<div class="mt-30 h-2/5 rounded border border-emerald-500 flex flex-col justify-center p-6 pt-8">

## Kreativer Vorteil

Ihr seid frei in der Gestaltung, habt keine Tokenkosten und seid unabhängig(er) von der Ausstellungssituation und evt. Änderungen der Modelle.

</div>

---
layout: two-cols
layoutClass: gap-12
---
# Kosten vs. Qualität

<div class = "mt-10 mb-5 rounded border border-slate-100 text-slate-000 font-bold p-4 mx-auto flex justify-center"> Cloud-LLMs </div>

<div class="grid grid-rows-4 justify-items-center">
    <div class="w-3/4 m-3 rounded bg-emerald-500 flex justify-center p-2">
        meist stärker bei Reasoning </div>
    <div class="w-3/4 m-3 rounded bg-amber-500 flex justify-center p-2">
        aktuelleres Weltwissen</div>
    <div class="w-3/4 m-3 rounded bg-rose-500 flex justify-center p-2">
        robuste Antworten </div>
    <div class="w-3/4 m-3 rounded bg-sky-500 flex justify-center p-2">
        Kosten steigen mit Nutzung </div>
</div>

::right::

<div class = "mt-20 mb-5 rounded border border-slate-100 text-slate-000 font-bold p-4 mx-auto flex justify-center"> Lokale-LLMs </div>

<div class="grid grid-rows-4 justify-items-center">
    <div class="w-3/4 m-3 rounded bg-emerald-500 flex justify-center p-2">
        Qualität hängt vom Modell ab </div>
    <div class="w-3/4 m-3 rounded bg-amber-500 flex justify-center p-2">
        robusteres System </div>
    <div class="w-3/4 m-3 rounded bg-rose-500 flex justify-center p-2">
        kontrollierbarer </div>
    <div class="w-3/4 m-3 rounded bg-sky-500 flex justify-center p-2">
        planbare Kosten </div>
</div>

---
layout: center
class: text-center
---

# Wie funktioniert eine API grob?

<div class="mt-12 grid grid-cols-5 gap-3 text-sm">
  <div class="rounded bg-emerald-500 p-4">Prompt</div>
  <div class="rounded bg-amber-500 p-4">API Request</div>
  <div class="rounded bg-rose-500 p-4">Queue</div>
  <div class="rounded bg-sky-500 p-4">Model</div>
  <div class="rounded bg-emerald-500 p-4">Response</div>
</div>

---

# Beispiel:

<div class="w-2/3 text-3xl rounded border border-slate-100 flex justify-center items-center p-3 mx-auto">
Tagebuchprojekt
</div>

<div class="mt-4 mb-6 font-italic text-slate-400 flex justify-center items-center">
Du willst private Fragmente in sich immer weiter entwickelnde poetische Varianten oder Bildideen übersetzen.
</div>

<div class="grid cols-2">
    <div class = "w-3/4 mb-4 rounded bg-sky-500 text-slate-000 font-bold p-4 mx-auto flex justify-center"> Cloud-LLMs </div>
    <div class="w-3/4 mb-4 rounded bg-emerald-500 text-slate-000 font-bold p-4 mx-auto flex justify-center"> Lokale-LLMs </div>
        <div class="grid grid-rows-3 justify-items-center">
            <div class="w-3/4 m-3 rounded border border-slate-000 flex justify-center p-2">
                stärkere Modelle </div>
            <div class="w-3/4 m-3 rounded border border-slate-000 flex justify-center p-2">
                Daten verlassen dein Gerät </div>
            <div class="w-3/4 m-3 rounded border border-slate-000 flex justify-center p-2">
                Tokenkosten </div>
        </div>
        <div class="grid grid-rows-3 justify-items-center">
            <div class="w-3/4 m-3 rounded border border-slate-000 flex justify-center p-2">
                Robustheit + Unabhängigkeit </div>
            <div class="w-3/4 m-3 rounded border border-slate-000 flex justify-center p-2">
                Daten bleiben lokal </div>
            <div class="w-3/4 m-3 rounded border border-slate-000 flex justify-center p-2">
                Nur "Hardwarekosten" </div>
        </div>
</div>

---
layout: section
---

# Was macht ein LLM-Modell effektiv?

<div class="w-1/3 mx-auto mt-8 rounded bg-rose-500 p-6 font-bold flex items-center justify-center"> Größe, Kontext und Steuerung </div>


---
layout: center
class: text-center
---

# Was sind „Parameter“ eigentlich?

<div class="text-6xl font-bold mt-10">7B · 13B · 70B</div>

<div class="mt-8 text-xl leading-relaxed">
Parameter sind gelernte Gewichte im Modell.
<br />
Mehr Parameter bedeuten mehr Kapazität, aber auch mehr Rechenbedarf.
</div>

---
layout: two-cols
layoutClass: gap-12
---

# Wie viel brauche ich für kreative Projekte?

## Kleine bis mittlere LLMs

- kurze Texte
- Ideenlisten
- Stilvarianten
- erste Code-Hilfen

::right::

## Stärkere Modelle / andere Modelle

- lange, konsistente Texte
- komplexe Recherche
- Agenten-Workflows
- Bildgenerierung: eigenes Bildmodell

---
layout: section
---

# 3. Chatbot vs. (Coding) Agent

Antworten bekommen oder Prozesse ausführen lassen

---
layout: two-cols
layoutClass: gap-12
---

# Was ist ein Chatbot?

## Reaktiv

- du stellst eine Frage
- das System antwortet
- Fokus liegt auf Dialog

::right::

## Grenze

Ein Chatbot plant meist nicht eigenständig und verändert keine Dateien ohne weitere Tooling-Schicht.

---
layout: two-cols
layoutClass: gap-12
---

# Was ist ein (Coding) Agent?

## Mehr als Chat

- verfolgt Ziele
- plant Schritte
- nutzt Tools
- liest und verändert Dateien

::right::

## Bausteine

- LLM als Denkkomponente
- Editor, Shell, Browser, APIs
- Memory und Kontext

---
layout: two-cols
layoutClass: gap-12
---

# Zusammenarbeit von Agenten

## Rollen

- Researcher
- Critic
- Planner
- Writer
- Editor
- Curator

::right::

## Idee

Mehrere Perspektiven arbeiten am selben Material.

Das kann kreative Entscheidungen vorbereiten, aber nicht ersetzen.

---
layout: section
---

# Was können Agenten im kreativen Bereich bringen?

Recherche, Rapid Prototyping, Vibe Coding und Dokumentation

---
layout: two-cols
layoutClass: gap-12
---

# Beispiele

## Naheliegende Nutzung

- Recherche strukturieren
- Prototypen bauen
- Varianten erzeugen
- Prozess dokumentieren

::right::

## Spannendere Frage

Was passiert, wenn Agenten Teil des Werks werden?

Nicht nur Werkzeug, sondern Akteur im Erlebnis.

---
layout: two-cols
layoutClass: gap-12
---

# 1. Threshold State

## Installation

Ein Border-Control-Szenario:

- Besuchende geben persönliche Informationen ab
- ein AI-System bewertet diese Daten
- Zutritt wird gewährt oder verweigert

::right::

## Agentische Struktur

Das System recherchiert, fasst zusammen und trifft nach Regeln eine Entscheidung.

Thema: Macht, Bias und automatisierte Kontrolle.

---
layout: center
class: text-center
---

# References

<div class="mx-auto max-w-2xl text-xl leading-relaxed">
Die Quellen stehen im Skript <code>01-intro/ki-intro.md</code>.
</div>

<div class="mt-10 text-sm opacity-70">
Für die Slides wurden die Kernaussagen stark verdichtet.
</div>
