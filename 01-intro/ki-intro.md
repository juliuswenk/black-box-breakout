# Einführungsinput

## 1. Lokale LLMs vs. Cloud-Anbieter – Why go local?

### Was ist der Unterschied?

**Cloud-LLMs** (z. B. GPT-4o, Claude, Gemini) laufen auf Servern großer Anbieter; deine Anfragen werden übers Internet dorthin geschickt und die Antworten kommen zurück. Die Abrechnung erfolgt meist **pro Token**, also pro kleinster Texteinheit, was besonders bei häufigem oder langem Gebrauch ins Geld gehen kann.[^1][^2][^3]

**Lokale LLMs** (z. B. LLaMA-Modelle über Ollama) laufen auf deinem eigenen Rechner; die Modellgewichte liegen als Dateien bei dir, und die Berechnung findet auf deiner CPU/GPU statt. Die Kosten sind eher **fixe Hardwarekosten plus Strom**, nicht nutzungsbasiert – dafür bist du für Performance und Speicher selbst verantwortlich.[^2][^1]

### Warum überhaupt lokal?

- **Datenschutz & Kontrolle:** Bei Cloud-LLMs werden Inhalte an den Anbieter übertragen, oft geloggt und ggf. von Mitarbeitenden für Moderation oder Qualitätskontrolle eingesehen; Policies können sich über die Zeit ändern.[^4][^5][^1]
- **Rechtliche Fragen:** Daten können über Ländergrenzen hinweg verarbeitet werden, was Fragen zu DSGVO und anderen Regulierungen aufwirft.[^5][^1]
- **Vendor Lock-in:** Modelle, Preise und Nutzungsbedingungen liegen in der Hand des Anbieters; Änderungen können Workflows brechen oder deutlich teurer machen.[^1][^4]
- **Lokal:** Mit einem lokalen LLM bleiben deine Daten komplett auf deinem Gerät, du kannst offline arbeiten und bist nicht von Accounts oder Policies Dritter abhängig.[^4][^1]

Für kreative Projekte ist das besonders relevant, wenn du mit **persönlichen Notizen, Forschungsdaten oder sensiblen Inhalten** arbeitest, die du nicht in fremde Infrastrukturen geben möchtest.[^5][^4]

### Kosten- und Qualitätsaspekt

Cloud-Modelle haben aktuell meist noch einen Vorsprung bei **Reasoning, Weltwissen und Robustheit**, weil sie oft größer sind und kontinuierlich nachtrainiert werden. Dafür zahlst du mit jeder Anfrage – leistungsfähige Modelle liegen schnell im Bereich von mehreren Dollar pro Million Tokens, während kleinere Modelle deutlich günstiger sind.[^6][^1]

Lokale Modelle (etwa 7B–13B Parameter) sind heute so weit, dass sie viele kreative Aufgaben – Textideen, Skriptgerüste, Codeschnipsel – gut bewältigen, wenn man sie sinnvoll einbettet und mit gutem Kontext füttert. Für Dauergebrauch oder Batch-Aufgaben kann lokal deutlich günstiger werden, weil die Kosten nicht linear mit der Nutzung wachsen.[^7][^2][^1]

### Wie funktioniert eine API grob?

Eine **API** (Application Programming Interface) ist im KI-Kontext meist ein **HTTP-Endpunkt**, an den du eine Anfrage im JSON-Format sendest: Modellname, Prompt, ein paar Parameter (z. B. Temperatur, max_tokens). Diese Anfrage geht an einen Edge-Server, wird authentifiziert (API-Key), in eine Warteschlange gestellt, zusammen mit anderen Anfragen gebatcht und schließlich von einem Modell auf GPUs verarbeitet.[^8][^9][^3]

Das Modell generiert Antwort-Tokens nacheinander und schickt sie als Stream zurück; nach Abschluss werden Ressourcen freigegeben und Metriken geloggt. Für dich fühlt sich das wie ein einfacher Funktionsaufruf an, dahinter steht aber eine komplexe Infrastruktur mit Lastverteilung, Quotenmanagement und Kostenmessung.[^3][^8]

### Beispiel zur Veranschaulichung

Stell dir vor, du arbeitest an einem persönlichen Tagebuchprojekt als Zine:

- In der **Cloud-Variante** schickst du Fragmente deiner Tagebucheinträge an eine API, die dir poetische Umformulierungen oder Illustrationsideen generiert.
- In der **lokalen Variante mit Ollama** liegen deine Texte und das Modell auf demselben Laptop; nichts verlässt das Gerät, du kannst offline im Zug weiterarbeiten und experimentierst frei, ohne Tokenpreise im Kopf zu haben.[^1][^4]

Die Qualität mag bei einem Top-Cloud-Modell etwas höher sein, aber für die ästhetische und experimentelle Arbeit kann die **Freiheit und Privatheit** lokaler Modelle ein wichtigerer Wert sein.

***

## 2. Was macht ein LLM-Modell effektiv?

### Was sind „Parameter“ eigentlich?

