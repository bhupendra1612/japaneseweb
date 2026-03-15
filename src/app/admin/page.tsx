import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import Link from "next/link";
import {
  BookOpen,
  Users,
  BarChart3,
  Settings,
  Shield,
  LogOut,
  ChevronRight,
  Zap,
  FileText,
  PenTool,
  MessageSquare,
} from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/login");

  // Check admin role from profiles table (authoritative source)
  const { data: adminProfile } = await supabase
    .from("profiles")
    .select("role, display_name")
    .eq("id", user.id)
    .single();

  if (adminProfile?.role !== "admin") {
    redirect("/dashboard");
  }

  const displayName =
    adminProfile?.display_name || user.email?.split("@")[0] || "Admin";

  // Fetch real stats in parallel
  const today = new Date().toISOString().split("T")[0];

  const [
    { count: totalUsers },
    { count: activeToday },
    { count: vocabCount },
    { count: grammarCount },
    { count: kanaCount },
    { count: blogCount },
    { count: contactCount },
    { data: recentActivities },
  ] = await Promise.all([
    supabase.from("profiles").select("id", { count: "exact", head: true }),
    supabase
      .from("activity_log")
      .select("user_id", { count: "exact", head: true })
      .gte("created_at", `${today}T00:00:00`),
    supabase.from("vocabulary").select("id", { count: "exact", head: true }),
    supabase
      .from("grammar_patterns")
      .select("id", { count: "exact", head: true }),
    supabase.from("kana").select("id", { count: "exact", head: true }),
    supabase.from("blog_posts").select("id", { count: "exact", head: true }),
    supabase
      .from("contact_submissions")
      .select("id", { count: "exact", head: true }),
    supabase
      .from("activity_log")
      .select("id, type, title, xp_earned, created_at")
      .order("created_at", { ascending: false })
      .limit(10),
  ]);

  const contentTotal =
    (vocabCount ?? 0) + (grammarCount ?? 0) + (kanaCount ?? 0);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-surface-dark">
      {/* Admin Header */}
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-b border-gray-200 dark:border-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <Link href="/admin" className="flex items-center gap-2">
              <div className="flex items-center justify-center w-9 h-9 rounded-xl gradient-bg-primary text-white">
                <Shield className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold gradient-text hidden sm:inline">
                Admin Panel
              </span>
            </Link>
            <span className="text-xs font-medium text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/30 px-2 py-1 rounded-md">
              {displayName}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/dashboard"
              className="text-sm text-gray-500 hover:text-primary-600 transition-colors"
            >
              User Dashboard
            </Link>
            <ThemeToggle />
            <form action="/auth/signout" method="post">
              <button
                type="submit"
                className="p-2 rounded-xl text-gray-500 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-all"
                title="Sign Out"
              >
                <LogOut className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">
          Admin <span className="gradient-text">Dashboard</span>
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mb-8">
          Manage users, content, and platform settings.
        </p>

        {/* Stats Overview */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {[
            {
              icon: Users,
              label: "Total Users",
              value: totalUsers ?? 0,
              description: "Registered accounts",
              color: "from-primary-500 to-primary-600",
            },
            {
              icon: Zap,
              label: "Active Today",
              value: activeToday ?? 0,
              description: "Activities logged today",
              color: "from-orange-500 to-amber-500",
            },
            {
              icon: BookOpen,
              label: "Content Items",
              value: contentTotal,
              description: `${vocabCount ?? 0} vocab · ${grammarCount ?? 0} grammar · ${kanaCount ?? 0} kana`,
              color: "from-emerald-500 to-green-600",
            },
            {
              icon: MessageSquare,
              label: "Messages",
              value: `${blogCount ?? 0} / ${contactCount ?? 0}`,
              description: "Blog posts / Contact submissions",
              color: "from-violet-500 to-purple-600",
            },
          ].map((stat) => (
            <div
              key={stat.label}
              className="p-5 rounded-2xl bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-600 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-3">
                <div
                  className={`w-10 h-10 rounded-xl bg-gradient-to-br ${stat.color} text-white flex items-center justify-center`}
                >
                  <stat.icon className="w-5 h-5" />
                </div>
              </div>
              <p className="text-2xl font-bold">{stat.value}</p>
              <p className="text-sm font-medium mt-1">{stat.label}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                {stat.description}
              </p>
            </div>
          ))}
        </section>

        {/* Quick Actions */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                icon: Users,
                title: "Manage Users",
                description: "View and manage user accounts and roles",
                href: "/admin",
              },
              {
                icon: BookOpen,
                title: "Manage Vocabulary",
                description: `${vocabCount ?? 0} words across multiple topics`,
                href: "/admin",
              },
              {
                icon: PenTool,
                title: "Manage Kana",
                description: `${kanaCount ?? 0} characters with stroke data`,
                href: "/admin",
              },
              {
                icon: FileText,
                title: "Manage Grammar",
                description: `${grammarCount ?? 0} patterns with examples`,
                href: "/admin",
              },
              {
                icon: BarChart3,
                title: "Analytics",
                description: "Platform usage and engagement metrics",
                href: "/dashboard/analytics",
              },
              {
                icon: Settings,
                title: "Settings",
                description: "Platform configuration and preferences",
                href: "/admin",
              },
            ].map((action) => (
              <Link
                key={action.title}
                href={action.href}
                className="group flex items-center gap-4 p-5 rounded-2xl bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-600 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-primary-600 dark:text-primary-400 group-hover:gradient-bg-primary group-hover:text-white transition-all">
                  <action.icon className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold">{action.title}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {action.description}
                  </p>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-primary-500 transition-colors" />
              </Link>
            ))}
          </div>
        </section>

        {/* Recent Platform Activity */}
        {(recentActivities ?? []).length > 0 && (
          <section>
            <h2 className="text-xl font-bold mb-4">Recent Platform Activity</h2>
            <div className="rounded-2xl bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 overflow-hidden">
              <div className="divide-y divide-gray-100 dark:divide-gray-700/50">
                {(recentActivities ?? []).map((a) => (
                  <div
                    key={a.id}
                    className="flex items-center justify-between px-5 py-3"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-lg">
                        {a.type === "vocabulary"
                          ? "📚"
                          : a.type === "kanji"
                            ? "✍️"
                            : a.type === "grammar"
                              ? "📝"
                              : "⭐"}
                      </span>
                      <div>
                        <p className="text-sm font-medium">{a.title}</p>
                        <p className="text-xs text-gray-400">
                          {new Date(a.created_at).toLocaleDateString("en", {
                            month: "short",
                            day: "numeric",
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </p>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-yellow-600 dark:text-yellow-400 bg-yellow-50 dark:bg-yellow-900/20 px-2 py-1 rounded-lg">
                      +{a.xp_earned} XP
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
