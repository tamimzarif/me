/* ══════════════════════════════════════════
   main.js — Portfolio Interactivity v3
   Zarif Tahmid Tamim
══════════════════════════════════════════ */

/* ── LOADER ── */
(function(){
  const steps = [
    '<span class="lc">$</span> ./boot.sh --init-portfolio',
    '<span class="lc">✔</span> Loading security modules...',
    '<span class="lc">✔</span> Fetching CTF database...',
    '<span class="lc">✔</span> Decrypting achievements...',
  ];
  const fill  = document.getElementById("ldFill");
  const ready = document.getElementById("ldReady");
  const loader = document.getElementById("loader");
  let i = 0;
  function next(){
    if(i < steps.length){
      const el = document.getElementById("l"+(i+1));
      if(el) el.innerHTML = steps[i];
      fill.style.width = ((i+1)/steps.length * 85) + "%";
      i++; setTimeout(next, 460);
    } else {
      fill.style.width = "100%";
      ready.classList.add("on");
      setTimeout(() => loader.classList.add("done"), 550);
    }
  }
  setTimeout(next, 300);
})();

/* ── MATRIX CANVAS ── */
(function(){
  const c = document.getElementById("mx");
  if(!c) return;
  const ctx = c.getContext("2d");
  let W, H, cols, drops;
  const chars = "01アイウエオカキクケコABCDEF0110</>{}[]#@!$%^";
  function resize(){ W=c.width=c.offsetWidth; H=c.height=c.offsetHeight; cols=Math.floor(W/14); drops=Array(cols).fill(1); }
  resize();
  window.addEventListener("resize", resize);
  setInterval(()=>{
    ctx.fillStyle="rgba(6,12,24,.06)";
    ctx.fillRect(0,0,W,H);
    ctx.font="13px JetBrains Mono,monospace";
    drops.forEach((y,i)=>{
      const ch=chars[Math.floor(Math.random()*chars.length)];
      ctx.fillStyle = i%5===0?"#00cfff28":"#00e87a25";
      ctx.fillText(ch,i*14,y*14);
      if(y*14>H && Math.random()>.975) drops[i]=0;
      drops[i]++;
    });
  }, 55);
})();

/* ── CURSOR ── */
const cDot  = document.getElementById("cDot");
const cRing = document.getElementById("cRing");
if(cDot && cRing){
  document.addEventListener("mousemove", e=>{ cDot.style.left=cRing.style.left=e.clientX+"px"; cDot.style.top=cRing.style.top=e.clientY+"px"; });
  document.querySelectorAll("a,button,.ars-c,.os-c,.sk-c,.ctf-c,.ac,.blog-c").forEach(el=>{
    el.addEventListener("mouseenter", ()=>cRing.classList.add("big"));
    el.addEventListener("mouseleave", ()=>cRing.classList.remove("big"));
  });
}

/* ── THEME ── */
const body      = document.getElementById("body");
const themeBtn  = document.getElementById("themeBtn");
function setTheme(light){
  body.classList.toggle("light", light);
  localStorage.setItem("ztt_theme", light?"light":"dark");
}
setTheme(localStorage.getItem("ztt_theme")==="light");
themeBtn.addEventListener("click", ()=>{ setTheme(!body.classList.contains("light")); showToast(body.classList.contains("light")?"☀️ Light mode":"🌑 Dark mode"); });

/* ── NAV ── */
const navbar  = document.getElementById("navbar");
const navLinks = document.getElementById("navLinks");
const burger   = document.getElementById("burger");

burger.addEventListener("click", ()=>{
  const open = navLinks.classList.toggle("open");
  burger.classList.toggle("open", open);
  burger.setAttribute("aria-expanded", open);
});
navLinks.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{ navLinks.classList.remove("open"); burger.classList.remove("open"); }));

