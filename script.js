// ── Mobile nav toggle ──
document.getElementById('navToggle').addEventListener('click', () => {
  document.getElementById('navLinks').classList.toggle('open');
});
// Close mobile nav on link click
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('navLinks').classList.remove('open');
  });
});
// ── Scroll fade-up animation ──
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.1 }
);
document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
// ── Projects data & toggle ──
const projectsData = {
  finance: [
    {
      title: 'Options Pricing Engine',
      description: 'Built a custom Black-Scholes and binomial tree pricing engine to evaluate options contracts and identify relative mispricing across strike chains.',
    },
    {
      title: 'Portfolio Risk Dashboard',
      description: 'Designed a real-time dashboard tracking portfolio Greeks, P&L attribution, and volatility exposure across multi-leg options positions.',
    },
  ],
  quant: [
    {
      title: 'Mean Reversion Strategy',
      description: 'Developed and backtested a mean-reversion algorithm on equity pairs using z-score signals and dynamic position sizing.',
    },
    {
      title: 'Volatility Surface Modeler',
      description: 'Created a tool to construct and analyze implied volatility surfaces, detecting skew anomalies for spread trade entries.',
    },
  ],
  data: [
    {
      title: 'IRS Dataset Analysis Pipeline',
      description: 'Engineered an end-to-end data cleaning and modeling pipeline for large-scale IRS datasets, improving accuracy by 60% for housing market research.',
    },
    {
      title: 'Depreciation Risk Model',
      description: 'Built actuarial valuation models for a novel Depreciation Insurance product using survival analysis and Monte Carlo simulations.',
    },
  ],
};
let activeCategory = null;
const grid = document.getElementById('projectsGrid');
const catBtns = document.querySelectorAll('.cat-btn');
catBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const cat = btn.dataset.cat;
    // Toggle
    if (activeCategory === cat) {
      activeCategory = null;
      grid.innerHTML = '';
      catBtns.forEach(b => b.classList.remove('active'));
      return;
    }
    activeCategory = cat;
    catBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    // Render projects
    const projects = projectsData[cat];
    grid.innerHTML = projects
      .map(
        (p, i) => `
        <div class="project-card" style="animation-delay: ${i * 0.1}s">
          <h3>${p.title}</h3>
          <p>${p.description}</p>
        </div>`
      )
      .join('');
  });
});