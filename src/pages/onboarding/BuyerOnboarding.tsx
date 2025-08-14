import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingCart, ArrowRight, ArrowLeft, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { useUser } from '@/contexts/UserContext';

const BuyerOnboarding: React.FC = () => {
  const navigate = useNavigate();
  const { setOnboarded } = useUser();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    companyName: '',
    industry: '',
    companySize: '',
    budget: '',
    interests: [] as string[],
    description: '',
  });

  const totalSteps = 3;

  const industryOptions = [
    'Technology', 'Healthcare', 'Finance', 'Manufacturing', 'Retail', 
    'Education', 'Real Estate', 'Food & Beverage', 'Other'
  ];

  const companySizeOptions = [
    '1-10 employees', '11-50 employees', '51-200 employees', 
    '201-1000 employees', '1000+ employees'
  ];

  const budgetOptions = [
    'Under $10K', '$10K - $50K', '$50K - $100K', 
    '$100K - $500K', '$500K+'
  ];

  const interestOptions = [
    'Software & Technology', 'Marketing & Advertising', 'Consulting Services',
    'Manufacturing & Equipment', 'Office Supplies', 'Professional Services',
    'Training & Development', 'Logistics & Transportation'
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleInterestChange = (interest: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      interests: checked 
        ? [...prev.interests, interest]
        : prev.interests.filter(i => i !== interest)
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
                Tell us about your company
              </h2>
              <p className="text-muted-foreground">
                Help us understand your business to provide better matches
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <Label htmlFor="companyName">Company Name</Label>
                <Input
                  id="companyName"
                  value={formData.companyName}
                  onChange={(e) => handleInputChange('companyName', e.target.value)}
                  placeholder="Enter your company name"
                  className="mt-1"
                />
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
                <Label htmlFor="companySize">Company Size</Label>
                <select
                  id="companySize"
                  value={formData.companySize}
                  onChange={(e) => handleInputChange('companySize', e.target.value)}
                  className="mt-1 w-full px-3 py-2 border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <option value="">Select company size</option>
                  {companySizeOptions.map(option => (
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
                What are you looking to buy?
              </h2>
              <p className="text-muted-foreground">
                Select your interests and budget range
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <Label htmlFor="budget">Budget Range</Label>
                <select
                  id="budget"
                  value={formData.budget}
                  onChange={(e) => handleInputChange('budget', e.target.value)}
                  className="mt-1 w-full px-3 py-2 border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <option value="">Select budget range</option>
                  {budgetOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>

              <div>
                <Label>Areas of Interest</Label>
                <div className="grid grid-cols-2 gap-3 mt-2">
                  {interestOptions.map(interest => (
                    <div key={interest} className="flex items-center space-x-2">
                      <Checkbox
                        id={interest}
                        checked={formData.interests.includes(interest)}
                        onCheckedChange={(checked) => 
                          handleInterestChange(interest, checked as boolean)
                        }
                      />
                      <Label htmlFor={interest} className="text-sm">
                        {interest}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-2">
                Almost done!
              </h2>
              <p className="text-muted-foreground">
                Tell us more about your specific needs
              </p>
            </div>

            <div>
              <Label htmlFor="description">
                Describe what you're looking for
              </Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) => handleInputChange('description', e.target.value)}
                placeholder="Tell us about your specific requirements, goals, or any other details that would help us match you with the right sellers..."
                className="mt-1 min-h-[120px]"
              />
            </div>

            <div className="bg-muted/50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Your Profile Summary:</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Company: {formData.companyName || 'Not specified'}</li>
                <li>• Industry: {formData.industry || 'Not specified'}</li>
                <li>• Size: {formData.companySize || 'Not specified'}</li>
                <li>• Budget: {formData.budget || 'Not specified'}</li>
                <li>• Interests: {formData.interests.length > 0 ? formData.interests.join(', ') : 'None selected'}</li>
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
              <ShoppingCart className="w-8 h-8 text-white" />
            </div>
            <CardTitle className="text-xl text-foreground">
              Buyer Onboarding
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

export default BuyerOnboarding;