export default {
	blog_title: `AI Writes Code. <br />
I Decide What Code Should Exist.
    `,
	date: "August 2026 · revised November 2026",
	content: `
<p>
    There's a question I've been avoiding:
    <span class="bold">if AI can help me build almost anything, what exactly is my value as a programmer?</span>
</p>
<p>
    I use AI a lot when I program. I hate the idea of being a <span class="bold">"vibe coder"</span> — someone
    who accepts whatever code an AI generates and hopes it works without understanding any of it.
    And yet I rely on AI more and more, especially when I work with technologies I've never touched before.
</p>
<p>
    I ask it to explain errors. I ask it to review my code. When I don't know where to start,
    it gives me somewhere to begin. And it works.
</p>
<hr />
<h2>The pull isn't the code. It's the questions.</h2>
<p>
    What keeps me coming back isn't having AI write code for me. It's that there is almost no friction
    between having a question and getting an explanation.
</p>
<p>
    If I don't understand something, I ask. If I don't understand the answer, I ask again.
    If I want an example, I get one. Then I take what I learned and build something with it.
</p>
<p>
    That loop — hit a problem, learn the concept because I need it, apply it immediately — works better
    for me than learning theory first and wondering where I'll ever use it.
    But the better it works, the more it makes me ask what part of the work is actually mine.
</p>
<hr />
<h2>What if AI disappeared tomorrow?</h2>
<p>
    Imagine every AI coding assistant disappears tomorrow. No ChatGPT. No Copilot. No Claude.
</p>
<h3>Would I still be a programmer?</h3>
<p>
    Yes. But I'd be slower. Some afternoons would go into figuring out something an AI could have
    explained in thirty seconds.
</p>
<p>
    I wouldn't forget what I know, though. I'd still understand databases, APIs, HTTP, architecture,
    debugging and version control.
</p>
<p>
    <span class="bold">I'd lose an accelerator. I wouldn't lose everything.</span>
</p>
<hr />
<h2>Maybe writing code isn't the whole job anymore</h2>
<p>
    I used to measure programming ability by implementation: you know the language, the framework,
    the APIs, and you can turn a problem into working software by yourself.
</p>
<p>
    If AI makes implementation much cheaper, implementation alone stops being a good measure.
    Knowing how to code doesn't become useless. The value moves somewhere else:
</p>
<p>
    Can I understand the problem I'm actually solving?<br />
    Can I decide what architecture makes sense?<br />
    Can I tell when an AI-generated solution is too complicated, or simply wrong?<br />
    Can I see the security implications?<br />
    Can I test it, and maintain it six months later?<br />
    Can I explain to another person why the system works the way it does?<br />
</p>
<p>
    And most importantly: <span class="bold">can I take responsibility for the software I ship?</span>
</p>
<hr />
<h2>Using AI is not the same as depending on it</h2>
<p>
    I don't want to refuse AI because <span class="italic">"real programmers don't need it."</span>
    Software has always been built on tools and abstractions other people made — operating systems,
    compilers, frameworks, databases. Nobody writes their own kernel to prove they're a real developer.
</p>
<p>
    Tools change. Technologies change. Being flexible about them has always been part of the job.
</p>
<p>
    But I also don't want to become a "vibe coder" who refuses to learn the concepts behind the code because
    <span class="italic">"why bother when AI can do everything for me."</span>
    Neither extreme makes sense to me.
</p>
<p>
    And there is one difference that matters. A compiler or a framework does the same thing every time,
    and it is rarely wrong. <span class="bold">An LLM is not deterministic.</span> It can give a different
    answer to the same question, and it can be confidently wrong.
</p>
<p>
    That's why I can't treat AI like any other abstraction. With a framework, I can trust the layer
    underneath and learn its limits once. With AI, I have to check the output every single time —
    and I can only check what I understand.
</p>
<p>
    I don't want AI to become a substitute for understanding.
    <span class="bold">There's a difference between using AI to accelerate my ability and outsourcing my ability to AI.</span>
</p>
<p>
    So the line I draw is this: if AI gives me code I don't understand, I understand it before I ship it.
    If it suggests an architecture, I want to know why. If it fixes a bug, I want to know what was actually wrong.
</p>
<h3>I prefer not to be <span class="bold">"blind"</span>.</h3>
<p>
    If AI is driving, I still want to know where we're going.
</p>
<hr />
<h2>What this looks like in practice</h2>
<p>
    My biggest project right now is an LLM platform built with Python, LangGraph, FastAPI and React.
    I build it with Claude Code. Instead of hoping the AI behaves, I wrote down a working agreement it
    has to follow — and every rule in it came from a decision only I could make:
</p>
<p>
    <span class="bold">Every change ships with tests.</span> AI produces code fast, so the tests are
    how I keep up with what it produced.<br />
    <span class="bold">The production database is permanent.</span> Every table change has to be a
    numbered migration that works on a database already holding real data.<br />
    <span class="bold">At a fork, stop and ask.</span> Any choice that changes what a user sees, or what a
    deployment does by default, is mine — even in the middle of a task.<br />
    <span class="bold">Doubt before you agree.</span> I told the AI to question my decisions instead of
    agreeing with me, because better choices come out of the argument.
</p>
<p>
    One of those rules exists because of a specific session. The AI reported a fix, but on my side no
    change showed up. From where I sat, it had claimed a fix without touching anything. The edits turned
    out to be real — but I couldn't see them, so I couldn't trust them. Since then, every change has to
    appear as a diff I can actually review.
</p>
<p>
    None of those rules are about writing code. They're about knowing what has to be true before code
    is allowed to ship. That part doesn't come from the AI.
</p>
<hr />
<h2>And then there's the funny part</h2>
<p>
    I used AI to help me write — and later edit — an article about my doubts about AI.
    I asked the thing I'm questioning to help me question it.
</p>
<p>
    But I think that proves the point. AI helped me structure the argument and pointed out where it was weak.
    It doesn't know what it feels like to sit at my desk and wonder whether my skills are becoming less valuable.
    And every sentence here is one I reviewed and decided to keep.
</p>
<h3>That part is mine.</h3>
<hr />
<h2>So, what exactly is my value?</h2>
<p>
    I don't think my value is how quickly I can produce code anymore. Maybe it never was.
</p>
<p>
    It's understanding what needs to be built. Knowing what shouldn't be built. Seeing the trade-offs,
    recognizing bad solutions, learning unfamiliar technology when I need it, and debugging when
    everything goes wrong.
</p>
<h3>And being responsible for the result.</h3>
<p>
    AI can help with all of that. It can even challenge my assumptions — and that's fine.
</p>
<h3>
    I don't want to compete with AI at writing code.<br />
    I want to be the person who knows what code should be written in the first place.
</h3>
    `,
};