window.addEventListener("scroll", ()=>{
  navbar.classList.toggle("scrolled", window.scrollY > 10);
  const secs = document.querySelectorAll("section[id]");
  let cur="";
  secs.forEach(s=>{ if(window.scrollY >= s.offsetTop-100) cur=s.id; });
  navLinks.querySelectorAll("a").forEach(a=>{ a.classList.toggle("active", a.getAttribute("href")==="#"+cur); });
}, {passive:true});

/* ── TYPING ── */
const roles = ["Bug Bounty Hunter 🐛","CTF Player 🏴","OSINT Analyst 🔍","Digital Forensics 🔬","Penetration Tester ⚔️","Web Security Researcher 🌐","CSE Student 🎓"];
let ri=0,ci=0,del=false;
const roleOut = document.getElementById("roleOut");
function type(){
  if(!roleOut) return;
  const cur=roles[ri];
  if(!del){ roleOut.textContent=cur.slice(0,++ci); if(ci===cur.length){del=true;setTimeout(type,2200);return;} }
  else    { roleOut.textContent=cur.slice(0,--ci); if(ci===0){del=false;ri=(ri+1)%roles.length;} }
  setTimeout(type, del?45:75);
}
setTimeout(type, 1800);

/* ── COUNTER ── */
let countersDone=false;
function runCounters(){
  if(countersDone) return;
  countersDone=true;
  document.querySelectorAll(".hc-num[data-n]").forEach(el=>{
    const target=parseInt(el.dataset.n), step=Math.ceil(target/40);
    let cur=0;
    const t=setInterval(()=>{ cur=Math.min(cur+step,target); el.textContent=cur+"+"; if(cur>=target){el.textContent=target+"+";clearInterval(t);} },40);
  });
}

/* ── RENDER ── */
function renderSkills(){
  const g=document.getElementById("skillsGrid"); if(!g) return;
  g.innerHTML = PORTFOLIO_DATA.skills.map(s=>`
    <div class="sk-c rv">
      <div class="sk-h"><div class="sk-n"><i class="${s.icon}"></i>${s.name}</div><span class="sk-p">${s.pct}%</span></div>
      <div class="sk-bar"><div class="sk-fill" data-p="${s.pct}"></div></div>
      <div class="sk-note">${s.note}</div>
    </div>`).join("");
}

function renderCTF(){
  const g=document.getElementById("ctfGrid"); if(!g) return;
  g.innerHTML = PORTFOLIO_DATA.ctf.map(c=>`
    <div class="ctf-c rv">
      <span class="ctf-rank ${c.rankClass}">${c.rank}</span>
      <div class="ctf-ico">${c.icon}</div>
      <h4>${c.name}</h4>
      <p>${c.description}</p>
      <div class="ctf-tags">${c.tags.map(t=>`<span>${t}</span>`).join("")}</div>
    </div>`).join("");
}

function renderAch(){
  const l=document.getElementById("achList"); if(!l) return;
  l.innerHTML = PORTFOLIO_DATA.achievements.map(a=>`
    <div class="ach-i rv">
      <div class="ach-em">${a.icon}</div>
      <div class="ach-bd"><h4>${a.title}</h4><p>${a.description}</p></div>
      <span class="ach-dt">${a.date}</span>
    </div>`).join("");
}

function renderCourses(){
  const g=document.getElementById("coursesGrid"); if(!g) return;
  g.innerHTML = PORTFOLIO_DATA.courses.map(c=>`
    <div class="cr-c rv">
      <div class="cr-plt">${c.platform}</div>
      <h4>${c.name}</h4>
      <p>${c.description}</p>
      <span class="cr-tag">${c.tag}</span>
    </div>`).join("");
}

