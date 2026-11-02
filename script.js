/**
 * Abhinandh K Shaji - Editorial Crimson & Obsidian Portfolio
 * Interactive Functionality, Modals, Terminal Console & CI/CD Pipeline Simulator
 */

document.addEventListener('DOMContentLoaded', () => {
  initModals();
  initDevopsDrawer();
  initPipelineSimulator();
  initTerminalEmulator();
  initContactForm();
  initQuickCopy();
});

/* ==========================================================================
   1. Modals: Resume, Projects, Contact
   ========================================================================== */
const projectModalData = {
  'event-nano': {
    title: 'Event Nano – Full-Stack Event Management Platform',
    category: 'MERN Stack Architecture',
    content: `
      <div class="project-modal-body-inner">
        <p class="mb-3 text-silver">
          <strong>Event Nano</strong> is an enterprise-ready event coordination and vendor bidding platform engineered using the MERN stack (MongoDB, Express, React, Node.js). It streamlines interactions between event hosts, vendors, and attendees with real-time bidding, automated booking workflows, and strict role-based access control.
        </p>

        <h4 class="text-red mt-3 mb-2"><i class="fa-solid fa-layer-group"></i> Key Architectural Features</h4>
        <ul class="res-bullet-list mb-3">
          <li><strong>Role-Based Access Control (RBAC):</strong> Granular JWT token authentication separating Admin, Vendor, and Client privileges with secure refresh token rotation.</li>
          <li><strong>Real-Time Vendor Bidding Engine:</strong> Allows vendors to place quotes and bids on open event requirements with state management in React.</li>
          <li><strong>RESTful API Architecture:</strong> High-throughput modular endpoints built with Express.js, featuring input validation, rate limiting, and centralized error handling middleware.</li>
          <li><strong>MongoDB Aggregations:</strong> Optimized schemas for complex queries including booking schedules, payment states, and vendor portfolios.</li>
          <li><strong>Responsive Modern UI:</strong> Clean interface styled with Tailwind CSS, ensuring responsiveness across desktop, tablet, and mobile browsers.</li>
        </ul>

        <h4 class="text-red mt-3 mb-2"><i class="fa-solid fa-microchip"></i> Technology Stack</h4>
        <div class="tag-cloud-wrap mb-3">
          <span class="editorial-skill-pill">React.js</span>
          <span class="editorial-skill-pill">Node.js</span>
          <span class="editorial-skill-pill">Express.js</span>
          <span class="editorial-skill-pill">MongoDB</span>
          <span class="editorial-skill-pill">Tailwind CSS</span>
          <span class="editorial-skill-pill">JWT Auth</span>
          <span class="editorial-skill-pill">REST APIs</span>
        </div>
      </div>
    `
  },
  'ransomware-detection': {
    title: 'Ransomware Detection – AI-Powered Threat Analysis',
    category: 'Cybersecurity & Deep Learning',
    content: `
      <div class="project-modal-body-inner">
        <p class="mb-3 text-silver">
          An intelligent security threat analysis system designed to identify, categorize, and quarantine zero-day ransomware binaries prior to execution. By fusing <strong>Convolutional Neural Networks (CNN)</strong> and <strong>Long Short-Term Memory (LSTM)</strong> recurrent models, the system analyzes raw byte sequences and Portable Executable (PE) header features.
        </p>

        <h4 class="text-red mt-3 mb-2"><i class="fa-solid fa-brain"></i> Threat Engine Highlights</h4>
        <ul class="res-bullet-list mb-3">
          <li><strong>Static Binary Analysis:</strong> Inspects PE header structures, section entropy, imported DLL functions, and suspicious API calls without launching the binary.</li>
          <li><strong>Hybrid CNN-LSTM Deep Learning:</strong> CNN layers extract localized spatial opcode patterns while LSTM layers capture sequential invocation logic over time.</li>
          <li><strong>Streamlit Interactive Dashboard:</strong> Provides security analysts with real-time file upload, automated entropy charts, risk scoring, and malicious section breakdown.</li>
          <li><strong>High Detection Accuracy:</strong> Evaluated against benchmark benign and ransomware datasets, achieving robust generalization against obfuscated payloads.</li>
        </ul>

        <h4 class="text-red mt-3 mb-2"><i class="fa-solid fa-microchip"></i> Technology Stack</h4>
        <div class="tag-cloud-wrap mb-3">
          <span class="editorial-skill-pill">Python</span>
          <span class="editorial-skill-pill">TensorFlow / Keras</span>
          <span class="editorial-skill-pill">CNN &amp; LSTM</span>
          <span class="editorial-skill-pill">Streamlit</span>
          <span class="editorial-skill-pill">PEfile Analysis</span>
          <span class="editorial-skill-pill">Scikit-learn</span>
        </div>
      </div>
    `
  },
  'cloud-infra': {
    title: 'Cloud-Native AWS & Kubernetes CI/CD Pipeline',
    category: 'Cloud Engineering & IaC Blueprint',
    content: `
      <div class="project-modal-body-inner">
        <p class="mb-3 text-silver">
          A production-grade cloud infrastructure architecture built to support highly available microservices workloads. The entire environment is declared via <strong>Terraform</strong>, orchestrated on <strong>Kubernetes</strong>, and deployed through an automated <strong>Jenkins CI/CD pipeline</strong>.
        </p>

        <h4 class="text-red mt-3 mb-2"><i class="fa-solid fa-network-wired"></i> Architecture Specifications</h4>
        <ul class="res-bullet-list mb-3">
          <li><strong>Multi-AZ AWS VPC:</strong> Dual-Availability Zone topology featuring public subnets (Internet Gateway, Application Load Balancers) and private subnets (Worker nodes, RDS Database).</li>
          <li><strong>HashiCorp Terraform IaC:</strong> Modular configuration with remote state storage in Amazon S3 and DynamoDB state locking to prevent concurrency collisions.</li>
          <li><strong>Kubernetes Orchestration:</strong> Deployments with rolling updates, readiness/liveness health probes, configmaps, and secrets management.</li>
          <li><strong>Automated Jenkins CI/CD:</strong> Git push triggers automated container builds, vulnerability scanning, and seamless rollout.</li>
          <li><strong>Observability & Alarms:</strong> AWS CloudWatch dashboards tracking CPU, latency, and container restart metrics with automated alerting.</li>
        </ul>

        <h4 class="text-red mt-3 mb-2"><i class="fa-solid fa-microchip"></i> Technology Stack</h4>
        <div class="tag-cloud-wrap mb-3">
          <span class="editorial-skill-pill">AWS VPC &amp; EC2</span>
          <span class="editorial-skill-pill">Terraform (IaC)</span>
          <span class="editorial-skill-pill">Docker &amp; K8s</span>
          <span class="editorial-skill-pill">Jenkins</span>
          <span class="editorial-skill-pill">AWS RDS &amp; S3</span>
          <span class="editorial-skill-pill">Route 53 &amp; ELB</span>
          <span class="editorial-skill-pill">CloudWatch</span>
        </div>
      </div>
    `
  }
};

