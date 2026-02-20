import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { TrendingUp, Eye, Clock, ThumbsUp, Users, Building2, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  AreaChart, Area, BarChart, Bar, LineChart, Line,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from "recharts";
import snapclipLogo from "@/assets/snapclip-logo.png";

const retentionData = [
  { time: "0s", retention: 100 }, { time: "15s", retention: 95 }, { time: "30s", retention: 88 },
  { time: "45s", retention: 82 }, { time: "60s", retention: 76 }, { time: "75s", retention: 71 },
  { time: "90s", retention: 65 }, { time: "105s", retention: 58 }, { time: "120s", retention: 52 },
];

const departmentData = [
  { dept: "Sales", views: 245 }, { dept: "Marketing", views: 189 }, { dept: "Engineering", views: 156 },
  { dept: "HR", views: 134 }, { dept: "Finance", views: 98 }, { dept: "Legal", views: 67 },
];

const linkedinData = [
  { week: "W1", impressions: 1200, engagement: 89 }, { week: "W2", impressions: 2400, engagement: 156 },
  { week: "W3", impressions: 3800, engagement: 234 }, { week: "W4", impressions: 5100, engagement: 312 },
];

const youtubeData = [
  { day: "Mon", views: 120 }, { day: "Tue", views: 180 }, { day: "Wed", views: 250 },
  { day: "Thu", views: 310 }, { day: "Fri", views: 280 }, { day: "Sat", views: 150 }, { day: "Sun", views: 190 },
];

const stats = [
  { label: "Total Views", value: "1,247", icon: Eye, change: "+23%" },
  { label: "Completion Rate", value: "68%", icon: ThumbsUp, change: "+5%" },
  { label: "Avg Duration", value: "1m 22s", icon: Clock, change: "+12%" },
  { label: "Engagement", value: "892", icon: TrendingUp, change: "+31%" },
];

const recommendations = [
  { title: "Shorten intro", desc: "30% of viewers drop off in the first 15 seconds. Consider a faster hook.", priority: "high" },
  { title: "Add captions", desc: "Videos with captions see 40% more engagement on LinkedIn.", priority: "medium" },
  { title: "Vertical format", desc: "Your Instagram audience prefers vertical — consider prioritizing 9:16.", priority: "medium" },
];

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full z-50 glass-card">
        <div className="container mx-auto flex items-center justify-between h-16 px-4">
          <Link to="/"><img src={snapclipLogo} alt="Snapclip" className="h-8" /></Link>
          <Badge variant="outline" className="border-primary/30 text-primary">Step 5 of 5</Badge>
        </div>
      </nav>

      <div className="container mx-auto px-4 pt-28 pb-16">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold font-display mb-3">Performance Dashboard</h1>
          <p className="text-muted-foreground">2-Minute Educational Video • Published 7 days ago</p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, i) => (
            <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
              <Card className="glass-card border-0">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <stat.icon className="w-5 h-5 text-muted-foreground" />
                    <Badge variant="outline" className="text-green-400 border-green-400/30 text-xs">{stat.change}</Badge>
                  </div>
                  <p className="text-2xl font-display font-bold">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          {/* Retention */}
          <Card className="glass-card border-0">
            <CardHeader>
              <CardTitle className="font-display text-lg">Video Retention Time</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <AreaChart data={retentionData}>
                  <defs>
                    <linearGradient id="retGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(255 70% 60%)" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="hsl(255 70% 60%)" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(230 15% 22%)" />
                  <XAxis dataKey="time" stroke="hsl(220 10% 55%)" fontSize={12} />
                  <YAxis stroke="hsl(220 10% 55%)" fontSize={12} />
                  <Tooltip contentStyle={{ background: "hsl(230 20% 12%)", border: "1px solid hsl(230 15% 25%)", borderRadius: "8px", color: "hsl(220 20% 95%)" }} />
                  <Area type="monotone" dataKey="retention" stroke="hsl(255 70% 60%)" fill="url(#retGrad)" strokeWidth={2} />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Departments */}
          <Card className="glass-card border-0">
            <CardHeader>
              <CardTitle className="font-display text-lg flex items-center gap-2"><Building2 className="w-5 h-5" /> Internal — Departments</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={departmentData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(230 15% 22%)" />
                  <XAxis dataKey="dept" stroke="hsl(220 10% 55%)" fontSize={12} />
                  <YAxis stroke="hsl(220 10% 55%)" fontSize={12} />
                  <Tooltip contentStyle={{ background: "hsl(230 20% 12%)", border: "1px solid hsl(230 15% 25%)", borderRadius: "8px", color: "hsl(220 20% 95%)" }} />
                  <Bar dataKey="views" fill="hsl(220 90% 56%)" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* LinkedIn */}
          <Card className="glass-card border-0">
            <CardHeader>
              <CardTitle className="font-display text-lg flex items-center gap-2"><BarChart3 className="w-5 h-5" /> LinkedIn Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={linkedinData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(230 15% 22%)" />
                  <XAxis dataKey="week" stroke="hsl(220 10% 55%)" fontSize={12} />
                  <YAxis stroke="hsl(220 10% 55%)" fontSize={12} />
                  <Tooltip contentStyle={{ background: "hsl(230 20% 12%)", border: "1px solid hsl(230 15% 25%)", borderRadius: "8px", color: "hsl(220 20% 95%)" }} />
                  <Line type="monotone" dataKey="impressions" stroke="hsl(255 70% 60%)" strokeWidth={2} dot={{ fill: "hsl(255 70% 60%)" }} />
                  <Line type="monotone" dataKey="engagement" stroke="hsl(220 90% 56%)" strokeWidth={2} dot={{ fill: "hsl(220 90% 56%)" }} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* YouTube */}
          <Card className="glass-card border-0">
            <CardHeader>
              <CardTitle className="font-display text-lg flex items-center gap-2"><Users className="w-5 h-5" /> YouTube Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={youtubeData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(230 15% 22%)" />
                  <XAxis dataKey="day" stroke="hsl(220 10% 55%)" fontSize={12} />
                  <YAxis stroke="hsl(220 10% 55%)" fontSize={12} />
                  <Tooltip contentStyle={{ background: "hsl(230 20% 12%)", border: "1px solid hsl(230 15% 25%)", borderRadius: "8px", color: "hsl(220 20% 95%)" }} />
                  <Bar dataKey="views" fill="hsl(255 70% 60%)" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Recommendations */}
        <Card className="glass-card border-0">
          <CardHeader>
            <CardTitle className="font-display text-lg">Recommendations & Insights</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid sm:grid-cols-3 gap-4">
              {recommendations.map((rec) => (
                <div key={rec.title} className="glass-card rounded-lg p-4">
                  <Badge variant="outline" className={`mb-2 text-xs ${rec.priority === "high" ? "border-red-400/30 text-red-400" : "border-yellow-400/30 text-yellow-400"}`}>
                    {rec.priority}
                  </Badge>
                  <h4 className="font-display font-semibold text-sm mb-1">{rec.title}</h4>
                  <p className="text-xs text-muted-foreground">{rec.desc}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="mt-8 text-center">
          <Link to="/">
            <Button variant="outline">Back to Home</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
