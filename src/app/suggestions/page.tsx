"use client";

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Lightbulb, Send, ThumbsUp } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function SuggestionsPage() {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Suggestion envoyée !",
      description: "Merci pour votre contribution. Les modérateurs vont l'examiner.",
    });
    setTitle('');
    setDesc('');
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="text-center mb-12 space-y-4">
        <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto text-accent">
          <Lightbulb className="w-8 h-8" />
        </div>
        <h1 className="text-4xl font-headline font-bold text-primary">Suggestions de la Communauté</h1>
        <p className="text-muted-foreground">Une idée pour améliorer Wikidoc ? Proposez-la ici !</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Nouvelle Suggestion</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Titre de l'idée</Label>
                  <Input 
                    id="title" 
                    placeholder="Ex: Mode sombre pour la carte" 
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="desc">Description détaillée</Label>
                  <Textarea 
                    id="desc" 
                    placeholder="Expliquez-nous comment cela pourrait aider les membres..." 
                    className="min-h-[150px]"
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                    required
                  />
                </div>
                <Button type="submit" className="w-full gap-2">
                  <Send className="w-4 h-4" /> Envoyer la suggestion
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-4">
            <h2 className="text-xl font-bold">Suggestions récentes</h2>
            {[
              { title: "Tracés GPX téléchargeables", author: "Marc31", votes: 24 },
              { title: "Système de badges pour les rédacteurs", author: "LucieAude", votes: 15 }
            ].map((sug, i) => (
              <Card key={i}>
                <CardContent className="p-4 flex justify-between items-center">
                  <div>
                    <h4 className="font-bold">{sug.title}</h4>
                    <p className="text-xs text-muted-foreground">Par {sug.author}</p>
                  </div>
                  <Button variant="outline" size="sm" className="gap-2">
                    <ThumbsUp className="w-4 h-4" /> {sug.votes}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <aside className="space-y-6">
          <Card className="bg-primary text-primary-foreground">
            <CardHeader>
              <CardTitle className="text-lg">Comment ça marche ?</CardTitle>
            </CardHeader>
            <CardContent className="text-sm space-y-2 opacity-90">
              <p>1. Proposez votre idée.</p>
              <p>2. La communauté vote.</p>
              <p>3. Les modérateurs étudient la faisabilité technique.</p>
              <p>4. Nous l'intégrons à Wikidoc !</p>
            </CardContent>
          </Card>
        </aside>
      </div>
    </div>
  );
}
