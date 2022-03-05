---
title: Building an environment
authors: rangL
tags: [nztc, challenges]
---

RangL aims at applying reinforcement learning (RL) to solve real-world industrial problems by involving participants from the wide AI community. Today, our focus was therefore on developing an appropriate RL environment for the Pathways to Net Zero challenge.

The objective is to find optimal deployments for technologies such as offshore wind, blue and green hydrogen, and carbon capture and storage. These technologies will be instrumental in reaching the UK’s target of net zero carbon by 2050.

After brainstorming we opted to take Breeze, Gale and Storm as baseline scenarios from which others can be built. An agent will interact with the RL environment by choosing a mix of those scenarios and also by varying the speed with which they are implemented. For instance, earlier deployment reduces lifetime emissions but generally implies higher capital costs. Solutions will also need to meet some non-monetary constraints, e.g. balancing job creation in new technologies against the loss of roles in decommissioned infrastructure. We will also work with the Net Zero Technology Centre and ORE to extend the Integrated Energy Vision appropriately, so that lifetime emissions and their social cost can be considered in the RL reward function.
