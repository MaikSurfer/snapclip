import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Zap, FileText, RefreshCw, Layers, ChevronRight, Star, Sparkles, Leaf, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import snapclipLogo from "@/assets/snapclip-logo.png";
import heroBg from "@/assets/hero-bg.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6 } }),
};

const features = [
  { icon: Zap, title: "Fast Delivery", desc: "Create high-quality training content in minutes — no traditional video production delays." },
  { icon: FileText, title: "Convert Existing Materials", desc: "Transform PDFs, presentations, and spreadsheets into engaging videos in just a few clicks." },
  { icon: RefreshCw, title: "Effortless Updates", desc: "Update and edit videos as easily as a document — no reshoots, no endless edits." },
  { icon: Layers, title: "Multi-Format Output", desc: "Export for YouTube, LinkedIn, Instagram, WhatsApp and more — all from one source." },
];

const faqs = [
  { q: "What file formats does Snapclip support?", a: "Snapclip accepts PDF, Excel (.xlsx, .csv), PowerPoint, and common image formats (PNG, JPG, SVG). Simply drag and drop your files to get started." },
  { q: "How long does it take to generate a video?", a: "Most videos are generated within 2-5 minutes depending on complexity and length. You'll see a real-time progress indicator during production." },
  { q: "Can I customize the video style and branding?", a: "Absolutely! Choose from Educational, Promotion, or Branding styles. You can also set tonality, select video creators, and add your brand colors." },
  { q: "Is the AI usage transparent?", a: "Yes. We show live token calculations, pricing, and CO₂ impact for every video. Full transparency is a core value of Snapclip." },
  { q: "What channels can I publish to?", a: "Export to YouTube, LinkedIn, Instagram, X (Twitter), WhatsApp, and MS Streams. Each format is optimized for the target platform." },
];

