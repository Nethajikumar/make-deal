import React from 'react';
import { FileText, Upload, Download, Eye, Search, Filter } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { useUser } from '@/contexts/UserContext';

const Documents: React.FC = () => {
  const { role } = useUser();

  const documents = [
    {
      id: 1,
      name: 'Project Proposal - Web Development',
      type: 'PDF',
      size: '2.4 MB',
      date: '2024-01-15',
      status: 'Signed',
      category: 'Proposals',
      sharedWith: role === 'buyer' ? 'TechSolutions Pro' : 'GlobalCorp Inc'
    },
    {
      id: 2,
      name: 'Service Agreement Template',
      type: 'DOCX',
      size: '1.2 MB',
      date: '2024-01-10',
      status: 'Draft',
      category: 'Contracts',
      sharedWith: null
    },
    {
      id: 3,
      name: 'Project Requirements Specification',
      type: 'PDF',
      size: '3.1 MB',
      date: '2024-01-08',
      status: 'Approved',
      category: 'Requirements',
      sharedWith: role === 'buyer' ? 'Creative Design Studio' : 'StartupX'
    },
    {
      id: 4,
      name: 'Invoice #2024-001',
      type: 'PDF',
      size: '856 KB',
      date: '2024-01-05',
      status: 'Paid',
      category: 'Invoices',
      sharedWith: role === 'buyer' ? 'Marketing Experts' : 'HealthTech Solutions'
    },
    {
      id: 5,
      name: 'NDA Agreement',
      type: 'PDF',
      size: '1.8 MB',
      date: '2024-01-03',
      status: 'Pending',
      category: 'Legal',
      sharedWith: role === 'buyer' ? 'TechSolutions Pro' : 'GlobalCorp Inc'
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Signed':
      case 'Approved':
      case 'Paid':
        return 'bg-green-100 text-green-700';
      case 'Pending':
        return 'bg-yellow-100 text-yellow-700';
      case 'Draft':
        return 'bg-gray-100 text-gray-700';
      default:
        return 'bg-blue-100 text-blue-700';
    }
  };

  return (
    <div className="min-h-screen bg-mesh pt-20 px-4 pb-20 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[150px] -mr-64 -mt-64" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary-glow/5 blur-[150px] -ml-64 -mb-64" />

      <div className="max-w-7xl mx-auto py-8 relative z-10">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-extrabold text-white mb-2 tracking-tight">
            Documents
          </h1>
          <p className="text-xl text-white/50 font-light">
            Secure storage for your contracts, proposals, and project assets
          </p>
        </div>


        {/* Actions Bar */}
        <Card className="mb-12 glass-morphism border-white/10 bg-white/5">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
              <div className="flex flex-col md:flex-row gap-6 flex-1 w-full md:w-auto">
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/40" />
                  <Input
                    placeholder="Search documents..."
                    className="pl-12 bg-white/5 border-white/10 text-white placeholder:text-white/20 h-14 rounded-2xl focus:ring-primary/50 w-full"
                  />
                </div>
                <Button variant="outline" className="flex items-center border-white/10 text-white hover:bg-white/10 h-14 px-8 rounded-2xl backdrop-blur-sm">
                  <Filter className="w-5 h-5 mr-2" />
                  Filters
                </Button>
              </div>
              <Button className="bg-primary hover:bg-primary-glow text-white h-14 px-8 rounded-2xl font-bold shadow-lg hover:shadow-primary/20 transition-all flex items-center">
                <Upload className="w-5 h-5 mr-3" />
                Upload Document
              </Button>
            </div>
          </CardContent>
        </Card>


        {/* Documents Grid */}
        <div className="grid gap-6">
          {documents.map((doc) => (
            <Card key={doc.id} className="glass-morphism border-white/5 hover-lift group overflow-hidden bg-white/95">
              <CardContent className="p-8 relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl -mr-16 -mt-16 group-hover:bg-primary/10 transition-colors" />
                
                <div className="flex items-center justify-between gap-6">
                  <div className="flex items-center space-x-6 flex-1 min-w-0">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center border border-primary/20 group-hover:scale-110 transition-transform duration-500">
                      <FileText className="w-8 h-8 text-primary" />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl font-extrabold text-foreground truncate group-hover:text-primary transition-colors">
                        {doc.name}
                      </h3>
                      <div className="flex items-center flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground mt-2 font-medium">
                        <span className="bg-gray-100 px-2 py-0.5 rounded uppercase text-[10px] font-black tracking-widest text-primary">
                          {doc.type}
                        </span>
                        <span className="flex items-center">
                          <Download className="w-3.5 h-3.5 mr-1.5 opacity-40" />
                          {doc.size}
                        </span>
                        <span>Updated {doc.date}</span>
                        {doc.sharedWith && (
                          <span className="text-primary/70">Shared with {doc.sharedWith}</span>
                        )}
                      </div>
                    </div>

                    <div className="hidden md:flex items-center space-x-3">
                      <Badge variant="secondary" className="bg-primary/5 text-primary border-transparent px-3 py-1 text-xs font-bold uppercase tracking-wider">
                        {doc.category}
                      </Badge>
                      <Badge className={`${getStatusColor(doc.status)} px-3 py-1 text-xs font-bold uppercase tracking-wider border-transparent`}>
                        {doc.status}
                      </Badge>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 ml-4">
                    <Button variant="ghost" size="icon" className="w-12 h-12 rounded-xl bg-black/5 hover:bg-primary hover:text-white transition-all">
                      <Eye className="w-5 h-5" />
                    </Button>
                    <Button variant="ghost" size="icon" className="w-12 h-12 rounded-xl bg-black/5 hover:bg-primary hover:text-white transition-all">
                      <Download className="w-5 h-5" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>


        {/* Empty State for no documents */}
        {documents.length === 0 && (
          <Card className="text-center py-12">
            <CardContent>
              <div className="w-16 h-16 mx-auto mb-4 bg-muted rounded-full flex items-center justify-center">
                <FileText className="w-8 h-8 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-medium text-foreground mb-2">
                No documents yet
              </h3>
              <p className="text-muted-foreground mb-4">
                Upload your first document to get started
              </p>
              <Button className="bg-gradient-primary hover:shadow-glow">
                <Upload className="w-4 h-4 mr-2" />
                Upload Document
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Document Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-bold text-primary mb-1">
                {documents.length}
              </div>
              <div className="text-sm text-muted-foreground">
                Total Documents
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-bold text-green-600 mb-1">
                {documents.filter(d => d.status === 'Signed' || d.status === 'Approved').length}
              </div>
              <div className="text-sm text-muted-foreground">
                Approved
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-bold text-yellow-600 mb-1">
                {documents.filter(d => d.status === 'Pending').length}
              </div>
              <div className="text-sm text-muted-foreground">
                Pending
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-bold text-gray-600 mb-1">
                {documents.filter(d => d.status === 'Draft').length}
              </div>
              <div className="text-sm text-muted-foreground">
                Drafts
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Documents;