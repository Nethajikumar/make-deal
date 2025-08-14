import React from 'react';
import { Navigate } from 'react-router-dom';
import { useUser } from '@/contexts/UserContext';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requireOnboarding?: boolean;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ 
  children, 
  requireOnboarding = true 
}) => {
  const { role, isOnboarded } = useUser();

  // Redirect to role selection if no role is set
  if (!role) {
    return <Navigate to="/" replace />;
  }

  // Redirect to onboarding if onboarding is required but not completed
  if (requireOnboarding && !isOnboarded) {
    return <Navigate to={`/onboarding/${role}`} replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;