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
    <div className="min-h-screen bg-background pt-20 px-4">
      <div className="max-w-7xl mx-auto py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Messages
          </h1>
          <p className="text-muted-foreground">
            Stay connected with your {role === 'buyer' ? 'sellers' : 'buyers'}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Conversations List */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center">
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Conversations
                </div>
                <span className="text-sm bg-primary text-primary-foreground px-2 py-1 rounded-full">
                  {conversations.filter(c => c.unread).length}
                </span>
              </CardTitle>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search conversations..."
                  className="pl-10"
                />
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div className="space-y-1">
                {conversations.map((conversation) => (
                  <div
                    key={conversation.id}
                    className={`p-4 hover:bg-muted/50 cursor-pointer transition-colors border-l-4 ${
                      conversation.unread ? 'border-primary bg-primary/5' : 'border-transparent'
                    }`}
                  >
                    <div className="flex items-start space-x-3">
                      <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-medium">
                        {conversation.avatar}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className={`text-sm font-medium truncate ${
                            conversation.unread ? 'text-foreground' : 'text-muted-foreground'
                          }`}>
                            {conversation.name}
                          </h4>
                          <span className="text-xs text-muted-foreground">
                            {conversation.time}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground truncate">
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
            <Card className="h-[600px] flex flex-col">
              <CardHeader className="border-b border-border">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-medium">
                    TS
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">
                      {role === 'buyer' ? 'TechSolutions Pro' : 'GlobalCorp Inc'}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Online now
                    </p>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="flex-1 p-4 overflow-y-auto">
                <div className="space-y-4">
                  {/* Sample messages */}
                  <div className="flex justify-start">
                    <div className="max-w-xs lg:max-w-md bg-muted rounded-lg p-3">
                      <p className="text-sm text-foreground">
                        Hi! I've reviewed your project requirements. I can definitely help you with this.
                      </p>
                      <span className="text-xs text-muted-foreground">10:30 AM</span>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <div className="max-w-xs lg:max-w-md bg-primary text-primary-foreground rounded-lg p-3">
                      <p className="text-sm">
                        Great! What's your timeline and budget for this project?
                      </p>
                      <span className="text-xs text-primary-foreground/70">10:35 AM</span>
                    </div>
                  </div>

                  <div className="flex justify-start">
                    <div className="max-w-xs lg:max-w-md bg-muted rounded-lg p-3">
                      <p className="text-sm text-foreground">
                        I can complete this within 2-3 weeks. My rate for this type of project is $5,000. Would you like to see some examples of similar work?
                      </p>
                      <span className="text-xs text-muted-foreground">10:40 AM</span>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <div className="max-w-xs lg:max-w-md bg-primary text-primary-foreground rounded-lg p-3">
                      <p className="text-sm">
                        Yes, please share your portfolio. The timeline works for us.
                      </p>
                      <span className="text-xs text-primary-foreground/70">10:45 AM</span>
                    </div>
                  </div>
                </div>
              </CardContent>

              {/* Message Input */}
              <div className="border-t border-border p-4">
                <div className="flex items-center space-x-2">
                  <Input
                    placeholder="Type your message..."
                    className="flex-1"
                  />
                  <Button size="sm" className="bg-gradient-primary hover:shadow-glow">
                    <Send className="w-4 h-4" />
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