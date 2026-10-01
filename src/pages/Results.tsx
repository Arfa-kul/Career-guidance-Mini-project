import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Award, Download, TrendingUp, BookOpen, GraduationCap, Briefcase, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Results = () => {
  const navigate = useNavigate();

  const careerResults = [
    {
      career: "Software Engineering",
      match: 92,
      color: "primary",
      icon: "💻"
    },
    {
      career: "Data Science",
      match: 88,
      color: "secondary",
      icon: "📊"
    },
    {
      career: "Artificial Intelligence",
      match: 85,
      color: "primary",
      icon: "🤖"
    }
  ];

  const skills = [
    { name: "Logical Reasoning", score: 90 },
    { name: "Numerical Ability", score: 85 },
    { name: "Problem Solving", score: 88 },
    { name: "Creative Thinking", score: 75 },
    { name: "Memory", score: 82 }
  ];

  const roadmap = [
    {
      phase: "School (11-12th)",
      items: ["Focus on Mathematics, Physics, Computer Science", "Learn basic programming (Python, Java)", "Participate in coding competitions"]
    },
    {
      phase: "Higher Education",
      items: ["B.Tech in Computer Science or related field", "Consider specializations: AI/ML, Cloud Computing", "Build projects and contribute to open source"]
    },
    {
      phase: "Skills to Develop",
      items: ["Master programming languages", "Learn data structures & algorithms", "Understand databases and system design", "Develop soft skills: communication, teamwork"]
    }
  ];

  const colleges = [
    { name: "IIT Bombay - Computer Science", fees: "₹2.5L/year", rating: "9.5/10" },
    { name: "BITS Pilani - Computer Science", fees: "₹4.5L/year", rating: "9.2/10" },
    { name: "VIT Vellore - CSE", fees: "₹2L/year", rating: "8.8/10" }
  ];

  return (
    <div className="min-h-screen bg-gradient-section py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in-up">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-hero rounded-full mb-6 shadow-yellow">
              <Award className="w-10 h-10 text-primary-foreground" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Your Career Assessment Results
            </h1>
            <p className="text-xl text-muted-foreground">
              Based on your questionnaire and game performance
            </p>
          </div>

          {/* Top Career Matches */}
          <Card className="bg-background shadow-card border-border p-8 md:p-12 mb-8 animate-fade-in-up">
            <div className="flex items-center gap-3 mb-8">
              <Star className="w-8 h-8 text-primary" />
              <h2 className="text-3xl font-bold text-foreground">Top Career Matches</h2>
            </div>
            
            <div className="space-y-6">
              {careerResults.map((result, idx) => (
                <div key={idx} className="animate-slide-in-left" style={{ animationDelay: `${idx * 0.1}s` }}>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{result.icon}</span>
                      <div>
                        <h3 className="text-xl font-bold text-foreground">{result.career}</h3>
                        <p className="text-sm text-muted-foreground">#{idx + 1} Recommended Career</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-primary">{result.match}%</div>
                      <p className="text-sm text-muted-foreground">Match</p>
                    </div>
                  </div>
                  <Progress value={result.match} className="h-3" />
                </div>
              ))}
            </div>
          </Card>

          {/* Skills Assessment */}
          <Card className="bg-background shadow-card border-border p-8 md:p-12 mb-8 animate-fade-in-up">
            <div className="flex items-center gap-3 mb-8">
              <TrendingUp className="w-8 h-8 text-secondary" />
              <h2 className="text-3xl font-bold text-foreground">Your Skill Profile</h2>
            </div>
            
            <div className="space-y-6">
              {skills.map((skill, idx) => (
                <div key={idx} className="animate-slide-in-left" style={{ animationDelay: `${idx * 0.05}s` }}>
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold text-foreground">{skill.name}</span>
                    <span className="font-bold text-primary">{skill.score}/100</span>
                  </div>
                  <Progress value={skill.score} className="h-2" />
                </div>
              ))}
            </div>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Career Roadmap */}
            <Card className="bg-gradient-card shadow-card border-border p-8 animate-fade-in-up">
              <div className="flex items-center gap-3 mb-6">
                <BookOpen className="w-8 h-8 text-primary" />
                <h2 className="text-2xl font-bold text-foreground">Career Roadmap</h2>
              </div>
              
              <div className="space-y-6">
                {roadmap.map((phase, idx) => (
                  <div key={idx} className="border-l-4 border-primary pl-4">
                    <h3 className="font-bold text-foreground mb-2">{phase.phase}</h3>
                    <ul className="space-y-1">
                      {phase.items.map((item, itemIdx) => (
                        <li key={itemIdx} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-secondary mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </Card>

            {/* Recommended Colleges */}
            <Card className="bg-gradient-card shadow-card border-border p-8 animate-fade-in-up">
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap className="w-8 h-8 text-secondary" />
                <h2 className="text-2xl font-bold text-foreground">Recommended Colleges</h2>
              </div>
              
              <div className="space-y-4">
                {colleges.map((college, idx) => (
                  <div key={idx} className="bg-background rounded-xl p-4 border border-border">
                    <h3 className="font-bold text-foreground mb-2">{college.name}</h3>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">💰 {college.fees}</span>
                      <span className="text-sm font-semibold text-primary">⭐ {college.rating}</span>
                    </div>
                  </div>
                ))}
                <Button variant="outline" className="w-full">
                  View More Colleges
                </Button>
              </div>
            </Card>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up">
            <Button size="lg" className="bg-gradient-hero text-primary-foreground hover:opacity-90 text-lg px-8">
              <Download className="mr-2 w-5 h-5" />
              Download Full Report
            </Button>
            <Button size="lg" variant="outline" onClick={() => navigate("/")} className="text-lg px-8">
              <Briefcase className="mr-2 w-5 h-5" />
              Explore More Careers
            </Button>
          </div>

          {/* Info Note */}
          <Card className="bg-primary-light border-primary mt-8 p-6 text-center animate-fade-in-up">
            <p className="text-foreground">
              💡 <strong>Note:</strong> This assessment is designed to guide you. Your final career choice should also consider your passions, family situation, and market trends.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Results;
