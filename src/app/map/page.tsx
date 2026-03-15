"use client";

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  MapPin, 
  Search, 
  Filter, 
  History, 
  Trees, 
  Mountain, 
  Building2, 
  ChevronRight,
  Plus,
  Compass,
  Layers
} from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Checkbox } from '@/components/ui/checkbox';
import Image from 'next/image';

const mockPins = [
  { id: 1, title: "Cité de Carcassonne", theme: "Histoire", lat: "43.206", lng: "2.363", top: "45%", left: "42%" },
  { id: 2, title: "Pont du Gard", theme: "Urbanisme", lat: "43.947", lng: "4.535", top: "35%", left: "68%" },
  { id: 3, title: "Cirque de Gavarnie", theme: "Nature", lat: "42.695", lng: "-0.003", top: "82%", left: "15%" },
  { id: 4, title: "Capitole de Toulouse", theme: "Histoire", lat: "43.604", lng: "1.444", top: "42%", left: "32%" },
  { id: 5, title: "Pic du Midi", theme: "Nature", lat: "42.937", lng: "0.141", top: "75%", left: "18%" },
];

export default function MapPage() {
  const [selectedPin, setSelectedPin] = useState<typeof mockPins[0] | null>(null);
  const [filters, setFilters] = useState({
    histoire: true,
    nature: true,
    urbanisme: true,
    rando: true
  });

  return (
    <div className="flex flex-col h-[calc(100vh-64px)]">
      <div className="flex-1 flex overflow-hidden">
        {/* Sidebar Filters */}
        <aside className="w-80 border-r bg-card flex flex-col hidden lg:flex">
          <div className="p-6 space-y-6 flex-1 overflow-y-auto">
            <div className="space-y-4">
              <h2 className="text-xl font-headline font-bold text-primary flex items-center gap-2">
                <Layers className="w-5 h-5" /> Explorer l'Occitanie
              </h2>
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Ville, monument, sommet..." className="pl-9" />
              </div>
            </div>

            <Separator />

            <div className="space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                <Filter className="w-4 h-4" /> Filtrer par thèmes
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Checkbox id="f-hist" checked={filters.histoire} onCheckedChange={(v) => setFilters({...filters, histoire: !!v})} />
                    <label htmlFor="f-hist" className="text-sm font-medium flex items-center gap-2">
                      <History className="w-4 h-4 text-amber-600" /> Histoire
                    </label>
                  </div>
                  <Badge variant="secondary" className="text-[10px]">124</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Checkbox id="f-nat" checked={filters.nature} onCheckedChange={(v) => setFilters({...filters, nature: !!v})} />
                    <label htmlFor="f-nat" className="text-sm font-medium flex items-center gap-2">
                      <Trees className="w-4 h-4 text-emerald-600" /> Nature
                    </label>
                  </div>
                  <Badge variant="secondary" className="text-[10px]">89</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Checkbox id="f-urb" checked={filters.urbanisme} onCheckedChange={(v) => setFilters({...filters, urbanisme: !!v})} />
                    <label htmlFor="f-urb" className="text-sm font-medium flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-blue-600" /> Urbanisme
                    </label>
                  </div>
                  <Badge variant="secondary" className="text-[10px]">45</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Checkbox id="f-ran" checked={filters.rando} onCheckedChange={(v) => setFilters({...filters, rando: !!v})} />
                    <label htmlFor="f-ran" className="text-sm font-medium flex items-center gap-2">
                      <Compass className="w-4 h-4 text-indigo-600" /> Randonnées
                    </label>
                  </div>
                  <Badge variant="secondary" className="text-[10px]">56</Badge>
                </div>
              </div>
            </div>

            <Separator />

            <div className="space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Points d'intérêt à proximité</h3>
              <div className="space-y-2">
                {mockPins.map(pin => (
                  <button 
                    key={pin.id}
                    onClick={() => setSelectedPin(pin)}
                    className={`w-full text-left p-3 rounded-lg border transition-all hover:border-primary/50 group ${selectedPin?.id === pin.id ? 'bg-primary/5 border-primary' : 'bg-muted/30'}`}
                  >
                    <div className="flex justify-between items-start">
                      <span className="font-semibold text-sm line-clamp-1">{pin.title}</span>
                      <ChevronRight className={`w-4 h-4 text-muted-foreground transition-transform ${selectedPin?.id === pin.id ? 'rotate-90 text-primary' : ''}`} />
                    </div>
                    <span className="text-[10px] text-muted-foreground">{pin.theme}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="p-4 border-t">
            <Button className="w-full gap-2 bg-accent text-accent-foreground">
              <Plus className="w-4 h-4" /> Ajouter un point
            </Button>
          </div>
        </aside>

        {/* Map Area */}
        <main className="flex-1 relative bg-secondary/20 overflow-hidden">
          {/* Simulated Map Background */}
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-40 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-br from-background/40 to-transparent" />
          
          {/* Legend and Overlay Controls */}
          <div className="absolute top-4 right-4 z-10 flex flex-col gap-2">
            <Card className="p-1 shadow-md">
              <div className="flex flex-col">
                <Button variant="ghost" size="icon" className="h-8 w-8">+</Button>
                <Separator />
                <Button variant="ghost" size="icon" className="h-8 w-8">-</Button>
              </div>
            </Card>
            <Button variant="outline" size="icon" className="shadow-md bg-white">
              <Compass className="w-4 h-4" />
            </Button>
          </div>

          {/* Simulated Pins */}
          {mockPins.map(pin => (
            <button
              key={pin.id}
              className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all hover:scale-110 group z-20`}
              style={{ top: pin.top, left: pin.left }}
              onClick={() => setSelectedPin(pin)}
            >
              <div className={`relative flex items-center justify-center`}>
                <MapPin className={`w-8 h-8 ${selectedPin?.id === pin.id ? 'text-accent fill-accent/20' : 'text-primary fill-white'} drop-shadow-lg transition-colors`} />
                {selectedPin?.id === pin.id && (
                  <div className="absolute -top-12 bg-white px-3 py-1.5 rounded-full shadow-xl border text-xs font-bold whitespace-nowrap animate-in fade-in zoom-in-95">
                    {pin.title}
                  </div>
                )}
              </div>
            </button>
          ))}

          {/* Details Card (Mobile & Selected) */}
          {selectedPin && (
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-sm z-30 animate-in slide-in-from-bottom-4 duration-300">
              <Card className="shadow-2xl border-primary/20 overflow-hidden">
                <div className="relative h-32 w-full">
                  <Image 
                    src={`https://picsum.photos/seed/${selectedPin.id}/400/200`} 
                    alt={selectedPin.title} 
                    fill 
                    className="object-cover"
                  />
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="absolute top-2 right-2 h-6 w-6 rounded-full bg-black/20 text-white hover:bg-black/40"
                    onClick={() => setSelectedPin(null)}
                  >
                    <Plus className="w-4 h-4 rotate-45" />
                  </Button>
                </div>
                <CardContent className="pt-4 space-y-2">
                  <div className="flex justify-between items-start">
                    <h4 className="font-bold text-lg">{selectedPin.title}</h4>
                    <Badge variant="outline" className="bg-primary/5 text-primary border-primary/20">{selectedPin.theme}</Badge>
                  </div>
                  <p className="text-xs text-muted-foreground line-clamp-2">
                    Situé dans le département de l'Aude, ce monument historique est un témoignage exceptionnel de l'architecture médiévale en Occitanie.
                  </p>
                  <Button className="w-full text-xs" asChild>
                    <a href={`/articles/${selectedPin.id}`}>Lire l'article complet</a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Map Status Overlay */}
          <div className="absolute bottom-4 left-4 z-10 hidden md:block">
            <Badge variant="outline" className="bg-white/80 backdrop-blur-sm shadow-sm gap-2 py-1.5 px-3">
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span>Affichage de 5 points d'intérêt sur 248</span>
            </Badge>
          </div>
        </main>
      </div>
    </div>
  );
}
