# Contributing to QUARTS

:+1::tada: First off, thanks for taking the time to contribute! :tada::+1:

The following is a set of guidelines for contributing to the test suite. These are just guidelines, not rules, use your best judgment and feel free to propose changes to this document in a pull request.

#### Table Of Contents

[What should I know before I get started?](#what-should-i-know-before-i-get-started)
  * [Code of Conduct](#code-of-conduct)
  * [Technology Overview](#technology-overview)

[How Can I Contribute?](#how-can-i-contribute)
  * [Reporting Bugs](#reporting-bugs)
  * [Suggesting Enhancements](#suggesting-enhancements)
  * [Your First Code Contribution](#your-first-code-contribution)
  * [Pull Requests](#pull-requests)

[Styleguides](#styleguides)
  * [Git Commit Messages](#git-commit-messages)
  * [CoffeeScript Styleguide](#coffeescript-styleguide)
  * [Specs Styleguide](#specs-styleguide)
  * [Documentation Styleguide](#documentation-styleguide)

[Additional Notes](#additional-notes)
  * [Issue and Pull Request Labels](#issue-and-pull-request-labels)

## What should I know before I get started?

### Code of Conduct

This project adheres to the Contributor Covenant [code of conduct](CODE_OF_CONDUCT.md).
By participating, you are expected to uphold this code.
Please report unacceptable behavior to any project maintainer.

### Technology Overview

The regression test suite is based heavily on [WebdriverIO](http://webdriver.io/), [Selenium](http://www.seleniumhq.org/), [Cucumber](https://cucumber.io/), [Chai](http://chaijs.com/), and the [Page Object Pattern](http://martinfowler.com/bliki/PageObject.html). We recommend giving yourself a brief overview of these tools to better understand the mechanics and because these will be your primary resources for extending and troubleshooting the test suite.

## How Can I Contribute?

### Reporting Bugs

This section guides you through submitting a bug report. Following these guidelines helps maintainers and the community understand your report :pencil:, reproduce the behavior :computer: :computer:, and find related reports :mag_right:.

Before creating bug reports, please check [this list](#before-submitting-a-bug-report) as you might find out that you don't need to create one. When you are creating a bug report, please [include as many details as possible](#how-do-i-submit-a-good-bug-report). If you'd like, you can use [this template](#template-for-submitting-bug-reports) to structure the information.

#### Before Submitting A Bug Report

* **Check for old & existing issues.  Someone else might have had the same problem.**
* **Hit us up on slack or come talk to us! We might be able to clarify something or help resolve quick questions!**

#### How Do I Submit A (Good) Bug Report?

Bugs are tracked as [GitHub issues](https://guides.github.com/features/issues/). After you've determined which repository your bug is related to, create an issue on that repository and provide the following information.

Explain the problem and include additional details to help maintainers reproduce the problem:

* **Use a clear and descriptive title** for the issue to identify the problem.
* **Describe the exact steps which reproduce the problem** in as many details as possible. For example, start by explaining how you started the test suite, e.g. which command exactly you used in the terminal. When listing steps, **don't just say what you did, but explain how you did it and what you expected**.
* **Provide specific examples to demonstrate the steps**. Include links to files or GitHub projects, or copy/pastable snippets, which you use in those examples. If you're providing snippets in the issue, use [Markdown code blocks](https://help.github.com/articles/markdown-basics/#multiple-lines).
* **Describe the behavior you observed after following the steps** and point out what exactly is the problem with that behavior.
* **Explain which behavior you expected to see instead and why.**
* **Include screenshots and animated GIFs** which show you following the described steps and clearly demonstrate the problem.  You can use [this tool](http://www.cockos.com/licecap/) to record GIFs on OSX and Windows, and [this tool](https://github.com/colinkeenan/silentcast) or [this tool](https://github.com/GNOME/byzanz) on Linux.
* **If the problem wasn't triggered by a specific action**, describe what you were doing before the problem happened and share more information using the guidelines below.

Provide more context by answering these questions:

* **Can you reproduce the problem on a fresh copy of the test suite? (Clone to new directory and follow setup instructions)**
* **Did the problem start happening recently** (e.g. after updating to a new version) or was this always a problem?
* If the problem started happening recently, **can you reproduce the problem in an older version?** What's the most recent version in which the problem doesn't happen?
* **Can you reliably reproduce the issue?** If not, provide details about how often the problem happens and under which conditions it normally happens.

Include details about your configuration and environment:

* **Which version of node are you using?** You can get the exact version by running `node -v` and `npm -v` in your terminal.
* **What's the name and version of the OS you're using?**
* **How are you running selenium? Included standalone package? A Dockerized grid/standalone service? Are you using a remote/cloud service?**
* **If related to test failures, which browser/OS combinations are you seeing failures on?**
* **Are your problems happening locally, with the CI server, or both?**

#### Template For Submitting Bug Reports

    [Short description of problem here]

    **Reproduction Steps:**

    1. [First Step]
    2. [Second Step]
    3. [Other Steps...]

    **Expected behavior:**

    [Describe expected behavior here]

    **Observed behavior:**

    [Describe observed behavior here]

    **Screenshots and GIFs**

    [Screenshots and GIFs which follow reproduction steps to demonstrate the problem](url)

    **Environment Information**

    - **Repo Version (from package.json):** [Enter version here]
    - **Node and NPM Version:** [Enter versions here]
    - **OS and version:** [Enter OS name and version here]
    - **Test Bed:** [Enter selenium configuration, with browser/OS capabilities]

    **Additional information:**

    * Link to CI Build: [Enter link]
    * If using a customized config file, gist or link to config file: [Enter link]
    * Problem can be reliably reproduced, doesn't happen randomly: [Yes/No]
    * Problem happens with all features not only some features: [Yes/No]

    [Any Additional Comments]

### Suggesting Enhancements

This section guides you through submitting an enhancement suggestion, including completely new features and minor improvements to existing functionality. Following these guidelines helps maintainers and the community understand your suggestion :pencil: and find related suggestions :mag_right:.

Before creating enhancement suggestions, please check [this list](#before-submitting-an-enhancement-suggestion) as you might find out that you don't need to create one. When you are creating an enhancement suggestion, please [include as many details as possible](#how-do-i-submit-a-good-enhancement-suggestion). If you'd like, you can use [this template](#template-for-submitting-enhancement-suggestions) to structure the information.

#### Before Submitting An Enhancement Suggestion

* **Check the [readme file](readme.md) or the [Wiki](https://github.com/emmadev/auto-regress-test-suite/wiki)** — you might discover that the enhancement is already available. It will be documented accordingly
* **Determine if the enhancement belongs in this repository or another repository for service/integration specific enhancements. If unsure, post a question in an issue.**
* **Perform a search of enhancements** to see if the enhancement has already been suggested. If it has, add a comment to the existing issue instead of opening a new one.

#### How Do I Submit A (Good) Enhancement Suggestion?

Enhancement suggestions are tracked as [GitHub issues](https://guides.github.com/features/issues/). After you've determined which repository your enhancement suggestions is related to, create an issue on that repository and provide the following information:

* **Use a clear and descriptive title** for the issue to identify the suggestion.
* **Provide a step-by-step description of the suggested enhancement** in as many details as possible.
* **Provide specific examples to demonstrate the steps**. Include copy/pastable snippets which you use in those examples, as [Markdown code blocks](https://help.github.com/articles/markdown-basics/#multiple-lines).
* **Describe the current behavior** and **explain which behavior you expected to see instead** and why.
* **Include screenshots and animated GIFs** which help you demonstrate the steps or point out the parts of the codebase or application under test you are referring to. You can use [this tool](http://www.cockos.com/licecap/) to record GIFs on OSX and Windows, and [this tool](https://github.com/colinkeenan/silentcast) or [this tool](https://github.com/GNOME/byzanz) on Linux.
* **Explain why this enhancement would be useful** to other users.
* **If possible, include links or anecdotes to other repositories or systems where this enhancement exists.**
* **Specify which version of node, npm and the test suite you are using.**
* **Specify the name and version of the OS you're using.**
* **Specify the test bed/selenium configuration you are using**

#### Template For Submitting Enhancement Suggestions

    [Short description of suggestion]

    **Steps which explain the enhancement**

    1. [First Step]
    2. [Second Step]
    3. [Other Steps...]

    **Current and suggested behavior**

    [Describe current and suggested behavior here]

    **Why would the enhancement be useful to most users**

    [Explain why the enhancement would be useful to most users]

    [List some other links or anecdotes to other repositories or systems where this enhancement exists]

    **Screenshots and GIFs**

    ![Screenshots and GIFs which demonstrate the steps or part of test suite or application under test this enhancement relates to](url)

    **Node & NPM Version:** [Enter versions here]
    **Repository Version:** [Enter version here]
    **OS and Version:** [Enter OS name and version here]

### Your First Code Contribution

Unsure where to begin contributing? You can start by looking through `enhancement`, `bug`, and `help-wanted` issues:

* [Enhancement][enhancement] - issues which are outstanding enhancements to the test suite.
* [Bug][bug] - defects in the test suite that need to be investigated and corrected.
* [Help wanted issues][help-wanted] - issues which should be a bit more involved than standard issues.

### Pull Requests

* Include screenshots and animated GIFs in your pull request whenever possible.
* ES Lint all your files and include exclusion where necessary `npm run lint`.
* Verify the example tests and any impacted tests are working as expected
* Document new code in-line and in the readme or wiki when you can.
* End files with a newline.
* Avoid global dependencies as much as possible and prefer packaged dependencies in the `package.json`.
    * If new dependencies require additional installation or build steps upon setup, include a postInstall script in the `package.json`.
    * If new dependencies require the use of executables of binaries, add a grunt or npm task to execute them and document this in the `readme.md`.


## Styleguides

### Git Commit Messages

* Use the present tense ("Add feature" not "Added feature")
* Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
* Limit the first line to 72 characters or less
* Include a subject and a body when you can in your commit messages to describe intent.
* Reference issues and pull requests liberally
* When only changing documentation, include `[ci skip]` in the commit description
* Consider starting the commit message with an applicable emoji:
    * :art: `:art:` when improving the format/structure of the code
    * :racehorse: `:racehorse:` when improving performance
    * :non-potable_water: `:non-potable_water:` when plugging memory leaks
    * :memo: `:memo:` when writing docs
    * :penguin: `:penguin:` when fixing something on Linux
    * :apple: `:apple:` when fixing something on Mac OS
    * :checkered_flag: `:checkered_flag:` when fixing something on Windows
    * :bug: `:bug:` when fixing a bug
    * :fire: `:fire:` when removing code or files
    * :green_heart: `:green_heart:` when fixing the CI build
    * :white_check_mark: `:white_check_mark:` when adding tests
    * :lock: `:lock:` when dealing with security
    * :arrow_up: `:arrow_up:` when upgrading dependencies
    * :arrow_down: `:arrow_down:` when downgrading dependencies
    * :shirt: `:shirt:` when removing linter warnings
