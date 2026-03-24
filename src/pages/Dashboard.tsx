import React from 'react';
import { BarChart3, Users, MessageSquare, TrendingUp, DollarSign, Package, Target, CheckCircle, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useUser } from '@/contexts/UserContext';

const Dashboard: React.FC = () => {
  const { role } = useUser();

  const buyerStats = [
    { title: 'Active Requests', value: '12', icon: Package, change: '+2 this week' },
    { title: 'Saved Sellers', value: '8', icon: Users, change: '+3 this month' },
    { title: 'Messages', value: '24', icon: MessageSquare, change: '6 unread' },
    { title: 'Projects', value: '5', icon: CheckCircle, change: '2 completed' },
  ];

  const sellerStats = [
    { title: 'Revenue', value: '$12,450', icon: DollarSign, change: '+15% this month' },
    { title: 'Active Buyers', value: '34', icon: Users, change: '+8 this week' },
    { title: 'Messages', value: '47', icon: MessageSquare, change: '12 unread' },
    { title: 'Conversion Rate', value: '24%', icon: TrendingUp, change: '+3% this month' },
  ];

  const stats = role === 'buyer' ? buyerStats : sellerStats;

  const recentActivities = role === 'buyer' ? [
    { action: 'New seller match found', time: '2 hours ago', status: 'new' },
    { action: 'Message from TechSolutions Pro', time: '5 hours ago', status: 'message' },
    { action: 'Proposal received for Web Development', time: '1 day ago', status: 'proposal' },
    { action: 'Project milestone completed', time: '2 days ago', status: 'completed' },
  ] : [
    { action: 'New buyer inquiry received', time: '1 hour ago', status: 'new' },
    { action: 'Proposal accepted by GlobalCorp', time: '3 hours ago', status: 'accepted' },
    { action: 'Payment received for Mobile App project', time: '1 day ago', status: 'payment' },
    { action: 'New review: 5 stars from StartupX', time: '2 days ago', status: 'review' },
  ];

  const quickActions = role === 'buyer' ? [
    { title: 'Find Sellers', description: 'Browse and connect with verified sellers', action: 'Browse Now' },
    { title: 'Post Request', description: 'Describe what you need and get proposals', action: 'Post Request' },
    { title: 'View Messages', description: 'Check your latest conversations', action: 'View Messages' },
  ] : [
    { title: 'Find Buyers', description: 'Discover new business opportunities', action: 'Find Buyers' },
    { title: 'Update Portfolio', description: 'Showcase your latest work', action: 'Update Portfolio' },
    { title: 'View Analytics', description: 'Track your business performance', action: 'View Analytics' },
  ];

  return (
    <div className="min-h-screen bg-mesh pt-20 px-4 pb-20 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[150px] -mr-64 -mt-64" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary-glow/5 blur-[150px] -ml-64 -mb-64" />

      <div className="max-w-7xl mx-auto py-8 relative z-10">
        {/* Hero Section */}
        <div className="mb-12 bg-gradient-to-br from-primary via-primary/80 to-primary-glow p-8 md:p-12 rounded-[2.5rem] shadow-2xl shadow-primary/20 overflow-hidden relative group">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 blur-3xl -mr-32 -mt-32 group-hover:scale-110 transition-transform duration-700" />
          
          <div className="relative z-10">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight drop-shadow-md">
              Welcome back, <span className="text-white/90 underline decoration-white/30 underline-offset-8">{role === 'buyer' ? 'Power Buyer' : 'Master Seller'}</span>! 👋
            </h1>
            <p className="text-xl text-white/90 max-w-2xl font-light leading-relaxed">
              {role === 'buyer' 
                ? 'Your personalized gateway to global trade and premium partnerships.' 
                : 'Accelerate your growth with real-time insights and business-critical tools.'}
            </p>
            
            <div className="flex flex-wrap gap-4 mt-8">
              <Button className="bg-white text-primary hover:bg-white/90 px-8 py-6 rounded-2xl font-bold transition-all shadow-xl">
                Quick Action
              </Button>
              <Button className="bg-white/20 border border-white/40 text-white hover:bg-white/30 px-8 py-6 rounded-2xl font-bold backdrop-blur-md transition-all">
                View Reports
              </Button>

            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <Card key={index} className="glass-morphism border-white/20 hover-lift group overflow-hidden bg-white/80">
              <CardContent className="p-8 relative">
                <div className="absolute top-0 right-0 w-20 h-20 bg-primary/10 blur-2xl -mr-10 -mt-10 group-hover:bg-primary/20 transition-colors" />
                
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center border border-primary/20 group-hover:scale-110 transition-transform">
                    <stat.icon className="w-7 h-7 text-primary" />
                  </div>
                  <span className="text-xs font-bold text-success bg-success/10 px-3 py-1 rounded-full border border-success/20">
                    {stat.change}
                  </span>
                </div>
                
                <div>
                  <p className="text-sm font-bold text-muted-foreground mb-1 tracking-wider uppercase">
                    {stat.title}
                  </p>
                  <p className="text-3xl font-extrabold text-foreground">
                    {stat.value}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Recent Activity */}
          <div className="lg:col-span-2">
            <Card className="glass-morphism border-white/20 h-full bg-white/90">
              <CardHeader className="border-b border-black/5 pb-6">
                <CardTitle className="flex items-center text-foreground text-2xl font-bold">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center mr-4">
                    <BarChart3 className="w-5 h-5 text-primary" />
                  </div>
                  System Activity
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  {recentActivities.map((activity, index) => (
                    <div key={index} className="flex items-center justify-between p-5 rounded-2xl bg-black/5 hover:bg-black/10 border border-transparent transition-all group cursor-pointer">
                      <div className="flex items-center space-x-4">
                        <div className={`w-3 h-3 rounded-full ${
                          activity.status === 'new' ? 'bg-primary' :
                          activity.status === 'message' ? 'bg-blue-500' :
                          activity.status === 'proposal' || activity.status === 'accepted' ? 'bg-green-500' :
                          activity.status === 'completed' || activity.status === 'payment' ? 'bg-success' :
                          'bg-yellow-500'
                        }`}></div>
                        <div>
                          <p className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                            {activity.action}
                          </p>
                          <p className="text-sm text-muted-foreground font-medium">
                            {activity.time}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <Button variant="outline" size="sm" className="hidden sm:inline-flex border-primary/20 text-primary hover:bg-primary/5 transition-all font-bold rounded-xl px-4 h-9">
                          View Details
                        </Button>
                        <ArrowRight className="w-5 h-5 text-muted-foreground/30 group-hover:text-primary transition-colors" />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <div className="flex flex-col gap-8">
            <Card className="glass-morphism border-white/20 bg-white/90">
              <CardHeader className="border-b border-black/5 pb-6">
                <CardTitle className="flex items-center text-foreground text-2xl font-bold">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center mr-4">
                    <Target className="w-5 h-5 text-primary" />
                  </div>
                  Direct Tools
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  {quickActions.map((action, index) => (
                    <div key={index} className="p-6 border border-black/5 rounded-2xl hover:bg-black/5 transition-all group relative overflow-hidden">
                      <div className="absolute right-0 top-0 w-24 h-24 bg-primary/5 blur-2xl group-hover:bg-primary/10 transition-colors" />
                      
                      <h4 className="font-bold text-foreground text-lg mb-2 relative z-10 group-hover:text-primary transition-colors">
                        {action.title}
                      </h4>
                      <p className="text-sm text-muted-foreground mb-6 relative z-10 leading-relaxed font-medium">
                        {action.description}
                      </p>
                      <Button className="w-full bg-primary hover:bg-primary-glow text-white py-5 rounded-xl transition-all relative z-10 font-bold group-hover:scale-[1.02] shadow-sm">
                        {action.action}
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;