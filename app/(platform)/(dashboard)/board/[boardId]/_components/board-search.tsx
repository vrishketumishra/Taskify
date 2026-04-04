"use client";

import { useState, useEffect } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@prisma/client";

interface BoardSearchProps {
  cards: Card[];
}

export const BoardSearch = ({ cards }: BoardSearchProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<Card[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    if (searchQuery.trim()) {
      const filtered = cards.filter(card =>
        card.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (card.description && card.description.toLowerCase().includes(searchQuery.toLowerCase()))
      );
      setSearchResults(filtered);
      setIsSearching(true);
    } else {
      setSearchResults([]);
      setIsSearching(false);
    }
  }, [searchQuery, cards]);

  const highlightMatch = (text: string, query: string) => {
    if (!query.trim()) return text;
    
    const regex = new RegExp(`(${query})`, 'gi');
    const parts = text.split(regex);
    
    return parts.map((part, i) => 
      regex.test(part) ? (
        <mark key={i} className="bg-yellow-200 text-black px-1 rounded">
          {part}
        </mark>
      ) : (
        part
      )
    );
  };

  const clearSearch = () => {
    setSearchQuery("");
    setSearchResults([]);
    setIsSearching(false);
  };

  return (
    <div className="relative">
      <div className="flex items-center gap-2 bg-black/50 backdrop-blur-sm p-2 rounded-md">
        <Search className="h-4 w-4 text-white" />
        <Input
          type="text"
          placeholder="Search cards..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="bg-transparent border-none text-white placeholder:text-white/70 focus-visible:ring-0 focus-visible:ring-offset-0 h-6 px-2"
        />
        {isSearching && (
          <Button
            size="sm"
            variant="ghost"
            onClick={clearSearch}
            className="h-6 px-2 text-white hover:bg-white/20"
          >
            Clear
          </Button>
        )}
      </div>

      {isSearching && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-md shadow-lg border z-50 max-h-96 overflow-y-auto">
          {searchResults.length > 0 ? (
            <div className="p-2">
              <div className="text-xs text-muted-foreground mb-2 px-2">
                Found {searchResults.length} card{searchResults.length !== 1 ? 's' : ''}
              </div>
              {searchResults.map((card) => (
                <div
                  key={card.id}
                  className="p-3 hover:bg-gray-50 rounded-md cursor-pointer transition-colors border-b last:border-b-0"
                  onClick={() => {
                    // Scroll to the card's list
                    const cardElement = document.querySelector(`[data-card-id="${card.id}"]`);
                    if (cardElement) {
                      cardElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
                      cardElement.classList.add('ring-2', 'ring-blue-500');
                      setTimeout(() => {
                        cardElement.classList.remove('ring-2', 'ring-blue-500');
                      }, 2000);
                    }
                    clearSearch();
                  }}
                >
                  <div className="font-medium text-sm mb-1">
                    {highlightMatch(card.title, searchQuery)}
                  </div>
                  {card.description && (
                    <div className="text-xs text-muted-foreground line-clamp-2">
                      {highlightMatch(card.description, searchQuery)}
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="p-8 text-center text-muted-foreground">
              <Search className="h-8 w-8 mx-auto mb-2 opacity-50" />
              <p className="text-sm">No cards found matching &quot;{searchQuery}&quot;</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
