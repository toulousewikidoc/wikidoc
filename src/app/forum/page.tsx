"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MessageSquare, Users, TrendingUp, Search, Flag, MoreVertical, ShieldAlert } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';

const categories = [
  { title: "Conseils Randonnée", topics: 156, posts: 1240, description: "Partagez vos itinéraires et demandez des conseils sur le matériel." },
  { title: "Histoire & Patrimoine", topics: 89, posts: 567, description: "Discussions approfondies sur le passé de l'Occitanie." },
  { title: "Événements Locaux", topics: 45, posts: 210, description: "Ce qui se passe près de chez vous ce weekend." },
  { title: "Aide & Suggestions", topics: 23, posts: 112, description: "Comment contribuer au Wikidoc et suggestions d'amélioration." }
];

export default function ForumPage() {
  const { toast } = useToast();

  const handleReport = (target: string) => {
    toast({
      title: "Signalement envoyé",
      description: `Le contenu "${target}" a été signalé pour modération.`,
      variant: "destructive"
    });
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
        <div className="space-y-2">
          <h1 className="text-4xl font-headline font-bold text-primary">Le Forum Communautaire</h1>
          <p className="text-muted-foreground">Échangez avec les passionnés de la région.</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative w-64">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Rechercher un sujet..." className="pl-9" />
          </div>
          <Button className="bg-accent text-accent-foreground hover:bg-accent/90">Nouveau Sujet</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-6">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <MessageSquare className="w-5 h-5 text-primary" /> Catégories principales
          </h2>
          <div className="grid grid-cols-1 gap-4">
            {categories.map((cat, i) => (
              <Card key={i} className="hover:shadow-md transition-shadow cursor-pointer border-l-4 border-l-primary group relative">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg text-primary">{cat.title}</CardTitle>
                    <div className="flex items-center gap-4">
                      <div className="flex gap-4 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1"><MessageSquare className="w-3 h-3" /> {cat.topics} sujets</span>
                        <span className="flex items-center gap-1"><Users className="w-3 h-3" /> {cat.posts} messages</span>
                      </div>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" className="h-8 w-8 opacity-0 group-hover:opacity-100" onClick={(e) => e.stopPropagation()}><MoreVertical className="w-4 h-4" /></Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem onClick={(e) => { e.stopPropagation(); handleReport(cat.title); }}>
                            <Flag className="w-4 h-4 mr-2" /> Signaler la rubrique
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                  <CardDescription>{cat.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="pt-8">
            <h2 className="text-xl font-bold flex items-center gap-2 mb-6">
              <TrendingUp className="w-5 h-5 text-accent" /> Sujets récents
            </h2>
            <div className="space-y-4">
              {[
                { title: "Quel itinéraire pour le Canigou en juin ?", author: "MariePy", replies: 14, time: "Il y a 2h" },
                { title: "Restauration du château de Lastours", author: "Historien31", replies: 8, time: "Il y a 5h" },
                { title: "Le marché de Revel est-il ouvert ce jeudi ?", author: "Touriste12", replies: 3, time: "Il y a 1j" }
              ].map((topic, i) => (
                <div key={i} className="flex items-center justify-between p-4 rounded-lg bg-white border hover:border-primary/30 transition-colors cursor-pointer group">
                  <div className="space-y-1">
                    <h3 className="font-medium group-hover:text-primary transition-colors">{topic.title}</h3>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span>Par {topic.author}</span>
                      <span>•</span>
                      <span>{topic.time}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge variant="secondary">{topic.replies} rép.</Badge>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8 opacity-0 group-hover:opacity-100" onClick={(e) => e.stopPropagation()}><MoreVertical className="w-4 h-4" /></Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={(e) => { e.stopPropagation(); handleReport(topic.title); }}>
                          <ShieldAlert className="w-4 h-4 mr-2" /> Signaler le sujet
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <aside className="space-y-8">
          <Card className="bg-primary text-primary-foreground">
            <CardHeader>
              <CardTitle className="text-lg">Contribuer au Savoir</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm opacity-90 leading-relaxed">
                Le forum est l'antichambre du Wikidoc. Discutez d'un sujet, apportez vos preuves historiques ou vos photos, et un modérateur pourra en faire un article officiel.
              </p>
              <Button variant="secondary" className="w-full">Règles de la communauté</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Membres actifs</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { name: "Julien R.", points: 1450, badge: "Grand Explorateur" },
                { name: "MariePy", points: 890, badge: "Guide de Montagne" },
                { name: "Historien31", points: 2100, badge: "Gardien du Savoir" }
              ].map((user, i) => (
                <div key={i} className="flex items-center gap-3 group">
                  <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center font-bold text-primary">
                    {user.name[0]}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-sm">{user.name}</span>
                      <div className="flex items-center gap-2">
                         <span className="text-xs text-muted-foreground">{user.points} pts</span>
                         <Button variant="ghost" size="icon" className="h-6 w-6 opacity-0 group-hover:opacity-100" title="Signaler le membre" onClick={() => handleReport(user.name)}>
                           <Flag className="w-3 h-3 text-destructive" />
                         </Button>
                      </div>
                    </div>
                    <Badge variant="outline" className="text-[10px] h-4 border-accent/30 text-accent">{user.badge}</Badge>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </aside>
      </div>
    </div>
  );
}
