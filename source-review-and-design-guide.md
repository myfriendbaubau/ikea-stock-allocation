# Source review, sample rewrite and design rationale

These are AI-assisted learning materials supplied in response to the student's request. The sample rewrite and design rationale describe the assistant's work. They are not evidence that the student independently read, wrote or designed these elements.

## Priority sources

### 1 Ingka Group on demand sensing

https://www.ingka.com/newsroom/ikea-uses-demand-sensing-to-improve-the-customer-offering/

Best starting point for establishing IKEA's existing capability and defining what the proposal adds. Check the reported 5% improvement in Portugal and whether the release specifies the underlying accuracy metric. Do not transfer that result into a promised saving for this proposal.

### 2 Fildes, Ma and Kolassa on retail forecasting

Fildes, R., Ma, S., & Kolassa, S. (2022). Retail forecasting: Research and practice. International Journal of Forecasting, 38(4), 1283–1318. https://doi.org/10.1016/j.ijforecast.2019.06.004

Author repository: https://eprints.lancs.ac.uk/id/eprint/141453/

Useful academic support for the forecasting problem and comparing methods. Explain why a simple baseline is necessary and what limits the transfer of findings between retail categories. Read the relevant text rather than attributing a claim from a summary to the full paper.

### 3 Schuh and colleagues on maturity

Schuh, G., Anderl, R., Dumitrescu, R., Krüger, A., & ten Hompel, M. (Eds.). (2020). Industrie 4.0 maturity index: Managing the digital transformation of companies. acatech.

https://www.acatech.de/wp-content/uploads/2020/04/aca_STU_MatInd_2020_en_Web.pdf

Use the development stages and application guidance to explain the customised model. Compare the original six stages with the project's five retail-specific levels. Identify the evidence needed to assess a real pilot rather than inventing an IKEA score.

### 4 De Giovanni on blockchain coordination

De Giovanni, P. (2021). Smart contracts and blockchain for supply chain quality management. In Dynamic quality models and games in digital supply chains (pp. 91–110). Springer.

https://doi.org/10.1007/978-3-030-66537-1_5

Useful for critically examining coordination and contractual incentives. The chapter's food-sector context limits direct transfer to furniture retail. State if only the public abstract was available. Explain why an internal pilot might use a conventional database and when a shared ledger would add value.

## AI-assisted sample rewrite

This passage replaces the opening discussion of the proposal's problem definition in the revised website. It remains AI-authored until the student creates a substantive independent adaptation.

> Product availability depends on where stock sits and when it can reach a customer. This project proposes decision support for a small group of IKEA retail locations operated by Ingka Group. The system would flag a likely shortage, identify a possible donor and explain the cost of moving stock. A planner would approve a transfer only after checking local commitments and delivery timing.
>
> IKEA already uses AI demand sensing to support product planning (Ingka Group, 2023). The proposed contribution is to connect a demand warning with a feasible response. A forecast alone cannot show whether the donor can spare the product or whether a transfer will arrive soon enough. The pilot should test those constraints alongside service and total handling cost.

Read the source, identify a claim you accept or challenge and write a version that reflects your own understanding. Retain the citation. Merely changing synonyms does not demonstrate independent analysis.

## Design decisions made by the assistant

| Assistant choice | Reason | Trade-off and check |
| --- | --- | --- |
| Off-white background with navy text and a limited yellow accent | Create a readable research page with a visual relationship to the subject, without copying IKEA's logo or claiming affiliation | Contrast and clear text labels matter more than brand resemblance |
| One page with labelled navigation sections | Keep the problem, analysis, demo and evidence in one traceable argument | The page is long, so headings and anchor links must work on phones |
| Visible simulated-data labels and disclosed formulas | Help visitors distinguish a teaching demonstration from a live company system | Disclosure takes space, but prevents unsupported claims about AI or commercial results |
| Scenario buttons alongside adjustable inputs | Let a viewer compare a demand surge, late arrival and limited donor stock | Examples simplify reality, so the assumptions remain visible |
| Five evidence dimensions with no invented company score | Make the maturity model useful for planning a real assessment | The model cannot claim to measure current IKEA readiness without internal evidence |
| Printed page styles and a dated PDF capture | Support the assessment's website-plus-PDF submission | The PDF cannot reproduce interaction and needs recapturing on submission day |

These are the assistant's original design choices. A personal contribution record should identify which choice you reviewed, changed or rejected and why.

## Understanding the code before changing it

index.html contains the research and interface. styles.css controls layout. app.mjs connects inputs and buttons to the model. model.mjs calculates the recommendation.

The model estimates demand, calculates the gap, protects donor stock, checks timing and capacity, then compares fictional costs with protected contribution. The default scenario produces 11.2 units/day, a rounded seven-day need of 79 units and a 37-unit gap from local stock of 42. The donor retains 35 of its 90 units.

Choose a meaningful edit you can predict and explain. Keep the actual before/after code and test result. Ask for help where needed and record that help. This guide does not claim that you have already made a code change.
