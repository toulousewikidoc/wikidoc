"use client";

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Send, Search, MoreHorizontal, Phone, Video, Trash2, Flag, AlertTriangle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';

const INITIAL_CONVERSATIONS = [
  { id: '1', name: 'Marie P.', lastMsg: "C'était super cette rando !", time: '14:20', unread: true, avatar: 'M' },
  { id: '2', name: 'Julien R.', lastMsg: 'On se voit au Capitole ?', time: 'Hier', unread: false, avatar: 'J' },
  { id: '3', name: 'Sophie L.', lastMsg: "J'ai bien reçu tes photos.", time: 'Lun', unread: false, avatar: 'S' },
];

const INITIAL_MESSAGES = [
  { id: '1', sender: 'Marie P.', text: "Salut ! Tu as vu l'article sur Carcassonne ?", time: '14:15', me: false },
  { id: '2', sender: 'Me', text: "Oui, super intéressant ! On y va quand ?", time: '14:18', me: true },
  { id: '3', sender: 'Marie P.', text: "C'était super cette rando ! Peut-être le weekend prochain ?", time: '14:20', me: false },
];

export default function MessagesPage() {
  const [conversations, setConversations] = useState(INITIAL_CONVERSATIONS);
  const [messages, setMessages] = useState(INITIAL_MESSAGES);
  const [selectedConv, setSelectedConv] = useState(conversations[0]);
  const [msg, setMsg] = useState('');
  const { toast } = useToast();

  const handleDeleteMessage = (id: string) => {
    setMessages(messages.filter(m => m.id !== id));
    toast({ description: "Message supprimé." });
  };

  const handleDeleteConversation = (id: string) => {
    setConversations(conversations.filter(c => c.id !== id));
    if (selectedConv?.id === id) {
      setSelectedConv(conversations.find(c => c.id !== id) || null as any);
    }
    toast({ description: "Conversation supprimée." });
  };

  const handleReportUser = () => {
    toast({
      title: "Signalement envoyé",
      description: "L'utilisateur a été signalé aux modérateurs.",
      variant: "destructive"
    });
  };

  return (
    <div className="container mx-auto px-4 py-8 h-[calc(100vh-120px)]">
      <div className="grid grid-cols-1 md:grid-cols-3 h-full border rounded-2xl overflow-hidden bg-card shadow-lg">
        {/* Sidebar Conversations */}
        <aside className="border-r flex flex-col bg-muted/10">
          <div className="p-4 border-b space-y-4">
            <h2 className="text-xl font-bold">Messages</h2>
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Rechercher une discussion..." className="pl-9 bg-background h-9" />
            </div>
          </div>
          <ScrollArea className="flex-1">
            {conversations.map((conv) => (
              <div key={conv.id} className="relative group">
                <button
                  onClick={() => setSelectedConv(conv)}
                  className={`w-full flex items-center gap-3 p-4 hover:bg-muted/50 transition-colors text-left border-b last:border-0 ${selectedConv?.id === conv.id ? 'bg-primary/5 border-r-4 border-r-primary' : ''}`}
                >
                  <Avatar>
                    <AvatarFallback className="bg-primary/10 text-primary font-bold">{conv.avatar}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-bold text-sm truncate">{conv.name}</span>
                      <span className="text-[10px] text-muted-foreground">{conv.time}</span>
                    </div>
                    <p className={`text-xs truncate ${conv.unread ? 'font-bold text-foreground' : 'text-muted-foreground'}`}>
                      {conv.lastMsg}
                    </p>
                  </div>
                  {conv.unread && <div className="w-2 h-2 rounded-full bg-accent" />}
                </button>
                <div className="absolute right-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                   <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8"><MoreHorizontal className="w-4 h-4" /></Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem onClick={() => handleDeleteConversation(conv.id)} className="text-destructive">
                        <Trash2 className="w-4 h-4 mr-2" /> Supprimer
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={handleReportUser}>
                        <Flag className="w-4 h-4 mr-2" /> Signaler le membre
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            ))}
          </ScrollArea>
        </aside>

        {/* Main Chat Area */}
        <main className="md:col-span-2 flex flex-col bg-background">
          {selectedConv ? (
            <>
              {/* Header */}
              <div className="p-4 border-b flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarFallback className="bg-primary/10 text-primary font-bold">{selectedConv.avatar}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-bold text-sm">{selectedConv.name}</h3>
                    <span className="text-[10px] text-emerald-500 font-medium">En ligne</span>
                  </div>
                </div>
                <div className="flex gap-1">
                  <Button variant="ghost" size="icon" onClick={handleReportUser} title="Signaler l'utilisateur"><AlertTriangle className="w-4 h-4 text-amber-600" /></Button>
                  <Button variant="ghost" size="icon"><Phone className="w-4 h-4" /></Button>
                  <Button variant="ghost" size="icon"><Video className="w-4 h-4" /></Button>
                </div>
              </div>

              {/* Messages List */}
              <ScrollArea className="flex-1 p-6">
                <div className="space-y-6">
                  <div className="text-center">
                    <span className="text-[10px] bg-muted px-2 py-1 rounded-full text-muted-foreground uppercase tracking-wider">Aujourd'hui</span>
                  </div>
                  {messages.map((m) => (
                    <div key={m.id} className={`flex group ${m.me ? 'justify-end' : 'justify-start'}`}>
                      <div className={`max-w-[70%] space-y-1 relative ${m.me ? 'items-end' : 'items-start'}`}>
                        <div className="flex items-center gap-2">
                           {m.me && (
                             <Button 
                              variant="ghost" 
                              size="icon" 
                              className="h-6 w-6 opacity-0 group-hover:opacity-100 text-destructive"
                              onClick={() => handleDeleteMessage(m.id)}
                            >
                              <Trash2 className="w-3 h-3" />
                            </Button>
                           )}
                           <div className={`p-3 rounded-2xl text-sm shadow-sm ${m.me ? 'bg-primary text-primary-foreground rounded-tr-none' : 'bg-muted rounded-tl-none'}`}>
                            {m.text}
                          </div>
                          {!m.me && (
                            <Button 
                              variant="ghost" 
                              size="icon" 
                              className="h-6 w-6 opacity-0 group-hover:opacity-100 text-destructive"
                              onClick={() => handleDeleteMessage(m.id)}
                            >
                              <Trash2 className="w-3 h-3" />
                            </Button>
                          )}
                        </div>
                        <span className="text-[9px] text-muted-foreground px-1">{m.time}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>

              {/* Input Area */}
              <div className="p-4 border-t bg-muted/5">
                <form 
                  className="flex gap-2"
                  onSubmit={(e) => { e.preventDefault(); setMsg(''); }}
                >
                  <Input 
                    placeholder="Écrivez votre message..." 
                    className="flex-1"
                    value={msg}
                    onChange={(e) => setMsg(e.target.value)}
                  />
                  <Button type="submit" size="icon" disabled={!msg}>
                    <Send className="w-4 h-4" />
                  </Button>
                </form>
              </div>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center text-muted-foreground italic">
              Sélectionnez une discussion pour commencer à échanger.
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
