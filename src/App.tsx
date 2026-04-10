import React, { useRef, useState, useEffect } from 'react';
import { 
  Cloud, 
  UserPlus, 
  ShieldCheck, 
  Server, 
  Database, 
  Rocket, 
  Activity, 
  Lock, 
  Users, 
  Cpu, 
  Layers, 
  HardDrive, 
  Globe, 
  Zap, 
  Network, 
  ArrowRight, 
  CheckCircle2, 
  AlertTriangle,
  Info,
  Terminal,
  Settings,
  ChevronDown,
  ExternalLink,
  Search,
  RefreshCw,
  BarChart3,
  FileText,
  Workflow,
  Sun,
  Moon
} from 'lucide-react';
import { motion, useScroll, useSpring, useTransform, AnimatePresence } from 'motion/react';

// --- Components ---

const Section = ({ children, className = "", id = "" }: { children: React.ReactNode, className?: string, id?: string }) => (
  <motion.section
    id={id}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className={`min-h-screen flex flex-col justify-center py-20 px-6 max-w-6xl mx-auto ${className}`}
  >
    {children}
  </motion.section>
);

const Card = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <div className={`bg-slate-900/50 border border-slate-800 backdrop-blur-sm rounded-2xl p-6 md:p-8 ${className}`}>
    {children}
  </div>
);

const Badge = ({ children, color = "blue" }: { children: React.ReactNode, color?: "blue" | "orange" | "green" | "purple" | "red" }) => {
  const colors = {
    blue: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    orange: "bg-orange-500/10 text-orange-400 border-orange-500/20",
    green: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    purple: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    red: "bg-rose-500/10 text-rose-400 border-rose-500/20",
  };
  return (
    <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border ${colors[color]}`}>
      {children}
    </span>
  );
};

const StepItem = ({ number, title, content }: { number: string, title: string, content: string }) => (
  <div className="flex gap-4 items-start group">
    <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center shrink-0 font-bold text-sm group-hover:scale-110 transition-transform">
      {number}
    </div>
    <div>
      <h4 className="font-bold text-slate-100 mb-1">{title}</h4>
      <p className="text-slate-400 text-sm leading-relaxed">{content}</p>
    </div>
  </div>
);

// --- Main App ---

export default function App() {
  const [isDark, setIsDark] = useState(true);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    if (isDark) {
      document.body.classList.remove('light');
    } else {
      document.body.classList.add('light');
    }
  }, [isDark]);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'bg-slate-950 text-slate-200' : 'bg-slate-50 text-slate-900'}`}>
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-orange-500 z-[100] origin-left"
        style={{ scaleX }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center">
              <Cloud className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-xl tracking-tight">AWS <span className="text-orange-500">Masterclass</span></span>
          </div>
          <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-400">
            <a href="#basics" className="hover:text-white transition-colors">Basics</a>
            <a href="#compute" className="hover:text-white transition-colors">Compute</a>
            <a href="#storage" className="hover:text-white transition-colors">Storage</a>
            <a href="#deploy" className="hover:text-white transition-colors">Deploy</a>
            <a href="#advanced" className="hover:text-white transition-colors">Advanced</a>
            <a 
              href="https://assii27.github.io/Asif_Portfolio/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-md border border-blue-500/20 hover:bg-blue-500/20 transition-all font-bold"
            >
              Asif Maner
            </a>
            <a 
              href="https://assii27.github.io/ProjectDeployProcess/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-3 py-1 bg-orange-500/10 text-orange-400 rounded-md border border-orange-500/20 hover:bg-orange-500/20 transition-all font-bold"
            >
              Technical Knowledge
            </a>
          </div>
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-lg hover:bg-slate-800 transition-colors border border-slate-800"
            >
              {isDark ? <Sun className="w-5 h-5 text-orange-400" /> : <Moon className="w-5 h-5 text-blue-600" />}
            </button>
            <button className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold rounded-lg transition-all shadow-lg shadow-blue-900/20">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* 🟢 Scene 1: Introduction */}
      <Section className="text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Badge color="orange">AWS Learning Path</Badge>
          <h1 className="text-5xl md:text-7xl font-black mt-6 mb-8 leading-tight">
            Complete AWS <br />
            <span className="text-blue-500">Deployment Guide</span>
          </h1>
          <p className="text-slate-400 text-xl max-w-2xl mx-auto mb-12">
            From Account Creation to Live Application. A scroll-based animated journey through the world's most popular cloud platform.
          </p>
          <div className="flex flex-col items-center gap-4">
            <div className="animate-bounce text-slate-500">
              <ChevronDown className="w-8 h-8" />
            </div>
            <span className="text-sm font-mono text-slate-600 uppercase tracking-widest">Scroll to Begin</span>
          </div>
        </motion.div>
      </Section>

      {/* 🟡 Scene 2: What is AWS? */}
      <Section id="basics">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge>Definition</Badge>
            <h2 className="text-4xl font-bold mt-4 mb-6">What is AWS?</h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              Amazon Web Services (AWS) is a comprehensive cloud platform providing computing, storage, and deployment services. It allows businesses to build and run applications without managing physical hardware.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-4 flex flex-col items-center text-center">
                <Cpu className="w-8 h-8 text-blue-500 mb-2" />
                <span className="font-bold">Amazon EC2</span>
                <span className="text-xs text-slate-500">Compute</span>
              </Card>
              <Card className="p-4 flex flex-col items-center text-center">
                <Database className="w-8 h-8 text-orange-500 mb-2" />
                <span className="font-bold">Amazon S3</span>
                <span className="text-xs text-slate-500">Storage</span>
              </Card>
              <Card className="p-4 flex flex-col items-center text-center">
                <Activity className="w-8 h-8 text-emerald-500 mb-2" />
                <span className="font-bold">CloudWatch</span>
                <span className="text-xs text-slate-500">Monitoring</span>
              </Card>
              <Card className="p-4 flex flex-col items-center text-center">
                <Network className="w-8 h-8 text-purple-500 mb-2" />
                <span className="font-bold">VPC</span>
                <span className="text-xs text-slate-500">Networking</span>
              </Card>
            </div>
          </div>
          <div className="relative">
            <motion.div
              animate={{ 
                y: [0, -20, 0],
                rotate: [0, 2, 0]
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="w-full aspect-square bg-gradient-to-br from-blue-600/20 to-orange-600/20 rounded-full flex items-center justify-center border border-slate-800"
            >
              <Cloud className="w-32 h-32 text-white/20" />
            </motion.div>
            {/* Floating Service Icons */}
            <motion.div className="absolute top-10 right-10 p-3 bg-slate-900 rounded-xl border border-slate-800 shadow-2xl" animate={{ y: [0, 10, 0] }} transition={{ duration: 3, repeat: Infinity }}>
              <Server className="w-6 h-6 text-blue-500" />
            </motion.div>
            <motion.div className="absolute bottom-10 left-10 p-3 bg-slate-900 rounded-xl border border-slate-800 shadow-2xl" animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity }}>
              <Database className="w-6 h-6 text-orange-500" />
            </motion.div>
          </div>
        </div>
      </Section>

      {/* 🔵 Scene 3: Create AWS Account */}
      <Section>
        <div className="text-center mb-16">
          <Badge color="green">Getting Started</Badge>
          <h2 className="text-4xl font-bold mt-4">Create Your AWS Account</h2>
          <p className="text-slate-400 mt-4">Follow these steps to unlock the power of the cloud.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          <Card className="border-blue-500/30">
            <div className="space-y-6">
              <StepItem number="1" title="Visit AWS" content="Go to https://aws.amazon.com and click 'Create AWS Account'." />
              <StepItem number="2" title="Credentials" content="Enter your Email, Password, and a unique AWS Account Name." />
              <StepItem number="3" title="Contact Info" content="Fill in your personal or business contact details accurately." />
              <StepItem number="4" title="Payment" content="Add credit/debit card details for identity verification (Free Tier available)." />
              <StepItem number="5" title="Verify Identity" content="Complete phone verification via OTP or automated call." />
              <StepItem number="6" title="Choose Plan" content="Select the 'Basic Plan (Free Tier)' to start without upfront costs." />
            </div>
          </Card>
          <div className="flex flex-col justify-center">
            <div className="p-8 bg-blue-600/10 border border-blue-500/20 rounded-2xl">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Info className="w-5 h-5 text-blue-400" /> Why Create an Account?
              </h3>
              <p className="text-slate-400 leading-relaxed">
                An AWS Account gives you access to over 200 fully featured services. Most services offer a 12-month Free Tier, allowing you to learn and experiment without cost.
              </p>
              <div className="mt-6 p-4 bg-slate-950 rounded-lg font-mono text-xs text-blue-400 border border-slate-800">
                // Access granted to:<br />
                - 750 hours of EC2/month<br />
                - 5 GB of S3 Storage<br />
                - 25 GB of DynamoDB
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 🟣 Scene 4: AWS Account Identifiers */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <Card className="font-mono text-sm">
              <div className="flex items-center justify-between mb-4 border-b border-slate-800 pb-2">
                <span className="text-slate-500 uppercase tracking-widest text-xs">Account Details</span>
                <div className="flex gap-1">
                  <div className="w-2 h-2 rounded-full bg-red-500" />
                  <div className="w-2 h-2 rounded-full bg-yellow-500" />
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <span className="text-blue-400">Account ID:</span>
                  <span className="text-slate-300 ml-2">1234-5678-9012</span>
                  <p className="text-[10px] text-slate-500 mt-1">A unique 12-digit number identifying your account.</p>
                </div>
                <div>
                  <span className="text-orange-400">Canonical User ID:</span>
                  <span className="text-slate-300 ml-2 block mt-1 break-all">79a59df900b949e55d96a1e698fbacedfd6e09d98eacf8f8d5218e7cd47ef2be</span>
                  <p className="text-[10px] text-slate-500 mt-1">An alphanumeric string used for S3 bucket access control.</p>
                </div>
              </div>
            </Card>
          </div>
          <div className="order-1 lg:order-2">
            <Badge color="purple">Identifiers</Badge>
            <h2 className="text-4xl font-bold mt-4 mb-6">How AWS Identifies You</h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              AWS uses specific IDs to manage resources and permissions. The 12-digit Account ID is your primary identifier, while the Canonical User ID is specifically used for legacy S3 permissions.
            </p>
          </div>
        </div>
      </Section>

      {/* 🟠 Scene 5 & 6: IAM (Security & Access Control) */}
      <Section>
        <div className="text-center mb-16">
          <Badge color="red">Security</Badge>
          <h2 className="text-4xl font-bold mt-4">IAM: Identity & Access Management</h2>
          <p className="text-slate-400 mt-4">Control who can access what in your AWS environment.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="text-center">
            <Users className="w-10 h-10 text-blue-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Users</h3>
            <p className="text-sm text-slate-400">Individuals or applications that need access to AWS resources.</p>
          </Card>
          <Card className="text-center">
            <ShieldCheck className="w-10 h-10 text-orange-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Roles</h3>
            <p className="text-sm text-slate-400">Temporary identities that can be assumed by users or services.</p>
          </Card>
          <Card className="text-center">
            <Lock className="w-10 h-10 text-emerald-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Permissions</h3>
            <p className="text-sm text-slate-400">Policies that define what actions are allowed on which resources.</p>
          </Card>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <div className="p-6 bg-red-500/5 border border-red-500/20 rounded-2xl">
            <h4 className="text-red-400 font-bold mb-2 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5" /> Root User
            </h4>
            <p className="text-sm text-slate-400">
              The email address used to create the account. Has <strong>Full Access</strong>. Using this for daily tasks is dangerous.
            </p>
          </div>
          <div className="p-6 bg-emerald-500/5 border border-emerald-500/20 rounded-2xl">
            <h4 className="text-emerald-400 font-bold mb-2 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5" /> IAM User
            </h4>
            <p className="text-sm text-slate-400">
              Users created within IAM with <strong>Limited & Secure Access</strong>. This is the recommended way to manage your account.
            </p>
          </div>
        </div>
      </Section>

      {/* 🟢 Scene 7 & 8: EC2 (Virtual Server) */}
      <Section id="compute">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge>Compute</Badge>
            <h2 className="text-4xl font-bold mt-4 mb-6">Amazon EC2</h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              Elastic Compute Cloud (EC2) allows you to run virtual servers in the cloud. It's the backbone of most AWS architectures.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-slate-900 rounded-xl border border-slate-800">
                <Zap className="w-6 h-6 text-blue-500" />
                <div>
                  <h4 className="font-bold">Scalable</h4>
                  <p className="text-xs text-slate-500">Increase or decrease capacity in minutes.</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-slate-900 rounded-xl border border-slate-800">
                <Globe className="w-6 h-6 text-orange-500" />
                <div>
                  <h4 className="font-bold">Multi-Region</h4>
                  <p className="text-xs text-slate-500">Deploy servers globally for low latency.</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-slate-900 rounded-xl border border-slate-800">
                <Lock className="w-6 h-6 text-emerald-500" />
                <div>
                  <h4 className="font-bold">Secure</h4>
                  <p className="text-xs text-slate-500">Control access with Key Pairs and Security Groups.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800 relative overflow-hidden">
             <div className="absolute top-0 right-0 p-4 opacity-10">
               <Server className="w-32 h-32" />
             </div>
             <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
               <Terminal className="w-5 h-5 text-blue-500" /> Launch Flow
             </h3>
             <div className="space-y-8 relative">
                <div className="absolute left-4 top-2 bottom-2 w-0.5 bg-slate-800" />
                {[
                  { title: "Select AMI", desc: "Choose OS (Amazon Linux, Ubuntu, etc.)" },
                  { title: "Instance Type", desc: "Select CPU/RAM (e.g., t2.micro)" },
                  { title: "Configure Network", desc: "Set VPC, Subnet, and Security Groups" },
                  { title: "Add Storage", desc: "Attach EBS volumes for persistent data" },
                  { title: "Key Pair", desc: "Download .pem file for SSH access" }
                ].map((step, i) => (
                  <div key={i} className="flex gap-6 items-center relative z-10">
                    <div className="w-8 h-8 rounded-full bg-slate-950 border border-slate-800 flex items-center justify-center text-xs font-bold text-blue-500">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="font-bold text-sm">{step.title}</h4>
                      <p className="text-xs text-slate-500">{step.desc}</p>
                    </div>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </Section>

      {/* 🔵 Scene 9 & 10: Auto Scaling & Load Balancer */}
      <Section>
        <div className="text-center mb-16">
          <Badge color="blue">High Availability</Badge>
          <h2 className="text-4xl font-bold mt-4">Scaling & Load Balancing</h2>
          <p className="text-slate-400 mt-4">Handle millions of users with ease.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          <Card>
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-blue-500/10 rounded-xl">
                <Layers className="w-6 h-6 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold">Auto Scaling</h3>
            </div>
            <p className="text-slate-400 mb-6">
              Automatically adjusts the number of EC2 instances based on traffic. If traffic goes up, it launches more servers. If it goes down, it terminates them to save costs.
            </p>
            <div className="flex justify-center gap-2">
              <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }} className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center"><Server className="w-5 h-5" /></motion.div>
              <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity, delay: 0.5 }} className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center"><Server className="w-5 h-5" /></motion.div>
              <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity, delay: 1 }} className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center opacity-50"><Server className="w-5 h-5" /></motion.div>
            </div>
          </Card>
          <Card>
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-orange-500/10 rounded-xl">
                <Network className="w-6 h-6 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold">Load Balancer</h3>
            </div>
            <p className="text-slate-400 mb-6">
              Elastic Load Balancing (ELB) distributes incoming application traffic across multiple targets, such as EC2 instances, in multiple Availability Zones.
            </p>
            <div className="flex flex-col items-center gap-4">
              <div className="w-full h-1 bg-slate-800 rounded-full relative">
                <motion.div 
                  animate={{ left: ["0%", "100%"] }} 
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-orange-500 rounded-full blur-sm" 
                />
              </div>
              <div className="flex gap-8">
                <Server className="w-8 h-8 text-slate-700" />
                <Server className="w-8 h-8 text-slate-700" />
                <Server className="w-8 h-8 text-slate-700" />
              </div>
            </div>
          </Card>
        </div>
      </Section>

      {/* 🟠 Scene 11: S3 (Storage) */}
      <Section id="storage">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 relative">
             <div className="grid grid-cols-2 gap-4">
                <Card className="flex flex-col items-center gap-2">
                  <Badge color="blue">Standard</Badge>
                  <span className="text-xs text-slate-500">Frequent Access</span>
                </Card>
                <Card className="flex flex-col items-center gap-2">
                  <Badge color="orange">IA</Badge>
                  <span className="text-xs text-slate-500">Infrequent Access</span>
                </Card>
                <Card className="flex flex-col items-center gap-2">
                  <Badge color="purple">Glacier</Badge>
                  <span className="text-xs text-slate-500">Archival</span>
                </Card>
                <Card className="flex flex-col items-center gap-2">
                  <Badge color="red">One Zone</Badge>
                  <span className="text-xs text-slate-500">Non-critical</span>
                </Card>
             </div>
          </div>
          <div className="order-1 lg:order-2">
            <Badge color="orange">Storage</Badge>
            <h2 className="text-4xl font-bold mt-4 mb-6">Amazon S3</h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-6">
              Simple Storage Service (S3) is object storage built to store and retrieve any amount of data from anywhere on the web.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-slate-300">
                <CheckCircle2 className="w-5 h-5 text-orange-500" />
                <span>Unlimited Storage capacity</span>
              </li>
              <li className="flex items-center gap-3 text-slate-300">
                <CheckCircle2 className="w-5 h-5 text-orange-500" />
                <span>99.999999999% Durability (11 9's)</span>
              </li>
              <li className="flex items-center gap-3 text-slate-300">
                <CheckCircle2 className="w-5 h-5 text-orange-500" />
                <span>Eventual Consistency for PUTS/DELETES</span>
              </li>
            </ul>
          </div>
        </div>
      </Section>

      {/* 🔴 Scene 12: Deployment Using Elastic Beanstalk */}
      <Section id="deploy">
        <div className="text-center mb-16">
          <Badge color="blue">Deployment</Badge>
          <h2 className="text-4xl font-bold mt-4">AWS Elastic Beanstalk</h2>
          <p className="text-slate-400 mt-4">The easiest way to deploy and scale web applications.</p>
        </div>
        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-slate-800 hidden md:block" />
          <div className="space-y-12">
            {[
              { step: "1", title: "Prepare App", desc: "Build your JAR file using 'mvn clean package'.", icon: <Terminal /> },
              { step: "2", title: "Create App", desc: "Open Beanstalk console and click 'Create Application'.", icon: <UserPlus /> },
              { step: "3", title: "Upload Code", desc: "Upload your JAR file to the Beanstalk environment.", icon: <Rocket /> },
              { step: "4", title: "Configure", desc: "Set Platform (Java), Instance (t2.micro), and Security.", icon: <Settings /> },
              { step: "5", title: "Deploy", desc: "AWS automatically handles EC2, scaling, and load balancing.", icon: <CheckCircle2 /> }
            ].map((item, i) => (
              <div key={i} className={`flex flex-col md:flex-row items-center gap-8 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="flex-1 text-center md:text-left">
                  <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                  <p className="text-slate-400 text-sm">{item.desc}</p>
                </div>
                <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center shrink-0 z-10 shadow-xl shadow-blue-900/40">
                  {React.cloneElement(item.icon as React.ReactElement, { className: "w-6 h-6 text-white" })}
                </div>
                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 🟢 Scene 13 & 14: Monitoring & Output */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge color="green">Monitoring</Badge>
            <h2 className="text-4xl font-bold mt-4 mb-6">Amazon CloudWatch</h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              Monitor your applications and infrastructure in real-time. Collect metrics, set alarms, and visualize logs.
            </p>
            <Card className="bg-slate-950 border-slate-800">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-slate-500">CPU Usage</span>
                <span className="text-xs text-emerald-500">Healthy</span>
              </div>
              <div className="h-24 flex items-end gap-1">
                {[40, 30, 45, 60, 55, 70, 65, 50, 40, 35, 45, 50].map((h, i) => (
                  <motion.div 
                    key={i}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${h}%` }}
                    className="flex-1 bg-blue-500/40 rounded-t-sm"
                  />
                ))}
              </div>
            </Card>
          </div>
          <div className="text-center">
             <div className="w-24 h-24 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-emerald-500/30">
                <Rocket className="w-10 h-10 text-emerald-500" />
             </div>
             <h3 className="text-3xl font-bold mb-4">Application is Live!</h3>
             <div className="p-4 bg-slate-900 rounded-xl border border-slate-800 inline-flex items-center gap-3">
                <Globe className="w-5 h-5 text-blue-500" />
                <span className="text-slate-300 font-mono text-sm">http://my-app.elasticbeanstalk.com</span>
                <ExternalLink className="w-4 h-4 text-slate-500" />
             </div>
          </div>
        </div>
      </Section>

      {/* 🔵 Scene 15: Advanced Concepts (Grid) */}
      <Section id="advanced">
        <div className="text-center mb-16">
          <Badge color="purple">Advanced</Badge>
          <h2 className="text-4xl font-bold mt-4">Deep Dive Concepts</h2>
          <p className="text-slate-400 mt-4">Master the intricacies of AWS architecture.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <h4 className="font-bold mb-2 flex items-center gap-2 text-blue-400">
              <RefreshCw className="w-4 h-4" /> Consistency
            </h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              <strong>Eventual Consistency:</strong> Changes (PUT/DELETE) may not be immediately visible across all systems.
            </p>
          </Card>
          <Card>
            <h4 className="font-bold mb-2 flex items-center gap-2 text-orange-400">
              <Globe className="w-4 h-4" /> Regions
            </h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Geographical areas where AWS stores data. Choose based on latency, cost, and compliance.
            </p>
          </Card>
          <Card>
            <h4 className="font-bold mb-2 flex items-center gap-2 text-emerald-400">
              <HardDrive className="w-4 h-4" /> EBS
            </h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              <strong>Elastic Block Store:</strong> Persistent block storage for EC2. Supports snapshots and multiple types (SSD, HDD).
            </p>
          </Card>
          <Card>
            <h4 className="font-bold mb-2 flex items-center gap-2 text-purple-400">
              <Network className="w-4 h-4" /> VPC
            </h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              <strong>Virtual Private Cloud:</strong> Your private network in AWS. Control subnets, gateways, and security.
            </p>
          </Card>
          <Card>
            <h4 className="font-bold mb-2 flex items-center gap-2 text-rose-400">
              <Zap className="w-4 h-4" /> Kinesis
            </h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Real-time data streaming and processing. Ideal for IoT, logs, and clickstreams.
            </p>
          </Card>
          <Card>
            <h4 className="font-bold mb-2 flex items-center gap-2 text-amber-400">
              <Workflow className="w-4 h-4" /> Data Pipeline
            </h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Automate data movement and processing between S3, DynamoDB, and Redshift.
            </p>
          </Card>
        </div>
      </Section>

      {/* 🎯 Final Scene: Interview Summary */}
      <Section>
        <div className="max-w-3xl mx-auto">
          <Card className="border-blue-500/50 bg-blue-500/5 relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/10 blur-3xl rounded-full" />
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <ShieldCheck className="w-8 h-8 text-blue-500" /> Interview Summary
            </h2>
            <div className="space-y-6">
              <div className="p-4 bg-slate-950 rounded-xl border border-slate-800">
                <h4 className="text-sm font-bold text-blue-400 mb-2 uppercase tracking-widest">The Elevator Pitch</h4>
                <p className="text-slate-300 italic leading-relaxed">
                  "Using AWS Elastic Beanstalk, we can deploy applications quickly without managing infrastructure. It automatically handles EC2 provisioning, auto-scaling, load balancing, and health monitoring, allowing developers to focus on code."
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-slate-900 rounded-xl border border-slate-800">
                  <h4 className="text-xs font-bold text-slate-500 mb-2 uppercase">Consistency</h4>
                  <p className="text-xs text-slate-400">Eventual (Faster, stale data possible) vs Strong (Slower, always latest data).</p>
                </div>
                <div className="p-4 bg-slate-900 rounded-xl border border-slate-800">
                  <h4 className="text-xs font-bold text-slate-500 mb-2 uppercase">Security</h4>
                  <p className="text-xs text-slate-400">Security Groups (Instance level) vs NACL (Subnet level).</p>
                </div>
              </div>
              <div className="text-center pt-6">
                <p className="text-slate-500 text-sm mb-4">Ready to build your first cloud application?</p>
                <button className="px-8 py-3 bg-orange-500 hover:bg-orange-400 text-white font-bold rounded-xl transition-all shadow-lg shadow-orange-900/20 flex items-center gap-2 mx-auto">
                  Start Building Now <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </Card>
        </div>
      </Section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-800 text-center relative z-10">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Cloud className="w-6 h-6 text-orange-500" />
          <span className="font-bold text-lg">AWS Masterclass</span>
        </div>
        <p className="text-slate-500 text-sm">
          Designed for developers, by developers. © 2026 AWS Learning Path.
        </p>
        <p className="text-blue-500 font-bold mt-2">
          Created by Asif Maner
        </p>
      </footer>
    </div>
  );
}
