import React from 'react';
import { MessageSquare, Send, Search } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useUser } from '@/contexts/UserContext';

const Messages: React.FC = () => {
  const { role } = useUser();

  const conversations = [
    {
      id: 1,
      name: role === 'buyer' ? 'TechSolutions Pro' : 'GlobalCorp Inc',
      lastMessage: 'Thanks for the proposal. When can we start?',
      time: '2h ago',
      unread: true,
      avatar: 'TS'
    },
    {
      id: 2,
      name: role === 'buyer' ? 'Creative Design Studio' : 'StartupX',
      lastMessage: 'The design looks great! Can you make a few adjustments?',
      time: '5h ago',
      unread: false,
      avatar: 'CD'
    },
    {
      id: 3,
      name: role === 'buyer' ? 'Marketing Experts' : 'Enterprise Solutions',
      lastMessage: 'Project completed successfully. Thank you!',
      time: '1d ago',
      unread: false,
      avatar: 'ME'
    },
  ];

  return (
    <div className="min-h-screen bg-mesh pt-20 px-4 pb-20 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[150px] -mr-64 -mt-64" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary-glow/5 blur-[150px] -ml-64 -mb-64" />

      <div className="max-w-7xl mx-auto py-8 relative z-10">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-extrabold text-white mb-2 tracking-tight">
            Messages
          </h1>
          <p className="text-xl text-white/50 font-light">
            Stay connected and collaborate in real-time
          </p>
        </div>


        <div className="grid lg:grid-cols-3 gap-8">
          {/* Conversations List */}
          <Card className="glass-morphism border-white/10 bg-white/5 overflow-hidden">
            <CardHeader className="bg-white/5 pb-6">
              <CardTitle className="flex items-center justify-between text-white mb-4">
                <div className="flex items-center">
                  <MessageSquare className="w-5 h-5 mr-3 text-primary" />
                  Conversations
                </div>
                <span className="text-sm bg-primary text-white px-3 py-1 rounded-full font-bold shadow-lg shadow-primary/20">
                  {conversations.filter(c => c.unread).length}
                </span>
              </CardTitle>
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/40" />
                <Input
                  placeholder="Search conversations..."
                  className="pl-11 bg-white/5 border-white/10 text-white placeholder:text-white/20 h-12 rounded-xl focus:ring-primary/50"
                />
              </div>
            </CardHeader>

            <CardContent className="p-0">
              <div className="space-y-0">
                {conversations.map((conversation) => (
                  <div
                    key={conversation.id}
                    className={`p-5 hover:bg-white/10 cursor-pointer transition-all border-l-4 group ${
                      conversation.unread ? 'border-primary bg-primary/10' : 'border-transparent'
                    }`}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-primary-glow text-white flex items-center justify-center text-sm font-bold shadow-glow transform group-hover:scale-110 transition-transform duration-300">
                        {conversation.avatar}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className={`text-base font-bold truncate ${
                            conversation.unread ? 'text-white' : 'text-white/70 group-hover:text-white'
                          } transition-colors`}>
                            {conversation.name}
                          </h4>
                          <span className="text-xs text-white/30">
                            {conversation.time}
                          </span>
                        </div>
                        <p className={`text-sm truncate ${
                          conversation.unread ? 'text-white/60 font-medium' : 'text-white/40'
                        }`}>
                          {conversation.lastMessage}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>


          {/* Chat Area */}
          <div className="lg:col-span-2">
            <Card className="h-[700px] flex flex-col glass-morphism border-white/10 bg-white/95 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-3xl -mr-32 -mt-32" />
              
              <CardHeader className="border-b border-black/5 pb-6 bg-white/50 backdrop-blur-md">
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-primary-glow text-white flex items-center justify-center text-lg font-bold shadow-glow">
                    TS
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-foreground">
                      {role === 'buyer' ? 'TechSolutions Pro' : 'GlobalCorp Inc'}
                    </h3>
                    <div className="flex items-center mt-1">
                      <div className="w-2 h-2 rounded-full bg-success mr-2 shadow-[0_0_8px_rgba(34,197,94,0.5)] animate-pulse"></div>
                      <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
                        Active Now
                      </p>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="flex-1 p-8 overflow-y-auto space-y-8 custom-scrollbar">
                {/* Sample messages */}
                <div className="flex justify-start">
                  <div className="max-w-xs lg:max-w-md bg-black/5 rounded-2xl rounded-tl-none p-5 shadow-sm">
                    <p className="text-foreground leading-relaxed">
                      Hi! I've reviewed your project requirements. I can definitely help you with this.
                    </p>
                    <div className="flex justify-end mt-2">
                      <span className="text-[10px] font-bold text-muted-foreground uppercase opacity-50">10:30 AM</span>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end">
                  <div className="max-w-xs lg:max-w-md bg-primary text-white rounded-2xl rounded-tr-none p-5 shadow-lg shadow-primary/20">
                    <p className="leading-relaxed font-medium">
                      Great! What's your timeline and budget for this project?
                    </p>
                    <div className="flex justify-end mt-2">
                      <span className="text-[10px] font-bold text-white/50 uppercase">10:35 AM</span>
                    </div>
                  </div>
                </div>

                <div className="flex justify-start">
                  <div className="max-w-xs lg:max-w-md bg-black/5 rounded-2xl rounded-tl-none p-5 shadow-sm">
                    <p className="text-foreground leading-relaxed">
                      I can complete this within 2-3 weeks. My rate for this type of project is $5,000. Would you like to see some examples of similar work?
                    </p>
                    <div className="flex justify-end mt-2">
                      <span className="text-[10px] font-bold text-muted-foreground uppercase opacity-50">10:40 AM</span>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end">
                  <div className="max-w-xs lg:max-w-md bg-primary text-white rounded-2xl rounded-tr-none p-5 shadow-lg shadow-primary/20">
                    <p className="leading-relaxed font-medium">
                      Yes, please share your portfolio. The timeline works for us.
                    </p>
                    <div className="flex justify-end mt-2">
                      <span className="text-[10px] font-bold text-white/50 uppercase">10:45 AM</span>
                    </div>
                  </div>
                </div>
              </CardContent>

              {/* Message Input */}
              <div className="p-6 bg-white/50 backdrop-blur-md border-t border-black/5">
                <div className="flex items-center space-x-3">
                  <Input
                    placeholder="Type your message..."
                    className="flex-1 h-14 bg-black/5 border-transparent focus:bg-white transition-all rounded-xl px-6"
                  />
                  <Button className="h-14 w-14 rounded-xl bg-primary hover:bg-primary-glow text-white shadow-lg hover:shadow-primary/20 transition-all group">
                    <Send className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Messages;