function initModals() {
  // Resume Modal
  const resumeModal = document.getElementById('resume-modal');
  const resumeTriggers = [
    document.getElementById('header-resume-btn'),
    document.getElementById('quote-resume-btn')
  ];
  const resumeClose = document.getElementById('resume-modal-close');
  const printResumeBtn = document.getElementById('print-resume-btn');

  resumeTriggers.forEach((btn) => {
    if (btn) {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        openModal(resumeModal);
      });
    }
  });

  if (resumeClose) {
    resumeClose.addEventListener('click', () => closeModal(resumeModal));
  }

  if (printResumeBtn) {
    printResumeBtn.addEventListener('click', () => {
      window.print();
    });
  }

  // Project Modal
  const projectModal = document.getElementById('project-modal');
  const projectModalTitle = document.getElementById('project-modal-title');
  const projectModalBody = document.getElementById('project-modal-body');
  const projectClose = document.getElementById('project-modal-close');
  const projectDismiss = document.getElementById('project-modal-dismiss');
  const projectCards = document.querySelectorAll('.editorial-project-card');
  const viewAllBtn = document.getElementById('view-all-projects-btn');

  projectCards.forEach((card) => {
    card.addEventListener('click', () => {
      const pKey = card.getAttribute('data-project');
      const data = projectModalData[pKey];
      if (data) {
        projectModalTitle.textContent = data.title;
        projectModalBody.innerHTML = data.content;
        openModal(projectModal);
      }
    });
  });

  if (viewAllBtn) {
    viewAllBtn.addEventListener('click', () => {
      // Open first project by default
      const data = projectModalData['event-nano'];
      projectModalTitle.textContent = data.title;
      projectModalBody.innerHTML = data.content;
      openModal(projectModal);
    });
  }

  if (projectClose) projectClose.addEventListener('click', () => closeModal(projectModal));
  if (projectDismiss) projectDismiss.addEventListener('click', () => closeModal(projectModal));

  // Contact Modal
  const contactModal = document.getElementById('contact-modal');
  const contactClose = document.getElementById('contact-modal-close');
  const contactTriggers = [
    document.getElementById('open-contact-modal-btn'),
    document.querySelector('.hire-pill')
  ];

  contactTriggers.forEach((btn) => {
    if (btn) {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        openModal(contactModal);
      });
    }
  });

  if (contactClose) {
    contactClose.addEventListener('click', () => closeModal(contactModal));
  }

  // Generic backdrop click to close
  [resumeModal, projectModal, contactModal].forEach((modal) => {
    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal(modal);
      });
    }
  });

  // Escape key closes open modals
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      [resumeModal, projectModal, contactModal].forEach((modal) => {
        if (modal) closeModal(modal);
      });
    }
  });

  function openModal(modal) {
    if (!modal) return;
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeModal(modal) {
    if (!modal) return;
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
}

/* ==========================================================================
   2. DevOps Console Drawer & Interactive Terminal
   ========================================================================== */
function initDevopsDrawer() {
  const triggerBtn = document.getElementById('toggle-console-btn');
  const headerBtn = document.getElementById('header-terminal-btn');
  const drawer = document.getElementById('console-drawer');

  function toggleDrawer() {
    if (!drawer) return;
    const isOpen = drawer.classList.toggle('open');
    if (triggerBtn) triggerBtn.classList.toggle('open', isOpen);
    if (isOpen) {
      drawer.scrollIntoView({ behavior: 'smooth' });
      const input = document.getElementById('cli-input');
      if (input) setTimeout(() => input.focus(), 300);
    }
  }

  if (triggerBtn) triggerBtn.addEventListener('click', toggleDrawer);
  if (headerBtn) headerBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (drawer && !drawer.classList.contains('open')) {
      toggleDrawer();
    } else if (drawer) {
      drawer.scrollIntoView({ behavior: 'smooth' });
    }
  });
}

