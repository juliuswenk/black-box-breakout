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

# Wie viel brauche ich für kreative Projekte?


<div class="mt-10 grid cols-[0.7fr_1.3fr] rows-3 gap-6 place-items-center">
    <div class="m-4 h-full w-full rounded bg-emerald-500 flex items-center justify-center"> Kleine Modelle (3-7B)</div>
    <div class="grid cols-3 gap-4">
        <div class="rounded border border-slate-000 text-slate-000 flex items-center justify-center p-4"> Einfache Texte </div>
        <div class="rounded border border-slate-000 text-slate-000 flex items-center justify-center p-4"> Umformulierungen </div>
        <div class="rounded border border-slate-000 text-slate-000 flex items-center justify-center p-4"> Simple Agenten </div>
    </div>
    <div class="m-4 h-full w-full rounded bg-amber-500 flex items-center justify-center"> Mittlere-Große Modelle (7-30B)</div>
    <div class="grid cols-3 gap-4">
        <div class="rounded border border-slate-000 text-slate-000 flex items-center justify-center p-4"> Agenten </div>
        <div class="rounded border border-slate-000 text-slate-000 flex items-center justify-center p-4"> Komplexe Texte </div>
        <div class="rounded border border-slate-000 text-slate-000 flex items-center justify-center p-4"> Coding Hilfe </div>
    </div>
    <div class="h-full w-full rounded bg-rose-500 flex items-center justify-center"> Eigene Modelle</div>
    <div class="w-full rounded border border-slate-000 text-slate-000 flex items-center justify-center p-4"> Bildgenerierung </div>
</div>

---
layout: section
---

# 3. Chatbot vs. (Coding) Agent

<div class="w-1/3 mx-auto mt-8 rounded bg-rose-500 p-6 font-bold flex items-center justify-center">
Antworten vs Autonomie
</div>

---
layout: two-cols
layoutClass: gap-12
---

# Was ist ein Chatbot?

<div class="mt-10 mb-5 rounded bg-sky-500 text-slate-000 font-bold p-4 mx-auto flex justify-center"> Reaktiv </div>

<div class="grid grid-rows-3 justify-items-center">
    <div class="w-3/4 m-3 rounded border border-slate-000 flex justify-center p-2 text-center">
        du stellst eine Frage </div>
    <div class="w-3/4 m-3 rounded border border-slate-000 flex justify-center p-2 text-center">
        das System antwortet </div>
    <div class="w-3/4 m-3 rounded border border-slate-000 flex justify-center p-2 text-center">
        Fokus liegt auf Dialog </div>
</div>

::right::

<div class="mt-20 mb-5 rounded bg-rose-500 text-slate-000 font-bold p-4 mx-auto flex justify-center"> Grenze </div>

<div class="mt-6 h-2/5 rounded border border-rose-500 flex flex-col justify-center p-6 text-center">
Ein Chatbot plant meist nicht eigenständig und verändert keine Dateien ohne weitere Tooling-Schicht.
</div>

---
layout: two-cols
layoutClass: gap-12
---

# Was ist ein (Coding) Agent?

<div class="mt-10 mb-5 rounded bg-emerald-500 text-slate-000 font-bold p-4 mx-auto flex justify-center"> Mehr als Chat </div>

<div class="grid grid-rows-4 justify-items-center">
    <div class="w-3/4 m-3 rounded border border-slate-000 flex justify-center p-2 text-center">
        verfolgt Ziele </div>
    <div class="w-3/4 m-3 rounded border border-slate-000 flex justify-center p-2 text-center">
        plant Schritte </div>
    <div class="w-3/4 m-3 rounded border border-slate-000 flex justify-center p-2 text-center">
        nutzt Tools </div>
    <div class="w-3/4 m-3 rounded border border-slate-000 flex justify-center p-2 text-center">
        liest und verändert Dateien </div>
</div>

::right::

<div class="mt-20 mb-5 rounded bg-sky-500 text-slate-000 font-bold p-4 mx-auto flex justify-center"> Bausteine </div>

<div class="grid grid-rows-3 justify-items-center">
    <div class="w-3/4 m-3 rounded border border-slate-000 flex justify-center p-2 text-center">
        LLM als Denkkomponente </div>
    <div class="w-3/4 m-3 rounded border border-slate-000 flex justify-center p-2 text-center">
        Editor, Shell, Browser, APIs </div>
    <div class="w-3/4 m-3 rounded border border-slate-000 flex justify-center p-2 text-center">
        Memory und Kontext </div>
</div>

---
layout: section
---

# Was können Agenten im kreativen Bereich bringen?

<div class="w-2/3 mx-auto mt-8 rounded bg-sky-500 p-6 font-bold flex items-center justify-center text-center">
Recherche, Rapid Prototyping, Vibe Coding und Dokumentation
</div>

---
layout: two-cols
layoutClass: gap-12
---

# Beispiele

<div class="mt-10 mb-5 rounded bg-sky-500 text-slate-000 font-bold p-4 mx-auto flex justify-center"> Naheliegende Nutzung </div>

<div class="grid grid-rows-4 justify-items-center">
    <div class="w-3/4 m-3 rounded border border-slate-000 flex justify-center p-2 text-center">
        Recherche strukturieren </div>
    <div class="w-3/4 m-3 rounded border border-slate-000 flex justify-center p-2 text-center">
        Prototypen bauen </div>
    <div class="w-3/4 m-3 rounded border border-slate-000 flex justify-center p-2 text-center">
        Varianten erzeugen </div>
    <div class="w-3/4 m-3 rounded border border-slate-000 flex justify-center p-2 text-center">
        Prozess dokumentieren </div>
</div>

::right::

<div class="mt-30 mb-5 rounded bg-rose-500 text-slate-000 font-bold p-4 mx-auto flex justify-center"> Spannendere Frage </div>

<div class="mt-4 h-2/5 rounded border border-rose-500 flex flex-col justify-center p-6 text-center">
Was passiert, wenn Agenten Teil des Werks werden?

Nicht nur Werkzeug, sondern Akteur im Erlebnis.
</div>

---
layout: center
class: text-center
---

# Ars Electronica Campus Exhibition

<div class="mt-6 rounded border border-slate-100 overflow-hidden w-full h-90">
  <iframe src="https://www.artun.ee/en/eka-students-won-the-grand-prize-at-the-ars-electronica-festival-campus-exhibition/#gallery-1" class="w-full h-full bg-white"></iframe>
</div>

<a href="https://www.artun.ee/en/eka-students-won-the-grand-prize-at-the-ars-electronica-festival-campus-exhibition/#gallery-1" target="_blank" rel="noreferrer" class="inline-flex mt-6 rounded bg-emerald-500 px-6 py-3 font-bold text-slate-000">Website öffnen</a>

---
layout: center
class: text-center
---

# References

<div class="mx-auto max-w-2xl rounded border border-slate-100 p-6 text-xl leading-relaxed">
Die Quellen stehen im Skript <code>01-intro/ki-intro.md</code>.
</div>

<div class="mt-10 rounded bg-slate-700 p-4 text-sm opacity-90">
Für die Slides wurden die Kernaussagen stark verdichtet.
</div>
