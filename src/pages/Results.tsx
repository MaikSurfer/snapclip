import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { Monitor, Smartphone, ExternalLink, Play, CheckCircle, Clock, ArrowRight, Send, Youtube, Linkedin, MessageSquare, Instagram, Twitter, Star, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import snapclipLogo from "@/assets/snapclip-logo.png";
import thumbLandscape from "@/assets/thumb-landscape.jpg";
import thumbVertical from "@/assets/thumb-vertical.jpg";

const channelIcons: Record<string, React.ElementType> = {
  YouTube: Youtube,
  LinkedIn: Linkedin,
  "MS Streams": MessageSquare,
  Instagram: Instagram,
  X: Twitter,
};

const historySteps = [
  { time: "10:32", label: "Files uploaded", status: "done" },
  { time: "10:33", label: "Configuration completed", status: "done" },
  { time: "10:34", label: "Ethics check passed", status: "done" },
  { time: "10:35", label: "Video production started", status: "done" },
  { time: "10:38", label: "Video production complete", status: "done" },
  { time: "10:38", label: "Approval ready", status: "current" },
  { time: "—", label: "Ready to publish", status: "pending" },
];

const Results = () => {
  const navigate = useNavigate();
  const [showSponsorPopup, setShowSponsorPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowSponsorPopup(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full z-50 glass-card">
        <div className="container mx-auto flex items-center justify-between h-16 px-4">
          <Link to="/"><img src={snapclipLogo} alt="Snapclip" className="h-8" /></Link>
          <Badge variant="outline" className="border-primary/30 text-primary">Step 4 of 5</Badge>
        </div>
      </nav>

      <div className="container mx-auto px-4 pt-28 pb-16">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold font-display mb-3">Video Results</h1>
          <p className="text-muted-foreground">Preview and approve your generated videos</p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Video Previews */}
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { label: "Landscape", icon: Monitor, ratio: "aspect-video", thumb: thumbLandscape },
                { label: "Vertical", icon: Smartphone, ratio: "aspect-[9/16] max-h-80", thumb: thumbVertical },
              ].map((v) => (
                <Dialog key={v.label}>
                  <DialogTrigger asChild>
                    <Card className="glass-card border-0 cursor-pointer hover:border-primary/30 transition-all group">
                      <CardContent className="p-4">
                        <div className={`${v.ratio} bg-secondary rounded-lg mb-3 flex items-center justify-center relative overflow-hidden`}>
                          <img src={v.thumb} alt={`${v.label} preview`} className="absolute inset-0 w-full h-full object-cover" />
                          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
                          <Play className="w-12 h-12 text-white/80 group-hover:text-white transition-colors relative z-10 drop-shadow-lg" />
                        </div>
                        <div className="flex items-center gap-2">
                          <v.icon className="w-4 h-4 text-muted-foreground" />
                          <span className="text-sm font-medium">{v.label} Format</span>
                          <Badge variant="outline" className="ml-auto text-xs">Science • Molecule</Badge>
                        </div>
                      </CardContent>
                    </Card>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl">
                    <DialogHeader>
                      <DialogTitle>{v.label} Preview — Science Person Explains a Molecule</DialogTitle>
                    </DialogHeader>
                    <div className={`${v.ratio} rounded-lg overflow-hidden relative`}>
                      <img src={v.thumb} alt={`${v.label} preview`} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                        <Play className="w-16 h-16 text-white drop-shadow-lg" />
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">2-minute educational video: A scientist explains molecular structures with animated 3D visualizations.</p>
                  </DialogContent>
                </Dialog>
              ))}
            </div>

            {/* Channel Links */}
            <Card className="glass-card border-0">
              <CardContent className="p-6">
                <h3 className="font-display font-semibold mb-4">Channel Distribution</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {["YouTube", "MS Streams", "LinkedIn", "Instagram", "X"].map((ch) => {
                    const Icon = channelIcons[ch] || ExternalLink;
                    return (
                      <div key={ch} className="flex items-center justify-between glass-card rounded-lg p-3">
                        <div className="flex items-center gap-3">
                          <Icon className="w-4 h-4 text-primary" />
                          <span className="text-sm">{ch}</span>
                        </div>
                        <Button variant="ghost" size="sm">
                          <ExternalLink className="w-3 h-3" />
                        </Button>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Actions */}
            <div className="flex flex-wrap gap-3">
              <Button className="glow-purple" size="lg">
                <Send className="w-4 h-4 mr-2" /> Start Approval Process
              </Button>
              <Button variant="outline" size="lg" onClick={() => navigate("/dashboard")}>
                Video Performance <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>

          {/* History Sidebar */}
          <div>
            <Card className="glass-card border-0 sticky top-24">
              <CardContent className="p-6">
                <h3 className="font-display font-semibold mb-4">Process History</h3>
                <div className="space-y-4">
                  {historySteps.map((step, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="flex flex-col items-center">
                        {step.status === "done" ? (
                          <CheckCircle className="w-5 h-5 text-green-600" />
                        ) : step.status === "current" ? (
                          <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                            <div className="w-2 h-2 rounded-full bg-primary-foreground" />
                          </div>
                        ) : (
                          <Clock className="w-5 h-5 text-muted-foreground" />
                        )}
                        {i < historySteps.length - 1 && (
                          <div className={`w-px h-6 mt-1 ${step.status === "done" ? "bg-green-400/30" : "bg-border"}`} />
                        )}
                      </div>
                      <div>
                        <p className={`text-sm ${step.status === "current" ? "font-semibold text-primary" : step.status === "pending" ? "text-muted-foreground" : ""}`}>
                          {step.label}
                        </p>
                        <p className="text-xs text-muted-foreground">{step.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Sponsor Popup */}
      <AnimatePresence>
        {showSponsorPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl p-8 max-w-md mx-4 shadow-2xl text-center relative"
            >
              <button onClick={() => setShowSponsorPopup(false)} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground">
                <X className="w-5 h-5" />
              </button>
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-2xl font-bold mb-2">Become a Sponsor</h2>
              <p className="text-lg font-semibold text-primary mb-3">Vote for Snapclip to make it happen!</p>
              <p className="text-sm text-muted-foreground mb-6">
                Love what you see? Support us at #Hackathon2026! Your vote helps us bring AI-powered video creation to everyone.
              </p>
              <div className="flex gap-3 justify-center">
                <Button className="glow-purple px-6" size="lg">
                  <Star className="w-4 h-4 mr-2" /> Vote Now
                </Button>
                <Button variant="outline" size="lg" onClick={() => setShowSponsorPopup(false)}>
                  Maybe Later
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Results;
