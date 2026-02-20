import { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { Monitor, Smartphone, ExternalLink, Play, CheckCircle, Clock, ArrowRight, Send, Youtube, Linkedin, MessageSquare, Instagram, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import snapclipLogo from "@/assets/snapclip-logo.png";

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
                { label: "Landscape", icon: Monitor, ratio: "aspect-video" },
                { label: "Vertical", icon: Smartphone, ratio: "aspect-[9/16] max-h-80" },
              ].map((v) => (
                <Dialog key={v.label}>
                  <DialogTrigger asChild>
                    <Card className="glass-card border-0 cursor-pointer hover:border-primary/30 transition-all group">
                      <CardContent className="p-4">
                        <div className={`${v.ratio} bg-secondary rounded-lg mb-3 flex items-center justify-center relative overflow-hidden`}>
                          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20" />
                          <Play className="w-12 h-12 text-foreground/50 group-hover:text-primary transition-colors relative z-10" />
                        </div>
                        <div className="flex items-center gap-2">
                          <v.icon className="w-4 h-4 text-muted-foreground" />
                          <span className="text-sm font-medium">{v.label} Format</span>
                        </div>
                      </CardContent>
                    </Card>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl">
                    <DialogHeader>
                      <DialogTitle>{v.label} Preview</DialogTitle>
                    </DialogHeader>
                    <div className={`${v.ratio} bg-secondary rounded-lg flex items-center justify-center`}>
                      <div className="text-center">
                        <Play className="w-16 h-16 text-muted-foreground mx-auto mb-2" />
                        <p className="text-sm text-muted-foreground">Video preview placeholder</p>
                      </div>
                    </div>
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
                          <CheckCircle className="w-5 h-5 text-green-400" />
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
    </div>
  );
};

export default Results;
