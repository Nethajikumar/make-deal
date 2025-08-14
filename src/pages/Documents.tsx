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
    <div className="min-h-screen bg-background pt-20 px-4">
      <div className="max-w-7xl mx-auto py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Documents
          </h1>
          <p className="text-muted-foreground">
            Manage contracts, proposals, and project documents
          </p>
        </div>

        {/* Actions Bar */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="flex flex-col md:flex-row gap-4 flex-1">
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    placeholder="Search documents..."
                    className="pl-10"
                  />
                </div>
                <Button variant="outline" className="flex items-center">
                  <Filter className="w-4 h-4 mr-2" />
                  Filters
                </Button>
              </div>
              <Button className="bg-gradient-primary hover:shadow-glow flex items-center">
                <Upload className="w-4 h-4 mr-2" />
                Upload Document
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Documents Grid */}
        <div className="grid gap-4">
          {documents.map((doc) => (
            <Card key={doc.id} className="hover-lift">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 flex-1">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <FileText className="w-6 h-6 text-primary" />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-foreground truncate">
                        {doc.name}
                      </h3>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground mt-1">
                        <span>{doc.type}</span>
                        <span>{doc.size}</span>
                        <span>{doc.date}</span>
                        {doc.sharedWith && (
                          <span>Shared with {doc.sharedWith}</span>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Badge variant="secondary">
                        {doc.category}
                      </Badge>
                      <Badge className={getStatusColor(doc.status)}>
                        {doc.status}
                      </Badge>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 ml-4">
                    <Button variant="ghost" size="sm">
                      <Eye className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Download className="w-4 h-4" />
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