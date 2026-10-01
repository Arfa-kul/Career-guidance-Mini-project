import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Brain, Calculator, Puzzle, Lightbulb, Target, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Games = () => {
  const navigate = useNavigate();
  const [selectedGame, setSelectedGame] = useState<string | null>(null);

  const games = [
    {
      id: "math",
      title: "Math Challenge",
      icon: Calculator,
      description: "Test your numerical ability and problem-solving speed",
      color: "from-primary to-primary-glow",
      difficulty: "Medium"
    },
    {
      id: "logic",
      title: "Logic Puzzle",
      icon: Puzzle,
      description: "Solve pattern recognition and logical reasoning tasks",
      color: "from-secondary to-secondary-glow",
      difficulty: "Medium"
    },
    {
      id: "memory",
      title: "Memory Game",
      icon: Brain,
      description: "Challenge your short-term and working memory",
      color: "from-primary to-secondary",
      difficulty: "Easy"
    },
    {
      id: "creativity",
      title: "Creative Thinking",
      icon: Lightbulb,
      description: "Demonstrate your innovative and lateral thinking abilities",
      color: "from-secondary-glow to-primary-glow",
      difficulty: "Easy"
    },
    {
      id: "reaction",
      title: "Quick Response",
      icon: Target,
      description: "Test your reflexes and decision-making under pressure",
      color: "from-primary-light to-secondary-light",
      difficulty: "Hard"
    }
  ];

  const handleStartGames = () => {
    navigate("/results");
  };

  return (
    <div className="min-h-screen bg-gradient-section py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Gamified Aptitude Tests
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Complete these interactive games to assess your skills. Each game measures different abilities that help determine your ideal career path.
            </p>
          </div>

          {/* Games Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {games.map((game, idx) => (
              <Card
                key={game.id}
                className={`bg-background shadow-card border-border overflow-hidden cursor-pointer transition-all hover:shadow-yellow animate-fade-in-up ${
                  selectedGame === game.id ? "ring-4 ring-primary" : ""
                }`}
                style={{ animationDelay: `${idx * 0.1}s` }}
                onClick={() => setSelectedGame(game.id)}
              >
                <div className={`h-32 bg-gradient-to-br ${game.color} flex items-center justify-center`}>
                  <game.icon className="w-16 h-16 text-white drop-shadow-lg" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-foreground">{game.title}</h3>
                    <span className="px-3 py-1 bg-accent text-accent-foreground text-xs font-semibold rounded-full">
                      {game.difficulty}
                    </span>
                  </div>
                  <p className="text-muted-foreground mb-4">{game.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">⏱️ 5-7 minutes</span>
                    <span className="text-sm text-muted-foreground">🎯 Score based</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="bg-gradient-card shadow-card border-border p-6 text-center animate-fade-in-up">
              <div className="text-3xl mb-2">⚡</div>
              <h4 className="font-bold text-foreground mb-2">Quick & Fun</h4>
              <p className="text-sm text-muted-foreground">Each game takes only 5-7 minutes</p>
            </Card>
            <Card className="bg-gradient-card shadow-card border-border p-6 text-center animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              <div className="text-3xl mb-2">🎮</div>
              <h4 className="font-bold text-foreground mb-2">Engaging Format</h4>
              <p className="text-sm text-muted-foreground">Interactive games, not boring tests</p>
            </Card>
            <Card className="bg-gradient-card shadow-card border-border p-6 text-center animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <div className="text-3xl mb-2">📊</div>
              <h4 className="font-bold text-foreground mb-2">Real Assessment</h4>
              <p className="text-sm text-muted-foreground">Measures actual abilities, not theory</p>
            </Card>
          </div>

          {/* CTA */}
          <Card className="bg-gradient-hero shadow-yellow border-none p-8 md:p-12 text-center animate-fade-in-up">
            <h3 className="text-3xl font-bold text-primary-foreground mb-4">
              Ready to Test Your Skills?
            </h3>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Complete all 5 games to get your comprehensive career assessment results
            </p>
            <Button
              size="lg"
              onClick={handleStartGames}
              className="bg-background text-foreground hover:bg-background/90 text-xl px-10 py-7 group"
            >
              Start Games Now
              <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Button>
            <p className="text-sm text-primary-foreground/70 mt-4">
              ⏱️ Total time: ~30-35 minutes
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Games;
