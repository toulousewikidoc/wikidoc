"use client";

import Link from 'next/link';
import { useTranslation } from '@/components/LanguageProvider';

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="w-full border-t bg-muted/50 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="font-headline text-xl font-bold text-primary">Wikidoc Occitanie</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {t('footer_desc')}
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">{t('footer_explorer')}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/articles" className="hover:text-primary">{t('footer_all_articles')}</Link></li>
              <li><Link href="/map" className="hover:text-primary">Carte Interactive</Link></li>
              <li><Link href="/faq" className="hover:text-primary">Foire Aux Questions (FAQ)</Link></li>
              <li><Link href="/suggestions" className="hover:text-primary">Boîte à Idées / Suggestions</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">{t('footer_community')}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/forum" className="hover:text-primary">{t('footer_forum')}</Link></li>
              <li><Link href="/editor" className="hover:text-primary">{t('footer_become_editor')}</Link></li>
              <li><Link href="/guidelines" className="hover:text-primary">{t('footer_editorial_charter')}</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">{t('footer_legal')}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/legal" className="hover:text-primary">{t('footer_legal_notices')}</Link></li>
              <li><Link href="/terms" className="hover:text-primary">{t('footer_terms')}</Link></li>
              <li><Link href="/privacy" className="hover:text-primary">{t('footer_privacy')}</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Wikidoc Occitanie. {t('footer_copyright')}
        </div>
      </div>
    </footer>
  );
}
