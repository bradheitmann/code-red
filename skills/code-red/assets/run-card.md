# Code Red run

Objective / acceptance oracle:
Start (absolute, timezone):
Deadline (start + 4 hours; never reset):
One-hour permission checkpoint (absolute; present evidence, ask to continue):
  asked at / user answer / by whom:
Current observation / source and input identity:
Required constraints / existing authority:
Fallback (explicitly partial if original objective unmet):

A / B identities / authorized communication transport:
Reciprocal probe IDs and explicit recipient acknowledgments:
Actionable-response bound (default next affected decision or 5 min, earlier):
Receipt/timeout owner and existing wakeup mechanism:
Safe fallback route / escalation owner / one fallback at the bound:
Worker ceiling / harness slots / constrained resources:
Money or token limits / per-worker bounds / closeout reserve:
Outside in-flight owners, occupied resources, existing landing routes:
Existing evidence and task ledger:

## Decisions and worker results

Record only meaningful changes: timestamp; hypothesis; owner; bounded action;
artifact/evidence; falsifier; actual result; next action. Record the blind
subtraction experiment here. Reuse the existing worker ledger rather than
maintaining another queue.

For each actionable finding: ID; actual recipient; concise recommendation,
objection and cheapest falsifier; affected decision/needed-by; durable pointer;
direct notification submission; available delivery/readback; explicit receipt;
A disposition ADOPT / TEST(owner, next action) / REJECT(reason) /
DEFER(reason, exact checkpoint); actual action result separately.
Unknown delivery/read fields stay unknown. A saved file or queue acceptance is
not receipt. Batch routine notices; do not silence decision-changing findings.
At a missed bound, inspect ambiguous submission before one safe fallback or
named-owner escalation; deduplicate the ID and continue unrelated work.

## Workers, revisions and liveness

Per worker: task ID; instruction revision (`REV <n> SUPERSEDES <n-1>`); evidence
pointer; expected artifact/phase and expected-by; owner; process handle or wait
target; applied revision reported (yes/no).

Liveness checkpoint per worker:
`LIVE <task-id> — phase <artifact|phase> expected by <hh:mm>; owner; wait <handle>; evidence <path>`

## Closeout

Outcome: achieved / partial / blocked
Artifact identity and use command:
Author tests / independent verification / integration / live qualification:
Elapsed time and actual cost (or unknown):
Remaining work, custody, exact next action:
Safe wind-down beyond deadline, if any:
