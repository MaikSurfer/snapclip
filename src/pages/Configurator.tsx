import { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, Sparkles, Leaf } from "lucide-react";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";
import snapclipLogo from "@/assets/snapclip-logo.png";

const channels = ["YouTube", "WhatsApp", "MS Streams", "LinkedIn", "Instagram", "X"];

const Configurator = () => {
  const navigate = useNavigate();
  const [sensitivity, setSensitivity] = useState("public");
  const [audience, setAudience] = useState("internal");
  const [videoLength, setVideoLength] = useState([120]);
  const [videoMode, setVideoMode] = useState("single");
  const [videoCount, setVideoCount] = useState(1);
  const [creator, setCreator] = useState("alex");
  const [style, setStyle] = useState("educational");
  const [tonality, setTonality] = useState("corporate");
  const [format_, setFormat] = useState<string[]>(["landscape", "vertical"]);
  const [selectedChannels, setSelectedChannels] = useState<string[]>(["YouTube", "MS Streams"]);
  const [startDate, setStartDate] = useState<Date>(new Date(2026, 2, 1));
  const [endDate, setEndDate] = useState<Date>(new Date(2026, 5, 30));

  const formatLength = (seconds: number) => {
    if (seconds < 60) return `${seconds}s`;
    if (seconds < 3600) return `${Math.floor(seconds / 60)}m ${seconds % 60}s`;
    return `${Math.floor(seconds / 3600)}h ${Math.floor((seconds % 3600) / 60)}m`;
  };

  const toggleChannel = (ch: string) => {
    setSelectedChannels((prev) =>
      prev.includes(ch) ? prev.filter((c) => c !== ch) : [...prev, ch]
    );
  };

  const toggleFormat = (f: string) => {
    setFormat((prev) =>
      prev.includes(f) ? prev.filter((c) => c !== f) : [...prev, f]
    );
  };

  // Mock cost calculation
  const tokenEstimate = Math.round(videoLength[0] * 15 * (videoMode === "compilation" ? videoCount : 1));
  const costEstimate = (tokenEstimate * 0.002).toFixed(2);

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full z-50 glass-card">
        <div className="container mx-auto flex items-center justify-between h-16 px-4">
          <Link to="/"><img src={snapclipLogo} alt="Snapclip" className="h-8" /></Link>
          <Badge variant="outline" className="border-primary/30 text-primary">Step 2 of 5</Badge>
        </div>
      </nav>

      <div className="container mx-auto px-4 pt-28 pb-16 max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold font-display mb-3">Video Configurator</h1>
          <p className="text-muted-foreground">Set up your video requirements</p>
        </motion.div>

        <div className="space-y-8">
          {/* Sensitivity & Visibility */}
          <Card className="glass-card border-0">
            <CardContent className="p-6">
              <h3 className="font-display font-semibold mb-4">Sensitivity & Visibility</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label className="mb-2 block">Sensitivity</Label>
                  <div className="flex gap-2">
                    {["public", "restricted", "secret"].map((s) => (
                      <Button key={s} variant={sensitivity === s ? "default" : "outline"} size="sm" onClick={() => setSensitivity(s)} className="capitalize">
                        {s}
                      </Button>
                    ))}
                  </div>
                </div>
                <div>
                  <Label className="mb-2 block">Audience</Label>
                  <div className="flex gap-2">
                    {["public", "internal"].map((a) => (
                      <Button key={a} variant={audience === a ? "default" : "outline"} size="sm" onClick={() => setAudience(a)} className="capitalize">
                        {a}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Video Settings */}
          <Card className="glass-card border-0">
            <CardContent className="p-6">
              <h3 className="font-display font-semibold mb-4">Video Settings</h3>
              <div className="space-y-4">
                <div>
                  <Label className="mb-2 block">Length: {formatLength(videoLength[0])}</Label>
                  <Slider value={videoLength} onValueChange={setVideoLength} min={15} max={1800} step={15} className="mt-2" />
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>15s</span><span>30min</span>
                  </div>
                </div>
                <div>
                  <Label className="mb-2 block">Mode</Label>
                  <div className="flex gap-2">
                    <Button variant={videoMode === "single" ? "default" : "outline"} size="sm" onClick={() => setVideoMode("single")}>Single Video</Button>
                    <Button variant={videoMode === "compilation" ? "default" : "outline"} size="sm" onClick={() => setVideoMode("compilation")}>Video Compilation</Button>
                  </div>
                  {videoMode === "compilation" && (
                    <div className="mt-3 flex items-center gap-3">
                      <Label>Amount:</Label>
                      <Input type="number" value={videoCount} onChange={(e) => setVideoCount(+e.target.value)} min={2} max={20} className="w-20 bg-secondary border-0" />
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Content Brief */}
          <Card className="glass-card border-0">
            <CardContent className="p-6">
              <h3 className="font-display font-semibold mb-4">Content Brief</h3>
              <div className="space-y-4">
                <div>
                  <Label className="mb-2 block">Content Description</Label>
                  <Textarea placeholder="Describe the content and key messages of your video..." className="bg-secondary border-0" defaultValue="Explain the molecular structure of aspirin (acetylsalicylic acid) using 3D visualizations. Highlight the key chemical bonds and how they relate to the drug's mechanism of action." />
                </div>
                <div>
                  <Label className="mb-2 block">Target Audience</Label>
                  <Select>
                    <SelectTrigger className="bg-secondary border-0"><SelectValue placeholder="Select audience" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="employees">Employees</SelectItem>
                      <SelectItem value="customers">Customers</SelectItem>
                      <SelectItem value="students">Students</SelectItem>
                      <SelectItem value="general">General Public</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label className="mb-2 block">Core Messages & Objectives</Label>
                  <Textarea placeholder="What should the video achieve? Key takeaways..." className="bg-secondary border-0" defaultValue="Viewers should understand the basic molecular structure, identify key functional groups, and appreciate how molecular design affects drug efficacy." />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label className="mb-2 block">Publication Start</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant="outline" className={cn("w-full justify-start text-left", !startDate && "text-muted-foreground")}>
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {startDate ? format(startDate, "PPP") : "Pick start date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0"><Calendar mode="single" selected={startDate} onSelect={setStartDate} className="p-3 pointer-events-auto" /></PopoverContent>
                    </Popover>
                  </div>
                  <div>
                    <Label className="mb-2 block">Publication End</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant="outline" className={cn("w-full justify-start text-left", !endDate && "text-muted-foreground")}>
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {endDate ? format(endDate, "PPP") : "Pick end date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0"><Calendar mode="single" selected={endDate} onSelect={setEndDate} className="p-3 pointer-events-auto" /></PopoverContent>
                    </Popover>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Creator & Style */}
          <Card className="glass-card border-0">
            <CardContent className="p-6">
              <h3 className="font-display font-semibold mb-4">Creator & Style</h3>
              <div className="grid sm:grid-cols-3 gap-4">
                <div>
                  <Label className="mb-2 block">Video Creator</Label>
                  <Select value={creator} onValueChange={setCreator}>
                    <SelectTrigger className="bg-secondary border-0"><SelectValue placeholder="Select creator" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="alex">Alex Studio</SelectItem>
                      <SelectItem value="maya">Maya Productions</SelectItem>
                      <SelectItem value="leo">Leo Creative</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label className="mb-2 block">Video Style</Label>
                  <Select value={style} onValueChange={setStyle}>
                    <SelectTrigger className="bg-secondary border-0"><SelectValue placeholder="Select style" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="educational">Educational</SelectItem>
                      <SelectItem value="promotion">Promotion</SelectItem>
                      <SelectItem value="branding">Branding</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label className="mb-2 block">Tonality</Label>
                  <Select value={tonality} onValueChange={setTonality}>
                    <SelectTrigger className="bg-secondary border-0"><SelectValue placeholder="Select tone" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="educational">Educational</SelectItem>
                      <SelectItem value="corporate">Corporate</SelectItem>
                      <SelectItem value="conversational">Conversational</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Output Configuration */}
          <Card className="glass-card border-0">
            <CardContent className="p-6">
              <h3 className="font-display font-semibold mb-4">Output Configuration</h3>
              <div className="space-y-4">
                <div>
                  <Label className="mb-2 block">Format</Label>
                  <div className="flex gap-2">
                    {["landscape", "vertical"].map((f) => (
                      <Button key={f} variant={format_.includes(f) ? "default" : "outline"} size="sm" onClick={() => toggleFormat(f)} className="capitalize">
                        {f}
                      </Button>
                    ))}
                  </div>
                </div>
                <div>
                  <Label className="mb-2 block">Channels</Label>
                  <div className="flex flex-wrap gap-2">
                    {channels.map((ch) => (
                      <Button key={ch} variant={selectedChannels.includes(ch) ? "default" : "outline"} size="sm" onClick={() => toggleChannel(ch)}>
                        {ch}
                      </Button>
                    ))}
                  </div>
                </div>
                <div>
                  <Label className="mb-2 block">Accessibility</Label>
                  <Input placeholder="e.g., Subtitles for hearing impaired, color-blind friendly palette..." className="bg-secondary border-0" defaultValue="Subtitles enabled, color-blind friendly palette" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Transparency */}
          <Card className="glass-card border-0 border-l-4 border-l-primary">
            <CardContent className="p-6">
              <h3 className="font-display font-semibold mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-primary" /> Transparency
              </h3>
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div className="glass-card rounded-lg p-4">
                  <p className="text-xs text-muted-foreground mb-1">Estimated Tokens</p>
                  <p className="text-2xl font-display font-bold text-primary">{tokenEstimate.toLocaleString()}</p>
                </div>
                <div className="glass-card rounded-lg p-4">
                  <p className="text-xs text-muted-foreground mb-1">Estimated Cost</p>
                  <p className="text-2xl font-display font-bold text-accent">€{costEstimate}</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-lg bg-white border border-green-600/30">
                <Leaf className="w-5 h-5 text-green-700 shrink-0 mt-0.5" />
                <p className="text-sm text-green-800 font-medium">
                  This {formatLength(videoLength[0])} video ({format_.length} format{format_.length > 1 ? "s" : ""}) generated approx. 0.5 kg CO₂, which has been fully offset, and is delivered via green streaming to ensure climate-neutral distribution.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Navigation */}
        <div className="flex justify-between mt-12">
          <Link to="/upload">
            <Button variant="outline"><ArrowLeft className="w-4 h-4 mr-2" /> Back</Button>
          </Link>
          <Button onClick={() => navigate("/prompt-review")} className="glow-purple">
            <Sparkles className="w-4 h-4 mr-2" /> Generate Magic Prompt <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Configurator;
