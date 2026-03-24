import React from 'react';
import { User, Bell, Shield, CreditCard, HelpCircle, LogOut } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';
import { useUser } from '@/contexts/UserContext';

const Settings: React.FC = () => {
  const { role, logout } = useUser();

  return (
    <div className="min-h-screen bg-mesh pt-20 px-4 pb-20 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[150px] -mr-64 -mt-64" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary-glow/5 blur-[150px] -ml-64 -mb-64" />

      <div className="max-w-4xl mx-auto py-8 relative z-10">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-extrabold text-white mb-2 tracking-tight">
            Settings
          </h1>
          <p className="text-xl text-white/50 font-light">
            Manage your professional profile and security preferences
          </p>
        </div>


        <div className="space-y-12">
          {/* Profile Settings */}
          <Card className="glass-morphism border-white/10 bg-white/95 overflow-hidden">
            <CardHeader className="border-b border-black/5 pb-6">
              <CardTitle className="flex items-center text-foreground text-2xl font-bold">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center mr-4">
                  <User className="w-5 h-5 text-primary" />
                </div>
                Profile Information
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-sm font-bold text-muted-foreground uppercase tracking-widest">First Name</Label>
                  <Input id="firstName" placeholder="Nethaji" className="h-12 bg-black/5 border-transparent focus:bg-white transition-all rounded-xl px-4 font-medium" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-sm font-bold text-muted-foreground uppercase tracking-widest">Last Name</Label>
                  <Input id="lastName" placeholder="K" className="h-12 bg-black/5 border-transparent focus:bg-white transition-all rounded-xl px-4 font-medium" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-bold text-muted-foreground uppercase tracking-widest">Email Address</Label>
                <Input id="email" type="email" placeholder="nethaji.k@example.com" className="h-12 bg-black/5 border-transparent focus:bg-white transition-all rounded-xl px-4 font-medium" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-sm font-bold text-muted-foreground uppercase tracking-widest">Phone Number</Label>
                <Input id="phone" type="tel" placeholder="+91 826 123-4567" className="h-12 bg-black/5 border-transparent focus:bg-white transition-all rounded-xl px-4 font-medium" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="bio" className="text-sm font-bold text-muted-foreground uppercase tracking-widest">Bio</Label>
                <textarea
                  id="bio"
                  className="w-full px-4 py-3 border border-transparent rounded-xl bg-black/5 focus:bg-white focus:ring-2 focus:ring-primary/20 transition-all font-medium resize-none"
                  rows={4}
                  placeholder={`Tell ${role === 'buyer' ? 'sellers' : 'buyers'} about yourself...`}
                />
              </div>

              <Button className="bg-primary hover:bg-primary-glow text-white px-8 py-6 rounded-xl font-bold shadow-lg hover:shadow-primary/20 transition-all">
                Save Changes
              </Button>
            </CardContent>
          </Card>


          {/* Notification Settings */}
          <Card className="glass-morphism border-white/10 bg-white/95 overflow-hidden">
            <CardHeader className="border-b border-black/5 pb-6">
              <CardTitle className="flex items-center text-foreground text-2xl font-bold">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center mr-4">
                  <Bell className="w-5 h-5 text-primary" />
                </div>
                Notifications
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8 space-y-8">
              <div className="flex items-center justify-between group">
                <div>
                  <h4 className="font-bold text-foreground text-lg group-hover:text-primary transition-colors">Email Notifications</h4>
                  <p className="text-sm text-muted-foreground font-medium">Receive updates and alerts via email</p>
                </div>
                <Switch className="data-[state=checked]:bg-primary" />
              </div>

              <Separator className="bg-black/5" />

              <div className="flex items-center justify-between group">
                <div>
                  <h4 className="font-bold text-foreground text-lg group-hover:text-primary transition-colors">New Messages</h4>
                  <p className="text-sm text-muted-foreground font-medium">Get notified when you receive new messages</p>
                </div>
                <Switch className="data-[state=checked]:bg-primary" />
              </div>

              <div className="flex items-center justify-between group">
                <div>
                  <h4 className="font-bold text-foreground text-lg group-hover:text-primary transition-colors">Project Updates</h4>
                  <p className="text-sm text-muted-foreground font-medium">Notifications about project milestones</p>
                </div>
                <Switch className="data-[state=checked]:bg-primary" />
              </div>

              <div className="flex items-center justify-between group">
                <div>
                  <h4 className="font-bold text-foreground text-lg group-hover:text-primary transition-colors">Marketing Emails</h4>
                  <p className="text-sm text-muted-foreground font-medium">Receive promotional content and updates</p>
                </div>
                <Switch className="data-[state=checked]:bg-primary" />
              </div>
            </CardContent>
          </Card>


          {/* Security Settings */}
          <Card className="glass-morphism border-white/10 bg-white/95 overflow-hidden">
            <CardHeader className="border-b border-black/5 pb-6">
              <CardTitle className="flex items-center text-foreground text-2xl font-bold">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center mr-4">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                Security & Privacy
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8 space-y-8">
              <div className="space-y-6">
                <h4 className="text-sm font-black text-primary uppercase tracking-[0.2em] mb-4">Change Password</h4>
                <div className="grid gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="currentPassword" className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Current Password</Label>
                    <Input id="currentPassword" type="password" className="h-12 bg-black/5 border-transparent focus:bg-white transition-all rounded-xl px-4" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="newPassword" className="text-xs font-bold text-muted-foreground uppercase tracking-widest">New Password</Label>
                      <Input id="newPassword" type="password" className="h-12 bg-black/5 border-transparent focus:bg-white transition-all rounded-xl px-4" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="confirmPassword" className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Confirm New Password</Label>
                      <Input id="confirmPassword" type="password" className="h-12 bg-black/5 border-transparent focus:bg-white transition-all rounded-xl px-4" />
                    </div>
                  </div>
                  <Button variant="outline" className="w-fit border-primary/20 text-primary hover:bg-primary/5 h-12 px-8 rounded-xl font-bold transition-all">
                    Update Password
                  </Button>
                </div>
              </div>

              <Separator className="bg-black/5" />

              <div className="flex items-center justify-between group">
                <div>
                  <h4 className="font-bold text-foreground text-lg group-hover:text-primary transition-colors">Two-Factor Authentication</h4>
                  <p className="text-sm text-muted-foreground font-medium">Add an extra layer of security to your account</p>
                </div>
                <Button variant="outline" className="border-primary/20 text-primary hover:bg-primary/5 h-12 px-8 rounded-xl font-bold transition-all">
                  Enable 2FA
                </Button>
              </div>

              <div className="flex items-center justify-between group">
                <div>
                  <h4 className="font-bold text-foreground text-lg group-hover:text-primary transition-colors">Profile Visibility</h4>
                  <p className="text-sm text-muted-foreground font-medium">Control who can see your profile details</p>
                </div>
                <Switch defaultChecked className="data-[state=checked]:bg-primary" />
              </div>
            </CardContent>
          </Card>

          {/* Billing Settings */}
          <Card className="glass-morphism border-white/10 bg-white/95 overflow-hidden">
            <CardHeader className="border-b border-black/5 pb-6">
              <CardTitle className="flex items-center text-foreground text-2xl font-bold">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center mr-4">
                  <CreditCard className="w-5 h-5 text-primary" />
                </div>
                Billing & Payments
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8 space-y-8">
              <div className="flex items-center justify-between group">
                <div>
                  <h4 className="font-bold text-foreground text-lg group-hover:text-primary transition-colors">Payment Methods</h4>
                  <p className="text-sm text-muted-foreground font-medium">Manage your saved cards and accounts</p>
                </div>
                <Button variant="outline" className="border-primary/20 text-primary hover:bg-primary/5 h-12 px-8 rounded-xl font-bold transition-all">
                  Manage
                </Button>
              </div>

              <Separator className="bg-black/5" />

              <div className="flex items-center justify-between group">
                <div>
                  <h4 className="font-bold text-foreground text-lg group-hover:text-primary transition-colors">Billing History</h4>
                  <p className="text-sm text-muted-foreground font-medium">View and download your past transactions</p>
                </div>
                <Button variant="outline" className="border-primary/20 text-primary hover:bg-primary/5 h-12 px-8 rounded-xl font-bold transition-all">
                  View History
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Account Actions */}
          <Card className="glass-morphism border-red-500/20 bg-red-500/5 overflow-hidden">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h4 className="font-bold text-red-600 text-xl mb-1">Danger Zone</h4>
                  <p className="text-sm text-red-600/70 font-medium">Once you delete your account, there is no going back. Please be certain.</p>
                </div>
                <div className="flex gap-4 w-full md:w-auto">
                  <Button variant="outline" className="flex-1 md:flex-none border-red-200 text-red-600 hover:bg-red-50 h-12 px-8 rounded-xl font-bold transition-all">
                    Deactivate
                  </Button>
                  <Button 
                    variant="destructive" 
                    onClick={logout}
                    className="flex-1 md:flex-none bg-red-600 hover:bg-red-700 text-white h-12 px-8 rounded-xl font-bold shadow-lg shadow-red-600/20 transition-all flex items-center"
                  >
                    <LogOut className="w-4 h-4 mr-2" />
                    Logout
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

        </div>
      </div>
    </div>
  );
};

export default Settings;