---
name: code-red
description: Run a four-hour recovery sprint with a one-hour permission checkpoint when the current process is failing an urgent objective. Pair a resource-constrained execution orchestrator with an independent inversion analyst, using bounded worker waves, backward reasoning, and a blind subtraction experiment while preserving ongoing work.
---

# Code Red

Reject the inherited process as the default route to the objective. Plan a four-hour window; use the first hour to find and execute a better route, then check in with the user before continuing. Preserve the actual objective, truthful evidence, and work already in flight.

This is a two-lead operating mode with a bounded worker pool. It is not a promise that adding agents makes work faster. It changes how the team searches for a solution, not the truth required to claim success.

## Two leads, different jobs

**A — execution orchestrator:** has scarce credits or attention for its model class. Owns execution, worker dispatch, resource allocation, integration, and final delivery under existing authority. Outsources substantial diagnosis, alternative design, and process criticism to B. Continues obvious authorized work while B thinks; B is not an approval queue. A does not spend its remaining budget re-deriving every analysis.

**B — inversion analyst:** has a separately budgeted reasoning allocation, preferably outside A's scarce quota pool. Challenges assumptions, works backward from acceptance, designs cheap discriminating experiments, and returns a short recommendation plus its strongest objection. B stays outside product implementation and does not launch a competing worker hierarchy. A still exercises judgment.

Choose available agents by capability and actual quota pool, not brand. Either Codex or Claude Code can occupy either role. Two conversations on the same account may share the same scarce budget. Verify this before treating them as independent capacity. If no second independent context is available, prepare the objective and evidence, report the exact capability gap, and do not represent one agent role-playing both sides as a two-agent run.

Read [roles-and-messages.md](references/roles-and-messages.md) when establishing the pair or dispatching workers. Workers are not additional leads; implementation and independent verification may use different workers.

## Before the clock: capabilities and a working channel

Have two separate lead contexts, a subagent-capable execution harness and suitable model for A, finite capacity/budget, authorized repository and test access, and an objective, acceptance oracle and timebox. A provider or model is not a harness: changing models does not supply worker delegation, tools or messaging. Different vendors are optional; verify shared quota constraints. For a beginner setup and portable harness choices, read [setup-and-communication.md](references/setup-and-communication.md).

Bind A/B recipient identities and a working message transport. Before starting the clock, send a unique probe each way and obtain an explicit recipient acknowledgment. Agree who checks receipt/timeouts, a safe fallback route and escalation owner. Default response bound for an actionable finding is the next affected decision or five minutes, whichever is sooner; adjust it upfront to the actual task and remaining window. A terminal multiplexer is not a mailbox. Markdown alone cannot wake an idle or suspended harness: use the existing harness/orchestrator receipt and timeout mechanism, an existing external scheduler, or an agreed human relay. Do not build new incident tooling to make this skill work, or claim a working two-agent feedback loop while that capability is unresolved. Continue unrelated authorized work.

## Communicate findings, not silence

**Token efficiency never means silence.** B proactively delivers every actionable finding to A through the tested channel, with an ID, recommendation, strongest objection and cheapest falsifier. A sends decision requests and material state changes back to B. A durable ledger preserves evidence; it does not deliver a finding. Notify the actual recipient, for example: `B-07: updated <path>, please read <section>; decision needed before <checkpoint>`. Include enough substance to act without discovering an unread file.

Distinguish submission, transport delivery/readback, explicit recipient receipt and A's disposition. For each actionable B finding, A returns **ADOPT**, **TEST** (owner and bounded next action), **REJECT** (reason), or **DEFER** (reason and exact checkpoint). A disposition is not proof that its action succeeded. Routine observations may be batched; decision-changing or blocking findings must reach the recipient before the affected decision. Do not require an acknowledgment for every routine message or make B an approval gate for all A work. A cannot unilaterally silence B or substitute an unread file for the agreed channel; B should report that as a communication failure.

If receipt/disposition is missing at the agreed bound, check actual available evidence, then use the declared safe fallback once or one concise escalation to the named owner. Inspect an ambiguous submission before resending; deduplicate by finding ID. Do not spam, overwrite a draft, force-interrupt valid work or manufacture read telemetry. Preserve an unresolved decision-dependent risk explicitly; continue unrelated authorized work, and do not claim the finding was accepted or the feedback loop restored until evidenced. Detailed messages and an example are in [roles-and-messages.md](references/roles-and-messages.md).

## Start the clock and define success

Record actual start time and an absolute deadline exactly four hours later, with a permission checkpoint at one hour. Notify the user at start that this is a four-hour plan with a one-hour checkpoint. Read the clock before dispatch and after tool/agent boundaries. Compaction, handoff, retries, model changes and checkpoint approval all retain that four-hour endpoint: a run can finish early but never renews itself or resets the endpoint. This skill installs no timer or background service and cannot wake a suspended harness.

Use the existing task record, or the small [run card](assets/run-card.md). Capture only what is needed:

