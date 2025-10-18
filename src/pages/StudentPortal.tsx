import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  GraduationCap,
  BookOpen,
  Award,
  Clock,
  ChevronRight,
} from "lucide-react";
import { Link, HashRouter } from "react-router-dom"; // Import HashRouter

// Mock data (kept as-is)
const coursesData = [
  {
    name: "React.js Fundamentals",
    progress: 85,
    status: "In Progress",
    color: "bg-blue-500",
  },
  {
    name: "JavaScript Advanced",
    progress: 100,
    status: "Completed",
    color: "bg-green-500",
  },
  {
    name: "Web Design Basics",
    progress: 60,
    status: "In Progress",
    color: "bg-purple-500",
  },
  {
    name: "Python for Data Science",
    progress: 20,
    status: "Not Started",
    color: "bg-yellow-500",
  },
];

const recentActivityData = [
  { action: "Completed assignment", course: "React.js", time: "2 hours ago" },
  { action: "Started new module", course: "JavaScript", time: "5 hours ago" },
  { action: "Submitted project", course: "Web Design", time: "1 day ago" },
  { action: "Checked syllabus", course: "Python", time: "2 days ago" },
];

const statsData = [
  {
    label: "Courses Enrolled",
    value: "12",
    icon: BookOpen,
    bgColor: "bg-blue-500/10",
    iconColor: "text-blue-500",
  },
  {
    label: "Completed",
    value: "8",
    icon: Award,
    bgColor: "bg-green-500/10",
    iconColor: "text-green-500",
  },
  {
    label: "Hours Learned",
    value: "156",
    icon: Clock,
    bgColor: "bg-purple-500/10",
    iconColor: "text-purple-500",
  },
  {
    label: "Current GPA",
    value: "3.8",
    icon: GraduationCap,
    bgColor: "bg-red-500/10",
    iconColor: "text-red-500",
  },
];

// Inner component logic, renamed to StudentPortalContent
const StudentPortal = () => {
  // The logic remains the same, but the outer wrapping (Link) is now safe.
  return (
    // Updated background with a subtle, modern gradient
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-all duration-300">
      <div className="container mx-auto px-4 py-12">
        {/* Back Button */}
        <Link to="/">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Portfolio
          </Button>
        </Link>

        {/* Header */}
        <div className="mb-10 border-b pb-4">
          <h1 className="text-5xl font-extrabold text-foreground tracking-tight">
            Hello, Student! 👋
          </h1>
          <p className="text-lg text-muted-foreground mt-2">
            Your progress is looking great. Keep up the momentum!
          </p>
        </div>

        {/* Stat Cards (More Colorful & Distinct) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {statsData.map((stat, index) => (
            <Card
              key={index}
              className={`p-4 rounded-xl border-none shadow-lg hover:shadow-xl transition-all duration-300 ${stat.bgColor}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="flex flex-row items-center justify-between pb-2 p-0">
                <CardTitle className="text-sm font-semibold text-muted-foreground">
                  {stat.label}
                </CardTitle>
                <div
                  className={`p-2 rounded-full ${stat.iconColor} bg-white dark:bg-gray-800 shadow`}
                >
                  <stat.icon className="h-5 w-5" />
                </div>
              </CardHeader>
              <CardContent className="mt-4 p-0">
                <div className="text-4xl font-extrabold text-foreground">
                  {stat.value}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content: Courses and Activity */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* My Courses (Expanded to 2 cols on desktop) */}
          <Card className="lg:col-span-2 shadow-lg border-2 border-primary/10 rounded-xl p-6">
            <CardHeader className="p-0 mb-6">
              <CardTitle className="text-2xl font-bold border-l-4 border-primary pl-3">
                My Current Courses
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 p-0">
              {coursesData.map((course, index) => (
                <div
                  key={index}
                  className="p-4 bg-card rounded-lg shadow-md hover:shadow-lg transition-shadow border border-border/50 cursor-pointer group"
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-lg">{course.name}</span>
                    <div className="flex items-center gap-2">
                      <span
                        className={`text-xs font-bold px-3 py-1 rounded-full text-white ${
                          course.status === "Completed"
                            ? "bg-green-500"
                            : course.status === "In Progress"
                            ? "bg-blue-500"
                            : "bg-gray-500"
                        }`}
                      >
                        {course.status}
                      </span>
                      <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                  </div>

                  {/* Progress Bar (Color matched to status/course) */}
                  <div className="w-full bg-secondary rounded-full h-2.5">
                    <div
                      className={`${course.color} h-2.5 rounded-full transition-all duration-500 ease-out`}
                      style={{ width: `${course.progress}%` }}
                    />
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    {course.progress}% Complete
                  </p>
                </div>
              ))}
              <Button className="w-full mt-4 bg-primary hover:bg-primary/90 transition-colors">
                View All Courses
              </Button>
            </CardContent>
          </Card>

          {/* Recent Activity (Timeline Style) */}
          <Card className="shadow-lg rounded-xl p-6">
            <CardHeader className="p-0 mb-6">
              <CardTitle className="text-2xl font-bold border-l-4 border-accent pl-3">
                Recent Activity
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 p-0">
              <div className="relative border-l-2 border-border ml-2">
                {recentActivityData.map((activity, index) => (
                  <div
                    key={index}
                    className="flex items-start pl-6 relative pb-6 group"
                  >
                    {/* Timeline Dot */}
                    <div className="absolute -left-[7px] top-1 w-3.5 h-3.5 rounded-full bg-accent ring-4 ring-card group-hover:bg-accent-foreground transition-colors" />

                    <div className="flex-1 p-3 bg-secondary/50 rounded-lg transition-all hover:bg-secondary border border-transparent hover:border-accent">
                      <p className="font-semibold">{activity.action}</p>
                      <p className="text-sm text-accent font-medium mt-0.5">
                        {activity.course}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {activity.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default StudentPortal;
