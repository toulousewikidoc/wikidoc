"use client";

import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, History, Trees, Building2, MapPin, Search, ChevronRight, BookOpen } from 'lucide-react';
import { useTranslation } from '@/components/LanguageProvider';
import { WIKIDOC_CATEGORIES } from '@/lib/categories';
import * as LucideIcons from 'lucide-react';

export default function ThemePage() {
  const { slug } = useParams();
  const themeKey = Array.isArray(slug) ? slug[0] : slug;
  const theme = WIKIDOC_CATEGORIES.find(c => c.slug === themeKey);
  const { t } = useTranslation();

  if (!theme) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold">Thématique non trouvée</h1>
        <Button asChild className="mt-4">
          <Link href="/articles">Voir tous les articles</Link>
        </Button>
      </div>
    );
  }

  // Generic icon resolution
  const IconComponent = (LucideIcons as any)[theme.icon] || LucideIcons.BookOpen;

  return (
    <div className="flex flex-col gap-12 pb-20">
      {/* Theme Hero */}
      <section className={`py-20 bg-muted/30`}>
        <div className="container mx-auto px-4 flex flex-col items-center text-center space-y-6">
          <div className={`p-4 rounded-2xl bg-white shadow-sm text-primary`}>
            <IconComponent className="w-12 h-12" />
          </div>
          <h1 className="text-4xl md:text-6xl font-headline font-bold text-primary">
            {theme.title}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {theme.description}
          </p>
          <div className="flex gap-4 pt-4">
            <Button variant="outline" className="gap-2">
              <MapPin className="w-4 h-4" /> Voir sur la carte
            </Button>
            <Button className="gap-2">
              <Search className="w-4 h-4" /> Explorer tout
            </Button>
          </div>
        </div>
      </section>

      {/* Categories / Subsections */}
      {theme.subCategories && (
        <section className="container mx-auto px-4">
          <h2 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-6">Explorer les rubriques</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {theme.subCategories.map((sub) => (
              <Button key={sub.slug} variant="secondary" size="sm" className="justify-start font-medium bg-white border shadow-sm hover:bg-primary/5 hover:border-primary/20 transition-all">
                {sub.label}
              </Button>
            ))}
          </div>
        </section>
      )}

      {/* Featured in this theme */}
      <section className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-headline font-bold text-primary">Articles récents</h2>
          <div className="text-sm font-medium text-muted-foreground flex items-center gap-1">
            Articles de la rubrique {theme.title}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Mock results */}
          <Card className="h-full border-dashed border-2 flex flex-col items-center justify-center p-8 text-center bg-muted/10 group cursor-pointer hover:bg-muted/20 transition-colors">
            <div className="p-3 rounded-full bg-primary/10 text-primary mb-4 group-hover:scale-110 transition-transform">
              <IconComponent className="w-8 h-8" />
            </div>
            <h3 className="font-bold text-lg mb-2">Contribuer à ce thème</h3>
            <p className="text-sm text-muted-foreground mb-6">
              Soyez le premier à rédiger un article complet pour la rubrique {theme.title}.
            </p>
            <Button variant="outline" className="w-full gap-2" asChild>
              <Link href="/editor">Rédiger un article</Link>
            </Button>
          </Card>
        </div>
      </section>

      {/* Other themes */}
      <section className="container mx-auto px-4 pt-12">
        <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-6">Autres thématiques</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {WIKIDOC_CATEGORIES.filter((c) => c.slug !== themeKey).slice(0, 4).map((other) => (
            <Link href={`/themes/${other.slug}`} key={other.slug}>
              <div className="flex items-center justify-between p-4 rounded-xl border bg-card hover:border-primary/50 transition-colors group shadow-sm">
                <span className="font-semibold group-hover:text-primary transition-colors">{other.title}</span>
                <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
