"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Map, 
  BookOpen, 
  MessageSquare, 
  PlusCircle, 
  Search, 
  Menu, 
  User, 
  Languages, 
  ChevronDown, 
  ShieldCheck, 
  Mail,
  Layout,
  Clock,
  FileText
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { useTranslation } from '@/components/LanguageProvider';
import { LANGUAGES, Language } from '@/types';
import { WIKIDOC_CATEGORIES } from '@/lib/categories';

// Simulation d'un utilisateur admin pour la démo
const MOCK_USER = {
  role: 'admin' as const,
  username: 'Admin Wikidoc'
};

export function Navbar() {
  const [mounted, setMounted] = useState(false);
  const { t, language, setLanguage } = useTranslation();

  useEffect(() => {
    setMounted(true);
  }, []);

  const isAdminOrMod = MOCK_USER.role === 'admin' || MOCK_USER.role === 'moderator';

  // Prévenir les erreurs d'hydratation en attendant le montage
  if (!mounted) {
    return (
      <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-headline font-bold text-primary">Wikidoc</span>
              <span className="hidden sm:inline-block text-accent font-semibold text-xs tracking-wider uppercase mt-1">Occitanie</span>
            </div>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* Première ligne : Logo et Outils */}
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-headline font-bold text-primary">Wikidoc</span>
            <span className="hidden sm:inline-block text-accent font-semibold text-xs tracking-wider uppercase mt-1">Occitanie</span>
          </Link>
        </div>

        <div className="flex items-center gap-3">
          {/* Recherche (Desktop) */}
          <div className="hidden lg:flex relative w-64 mr-2">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder={t('nav_search_placeholder')}
              className="pl-9 h-9"
            />
          </div>

          {/* Messagerie */}
          <Link href="/messages" className="relative p-2 hover:bg-muted rounded-full transition-colors" title="Messagerie">
            <Mail className="w-5 h-5 text-muted-foreground" />
            <span className="absolute top-1 right-1 w-4 h-4 bg-accent text-accent-foreground text-[10px] font-bold rounded-full flex items-center justify-center">
              3
            </span>
          </Link>

          {/* Langues */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="gap-2 px-2">
                <Languages className="w-4 h-4 text-accent" />
                <span className="uppercase text-xs font-bold hidden sm:inline">{language}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {LANGUAGES.map((lang) => (
                <DropdownMenuItem 
                  key={lang.value} 
                  onClick={() => setLanguage(lang.value as Language)}
                  className={language === lang.value ? "bg-accent/10 font-bold" : ""}
                >
                  {lang.label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Bouton Contribuer */}
          <Link href="/editor">
            <Button variant="default" size="sm" className="hidden sm:flex gap-2">
              <PlusCircle className="w-4 h-4" /> {t('nav_contribute')}
            </Button>
          </Link>

          {/* Profil */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <User className="w-5 h-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-64">
              <DropdownMenuLabel>Mon Compte</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/profile" className="cursor-pointer flex items-center gap-2">
                  <User className="w-4 h-4" /> Mon Profil
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/profile?tab=articles" className="cursor-pointer flex items-center gap-2">
                  <FileText className="w-4 h-4" /> Mes Articles
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/profile?tab=drafts" className="cursor-pointer flex items-center gap-2">
                  <Clock className="w-4 h-4" /> Mes Brouillons
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/profile?tab=templates" className="cursor-pointer flex items-center gap-2">
                  <Layout className="w-4 h-4" /> Mes Modèles
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" /> Favoris
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-destructive cursor-pointer">Déconnexion</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Menu Mobile */}
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="w-6 h-6" />
          </Button>
        </div>
      </div>

      {/* Seconde ligne : Navigation (Desktop uniquement) */}
      <div className="hidden md:block border-t bg-muted/10">
        <div className="container mx-auto px-4 h-12 flex items-center gap-6">
          <Link href="/articles" className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors flex items-center gap-2">
            <BookOpen className="w-4 h-4" /> {t('nav_articles')}
          </Link>
          
          <DropdownMenu>
            <DropdownMenuTrigger className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors flex items-center gap-1 outline-none">
              {t('nav_themes')} <ChevronDown className="w-4 h-4 opacity-50" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-64 max-h-[70vh] overflow-y-auto">
              <DropdownMenuLabel>Explorer par thématique</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {WIKIDOC_CATEGORIES.map((cat) => (
                <DropdownMenuItem key={cat.id} asChild>
                  <Link href={`/themes/${cat.slug}`} className="cursor-pointer">
                    {cat.title}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Link href="/map" className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors flex items-center gap-2">
            <Map className="w-4 h-4" /> {t('nav_map')}
          </Link>
          
          <Link href="/forum" className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors flex items-center gap-2">
            <MessageSquare className="w-4 h-4" /> {t('nav_forum')}
          </Link>
          
          {isAdminOrMod && (
            <Link href="/admin" className="text-sm font-bold text-accent hover:text-accent/80 transition-colors flex items-center gap-2 ml-auto">
              <ShieldCheck className="w-4 h-4" /> Administration
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
