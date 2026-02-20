import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, CheckCircle, Shield, Sparkles, AlertTriangle, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Progress } from "@/components/ui/progress";
import snapclipLogo from "@/assets/snapclip-logo.png";

const mockPrompt = `Create a 2-minute educational video for internal employees explaining Q4 2025 sales performance. 

Style: Educational with corporate tonality.
Target: Internal employees, management level.
Key messages: Revenue growth of 23%, new market expansion, customer retention improvements.
Visual approach: Data visualizations with animated charts, brand colors, clean transitions.
Creator: Alex Studio
Output: Landscape + Vertical formats for YouTube and MS Streams.
Accessibility: Subtitles enabled, color-blind friendly palette.

Generate engaging narration that explains complex financial data in simple, illustrative visualizations highlighting the core value propositions.`;

const configSummary = [
  { label: "Sensitivity", value: "Public" },
  { label: "Audience", value: "Internal" },
  { label: "Length", value: "2 minutes" },
  { label: "Mode", value: "Single Video" },
  { label: "Creator", value: "Alex Studio" },
  { label: "Style", value: "Educational" },
  { label: "Tonality", value: "Corporate" },
  { label: "Formats", value: "Landscape, Vertical" },
  { label: "Channels", value: "YouTube, MS Streams" },
];

const ethicsChecks = [
  { label: "Content bias detection", desc: "Verify content is balanced and unbiased" },
  { label: "Brand compliance check", desc: "Ensure brand guidelines are followed" },
  { label: "Accessibility verification", desc: "Confirm accessibility standards are met" },
  { label: "Data privacy review", desc: "Check for sensitive data exposure" },
];

const PromptReview = () => {
  const navigate = useNavigate();
  const [ethicsEnabled, setEthicsEnabled] = useState<Record<string, boolean>>({ "0": true, "1": true, "2": true, "3": true });
  const [ethicsRunning, setEthicsRunning] = useState(false);
  const [ethicsPassed, setEthicsPassed] = useState(false);
  const [producing, setProducing] = useState(false);
  const [progress, setProgress] = useState(0);

  const runEthicsCheck = () => {
    setEthicsRunning(true);
    setTimeout(() => {
      setEthicsRunning(false);
      setEthicsPassed(true);
    }, 2000);
  };

  const startProduction = () => {
    setProducing(true);
    let p = 0;
    const interval = setInterval(() => {
      p += Math.random() * 8 + 2;
      if (p >= 100) {
        p = 100;
        clearInterval(interval);
        setTimeout(() => navigate("/results"), 500);
      }
      setProgress(p);
    }, 200);
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full z-50 glass-card">
        <div className="container mx-auto flex items-center justify-between h-16 px-4">
          <Link to="/"><img src={snapclipLogo} alt="Snapclip" className="h-8" /></Link>
          <Badge variant="outline" className="border-primary/30 text-primary">Step 3 of 5</Badge>
        </div>
      </nav>

      <div className="container mx-auto px-4 pt-28 pb-16 max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold font-display mb-3">Prompt Review & Ethics</h1>
          <p className="text-muted-foreground">Review your generated prompt before production</p>
        </motion.div>

        <div className="space-y-8">
          {/* Generated Prompt */}
          <Card className="glass-card border-0">
            <CardContent className="p-6">
              <h3 className="font-display font-semibold mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-primary" /> Generated Prompt
              </h3>
              <Textarea value={mockPrompt} readOnly className="bg-secondary border-0 min-h-[200px] font-mono text-sm" />
            </CardContent>
          </Card>

          {/* Config Summary */}
          <Card className="glass-card border-0">
            <CardContent className="p-6">
              <h3 className="font-display font-semibold mb-4">Configuration Summary</h3>
              <div className="grid sm:grid-cols-3 gap-3">
                {configSummary.map((item) => (
                  <div key={item.label} className="glass-card rounded-lg p-3">
                    <p className="text-xs text-muted-foreground">{item.label}</p>
                    <p className="text-sm font-medium">{item.value}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Negative Prompt */}
          <Card className="glass-card border-0">
            <CardContent className="p-6">
              <h3 className="font-display font-semibold mb-4 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-yellow-400" /> Negative Prompt
              </h3>
              <Label className="text-sm text-muted-foreground mb-2 block">What should the video avoid?</Label>
              <Textarea placeholder="e.g., Avoid external product names for public usage, no competitor mentions..." className="bg-secondary border-0" defaultValue="Avoid external product names for public usage" />
            </CardContent>
          </Card>

          {/* Ethics Check */}
          <Card className="glass-card border-0">
            <CardContent className="p-6">
              <h3 className="font-display font-semibold mb-4 flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" /> Ethics & Bias Check
              </h3>
              <div className="space-y-3 mb-6">
                {ethicsChecks.map((check, i) => (
                  <div key={i} className="flex items-center justify-between glass-card rounded-lg p-3">
                    <div>
                      <p className="text-sm font-medium">{check.label}</p>
                      <p className="text-xs text-muted-foreground">{check.desc}</p>
                    </div>
                    <Switch checked={ethicsEnabled[String(i)]} onCheckedChange={(v) => setEthicsEnabled((prev) => ({ ...prev, [String(i)]: v }))} />
                  </div>
                ))}
              </div>
              {!ethicsPassed && (
                <Button onClick={runEthicsCheck} disabled={ethicsRunning} variant="outline" className="w-full">
                  {ethicsRunning ? (
                    <><Eye className="w-4 h-4 mr-2 animate-pulse" /> Running Verification...</>
                  ) : (
                    <><Shield className="w-4 h-4 mr-2" /> Run Ethics Check</>
                  )}
                </Button>
              )}
              <AnimatePresence>
                {ethicsPassed && (
                  <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex items-center gap-3 p-4 rounded-lg bg-green-500/10 border border-green-500/20">
                    <CheckCircle className="w-6 h-6 text-green-400" />
                    <div>
                      <p className="font-medium text-green-300">All checks passed</p>
                      <p className="text-xs text-green-400/70">Ethics & bias verification completed successfully</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </CardContent>
          </Card>

          {/* Production */}
          {!producing ? (
            <Button onClick={startProduction} disabled={!ethicsPassed} className="w-full py-6 text-lg glow-purple" size="lg">
              <Sparkles className="w-5 h-5 mr-2" /> Start Video Production
            </Button>
          ) : (
            <Card className="glass-card border-0">
              <CardContent className="p-8 text-center">
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <Sparkles className="w-10 h-10 text-primary mx-auto mb-4 animate-pulse" />
                  <h3 className="font-display font-semibold text-xl mb-2">Producing Your Video...</h3>
                  <p className="text-sm text-muted-foreground mb-6">AI is generating your video content</p>
                  <Progress value={progress} className="mb-2" />
                  <p className="text-sm text-primary font-display">{Math.round(progress)}%</p>
                </motion.div>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Navigation */}
        {!producing && (
          <div className="flex justify-between mt-12">
            <Link to="/configurator">
              <Button variant="outline"><ArrowLeft className="w-4 h-4 mr-2" /> Back</Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default PromptReview;
