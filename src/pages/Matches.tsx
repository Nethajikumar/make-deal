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
    <div className="min-h-screen bg-background pt-20 px-4">
      <div className="max-w-7xl mx-auto py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            {title}
          </h1>
          <p className="text-muted-foreground">
            {subtitle}
          </p>
        </div>

        {/* Search and Filters */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder={`Search ${role === 'buyer' ? 'sellers' : 'buyers'}...`}
                  className="pl-10"
                />
              </div>
              <Button variant="outline" className="flex items-center">
                <Filter className="w-4 h-4 mr-2" />
                Filters
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Results Grid */}
        <div className="grid gap-6">
          {data.map((item) => (
            <Card key={item.id} className="hover-lift">
              <CardContent className="p-6">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  {/* Main Info */}
                  <div className="flex-1">
                    <div className="flex items-start space-x-4 mb-4">
                      <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-lg font-bold">
                        {item.avatar}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-xl font-bold text-foreground">
                            {item.name}
                          </h3>
                          {role === 'buyer' ? (
                            <div className="flex items-center space-x-1">
                              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                              <span className="text-sm font-medium">
                                {(item as any).rating} ({(item as any).reviews} reviews)
                              </span>
                            </div>
                          ) : (
                            <Badge variant="secondary" className={`${
                              (item as any).urgency === 'High' ? 'bg-red-100 text-red-700' :
                              (item as any).urgency === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                              'bg-green-100 text-green-700'
                            }`}>
                              {(item as any).urgency} Priority
                            </Badge>
                          )}
                        </div>
                        
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                          <span className="flex items-center">
                            <MapPin className="w-4 h-4 mr-1" />
                            {item.location}
                          </span>
                          {role === 'buyer' ? (
                            <>
                              <span className="flex items-center">
                                <Clock className="w-4 h-4 mr-1" />
                                {(item as any).responseTime}
                              </span>
                              <span className="flex items-center">
                                <Users className="w-4 h-4 mr-1" />
                                {(item as any).completedProjects} projects
                              </span>
                            </>
                          ) : (
                            <span className="flex items-center">
                              <Clock className="w-4 h-4 mr-1" />
                              {(item as any).timeline}
                            </span>
                          )}
                        </div>

                        <p className="text-foreground mb-4">
                          {item.description}
                        </p>

                        {/* Skills/Requirements */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {(role === 'buyer' ? (item as any).skills : (item as any).requirements).map((skill: string, index: number) => (
                            <Badge key={index} variant="outline">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Actions and Price */}
                  <div className="lg:w-48 lg:text-right">
                    <div className="mb-4">
                      <p className="text-lg font-bold text-foreground">
                        {role === 'buyer' ? (item as any).price : (item as any).budget}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {role === 'buyer' ? item.category : (item as any).projectType}
                      </p>
                    </div>
                    
                    <div className="space-y-2">
                      <Button className="w-full bg-gradient-primary hover:shadow-glow">
                        {role === 'buyer' ? 'Contact Seller' : 'Submit Proposal'}
                      </Button>
                      <Button variant="outline" className="w-full">
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