import React from 'react';
import { Search, Filter, Star, MapPin, Clock, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { useUser } from '@/contexts/UserContext';

const Matches: React.FC = () => {
  const { role } = useUser();

  const sellers = [
    {
      id: 1,
      name: 'TechSolutions Pro',
      category: 'Web Development',
      rating: 4.9,
      reviews: 127,
      location: 'San Francisco, CA',
      responseTime: '< 1 hour',
      price: '$75/hour',
      skills: ['React', 'Node.js', 'TypeScript', 'AWS'],
      description: 'Full-stack developer with 8+ years of experience building scalable web applications.',
      completedProjects: 89,
      avatar: 'TS'
    },
    {
      id: 2,
      name: 'Creative Design Studio',
      category: 'UI/UX Design',
      rating: 4.8,
      reviews: 93,
      location: 'New York, NY',
      responseTime: '< 2 hours',
      price: '$85/hour',
      skills: ['Figma', 'Adobe Creative Suite', 'Prototyping', 'User Research'],
      description: 'Award-winning design studio specializing in modern, user-centered digital experiences.',
      completedProjects: 156,
      avatar: 'CD'
    },
    {
      id: 3,
      name: 'Marketing Experts',
      category: 'Digital Marketing',
      rating: 4.7,
      reviews: 204,
      location: 'Austin, TX',
      responseTime: '< 3 hours',
      price: '$65/hour',
      skills: ['SEO', 'PPC', 'Content Marketing', 'Analytics'],
      description: 'Growth-focused marketing agency helping businesses scale through data-driven strategies.',
      completedProjects: 178,
      avatar: 'ME'
    },
  ];

  const buyers = [
    {
      id: 1,
      name: 'GlobalCorp Inc',
      category: 'Enterprise Software',
      budget: '$50K - $100K',
      location: 'Seattle, WA',
      urgency: 'High',
      projectType: 'Custom CRM System',
      description: 'Fortune 500 company looking for a comprehensive CRM solution with advanced analytics.',
      requirements: ['React/Angular', 'Cloud Infrastructure', 'API Integration', 'Security Compliance'],
      timeline: '3-4 months',
      avatar: 'GC'
    },
    {
      id: 2,
      name: 'StartupX',
      category: 'Mobile App',
      budget: '$20K - $40K',
      location: 'Los Angeles, CA',
      urgency: 'Medium',
      projectType: 'Social Media App',
      description: 'Fast-growing startup needs a cross-platform mobile app for their social platform.',
      requirements: ['React Native', 'Real-time Features', 'Push Notifications', 'Social Integration'],
      timeline: '2-3 months',
      avatar: 'SX'
    },
    {
      id: 3,
      name: 'HealthTech Solutions',
      category: 'Healthcare Software',
      budget: '$30K - $60K',
      location: 'Boston, MA',
      urgency: 'High',
      projectType: 'Patient Management System',
      description: 'Healthcare provider seeking HIPAA-compliant patient management and scheduling system.',
      requirements: ['HIPAA Compliance', 'Database Design', 'Appointment Scheduling', 'Reporting'],
      timeline: '4-5 months',
      avatar: 'HT'
    },
  ];

  const data = role === 'buyer' ? sellers : buyers;
  const title = role === 'buyer' ? 'Find Sellers' : 'Find Buyers';
  const subtitle = role === 'buyer' ? 'Discover talented professionals for your projects' : 'Connect with potential clients for your services';

  return (
    <div className="min-h-screen bg-mesh pt-20 px-4 pb-20 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[150px] -mr-64 -mt-64" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary-glow/5 blur-[150px] -ml-64 -mb-64" />

      <div className="max-w-7xl mx-auto py-8 relative z-10">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-extrabold text-white mb-2 tracking-tight">
            {title}
          </h1>
          <p className="text-xl text-white/50 font-light">
            {subtitle}
          </p>
        </div>


        {/* Search and Filters */}
        <Card className="mb-12 glass-morphism border-white/10 bg-white/5">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/40" />
                <Input
                  placeholder={`Search ${role === 'buyer' ? 'sellers' : 'buyers'}...`}
                  className="pl-12 bg-white/5 border-white/10 text-white placeholder:text-white/20 h-14 rounded-2xl focus:ring-primary/50"
                />
              </div>
              <Button variant="outline" className="flex items-center border-white/10 text-white hover:bg-white/10 h-14 px-8 rounded-2xl backdrop-blur-sm">
                <Filter className="w-5 h-5 mr-2" />
                Filters
              </Button>
            </div>
          </CardContent>
        </Card>


        {/* Results Grid */}
        <div className="grid gap-8">
          {data.map((item) => (
            <Card key={item.id} className="glass-morphism border-white/5 hover-lift group overflow-hidden bg-white/95">
              <CardContent className="p-8 relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl -mr-16 -mt-16 group-hover:bg-primary/10 transition-colors" />
                
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
                  {/* Main Info */}
                  <div className="flex-1">
                    <div className="flex items-start space-x-6 mb-6">
                      <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-primary to-primary-glow text-white flex items-center justify-center text-2xl font-bold shadow-glow group-hover:scale-110 transition-transform duration-500">
                        {item.avatar}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="text-2xl font-extrabold text-foreground group-hover:text-primary transition-colors">
                            {item.name}
                          </h3>
                          {role === 'buyer' ? (
                            <div className="flex items-center space-x-1.5 bg-yellow-400/10 px-3 py-1 rounded-full border border-yellow-400/20">
                              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                              <span className="text-sm font-bold text-yellow-700">
                                {(item as any).rating}
                              </span>
                              <span className="text-xs text-muted-foreground font-medium">
                                ({(item as any).reviews})
                              </span>
                            </div>
                          ) : (
                            <Badge className={`px-4 py-1.5 rounded-full font-bold shadow-sm ${
                              (item as any).urgency === 'High' ? 'bg-red-500 text-white hover:bg-red-600' :
                              (item as any).urgency === 'Medium' ? 'bg-yellow-500 text-white hover:bg-yellow-600' :
                              'bg-green-500 text-white hover:bg-green-600'
                            }`}>
                              {(item as any).urgency} Priority
                            </Badge>
                          )}
                        </div>
                        
                        <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-sm text-muted-foreground mb-4 font-medium">
                          <span className="flex items-center bg-gray-100 px-3 py-1 rounded-lg">
                            <MapPin className="w-4 h-4 mr-2 text-primary" />
                            {item.location}
                          </span>
                          {role === 'buyer' ? (
                            <>
                              <span className="flex items-center bg-gray-100 px-3 py-1 rounded-lg">
                                <Clock className="w-4 h-4 mr-2 text-primary" />
                                {(item as any).responseTime} response
                              </span>
                              <span className="flex items-center bg-gray-100 px-3 py-1 rounded-lg">
                                <Users className="w-4 h-4 mr-2 text-primary" />
                                {(item as any).completedProjects} projects
                              </span>
                            </>
                          ) : (
                            <span className="flex items-center bg-gray-100 px-3 py-1 rounded-lg">
                              <Clock className="w-4 h-4 mr-2 text-primary" />
                              {(item as any).timeline} duration
                            </span>
                          )}
                        </div>

                        <p className="text-foreground text-lg leading-relaxed mb-6 font-light">
                          {item.description}
                        </p>

                        {/* Skills/Requirements */}
                        <div className="flex flex-wrap gap-2">
                          {(role === 'buyer' ? (item as any).skills : (item as any).requirements).map((skill: string, index: number) => (
                            <Badge key={index} variant="secondary" className="bg-primary/5 text-primary hover:bg-primary/10 border-transparent px-4 py-1 text-xs font-bold rounded-lg uppercase tracking-wider">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Actions and Price */}
                  <div className="lg:w-64 lg:text-right flex flex-col justify-between">
                    <div className="mb-8 lg:mb-0">
                      <p className="text-3xl font-black text-foreground mb-1">
                        {role === 'buyer' ? (item as any).price : (item as any).budget}
                      </p>
                      <p className="text-sm font-bold text-primary uppercase tracking-widest">
                        {role === 'buyer' ? item.category : (item as any).projectType}
                      </p>
                    </div>
                    
                    <div className="space-y-3 mt-6">
                      <Button className="w-full bg-primary hover:bg-primary-glow text-white py-6 rounded-2xl font-bold transition-all shadow-lg hover:shadow-primary/20">
                        {role === 'buyer' ? 'Contact Seller' : 'Submit Proposal'}
                      </Button>
                      <Button className="w-full bg-white/50 border border-primary/20 text-primary hover:bg-white transition-all py-6 rounded-2xl font-bold backdrop-blur-md">
                        View Profile
                      </Button>

                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>


        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Load More Results
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Matches;