function initPipelineSimulator() {
  const triggerBtn = document.getElementById('trigger-pipeline-btn');
  const pipeNodes = document.querySelectorAll('.pipe-node');
  const logEl = document.getElementById('inspector-code');

  const logsByStep = [
    `$ git commit -m "feat(api): optimize connection pooling" && git push origin main\n[GitHub] Webhook dispatched to Jenkins -> commit 7f8a91b validated.`,
    `$ jenkins-runner --stage="Unit Tests & Code Quality"\n[Jenkins] 142 assertions verified. Linting: clean. Vulnerabilities: 0. Coverage: 92.4%.`,
    `$ docker build -t cloudnets/event-nano:v1.4.2 .\n[Docker] Multi-stage build completed. Stripped devDependencies. Image size: 58MB. Pushed to Amazon ECR.`,
    `$ terraform apply -auto-approve tfplan.binary\n[Terraform] AWS VPC (ap-south-1), Subnets, Route 53 & ALB target groups in desired state. Apply complete!`,
    `$ kubectl set image deployment/event-backend app=cloudnets/event-nano:v1.4.2\n[Kubernetes] 3/3 pods updated via rolling rollout. Zero downtime achieved. Traffic routed via ALB.`,
    `[AWS CloudWatch] Telemetry active. CPU: 18%, Memory: 42%, Latency: 18ms. 0 alarms firing. SLA: 100% HEALTHY.`
  ];

  if (triggerBtn) {
    triggerBtn.addEventListener('click', () => {
      triggerBtn.disabled = true;
      triggerBtn.innerHTML = '<i class="fa-solid fa-arrows-spin fa-spin"></i> Running Pipeline...';
      showToast('🚀 Pipeline run triggered: building & deploying to AWS...', 'info');

      let currentStep = 0;
      pipeNodes.forEach((n) => n.classList.remove('active'));
      pipeNodes[0].classList.add('active');
      logEl.innerHTML = `<code>${escapeHtml(logsByStep[0])}</code>`;

      const interval = setInterval(() => {
        currentStep++;
        if (currentStep < pipeNodes.length) {
          pipeNodes.forEach((n) => n.classList.remove('active'));
          pipeNodes[currentStep].classList.add('active');
          logEl.innerHTML = `<code>${escapeHtml(logsByStep[currentStep])}</code>`;
        } else {
          clearInterval(interval);
          triggerBtn.disabled = false;
          triggerBtn.innerHTML = '<i class="fa-solid fa-play"></i> Trigger Pipeline Run';
          showToast('🎉 Deployment successful! Production healthy with zero downtime.', 'success');
        }
      }, 850);
    });
  }
}