function renderBlogPreview(){
  const g=document.getElementById("blogPreview"); if(!g) return;
  const posts = PORTFOLIO_DATA.blog.slice(0,3);
  g.innerHTML = posts.map(p=>`
    <div class="blog-c rv">
      <div class="blog-img">${p.emoji}</div>
      <div class="blog-body">
        <div class="blog-meta">
          <span class="blog-cat ${p.catClass}">${p.category}</span>
          <span class="blog-date">${p.date}</span>
        </div>
        <h3>${p.title}</h3>
        <p>${p.excerpt}</p>
        <div class="blog-foot">
          <span class="blog-read"><i class="fas fa-clock"></i> ${p.readTime}</span>
          <a href="${p.slug}" class="blog-lnk">Read More <i class="fas fa-arrow-right"></i></a>
        </div>
      </div>
    </div>`).join("");
}

/* ── REVEAL ── */
const ro = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(!e.isIntersecting) return;
    e.target.classList.add("on");
    e.target.querySelectorAll(".sk-fill").forEach(b=>{ b.style.width=b.dataset.p+"%"; });
    if(e.target.classList.contains("hero-counts")) runCounters();
    ro.unobserve(e.target);
  });
},{threshold:.12});

function initReveal(){
  document.querySelectorAll(".os-c,.ars-c,.ac,.ct-a,.ct-form,.ct-left,.about-term,.about-info,.hero-counts,.ft-top").forEach(el=>el.classList.add("rv"));
  requestAnimationFrame(()=>{ document.querySelectorAll(".rv").forEach(el=>ro.observe(el)); });
}

/* ── COFFEE MODAL ── */
const coffeeModal = document.getElementById("coffeeModal");
function openCoffee(e){ if(e) e.preventDefault(); coffeeModal.classList.add("open"); }
document.getElementById("coffeeBtn").addEventListener("click", openCoffee);
const cfBtn2 = document.getElementById("coffeeFooterBtn");
if(cfBtn2) cfBtn2.addEventListener("click", openCoffee);
document.getElementById("coffeeClose").addEventListener("click", ()=>coffeeModal.classList.remove("open"));
coffeeModal.addEventListener("click", e=>{ if(e.target===coffeeModal) coffeeModal.classList.remove("open"); });
document.addEventListener("keydown", e=>{ if(e.key==="Escape") coffeeModal.classList.remove("open"); });

/* ── CONTACT FORM ── */
document.getElementById("contactForm").addEventListener("submit", e=>{
  e.preventDefault();
  const name  = document.getElementById("fn").value.trim();
  const email = document.getElementById("fe").value.trim();
  const msg   = document.getElementById("fm").value.trim();
  const note  = document.getElementById("formNote");
  if(!name||!email||!msg){ note.textContent="⚠️ Please fill in all required fields."; note.style.color="var(--red)"; return; }
  // Save to admin feedback inbox
  try {
    const fb = JSON.parse(localStorage.getItem("ztt_feedback")||"[]");
    fb.push({
      name, email,
      topic: document.getElementById("ft").value,
      message: msg,
      feedback: document.getElementById("fr").value.trim(),
      date: new Date().toLocaleString("en-GB",{day:"2-digit",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit"}),
      isNew: true
    });
    localStorage.setItem("ztt_feedback", JSON.stringify(fb));
  } catch(e){}
  note.style.color="var(--grn)";
  note.textContent=`✔ Message received, ${name}! I'll get back to you within 24h.`;
  document.getElementById("contactForm").reset();
  showToast("📨 Message sent! Talk soon.");
  setTimeout(()=>note.textContent="", 6000);
});

/* ── PDF ── */
document.getElementById("pdfBtn").addEventListener("click", ()=>{ showToast("📄 Opening print dialog..."); setTimeout(()=>window.print(), 400); });

/* ── TOAST ── */
function showToast(msg, ms=3000){
  const t=document.getElementById("toast");
  t.textContent=msg; t.classList.add("show");
  setTimeout(()=>t.classList.remove("show"), ms);
}

/* ── YEAR ── */
document.getElementById("yr").textContent = new Date().getFullYear();

/* ── INIT ── */
renderSkills();
renderCTF();
renderAch();
renderCourses();
renderBlogPreview();
initReveal();