- One concrete objective and observable acceptance criterion; exact artifact or user-visible behavior.
- Actual state and evidence, applicable authority, source/input identity, and mandatory safety/proof constraints.
- A/B identities, tested communication route, reciprocal probe acknowledgments, actionable-response bound, fallback and timeout owner; finite resource limits and actual remaining budget where observable.
- Existing outside work: owner, occupied files/resources, expected handoff or landing route. Reuse existing records.
- Deadline, one-hour permission checkpoint, output location, and the smallest useful honest fallback if the full objective cannot fit.

Infer routine choices from the request. Ask only for missing information an agent cannot resolve; proceed on independent work. A fallback is explicitly partial unless the user changes the objective. One hour is a visible-results assessment target, never a productivity guarantee; a physical process that genuinely needs four hours cannot be made a one-hour proof by changing its label.

## Preserve other agents' in-process work

**Let all work already assigned or in flight outside the pair finish and land naturally through its existing authority.** Do not cancel, pause, reset, overwrite, rebase, remove its checkout, steal ownership, revoke its resources, or duplicate its assignment to accelerate Code Red. Do not force those agents into the new pair's reporting hierarchy.

Route new work around occupied files and resources. Read their published results and accept handoffs when offered; coordinate an overlap through the existing owner instead of becoming a second writer. Preserve dirty work, failed evidence, attempt histories, pins, and existing proof runs. At the one-hour checkpoint and at the four-hour deadline, outside work may continue unaffected. An actual safety incident follows the existing incident authority; urgency alone is not an incident.

## Resource-limited intensity

Use many small, useful worker jobs across successive waves; agent count is not the objective. Default ceilings are **32 worker jobs total and 8 concurrent workers**, reduced by the actual harness limit, money/token budget, hardware capacity, and outside work. These are ceilings, not targets or spending authorization. With four total harness slots and two leads, at most two workers can run at once. No nested spawning to evade limits.

Allocate a finite per-worker time/token or cost bound before launch. When credit balances are unknown, say unknown; use explicit job/time/token caps within existing authorization, never assume unlimited or free credits. Where balances are known, reserve roughly a quarter of A's remaining budget for integration and closeout. Select cheaper adequate models for bounded tasks; spend scarce reasoning on consequential decisions. Never transfer secrets to workers to make routing easier.

Parallelize independent hypotheses, packaging, narrow tests, and artifact preparation. Use one integration writer per target and one custodian for each constrained heavy resource. More simultaneous tests can lengthen the critical path. Reuse a valid test result for unchanged dependencies where the actual acceptance contract permits; do not skip a mandatory proof because a diff looks small.

A usage estimate or warning is not exhaustion. On an actual limit/error, preserve the exact failure, keep unaffected work moving, and use an already-authorized fallback. Role takeover requires an existing delegation/owner instruction; this skill itself grants no authority over other teams. Transfer the remaining clock, budget, work ownership, and evidence rather than starting over.

## Track worker progress with evidence, not inference

Each worker packet carries a liveness checkpoint: task ID, the exact artifact or phase expected, an expected-by time within the original bound, the owner, the process handle or wait target, and an evidence pointer (where the artifact or state will appear). One named observer watches published artifacts; it does not poll the same expensive source or infer progress from token counts, CPU time, or message volume.

On a missed checkpoint, run one bounded actual-state check against the evidence pointer before assuming anything. If two consecutive observations show the same obstruction with no new evidence, change the route, allocation, or hypothesis, or record an exact blocker with owner and next action — never mechanically retry, and never kill or reset a proof automatically. A quiet valid proof is not a stall; a quiet invalid wait is found by the state check, not by inference.

Template: `LIVE-<task-id> phase <artifact|phase> expected by <hh:mm within bound>; owner <A|worker-n>; wait <handle/process>; evidence <path>`. A missed-deadline closeout records the timestamp it stopped and states continuation separately — what was delivered, what continues, under which owner — never relabeled as an in-time result.

## One authoritative instruction revision per worker

A worker has exactly one active instruction revision. A revision carries an explicit supersedes ID, the changed scope, the new base, the changed proofs/acceptance checks, and a safe apply boundary (what the worker may and may not change while applying it). The worker reports the applied revision ID after applying it. A delayed instruction or freeze cannot revive work the newer revision superseded; retries are deduplicated by revision ID. A routine acknowledgment is not a universal gate: it neither proves application nor blocks already-authorized independent work.

Template: `REV-<n> supersedes REV-<n-1>; scope <changed>; base <new base>; proofs <changed checks>; apply boundary <may/may-not>; worker reports applied REV-<n>`.

## The four-hour window

These are pacing guides, not wait gates. The first hour ends with a permission checkpoint; the remaining three hours continue only with explicit user approval.

