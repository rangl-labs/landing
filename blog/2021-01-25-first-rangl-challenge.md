---
title: First RangL Challenge
authors: rangL
tags: [generation, scheduling, challenges]
---

From 18 to 25 January 2021 the RangL team fulfilled a long-held ambition: to run a [generation scheduling challenge](http://challenges.rangl.org/web/challenges/challenge-page/1/overview). The problem involves using continually updated forecasts for energy demand and renewable energy generation to schedule, and so to minimise, the use of fossil fuels. It is challenging partly because the observation space is large — at each step, the agent is given forecasts for all time periods — and also because the forecasts are updated as new information arrives, so are guaranteed to be superseded by better ones.

<!--truncate-->

This ‘look-ahead mode’ generation scheduling was one of the first motivations for RangL, when the project was conceived in early 2019 during the *Mathematics of Energy Systems* research programme at the Isaac Newton Institute in Cambridge. While not directly connected, it’s interesting to note that the forthcoming special issue of Philosophical Transactions of the Royal Society A based on the MES programme has an article by Peter Glynn and Jacques de Chalendar on theoretical aspects of this kind of problem (titled “On incorporating forecasts into linear state space model Markov decision processes”).

The competition itself was heavily oversubscribed, with applicants from Argentina, Denmark, the Netherlands, Italy, France and the UK, drawn from academia, industry and the third sector. We’d like to thank all participating teams, who generated a fantastic atmosphere on our Slack channel throughout the week. It must have been good, as one competitor even joined the RangL team. The winners were team *zeepkist* with members from the [Intelligent Electrical Power Grids group at TU Delft](https://www.tudelft.nl/en/eemcs/the-faculty/departments/electrical-sustainable-energy/intelligent-electrical-power-grids-iepg-group/) and Tennet, the Dutch power system operator. The final scores, and *zeepkist*’s winning code (which used RL), are [here](https://gitlab.com/rangl-public/generation-scheduling-challenge-january-2021/-/tree/master/teams) in the challenge repository.

We recently argued on the [Turing blog](https://www.turing.ac.uk/blog/our-infrastructure-systems-are-undergoing-sea-change-we-need-ai-point-way) that as the world reopens following the pandemic, we will need to make more flexible, responsive and data-driven decisions. Hopefully this first challenge illustrates a small part of the potential role that reinforcement learning can play.