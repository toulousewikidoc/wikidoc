"use client";

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  User, 
  MapPin, 
  Phone, 
  Mail, 
  Heart, 
  Gamepad2, 
  Music, 
  Trees, 
  ShieldCheck,
  Save,
  Globe,
  UtensilsCrossed,
  FileText,
  Edit,
  Trash2,
  AlertCircle,
  Settings,
  Layout,
  Copy,
  Clock,
  PlusCircle
} from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState('articles');

  // Sync tab with URL
  useEffect(() => {
    const tab = searchParams.get('tab');
    if (tab && ['articles', 'drafts', 'templates', 'details', 'interests', 'settings'].includes(tab)) {
      setActiveTab(tab);
    }
  }, [searchParams]);

  // Mock data for user's articles
  const userArticles = [
    { title: "La Cité de Carcassonne : Secrets et Légendes", status: "Publié", date: "15/01/2024", views: 1240 },
    { title: "Le Pont du Gard : Aqueduc Romain", status: "En attente", date: "20/02/2024", views: 0 },
  ];

  const userDrafts = [
    { id: 'd1', name: 'Brouillon - Château Lastours', date: '05/06/2024', last_edit: 'Hier' },
    { id: 'd2', name: 'Brouillon - Canal du Midi (partie 2)', date: '12/05/2024', last_edit: 'Il y a 2 semaines' },
  ];

  const userTemplates = [
    { id: 't1', name: 'Guide Randonnée', date: '01/01/2024', theme: 'Loisirs' },
    { id: 't2', name: 'Fiche Monument Historique', date: '10/02/2024', theme: 'Arts & Culture' },
  ];

  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      <div className="flex flex-col md:flex-row gap-8 items-start">
        {/* Left Side: Photo & Quick Info */}
        <aside className="w-full md:w-80 space-y-6">
          <Card className="overflow-hidden">
            <div className="h-32 bg-primary relative">
              <div className="absolute -bottom-12 left-1/2 -translate-x-1/2">
                <Avatar className="w-24 h-24 border-4 border-white shadow-xl">
                  <AvatarImage src="" />
                  <AvatarFallback className="bg-secondary text-primary text-2xl font-bold">JD</AvatarFallback>
                </Avatar>
              </div>
            </div>
            <CardContent className="pt-16 text-center space-y-4">
              <div>
                <h2 className="text-2xl font-headline font-bold">Jean Dupont</h2>
                <p className="text-sm text-muted-foreground">@jdupont31</p>
              </div>
              <div className="flex justify-center gap-2">
                <Badge variant="secondary" className="bg-accent/10 text-accent border-accent/20">Auteur Wikidoc</Badge>
                <Badge variant="outline" className="gap-1"><ShieldCheck className="w-3 h-3" /> Majeur</Badge>
              </div>
              <Button variant="outline" className="w-full gap-2" onClick={() => setIsEditing(!isEditing)}>
                {isEditing ? "Annuler" : "Modifier le profil"}
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-sm uppercase tracking-widest text-muted-foreground">Infos Rapides</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="w-4 h-4 text-primary" /> Toulouse, France
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Mail className="w-4 h-4 text-primary" /> jean.dupont@email.com
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="w-4 h-4 text-primary" /> 06 12 34 56 78
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Globe className="w-4 h-4 text-primary" /> Français, Anglais
              </div>
            </CardContent>
          </Card>
        </aside>

        {/* Right Side: Tabs */}
        <main className="flex-1">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="bg-muted/50 w-full justify-start overflow-x-auto h-auto p-1">
              <TabsTrigger value="articles" className="gap-2"><FileText className="w-4 h-4" /> Articles</TabsTrigger>
              <TabsTrigger value="drafts" className="gap-2"><Clock className="w-4 h-4" /> Brouillons</TabsTrigger>
              <TabsTrigger value="templates" className="gap-2"><Layout className="w-4 h-4" /> Modèles</TabsTrigger>
              <TabsTrigger value="details" className="gap-2"><User className="w-4 h-4" /> Détails</TabsTrigger>
              <TabsTrigger value="interests" className="gap-2"><Heart className="w-4 h-4" /> Intérêts</TabsTrigger>
              <TabsTrigger value="settings" className="gap-2"><Settings className="w-4 h-4" /> Compte</TabsTrigger>
            </TabsList>

            {/* Articles Panel */}
            <TabsContent value="articles">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <div>
                    <CardTitle>Mes Articles Publiés</CardTitle>
                    <CardDescription>Gérez vos contributions visibles par la communauté.</CardDescription>
                  </div>
                  <Button size="sm" asChild className="bg-accent text-accent-foreground">
                    <Link href="/editor">Nouvel Article</Link>
                  </Button>
                </CardHeader>
                <CardContent className="space-y-4">
                  {userArticles.map((article, i) => (
                    <div key={i} className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 border rounded-lg hover:bg-muted/30 transition-colors gap-4">
                      <div className="space-y-1">
                        <h4 className="font-bold">{article.title}</h4>
                        <div className="flex items-center gap-3 text-xs text-muted-foreground">
                          <Badge variant={article.status === 'Publié' ? 'default' : 'secondary'} className="text-[10px] h-4">
                            {article.status}
                          </Badge>
                          <span>Publié le {article.date}</span>
                          <span>{article.views} vues</span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="gap-1"><Edit className="w-3 h-3" /> Éditer</Button>
                        <Button variant="outline" size="sm" className="gap-1 text-destructive hover:bg-destructive/10"><Trash2 className="w-3 h-3" /> Supprimer</Button>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>

            {/* Drafts Panel */}
            <TabsContent value="drafts">
              <Card>
                <CardHeader>
                  <CardTitle>Mes Brouillons</CardTitle>
                  <CardDescription>Travaux en cours d'écriture, non visibles par le public.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {userDrafts.map((draft, i) => (
                    <div key={i} className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 border rounded-lg hover:bg-muted/30 transition-colors gap-4">
                      <div className="flex gap-4 items-center">
                        <div className="p-2 rounded-lg bg-blue-100 text-blue-600">
                          <Clock className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="font-bold">{draft.name}</h4>
                          <p className="text-xs text-muted-foreground">Dernière modification : {draft.last_edit}</p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" asChild>
                          <Link href="/editor" className="gap-2">
                            <Edit className="w-3 h-3" /> Reprendre
                          </Link>
                        </Button>
                        <Button variant="ghost" size="sm" className="text-destructive">
                          <Trash2 className="w-3 h-3" />
                        </Button>
                      </div>
                    </div>
                  ))}
                  {userDrafts.length === 0 && (
                    <p className="text-center py-8 text-muted-foreground italic">Aucun brouillon en cours.</p>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            {/* Templates Panel */}
            <TabsContent value="templates">
              <Card>
                <CardHeader>
                  <CardTitle>Mes Modèles de Page</CardTitle>
                  <CardDescription>Structures réutilisables enregistrées pour vos futures publications.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {userTemplates.map((template, i) => (
                    <div key={i} className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 border rounded-lg hover:bg-muted/30 transition-colors gap-4">
                      <div className="flex gap-4 items-center">
                        <div className="p-2 rounded-lg bg-accent/10 text-accent">
                          <Copy className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="font-bold">{template.name}</h4>
                          <p className="text-xs text-muted-foreground">Catégorie suggérée : {template.theme}</p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" asChild>
                          <Link href="/editor" className="gap-2">
                            <PlusCircle className="w-3 h-3" /> Utiliser
                          </Link>
                        </Button>
                        <Button variant="ghost" size="sm" className="text-destructive">
                          <Trash2 className="w-3 h-3" />
                        </Button>
                      </div>
                    </div>
                  ))}
                  {userTemplates.length === 0 && (
                    <p className="text-center py-8 text-muted-foreground italic">Vous n'avez pas encore enregistré de modèles.</p>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            {/* Details Content */}
            <TabsContent value="details">
              <Card>
                <CardHeader>
                  <CardTitle>Identité & Localisation</CardTitle>
                  <CardDescription>Informations de profil et de localisation.</CardDescription>
                </CardHeader>
                <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label>Nom</Label>
                    <Input defaultValue="Dupont" disabled={!isEditing} />
                  </div>
                  <div className="space-y-2">
                    <Label>Prénom</Label>
                    <Input defaultValue="Jean" disabled={!isEditing} />
                  </div>
                  <div className="space-y-2">
                    <Label>Genre</Label>
                    <Select defaultValue="homme" disabled={!isEditing}>
                      <SelectTrigger><SelectValue /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="homme">Homme</SelectItem>
                        <SelectItem value="femme">Femme</SelectItem>
                        <SelectItem value="autre">Autre</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Ville</Label>
                    <Input defaultValue="Toulouse" disabled={!isEditing} />
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <Label>Description / Bio</Label>
                    <Textarea 
                      defaultValue="Passionné de randonnée et de cuisine, j'aime découvrir de nouveaux paysages..." 
                      disabled={!isEditing}
                      rows={4}
                    />
                  </div>
                  <div className="flex items-center space-x-2 md:col-span-2 p-4 bg-muted/30 rounded-lg">
                    <Checkbox id="major" checked disabled={!isEditing} />
                    <label htmlFor="major" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      Je certifie être majeur(e)
                    </label>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Interests Content */}
            <TabsContent value="interests">
              <Card>
                <CardHeader>
                  <CardTitle>Passions & Style de vie</CardTitle>
                </CardHeader>
                <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label className="flex items-center gap-2"><Heart className="w-4 h-4" /> J'aime</Label>
                    <Input defaultValue="Les longues balades" disabled={!isEditing} />
                  </div>
                  <div className="space-y-2">
                    <Label className="flex items-center gap-2"><AlertCircle className="w-4 h-4 text-destructive" /> Je n'aime pas</Label>
                    <Input defaultValue="Les embouteillages" disabled={!isEditing} />
                  </div>
                  <div className="space-y-2">
                    <Label className="flex items-center gap-2"><Trees className="w-4 h-4" /> Environnement</Label>
                    <Input defaultValue="Montagne" disabled={!isEditing} />
                  </div>
                  <div className="space-y-2">
                    <Label className="flex items-center gap-2"><UtensilsCrossed className="w-4 h-4" /> Cuisine</Label>
                    <Input defaultValue="Cuisine italienne" disabled={!isEditing} />
                  </div>
                  <div className="space-y-2">
                    <Label className="flex items-center gap-2"><Music className="w-4 h-4" /> Musique</Label>
                    <Input defaultValue="Jazz, Rock" disabled={!isEditing} />
                  </div>
                  <div className="space-y-2">
                    <Label className="flex items-center gap-2"><Gamepad2 className="w-4 h-4" /> Jeux</Label>
                    <Input defaultValue="Échecs, Jeux de société" disabled={!isEditing} />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Account Settings */}
            <TabsContent value="settings">
              <Card>
                <CardHeader>
                  <CardTitle>Paramètres du compte</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h4 className="font-bold">Mode Public</h4>
                      <p className="text-xs text-muted-foreground">Rendre mon profil visible par les autres membres.</p>
                    </div>
                    <Checkbox checked />
                  </div>
                  <div className="p-4 border border-destructive/20 rounded-lg bg-destructive/5 space-y-4">
                    <h4 className="font-bold text-destructive">Zone de danger</h4>
                    <p className="text-xs text-muted-foreground italic">L'archivage de votre compte désactivera votre profil mais conservera vos contributions.</p>
                    <Button variant="outline" className="border-destructive text-destructive hover:bg-destructive hover:text-white">Archiver mon compte</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {isEditing && (
            <div className="mt-8 flex justify-end">
              <Button className="gap-2" onClick={() => setIsEditing(false)}>
                <Save className="w-4 h-4" /> Enregistrer les modifications
              </Button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
