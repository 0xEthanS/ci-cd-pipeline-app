export const FILES = [
  {
    path: 'package.json',
    content: '{\n' +
      '  "name": "pokemon-search-app",\n' +
      '  "version": "1.0.0",\n' +
      '  "private": true,\n' +
      '  "scripts": {\n' +
      '    "dev": "next dev --turbopack",\n' +
      '    "build": "next build",\n' +
      '    "start": "next start"\n' +
      '  },\n' +
      '  "dependencies": {\n' +
      '    "next": "^15.1.0",\n' +
      '    "react": "^19.0.0",\n' +
      '    "react-dom": "^19.0.0"\n' +
      '  },\n' +
      '  "devDependencies": {\n' +
      '    "@types/node": "^22.0.0",\n' +
      '    "@types/react": "^19.0.0",\n' +
      '    "@types/react-dom": "^19.0.0",\n' +
      '    "autoprefixer": "^10.4.20",\n' +
      '    "postcss": "^8.4.49",\n' +
      '    "tailwindcss": "^3.4.17",\n' +
      '    "typescript": "^5.7.0"\n' +
      '  }\n' +
      '}'
  },
  {
    path: 'next.config.mjs',
    content: "/** @type {import('next').NextConfig} */\n" +
      'const nextConfig = {\n' +
      '  images: {\n' +
      '    remotePatterns: [\n' +
      '      {\n' +
      "        protocol: 'https',\n" +
      "        hostname: 'raw.githubusercontent.com',\n" +
      "        pathname: '/PokeAPI/sprites/**',\n" +
      '      },\n' +
      '    ],\n' +
      '  },\n' +
      '};\n' +
      '\n' +
      'export default nextConfig;\n'
  },
  {
    path: 'tsconfig.json',
    content: '{\n' +
      '  "compilerOptions": {\n' +
      '    "target": "ES2017",\n' +
      '    "lib": ["dom", "dom.iterable", "esnext"],\n' +
      '    "allowJs": true,\n' +
      '    "skipLibCheck": true,\n' +
      '    "strict": true,\n' +
      '    "noEmit": true,\n' +
      '    "esModuleInterop": true,\n' +
      '    "module": "esnext",\n' +
      '    "moduleResolution": "bundler",\n' +
      '    "resolveJsonModule": true,\n' +
      '    "isolatedModules": true,\n' +
      '    "jsx": "preserve",\n' +
      '    "incremental": true,\n' +
      '    "plugins": [\n' +
      '      {\n' +
      '        "name": "next"\n' +
      '      }\n' +
      '    ],\n' +
      '    "paths": {\n' +
      '      "@/*": ["./*"]\n' +
      '    }\n' +
      '  },\n' +
      '  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],\n' +
      '  "exclude": ["node_modules"]\n' +
      '}\n'
  },
  {
    path: 'postcss.config.mjs',
    content: "/** @type {import('postcss-load-config').Config} */\n" +
      'const config = {\n' +
      '  plugins: {\n' +
      '    tailwindcss: {},\n' +
      '    autoprefixer: {},\n' +
      '  },\n' +
      '};\n' +
      '\n' +
      'export default config;\n'
  },
  {
    path: 'tailwind.config.mjs',
    content: "/** @type {import('tailwindcss').Config} */\n" +
      'const config = {\n' +
      '  content: [\n' +
      "    './app/**/*.{js,ts,jsx,tsx,mdx}',\n" +
      '  ],\n' +
      '  theme: {\n' +
      '    extend: {\n' +
      '      colors: {\n' +
      '        pokemon: {\n' +
      "          red: '#EF4444',\n" +
      "          blue: '#3B82F6',\n" +
      "          yellow: '#EAB308',\n" +
      "          green: '#22C55E',\n" +
      '        },\n' +
      '      },\n' +
      '      keyframes: {\n' +
      "        'fade-in': {\n" +
      "          '0%': { opacity: '0', transform: 'translateY(10px)' },\n" +
      "          '100%': { opacity: '1', transform: 'translateY(0)' },\n" +
      '        },\n' +
      "        'scale-in': {\n" +
      "          '0%': { opacity: '0', transform: 'scale(0.9)' },\n" +
      "          '100%': { opacity: '1', transform: 'scale(1)' },\n" +
      '        },\n' +
      "        'bounce-in': {\n" +
      "          '0%': { transform: 'scale(0.3)', opacity: '0' },\n" +
      "          '50%': { transform: 'scale(1.05)' },\n" +
      "          '70%': { transform: 'scale(0.9)' },\n" +
      "          '100%': { transform: 'scale(1)', opacity: '1' },\n" +
      '        },\n' +
      "        'slide-up': {\n" +
      "          '0%': { opacity: '0', transform: 'translateY(20px)' },\n" +
      "          '100%': { opacity: '1', transform: 'translateY(0)' },\n" +
      '        },\n' +
      '      },\n' +
      '      animation: {\n' +
      "        'fade-in': 'fade-in 0.4s ease-out',\n" +
      "        'scale-in': 'scale-in 0.3s ease-out',\n" +
      "        'bounce-in': 'bounce-in 0.5s ease-out',\n" +
      "        'slide-up': 'slide-up 0.4s ease-out',\n" +
      '      },\n' +
      '    },\n' +
      '  },\n' +
      '  plugins: [],\n' +
      '};\n' +
      '\n' +
      'export default config;\n'
  },
  {
    path: 'app/globals.css',
    content: '@tailwind base;\n' +
      '@tailwind components;\n' +
      '@tailwind utilities;\n' +
      '\n' +
      '@layer base {\n' +
      '  html {\n' +
      '    scroll-behavior: smooth;\n' +
      '  }\n' +
      '\n' +
      '  body {\n' +
      '    @apply bg-gray-950 text-white antialiased;\n' +
      '  }\n' +
      '}\n' +
      '\n' +
      '@layer components {\n' +
      '  .type-normal { @apply bg-gray-400; }\n' +
      '  .type-fire { @apply bg-orange-500; }\n' +
      '  .type-water { @apply bg-blue-500; }\n' +
      '  .type-electric { @apply bg-yellow-400 text-gray-900; }\n' +
      '  .type-grass { @apply bg-green-500; }\n' +
      '  .type-ice { @apply bg-cyan-300 text-gray-900; }\n' +
      '  .type-fighting { @apply bg-red-700; }\n' +
      '  .type-poison { @apply bg-purple-500; }\n' +
      '  .type-ground { @apply bg-amber-600; }\n' +
      '  .type-flying { @apply bg-indigo-300 text-gray-900; }\n' +
      '  .type-psychic { @apply bg-pink-500; }\n' +
      '  .type-bug { @apply bg-lime-500; }\n' +
      '  .type-rock { @apply bg-yellow-700; }\n' +
      '  .type-ghost { @apply bg-purple-700; }\n' +
      '  .type-dragon { @apply bg-violet-600; }\n' +
      '  .type-dark { @apply bg-gray-700; }\n' +
      '  .type-steel { @apply bg-gray-400; }\n' +
      '  .type-fairy { @apply bg-pink-300 text-gray-900; }\n' +
      '}\n' +
      '\n' +
      '@layer utilities {\n' +
      '  .pokeball-bg {\n' +
      '    background-image: radial-gradient(circle at 50% 50%, transparent 30%, rgba(255,255,255,0.03) 30%, rgba(255,255,255,0.03) 32%, transparent 32%);\n' +
      '    background-size: 120px 120px;\n' +
      '  }\n' +
      '}\n'
  },
  {
    path: 'app/layout.tsx',
    content: "import type { Metadata } from 'next';\n" +
      "import './globals.css';\n" +
      '\n' +
      'export const metadata: Metadata = {\n' +
      "  title: 'Pokédex - Search & Explore Pokémon',\n" +
      "  description: 'Browse, search, and explore Pokémon with detailed stats and information.',\n" +
      '};\n' +
      '\n' +
      'export default function RootLayout({\n' +
      '  children,\n' +
      '}: {\n' +
      '  children: React.ReactNode;\n' +
      '}) {\n' +
      '  return (\n' +
      '    <html lang="en">\n' +
      '      <body className="min-h-screen pokeball-bg">\n' +
      '        {children}\n' +
      '      </body>\n' +
      '    </html>\n' +
      '  );\n' +
      '}\n'
  },
  {
    path: 'app/page.tsx',
    content: "'use client';\n" +
      '\n' +
      "import { useState, useMemo } from 'react';\n" +
      "import { SearchBar } from './components/SearchBar';\n" +
      "import { PokemonGrid } from './components/PokemonGrid';\n" +
      "import { PokemonModal } from './components/PokemonModal';\n" +
      "import { usePokemon } from './hooks/usePokemon';\n" +
      "import { PokemonDetail } from './types/pokemon';\n" +
      '\n' +
      'export default function Home() {\n' +
      "  const [searchQuery, setSearchQuery] = useState('');\n" +
      "  const [selectedType, setSelectedType] = useState('');\n" +
      '  const [selectedPokemon, setSelectedPokemon] = useState<PokemonDetail | null>(null);\n' +
      '  const [isModalOpen, setIsModalOpen] = useState(false);\n' +
      '\n' +
      '  const { pokemon, isLoading, error, loadMore, hasMore, isLoadingMore } = usePokemon();\n' +
      '\n' +
      '  const filteredPokemon = useMemo(() => {\n' +
      '    return pokemon.filter((p) => {\n' +
      '      const matchesSearch =\n' +
      '        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||\n' +
      '        p.id.toString().includes(searchQuery);\n' +
      '      const matchesType =\n' +
      '        !selectedType || p.types.some((t) => t.type.name === selectedType);\n' +
      '      return matchesSearch && matchesType;\n' +
      '    });\n' +
      '  }, [pokemon, searchQuery, selectedType]);\n' +
      '\n' +
      '  const handlePokemonClick = (p: PokemonDetail) => {\n' +
      '    setSelectedPokemon(p);\n' +
      '    setIsModalOpen(true);\n' +
      '  };\n' +
      '\n' +
      '  const handleCloseModal = () => {\n' +
      '    setIsModalOpen(false);\n' +
      '    setTimeout(() => setSelectedPokemon(null), 300);\n' +
      '  };\n' +
      '\n' +
      '  return (\n' +
      '    <main className="min-h-screen">\n' +
      '      {/* Header */}\n' +
      '      <header className="sticky top-0 z-40 backdrop-blur-xl bg-gray-950/80 border-b border-gray-800">\n' +
      '        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">\n' +
      '          <div className="flex flex-col sm:flex-row items-center gap-4">\n' +
      '            <div className="flex items-center gap-3 shrink-0">\n' +
      '              <div className="w-10 h-10 rounded-full bg-red-500 border-4 border-white shadow-lg shadow-red-500/30 relative">\n' +
      '                <div className="absolute inset-0 flex items-center justify-center">\n' +
      '                  <div className="w-4 h-4 rounded-full bg-white border-2 border-gray-300"></div>\n' +
      '                </div>\n' +
      '              </div>\n' +
      '              <h1 className="text-2xl font-bold bg-gradient-to-r from-red-400 to-yellow-400 bg-clip-text text-transparent">\n' +
      '                Pokédex\n' +
      '              </h1>\n' +
      '            </div>\n' +
      '            <SearchBar\n' +
      '              searchQuery={searchQuery}\n' +
      '              onSearchChange={setSearchQuery}\n' +
      '              selectedType={selectedType}\n' +
      '              onTypeChange={setSelectedType}\n' +
      '            />\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </header>\n' +
      '\n' +
      '      {/* Content */}\n' +
      '      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">\n' +
      '        {/* Stats bar */}\n' +
      '        <div className="mb-6 flex items-center justify-between">\n' +
      '          <p className="text-gray-400 text-sm">\n' +
      `            Showing <span className="text-white font-semibold">{filteredPokemon.length}</span> of{' '}\n` +
      '            <span className="text-white font-semibold">{pokemon.length}</span> Pokémon\n' +
      '          </p>\n' +
      '          {searchQuery && (\n' +
      '            <button\n' +
      "              onClick={() => { setSearchQuery(''); setSelectedType(''); }}\n" +
      '              className="text-sm text-red-400 hover:text-red-300 transition-colors"\n' +
      '            >\n' +
      '              Clear filters\n' +
      '            </button>\n' +
      '          )}\n' +
      '        </div>\n' +
      '\n' +
      '        {error && (\n' +
      '          <div className="text-center py-20">\n' +
      '            <p className="text-red-400 text-lg mb-4">⚠️ {error}</p>\n' +
      '            <button\n' +
      '              onClick={() => window.location.reload()}\n' +
      '              className="px-6 py-2 bg-red-500 hover:bg-red-600 rounded-lg transition-colors"\n' +
      '            >\n' +
      '              Try Again\n' +
      '            </button>\n' +
      '          </div>\n' +
      '        )}\n' +
      '\n' +
      '        {isLoading ? (\n' +
      '          <div className="flex flex-col items-center justify-center py-20">\n' +
      '            <div className="w-16 h-16 rounded-full border-4 border-gray-700 border-t-red-500 animate-spin mb-4"></div>\n' +
      '            <p className="text-gray-400 animate-pulse">Loading Pokémon...</p>\n' +
      '          </div>\n' +
      '        ) : (\n' +
      '          <>\n' +
      '            <PokemonGrid\n' +
      '              pokemon={filteredPokemon}\n' +
      '              onPokemonClick={handlePokemonClick}\n' +
      '            />\n' +
      '\n' +
      '            {filteredPokemon.length === 0 && !isLoading && (\n' +
      '              <div className="text-center py-20">\n' +
      '                <p className="text-6xl mb-4">🔍</p>\n' +
      '                <p className="text-gray-400 text-lg">No Pokémon found matching your search.</p>\n' +
      '                <p className="text-gray-500 text-sm mt-2">Try a different name, number, or type.</p>\n' +
      '              </div>\n' +
      '            )}\n' +
      '\n' +
      '            {hasMore && !searchQuery && !selectedType && (\n' +
      '              <div className="flex justify-center mt-10">\n' +
      '                <button\n' +
      '                  onClick={loadMore}\n' +
      '                  disabled={isLoadingMore}\n' +
      '                  className="group px-8 py-3 bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 rounded-full font-semibold text-white shadow-lg shadow-red-500/25 transition-all duration-300 hover:shadow-red-500/40 hover:scale-105 disabled:opacity-50 disabled:hover:scale-100"\n' +
      '                >\n' +
      '                  {isLoadingMore ? (\n' +
      '                    <span className="flex items-center gap-2">\n' +
      '                      <div className="w-5 h-5 rounded-full border-2 border-white/30 border-t-white animate-spin"></div>\n' +
      '                      Loading...\n' +
      '                    </span>\n' +
      '                  ) : (\n' +
      "                    'Load More Pokémon'\n" +
      '                  )}\n' +
      '                </button>\n' +
      '              </div>\n' +
      '            )}\n' +
      '          </>\n' +
      '        )}\n' +
      '      </div>\n' +
      '\n' +
      '      {/* Modal */}\n' +
      '      <PokemonModal\n' +
      '        pokemon={selectedPokemon}\n' +
      '        isOpen={isModalOpen}\n' +
      '        onClose={handleCloseModal}\n' +
      '      />\n' +
      '    </main>\n' +
      '  );\n' +
      '}\n'
  },
  {
    path: 'app/components/PokemonCard.tsx',
    content: "'use client';\n" +
      '\n' +
      "import Image from 'next/image';\n" +
      "import { PokemonDetail } from '../types/pokemon';\n" +
      '\n' +
      'interface PokemonCardProps {\n' +
      '  pokemon: PokemonDetail;\n' +
      '  onClick: (pokemon: PokemonDetail) => void;\n' +
      '  index: number;\n' +
      '}\n' +
      '\n' +
      'const typeColors: Record<string, string> = {\n' +
      "  normal: 'from-gray-400 to-gray-500',\n" +
      "  fire: 'from-orange-400 to-red-500',\n" +
      "  water: 'from-blue-400 to-blue-600',\n" +
      "  electric: 'from-yellow-300 to-yellow-500',\n" +
      "  grass: 'from-green-400 to-green-600',\n" +
      "  ice: 'from-cyan-200 to-cyan-400',\n" +
      "  fighting: 'from-red-600 to-red-800',\n" +
      "  poison: 'from-purple-400 to-purple-600',\n" +
      "  ground: 'from-amber-400 to-amber-600',\n" +
      "  flying: 'from-indigo-200 to-indigo-400',\n" +
      "  psychic: 'from-pink-400 to-pink-600',\n" +
      "  bug: 'from-lime-400 to-lime-600',\n" +
      "  rock: 'from-yellow-600 to-yellow-800',\n" +
      "  ghost: 'from-purple-600 to-purple-800',\n" +
      "  dragon: 'from-violet-500 to-violet-700',\n" +
      "  dark: 'from-gray-600 to-gray-800',\n" +
      "  steel: 'from-gray-300 to-gray-500',\n" +
      "  fairy: 'from-pink-200 to-pink-400',\n" +
      '};\n' +
      '\n' +
      'export function PokemonCard({ pokemon, onClick, index }: PokemonCardProps) {\n' +
      "  const mainType = pokemon.types[0]?.type.name || 'normal';\n" +
      '  const gradient = typeColors[mainType] || typeColors.normal;\n' +
      '  const spriteUrl =\n' +
      "    pokemon.sprites.other?.['official-artwork']?.front_default ||\n" +
      '    pokemon.sprites.front_default;\n' +
      '\n' +
      '  return (\n' +
      '    <button\n' +
      '      onClick={() => onClick(pokemon)}\n' +
      '      className="group relative rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-black/40 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-950 animate-fade-in"\n' +
      "      style={{ animationDelay: `${Math.min(index * 30, 500)}ms`, animationFillMode: 'both' }}\n" +
      '    >\n' +
      '      {/* Background gradient */}\n' +
      '      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-20 group-hover:opacity-30 transition-opacity`} />\n' +
      '\n' +
      '      {/* Card content */}\n' +
      '      <div className="relative bg-gray-900/80 backdrop-blur-sm border border-gray-800 group-hover:border-gray-600 rounded-2xl p-4 transition-colors h-full">\n' +
      '        {/* Pokemon ID */}\n' +
      '        <span className="absolute top-3 right-3 text-xs font-mono text-gray-500 group-hover:text-gray-400 transition-colors">\n' +
      "          #{String(pokemon.id).padStart(3, '0')}\n" +
      '        </span>\n' +
      '\n' +
      '        {/* Image */}\n' +
      '        <div className="relative w-full aspect-square mb-3 flex items-center justify-center">\n' +
      '          <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity`} />\n' +
      '          {spriteUrl ? (\n' +
      '            <Image\n' +
      '              src={spriteUrl}\n' +
      '              alt={pokemon.name}\n' +
      '              width={120}\n' +
      '              height={120}\n' +
      '              className="relative z-10 drop-shadow-lg group-hover:drop-shadow-2xl transition-all duration-300 group-hover:scale-110"\n' +
      '              loading="lazy"\n' +
      '            />\n' +
      '          ) : (\n' +
      '            <div className="w-24 h-24 rounded-full bg-gray-800 flex items-center justify-center text-4xl">\n' +
      '              ?\n' +
      '            </div>\n' +
      '          )}\n' +
      '        </div>\n' +
      '\n' +
      '        {/* Name */}\n' +
      '        <h3 className="text-sm font-semibold capitalize text-center mb-2 group-hover:text-white transition-colors text-gray-200 truncate">\n' +
      '          {pokemon.name}\n' +
      '        </h3>\n' +
      '\n' +
      '        {/* Types */}\n' +
      '        <div className="flex gap-1.5 justify-center flex-wrap">\n' +
      '          {pokemon.types.map((t) => (\n' +
      '            <span\n' +
      '              key={t.type.name}\n' +
      '              className={`type-${t.type.name} px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider`}\n' +
      '            >\n' +
      '              {t.type.name}\n' +
      '            </span>\n' +
      '          ))}\n' +
      '        </div>\n' +
      '      </div>\n' +
      '    </button>\n' +
      '  );\n' +
      '}\n'
  },
  {
    path: 'app/components/SearchBar.tsx',
    content: "'use client';\n" +
      '\n' +
      'const POKEMON_TYPES = [\n' +
      "  'normal', 'fire', 'water', 'electric', 'grass', 'ice',\n" +
      "  'fighting', 'poison', 'ground', 'flying', 'psychic', 'bug',\n" +
      "  'rock', 'ghost', 'dragon', 'dark', 'steel', 'fairy',\n" +
      '];\n' +
      '\n' +
      'interface SearchBarProps {\n' +
      '  searchQuery: string;\n' +
      '  onSearchChange: (query: string) => void;\n' +
      '  selectedType: string;\n' +
      '  onTypeChange: (type: string) => void;\n' +
      '}\n' +
      '\n' +
      'export function SearchBar({ searchQuery, onSearchChange, selectedType, onTypeChange }: SearchBarProps) {\n' +
      '  return (\n' +
      '    <div className="flex flex-1 w-full gap-3 flex-col sm:flex-row">\n' +
      '      {/* Search input */}\n' +
      '      <div className="relative flex-1">\n' +
      '        <svg\n' +
      '          className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500"\n' +
      '          fill="none"\n' +
      '          stroke="currentColor"\n' +
      '          viewBox="0 0 24 24"\n' +
      '        >\n' +
      '          <path\n' +
      '            strokeLinecap="round"\n' +
      '            strokeLinejoin="round"\n' +
      '            strokeWidth={2}\n' +
      '            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"\n' +
      '          />\n' +
      '        </svg>\n' +
      '        <input\n' +
      '          type="text"\n' +
      '          value={searchQuery}\n' +
      '          onChange={(e) => onSearchChange(e.target.value)}\n' +
      '          placeholder="Search by name or number..."\n' +
      '          className="w-full pl-10 pr-4 py-2.5 bg-gray-900 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"\n' +
      '        />\n' +
      '        {searchQuery && (\n' +
      '          <button\n' +
      "            onClick={() => onSearchChange('')}\n" +
      '            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300 transition-colors"\n' +
      '          >\n' +
      '            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\n' +
      '              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />\n' +
      '            </svg>\n' +
      '          </button>\n' +
      '        )}\n' +
      '      </div>\n' +
      '\n' +
      '      {/* Type filter */}\n' +
      '      <select\n' +
      '        value={selectedType}\n' +
      '        onChange={(e) => onTypeChange(e.target.value)}\n' +
      '        className="px-4 py-2.5 bg-gray-900 border border-gray-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 cursor-pointer min-w-[160px] appearance-none"\n' +
      '        style={{\n' +
      '          backgroundImage: `url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 20 20\'%3e%3cpath stroke=\'%236b7280\' stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'1.5\' d=\'M6 8l4 4 4-4\'/%3e%3c/svg%3e")`,\n' +
      "          backgroundPosition: 'right 0.5rem center',\n" +
      "          backgroundRepeat: 'no-repeat',\n" +
      "          backgroundSize: '1.5em 1.5em',\n" +
      "          paddingRight: '2.5rem',\n" +
      '        }}\n' +
      '      >\n' +
      '        <option value="">All Types</option>\n' +
      '        {POKEMON_TYPES.map((type) => (\n' +
      '          <option key={type} value={type} className="capitalize">\n' +
      '            {type.charAt(0).toUpperCase() + type.slice(1)}\n' +
      '          </option>\n' +
      '        ))}\n' +
      '      </select>\n' +
      '    </div>\n' +
      '  );\n' +
      '}\n'
  },
  {
    path: 'app/components/PokemonGrid.tsx',
    content: "'use client';\n" +
      '\n' +
      "import { PokemonCard } from './PokemonCard';\n" +
      "import { PokemonDetail } from '../types/pokemon';\n" +
      '\n' +
      'interface PokemonGridProps {\n' +
      '  pokemon: PokemonDetail[];\n' +
      '  onPokemonClick: (pokemon: PokemonDetail) => void;\n' +
      '}\n' +
      '\n' +
      'export function PokemonGrid({ pokemon, onPokemonClick }: PokemonGridProps) {\n' +
      '  return (\n' +
      '    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">\n' +
      '      {pokemon.map((p, index) => (\n' +
      '        <PokemonCard\n' +
      '          key={p.id}\n' +
      '          pokemon={p}\n' +
      '          onClick={onPokemonClick}\n' +
      '          index={index}\n' +
      '        />\n' +
      '      ))}\n' +
      '    </div>\n' +
      '  );\n' +
      '}\n'
  },
  {
    path: 'app/components/PokemonModal.tsx',
    content: "'use client';\n" +
      '\n' +
      "import { useEffect, useCallback } from 'react';\n" +
      "import Image from 'next/image';\n" +
      "import { PokemonDetail } from '../types/pokemon';\n" +
      '\n' +
      'interface PokemonModalProps {\n' +
      '  pokemon: PokemonDetail | null;\n' +
      '  isOpen: boolean;\n' +
      '  onClose: () => void;\n' +
      '}\n' +
      '\n' +
      'const statLabels: Record<string, string> = {\n' +
      "  hp: 'HP',\n" +
      "  attack: 'ATK',\n" +
      "  defense: 'DEF',\n" +
      "  'special-attack': 'SpA',\n" +
      "  'special-defense': 'SpD',\n" +
      "  speed: 'SPD',\n" +
      '};\n' +
      '\n' +
      'const statColors: Record<string, string> = {\n' +
      "  hp: 'bg-red-500',\n" +
      "  attack: 'bg-orange-500',\n" +
      "  defense: 'bg-yellow-500',\n" +
      "  'special-attack': 'bg-blue-500',\n" +
      "  'special-defense': 'bg-green-500',\n" +
      "  speed: 'bg-pink-500',\n" +
      '};\n' +
      '\n' +
      'const typeGradients: Record<string, string> = {\n' +
      "  normal: 'from-gray-500 to-gray-600',\n" +
      "  fire: 'from-orange-500 to-red-600',\n" +
      "  water: 'from-blue-400 to-blue-700',\n" +
      "  electric: 'from-yellow-300 to-yellow-600',\n" +
      "  grass: 'from-green-400 to-green-700',\n" +
      "  ice: 'from-cyan-300 to-cyan-500',\n" +
      "  fighting: 'from-red-600 to-red-900',\n" +
      "  poison: 'from-purple-400 to-purple-700',\n" +
      "  ground: 'from-amber-400 to-amber-700',\n" +
      "  flying: 'from-indigo-300 to-indigo-500',\n" +
      "  psychic: 'from-pink-400 to-pink-700',\n" +
      "  bug: 'from-lime-400 to-lime-700',\n" +
      "  rock: 'from-yellow-600 to-yellow-900',\n" +
      "  ghost: 'from-purple-600 to-purple-900',\n" +
      "  dragon: 'from-violet-500 to-violet-800',\n" +
      "  dark: 'from-gray-600 to-gray-900',\n" +
      "  steel: 'from-gray-400 to-gray-600',\n" +
      "  fairy: 'from-pink-300 to-pink-500',\n" +
      '};\n' +
      '\n' +
      'export function PokemonModal({ pokemon, isOpen, onClose }: PokemonModalProps) {\n' +
      '  const handleKeyDown = useCallback(\n' +
      '    (e: KeyboardEvent) => {\n' +
      "      if (e.key === 'Escape') onClose();\n" +
      '    },\n' +
      '    [onClose]\n' +
      '  );\n' +
      '\n' +
      '  useEffect(() => {\n' +
      '    if (isOpen) {\n' +
      "      document.addEventListener('keydown', handleKeyDown);\n" +
      "      document.body.style.overflow = 'hidden';\n" +
      '    }\n' +
      '    return () => {\n' +
      "      document.removeEventListener('keydown', handleKeyDown);\n" +
      "      document.body.style.overflow = '';\n" +
      '    };\n' +
      '  }, [isOpen, handleKeyDown]);\n' +
      '\n' +
      '  if (!pokemon) return null;\n' +
      '\n' +
      "  const mainType = pokemon.types[0]?.type.name || 'normal';\n" +
      '  const gradient = typeGradients[mainType] || typeGradients.normal;\n' +
      '  const spriteUrl =\n' +
      "    pokemon.sprites.other?.['official-artwork']?.front_default ||\n" +
      '    pokemon.sprites.front_default;\n' +
      '  const totalStats = pokemon.stats.reduce((sum, s) => sum + s.base_stat, 0);\n' +
      '\n' +
      '  return (\n' +
      '    <div\n' +
      '      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 ${\n' +
      "        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'\n" +
      '      }`}\n' +
      '    >\n' +
      '      {/* Backdrop */}\n' +
      '      <div\n' +
      '        className="absolute inset-0 bg-black/70 backdrop-blur-sm"\n' +
      '        onClick={onClose}\n' +
      '      />\n' +
      '\n' +
      '      {/* Modal content */}\n' +
      '      <div\n' +
      '        className={`relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-3xl bg-gray-900 border border-gray-700 shadow-2xl transition-all duration-300 ${\n' +
      "          isOpen ? 'scale-100 translate-y-0' : 'scale-95 translate-y-4'\n" +
      '        }`}\n' +
      '      >\n' +
      '        {/* Close button */}\n' +
      '        <button\n' +
      '          onClick={onClose}\n' +
      '          className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-black/40 hover:bg-black/60 text-white transition-colors"\n' +
      '        >\n' +
      '          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">\n' +
      '            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />\n' +
      '          </svg>\n' +
      '        </button>\n' +
      '\n' +
      '        {/* Top gradient area */}\n' +
      '        <div className={`relative bg-gradient-to-br ${gradient} p-6 pb-20 rounded-t-3xl`}>\n' +
      '          <div className="flex items-start justify-between mb-2">\n' +
      '            <div>\n' +
      `              <p className="text-white/70 text-sm font-mono">#{String(pokemon.id).padStart(3, '0')}</p>\n` +
      '              <h2 className="text-3xl font-bold text-white capitalize">{pokemon.name}</h2>\n' +
      '            </div>\n' +
      '          </div>\n' +
      '          <div className="flex gap-2 mb-4">\n' +
      '            {pokemon.types.map((t) => (\n' +
      '              <span\n' +
      '                key={t.type.name}\n' +
      '                className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-semibold uppercase tracking-wider text-white"\n' +
      '              >\n' +
      '                {t.type.name}\n' +
      '              </span>\n' +
      '            ))}\n' +
      '          </div>\n' +
      '          {/* Decorative Pokeball */}\n' +
      '          <div className="absolute right-4 top-4 w-32 h-32 opacity-10">\n' +
      '            <svg viewBox="0 0 100 100" fill="white">\n' +
      '              <circle cx="50" cy="50" r="48" fill="none" stroke="white" strokeWidth="4" />\n' +
      '              <line x1="2" y1="50" x2="38" y2="50" stroke="white" strokeWidth="4" />\n' +
      '              <line x1="62" y1="50" x2="98" y2="50" stroke="white" strokeWidth="4" />\n' +
      '              <circle cx="50" cy="50" r="12" fill="none" stroke="white" strokeWidth="4" />\n' +
      '            </svg>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '\n' +
      '        {/* Pokemon image - overlapping */}\n' +
      '        <div className="relative -mt-16 flex justify-center mb-4">\n' +
      '          {spriteUrl && (\n' +
      '            <Image\n' +
      '              src={spriteUrl}\n' +
      '              alt={pokemon.name}\n' +
      '              width={180}\n' +
      '              height={180}\n' +
      '              className="drop-shadow-2xl animate-bounce-in"\n' +
      '              priority\n' +
      '            />\n' +
      '          )}\n' +
      '        </div>\n' +
      '\n' +
      '        {/* Details */}\n' +
      '        <div className="px-6 pb-6">\n' +
      '          {/* Physical info */}\n' +
      '          <div className="grid grid-cols-3 gap-4 mb-6">\n' +
      '            <div className="text-center p-3 bg-gray-800 rounded-xl">\n' +
      '              <p className="text-gray-400 text-xs mb-1">Height</p>\n' +
      '              <p className="text-white font-semibold">{(pokemon.height / 10).toFixed(1)}m</p>\n' +
      '            </div>\n' +
      '            <div className="text-center p-3 bg-gray-800 rounded-xl">\n' +
      '              <p className="text-gray-400 text-xs mb-1">Weight</p>\n' +
      '              <p className="text-white font-semibold">{(pokemon.weight / 10).toFixed(1)}kg</p>\n' +
      '            </div>\n' +
      '            <div className="text-center p-3 bg-gray-800 rounded-xl">\n' +
      '              <p className="text-gray-400 text-xs mb-1">Base Exp</p>\n' +
      `              <p className="text-white font-semibold">{pokemon.base_experience ?? '—'}</p>\n` +
      '            </div>\n' +
      '          </div>\n' +
      '\n' +
      '          {/* Abilities */}\n' +
      '          <div className="mb-6">\n' +
      '            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">Abilities</h3>\n' +
      '            <div className="flex flex-wrap gap-2">\n' +
      '              {pokemon.abilities.map((a) => (\n' +
      '                <span\n' +
      '                  key={a.ability.name}\n' +
      '                  className={`px-3 py-1.5 rounded-lg text-sm capitalize ${\n' +
      '                    a.is_hidden\n' +
      "                      ? 'bg-gray-800 text-gray-400 border border-gray-700 border-dashed'\n" +
      "                      : 'bg-gray-800 text-white'\n" +
      '                  }`}\n' +
      '                >\n' +
      "                  {a.ability.name.replace('-', ' ')}\n" +
      '                  {a.is_hidden && (\n' +
      '                    <span className="text-xs text-gray-500 ml-1">(Hidden)</span>\n' +
      '                  )}\n' +
      '                </span>\n' +
      '              ))}\n' +
      '            </div>\n' +
      '          </div>\n' +
      '\n' +
      '          {/* Stats */}\n' +
      '          <div>\n' +
      '            <div className="flex items-center justify-between mb-3">\n' +
      '              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Base Stats</h3>\n' +
      '              <span className="text-sm text-gray-500">Total: <span className="text-white font-semibold">{totalStats}</span></span>\n' +
      '            </div>\n' +
      '            <div className="space-y-3">\n' +
      '              {pokemon.stats.map((stat) => {\n' +
      '                const label = statLabels[stat.stat.name] || stat.stat.name;\n' +
      "                const color = statColors[stat.stat.name] || 'bg-gray-500';\n" +
      '                const percentage = Math.min((stat.base_stat / 255) * 100, 100);\n' +
      '                return (\n' +
      '                  <div key={stat.stat.name} className="flex items-center gap-3">\n' +
      '                    <span className="text-xs font-semibold text-gray-400 w-8 text-right">\n' +
      '                      {label}\n' +
      '                    </span>\n' +
      '                    <span className="text-xs font-mono text-white w-8 text-right">\n' +
      '                      {stat.base_stat}\n' +
      '                    </span>\n' +
      '                    <div className="flex-1 h-2.5 bg-gray-800 rounded-full overflow-hidden">\n' +
      '                      <div\n' +
      '                        className={`h-full ${color} rounded-full transition-all duration-700 ease-out`}\n' +
      '                        style={{ width: `${percentage}%` }}\n' +
      '                      />\n' +
      '                    </div>\n' +
      '                  </div>\n' +
      '                );\n' +
      '              })}\n' +
      '            </div>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '    </div>\n' +
      '  );\n' +
      '}\n'
  },
  {
    path: 'app/hooks/usePokemon.ts',
    content: "'use client';\n" +
      '\n' +
      "import { useState, useEffect, useCallback } from 'react';\n" +
      "import { PokemonDetail, PokemonListResponse } from '../types/pokemon';\n" +
      '\n' +
      'const PAGE_SIZE = 48;\n' +
      "const API_BASE = 'https://pokeapi.co/api/v2';\n" +
      '\n' +
      'export function usePokemon() {\n' +
      '  const [pokemon, setPokemon] = useState<PokemonDetail[]>([]);\n' +
      '  const [isLoading, setIsLoading] = useState(true);\n' +
      '  const [isLoadingMore, setIsLoadingMore] = useState(false);\n' +
      '  const [error, setError] = useState<string | null>(null);\n' +
      '  const [offset, setOffset] = useState(0);\n' +
      '  const [hasMore, setHasMore] = useState(true);\n' +
      '\n' +
      '  const fetchPokemonBatch = useCallback(async (currentOffset: number, isInitial: boolean) => {\n' +
      '    try {\n' +
      '      if (isInitial) {\n' +
      '        setIsLoading(true);\n' +
      '      } else {\n' +
      '        setIsLoadingMore(true);\n' +
      '      }\n' +
      '      setError(null);\n' +
      '\n' +
      '      const listResponse = await fetch(\n' +
      '        `${API_BASE}/pokemon?limit=${PAGE_SIZE}&offset=${currentOffset}`\n' +
      '      );\n' +
      '\n' +
      '      if (!listResponse.ok) {\n' +
      "        throw new Error('Failed to fetch Pokémon list');\n" +
      '      }\n' +
      '\n' +
      '      const listData: PokemonListResponse = await listResponse.json();\n' +
      '      setHasMore(listData.next !== null);\n' +
      '\n' +
      '      const detailPromises = listData.results.map(async (p) => {\n' +
      '        const res = await fetch(p.url);\n' +
      '        if (!res.ok) throw new Error(`Failed to fetch ${p.name}`);\n' +
      '        return res.json() as Promise<PokemonDetail>;\n' +
      '      });\n' +
      '\n' +
      '      const details = await Promise.all(detailPromises);\n' +
      '\n' +
      '      setPokemon((prev) => {\n' +
      '        const existingIds = new Set(prev.map((p) => p.id));\n' +
      '        const newPokemon = details.filter((d) => !existingIds.has(d.id));\n' +
      '        return [...prev, ...newPokemon].sort((a, b) => a.id - b.id);\n' +
      '      });\n' +
      '\n' +
      '      setOffset(currentOffset + PAGE_SIZE);\n' +
      '    } catch (err) {\n' +
      "      setError(err instanceof Error ? err.message : 'An unknown error occurred');\n" +
      '    } finally {\n' +
      '      setIsLoading(false);\n' +
      '      setIsLoadingMore(false);\n' +
      '    }\n' +
      '  }, []);\n' +
      '\n' +
      '  useEffect(() => {\n' +
      '    fetchPokemonBatch(0, true);\n' +
      '  }, [fetchPokemonBatch]);\n' +
      '\n' +
      '  const loadMore = useCallback(() => {\n' +
      '    if (!isLoadingMore && hasMore) {\n' +
      '      fetchPokemonBatch(offset, false);\n' +
      '    }\n' +
      '  }, [fetchPokemonBatch, offset, isLoadingMore, hasMore]);\n' +
      '\n' +
      '  return {\n' +
      '    pokemon,\n' +
      '    isLoading,\n' +
      '    isLoadingMore,\n' +
      '    error,\n' +
      '    loadMore,\n' +
      '    hasMore,\n' +
      '  };\n' +
      '}\n'
  },
  {
    path: 'app/types/pokemon.ts',
    content: 'export interface PokemonListItem {\n' +
      '  name: string;\n' +
      '  url: string;\n' +
      '}\n' +
      '\n' +
      'export interface PokemonListResponse {\n' +
      '  count: number;\n' +
      '  next: string | null;\n' +
      '  previous: string | null;\n' +
      '  results: PokemonListItem[];\n' +
      '}\n' +
      '\n' +
      'export interface PokemonType {\n' +
      '  slot: number;\n' +
      '  type: {\n' +
      '    name: string;\n' +
      '    url: string;\n' +
      '  };\n' +
      '}\n' +
      '\n' +
      'export interface PokemonStat {\n' +
      '  base_stat: number;\n' +
      '  effort: number;\n' +
      '  stat: {\n' +
      '    name: string;\n' +
      '    url: string;\n' +
      '  };\n' +
      '}\n' +
      '\n' +
      'export interface PokemonAbility {\n' +
      '  ability: {\n' +
      '    name: string;\n' +
      '    url: string;\n' +
      '  };\n' +
      '  is_hidden: boolean;\n' +
      '  slot: number;\n' +
      '}\n' +
      '\n' +
      'export interface PokemonSprites {\n' +
      '  front_default: string | null;\n' +
      '  front_shiny: string | null;\n' +
      '  back_default: string | null;\n' +
      '  back_shiny: string | null;\n' +
      '  other?: {\n' +
      "    'official-artwork'?: {\n" +
      '      front_default: string | null;\n' +
      '      front_shiny: string | null;\n' +
      '    };\n' +
      '    dream_world?: {\n' +
      '      front_default: string | null;\n' +
      '    };\n' +
      '  };\n' +
      '}\n' +
      '\n' +
      'export interface PokemonDetail {\n' +
      '  id: number;\n' +
      '  name: string;\n' +
      '  height: number;\n' +
      '  weight: number;\n' +
      '  base_experience: number | null;\n' +
      '  types: PokemonType[];\n' +
      '  stats: PokemonStat[];\n' +
      '  abilities: PokemonAbility[];\n' +
      '  sprites: PokemonSprites;\n' +
      '}\n'
  }
];







