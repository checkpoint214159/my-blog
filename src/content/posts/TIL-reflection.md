---
title: 'Coming full circle on TIL-AI'
date: 2026-06-13
description: ''
tags: [today-i-learned-ai, brainhack, competition]
---

From competitior in 2025 to organizer and part of the tech team in 2026, welcome to everything I have to share about the event I most engaged with in my preliminary years in tech and AI. Here are some photos of me 

# Act 1. Where It All Began


## BrainHack

DSTA's annual BrainHack competition is arguably the largest undergraduate event in Singapore, held across 2 days in MBS in mid-June. Its primary purpose is to attract undergraduate talent and increase awareness over what DSTA as an organization contributes to Singapore's defense, although many of my peers remember it for the food MBS delivers. Regardless, its a fun event that those around me holler to sign up for when April rolls around and we want our yearly does of summer hackathon torture.

My very first competition ever was BrainHack 2024's SeeTrue; a challenge revolving around fooling fake image discriminators by generating AI images using a custom curated ComfyUI pipeline. Me and Gerard ended up in the top 5 teams, which was pretty sweet, but in the end it perhaps was not as technical as I would like. Enter:

## TIL-AI

TIL stands for Today-I-Learned, so if you didn't know before, you can safely say aloud: "TIL TIL!", to the bewilderment of those around you. As someone whose background in AI only started during his National Service (by a fortunate turn of events), TIL-AI catered to my tastes much more than SeeTrue. At least, what we call Ryan Nah's modern iteration of TIL-AI over the last 3 years, that is. To put it briefly, it focuses a lot more on the training and benchmarking of AI systems, and the last 2 years it primarily revolved around fields like Audio Speech Recognition (ASR), Computer Vision (CV), Natural Language Processing (NLP) and Reinforcement Learning (RL), whilst the era before that focused more on the deployment of these systems into actual robotics hardware. 

Where I personally believe this event diverges significantly from other BrainHack events, is the sheer scale and complexity of it all. While others like CDDC had more participants, TIL has two phases with their own complexity and nuances:

## McDonald's Workers and my Selfplay struggles

My first encounter with the beast was in 2025, where I formed a team with my fellow intern-colleages at DSO to create the legendary self-deprecating team name as seen above. Because there were many components to the challenge, I self-assigned to the RL component, confident that I could learn sufficiently about the otherwise novel concept to me at the time.

## The Event, and what came after 

# Act 2. The Following Year

## The bossman Ryan and the birth of Benjamin | AngelHack

Because of undisclosable details (pm if you want disclosure! only competitiors tho lol), the bossman came around to hiring in March instead of the otherwise much earlier January. After sliding an eloquent DM and a very long email about my dissatisfaction with last year's RL challenge, which he mentioned, the writing style convinced him I might be worth the time, and the rest is history. 

<insert photo of benjamin | angelhack discord here>


More on Ryan:

"Oh and by the way, we have about 1 month before we go live."
"...what?"

After being hired, that was when I discovered that we were on an "Accelerated Timeline", and would be largely reusing last years infrastructure and problem statements. While this was the initial description, I still tried to propose novel tasks for the CV and RL (now called Autonomous Exploration, AE, since people were confused on whether non-RL methods were permitted last year). For the Computer Vision task, I proposed a more novel 3D pointcloud object detection task, since a comically simple idea to upgrade from 2D image detection was to simply add another dimension. I built off an existing scene generation pipeline from Infinigen (elab more here)

As for autonomous exploration, I was proposing and implementing a significantly more complex task from last year: significantly longer horizon with more complex progression trees (in skills, economy, itemization, etc) and to make it Multi-Agent in design (last year was single-agent). Unfortunately, the limitations for both this and the previous CV proposal were twofold: 

1. The Accelerated Timeline: Ryan played with these new ideas for as long as we could before making a decision, but since we had a month before going live. Our "R&D" to modify the tasks for novelty only had a maximum of 1-2 weeks, and frankly any big change would not be possible to fully red-team and properly develop evaluations for. Keep in mind, that I had to adapt to a system I never touched before in a mere month or so!

2. What DSTA wanted: A fundemental constraint we had on us were the fact that DSTA still wanted a physical robotics demo / stage for the event. This means that our virtual system must correlate with our physical setup, and that entailed limitations for our creativity

Nevertheless...


## The Triple Sandwich Crunch Deluxe, Ben Edition

In the coming months to signing up as Ryan's Minion, my friend, Benjamin Chek (yes, the same first name, coincidence he's basically my neighbour in Acacia too), brought up a chance to go to San Francisco to organize an event. More on that in a seperate post, but having agreed to both this commitment and to TIL, alongside the existing ball-and-chain to my ankle that was exams, and what do you get? An overworked mess! But in all honestly, I am very happy with what I did over this period, as it pushed me and expanded my world view far beyond what it used to be.

But yes during this period, it was a messy mix of creating the problem statements and the evaluation backend, alongside learning the competition infrastructure, which had many moving parts due to the complexity of the event


## Opening Ceremony

## D-Day



# Act 3. Where do we go from here

Some learning points we found from this year:

## Claude, Bringer of Cheese, Destroyer of Hackathons

The need to redteam and more innovative challenges. Or maybe even the future around agents?

How to truly prove understanding of subject material?

## Fairness and variance


