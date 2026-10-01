import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { ArrowRight, ArrowLeft, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Assessment = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});

  const questions = [
    {
      category: "Interests",
      question: "What type of activities do you enjoy the most?",
      options: [
        "Solving puzzles and logical problems",
        "Creating art, music, or design",
        "Helping and caring for others",
        "Building or fixing things",
        "Leading teams and organizing events"
      ]
    },
    {
      category: "Skills",
      question: "Which subject do you find most interesting?",
      options: [
        "Mathematics and Science",
        "Literature and Arts",
        "Social Studies and Psychology",
        "Technology and Engineering",
        "Business and Economics"
      ]
    },
    {
      category: "Work Style",
      question: "How do you prefer to work?",
      options: [
        "Alone, focusing deeply on tasks",
        "In creative, flexible environments",
        "With people, collaborating closely",
        "Hands-on, practical work",
        "Managing and directing others"
      ]
    },
    {
      category: "Goals",
      question: "What motivates you the most?",
      options: [
        "Innovation and discovering new things",
        "Self-expression and creativity",
        "Making a positive impact on society",
        "Creating tangible products",
        "Achieving success and recognition"
      ]
    },
    {
      category: "Learning",
      question: "How do you learn best?",
      options: [
        "Through research and analysis",
        "Through experimentation and creativity",
        "Through discussion and interaction",
        "Through practical application",
        "Through structured courses and goals"
      ]
    }
  ];

  const totalSteps = questions.length;
  const progress = ((step + 1) / totalSteps) * 100;

  const handleNext = () => {
    if (step < totalSteps - 1) {
      setStep(step + 1);
    } else {
      // Navigate to games
      navigate("/games");
    }
  };

  const handleBack = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  const handleAnswer = (value: string) => {
    setAnswers({ ...answers, [step]: value });
  };

  const currentQuestion = questions[step];
  const hasAnswer = answers[step] !== undefined;

  return (
    <div className="min-h-screen bg-gradient-section py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Career Assessment
            </h1>
            <p className="text-lg text-muted-foreground">
              Answer honestly - there are no right or wrong answers
            </p>
          </div>

          {/* Progress */}
          <div className="mb-8 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <div className="flex justify-between items-center mb-3">
              <span className="text-sm font-semibold text-muted-foreground">
                Question {step + 1} of {totalSteps}
              </span>
              <span className="text-sm font-semibold text-primary">
                {Math.round(progress)}% Complete
              </span>
            </div>
            <Progress value={progress} className="h-3" />
          </div>

          {/* Question Card */}
          <Card className="bg-background shadow-card border-border p-8 md:p-12 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-gradient-hero rounded-full text-primary-foreground font-semibold mb-4">
                {currentQuestion.category}
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                {currentQuestion.question}
              </h2>
            </div>

            <RadioGroup value={answers[step]} onValueChange={handleAnswer} className="space-y-4">
              {currentQuestion.options.map((option, idx) => (
                <div
                  key={idx}
                  className={`flex items-center space-x-3 p-4 rounded-xl border-2 transition-all cursor-pointer hover:bg-accent ${
                    answers[step] === option
                      ? "border-primary bg-primary-light"
                      : "border-border bg-card"
                  }`}
                  onClick={() => handleAnswer(option)}
                >
                  <RadioGroupItem value={option} id={`option-${idx}`} />
                  <Label
                    htmlFor={`option-${idx}`}
                    className="flex-1 cursor-pointer text-lg text-foreground font-medium"
                  >
                    {option}
                  </Label>
                  {answers[step] === option && (
                    <CheckCircle className="w-6 h-6 text-primary" />
                  )}
                </div>
              ))}
            </RadioGroup>

            {/* Navigation */}
            <div className="flex gap-4 mt-8">
              <Button
                variant="outline"
                size="lg"
                onClick={handleBack}
                disabled={step === 0}
                className="flex-1"
              >
                <ArrowLeft className="mr-2 w-5 h-5" />
                Back
              </Button>
              <Button
                size="lg"
                onClick={handleNext}
                disabled={!hasAnswer}
                className="flex-1 bg-gradient-hero text-primary-foreground hover:opacity-90"
              >
                {step === totalSteps - 1 ? "Continue to Games" : "Next"}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </Card>

          {/* Help Text */}
          <p className="text-center text-muted-foreground mt-6 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            💡 Take your time and choose the option that resonates most with you
          </p>
        </div>
      </div>
    </div>
  );
};

export default Assessment;
