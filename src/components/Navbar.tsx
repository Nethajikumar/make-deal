import React, { useState } from 'react';
import { Link, useLocation, NavLink } from 'react-router-dom';
import { Menu, X, Home, Users, MessageSquare, FileText, Settings, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useUser } from '@/contexts/UserContext';
import { cn } from '@/lib/utils';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { role, isOnboarded, logout } = useUser();
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Navigation items based on user role
  const getNavigationItems = () => {
    if (!role || !isOnboarded) return [];

    const commonItems = [
      { href: '/dashboard', label: 'Dashboard', icon: Home },
      { href: '/messages', label: 'Messages', icon: MessageSquare },
      { href: '/documents', label: 'Documents', icon: FileText },
      { href: '/settings', label: 'Settings', icon: Settings },
    ];

    const roleSpecificItems = role === 'buyer' 
      ? [{ href: '/matches', label: 'Find Sellers', icon: Users }]
      : [{ href: '/matches', label: 'Find Buyers', icon: Users }];

    return [...commonItems.slice(0, 1), ...roleSpecificItems, ...commonItems.slice(1)];
  };

  const navigationItems = getNavigationItems();

  const isActivePath = (path: string) => {
    return location.pathname === path;
  };

  const handleLogout = () => {
    logout();
    closeMobileMenu();
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-morphism border-white/10 bg-white/80 backdrop-blur-xl shadow-2xl shadow-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo and Home Button */}
          <div className="flex items-center space-x-6">
            <Link 
              to="/" 
              className="text-2xl font-black text-primary hover:text-primary-glow transition-all duration-300 tracking-tighter"
              onClick={closeMobileMenu}
            >
              Make<span className="text-foreground">-Deal</span>
            </Link>
          </div>


          {/* Desktop Navigation */}
          {navigationItems.length > 0 && (
            <div className="hidden md:flex items-center space-x-2">
              {navigationItems.map((item) => (
                <NavLink
                  key={item.href}
                  to={item.href}
                  className={({ isActive }) =>
                    cn(
                      "flex items-center space-x-2 px-6 py-3 rounded-2xl text-sm font-bold transition-all duration-300",
                      isActive
                        ? "bg-primary text-white shadow-lg shadow-primary/20 scale-105"
                        : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                    )
                  }
                  onClick={closeMobileMenu}
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </NavLink>
              ))}
              <div className="h-8 w-px bg-black/5 mx-4" />
              <Button
                variant="ghost"
                size="sm"
                onClick={handleLogout}
                className="text-muted-foreground hover:text-red-500 hover:bg-red-50 font-bold px-4 h-10 rounded-xl transition-all"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
            </div>
          )}


          {/* Mobile Menu Button */}
          {navigationItems.length > 0 && (
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleMobileMenu}
                aria-label="Toggle navigation menu"
                aria-expanded={isMobileMenuOpen}
                className="relative"
              >
                <div className="relative w-6 h-6">
                  <Menu
                    className={cn(
                      "absolute inset-0 w-6 h-6 transition-all duration-300",
                      isMobileMenuOpen ? "opacity-0 rotate-90" : "opacity-100 rotate-0"
                    )}
                  />
                  <X
                    className={cn(
                      "absolute inset-0 w-6 h-6 transition-all duration-300",
                      isMobileMenuOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"
                    )}
                  />
                </div>
              </Button>
            </div>
          )}
        </div>

        {/* Mobile Navigation Menu */}
        {navigationItems.length > 0 && (
          <div
            className={cn(
              "md:hidden transition-all duration-300 ease-in-out",
              isMobileMenuOpen
                ? "max-h-96 opacity-100 nav-slide-down"
                : "max-h-0 opacity-0 nav-slide-up overflow-hidden"
            )}
          >
            <div className="py-4 space-y-2">
              {navigationItems.map((item) => (
                <NavLink
                  key={item.href}
                  to={item.href}
                  className={({ isActive }) =>
                    cn(
                      "flex items-center space-x-3 px-4 py-3 rounded-lg text-base font-medium transition-all duration-200",
                      isActive
                        ? "bg-primary text-primary-foreground shadow-medium"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                    )
                  }
                  onClick={closeMobileMenu}
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </NavLink>
              ))}
              <Button
                variant="ghost"
                onClick={handleLogout}
                className="w-full justify-start px-4 py-3 text-base font-medium text-muted-foreground hover:text-foreground"
              >
                <LogOut className="w-5 h-5 mr-3" />
                Logout
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;