---
title: 'Journey To The West'
date: 2026-04-29
description: ''
tags: [today-i-learned-ai, brainhack, competition]
---

Gemma 4 Voice Agents Hackathon @ Y Combinator
Sample Page
Cactus × Gemma Voice Agents Hackathon @ Y Combinator
July 15, 2026 / e1523354 / 1 Comment
by Benjamin Goh & Benjamin Chek

How we got here


Our story with Cactus began in February 2026 at the Cactus × Google DeepMind Hackathon, a one-day event held simultaneously in San Francisco, London, Boston, Washington, DC, and Singapore. For the Singapore arm, Cactus approached NUS AI Society about helping with the event and encouraging university students to contribute to its open-source repository. The brief was simple: build systems that run locally on the Cactus Engine, and perform cloud handoff for more challenging tasks.

Cactus (YC S25) is a lightweight C++ inference engine for running language, vision, and speech models directly on edge devices, like laptops, phones or even wearables! Its architecture is split into Kernels, a Graph, and an Engine, supporting lower-end devices as well as flagship phones, whilst keeping bundle sizes small can achieving time-to-first-token as low as about 50 milliseconds. And, because edge inference happens on the device, applications can respond faster, protect user data, and continue working without a network connection, especially useful for a voice assistant designed to live in your pocket, or move with you.

After the first hackathon, Cactus technical founder Henry Ndubuaku invited us to the Gemma 4 Voice Agents Hackathon at Y Combinator in San Francisco, an event organized alongside the launch day of Google’s Gemma 4 model series, as they had Day-0 access to Gemma 4. We opted to travel as representing members of NUS AI Society, alongside members of The Collective. The goal was simple: since we were travelling across the world for the hackathon, we wanted to make full use of the opportunity: support the event, learn from the people there, and build relationships that could create future opportunities for people working in and around NUS.

Day one


Our logos!

Some of our most useful conversations happened before the event officially began. We spoke at length with members of Bruin AI at UCLA and the AI society at UC Irvine about how their student communities operate.

Bruin AI deliberately runs two tracks. One focuses on applied, client-facing projects, with teams organised by industry vertical and delivering work to companies. The other supports research collaborations with faculty. We had been considering a similar model for the future of NUS AI Society, and their experience made the idea more concrete: a student AI community does not have to choose between industry and academic research, and can help members move between the two.

UC Irvine’s community felt familiar because, like ours, it was small and informal. We compared notes on how such communities give juniors a place to ask questions, find peers, and grow into the researchers, builders, and mentors who support the next cohort, and how the presence of such communities in universities are very important in subtly inspiring students and turbocharging their exploration which compounds throughout four years in school.

After Henry’s opening talk, we settled into the role that suited us best: hands-on support on the floor. Many builders were new to Cactus or voice agents, so most of the questions were practical. What time-to-first-token and tokens per second should they expect on particular piece of hardware? What could Gemma 4 do, and how to use its capabilities? How should they wire the voice loop together? When a question went deeper into the engine internals or Cactus backend, we passed it to the Cactus team: the “Cactus Jacks”, who knew the core inference engine code best. The Collective handled most of the filming and event coverage, though we also made a few rounds with a camera to help capture the day.

Doing this all day meant we spoke with almost everyone, including the Cactus Jacks. Many of Cactus’s early hires came from UCLA, and it was great to meet them in person. Some were kernel-level engineers who could often tell why a number looked wrong before you had finished describing the problem. Others were researchers at heart and happily spent time discussing papers with us. What stayed with us was how readily they followed a conversation outside their own specialty; they had depth without walls.



By the end of the day, it was apparent that technical support was not merely secondary work. A short conversation about slow inference or dropped audio frames could unblock a team and give them new perspectives, thus determining whether its project reached the final demo. It’s work that happens behind the scenes, but directly changes what people can build.

Day two
Day two began with Henry sitting down with the Cactus technical team, and we got to listen in. They talked through implementation details, quantisation experiments running live, and changes being shipped during the hackathon. Then the conversation drifted, the way good technical conversations do, into papers that had little to do with voice agents. TurboQuant. Distillation. Robotics. New work across training, infrastructure, and deployment, much of it still fresh enough that nobody had settled opinions. It honestly felt more like a paper-reading group than a company update or scrum, which felt refreshing to watch.

Later, when the room hit a lull, we sat down with Henry for what became a long, wide-ranging conversation. It started with his interests, a bit about us, his wacky life stories, where on-device voice systems were heading, then moved through his path from research engineer to founder, how he thought about building Cactus, and what he wanted to do after it. It helped explain something we had noticed since arriving in San Francisco: voice agents were having a real moment. They were the clearest use case for on-device models at the time. Low latency made the conversation feel more natural, and local inference kept every interaction from having to go through the cloud. With so many teams building around the same idea, the interest was hard to miss.

Back in Singapore, we knew plenty of people who were interested in startups. We had met far fewer people like Henry, who could move from a paper to an implementation detail to the direction of the company without changing gears. That was when “technical founder” stopped feeling like startup vocabulary and began to mean something to us. At Cactus, the research shaped what the company built. A few days after the hackathon, Henry released new work on Hadamard-product quantisation.

