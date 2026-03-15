import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function LegalPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-headline font-bold text-primary mb-8 text-center">Mentions Légales</h1>
      
      <Card className="shadow-md border-primary/10">
        <CardHeader>
          <CardTitle className="text-2xl font-headline">Informations légales concernant Tolosa Amical</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-slate max-w-none dark:prose-invert space-y-8 pt-6">
          
          <section>
            <h2 className="text-xl font-bold text-primary mb-3 border-b pb-2">Éditeur du site</h2>
            <p className="leading-relaxed">
              <strong>Association Tolosa</strong><br />
              13, bd Lascrosses<br />
              31000 Toulouse<br />
              France
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-3 border-b pb-2">Directeur de la publication</h2>
            <p className="leading-relaxed">
              Le représentant légal de l'association Happy People 31.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-3 border-b pb-2">Contact</h2>
            <p className="leading-relaxed">
              Pour toute question, vous pouvez nous contacter à l'adresse email suivante : <a href="mailto:tolosa31@free.fr" className="text-accent hover:underline font-semibold">tolosa31@free.fr</a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-3 border-b pb-2">Hébergeur du site</h2>
            <p className="leading-relaxed">
              Ce site est hébergé par Firebase, un service de Google LLC.<br /><br />
              <strong>Google LLC</strong><br />
              1600 Amphitheatre Parkway<br />
              Mountain View, CA 94043, USA
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-3 border-b pb-2">Propriété intellectuelle</h2>
            <p className="leading-relaxed">
              L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-3 border-b pb-2">Données personnelles</h2>
            <p className="leading-relaxed">
              Les informations recueillies font l'objet d'un traitement informatique destiné à la gestion des comptes utilisateurs et à la mise en relation des membres. Conformément à la loi "informatique et libertés" du 6 janvier 1978 modifiée, vous bénéficiez d'un droit d'accès et de rectification aux informations qui vous concernent, que vous pouvez exercer en nous contactant à l'adresse email mentionnée ci-dessus.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-3 border-b pb-2">Responsabilité</h2>
            <p className="leading-relaxed">
              Tolosa Amical met tout en œuvre pour offrir aux utilisateurs des informations et/ou des outils disponibles et vérifiés mais ne saurait être tenu pour responsable des erreurs, d'une absence de disponibilité des fonctionnalités ou de la présence de virus sur son site. Les événements et annonces sont publiés sous la seule responsabilité de leurs auteurs.
            </p>
          </section>

        </CardContent>
      </Card>
    </div>
  );
}
