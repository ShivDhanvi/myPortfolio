import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  ArrowLeft,
  Send,
  TrendingUp,
  Users,
  DollarSign,
  Activity,
} from "lucide-react";
import { Link } from "react-router-dom";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"; // 1. Import Recharts components

// 2. Mock Data for the Line Chart
const chartData = [
  { name: "Mon", revenue: 4000, users: 2400 },
  { name: "Tue", revenue: 3000, users: 1398 },
  { name: "Wed", revenue: 5000, users: 4800 },
  { name: "Thu", revenue: 4500, users: 3908 },
  { name: "Fri", revenue: 6000, users: 4800 },
  { name: "Sat", revenue: 7000, users: 3800 },
  { name: "Sun", revenue: 6500, users: 4300 },
];

const AIDashboard = () => {
  const [message, setMessage] = useState("");
  const [chatMessages, setChatMessages] = useState([
    {
      type: "ai",
      text: "Hello! I'm your AI assistant. Ask me about your analytics.",
    },
  ]);

  const handleSend = () => {
    if (!message.trim()) return;

    setChatMessages([
      ...chatMessages,
      { type: "user", text: message },
      {
        type: "ai",
        text: "I've analyzed your data. Your user engagement is up 23% this week!",
      },
    ]);
    setMessage("");
  };

  const stats = [
    {
      title: "Total Revenue",
      value: "$45,231",
      change: "+20.1%",
      icon: DollarSign,
    },
    { title: "Active Users", value: "2,350", change: "+15.3%", icon: Users },
    {
      title: "Growth Rate",
      value: "23.5%",
      change: "+12.8%",
      icon: TrendingUp,
    },
    { title: "Engagement", value: "89%", change: "+8.2%", icon: Activity },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <div className="container mx-auto px-4 py-8">
        <Link to="/">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Portfolio
          </Button>
        </Link>

        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">AI-Powered Dashboard</h1>
          <p className="text-muted-foreground">
            Real-time analytics with integrated AI assistant
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
                <stat.icon className="h-4 w-4 text-accent" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-accent mt-1">
                  {stat.change} from last week
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Performance Analytics</CardTitle>
            </CardHeader>
            <CardContent>
              {/* 3. Recharts Integration */}
              <div className="h-80 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={chartData}
                    margin={{
                      top: 5,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                    <XAxis dataKey="name" stroke="#6b7280" />{" "}
                    {/* Use Tailwind muted-foreground color */}
                    <YAxis stroke="#6b7280" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "hsl(var(--background))",
                        border: "1px solid hsl(var(--border))",
                        borderRadius: "4px",
                      }}
                    />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="revenue"
                      stroke="hsl(var(--primary))"
                      activeDot={{ r: 8 }}
                      strokeWidth={2}
                    />
                    <Line
                      type="monotone"
                      dataKey="users"
                      stroke="hsl(var(--accent))"
                      strokeWidth={2}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              {/* End Recharts Integration */}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>AI Assistant</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="h-64 overflow-y-auto space-y-3 mb-4">
                  {chatMessages.map((msg, idx) => (
                    <div
                      key={idx}
                      className={`p-3 rounded-lg ${
                        msg.type === "ai"
                          ? "bg-primary/10 text-foreground"
                          : "bg-accent/10 text-foreground ml-8"
                      }`}
                    >
                      <p className="text-sm">{msg.text}</p>
                    </div>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Input
                    placeholder="Ask AI about your data..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleSend()}
                  />
                  <Button onClick={handleSend} size="icon">
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AIDashboard;
