"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Sparkles, Save, Eye, MapPin, Image as ImageIcon, History, Languages, FileText, Layout, Copy } from 'lucide-react';
import { runAiAssistant } from '@/app/actions/ai';
import { useToast } from '@/hooks/use-toast';
import { LANGUAGES, Language, ArticleTemplate } from '@/types';
import { WIKIDOC_CATEGORIES } from '@/lib/categories';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator
} from '@/components/ui/dropdown-menu';

// Mock templates
const MOCK_TEMPLATES: ArticleTemplate[] = [
  { id: '1', name: 'Guide Randonnée', title: 'Randonnée : [Nom du lieu]', content: '### Introduction\n\n### Parcours\n\n### Infos pratiques', theme: 'loisirs', language: 'fr', created_at: '2024-01-01' },
  { id: '2', name: 'Fiche Monument', title: 'Histoire de [Nom du monument]', content: '### Histoire\n\n### Architecture\n\n### Visite', theme: 'arts-culture', language: 'fr', created_at: '2024-01-02' },
];

export default function EditorPage() {
  const [content, setContent] = useState('');
  const [title, setTitle] = useState('');
  const [theme, setTheme] = useState('');
  const [subCategory, setSubCategory] = useState('');
  const [language, setLanguage] = useState<Language>('fr');
  const [aiInstructions, setAiInstructions] = useState('');
  const [isAiLoading, setIsAiLoading] = useState(false);
  const [aiSuggestions, setAiSuggestions] = useState<{ summary: string, themes: string[], slug: string } | null>(null);
  const { toast } = useToast();

  const handleAiAssist = async () => {
    if (!content || content.length < 50) {
      toast({
        title: "Contenu trop court",
        description: "Veuillez écrire au moins 50 caractères pour que l'IA puisse analyser votre texte.",
        variant: "destructive"
      });
      return;
    }

    setIsAiLoading(true);
    try {
      const result = await runAiAssistant({
        articleContent: content,
        language: language,
        userInstructions: aiInstructions
      });
      setAiSuggestions(result);
      toast({
        title: "Analyse terminée",
        description: "L'IA a généré un résumé, des thèmes et un slug pour votre article.",
      });
    } catch (error) {
      console.error(error);
      toast({
        title: "Erreur",
        description: "Impossible de joindre l'assistant IA pour le moment.",
        variant: "destructive"
      });
    } finally {
      setIsAiLoading(false);
    }
  };

  const applyTemplate = (template: ArticleTemplate) => {
    setTitle(template.title);
    setContent(template.content);
    setTheme(template.theme);
    setLanguage(template.language);
    toast({
      title: "Modèle appliqué",
      description: `Le modèle "${template.name}" a été chargé.`,
    });
  };

  const saveAsDraft = () => {
    toast({
      title: "Brouillon enregistré",
      description: "Votre article a été sauvegardé dans vos brouillons.",
    });
  };

  const saveAsTemplate = () => {
    toast({
      title: "Modèle enregistré",
      description: "Ce format de page est désormais réutilisable depuis votre compte.",
    });
  };

  const selectedCategory = WIKIDOC_CATEGORIES.find(c => c.slug === theme);

  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <div>
          <h1 className="text-4xl font-headline font-bold text-primary">Éditeur d'Article</h1>
          <p className="text-muted-foreground">Contribuez au savoir de l'Occitanie.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="gap-2">
                <Layout className="w-4 h-4" /> Modèles <Copy className="w-3 h-3 opacity-50" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>Charger un modèle</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {MOCK_TEMPLATES.map(t => (
                <DropdownMenuItem key={t.id} onClick={() => applyTemplate(t)}>
                  {t.name}
                </DropdownMenuItem>
              ))}
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={saveAsTemplate} className="text-accent font-medium">
                Enregistrer comme modèle
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <Button variant="outline" className="gap-2" onClick={saveAsDraft}>
            <FileText className="w-4 h-4" /> Brouillon
          </Button>
          <Button variant="outline" className="gap-2">
            <Eye className="w-4 h-4" /> Aperçu
          </Button>
          <Button className="gap-2 bg-accent text-accent-foreground hover:bg-accent/90">
            <Save className="w-4 h-4" /> Publier
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardContent className="pt-6 space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Titre de l'article</Label>
                <Input 
                  id="title" 
                  placeholder="Ex: Le Pont du Gard : Un chef-d'œuvre romain" 
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="text-lg font-bold"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="content">Contenu (Markdown supporté)</Label>
                <Textarea 
                  id="content" 
                  placeholder="Racontez l'histoire, décrivez le lieu..." 
                  className="min-h-[400px] font-body text-base leading-relaxed"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                />
              </div>
            </CardContent>
          </Card>

          <Card className="border-accent/20 bg-accent/5">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-accent" /> Assistant IA
                </CardTitle>
                <CardDescription>Optimisez votre article automatiquement</CardDescription>
              </div>
              <Button 
                onClick={handleAiAssist} 
                disabled={isAiLoading || !content}
                variant="outline"
                className="bg-white border-accent/20 text-accent hover:bg-accent/10"
              >
                {isAiLoading ? "Analyse..." : "Analyser le texte"}
              </Button>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="aiInstructions">Instructions pour l'IA (optionnel)</Label>
                <Textarea 
                  id="aiInstructions" 
                  placeholder="Ex: Donne un ton plus mystérieux, concentre-toi sur l'histoire médiévale..."
                  value={aiInstructions}
                  onChange={(e) => setAiInstructions(e.target.value)}
                  className="h-20 text-sm bg-white/50"
                />
                <p className="text-[10px] text-muted-foreground italic">
                  L'IA prendra en compte la langue choisie et vos instructions pour générer le résumé.
                </p>
              </div>

              {aiSuggestions ? (
                <div className="animate-in fade-in slide-in-from-top-4 duration-500 space-y-4 pt-4 border-t border-accent/10">
                  <div className="space-y-1">
                    <Label className="text-xs uppercase text-muted-foreground">Résumé suggéré</Label>
                    <p className="text-sm italic">{aiSuggestions.summary}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <Label className="text-xs uppercase text-muted-foreground">Thèmes détectés</Label>
                      <div className="flex flex-wrap gap-1">
                        {aiSuggestions.themes.map((t, i) => (
                          <span key={i} className="text-[10px] px-2 py-0.5 rounded-full bg-accent/20 text-accent font-bold">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-1">
                      <Label className="text-xs uppercase text-muted-foreground">Slug URL</Label>
                      <p className="text-xs font-mono text-muted-foreground truncate">{aiSuggestions.slug}</p>
                    </div>
                  </div>
                </div>
              ) : null}
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Classification</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label className="flex items-center gap-2">
                  <Languages className="w-4 h-4" /> Langue de rédaction
                </Label>
                <Select value={language} onValueChange={(val) => setLanguage(val as Language)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Choisir une langue" />
                  </SelectTrigger>
                  <SelectContent>
                    {LANGUAGES.map((lang) => (
                      <SelectItem key={lang.value} value={lang.value}>
                        {lang.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Rubrique principale</Label>
                <Select value={theme} onValueChange={(val) => { setTheme(val); setSubCategory(''); }}>
                  <SelectTrigger>
                    <SelectValue placeholder="Choisir une rubrique" />
                  </SelectTrigger>
                  <SelectContent className="max-h-[300px]">
                    {WIKIDOC_CATEGORIES.map((cat) => (
                      <SelectItem key={cat.slug} value={cat.slug}>
                        {cat.title}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {selectedCategory && selectedCategory.subCategories && (
                <div className="space-y-2 animate-in fade-in slide-in-from-top-2">
                  <Label>Sous-rubrique</Label>
                  <Select value={subCategory} onValueChange={setSubCategory}>
                    <SelectTrigger>
                      <SelectValue placeholder="Choisir une sous-rubrique" />
                    </SelectTrigger>
                    <SelectContent className="max-h-[300px]">
                      {selectedCategory.subCategories.map((sub) => (
                        <SelectItem key={sub.slug} value={sub.slug}>
                          {sub.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}

              <div className="space-y-2">
                <Label>Image de couverture</Label>
                <div className="border-2 border-dashed rounded-lg p-8 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-muted/50 transition-colors">
                  <ImageIcon className="w-8 h-8 text-muted-foreground mb-2" />
                  <p className="text-xs text-muted-foreground">Cliquez pour uploader</p>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Localisation / GéoJSON</Label>
                <Button variant="outline" className="w-full gap-2">
                  <MapPin className="w-4 h-4" /> Placer sur la carte
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                <History className="w-4 h-4" /> Révisions
              </CardTitle>
            </CardHeader>
            <CardContent className="text-xs space-y-2">
              <p className="text-muted-foreground italic">Aucune modification enregistrée pour le moment.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
