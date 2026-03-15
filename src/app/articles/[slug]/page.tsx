"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  MapPin, 
  Calendar, 
  User, 
  Share2, 
  Heart, 
  MessageCircle, 
  Ruler, 
  Mountain, 
  Gauge, 
  Globe,
  Star,
  Camera,
  Send,
  Flag,
  AlertTriangle,
  MoreVertical
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { useToast } from '@/hooks/use-toast';

// Mock data remains similar but expanded
const getMockArticle = (slug: string) => {
  if (slug === 'gavarnie-pyrenees-rando') {
    return {
      title: "Randonnée : Le Cirque de Gavarnie",
      category: "Nature",
      theme: "Randonnée",
      language: "fr",
      imageUrl: "https://picsum.photos/seed/pyrenees/1200/600",
      author: "Julien R.",
      date: "12 Mai 2024",
      rating: 4.8,
      ratingCount: 124,
      content: `
        Le Cirque de Gavarnie est sans aucun doute l'un des joyaux les plus impressionnants des Pyrénées. Inscrit au patrimoine mondial de l'UNESCO, ce amphithéâtre naturel aux parois vertigineuses culmine à plus de 3000 mètres d'altitude.
        
        ### Le départ
        Le sentier commence au village de Gavarnie. C'est une marche accessible à tous.
      `,
      geo_json: {
        metriques: { distance: "8.5 km", difficulte: "Modéré", denivele: "+450m" }
      }
    };
  }
  return null;
};

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = getMockArticle(params.slug);
  const [userRating, setUserRating] = useState(0);
  const [comment, setComment] = useState('');
  const { toast } = useToast();

  const handleReport = (target: string) => {
    toast({
      title: "Signalement enregistré",
      description: `Ce contenu (${target}) a été signalé aux modérateurs pour vérification.`,
      variant: "destructive",
    });
  };

  if (!article) return <div className="p-20 text-center">Article non trouvé</div>;

  return (
    <article className="min-h-screen pb-20">
      {/* Hero Header */}
      <div className="relative h-[450px] w-full">
        <Image src={article.imageUrl} alt={article.title} fill className="object-cover brightness-75" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-16">
          <div className="container mx-auto">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge className="bg-accent text-accent-foreground">{article.category}</Badge>
                  <div className="flex items-center gap-1 bg-black/40 px-2 py-0.5 rounded text-white text-xs backdrop-blur-sm">
                    <Star className="w-3 h-3 fill-amber-400 text-amber-400" /> {article.rating} ({article.ratingCount})
                  </div>
                </div>
                <h1 className="text-4xl md:text-6xl font-headline font-bold text-white mb-4">{article.title}</h1>
              </div>
              <Button variant="outline" className="bg-white/10 text-white border-white/20 hover:bg-white/20 gap-2" onClick={() => handleReport('Article')}>
                <Flag className="w-4 h-4" /> Signaler l'article
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <div className="prose prose-lg max-w-none dark:prose-invert">
              <div dangerouslySetInnerHTML={{ __html: article.content.replace(/\n/g, '<br/>') }} />
            </div>

            <Separator />

            {/* Rating Section */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-headline font-bold">Noter cet article</h3>
                <Button variant="ghost" size="sm" className="text-muted-foreground gap-2" onClick={() => handleReport('Système de notation')}>
                  <AlertTriangle className="w-4 h-4" /> Signaler un abus
                </Button>
              </div>
              <div className="flex items-center gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button key={star} onClick={() => setUserRating(star)} className="focus:outline-none">
                    <Star className={`w-8 h-8 ${userRating >= star ? 'fill-amber-400 text-amber-400' : 'text-muted-foreground'}`} />
                  </button>
                ))}
                <span className="text-sm text-muted-foreground ml-2">Votre note : {userRating}/5</span>
              </div>
            </div>

            {/* Comments & Photos Section */}
            <div className="space-y-6">
              <h3 className="text-2xl font-headline font-bold">Commentaires & Photos</h3>
              <div className="bg-muted/30 rounded-xl p-6 border space-y-4">
                <div className="flex gap-4">
                  <Button variant="outline" className="gap-2 shrink-0">
                    <Camera className="w-4 h-4" /> Ajouter Photo
                  </Button>
                  <Textarea 
                    placeholder="Partagez votre expérience ou vos précisions historiques..." 
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                  />
                </div>
                <div className="flex justify-end">
                  <Button className="gap-2"><Send className="w-4 h-4" /> Publier</Button>
                </div>
              </div>

              {/* Mock Comments */}
              <div className="space-y-4 pt-4">
                <div className="flex gap-4 p-4 border rounded-lg group relative">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-bold">M</div>
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="font-bold">Marie P.</span>
                        <span className="text-xs text-muted-foreground">Il y a 2 jours</span>
                      </div>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" className="h-8 w-8 opacity-0 group-hover:opacity-100"><MoreVertical className="w-4 h-4" /></Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem onClick={() => handleReport('Commentaire')}>
                            <Flag className="w-4 h-4 mr-2" /> Signaler le commentaire
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => handleReport('Membre')}>
                            <User className="w-4 h-4 mr-2" /> Signaler l'auteur
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                    <p className="text-sm">J'ai fait cette rando hier, les marmottes étaient bien là !</p>
                    <div className="flex gap-2 mt-2">
                      <div className="w-20 h-20 rounded bg-muted relative overflow-hidden group/img">
                        <Image src="https://picsum.photos/seed/marmotte/200/200" alt="rando" fill className="object-cover" />
                        <button className="absolute inset-0 bg-black/40 text-white opacity-0 group-hover/img:opacity-100 flex items-center justify-center transition-opacity" onClick={() => handleReport('Photo')}>
                          <Flag className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar Technical Info */}
          <aside className="space-y-8">
            <Card className="shadow-lg border-primary/10">
              <CardHeader className="bg-primary text-primary-foreground">
                <CardTitle className="text-lg">Fiche Technique</CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-4">
                <div className="flex justify-between text-sm">
                  <span>Distance</span> <span className="font-bold">{article.geo_json.metriques.distance}</span>
                </div>
                <Separator />
                <div className="flex justify-between text-sm">
                  <span>Dénivelé</span> <span className="font-bold text-accent">{article.geo_json.metriques.denivele}</span>
                </div>
              </CardContent>
            </Card>
          </aside>
        </div>
      </div>
    </article>
  );
}