Ein LLM besteht aus vielen Schichten von künstlichen Neuronen; jede Verbindung zwischen diesen Neuronen hat ein Gewicht, das im Training angepasst wird. Jedes dieser Gewichte ist ein **Parameter** – also eine Zahl, die festlegt, wie stark bestimmte Muster in Sprache verstärkt oder abgeschwächt werden.[^10][^7]

Wenn von **7B, 13B oder 70B** gesprochen wird, meint das die ungefähre Anzahl dieser Parameter in Milliarden. Mehr Parameter bedeuten grundsätzlich mehr Kapazität, komplexere Muster zu speichern und feinere sprachliche Nuancen zu modellieren, bringen aber auch höhere Speicher- und Rechenanforderungen mit sich.[^11][^10][^7]

### Wie viel brauche ich für kreative Projekte?

Studien und Praxisvergleiche zeigen, dass sehr kleine Modelle (unter ca. 3B Parametern) oft bei mehrschrittigem Denken, komplexen Anweisungen oder stilistisch anspruchsvollen Aufgaben schwächeln. Im Bereich **7B–13B** finden viele Anwender einen guten Kompromiss aus Verständlichkeit, Geschwindigkeit und Hardwarebedarf – besonders, wenn die Modelle quantisiert und gut optimiert sind.[^10][^11][^7]

Für viele kreative Anwendungen – Ideenfindung, Textvarianten, Story-Fragmente, simple Code-Hilfen – reicht ein solches mittelgroßes Modell aus, wenn du ihm mit **klarem Prompting und gutem Kontext** hilfst. Für sehr anspruchsvolle Aufgaben (lange, konsistente Stories, tiefes Fachwissen, komplexes Debugging) sind große Cloud-Modelle weiterhin im Vorteil.[^6][^7][^1]

### Wichtige Steuerparameter für Kreativität

Neben der Modellgröße beeinflussen vor allem **Generierungsparameter** das Verhalten:

- **Temperature:** steuert, wie zufällig die Auswahl des nächsten Tokens ist; höhere Werte führen zu überraschenderen, aber auch inkonsistenteren Antworten.[^9][^12]
- **max_new_tokens:** begrenzt die Länge der Antwort und hilft, Outputs fokussiert zu halten.[^9][^3]

Empirische Untersuchungen deuten darauf hin, dass höhere Temperature-Werte zwar etwas mehr **Neuheit** erzeugen, aber auch schneller zu Unklarheiten und Brüchen im Text führen. Für kreative Projekte kann ein Mittelweg sinnvoll sein: genug Varianz, um interessante Ideen zu provozieren, aber nicht so viel, dass der Output völlig entgleist.[^12]

### Beispiel zur Veranschaulichung

Du willst einen **generativen Textgenerator** für Ausstellungslabels bauen:

- Mit einem **7B-Modell über Ollama** kannst du kurze Texte generieren, die du kuratorisch nachbearbeitest – hier ist Geschwindigkeit und Kontrolle wichtiger als „perfekte“ Formulierungen.
- Über einen **Cloud-Anbieter mit großem Modell** könntest du versuchen, sehr kohärente, lange Texte zu erzeugen, die schon fast druckfertig sind – dafür sind Kosten, Datenschutz und Abhängigkeit höher.[^2][^1]

In der Praxis kann es sinnvoll sein, die **erste Ideenphase** lokal zu fahren und nur für ausgewählte finale Texte einen starken Cloud-Dienst einzusetzen.

***

## 3. Chatbot vs. (Coding) Agent

### Was ist ein Chatbot?

Ein **Chatbot** ist in erster Linie eine **Schnittstelle für Gespräch**: Du gibst eine Nachricht ein, das System analysiert die Eingabe und erzeugt eine passende Antwort. Moderne Chatbots nutzen dazu LLMs, bleiben aber strukturell oft **reaktiv** – sie tun nichts, solange du sie nicht fragst, und führen normalerweise keine eigenständigen Aktionen aus.[^13][^6]

Typisch für Chatbots:

- Fokus auf Dialog und Text-Interaktion.
- Antworten auf direkte Fragen oder Befehle.
- Meist wenig oder nur einfache, implicit gespeicherte „Erinnerung“.
- Kaum eigenständige Planung oder Tool-Nutzung.[^14][^13]

### Was ist ein (Coding) Agent?

Ein **Agent** ist mehr als ein Chatfenster: Er ist ein System, das **Ziele verfolgt, plant, Tools nutzt und Schritte selbstständig ausführt**. Agenten beobachten eine Situation (z. B. deinen Projektstatus), leiten daraus Handlungsoptionen ab und führen Aktionen aus – etwa Dateien lesen, Code ausführen, im Web recherchieren oder andere Agenten anstoßen.[^13][^6]

Ein LLM ist dabei die „Denkkomponente“, aber der Agent umfasst zusätzlich:

- **Tooling:** Anbindung an Editoren, Datenbanken, Shell, Browser, APIs.
- **Planung:** Zerlegen eines Ziels in Schritte, Abhaken von Subtasks.
- **Memory:** Strukturiertes Merken von Zwischenergebnissen, Kontext und Entscheidungen.[^13][^6]

### Zusammenarbeit von Agenten