We could finally see how work that began in a lab or PhD thesis might become a computer science company, and why someone would choose that path over academia. The technical work could continue, but the founder would also carry it through engineering and into something people could use.

Henry spoke about his own life in phases. He was focused on Cactus now, but he did not expect it to define his whole career. He wanted to work on another idea after this and eventually become a teacher. It was refreshing to hear him treat both as things he could do seriously at different times.

Ben C. and Henry, chatting away about everything AI

He also told us how his relationship with DeepMind grew from doing good work in public over time. There was no special introduction behind it; the public track record eventually led to the relationship.

Then came the pitches: three minutes per team, although quite a few ran over and had to be stopped. Two projects still stand out to us: one ran Gemma 4 on-device and used natural-language instructions to create custom image-processing kernels, so you could ask it to “make this picture wavy” or “add a blue filter.” Another team built a CCTV system that you could search by voice, such as asking it to find someone wearing a red shirt.



Front row seats to the pitches!

The projects we believed in most had two things right. They solved a specific problem, and local voice was central to the solution. When that happened, the demo needed very little explanation. You could see why it had to use voice and why it had to run on the device.

The weaker pitches could still be technically strong; some were more sophisticated than projects that placed above them, but the problem usually came earlier: the use case was unclear, the problem did not need this solution, or the team had built something clever and only later decided whom it was for. A few demos worked perfectly in the room but looked likely to fail the moment a real user did something unexpected.

Everyone had the same tools and the same forty-eight hours, so coding ability alone did not explain the difference, although the development setup was challenging to some especially since this was before long horizon coding agents that could handle installing and compiling was widespread. Choosing a worthwhile problem, cutting the right features, and noticing when a polished demo was hiding a weakness mattered just as much. As prototypes become easier to produce, that judgement becomes a larger part of the work.

 

What we carried home


Flying from Singapore to San Francisco one week before finals was difficult to justify on paper, but in hindsight, it was worth it.

We both came from research-heavy backgrounds and had absorbed a fairly narrow idea of serious work: pick a field, go deep, and leave the rest to someone else. The people we met did not work that way. We met researchers who built the infrastructure needed to test their own ideas, technical leads whose low-level knowledge helped them spot business opportunities, and founders who could discuss the theory, engineering, and commercial case for the same project.

We realised that we had sometimes used specialisation as permission not to learn. I work on model architecture; I don’t need to know hardware. I’m an engineer; I don’t do business. Both thoughts sound like focus because they are, but they can become blind spots when the problem you’re working on crosses those boundaries. If a model depends on the hardware beneath it and the work eventually has to reach users, then the hardware and business case are part of the problem too.

We had also pictured research and industry as two separate career choices, but this event (and our trip) made them look more like two ends of the same pipeline. A paper can prove that something works and still be years away from a system that people can rely on. Industrial use often trails research by two or three years, and closing that gap requires someone who understands the original work well enough to know what is solid, what is fragile, and what is still missing.

Even then, the researcher cannot carry the whole thing alone. Engineers have to make it reliable, and a company has to find a way to sustain it. Industry is where a result becomes something people can act on, with the caveat that it first has to be palatable to investors and to society.

Additionally, the conversations with Bruin AI and UC Irvine gave us further insight and ideas on what we want for NUS AI Society. We do not need to copy either community, but we do want research and applied work to reinforce each other. A student who starts by reading papers should have a route to test and build from them. Someone who starts by building should have peers who push them to understand the ideas underneath. Informal student communities help people begin that process earlier, then support the juniors who follow them.

But frankly, the last lesson is the simplest: show up and be useful. Almost every connection we made began because we were in the room, willing to help, and easy to talk to. Richard Hamming, in his talk on doing great research, noticed something about the colleagues around him. The ones who kept their office doors open got interrupted constantly and still ended up working on the more important problems, because the interruptions were what told them which problems were important. A weekend like this is a room full of open doors. You trade away some focus, and what you get back is a much better sense of what is actually worth your time.

Learning goes far beyond the classroom. The collective wisdom sitting inside our communities is there to be drawn on, but only by those who put themselves within reach of it. As the arguably most famous scientist once said:

“If I have seen further it is by standing on the shoulders of giants.”
— Isaac Newton



 

Uncategorized

1 Comment

A WordPress Commenter
July 15, 2026 at 7:40 am

Hi, this is a comment.
To get started with moderating, editing, and deleting comments, please visit the Comments screen in the dashboard.
Commenter avatars come from Gravatar.

Reply
Leave a Reply
Your email address will not be published.



Anti-spam word

To prove you are a person (not a spam script), type the words from the following picture or audio file.

Anti-spam word image. If you cannot read it, use the audio button to hear it.
Listen to the Anti-spam word
Load new
Captcha refreshed.

Name

Email




© 2026 Gemma 4 Voice Agents Hackathon @ Y CombinatorTheme by Anders Noren — Up ↑
Skip to toolbar
Log In
Search