const testimonials = [
  { name: "Sarah C.", role: "L&D Manager", quote: "Snapclip transformed our onboarding — we went from 3 weeks of video production to same-day delivery. Game changer.", stars: 5 },
  { name: "Marcus W.", role: "Communications Lead", quote: "The AI-powered video creation is incredibly intuitive. Our quarterly reports are now engaging video summaries.", stars: 5 },
  { name: "Dr. Lisa M.", role: "Head of Training", quote: "Compliance training videos used to cost us €50k. With Snapclip, we produce them in-house for a fraction of the cost.", stars: 5 },
  { name: "Tom A.", role: "Content Strategist", quote: "The multi-format export alone saves us hours every week. LinkedIn, YouTube, Instagram — all from one click.", stars: 5 },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white shadow-sm">
        <div className="container mx-auto flex items-center justify-center h-20 px-4 relative">
          <div className="flex items-center gap-3">
            <img src={snapclipLogo} alt="Snapclip" className="h-14" />
            <span className="text-sm font-body text-foreground tracking-wider uppercase font-medium">Simplify. Empower. Engage.</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm text-muted-foreground absolute right-4">
            <a href="#features" className="hover:text-foreground transition-colors">Features</a>
            <a href="#faq" className="hover:text-foreground transition-colors">FAQ</a>
            <a href="#pricing" className="hover:text-foreground transition-colors">Pricing</a>
            <Link to="/upload">
              <Button size="sm">Get Started</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="absolute inset-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-background/70" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0.5}>
            <Badge variant="outline" className="mb-8 px-6 py-2.5 border-primary/40 text-primary text-lg font-semibold tracking-wide">
              <Sparkles className="w-5 h-5 mr-2" /> #Hackathon2026
            </Badge>
          </motion.div>
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold font-display mb-6 leading-tight"
            initial="hidden" animate="visible" variants={fadeUp} custom={1}
          >
            Data to Media<br />
            <span className="gradient-text">Agent</span>
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
            initial="hidden" animate="visible" variants={fadeUp} custom={2}
          >
            Transform static files into compelling videos with one click. Explain complex data through illustrative visualizations that reveal the core value.
          </motion.p>
          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={3}>
            <Link to="/upload">
              <Button size="lg" className="text-lg px-8 py-6 glow-purple">
                Transform Your Files Into Videos <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24">
        <div className="container mx-auto px-4">
          <motion.h2 className="text-3xl md:text-4xl font-bold font-display text-center mb-4" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            Why Snapclip?
          </motion.h2>
          <motion.p className="text-muted-foreground text-center mb-16 max-w-xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}>
            Turn complex data into understandable content — faster than ever.
          </motion.p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <motion.div key={f.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}>
                <Card className="glass-card border-0 h-full hover:border-primary/30 transition-all hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <f.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-display font-semibold text-lg mb-2">{f.title}</h3>
                    <p className="text-sm text-muted-foreground">{f.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Description */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
                One Click.<br />
                <span className="gradient-text">Infinite Possibilities.</span>
              </h2>
              <p className="text-muted-foreground mb-6">
                Upload your PDF, Excel, or image files. Our AI agent analyzes the content, extracts key insights, and produces professional videos tailored to your audience and channels.
              </p>
              <div className="space-y-3">
                {["AI-powered content analysis", "Automated storyboard generation", "Multi-channel optimization", "Brand-consistent output"].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <ChevronRight className="w-4 h-4 text-primary" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1} className="glass-card rounded-2xl p-8">
              <div className="space-y-4">
                {["1. Upload your files", "2. Configure style & audience", "3. Generate magic prompt", "4. Review & produce video"].map((step, i) => (
                  <div key={step} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold font-display text-sm shrink-0">
                      {i + 1}
                    </div>
                    <span className="text-sm">{step.split(". ")[1]}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.h2 className="text-3xl md:text-4xl font-bold font-display text-center mb-12" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            Frequently Asked Questions
          </motion.h2>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}>
                <AccordionItem value={`faq-${i}`} className="glass-card rounded-lg px-6 border-0">
                  <AccordionTrigger className="text-left font-display hover:no-underline">{faq.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.h2 className="text-3xl md:text-4xl font-bold font-display text-center mb-12" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            What Our Colleagues Say
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((t, i) => (
              <motion.div key={t.name} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}>
                <Card className="glass-card border-0 h-full">
                  <CardContent className="p-6">
                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: t.stars }).map((_, j) => (
                        <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground mb-4 italic">"{t.quote}"</p>
                    <div>
                      <p className="font-display font-semibold text-sm">{t.name}</p>
                      <p className="text-xs text-muted-foreground">{t.role}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Training & Onboarding */}
      <section className="py-24">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <motion.h2 className="text-3xl md:text-4xl font-bold font-display mb-6" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            Training & Onboarding
          </motion.h2>
          <motion.p className="text-muted-foreground mb-8" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}>
            Get started quickly with our guided onboarding. Our team provides hands-on workshops, personalized training sessions, and dedicated support to ensure your team creates professional videos from day one.
          </motion.p>
          <motion.div className="grid sm:grid-cols-3 gap-6" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={2}>
            {[
              { title: "Live Workshops", desc: "Interactive sessions with video experts" },
              { title: "1:1 Onboarding", desc: "Personalized setup and configuration" },
              { title: "24/7 Support", desc: "Dedicated help whenever you need it" },
            ].map((s) => (
              <Card key={s.title} className="glass-card border-0">
                <CardContent className="p-6 text-center">
                  <h3 className="font-display font-semibold mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.h2 className="text-3xl md:text-4xl font-bold font-display text-center mb-12" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            Pricing
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {[
              { name: "Freemium", price: "Free", badge: "Available for Hackathon Supporters 😊", features: ["5 videos/month", "Up to 2 min length", "2 output formats", "Basic analytics"], highlight: true, cta: "Get Started" },
              { name: "Enterprise", price: "Custom", badge: "Coming Soon", features: ["Custom integrations", "SSO & team management", "Dedicated account manager", "SLA & compliance", "On-premise option"], highlight: false, cta: "Coming Soon" },
            ].map((plan, i) => (
              <motion.div key={plan.name} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}>
                <Card className={`h-full ${plan.highlight ? "border-primary glow-purple" : "glass-card border-0"}`}>
                  <CardContent className="p-6">
                    {plan.badge && (
                      <Badge className="mb-4 bg-primary/20 text-primary border-0">{plan.badge}</Badge>
                    )}
                    <h3 className="font-display text-xl font-bold mb-1">{plan.name}</h3>
                    <p className="text-3xl font-display font-bold mb-6">{plan.price}</p>
                    <ul className="space-y-2">
                      {plan.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <ChevronRight className="w-3 h-3 text-primary" /> {f}
                        </li>
                      ))}
                    </ul>
                    {!plan.highlight && (
                      <p className="text-xs text-muted-foreground mt-4 italic">Depends on Hackathon Votings</p>
                    )}
                    <Button className="w-full mt-6" variant={plan.highlight ? "default" : "outline"} disabled={!plan.highlight}>
                      {plan.cta}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Outlook */}
      <section className="py-24">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <motion.h2 className="text-3xl md:text-4xl font-bold font-display mb-6" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            Coming Soon
          </motion.h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { icon: Bot, title: "Full Agentic Automation", desc: "End-to-end video production without human intervention" },
              { icon: Sparkles, title: "Video Production MCP", desc: "Agents turn complexity into understandable content" },
              { icon: Leaf, title: "Sustainable AI Usage", desc: "Efficient prompting for minimal environmental impact" },
            ].map((item, i) => (
              <motion.div key={item.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}>
                <Card className="glass-card border-0 h-full">
                  <CardContent className="p-6 text-center">
                    <item.icon className="w-8 h-8 text-primary mx-auto mb-4" />
                    <h3 className="font-display font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src={snapclipLogo} alt="Snapclip" className="h-8" />
            <span className="text-xs text-muted-foreground tracking-wider uppercase">Simplify. Empower. Engage.</span>
          </div>
          <p className="text-sm text-muted-foreground">© 2026 Snapclip. Hackathon Project.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