In Multi-Agent-Systemen übernehmen unterschiedliche Agenten spezialisierte Rollen, z. B. „Researcher“, „Critic“, „Planner“. Sie können sich gegenseitig Ergebnisse zuspielen, kontrollieren oder verwerfen und so komplexere Aufgaben bearbeiten als ein einzelner Chatbot, der nur auf deine Eingaben reagiert.[^6][^13]

Für kreative Projekte ist spannend, dass man etwa einen **„Writer-Agent“**, einen **„Editor-Agent“** und einen **„Curator-Agent“** auf denselben Inhalt ansetzen kann – jeder mit eigener Perspektive und eigenen Systemprompts.

### Beispiel zur Veranschaulichung

Stell dir vor, du arbeitest an einer **interaktiven Installation**:

- Als **reiner Chatbot** könnte das System Besuchenden Fragen beantworten oder Statements zur Ausstellung generieren – aber nur, wenn jemand aktiv etwas eintippt.
- Als **Agent** könnte das System aktiv Logs auswerten, Sensorwerte lesen, generative Inhalte im Raum verändern, Dateien aktualisieren oder neue Variationen eines Texts produzieren, ohne dass du jeden Schritt manuell anstößt.[^6]

Im Kurs ist die entscheidende Unterscheidung: **Wir wollen nicht nur „mit einer KI chatten“, sondern Systeme bauen, die mitdenken, handeln und in unsere eigenen kreativen Prozesse integriert sind.**

---

## References

1. [Local LLMs vs Cloud LLMs in 2026: Privacy, Speed & Cost Compared](https://freeacademy.ai/blog/local-llms-vs-cloud-llms-ollama-privacy-comparison-2026) - We tested Ollama and LM Studio against ChatGPT, Claude, and Gemini on real tasks. The results surpri...

2. [Local vs Cloud AI 2025: Privacy vs Power + Costs (Ch.10)](https://localaimaster.com/courses/ai-complete-guide/chapter-10) - Ultimate local vs cloud AI comparison: privacy benefits vs cloud power, detailed cost analysis ($0-6...

3. [LLM APIs: Tips for Bridging the Gap - IBM](https://www.ibm.com/think/insights/llm-apis) - LLM APIs are typically based on a request-response architecture that follows a series of steps: An a...

4. [Local LLMs vs Cloud: Privacy, Cost, Control](https://www.linkedin.com/posts/usama-junaid-360650225_local-vs-cloud-llms-the-tradeoff-everyones-activity-7414693385720098818-NXnJ) - Local vs Cloud LLMs - The Tradeoff Everyone's talking about GPT-4 and Claude these days. But here's ...

5. [Was ist RAG? – Retrieval Augmented Generation AI erklärt - AWS](https://aws.amazon.com/de/what-is/retrieval-augmented-generation/) - RAG ermöglicht es Entwicklern, die neuesten Forschungsergebnisse, Statistiken oder Neuigkeiten zu de...

6. [Chatbots vs AI Agents vs LLMs - Choose the Best One for Your ...](https://www.mindpathtech.com/blog/chatbots-vs-ai-agents-vs-llms/) - As we always compare Chatbots vs AI agents vs LLMs, AI agents are more effective in complex and mult...

7. [LLM Model Size: Comparison Chart & Performance Guide](https://labelyourdata.com/articles/llm-fine-tuning/llm-model-size) - LLM model size is the total number of parameters a model uses to process and generate language. LLM ...

8. [What Actually Happens When You Call an LLM API?](https://dev.to/aprilloveblair/what-actually-happens-when-you-call-an-llm-api-10il) - Before diving into details, here's the high-level flow of a typical LLM API request: Your request hi...

9. [API Design for LLM Interaction - ApX Machine Learning](https://apxml.com/courses/how-to-build-a-large-language-model/chapter-29-serving-llms-at-scale/api-design-llm-interaction)

10. [LLM Model Sizes Explained (Parameters) - ApX Machine Learningapxml.com › courses › chapter-3-finding-selecting-local-llms › model-sizes...](https://apxml.com/courses/getting-started-local-llms/chapter-3-finding-selecting-local-llms/model-sizes-parameters)

11. [Understand LLM sizes - web.dev](https://web.dev/articles/llm-sizes) - Larger LLMs have more parameters than their smaller counterparts, which allows them to capture more ...

12. [Is Temperature the Creativity Parameter of Large Language Models?](https://arxiv.org/abs/2405.00492) - The temperature parameter of an LLM regulates the amount of randomness, leading to more diverse outp...

13. [Chatbot vs Agent : Understanding the Architecture, Tools and ...](https://dev.to/yeahiasarker/chatbot-vs-agent-understanding-the-architecture-tools-and-memory-layer-3gop) - We’ve reached a point in AI where the word agent is being applied to almost anything. Every product....

14. [LLM Chatbot vs AI Agent: What's the difference?](https://www.linkedin.com/posts/naveen-sharma-86a5851b1_llm-agent-ai-activity-7299045491302928384-fwXp) - LLM chatbot vs Agents: 1. LLM Chatbot (Large Language Model Chatbot) A chatbot powered by an LLM (li...