function initTerminalEmulator() {
  const cliInput = document.getElementById('cli-input');
  const cliHistory = document.getElementById('terminal-history');
  const cliBody = document.getElementById('cli-body');
  const chipCmds = document.querySelectorAll('.chip-cmd');

  if (!cliInput || !cliHistory) return;

  const commandResponses = {
    help: `Available commands:
  • <span class="text-red">whoami</span>       - Abhinandh K Shaji bio & background
  • <span class="text-red">skills</span>       - List technical skills & cloud competencies
  • <span class="text-red">projects</span>     - Overview of Event Nano, Ransomware AI & Cloud IaC
  • <span class="text-red">experience</span>   - View internship at CLOUD NETS & education
  • <span class="text-red">deploy</span>       - Simulate a live Kubernetes container deployment
  • <span class="text-red">aws</span>          - Mock AWS CLI region & cloud resources
  • <span class="text-red">cat resume.txt</span> - Display full resume summary in terminal
  • <span class="text-red">contact</span>      - View direct email, phone & social handles
  • <span class="text-red">clear</span>        - Clear terminal history`,

    whoami: `<span class="text-red font-bold">Abhinandh K Shaji</span> | Cloud & DevOps Engineer
Location: Bangalore, Karnataka, India
Education: Master of Computer Applications (MCA), Bharathiar University
Focus: AWS Cloud Infrastructure, Kubernetes, Terraform IaC, Jenkins CI/CD, MERN Stack.
Status: Available for hire!`,

    skills: `<span class="text-red">─── CLOUD (AWS) ───</span>
EC2, S3, IAM, VPC, Route 53, RDS, CloudWatch, Auto Scaling, Elastic Load Balancer (ELB)

<span class="text-white">─── DEVOPS & IAC ───</span>
Docker, Kubernetes (k8s), Jenkins CI/CD, HashiCorp Terraform, Git, GitHub

<span class="text-white">─── SYSTEMS & NETWORKING ───</span>
Linux Administration, Ubuntu Server, Bash Scripting, DNS, HTTP/HTTPS, TCP/IP, SSH, TLS

<span class="text-white">─── PROGRAMMING & FRAMEWORKS ───</span>
Python, Java, JavaScript (ES6+), React.js, Node.js, Express.js, Tailwind CSS, TensorFlow

<span class="text-red">─── DATABASES ───</span>
MongoDB, MySQL, PostgreSQL, AWS RDS Multi-AZ`,

    projects: `<span class="text-red font-bold">1. Event Nano</span> (MERN Stack, JWT, Tailwind CSS)
   Full-stack event management & vendor bidding platform with RBAC & REST APIs.

<span class="text-white font-bold">2. Ransomware Detection</span> (Python, TensorFlow, Streamlit, CNN, LSTM)
   AI-powered binary malware classifier using PE feature extraction & deep learning.

<span class="text-red font-bold">3. AWS Multi-AZ Cloud & K8s Pipeline</span> (Terraform, AWS, Jenkins, Docker)
   Declarative IaC VPC infrastructure with automated zero-downtime microservices delivery.`,

    experience: `<span class="text-red font-bold">Cloud DevOps Intern @ CLOUD NETS, Bengaluru</span> (Jan 2026 - Present)
• Deploying and managing AWS Cloud services (EC2, S3, IAM, VPC, Route53, RDS, ELB).
• Automating Infrastructure as Code using Terraform and Jenkins CI/CD pipelines.
• Orchestrating container workloads with Docker and Kubernetes.
• Linux administration, network configuration, shell scripting, and security groups.

<span class="text-white font-bold">Education:</span>
• MCA - CMS College of Science and Commerce, Bharathiar University (2024 - 2026)
• BCA - University of Calicut (2021 - 2024)`,

    deploy: `<span class="text-red">[1/4]</span> Building optimized Docker image: event-nano:v1.4.2... [OK]
<span class="text-red">[2/4]</span> Validating Terraform state with AWS ap-south-1... [OK]
<span class="text-red">[3/4]</span> Rolling update: 3/3 Kubernetes pods initialized and passing health probes... [OK]
<span class="text-red">[4/4] 🚀 Deployment successful! Zero downtime recorded. Traffic routed via AWS ELB.</span>`,

    aws: `AWS CLI v2.15.17 (Region: ap-south-1 / Mumbai-Bangalore)
Active Resources:
  • VPC: vpc-0a49f81d (10.0.0.0/16 - 3 Public, 3 Private Subnets)
  • EC2 Instances: 6 Running (t3.medium, Auto Scaling min:2, max:10)
  • S3 Buckets: 4 active (Terraform remote state, app static assets)
  • RDS Cluster: PostgreSQL 16 (Multi-AZ Standby Enabled)
  • CloudWatch Alarms: 0 firing, 8 monitored`,

    contact: `Contact Abhinandh K Shaji:
  • Email:    <a href="mailto:abhinandhkshaji8@gmail.com" class="text-red">abhinandhkshaji8@gmail.com</a>
  • Phone:    <a href="tel:+918590514541" class="text-red">+91 8590514541</a>
  • Location: Bangalore, Karnataka, India
  • LinkedIn: <a href="https://linkedin.com/in/abhinandh-k-shaji" target="_blank" class="text-red">linkedin.com/in/abhinandh-k-shaji</a>
  • GitHub:   <a href="https://github.com/abhinandh-k-shaji" target="_blank" class="text-red">github.com/abhinandh-k-shaji</a>`,

    'cat resume.txt': `=== RESUME: ABHINANDH K SHAJI ===
Role: Cloud & DevOps Engineer
Location: Bangalore, Karnataka
Email: abhinandhkshaji8@gmail.com | Phone: +91 8590514541

SUMMARY:
MCA graduate with practical knowledge of AWS Cloud, Linux administration, DevOps practices,
containerization, and full-stack application development. Skilled in AWS, Docker, Kubernetes,
Jenkins, Terraform, and MERN stack.

EXPERIENCE:
Cloud DevOps Intern @ CLOUD NETS, Bengaluru (Jan 2026 - Present)
- AWS services (EC2, S3, IAM, VPC, Route53, RDS, CloudWatch, ELB)
- Terraform IaC & Jenkins CI/CD pipelines
- Docker containerization & Kubernetes orchestration
- Linux administration, shell scripting, cloud networking`
  };

  function executeCommand(rawCmd) {
    const cmd = rawCmd.trim().toLowerCase();
    if (!cmd) return;

    if (cmd === 'clear') {
      cliHistory.innerHTML = '';
      return;
    }

    const response = commandResponses[cmd];
    if (response) {
      appendHistory(rawCmd, response);
    } else {
      appendHistory(
        rawCmd,
        `command not found: <span class="text-red">${escapeHtml(cmd)}</span>. Type <span class="text-white">help</span> for a list of available commands.`
      );
    }
  }

  function appendHistory(cmd, responseHtml) {
    const entry = document.createElement('div');
    entry.className = 'cli-entry';
    entry.style.marginTop = '10px';
    entry.innerHTML = `
      <div class="cli-entry-cmd">
        <span class="text-red">abhinandh@cloudnets</span>:<span class="text-white">~</span>$ <span class="text-white">${escapeHtml(cmd)}</span>
      </div>
      <div class="cli-entry-response" style="color: #a1a1aa; margin-top: 4px; line-height: 1.5;">${responseHtml}</div>
    `;
    cliHistory.appendChild(entry);
    cliBody.scrollTop = cliBody.scrollHeight;
  }

  cliInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const val = cliInput.value;
      cliInput.value = '';
      executeCommand(val);
    }
  });

  chipCmds.forEach((chip) => {
    chip.addEventListener('click', () => {
      const cmd = chip.getAttribute('data-exec');
      executeCommand(cmd);
      cliInput.focus();
    });
  });
}

