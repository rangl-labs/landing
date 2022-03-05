---
title: Engineering the reward function
authors: rangL
tags: [nztc, challenges]
---

In Reinforcement Learning the agent learns to maximise the rewards it receives. In this way the reward function is an integral part of the problem statement, and this week’s efforts centred around finalizing its exact form. Given the aims of the study, the project group decided to include the cost of total carbon emissions in the reward alongside UK energy sector profits (that is, energy revenues minus capital, operating and decommissioning costs

The reward function can also be used to place constraints on acceptable solutions. While the shift to zero-carbon technologies can lead to increased employment in the long term under our modelling, it is important to ensure that job numbers are also managed in the short and medium term. 

It was agreed that recent volatility in energy market prices highlights the importance of incorporating randomness in the RL environment. In addition to reflecting real-world uncertainty, this allows the agent to learn to adapt under a variety of scenarios. 
