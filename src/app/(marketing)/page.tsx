import Link from "next/link";
import {
  BookOpen,
  Sparkles,
  Trophy,
  Brain,
  Globe,
  ChevronRight,
  Star,
  Zap,
  Target,
  Languages,
} from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Visual-First Learning",
    description:
      "Learn kanji and vocabulary through beautiful visual mnemonics and animated breakdowns.",
    color: "from-primary-500 to-primary-600",
    glow: "rgba(124, 58, 237, 0.2)",
  },
  {
    icon: Sparkles,
    title: "SVG Stroke Animations",
    description:
      "Watch every kanji come alive with precise stroke-order animations you can practice along with.",
    color: "from-accent-500 to-accent-600",
    glow: "rgba(6, 182, 212, 0.2)",
  },
  {
    icon: Trophy,
    title: "Gamified Progress",
    description:
      "Earn XP, maintain streaks, unlock achievements, and climb leaderboards as you learn.",
    color: "from-gold-500 to-gold-600",
    glow: "rgba(245, 158, 11, 0.2)",
  },
  {
    icon: Brain,
    title: "AI Conversation",
    description:
      "Practice real Japanese conversations with our AI tutor powered by Google Gemini.",
    color: "from-sakura-500 to-sakura-600",
    glow: "rgba(236, 72, 153, 0.2)",
  },
  {
    icon: Globe,
    title: "3D Cultural Immersion",
    description:
      "Explore Japanese culture through interactive 3D scenes — temples, cities, and more.",
    color: "from-primary-600 to-accent-500",
    glow: "rgba(79, 70, 229, 0.2)",
  },
  {
    icon: Target,
    title: "JLPT Structured Path",
    description:
      "Follow a clear progression from N5 (beginner) to N1 (advanced) aligned with official JLPT exams.",
    color: "from-accent-600 to-primary-500",
    glow: "rgba(6, 182, 212, 0.2)",
  },
];

const jlptLevels = [
  {
    level: "N5",
    label: "Beginner",
    kanji: "入",
    color: "from-green-400 to-emerald-500",
    desc: "Hiragana, Katakana, 100 Kanji",
  },
  {
    level: "N4",
    label: "Elementary",
    kanji: "学",
    color: "from-accent-400 to-accent-600",
    desc: "300 Kanji, Basic Grammar",
  },
  {
    level: "N3",
    label: "Intermediate",
    kanji: "語",
    color: "from-primary-400 to-primary-600",
    desc: "650 Kanji, Conversational",
  },
  {
    level: "N2",
    label: "Upper-Intermediate",
    kanji: "読",
    color: "from-sakura-400 to-sakura-600",
    desc: "1000 Kanji, News & Articles",
  },
  {
    level: "N1",
    label: "Advanced",
    kanji: "極",
    color: "from-gold-400 to-gold-600",
    desc: "2000+ Kanji, Native Level",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section className="relative overflow-hidden gradient-bg-hero">
        {/* Decorative background */}
        <div className="absolute inset-0 jp-pattern opacity-50" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 px-4 py-2 rounded-full text-sm font-medium mb-8 animate-scale-in">
              <Star className="w-4 h-4" />
              <span>Free to start • No credit card needed</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight mb-6 animate-slide-up">
              Learn Japanese
              <br />
              <span className="gradient-text">the Modern Way</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed animate-slide-up" style={{ animationDelay: "0.1s" }}>
              Visual learning, animated kanji strokes, gamification, and
              AI-powered practice. Master JLPT levels from{" "}
              <span className="font-semibold text-primary-600 dark:text-primary-400">
                N5 to N1
              </span>{" "}
              with confidence.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <Link
                href="/signup"
                className="inline-flex items-center gap-2 gradient-bg-primary text-white font-semibold px-8 py-4 rounded-2xl text-lg hover:opacity-90 transition-all duration-300 neon-glow animate-pulse-neon"
              >
                <Zap className="w-5 h-5" />
                Start Learning Free
                <ChevronRight className="w-5 h-5" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-gray-700 dark:text-gray-300 font-medium px-8 py-4 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-600 transition-all duration-300"
              >
                Learn More
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto animate-slide-up" style={{ animationDelay: "0.3s" }}>
              {[
                { value: "2,136", label: "Jōyō Kanji" },
                { value: "5", label: "JLPT Levels" },
                { value: "100%", label: "Free to Start" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-2xl sm:text-3xl font-bold gradient-text">
                    {stat.value}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== JLPT PATH SECTION ===== */}
      <section className="py-20 lg:py-28 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Your Path from{" "}
              <span className="gradient-text">N5 to N1</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
              Follow the structured JLPT progression. Each level builds on the previous, preparing you for the official exam.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 lg:gap-6 stagger-children">
            {jlptLevels.map((level, index) => (
              <div key={level.level} className="relative group">
                {/* Connector line */}
                {index < jlptLevels.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-5 lg:-right-6 w-4 lg:w-6 h-0.5 bg-gradient-to-r from-gray-300 to-gray-200 dark:from-gray-700 dark:to-gray-800" />
                )}
                <div className="w-48 p-6 rounded-2xl bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-600 transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-xl text-center neon-glow">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${level.color} text-white text-3xl font-jp font-bold mb-4`}
                  >
                    {level.kanji}
                  </div>
                  <h3 className="text-xl font-bold mb-1">{level.level}</h3>
                  <p className="text-sm text-primary-600 dark:text-primary-400 font-medium mb-2">
                    {level.label}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {level.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FEATURES SECTION ===== */}
      <section className="py-20 lg:py-28 bg-gray-50 dark:bg-gray-900/50 relative">
        <div className="absolute inset-0 jp-pattern opacity-30" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-accent-50 dark:bg-accent-900/30 text-accent-700 dark:text-accent-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Languages className="w-4 h-4" />
              <span>Why EasyJapanese?</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Everything you need to{" "}
              <span className="gradient-text">master Japanese</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
              A modern platform that combines the best learning science with
              beautiful design and gamification.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group p-6 rounded-2xl bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-600 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                style={{
                  boxShadow: `0 0 0 rgba(0,0,0,0)`,
                }}
              >
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 gradient-bg-hero" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-500/10 rounded-full blur-3xl" />

        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Ready to start your
            <br />
            <span className="gradient-text">Japanese journey?</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
            Join thousands of learners mastering Japanese with visual learning
            and gamification. It&apos;s free to get started.
          </p>
          <Link
            href="/signup"
            className="inline-flex items-center gap-2 gradient-bg-primary text-white font-semibold px-10 py-4 rounded-2xl text-lg hover:opacity-90 transition-all duration-300 neon-glow"
          >
            <Zap className="w-5 h-5" />
            Get Started — It&apos;s Free
            <ChevronRight className="w-5 h-5" />
          </Link>
          <p className="mt-4 text-sm text-gray-500 dark:text-gray-500 font-jp">
            日本語の冒険を始めよう 🇯🇵
          </p>
        </div>
      </section>
    </>
  );
}
