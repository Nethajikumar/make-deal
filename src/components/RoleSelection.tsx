import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingCart, Store, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useUser } from '@/contexts/UserContext';

const RoleSelection: React.FC = () => {
  const navigate = useNavigate();
  const { setRole } = useUser();

  const handleRoleSelection = (selectedRole: 'buyer' | 'seller') => {
    setRole(selectedRole);
    navigate(`/onboarding/${selectedRole}`);
  };

  return (
    <div className="min-h-screen bg-gradient-hero flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Hero Section */}
        <div className="mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Welcome to <span className="text-primary-glow">MarketPlace</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Connect, collaborate, and grow your business. Choose your role to get started.
          </p>
        </div>

        {/* Role Selection Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {/* Buyer Card */}
          <Card className="card-gradient border-white/20 hover-lift hover-glow animate-slide-up">
            <CardContent className="p-8 text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-primary rounded-full flex items-center justify-center shadow-glow">
                <ShoppingCart className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Start as a Buyer
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Find the perfect products and services from trusted sellers. 
                Browse, compare, and connect with top vendors.
              </p>
              <ul className="text-left text-muted-foreground mb-8 space-y-2">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Access to verified sellers
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Smart matching system
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Secure messaging & documents
                </li>
              </ul>
              <Button
                onClick={() => handleRoleSelection('buyer')}
                className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300 group"
                size="lg"
              >
                Get Started as Buyer
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
            </CardContent>
          </Card>

          {/* Seller Card */}
          <Card className="card-gradient border-white/20 hover-lift hover-glow animate-slide-up">
            <CardContent className="p-8 text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-primary rounded-full flex items-center justify-center shadow-glow">
                <Store className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Start as a Seller
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Showcase your products and services to potential buyers. 
                Grow your business with powerful tools and insights.
              </p>
              <ul className="text-left text-muted-foreground mb-8 space-y-2">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Reach qualified buyers
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Professional storefront
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Business analytics & tools
                </li>
              </ul>
              <Button
                onClick={() => handleRoleSelection('seller')}
                className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300 group"
                size="lg"
              >
                Get Started as Seller
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-white/80 animate-fade-in">
          <p className="text-lg">
            Not sure which role is right for you? You can always switch later in your settings.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RoleSelection;