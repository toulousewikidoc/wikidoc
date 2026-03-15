import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { BookOpen, CheckCircle2, Languages, ShieldCheck, MapPin, Search } from 'lucide-react';

export default function GuidelinesPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-headline font-bold text-primary mb-4 text-center">Charte Éditoriale</h1>
      <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto italic">
        "Contribuer au savoir collectif de l'Occitanie avec rigueur, passion et respect."
      </p>

      <div className="space-y-8">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="border-primary/10 shadow-sm">
            <CardHeader className="flex flex-row items-center gap-3 pb-2">
              <div className="p-2 bg-primary/10 rounded-lg text-primary">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <CardTitle className="text-lg">Fiabilité & Sources</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground leading-relaxed">
              Tout article publié doit s'appuyer sur des faits vérifiables. Nous encourageons vivement la citation de sources historiques, de bibliographies ou de références institutionnelles pour garantir la crédibilité du Wikidoc.
            </CardContent>
          </Card>

          <Card className="border-primary/10 shadow-sm">
            <CardHeader className="flex flex-row items-center gap-3 pb-2">
              <div className="p-2 bg-accent/10 rounded-lg text-accent">
                <Languages className="w-5 h-5" />
              </div>
              <CardTitle className="text-lg">Diversité Linguistique</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground leading-relaxed">
              L'Occitanie est multilingue. Nous soutenons la rédaction en Français, Occitan, Catalan, Basque, Espagnol et Anglais. L'usage de la langue régionale du lieu décrit est particulièrement apprécié.
            </CardContent>
          </Card>
        </section>

        <Card className="shadow-md border-primary/10 overflow-hidden">
          <CardHeader className="bg-primary/5 border-b">
            <CardTitle className="flex items-center gap-2 text-primary font-headline">
              <BookOpen className="w-6 h-6" /> Principes Fondamentaux
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-8 space-y-8">
            <div className="flex gap-4">
              <div className="mt-1"><CheckCircle2 className="w-5 h-5 text-accent shrink-0" /></div>
              <div className="space-y-1">
                <h4 className="font-bold">Pertinence thématique</h4>
                <p className="text-sm text-muted-foreground">
                  Les articles doivent concerner directement la région Occitanie : son histoire, ses paysages, sa culture, son urbanisme ou ses événements. Les sujets hors-territoire ou purement promotionnels ne sont pas acceptés.
                </p>
              </div>
            </div>

            <Separator />

            <div className="flex gap-4">
              <div className="mt-1"><CheckCircle2 className="w-5 h-5 text-accent shrink-0" /></div>
              <div className="space-y-1">
                <h4 className="font-bold">Neutralité & Respect</h4>
                <p className="text-sm text-muted-foreground">
                  Le Wikidoc est un espace de savoir, pas de polémique. Les articles doivent rester neutres et factuels. Tout contenu incitant à la haine, discriminatoire ou diffamatoire sera supprimé sans préavis.
                </p>
              </div>
            </div>

            <Separator />

            <div className="flex gap-4">
              <div className="mt-1"><CheckCircle2 className="w-5 h-5 text-accent shrink-0" /></div>
              <div className="space-y-1">
                <h4 className="font-bold">Qualité de rédaction</h4>
                <p className="text-sm text-muted-foreground">
                  Nous privilégions les textes structurés (utilisez les titres Markdown), une orthographe soignée et des photos de qualité. L'IA peut vous aider à résumer, mais le cœur du récit doit rester humain.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="text-xl font-headline font-bold text-primary flex items-center gap-2">
              <MapPin className="w-5 h-5" /> Géolocalisation
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Un article Wikidoc est encore plus utile s'il est localisé. Nous demandons aux auteurs d'ajouter des coordonnées GPS précises ou des tracés de randonnée (GéoJSON/GPX) pour permettre aux lecteurs de découvrir les lieux sur le terrain.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-headline font-bold text-primary flex items-center gap-2">
              <Search className="w-5 h-5" /> Modération
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Chaque contribution est soumise à une relecture par nos modérateurs bénévoles. Ils s'assurent du respect de cette charte avant validation finale. Les modérateurs peuvent suggérer des modifications ou corriger des erreurs factuelles mineures.
            </p>
          </div>
        </div>

        <div className="bg-primary p-6 rounded-xl text-primary-foreground text-center shadow-lg mt-12">
          <h3 className="text-2xl font-headline font-bold mb-2">Prêt à partager votre savoir ?</h3>
          <p className="mb-4 text-primary-foreground/90">
            En publiant sur Wikidoc Occitanie, vous contribuez à la mémoire vive de notre territoire.
          </p>
          <div className="flex justify-center gap-4">
            <a href="/editor" className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-accent text-accent-foreground hover:bg-accent/90 h-10 px-4 py-2">
              Ouvrir l'éditeur
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
