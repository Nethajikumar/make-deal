import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingCart, Store, ArrowRight, CheckCircle } from 'lucide-react';
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
    <div className="min-h-screen bg-mesh flex items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 blur-[120px] rounded-full animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary-glow/20 blur-[120px] rounded-full animate-pulse" />
      
      <div className="max-w-5xl w-full mx-auto text-center relative z-10">
        {/* Hero Section */}
        <div className="mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">
            Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-glow to-white text-glow">MarketPlace</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto leading-relaxed font-light">
            The premium ecosystem to <span className="text-white font-medium">connect</span>, 
            <span className="text-white font-medium"> collaborate</span>, and 
            <span className="text-white font-medium"> grow</span> your business.
          </p>
        </div>

        {/* Role Selection Cards */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto">

          {/* Buyer Card */}
          <Card className="glass-morphism border-white/10 hover-lift group animate-slide-up transition-all duration-500 overflow-hidden">
            <CardContent className="p-10 text-center relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-primary/10 transition-colors" />
              
              <div className="w-24 h-24 mx-auto mb-8 bg-gradient-to-br from-primary to-primary-glow rounded-3xl flex items-center justify-center shadow-glow transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                <ShoppingCart className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-4">
                I want to Buy
              </h3>
              <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
                Find perfect products and services from top-tier verified sellers.
              </p>
              <ul className="text-left text-muted-foreground mb-10 space-y-4 max-w-[240px] mx-auto">
                <li className="flex items-center text-sm font-medium">
                  <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                  Verified global sellers
                </li>
                <li className="flex items-center text-sm font-medium">
                  <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                  AI-powered matching
                </li>
                <li className="flex items-center text-sm font-medium">
                  <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                  Safe & secure escrow
                </li>
              </ul>

              <Button
                onClick={() => handleRoleSelection('buyer')}
                className="w-full bg-white text-primary hover:bg-primary-glow hover:text-white transition-all duration-300 group py-6 text-lg font-bold rounded-2xl shadow-xl hover:shadow-primary/20"
                size="lg"
              >
                Join as Buyer
                <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </CardContent>
          </Card>


          {/* Seller Card */}
          <Card className="glass-morphism border-white/10 hover-lift group animate-slide-up transition-all duration-500 delay-100 overflow-hidden">
            <CardContent className="p-10 text-center relative">
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary-glow/5 rounded-full blur-3xl -ml-16 -mb-16 group-hover:bg-primary-glow/10 transition-colors" />
              
              <div className="w-24 h-24 mx-auto mb-8 bg-gradient-to-br from-primary-glow to-primary rounded-3xl flex items-center justify-center shadow-glow transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                <Store className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-4">
                I want to Sell
              </h3>
              <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
                Scale your business and connect with high-quality global buyers.
              </p>
              <ul className="text-left text-muted-foreground mb-10 space-y-4 max-w-[240px] mx-auto">
                <li className="flex items-center text-sm font-medium">
                  <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                  Reach 10k+ buyers
                </li>
                <li className="flex items-center text-sm font-medium">
                  <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                  Premium analytics suite
                </li>
                <li className="flex items-center text-sm font-medium">
                  <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                  Priority support 24/7
                </li>
              </ul>

              <Button
                onClick={() => handleRoleSelection('seller')}
                className="w-full bg-gradient-to-r from-primary to-primary-glow text-white hover:shadow-glow transition-all duration-300 group py-6 text-lg font-bold rounded-2xl border-none"
                size="lg"
              >
                Join as Seller
                <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Additional Info */}
        <div className="mt-20 text-white/40 animate-fade-in delay-200">
          <p className="text-lg font-light italic">
            "The marketplace is where the future and opportunity meet."
          </p>
        </div>
      </div>
    </div>
  );
};


export default RoleSelection;