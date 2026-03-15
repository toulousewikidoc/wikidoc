"use client";

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Users, 
  FileText, 
  Settings, 
  ShieldAlert, 
  LayoutDashboard, 
  MoreVertical, 
  Ban, 
  Trash2, 
  CheckCircle,
  AlertTriangle,
  Search,
  History,
  Lightbulb,
  MessageSquare,
  Star,
  HelpCircle,
  ArrowUpRight,
  UserPlus,
  Archive,
  BarChart3,
  ShieldCheck,
  StickyNote,
  PlusCircle
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator
} from '@/components/ui/dropdown-menu';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-headline font-bold text-primary">Administration & Modération</h1>
          <p className="text-muted-foreground text-sm">Gérez les membres, les contenus et surveillez l'activité de la plateforme Wikidoc.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="gap-2">
            <History className="w-4 h-4" /> Journal d'audit
          </Button>
          <Button size="sm" className="gap-2 bg-accent text-accent-foreground hover:bg-accent/90">
            <Settings className="w-4 h-4" /> Paramètres App
          </Button>
        </div>
      </div>

      {/* Main Tabs Navigation */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="bg-muted/50 p-1 flex flex-wrap h-auto">
          <TabsTrigger value="dashboard" className="gap-2 flex-1 min-w-[140px]"><LayoutDashboard className="w-4 h-4" /> Tableau de Bord</TabsTrigger>
          <TabsTrigger value="members" className="gap-2 flex-1 min-w-[140px]"><Users className="w-4 h-4" /> Membres</TabsTrigger>
          <TabsTrigger value="articles" className="gap-2 flex-1 min-w-[140px]"><FileText className="w-4 h-4" /> Articles</TabsTrigger>
          <TabsTrigger value="suggestions" className="gap-2 flex-1 min-w-[140px]"><Lightbulb className="w-4 h-4" /> Suggestions</TabsTrigger>
          <TabsTrigger value="exchanges" className="gap-2 flex-1 min-w-[140px]"><StickyNote className="w-4 h-4" /> Échanges/Notes</TabsTrigger>
          <TabsTrigger value="evaluations" className="gap-2 flex-1 min-w-[140px]"><Star className="w-4 h-4" /> Évaluations</TabsTrigger>
          <TabsTrigger value="forum_faq" className="gap-2 flex-1 min-w-[140px]"><HelpCircle className="w-4 h-4" /> Forum/FAQ</TabsTrigger>
        </TabsList>

        {/* 1. Dashboard / Tableau de Bord */}
        <TabsContent value="dashboard" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Total Membres</p>
                    <h3 className="text-2xl font-bold">1,284</h3>
                  </div>
                  <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
                    <Users className="w-5 h-5" />
                  </div>
                </div>
                <div className="flex items-center gap-1 mt-4 text-xs text-emerald-600 font-medium">
                  <ArrowUpRight className="w-3 h-3" /> +12% ce mois
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Articles Publiés</p>
                    <h3 className="text-2xl font-bold">452</h3>
                  </div>
                  <div className="p-2 bg-amber-100 text-amber-600 rounded-lg">
                    <FileText className="w-5 h-5" />
                  </div>
                </div>
                <div className="flex items-center gap-1 mt-4 text-xs text-amber-600 font-medium">
                  8 en attente de validation
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Signalements Critiques</p>
                    <h3 className="text-2xl font-bold text-destructive">14</h3>
                  </div>
                  <div className="p-2 bg-red-100 text-red-600 rounded-lg">
                    <ShieldAlert className="w-5 h-5" />
                  </div>
                </div>
                <div className="flex items-center gap-1 mt-4 text-xs text-red-600 font-medium">
                  Besoin d'action immédiate
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Suggestions</p>
                    <h3 className="text-2xl font-bold">32</h3>
                  </div>
                  <div className="p-2 bg-emerald-100 text-emerald-600 rounded-lg">
                    <Lightbulb className="w-5 h-5" />
                  </div>
                </div>
                <div className="flex items-center gap-1 mt-4 text-xs text-blue-600 font-medium">
                  5 nouvelles idées
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Activités Récentes</CardTitle>
                <CardDescription>Dernières actions sur la plateforme.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { user: "Jean D.", action: "a publié l'article", target: "Cité de Carcassonne", time: "Il y a 2h" },
                    { user: "Marie P.", action: "a rejoint le Wikidoc", target: "", time: "Il y a 5h" },
                    { user: "Admin", action: "a modifié les rôles de", target: "2 membres", time: "Hier" },
                  ].map((act, i) => (
                    <div key={i} className="flex justify-between items-center text-sm border-b pb-3 last:border-0">
                      <div>
                        <span className="font-bold">{act.user}</span> {act.action} <span className="font-medium text-primary">{act.target}</span>
                      </div>
                      <span className="text-xs text-muted-foreground">{act.time}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Alertes de Modération</CardTitle>
                <CardDescription>Contenus signalés nécessitant une révision urgente.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-3 border rounded-lg bg-red-50 flex justify-between items-center">
                    <div className="flex gap-3 items-center">
                      <AlertTriangle className="w-4 h-4 text-destructive" />
                      <div>
                        <p className="text-sm font-bold">Commentaire inapproprié</p>
                        <p className="text-xs text-muted-foreground">Sur l'article "Le Pont du Gard"</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="text-destructive">Gérer</Button>
                  </div>
                  <div className="p-3 border rounded-lg bg-amber-50 flex justify-between items-center">
                    <div className="flex gap-3 items-center">
                      <ShieldAlert className="w-4 h-4 text-amber-600" />
                      <div>
                        <p className="text-sm font-bold">Suspicion de spam</p>
                        <p className="text-xs text-muted-foreground">Nouvel utilisateur: Roboter99</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="text-amber-600">Vérifier</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* 2. Membres / Gestion Utilisateurs */}
        <TabsContent value="members">
          <Card>
            <CardHeader className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div>
                <CardTitle>Gestion des Utilisateurs</CardTitle>
                <CardDescription>Modifiez les rôles, bloquez des membres ou archivez les comptes inactifs.</CardDescription>
              </div>
              <div className="flex gap-2 w-full md:w-auto">
                <div className="relative flex-1 md:w-64">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Rechercher (Pseudo, Email...)" className="pl-9 h-9" />
                </div>
                <Button size="sm" className="gap-2"><UserPlus className="w-4 h-4" /> Inviter</Button>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Membre</TableHead>
                    <TableHead>Rôle</TableHead>
                    <TableHead>Statut</TableHead>
                    <TableHead>Dernière activité</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center font-bold text-xs">JD</div>
                        <div>
                          <div className="font-bold">Jean Dupont</div>
                          <div className="text-xs text-muted-foreground">jean.dupont@email.com</div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell><Badge variant="outline" className="bg-primary/5 border-primary/20 text-primary">Administrateur</Badge></TableCell>
                    <TableCell><Badge className="bg-emerald-500/10 text-emerald-600 border-emerald-500/20">Actif</Badge></TableCell>
                    <TableCell className="text-xs">Aujourd'hui, 14:20</TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon"><MoreVertical className="w-4 h-4" /></Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Actions Administrateur</DropdownMenuLabel>
                          <DropdownMenuItem>Voir le profil</DropdownMenuItem>
                          <DropdownMenuItem>Changer le rôle</DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="text-amber-600"><Ban className="w-4 h-4 mr-2" /> Bloquer</DropdownMenuItem>
                          <DropdownMenuItem className="text-destructive"><Trash2 className="w-4 h-4 mr-2" /> Supprimer</DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem><Archive className="w-4 h-4 mr-2" /> Archiver le compte</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center font-bold text-xs">SL</div>
                        <div>
                          <div className="font-bold">Sophie Laurent</div>
                          <div className="text-xs text-muted-foreground">sophie.l@email.com</div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell><Badge variant="secondary">Modérateur</Badge></TableCell>
                    <TableCell><Badge className="bg-emerald-500/10 text-emerald-600 border-emerald-500/20">Actif</Badge></TableCell>
                    <TableCell className="text-xs">Hier, 10:15</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="icon"><MoreVertical className="w-4 h-4" /></Button>
                    </TableCell>
                  </TableRow>
                  <TableRow className="bg-muted/30">
                    <TableCell>
                      <div className="flex items-center gap-3 grayscale opacity-60">
                        <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center font-bold text-xs">IN</div>
                        <div>
                          <div className="font-bold">Inactif_99</div>
                          <div className="text-xs text-muted-foreground">old.user@email.com</div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell><Badge variant="outline">Membre</Badge></TableCell>
                    <TableCell><Badge variant="outline" className="text-muted-foreground">Inactif (6 mois+)</Badge></TableCell>
                    <TableCell className="text-xs">Il y a 204 jours</TableCell>
                    <TableCell className="text-right">
                      <Button variant="outline" size="sm" className="gap-2">
                        <Archive className="w-3 h-3" /> Archiver
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        {/* 3. Articles / Modération Contenu */}
        <TabsContent value="articles">
          <Card>
            <CardHeader>
              <CardTitle>Modération des Articles</CardTitle>
              <CardDescription>Validez les nouvelles publications ou gérez les contenus signalés.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex flex-col md:flex-row md:items-center justify-between p-4 border rounded-lg hover:bg-muted/30 transition-colors gap-4">
                  <div className="flex gap-4 items-center">
                    <div className="p-2 rounded-full bg-amber-100 text-amber-600">
                      <AlertTriangle className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold">Le Pont du Gard (Signalé)</h4>
                      <p className="text-xs text-muted-foreground">Contenu potentiellement erroné • Signalé par Marie L.</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">Vérifier</Button>
                    <Button variant="outline" size="sm" className="text-amber-600 border-amber-200">Modifier</Button>
                    <Button size="sm" className="bg-destructive hover:bg-destructive/90">Supprimer</Button>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row md:items-center justify-between p-4 border rounded-lg hover:bg-muted/30 transition-colors gap-4">
                  <div className="flex gap-4 items-center">
                    <div className="p-2 rounded-full bg-emerald-100 text-emerald-600">
                      <FileText className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold">Les Halles de Narbonne</h4>
                      <p className="text-xs text-muted-foreground">En attente de validation • Auteur: Marc A.</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">Aperçu</Button>
                    <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700 text-white">Approuver</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* 4. Suggestions */}
        <TabsContent value="suggestions">
          <Card>
            <CardHeader>
              <CardTitle>Boîte à Idées (Suggestions)</CardTitle>
              <CardDescription>Gérez les propositions d'amélioration soumises par la communauté.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 border rounded-lg bg-accent/5">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold">Mode sombre pour la carte</h4>
                    <Badge className="bg-blue-100 text-blue-600 border-none">Nouveau</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">La carte est trop lumineuse en utilisation nocturne. Serait-il possible d'avoir un thème sombre ?</p>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="text-emerald-600 border-emerald-200">Approuver</Button>
                    <Button size="sm" variant="ghost">Rejeter</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* 5. Échanges / Notes */}
        <TabsContent value="exchanges">
          <Card>
            <CardHeader>
              <CardTitle>Échanges & Notes Privées</CardTitle>
              <CardDescription>Surveillance des messages signalés et notes internes.</CardDescription>
            </CardHeader>
            <CardContent className="h-64 flex flex-col items-center justify-center text-center space-y-4 border-2 border-dashed rounded-lg">
              <StickyNote className="w-12 h-12 text-muted-foreground/20" />
              <div>
                <p className="font-medium text-muted-foreground italic">Aucun message signalé pour le moment.</p>
                <p className="text-xs text-muted-foreground">Les échanges privés sont uniquement accessibles en cas de signalement de harcèlement.</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* 6. Évaluations */}
        <TabsContent value="evaluations">
          <Card>
            <CardHeader>
              <CardTitle>Modération des Évaluations</CardTitle>
              <CardDescription>Gérez les notes et les commentaires laissés sur les articles.</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Article</TableHead>
                    <TableHead>Note</TableHead>
                    <TableHead>Commentaire</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-bold">Cité de Carcassonne</TableCell>
                    <TableCell><div className="flex text-amber-500"><Star className="w-4 h-4 fill-current" /> 5/5</div></TableCell>
                    <TableCell className="text-sm">"Magnifique article, très complet !"</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm" className="text-destructive hover:bg-destructive/10">Masquer</Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        {/* 7. Forum / FAQ */}
        <TabsContent value="forum_faq">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-lg">Rubriques du Forum</CardTitle>
                <Button variant="outline" size="sm" className="gap-2">
                  <PlusCircle className="w-4 h-4" /> Ajouter
                </Button>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex justify-between items-center p-3 bg-muted/50 rounded-lg border">
                    <span className="text-sm font-medium">Conseils Randonnée</span>
                    <div className="flex gap-1">
                      <Button variant="ghost" size="icon" className="h-7 w-7"><Settings className="w-3 h-3" /></Button>
                      <Button variant="ghost" size="icon" className="h-7 w-7 text-destructive"><Trash2 className="w-3 h-3" /></Button>
                    </div>
                  </li>
                  <li className="flex justify-between items-center p-3 bg-muted/50 rounded-lg border">
                    <span className="text-sm font-medium">Histoire & Patrimoine</span>
                    <Button variant="ghost" size="icon" className="h-7 w-7"><Settings className="w-3 h-3" /></Button>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-lg">Gestion FAQ</CardTitle>
                <Button variant="outline" size="sm" className="gap-2">
                  <PlusCircle className="w-4 h-4" /> Nouvelle Q/R
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-3 border rounded-lg text-sm bg-muted/20">
                    <div className="font-bold">Comment devenir rédacteur ?</div>
                    <div className="text-muted-foreground text-xs mt-1 italic">Dernière mise à jour: 12/05/2024</div>
                  </div>
                  <div className="p-3 border rounded-lg text-sm bg-muted/20">
                    <div className="font-bold">Comment ajouter un tracé GPX ?</div>
                    <div className="text-muted-foreground text-xs mt-1 italic">Dernière mise à jour: 02/06/2024</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}