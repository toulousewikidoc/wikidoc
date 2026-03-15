"use client";

import Link from 'next/link';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, MapPin, Compass, History, Trees, PlusCircle, Infinity, BadgeEuro, Building2 } from 'lucide-react';
import { useTranslation } from '@/components/LanguageProvider';

const featuredArticles = [
  {
    title: "La Cité de Carcassonne : Secrets et Légendes",
    slug: "cite-carcassonne-secrets",
    theme: "Histoire",
    image: PlaceHolderImages.find(img => img.id === 'carcassonne')?.imageUrl,
    summary: "Découvrez les recoins cachés de la plus grande forteresse médiévale d'Europe."
  },
  {
    title: "Randonnée : Le Cirque de Gavarnie",
    slug: "gavarnie-pyrenees-rando",
    theme: "Nature",
    image: PlaceHolderImages.find(img => img.id === 'hiking-pyrenees')?.imageUrl,
    summary: "Un itinéraire spectaculaire au cœur du Parc National des Pyrénées."
  },
  {
    title: "Toulouse : L'héritage de la brique rose",
    slug: "toulouse-heritage-brique",
    theme: "Urbanisme",
    image: PlaceHolderImages.find(img => img.id === 'toulouse-pink')?.imageUrl,
    summary: "Pourquoi la ville s'est-elle parée de cette couleur si particulière ?"
  }
];

export default function Home() {
  const { t } = useTranslation();
  const heroImg = PlaceHolderImages.find(img => img.id === 'hero-occitanie');

  return (
    <div className="flex flex-col gap-12 pb-20">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center text-white overflow-hidden">
        {heroImg && (
          <Image
            src={heroImg.imageUrl}
            alt={heroImg.description}
            fill
            className="object-cover brightness-50"
            priority
            data-ai-hint={heroImg.imageHint}
          />
        )}
        <div className="container relative z-10 px-4 text-center space-y-6">
          <div className="flex justify-center gap-3 mb-4 animate-in fade-in slide-in-from-top-4 duration-700">
            <Badge className="bg-emerald-500/90 text-white border-none gap-1 px-3 py-1">
              <BadgeEuro className="w-3 h-3" /> 100% Gratuit
            </Badge>
            <Badge className="bg-blue-500/90 text-white border-none gap-1 px-3 py-1">
              <Infinity className="w-3 h-3" /> Sans limite
            </Badge>
          </div>
          <h1 className="text-5xl md:text-7xl font-headline font-bold drop-shadow-lg">
            {t('hero_title')}
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto font-light">
            {t('hero_subtitle')}
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Link href="/articles">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                <Compass className="mr-2 h-5 w-5" /> {t('hero_start')}
              </Button>
            </Link>
            <Link href="/editor">
              <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 text-white">
                <PlusCircle className="mr-2 h-5 w-5" /> {t('hero_share')}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats / Categories */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: 'Histoire', icon: History, color: 'text-amber-600', count: '450+', slug: 'histoire' },
            { label: 'Nature', icon: Trees, color: 'text-emerald-600', count: '320+', slug: 'nature' },
            { label: 'Urbanisme', icon: Building2, color: 'text-blue-600', count: '120+', slug: 'urbanisme' },
            { label: 'Randonnées', icon: Compass, color: 'text-indigo-600', count: '210+', slug: 'nature' },
          ].map((cat, i) => (
            <Link href={`/themes/${cat.slug}`} key={i}>
              <Card className="text-center hover:shadow-md transition-shadow cursor-pointer h-full">
                <CardContent className="pt-6">
                  <cat.icon className={`w-8 h-8 mx-auto mb-2 ${cat.color}`} />
                  <div className="text-2xl font-bold">{cat.count}</div>
                  <div className="text-sm text-muted-foreground">{cat.label}</div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Articles */}
      <section className="container mx-auto px-4">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl font-headline font-bold text-primary">À la Une</h2>
            <p className="text-muted-foreground">Sélection des meilleurs récits et guides du moment.</p>
          </div>
          <Button variant="ghost" asChild>
            <Link href="/articles" className="flex items-center gap-1">
              Voir tout <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredArticles.map((article, i) => (
            <Link href={`/articles/${article.slug}`} key={i}>
              <Card className="h-full overflow-hidden hover:shadow-lg transition-all group border-none bg-card/50">
                <div className="relative h-48 w-full overflow-hidden">
                  {article.image && (
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  )}
                  <Badge className="absolute top-4 left-4 bg-primary/90">{article.theme}</Badge>
                </div>
                <CardHeader>
                  <CardTitle className="line-clamp-2 leading-tight group-hover:text-primary transition-colors">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm line-clamp-3">
                    {article.summary}
                  </p>
                </CardContent>
                <CardFooter className="text-primary text-sm font-semibold flex items-center gap-1">
                  Lire l'article <ArrowRight className="w-3 h-3" />
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Map Preview Placeholder */}
      <section className="bg-secondary/30 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-headline font-bold text-primary">L'Occitanie sur la carte</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Utilisez notre carte interactive pour filtrer les articles par thématique et localisation. Trouvez votre prochaine sortie culturelle ou nature en quelques clics.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <span>Filtrage par thèmes (Histoire, Nature, Urbanisme)</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <span>Localisation précise des points d'intérêt</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <span>Tracés de randonnées GPX intégrés</span>
                </li>
              </ul>
              <Link href="/map">
                <Button size="lg" className="mt-4">Explorer la carte</Button>
              </Link>
            </div>
            <Link href="/map" className="h-[450px] bg-white rounded-2xl shadow-xl border border-border p-2 overflow-hidden relative group cursor-pointer block">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1200')] bg-cover bg-center brightness-75 group-hover:brightness-90 transition-all" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg text-center max-w-xs">
                  <MapPin className="w-10 h-10 text-primary mx-auto mb-2" />
                  <h4 className="font-bold text-lg">Carte Interactive</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    Chargez la carte pour voir tous les points d'intérêt.
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
