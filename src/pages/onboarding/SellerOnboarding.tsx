import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Store, ArrowRight, ArrowLeft, Check, Upload } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { useUser } from '@/contexts/UserContext';

const SellerOnboarding: React.FC = () => {
  const navigate = useNavigate();
  const { setOnboarded } = useUser();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    businessName: '',
    businessType: '',
    industry: '',
    experience: '',
    services: [] as string[],
    portfolio: '',
    description: '',
    website: '',
  });

  const totalSteps = 3;

  const businessTypeOptions = [
    'Individual/Freelancer', 'Small Business', 'Corporation', 
    'Partnership', 'Non-Profit', 'Other'
  ];

  const industryOptions = [
    'Technology', 'Healthcare', 'Finance', 'Manufacturing', 'Retail', 
    'Education', 'Real Estate', 'Food & Beverage', 'Consulting', 'Other'
  ];

  const experienceOptions = [
    'Less than 1 year', '1-3 years', '3-5 years', 
    '5-10 years', '10+ years'
  ];

  const serviceOptions = [
    'Software Development', 'Web Design', 'Digital Marketing', 'Consulting',
    'Content Creation', 'Data Analysis', 'Project Management', 'Training',
    'Manufacturing', 'Logistics', 'Customer Support', 'Sales'
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleServiceChange = (service: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      services: checked 
        ? [...prev.services, service]
        : prev.services.filter(s => s !== service)
    }));
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleComplete = () => {
    setOnboarded(true);
    navigate('/dashboard');
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-2">
                Tell us about your business
              </h2>
              <p className="text-muted-foreground">
                Help buyers discover and trust your services
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <Label htmlFor="businessName">Business Name</Label>
                <Input
                  id="businessName"
                  value={formData.businessName}
                  onChange={(e) => handleInputChange('businessName', e.target.value)}
                  placeholder="Enter your business name"
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="businessType">Business Type</Label>
                <select
                  id="businessType"
                  value={formData.businessType}
                  onChange={(e) => handleInputChange('businessType', e.target.value)}
                  className="mt-1 w-full px-3 py-2 border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <option value="">Select business type</option>
                  {businessTypeOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>

              <div>
                <Label htmlFor="industry">Industry</Label>
                <select
                  id="industry"
                  value={formData.industry}
                  onChange={(e) => handleInputChange('industry', e.target.value)}
                  className="mt-1 w-full px-3 py-2 border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <option value="">Select your industry</option>
                  {industryOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>

              <div>
                <Label htmlFor="experience">Years of Experience</Label>
                <select
                  id="experience"
                  value={formData.experience}
                  onChange={(e) => handleInputChange('experience', e.target.value)}
                  className="mt-1 w-full px-3 py-2 border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <option value="">Select experience level</option>
                  {experienceOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-2">
                What services do you offer?
              </h2>
              <p className="text-muted-foreground">
                Select all services that apply to your business
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <Label>Services Offered</Label>
                <div className="grid grid-cols-2 gap-3 mt-2">
                  {serviceOptions.map(service => (
                    <div key={service} className="flex items-center space-x-2">
                      <Checkbox
                        id={service}
                        checked={formData.services.includes(service)}
                        onCheckedChange={(checked) => 
                          handleServiceChange(service, checked as boolean)
                        }
                      />
                      <Label htmlFor={service} className="text-sm">
                        {service}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <Label htmlFor="website">Website (Optional)</Label>
                <Input
                  id="website"
                  value={formData.website}
                  onChange={(e) => handleInputChange('website', e.target.value)}
                  placeholder="https://your-website.com"
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="portfolio">Portfolio/Examples (Optional)</Label>
                <Textarea
                  id="portfolio"
                  value={formData.portfolio}
                  onChange={(e) => handleInputChange('portfolio', e.target.value)}
                  placeholder="Share links to your work, case studies, or examples of your services..."
                  className="mt-1"
                />
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-2">
                Create your business profile
              </h2>
              <p className="text-muted-foreground">
                Tell potential buyers about your expertise and approach
              </p>
            </div>

            <div>
              <Label htmlFor="description">
                Business Description
              </Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) => handleInputChange('description', e.target.value)}
                placeholder="Describe your business, expertise, unique value proposition, and what makes you different from competitors..."
                className="mt-1 min-h-[120px]"
              />
            </div>

            <div className="bg-muted/50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Your Profile Summary:</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Business: {formData.businessName || 'Not specified'}</li>
                <li>• Type: {formData.businessType || 'Not specified'}</li>
                <li>• Industry: {formData.industry || 'Not specified'}</li>
                <li>• Experience: {formData.experience || 'Not specified'}</li>
                <li>• Services: {formData.services.length > 0 ? formData.services.join(', ') : 'None selected'}</li>
                {formData.website && <li>• Website: {formData.website}</li>}
              </ul>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-hero flex items-center justify-center px-4 pt-20">
      <div className="max-w-2xl mx-auto">
        <Card className="card-gradient border-white/20 shadow-large">
          <CardHeader className="text-center pb-6">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center shadow-glow">
              <Store className="w-8 h-8 text-white" />
            </div>
            <CardTitle className="text-xl text-foreground">
              Seller Onboarding
            </CardTitle>
            
            {/* Progress Bar */}
            <div className="flex items-center justify-center mt-6 space-x-2">
              {Array.from({ length: totalSteps }, (_, i) => (
                <div
                  key={i}
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-300 ${
                    i + 1 <= currentStep
                      ? 'bg-primary text-primary-foreground shadow-medium'
                      : 'bg-muted text-muted-foreground'
                  }`}
                >
                  {i + 1 < currentStep ? (
                    <Check className="w-4 h-4" />
                  ) : (
                    i + 1
                  )}
                </div>
              ))}
            </div>
          </CardHeader>

          <CardContent className="pb-8">
            {renderStepContent()}

            <div className="flex justify-between mt-8 pt-6 border-t border-border">
              <Button
                variant="outline"
                onClick={prevStep}
                disabled={currentStep === 1}
                className="flex items-center"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Previous
              </Button>

              {currentStep < totalSteps ? (
                <Button
                  onClick={nextStep}
                  className="bg-gradient-primary hover:shadow-glow flex items-center"
                >
                  Next
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              ) : (
                <Button
                  onClick={handleComplete}
                  className="bg-gradient-primary hover:shadow-glow flex items-center"
                >
                  Complete Setup
                  <Check className="w-4 h-4 ml-2" />
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SellerOnboarding;