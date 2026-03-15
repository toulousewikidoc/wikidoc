"use client";

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from '@/components/ui/accordion';
import { HelpCircle, Mail, MessageSquare, Infinity, BadgeEuro } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const FAQ_DATA = [
  {
    category: "Général",
    questions: [
      { q: "Qu'est-ce que Wikidoc Occitanie ?", a: "C'est une plateforme collaborative dédiée au savoir sur la région Occitanie, gérée par ses membres." },
      { q: "L'utilisation est-elle gratuite ?", a: "Absolument ! Wikidoc est 100% gratuit pour tous les utilisateurs, et ce, sans aucune limite de temps ou de contenu." }
    ]
  },
  {
    category: "Contributions",
    questions: [
      { q: "Comment devenir rédacteur ?", a: "Créez un compte et rendez-vous dans l'Éditeur pour proposer votre premier article. Il sera validé par un modérateur." },
      { q: "Puis-je modifier l'article d'un autre membre ?", a: "Oui, comme tout Wiki, l'édition est collaborative, mais chaque modification est historisée et vérifiée." }
    ]
  }
];

export default function FAQPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="text-center mb-16 space-y-4">
        <HelpCircle className="w-12 h-12 text-primary mx-auto" />
        <h1 className="text-4xl font-headline font-bold text-primary">Foire Aux Questions</h1>
        <p className="text-muted-foreground">Tout ce qu'il faut savoir pour bien utiliser Wikidoc.</p>
        
        <div className="flex justify-center gap-4 mt-6">
          <div className="flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-bold">
            <BadgeEuro className="w-4 h-4" /> 100% Gratuit
          </div>
          <div className="flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-bold">
            <Infinity className="w-4 h-4" /> Sans limite
          </div>
        </div>
      </div>

      <div className="space-y-12">
        {FAQ_DATA.map((section, i) => (
          <div key={i} className="space-y-4">
            <h2 className="text-2xl font-headline font-bold text-primary border-b pb-2">{section.category}</h2>
            <Accordion type="single" collapsible className="w-full">
              {section.questions.map((item, j) => (
                <AccordionItem key={j} value={`item-${i}-${j}`}>
                  <AccordionTrigger className="text-left font-medium">{item.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        ))}
      </div>

      <div className="mt-20 p-8 bg-muted rounded-2xl text-center space-y-6 border">
        <h3 className="text-2xl font-headline font-bold">Encore une question ?</h3>
        <p className="text-muted-foreground">Si vous n'avez pas trouvé votre réponse ici, n'hésitez pas à nous solliciter.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild variant="outline" className="gap-2">
            <Link href="/forum"><MessageSquare className="w-4 h-4" /> Poser au forum</Link>
          </Button>
          <Button asChild className="gap-2">
            <Link href="/contact"><Mail className="w-4 h-4" /> Nous contacter</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
