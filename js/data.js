/* ══════════════════════════════════════════
   data.js — All editable portfolio content
   Admin panel saves to localStorage.
   This file provides default fallback data.
══════════════════════════════════════════ */

const _DEFAULT_PORTFOLIO_DATA = {

  skills: [
    { name:"C",               icon:"fas fa-copyright",      pct:80,  note:"Pointers, memory management, data structures, low-level systems." },
    { name:"C++",             icon:"fas fa-layer-group",    pct:80,  note:"OOP, STL, templates, competitive programming." },
    { name:"HTML & CSS",      icon:"fab fa-html5",          pct:100, note:"Full mastery — semantic HTML5, CSS3, Flexbox, Grid, animations." },
    { name:"JavaScript",      icon:"fab fa-js",             pct:40,  note:"DOM, events, fetch API, async/await. Actively leveling up." },
    { name:"Python",          icon:"fab fa-python",         pct:30,  note:"Scripting, automation, exploit dev tooling." },
    { name:"Bash / Shell",    icon:"fas fa-terminal",       pct:70,  note:"Scripting, automation, system administration." },
    { name:"Web Security",    icon:"fas fa-shield-virus",   pct:75,  note:"XSS, SQLi, CSRF, SSRF, IDOR, RCE — full OWASP Top 10." },
    { name:"Network Security",icon:"fas fa-network-wired",  pct:65,  note:"Packet analysis, traffic inspection, protocol security." },
    { name:"OSINT",           icon:"fas fa-search",         pct:70,  note:"Username recon, email tracing, geolocation, social media intel." },
    { name:"Digital Forensics",icon:"fas fa-microscope",    pct:60,  note:"Memory dumps, disk forensics, log analysis, PCAP forensics." },
    { name:"Pentesting",      icon:"fas fa-crosshairs",     pct:70,  note:"Metasploit, Burp Suite, Nmap — full pentest lifecycle." },
    { name:"Linux",           icon:"fab fa-linux",          pct:85,  note:"Kali, Parrot, Tails. Scripting, hardening, advanced tooling." }
  ],

  ctf: [
    { icon:"🏴", name:"PicoCTF 2024",          description:"Carnegie Mellon's premier CTF. Solved Web, Crypto, Forensics and Binary challenges.",                       tags:["Web","Crypto","Forensics","Binary"], rank:"Top 25%",  rankClass:"rank-silver" },
    { icon:"🔐", name:"HackTheBox",            description:"Actively solving machines and challenges. Focus on Web, OSINT, and Forensics tracks.",                      tags:["Web","OSINT","Forensics","Linux"],   rank:"Active",   rankClass:"rank-win"    },
    { icon:"🎯", name:"TryHackMe",             description:"Completed 50+ rooms covering OSINT, Forensics, Pentesting fundamentals and CTF challenges.",               tags:["OSINT","Pentest","Forensics","Web"], rank:"Top 10%",  rankClass:"rank-gold"   },
    { icon:"🔍", name:"CSE Fest CTF",          description:"University-level CTF. Solved web exploitation and forensics challenges. Placed top 3.",                    tags:["Web","Forensics","Misc"],            rank:"Winner",   rankClass:"rank-gold"   },
    { icon:"🌐", name:"CyberDefenders",        description:"Blue team DFIR challenges — network forensics, threat hunting, and malware analysis.",                     tags:["DFIR","Malware","Network"],          rank:"Active",   rankClass:"rank-win"    },
    { icon:"⚡", name:"PortSwigger Web Academy",description:"Completed 80+ Web Security Academy labs covering OWASP Top 10 and advanced web vulnerabilities.",          tags:["XSS","SQLi","SSRF","IDOR","XXE"],    rank:"80+ Labs", rankClass:"rank-silver" }
  ],

  achievements: [
    { icon:"🐛", title:"First Bug Bounty Accepted",          description:"Responsible disclosure of an XSS vulnerability. Acknowledged by the program's security team.", date:"2024" },
    { icon:"🏆", title:"CTF University Champion",            description:"1st place in university Capture The Flag — Web & Forensics categories.",                        date:"2024" },
    { icon:"🎓", title:"Dean's List — 3rd Semester",         description:"Top academic standing in the CSE department.",                                                   date:"2024" },
    { icon:"🔐", title:"Full Pentest Lab Built",             description:"Isolated virtual lab with Kali, Metasploitable, DVWA, VulnHub machines for hands-on practice.", date:"2023" },
    { icon:"🌐", title:"3 Client Websites Delivered",        description:"Responsive, SEO-optimized websites with web security hardening for local clients.",              date:"2023" },
    { icon:"🔍", title:"OSINT Mega-Course Completed",        description:"Mastered OSINT: email tracing, username recon, SOCMINT, geolocation, Maltego, theHarvester.",   date:"2023" },
    { icon:"🧪", title:"Digital Forensics Lab Certified",    description:"Memory analysis (Volatility), disk forensics (Autopsy), PCAP analysis training completed.",     date:"2024" },
    { icon:"📡", title:"Network Security Assessment Done",   description:"Authorized network security assessment for a small organization as part of coursework.",         date:"2024" }
  ],

  courses: [
    { name:"Ethical Hacking A-Z",              platform:"Udemy",         description:"Full pentesting lifecycle: recon, scanning, exploitation, post-exploitation, reporting.",  tag:"Pentesting"  },
    { name:"Bug Bounty Hunting",               platform:"Udemy",         description:"Real-world web vulnerability hunting: XSS, SQLi, IDOR, SSRF, CSRF, RCE disclosure.",      tag:"Bug Bounty"  },
    { name:"OSINT Fundamentals",               platform:"TCM Security",  description:"Username enum, email intel, geolocation, social media intelligence, Maltego, Shodan.",     tag:"OSINT"       },
    { name:"Digital Forensics & IR",           platform:"Udemy",         description:"Memory forensics (Volatility), disk imaging (Autopsy), PCAP analysis, incident response.", tag:"Forensics"   },
    { name:"Web Application Security",         platform:"PortSwigger",   description:"80+ labs — OWASP Top 10, XSS, SQLi, SSRF, IDOR, XXE, deserialization.",                   tag:"Web Sec"     },
    { name:"Practical Ethical Hacking",        platform:"TCM Security",  description:"Active Directory attacks, network pivoting, privilege escalation, report writing.",        tag:"Pentesting"  },
    { name:"Linux Command Line & Scripting",   platform:"edX",           description:"File systems, process management, bash scripting, cron jobs, networking.",                 tag:"Linux"       },
    { name:"Python for Cybersecurity",         platform:"Coursera",      description:"Scripting exploits, building tools, automating recon, working with APIs.",                 tag:"Python"      },
    { name:"Intro to CTF & Reverse Eng",       platform:"TryHackMe",     description:"Binary analysis, Ghidra, GDB, format strings, buffer overflow basics.",                   tag:"CTF"         },
    { name:"Network Security Fundamentals",    platform:"Cisco NetAcad", description:"Cyber threats, IDS/IPS, firewalls, VPN, TCP/IP security, Wireshark.",                     tag:"Network"     }
  ],

  blog: [
    {
      id:"xss-bug-bounty",
      emoji:"🐛",
      category:"Bug Bounty",
      catClass:"cat-sec",
      date:"Jan 15, 2025",
      readTime:"8 min read",
      title:"How I Found My First XSS on a Bug Bounty Program",
      excerpt:"A detailed writeup of how I discovered a stored XSS vulnerability on a public bug bounty program, the recon process, the bypass, and the responsible disclosure timeline.",
      slug:"blog/xss-bug-bounty.html"
    },
    {
      id:"osint-techniques",
      emoji:"🔍",
      category:"OSINT",
      catClass:"cat-osint",
      date:"Jan 8, 2025",
      readTime:"12 min read",
      title:"OSINT Techniques Every Security Researcher Should Know",
      excerpt:"From username enumeration to geolocation — a practical guide to the OSINT tools and techniques I use daily in security research and investigations.",
      slug:"blog/osint-techniques.html"
    },
    {
      id:"ctf-forensics",
      emoji:"🏴",
      category:"CTF",
      catClass:"cat-ctf",
      date:"Dec 28, 2024",
      readTime:"10 min read",
      title:"CTF Forensics Writeup: PicoCTF Memory Challenge",
      excerpt:"Step-by-step walkthrough of a memory forensics challenge from PicoCTF 2024 using Volatility. How I extracted the flag from a Windows memory dump.",
      slug:"blog/ctf-forensics.html"
    }
  ]

};

/* ── Load from localStorage (admin saves here) or use defaults ── */
(function(){
  const STORAGE_KEY = "ztt_portfolio_data";
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if(raw){
      const p = JSON.parse(raw);
      window.PORTFOLIO_DATA = {
        skills:       (Array.isArray(p.skills)       && p.skills.length)       ? p.skills       : _DEFAULT_PORTFOLIO_DATA.skills,
        ctf:          (Array.isArray(p.ctf)          && p.ctf.length)          ? p.ctf          : _DEFAULT_PORTFOLIO_DATA.ctf,
        achievements: (Array.isArray(p.achievements) && p.achievements.length) ? p.achievements : _DEFAULT_PORTFOLIO_DATA.achievements,
        courses:      (Array.isArray(p.courses)      && p.courses.length)      ? p.courses      : _DEFAULT_PORTFOLIO_DATA.courses,
        blog:         (Array.isArray(p.blog)         && p.blog.length)         ? p.blog         : _DEFAULT_PORTFOLIO_DATA.blog,
      };
      return;
    }
  } catch(e){}
  window.PORTFOLIO_DATA = JSON.parse(JSON.stringify(_DEFAULT_PORTFOLIO_DATA));
})();
