import Planner from "@/components/Planner";

export default function Home() {
  return (
    <>
      <header>
        <div className="wrap">
          <nav>
            <a className="logo" href="#">Fermor<i /></a>
            <div className="links">
              <a href="#how">What we do</a>
              <a href="#plan">Plan ahead</a>
              <a href="#steps">Getting started</a>
            </div>
            <a className="btn sm" href="#start">Get started</a>
          </nav>
        </div>
      </header>

      <main>
        <div className="wrap hero">
          <div>
            <div className="eyebrow">Personal finance, simplified</div>
            <h1>Understand your money. Then <em>do</em> something with it.</h1>
            <p className="lead">
              Fermor brings your spending, savings and goals into one calm view, and tells you
              the next sensible step, in plain language.
            </p>
            <div className="cta">
              <a className="btn" href="#start">Get early access</a>
              <a className="btn ghost" href="#plan">Try the planner</a>
            </div>
            <div className="note">Free to start. No jargon, no hidden fees.</div>
          </div>

          <div className="panel" aria-label="Product preview">
            <small>This month</small>
            <div className="big">₹18,400</div>
            <div className="up">↑ ₹4,200 more saved than last month</div>
            <div className="bars" aria-hidden="true">
              {[40, 55, 48, 70, 62, 100].map((h, i) => <span key={i} style={{ height: `${h}%` }} />)}
            </div>
            <div className="row"><span>Emergency fund</span><span className="tag">72% there</span></div>
            <div className="row"><span>Dining out</span><span className="tag w">Over by ₹900</span></div>
            <div className="row"><span>Next step</span><span>Move ₹5,000 to savings</span></div>
          </div>
        </div>

        <section id="how">
          <div className="wrap">
            <div className="eyebrow">What Fermor does</div>
            <h2>Three things, done properly</h2>
            <p className="sub">Most finance apps show you numbers. Fermor is built around what you do with them.</p>
            <div className="three">
              <div className="card"><div className="n">01</div><h3>Understand</h3><p>See where money comes from and where it goes, grouped the way you actually think about it.</p></div>
              <div className="card"><div className="n">02</div><h3>Act</h3><p>Get one clear suggestion at a time: pay this down, move that over, trim this subscription.</p></div>
              <div className="card"><div className="n">03</div><h3>Grow</h3><p>Set goals, watch them take shape, and see how small changes compound over the years.</p></div>
            </div>
          </div>
        </section>

        <section id="plan">
          <div className="wrap">
            <div className="eyebrow">Plan ahead</div>
            <h2>See what a small habit becomes</h2>
            <p className="sub">Move the sliders. This is the kind of clarity Fermor gives you about your own numbers.</p>
            <Planner />
          </div>
        </section>

        <section id="steps">
          <div className="wrap">
            <div className="eyebrow">Getting started</div>
            <h2>Set up in a few minutes</h2>
            <div className="steps">
              <div><span>1</span><h3>Connect</h3><p>Link your accounts securely, or add things by hand if you prefer.</p></div>
              <div><span>2</span><h3>Tell us your goals</h3><p>A home, a safety net, early retirement. Whatever matters to you.</p></div>
              <div><span>3</span><h3>Follow the plan</h3><p>Fermor keeps it current and nudges you when something needs attention.</p></div>
            </div>
          </div>
        </section>

        <section id="start">
          <div className="wrap">
            <div className="cta-band">
              <h2>Finance that finally makes sense</h2>
              <p>Join the early access list and be first to try Fermor.</p>
              <a className="btn" href="#">Get early access</a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap">
          <span>© 2026 Fermor. All rights reserved.</span>
          <span>Fermor provides information, not financial advice.</span>
        </div>
      </footer>
    </>
  );
}
