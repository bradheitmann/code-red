# Setup and communication

Use this before the hour, especially for a first run. Installing Markdown gives
an agent instructions; it does not install a worker runtime, mailbox or scheduler.

## What you need

| Prerequisite | Verify before starting |
|---|---|
| Two lead contexts | A executes; B analyzes independently. Bind their actual recipients, not just similar display names. |
| Execution capability | A's harness and selected model support the required tools, subagent delegation and worker-result collection. A chat model alone does not provide these. |
| Finite capacity | Available lead/worker slots and a declared money/token/time budget. Shared account quotas still count; different vendors are not required. |
| Authorized inputs and proof | Repository/input identity, tool/test access, one observable objective, the same acceptance oracle, constraints and protected outside work. |
| Time and custody | A real clock, a 60-minute deadline, output/ledger location and existing integration authority. |
| Operational communication | A channel that actually reaches both chosen harnesses, reciprocal receipt probes, response bound, timeout owner and safe fallback. |

A **harness** supplies tools, instruction loading, delegation and communication.
A **provider** serves models; a **model** performs reasoning and tool calls. Selecting
a DeepSeek model, for example, does not itself supply an orchestration harness.
Verify the combination you will use. A and B may use the same vendor if capacity,
context independence and budget allow it; a separate quota pool can help conserve
A's scarce allocation.

## Pick an existing route

Native agent messaging, a compatible orchestration bus, or an existing adapter can
connect the leads. A terminal setup may use tmux with a herder adapter if already
available, cmux, or another multiplexer **plus an actual message transport**. A
multiplexer by itself gives you panes, not a mailbox or reliable wakeup.

Computer use is another possible route when authorized: re-identify the actual
recipient, protect unfinished drafts and running commands, submit through the
supported route, and inspect the resulting delivery/readback. Never type blindly
into the focused pane or press Enter over an unknown draft. Queued input may wait
for a busy harness; do not call it received.

Choose a route both harnesses can consume, including when one is busy. Record who
checks receipt/timeouts using the existing orchestrator or harness. If it cannot
wake a lead, use an already available external scheduler or an agreed human relay.
Skill text cannot guarantee wakeup. Do not spend the incident building a new daemon,
adapter or messaging tool. If no reliable route is available, report that exact
gap and keep unrelated authorized work moving; do not advertise a functioning
two-agent intervention.

## Beginner recipe

1. Obtain the canonical skill folder using the README's existing Codex/Claude Code
   installation route, the npm package, or a source checkout. Open two separate
   lead contexts and load `SKILL.md` in each. A needs the worker-capable harness;
   B needs the evidence and reasoning context, not a competing dispatcher.
2. Give both leads one brief: objective, acceptance oracle, exact inputs/repository,
   current authority, protected work, budget/slots, output path and intended hour.
   Use `assets/run-card.md`; replace example fields with real ones.
3. Assign A/B actual identities and a supported communication route. Name its
   receipt/timeout owner, a fallback route and escalation owner. Set the actionable
   response bound to the next affected decision or five minutes, whichever is
   sooner, unless a different realistic bound is agreed upfront.
4. Smoke-test the round trip **before the hour**. A sends `PROBE-A-01` directly to B;
   B replies `PROBE-A-01 received` with its identity. B sends `PROBE-B-01`; A replies
   with the matching ID. Inspect actual recipient replies, not just successful
   send calls. Check that receipt and timeout follow-through can operate while
   the leads do useful work. If the route fails, use the declared safe fallback
   once or arrange the existing relay; do not begin with an imaginary mailbox.
5. Read the actual clock, fix the hour's absolute deadline, and start the existing
   role prompts in `roles-and-messages.md`. A dispatches within real capacity;
   B sends findings proactively. Both continue independent authorized work.
6. For actionable findings, record notification ID, available delivery/readback,
   recipient receipt, A's disposition and eventual action result separately.
   At closeout, deliver verified output or honest partial state and custody.

For another harness—such as Pi, OpenCode, Goose, Crush, or a harness using a
DeepSeek-compatible provider—load or attach the same portable Markdown as task
instructions using its existing supported mechanism. Confirm delegation, model/tool
compatibility and messaging in that environment. These are generic instruction-loading
routes, **not claims of tested native installations or adapters**. This project does
not modify those harnesses. Codex/Claude Code folder instructions in the README
remain the supplied native installation routes; MCP distributes the same text and
does not execute it for the client.

## Keep the feedback loop real

Every actionable B finding gets an ID, a concise recommendation, strongest objection,
cheapest falsifier and affected decision/needed-by. Deliver it directly; a longer
artifact can accompany it. Say `updated <path>, please read <section>` and explain
the decision change. A returns ADOPT, TEST with owner/next action, REJECT with reason,
or DEFER with reason/exact checkpoint. The example in `roles-and-messages.md` shows
the complete loop.

Routine log observations may be batched without an acknowledgment ceremony. Findings
that change or block a decision must land before that decision. Neither lead may
interpret token efficiency as silence; A cannot unilaterally disable B's channel or
replace it with an unread file. B remains a thinking partner, not an approval gate
for all execution.

A send result, queue entry, transport delivery, readback, explicit receipt and a
substantive disposition are different evidence. Use the fields the transport
actually provides; mark the rest unknown. An acknowledgment does not prove the
recommended action happened.

At a missed bound, inspect an ambiguous original submission before resending. Use
the agreed safe fallback once or one concise escalation to the named owner, with
the same ID for deduplication and the unresolved decision-dependent risk. Do not
spam, overwrite drafts, force-interrupt valid runs or blanket-stop unrelated work.
Do not claim acceptance or a restored feedback loop without an actual reply/result.
