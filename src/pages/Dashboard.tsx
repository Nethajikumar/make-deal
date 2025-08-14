import React from 'react';
import { BarChart3, Users, MessageSquare, TrendingUp, DollarSign, Package, Target, CheckCircle } from 'lucide-react';
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
    <div className="min-h-screen bg-background pt-20 px-4">
      <div className="max-w-7xl mx-auto py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Welcome back! 👋
          </h1>
          <p className="text-muted-foreground">
            {role === 'buyer' ? 'Manage your purchases and connect with sellers' : 'Grow your business and find new opportunities'}
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="hover-lift">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-1">
                      {stat.title}
                    </p>
                    <p className="text-2xl font-bold text-foreground">
                      {stat.value}
                    </p>
                    <p className="text-xs text-success mt-1">
                      {stat.change}
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Recent Activity */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BarChart3 className="w-5 h-5 mr-2" />
                  Recent Activity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivities.map((activity, index) => (
                    <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                      <div className="flex items-center space-x-3">
                        <div className={`w-2 h-2 rounded-full ${
                          activity.status === 'new' ? 'bg-primary' :
                          activity.status === 'message' ? 'bg-blue-500' :
                          activity.status === 'proposal' || activity.status === 'accepted' ? 'bg-green-500' :
                          activity.status === 'completed' || activity.status === 'payment' ? 'bg-success' :
                          'bg-yellow-500'
                        }`}></div>
                        <div>
                          <p className="text-sm font-medium text-foreground">
                            {activity.action}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {activity.time}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Target className="w-5 h-5 mr-2" />
                  Quick Actions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {quickActions.map((action, index) => (
                    <div key={index} className="p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors">
                      <h4 className="font-medium text-foreground mb-1">
                        {action.title}
                      </h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        {action.description}
                      </p>
                      <Button size="sm" variant="outline" className="w-full">
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