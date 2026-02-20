import { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { Upload as UploadIcon, FileText, Image, Table, X, Youtube, Plus, ArrowRight, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import snapclipLogo from "@/assets/snapclip-logo.png";

interface UploadedFile {
  name: string;
  type: string;
  size: string;
}

const Upload = () => {
  const navigate = useNavigate();
  const [files, setFiles] = useState<UploadedFile[]>([]);
  const [youtubeUrls, setYoutubeUrls] = useState<string[]>([]);
  const [urlInput, setUrlInput] = useState("");
  const [dragOver, setDragOver] = useState(false);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    const mockFiles: UploadedFile[] = [
      { name: "Q4-Report-2025.pdf", type: "pdf", size: "2.4 MB" },
      { name: "Sales-Data.xlsx", type: "excel", size: "1.1 MB" },
    ];
    setFiles((prev) => [...prev, ...mockFiles]);
  };

  const addUrl = () => {
    if (urlInput.trim()) {
      setYoutubeUrls((prev) => [...prev, urlInput.trim()]);
      setUrlInput("");
    }
  };

  const getIcon = (type: string) => {
    switch (type) {
      case "pdf": return <FileText className="w-5 h-5 text-red-400" />;
      case "excel": return <Table className="w-5 h-5 text-green-400" />;
      default: return <Image className="w-5 h-5 text-blue-400" />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full z-50 glass-card">
        <div className="container mx-auto flex items-center justify-between h-16 px-4">
          <Link to="/"><img src={snapclipLogo} alt="Snapclip" className="h-8" /></Link>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Badge variant="outline" className="border-primary/30 text-primary">Step 1 of 5</Badge>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 pt-28 pb-16 max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold font-display mb-3">Upload Your Files</h1>
          <p className="text-muted-foreground">Drag and drop your PDF, Excel, or image files to get started</p>
        </motion.div>

        {/* Drop Zone */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          <div
            onDrop={handleDrop}
            onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
            onDragLeave={() => setDragOver(false)}
            onClick={() => {
              setFiles([
                { name: "Q4-Report-2025.pdf", type: "pdf", size: "2.4 MB" },
                { name: "Sales-Data.xlsx", type: "excel", size: "1.1 MB" },
                { name: "Brand-Assets.png", type: "image", size: "3.8 MB" },
              ]);
            }}
            className={`glass-card rounded-2xl p-12 text-center cursor-pointer transition-all ${dragOver ? "border-primary border-2 bg-primary/5" : "border-dashed border-2 border-border hover:border-primary/50"}`}
          >
            <UploadIcon className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <p className="font-display font-semibold mb-1">Click or drag files here</p>
            <p className="text-sm text-muted-foreground">PDF, Excel (.xlsx, .csv), Images (PNG, JPG, SVG)</p>
          </div>
        </motion.div>

        {/* File List */}
        {files.length > 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-6 space-y-2">
            {files.map((file, i) => (
              <Card key={i} className="glass-card border-0">
                <CardContent className="p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {getIcon(file.type)}
                    <div>
                      <p className="text-sm font-medium">{file.name}</p>
                      <p className="text-xs text-muted-foreground">{file.size}</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon" onClick={() => setFiles((prev) => prev.filter((_, j) => j !== i))}>
                    <X className="w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        )}

        {/* YouTube Inspiration */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mt-12">
          <h2 className="text-xl font-bold font-display mb-4 flex items-center gap-2">
            <Youtube className="w-5 h-5 text-red-400" /> Inspiration Sources
          </h2>
          <p className="text-sm text-muted-foreground mb-4">Paste YouTube URLs to copy style or use as inspiration for your video production.</p>
          <div className="flex gap-2">
            <Input
              placeholder="https://youtube.com/watch?v=..."
              value={urlInput}
              onChange={(e) => setUrlInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && addUrl()}
              className="bg-secondary border-0"
            />
            <Button variant="outline" onClick={addUrl}><Plus className="w-4 h-4" /></Button>
          </div>
          {youtubeUrls.length > 0 && (
            <div className="mt-3 space-y-2">
              {youtubeUrls.map((url, i) => (
                <div key={i} className="flex items-center justify-between glass-card rounded-lg px-4 py-2">
                  <span className="text-sm truncate">{url}</span>
                  <Button variant="ghost" size="icon" onClick={() => setYoutubeUrls((prev) => prev.filter((_, j) => j !== i))}>
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              ))}
            </div>
          )}
        </motion.div>

        {/* Navigation */}
        <div className="flex justify-between mt-12">
          <Link to="/">
            <Button variant="outline"><ArrowLeft className="w-4 h-4 mr-2" /> Back</Button>
          </Link>
          <Button onClick={() => navigate("/configurator")} disabled={files.length === 0}>
            Configure Video <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Upload;
