---
title: Lagrangian formulation
authors: rangL
tags: [nztc, challenges]
---

In RL agents learn from experience. However if rewards occur only after a long sequence of actions, it can be difficult for an RL agent to associate this long sequence with the eventual reward. An example is a game of chess, if the reward is simply 1 for winning and 0 for losing. Similarly, if problem constraints are handled by awarding a large negative penalty when a constraint is breached, this can make reinforcement learning challenging. To address this, the group experimented with a Lagrangian reformulation to transform the constrained problem to an unconstrained one by modifying the reward function. As a result, the constraint on job numbers was replaced by adding a reward term proportional to the number of jobs created at each step.
