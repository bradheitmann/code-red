# Inversion methods: make the obstruction unnecessary

Choose two or three techniques for a particular obstruction. Each should lead to a bounded action and an observable discriminator. Novelty is not evidence; eliminating a requirement by pretending it does not exist is not an inversion.

“Inversion testing” here names a synthesis, not a single established school or standardized test. The historical sources supply ways of thinking; the agent procedures below are original applications.

## 1. Backward analysis

**Use:** the team has many tasks but no short route to acceptance.
Start with the exact accepted result. Ask what must be true immediately before it; repeat until reaching a state already available. Execute forward along that chain. Produce a dependency graph with evidence for each edge. Test the weakest edge: would the result really fail without it? Reject an edge only with a valid alternate route.

**Roots:** Pappus's analysis/synthesis tradition, explained by [George Pólya, Mathematical Discovery](https://www.tlu.ee/~tonu/modesimu/George_Polya_Mathematical_discovery.pdf). Working backward reveals a construction; it does not guarantee that each reverse step is reversible.

## 2. Failure construction

**Use:** repeated effort reproduces the same failure.
Design a process guaranteed to miss the deadline: add shared writers, obscure the oracle, maximize handoffs, reward reports. Compare that recipe to actual behavior. Remove one observed contributor and measure the effect. Do not accuse people of motives inferred from outcomes.