/* ==========================================================================
   3. Contact Form & Quick Copy
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('contact-form');
  const submitBtn = document.getElementById('form-submit-btn');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('form-name').value.trim();
    const email = document.getElementById('form-email').value.trim();
    const subject = document.getElementById('form-subject').value;
    const message = document.getElementById('form-message').value.trim();

    if (!name || !email || !message) {
      showToast('Please fill in all required fields.', 'error');
      return;
    }

    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> SENDING...';

    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = 'MESSAGE SENT &check;';

      showToast(`Thank you, ${name}! Opening mail client...`, 'success');

      const mailtoUri = `mailto:abhinandhkshaji8@gmail.com?subject=${encodeURIComponent(
        `[Portfolio] ${subject} - from ${name}`
      )}&body=${encodeURIComponent(
        `From: ${name} (${email})\n\nMessage:\n${message}`
      )}`;

      window.location.href = mailtoUri;

      setTimeout(() => {
        form.reset();
        submitBtn.innerHTML = 'SEND MESSAGE &rarr;';
      }, 3000);
    }, 600);
  });
}

function initQuickCopy() {
  const copyButtons = document.querySelectorAll('.copy-btn');

  copyButtons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const textToCopy = btn.getAttribute('data-copy');
      if (textToCopy) {
        navigator.clipboard
          .writeText(textToCopy)
          .then(() => {
            showToast(`Copied "${textToCopy}" to clipboard!`, 'success');
          })
          .catch(() => {
            const textarea = document.createElement('textarea');
            textarea.value = textToCopy;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand('copy');
            document.body.removeChild(textarea);
            showToast(`Copied "${textToCopy}" to clipboard!`, 'success');
          });
      }
    });
  });
}

function showToast(message, type = 'info') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;

  let icon = 'fa-info-circle text-red';
  if (type === 'success') icon = 'fa-circle-check text-red';
  if (type === 'error') icon = 'fa-triangle-exclamation text-red';

  toast.innerHTML = `<i class="fa-solid ${icon}"></i> <span>${escapeHtml(message)}</span>`;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => {
      if (toast.parentNode) toast.parentNode.removeChild(toast);
    }, 300);
  }, 3500);
}

function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
