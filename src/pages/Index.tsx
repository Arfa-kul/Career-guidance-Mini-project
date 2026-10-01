import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Brain, Target, TrendingUp, Award, ArrowRight, Sparkles, LogOut, User } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { User as SupabaseUser } from "@supabase/supabase-js";
import { toast } from "sonner";

const Index = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<SupabaseUser | null>(null);
  const [profile, setProfile] = useState<any>(null);

  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => {
      setUser(user);
      if (user) {
        fetchProfile(user.id);
      }
    });
  }, []);

  const fetchProfile = async (userId: string) => {
    const { data, error } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", userId)
      .single();
    
    if (!error && data) {
      setProfile(data);
    }
  };

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast.error("Error signing out");
    } else {
      toast.success("Signed out successfully");
      navigate("/auth");
    }
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Brain className="w-8 h-8 text-primary" />
            <span className="font-bold text-xl">CareerPath</span>
          </div>
          <div className="flex items-center gap-4">
            {profile && (
              <div className="flex items-center gap-2 text-sm">
                <User className="w-4 h-4" />
                <span className="font-medium">{profile.full_name}</span>
                <span className="text-muted-foreground">
                  ({profile.user_type === "secondary_school" ? "Secondary School" : "College"})
                </span>
              </div>
            )}
            <Button variant="outline" size="sm" onClick={handleLogout}>
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden pt-20">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Brain className="w-20 h-20 text-primary-foreground drop-shadow-lg" />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
              Find Your Perfect Career Path
            </h1>
            
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Take our AI-powered career assessment through fun, interactive games and get personalized career recommendations with detailed roadmaps
            </p>

            <Button 
              size="lg" 
              onClick={() => navigate("/assessment")}
              className="bg-background text-foreground hover:bg-background/90 shadow-yellow text-xl px-10 py-7 group"
            >
              Start Your Journey
              <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Button>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">
              <div className="bg-background/10 backdrop-blur-sm rounded-2xl p-8 border border-background/20 hover:bg-background/20 transition-all">
                <div className="text-5xl font-bold text-primary-foreground mb-2">10+</div>
                <p className="text-primary-foreground/80 text-lg">Career Clusters</p>
              </div>
              <div className="bg-background/10 backdrop-blur-sm rounded-2xl p-8 border border-background/20 hover:bg-background/20 transition-all">
                <div className="text-5xl font-bold text-primary-foreground mb-2">5</div>
                <p className="text-primary-foreground/80 text-lg">Skill Games</p>
              </div>
              <div className="bg-background/10 backdrop-blur-sm rounded-2xl p-8 border border-background/20 hover:bg-background/20 transition-all">
                <div className="text-5xl font-bold text-primary-foreground mb-2">100%</div>
                <p className="text-primary-foreground/80 text-lg">Personalized</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">How It Works</h2>
              <p className="text-xl text-muted-foreground">Simple steps to discover your ideal career</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { icon: Brain, title: "Answer Questions", desc: "Tell us about your interests and habits" },
                { icon: Target, title: "Play Games", desc: "Test your logic, math, memory & creativity" },
                { icon: TrendingUp, title: "AI Analysis", desc: "Our AI analyzes your performance" },
                { icon: Award, title: "Get Results", desc: "Receive personalized career roadmap" }
              ].map((step, idx) => (
                <div key={idx} className="relative animate-fade-in-up" style={{ animationDelay: `${idx * 0.1}s` }}>
                  <div className="bg-gradient-card rounded-2xl p-8 shadow-card border border-border hover:shadow-yellow transition-all">
                    <div className="bg-gradient-hero w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-green">
                      <step.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <div className="text-3xl font-bold text-primary mb-2">{idx + 1}</div>
                    <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
                    <p className="text-muted-foreground">{step.desc}</p>
                  </div>
                  {idx < 3 && (
                    <ArrowRight className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-8 text-primary" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Why Choose Us?</h2>
              <p className="text-xl text-muted-foreground">Advanced features for accurate career guidance</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Gamified Tests", desc: "Engaging mini-games that assess your real abilities, not just theoretical knowledge", icon: "🎮" },
                { title: "AI-Powered", desc: "Advanced Decision Tree algorithms analyze your performance for accurate predictions", icon: "🤖" },
                { title: "Personalized Roadmap", desc: "Get detailed career paths with subjects, skills, courses, and exam requirements", icon: "🗺️" },
                { title: "College Database", desc: "Browse recommended colleges with complete fee structures and admission details", icon: "🎓" },
                { title: "Multiple Careers", desc: "Discover top 3 career options that match your profile with confidence scores", icon: "🎯" },
                { title: "Downloadable Reports", desc: "Save and share your complete career assessment report as PDF", icon: "📄" }
              ].map((feature, idx) => (
                <div 
                  key={idx} 
                  className="bg-background rounded-2xl p-8 shadow-card border border-border hover:shadow-green transition-all animate-fade-in-up"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className="text-5xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Sparkles className="w-16 h-16 text-primary-foreground mx-auto mb-6 animate-float" />
            <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Ready to Discover Your Future?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Join thousands of students who found their perfect career path through our intelligent assessment platform
            </p>
            <Button 
              size="lg"
              onClick={() => navigate("/assessment")}
              className="bg-background text-foreground hover:bg-background/90 shadow-yellow text-xl px-10 py-7 group"
            >
              Take Free Assessment
              <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