**Roots:** [Munger's inversion discussion](https://www.stripe.press/poor-charlies-almanack/talk-one) and the distinct [Liberating Structures Creative Destruction exercise](https://www.liberatingstructures.com/creative-destruction). Munger attributes an inversion maxim to Jacobi; this is not a verified primary Jacobi quotation. The facilitation exercise called TRIZ is not the whole technical TRIZ tradition.

## 3. Premortem

**Use:** the chosen plan looks persuasive but has not met reality.
Assume the hour ended without the artifact. Write three concrete causes independently before reading the team's explanations. Inspect the most consequential plausible cause now. Return one preemptive action, not another comprehensive risk register.

**Root:** [Gary Klein's premortem](https://www.gary-klein.com/premortem). Imagination generates hypotheses; it does not estimate their probability reliably.

## 4. Falsification before confirmation

**Use:** repeated green checks leave the central claim untouched.
Write the strongest claim the team is making and the smallest observation that would refute it. Try that observation first. If every possible outcome can be explained as success, rewrite the claim. Record negative results alongside favorable ones.

**Roots:** [Popper's philosophy of science](https://plato.stanford.edu/entries/popper/) and [Feynman's scientific-integrity address](https://calteches.library.caltech.edu/3043/1/CargoCult.pdf). One failed experiment can also reflect an instrument or auxiliary assumption; diagnose before asserting a universal refutation. Passing a test is bounded evidence, not certainty.

## 5. Blind subtraction and causal ablation

**Use:** all proposals extend the existing architecture.
Use the first-wave packet in SKILL.md. Hold real input and acceptance fixed, remove one layer in isolation, and compare. If the same valid outcome becomes cheaper, inspect what work was actually eliminated versus moved. If removal changes the outcome, restore and learn. Never subtract security or mandatory proof by stealth.

**Roots:** causal experiments and the subtractive tradition discussed in [Taleb's author text](https://fooledbyrandomness.com/masquerade.pdf). The blind briefing and five-minute worker protocol are this playbook's synthesis, not an attributed historical formula.

## 6. Counterfactual dependency deletion

**Use:** “we cannot do Y until X” has become unquestioned.
Ask: if X did not exist, could the user still receive Y? Distinguish a necessary property from the current mechanism supplying it. Try an existing artifact, direct interface, precomputed result, or alternate supplier. The output is a removed dependency supported by a demonstration, or a specific reason it remains necessary. Replacing a four-hour proof with a labeled demo may help a meeting but does not complete the proof.

## 7. Incentive reversal

**Use:** every agent looks productive while delivery stalls.
Ask what the system rewards: occupied workers, ticket counts, green badges, or accepted outcomes? Give a worker credit for proving its own task unnecessary. Replace an activity target with a terminal artifact and independent check. Watch for gaming the new metric.

**Root:** [Munger on incentives and human misjudgment](https://www.stripe.press/poor-charlies-almanack/talk-two). Application to agent task design is ours; incentives do not explain every error.

## 8. Opportunity-cost reset

**Use:** sunk effort makes the current route feel obligatory.
Compare the next bounded interval spent on continuing, reusing, replacing, or doing nothing. Include coordination, verification, migration, and reversibility costs. Preserve existing useful work while reallocating new effort. A smaller already-valid artifact can be more useful now than another speculative layer.

**Root:** opportunity-cost reasoning in [Munger's collected material](https://www.stripe.press/poor-charlies-almanack/chapter-three). Do not fabricate numeric expected values from unknown probabilities.

## 9. Purpose versus mechanism

**Use:** a process defends its own continued existence.
For each blocking rule ask what harm it prevents and whether that harm applies to this object. Keep the required property; replace an unnecessarily expensive mechanism within authority. A signed artifact may meet a provenance need without a second independent database recording the same fact. Changes to actual guarantees require their real authority.

**Roots:** [Meadows on goals, rules, and paradigms](https://donellameadows.org/archives/leverage-points-places-to-intervene-in-a-system/); [Argyris on double-loop learning](https://hbr.org/1977/09/double-loop-learning-in-organizations). This is a design question, not a license to overrule safeguards.

## 10. Genealogy of a constraint

**Use:** a rule outlived the incident or environment that created it.
Find its origin, protected invariant, current owner, and present applicability. Test whether the original failure mechanism remains possible. Retire a discretionary obsolete step through its actual authority; keep a necessary one. An awkward history alone does not invalidate a rule.

**Root:** a limited organizational analogy to [Nietzsche's On the Genealogy of Morals](https://www.gutenberg.org/files/52319/52319-h/52319-h.htm), which interrogates inherited valuations. The engineering procedure is ours.

## 11. Reversible experiment / real option

**Use:** discussion is costlier than a safe small test.
Define rollback, maximum loss, acceptance observation, and a short expiry. Test the smallest reversible move, then retain or revert. Treat irreversible data loss or public commitments differently. A cheap experiment may purchase information without committing to an architecture.

**Root:** the reversible/irreversible decision distinction in [Amazon's 2015 shareholder letter](https://ir.aboutamazon.com/files/doc_financials/annual/2015-Letter-to-Shareholders.PDF). Reversibility must be demonstrated, not assumed from a Git branch.

## 12. Oblique delivery

**Use:** the direct route is blocked but part of the user's real need can be met independently.
Seek an honest useful artifact adjacent to the blocked path: a reproducible candidate, a validated export, a manual service, or a diagnostic. State its boundary. Prefer a user outcome over a process milestone, while leaving the original unfinished objective visible.

**Root:** [John Kay on obliquity](https://www.johnkay.com/2004/01/17/obliquity/). Indirect approaches can help under complexity; a clear simple task often needs straightforward execution.

## 13. Bottleneck migration

**Use:** increasing parallelism lowers throughput.
Measure the actual queue and resource occupancy. Is the bottleneck reasoning, shared disk, integration, an external rate limit, or a serial proof? Parallelize independent preparation around it; give the scarce step one owner. Recheck after moving it: the next bottleneck may appear elsewhere. Three concurrent four-hour serial runs do not become one eighty-minute run.

## 14. Minimal counterexample

**Use:** a giant failing case makes every diagnosis expensive.
Reduce inputs or changes while preserving the same failure predicate. Distinguish a minimal reproducer from a representative success test. Use the reduced case to locate the defect, then restore the full acceptance test for qualification. Reduction that loses the original failure is not success.

**Software precedent:** [Zeller and Hildebrandt's delta-debugging paper](https://issta16.cispa.saarland/papers/tse2002/) demonstrates automated failure-preserving reduction. Minimality depends on the algorithm and tested conditions; it need not reveal a unique root cause.

## 15. Negative control and oracle attack

**Use:** the team trusts the tester more than the product evidence warrants.
Supply a known invalid case or a bounded mutant that should fail. If it passes, investigate the oracle before buying more green runs. Keep the control realistic and isolated. Killing one mutant does not prove that all incorrect implementations will be rejected.

## 16. Logical contradiction / countermodel

**Use:** a requirement is claimed to be universally necessary.
State it precisely. Search for one lawful satisfying example without it, or derive a contradiction from its premises. In mathematics a valid counterexample defeats a universal claim; in engineering the counterexample must also meet the real operating assumptions. An analogy is not a proof.

## 17. Representation change

**Use:** solving in the current representation is the expensive part.
Try a stream instead of a shared mutable object, a content hash instead of a location, a declarative constraint instead of a procedure, or an adapter instead of a platform migration. Specify which properties must survive the transformation. Test round-trip and negative cases; an elegant representation may merely hide complexity.

## 18. Symmetry breaking

**Use:** every worker attacks the same hypothesis with different wording.
Give workers genuinely different discriminating questions: remove the layer, attack the oracle, reproduce from the consumer, or test a competing cause. Use a shared acceptance criterion, not a majority vote. Keep one integration owner. Disagreement is useful only when it leads to a test that distinguishes explanations.

## Selecting a move

Favor high decision value per scarce minute: a cheap test that can remove an entire branch of work often beats another implementation. Before adopting a shortcut, ask what cost moved, what assumption changed, who now bears the risk, and what observation would reverse the decision. Never confuse removing an obstruction with hiding the evidence that it remains.
