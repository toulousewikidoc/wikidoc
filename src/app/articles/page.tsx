"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Search, Filter, ArrowRight, Calendar, User, BookOpen } from 'lucide-react';
import { useTranslation } from '@/components/LanguageProvider';
import { WIKIDOC_CATEGORIES } from '@/lib/categories';

// Mock data for articles
const ALL_ARTICLES = [
  {
    title: "La Cité de Carcassonne : Secrets et Légendes",
    slug: "cite-carcassonne-secrets",
    theme: "Histoire",
    category: "Monuments",
    image: "https://picsum.photos/seed/carcassonne/600/400",
    author: "Marie P.",
    date: "15 Jan 2024",
    summary: "Découvrez les recoins cachés de la plus grande forteresse médiévale d'Europe, entre histoire réelle et mythes populaires."
  },
  {
    title: "Randonnée : Le Cirque de Gavarnie",
    slug: "gavarnie-pyrenees-rando",
    theme: "Loisirs",
    category: "Randonnée",
    image: "https://picsum.photos/seed/pyrenees/600/400",
    author: "Julien R.",
    date: "12 Mai 2024",
    summary: "Un itinéraire spectaculaire au cœur du Parc National des Pyrénées pour admirer la plus haute cascade d'Europe."
  },
  {
    title: "Toulouse : L'héritage de la brique rose",
    slug: "toulouse-heritage-brique",
    theme: "Société",
    category: "Architecture",
    image: "https://picsum.photos/seed/toulouse/600/400",
    author: "Luc T.",
    date: "05 Mar 2024",
    summary: "Pourquoi la ville s'est-elle parée de cette couleur si particulière ? Exploration de l'argile de la Garonne."
  },
  {
    title: "Le Pont du Gard : Aqueduc Romain",
    slug: "pont-du-gard-romain",
    theme: "Histoire",
    category: "Archéologie",
    image: "https://picsum.photos/seed/gard/600/400",
    author: "Sophie L.",
    date: "20 Fév 2024",
    summary: "Visite guidée d'un chef-d'œuvre de l'ingénierie antique qui alimentait Nîmes en eau potable."
  },
  {
    title: "Le Pic du Midi de Bigorre",
    slug: "pic-du-midi-astronomie",
    theme: "Sciences",
    category: "Astronomie",
    image: "https://picsum.photos/seed/pic/600/400",
    author: "Marc A.",
    date: "10 Avr 2024",
    summary: "Un voyage vers les étoiles depuis l'un des plus beaux sommets des Pyrénées, célèbre pour son observatoire."
  },
  {
    title: "Le Canal du Midi à vélo",
    slug: "canal-du-midi-velo",
    theme: "Loisirs",
    category: "Tourisme",
    image: "https://picsum.photos/seed/canal/600/400",
    author: "Claire D.",
    date: "01 Juin 2024",
    summary: "Parcourez l'œuvre de Pierre-Paul Riquet sous l'ombre des platanes centenaires entre Toulouse et Sète."
  }
];

export default function ArticlesPage() {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTheme, setSelectedTheme] = useState('Tous');

  const themes = ['Tous', ...WIKIDOC_CATEGORIES.map(c => c.title)];

  const filteredArticles = ALL_ARTICLES.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          article.summary.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTheme = selectedTheme === 'Tous' || article.theme === selectedTheme;
    return matchesSearch && matchesTheme;
  });

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="space-y-2">
          <h1 className="text-4xl font-headline font-bold text-primary">{t('nav_articles')}</h1>
          <p className="text-muted-foreground">Explorez la base de connaissances collaborative de l'Occitanie.</p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
          <div className="relative w-full sm:w-80">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input 
              type="search" 
              placeholder="Rechercher un article..." 
              className="pl-9"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar max-w-md">
            {themes.map(theme => (
              <Button 
                key={theme}
                variant={selectedTheme === theme ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedTheme(theme)}
                className="whitespace-nowrap"
              >
                {theme}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {filteredArticles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article, i) => (
            <Link href={`/articles/${article.slug}`} key={i}>
              <Card className="h-full overflow-hidden hover:shadow-lg transition-all group flex flex-col border-none bg-card/50">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    data-ai-hint="occitanie landscape"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <Badge className="bg-primary/90">{article.theme}</Badge>
                    <Badge variant="secondary" className="bg-white/80 backdrop-blur-sm text-black border-none">{article.category}</Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="line-clamp-2 leading-tight group-hover:text-primary transition-colors font-headline text-xl">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground text-sm line-clamp-3">
                    {article.summary}
                  </p>
                </CardContent>
                <CardFooter className="pt-0 flex flex-col items-start gap-4">
                  <div className="flex items-center gap-4 text-[10px] text-muted-foreground w-full border-t pt-4">
                    <div className="flex items-center gap-1">
                      <User className="w-3 h-3" /> {article.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" /> {article.date}
                    </div>
                  </div>
                  <div className="text-primary text-sm font-semibold flex items-center gap-1">
                    Lire l'article <ArrowRight className="w-3 h-3" />
                  </div>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center py-20 border-2 border-dashed rounded-2xl bg-muted/20">
          <BookOpen className="w-12 h-12 text-muted-foreground mx-auto mb-4 opacity-20" />
          <h3 className="text-xl font-bold text-muted-foreground">Aucun article trouvé</h3>
          <p className="text-muted-foreground mt-2">Essayez d'ajuster vos filtres ou votre recherche.</p>
        </div>
      )}
    </div>
  );
}
