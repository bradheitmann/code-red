# Casebook: mechanisms, not hero myths

These cases illustrate thinking patterns. They are not trials of Code Red and do not establish its effectiveness. Translations into agent workflows are our interpretations.

## Unix pipes: make composition the interface

Bell Labs' history describes McIlroy's persistent proposal for connecting streams, followed by Thompson's implementation of pipes, shell notation, and adaptations to utilities. Small existing programs could then be composed without a new monolith for every task.

**Move:** try existing tools connected by a stable interface before authoring a new framework. **Limit:** the compatible tool ecosystem and stream semantics matter; not every stateful problem is a pipeline.

Sources: [Bell Labs history](https://www.nokia.com/bell-labs/unix-history/sohedid.html), [McIlroy's Research UNIX Reader](https://www.cs.dartmouth.edu/~doug/reader.pdf).

## Git: change the collaboration substrate

Git emerged after the Linux community's free use of BitKeeper ended in 2005. Its goals included speed, distributed operation, nonlinear development, and large-project support.

**Move:** ask whether the coordination bottleneck comes from the shared representation itself. Local commits and content identity can remove some central coordination needs. **Limit:** integration conflicts and authority decisions still exist; distributing storage does not eliminate them.

Source: [Pro Git history](https://git-scm.com/book/en/v2/Getting-Started-A-Short-History-of-Git.html).

## Delta debugging: subtract while keeping the failure

Zeller and Hildebrandt reported reducing a Mozilla crash case from 95 actions to three and its HTML input from 896 lines to one.

**Move:** automate removal of irrelevant conditions while keeping a precise failure predicate. **Limit:** a smaller reproducer is not necessarily a unique causal explanation, and it does not replace full acceptance testing.

Source: [Simplifying and Isolating Failure-Inducing Input](https://issta16.cispa.saarland/papers/tse2002/).

## SQLite TH3: move the test boundary

SQLite documents that its Tcl-based tests were difficult to run on Symbian. A portable C harness against published interfaces addressed that environment constraint; TH3 evolved into a high-coverage test system.

**Move:** preserve the acceptance property while changing the testing mechanism or boundary. **Limit:** a replacement harness needs evidence of adequacy; coverage alone is not correctness. TH3 itself is proprietary, and no TH3 material is bundled here.

Sources: [TH3](https://sqlite.org/th3.html), [SQLite testing](https://www.sqlite.org/testing.html).

## Android: prevent new debt without a universal rewrite

Google's 2024 account describes prioritizing memory-safe languages for new native development rather than rewriting the mature codebase wholesale.

**Move:** change the inflow creating the problem while useful existing work continues. **Limit:** reported vulnerability trends have multiple causes; language choice does not fix every defect or prove that an existing component is safe.

Source: [Google Security Blog](https://security.googleblog.com/2024/09/eliminating-memory-safety-vulnerabilities-Android.html).

## Apollo lunar-orbit rendezvous: remove mass from the hard leg

NASA selected lunar-orbit rendezvous in 1962: a specialized small craft would descend to the Moon while the command module remained in orbit. John Houbolt was a key advocate, not the sole originator.

**Move:** identify what actually must cross the expensive boundary. Leave unrelated work outside it. **Limit:** the architecture moved risk into rendezvous and specialized hardware; it did not make the mission simple.

Source: [NASA's decision history](https://www.nasa.gov/history/60-years-ago-nasa-decides-on-lunar-orbit-rendezvous-for-moon-landing/).

## Apollo 13: recombine available assets

NASA's account of the carbon-dioxide adapter describes a ground-developed and tested arrangement that allowed available command-module canisters to work with the lunar-module system.

**Move:** inventory what already works, including components designed for another role; build the smallest compatibility bridge. **Limit:** improvisation still needed testing against the physical survival requirement.

Source: [NASA's adapter account](https://www.nasa.gov/image-article/apollo-13-crew-installing-mail-box-purging-carbon-dioxide-from-lunar-module-april-14-1970/).

## Cannae: concentration can create exposure

Polybius describes the Roman advance into Hannibal's yielding center and the subsequent attacks on Roman flanks at Cannae in 216 BCE.

**Move:** investigate what becomes exposed or unnecessary when all effort concentrates on the obvious obstruction. **Limit:** this is an analogy from an ancient battle account; software dependencies are not armies, and envelopment is not a universal recipe.

Source: [Polybius, Histories III](https://sourcebooks.web.fordham.edu/ancient/polybius-cannae.asp).

## Vicksburg: change the approach to the objective

Grant's 1863 campaign crossed the Mississippi south of Vicksburg and moved inland before returning against the city. The campaign combined maneuver with eventual siege.

**Move:** stop treating the most obvious defended approach as the only route. Investigate the dependencies supporting the obstruction. **Limit:** Vicksburg was not won by a magical bypass without logistics, combat, or a siege. This is a strategic analogy, not an identification of every remembered Civil War anecdote.

Sources: [U.S. Navy history](https://www.history.navy.mil/browse-by-topic/wars-conflicts-and-operations/civil-war/cw-operations-and-engagements/1863-civil-war/vicksburg.html), [National Park Service](https://www.nps.gov/vick/learn/historyculture/inland.htm).

## Toyota: pull useful output through the system

Toyota's history describes replenishment and just-in-time practices that linked production to downstream need.

**Move:** organize workers around a deliverable that can be consumed, rather than maximizing their individual utilization. Stop creating inventory of unintegrated artifacts. **Limit:** low buffers and tight coupling can increase vulnerability to disruption; flow requires reliable feedback.

Source: [Toyota production-system history](https://www.toyota-global.com/company/history_of_toyota/75years/common/pdf/production_system.pdf).

## Fosbury: change the geometry

Dick Fosbury's back-first high-jump technique became famous at the 1968 Olympics. Landing technology mattered, and parallel development by other athletes complicates lone-genius stories.

**Move:** revisit a convention after its underlying environment changes. **Limit:** the alternative must be feasible and safe in the actual environment, not merely imaginable.

Source: [World Athletics](https://worldathletics.org/heritage/news/dick-fosbury-flop).