| Time | A: execute | B: invert |
|---|---|---|
| 0–5 min | Bind objective; notify the user of the four-hour plan and one-hour checkpoint; launch ready independent tasks and the blind subtraction worker. | Draw a backward dependency chain; identify the most expensive unsupported necessity. |
| 5–50 min | Run bounded waves; integrate useful results continuously. | Select two or three relevant inversion techniques; propose the next cheap falsifiable move. |
| 50–60 min | Prepare the one-hour checkpoint: delivered evidence/behavior changes, resource use, strongest counterevidence, next plan. | State what the evidence supports, what would refute it, and what remains unproven. |
| **1 h — permission checkpoint** | Present the checkpoint and ask the user for explicit permission to continue the remaining three hours. Silence is not consent. | No new dispatch or spending without approval. |
| 1–3.5 h (approved) | Continue bounded waves; converge on the best evidenced route. | Attack the winning explanation; inspect displaced costs or omitted requirements. |
| 3.5–4 h | Verify, package, pin, and hand off. Admit only work that can fit the remaining time including verification. | State what the evidence supports, what would refute it, and what remains unproven. |

The one-hour permission check is owner-requested: never remove it as ceremony. Present observations as observations, not guarantees; the one hour is a design target, never a productivity promise.

Use [inversion-methods.md](references/inversion-methods.md) for technique selection and [casebook.md](references/casebook.md) for historical mechanisms and limits. Do not perform the entire catalog as ceremony.

Each intervention should produce an artifact, a tested causal hypothesis, a removed dependency, or an exact blocker with owner and next action. Tokens, messages, queue acceptance, and activity are not progress. When two consecutive observations show the same obstruction without useful new evidence, change the hypothesis, route, or allocation; do not mechanically retry. A long valid proof is not a stall merely because it is quiet.

## First-wave asymmetric move: blind subtraction

Give one worker the objective, representative real inputs, acceptance oracle, constraints, and occupied resources — **withhold the team's proposed solution and preferred diagnosis**. This is insulation from anchoring, not concealment of risks or authority. Ask:

> If you could write no new feature code, which dependency, handoff, conversion, queue, or layer could disappear while producing the same required result? Propose up to three routes and test the cheapest one.

Bound this to five minutes or less and count it against the existing worker budget. Use a read-only investigation or an authorized reversible isolated experiment; never alter someone else's live path. If a faithful test cannot fit, return a falsifiable proposal and do not call it a result. Prefer one cheap distinguishing probe over a duplicate full suite.

B compares original and simplified paths against the **same acceptance oracle and inputs**. Record changed variables, elapsed time/resource use when measurable, remaining requirements, and the observation that would disprove the claimed advantage. Look for hidden manual labor, weaker checks, cherry-picked inputs, moved costs, and a different product masquerading as simplification. Diagnostic success is not release qualification.

This combines independent framing with causal ablation: the team's own machinery becomes a testable cause. It can uncover a route the best developer misses because every normal task presupposes that machinery. It is an experiment, not a guaranteed breakthrough.

## Translate pressure into a better team shape

Organize around terminal artifacts and scarce dependencies, not an automatic sequence of departments. Useful worker functions include a focused repair author, independent narrow verifier, sole integrator, package producer, and one shared observer of live evidence. Assign only functions needed for this objective; one worker may perform compatible functions sequentially. A verifier must not accept its own authored changes.

Keep the orchestrator's inbox small: decision needed, blocking failure, frozen artifact, independent verdict, or integration result. Batch routine observations in the existing durable record with an agreed notice; proactively deliver anything that changes a decision. Observers consume published artifacts; they do not each poll the same expensive source or start competing runs. Prebuild independent package scaffolding while execution proceeds, but resolve final hashes after the artifact freezes.

After forming an independent approach, inspect any incumbent team's arrangement. If communication is authorized, ask once which constraint shaped its roles, which surprising tactic helped, and which failed. Adopt demonstrated mechanisms, not a charismatic account of success. Do not require a reply before execution or disturb in-flight work. Distinguish their stated rationale, your inference, and observed outcomes.

## End honestly

At the one-hour checkpoint, present delivered evidence/behavior changes, resource use, strongest counterevidence and the next plan, then ask the user for explicit permission to continue the remaining three hours; silence is not consent, and without approval no new dispatch or spending happens after the checkpoint — preserve in-flight work via safe custody, never force-kill. At the four-hour deadline, stop new dispatch and spending on this run. Do not hard-kill an atomic operation or other agents' work; use a safe checkpoint or existing bounded finish, record any wind-down beyond the deadline, and assign custody without extending Code Red. No automatic renewal; the four-hour endpoint stays anchored to the original start.

Deliver the artifact or exact partial state, immutable identity/checksums where appropriate, reproducible use instructions, observed verification, remaining blockers, resource usage (unknown where unmeasured), and owner/next action for continuing work. Separate authored, tested, independently accepted, integrated, and live-qualified claims. Never combine successful phases from different runs into a fictional complete run.

Reject ineffective process steps within delegated authority. Preserve truthfulness, access controls, actual user requirements, and binding safety/proof limits. This skill does not authorize purchases, publication, destructive actions, infrastructure changes, or waiving another authority's constraints. Use already-granted authority decisively; escalate only the exact decision that genuinely belongs elsewhere.
