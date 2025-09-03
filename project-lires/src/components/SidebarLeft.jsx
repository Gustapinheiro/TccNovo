import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Simulando as imagens (você pode manter suas importações originais)
const Lires = '../assets/LoginLogo.png';
const Videos = '../assets/Videos.png';
const Livros = '../assets/Livro.png';
const Ele = '../assets/Ele.png';
const Feed = '../assets/Feed.png';
const Loja = '../assets/Loja.png';
const Perfil = '../assets/Perfil.png';
const Ajustes = '../assets/Ajustes.png';

const menuItems = [
  { icon: Videos, label: 'Vídeos', id: 'videos' },
  { icon: Livros, label: 'Aprender', id: 'aprender' },
  { icon: Ele, label: 'Praticar', id: 'praticar' },
  { icon: Feed, label: 'Feed', id: 'feed' },
  { icon: Loja, label: 'Loja', id: 'loja' },
  { icon: Perfil, label: 'Perfil', id: 'perfil' },
  { icon: Ajustes, label: 'Ajustes', id: 'ajustes' }
];

export default function SidebarLeft() {
  const [activeItem, setActiveItem] = useState('ajustes'); // Ajustes ativo por padrão
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <aside className={`${isCollapsed ? 'w-16' : 'w-48'} bg-white  border-r border-gray-200 flex flex-col items-center py-8 transition-all duration-300 ease-in-out shadow-lg  group fixed left-0 top-0 h-full z-10`}>
      
      {/* Logo com efeito hover */}
      <div className="mb-8 transform transition-transform duration-200 hover:scale-110">
        <img 
          src={Lires} 
          alt="Logo" 
          className="drop-shadow-lg hover:drop-shadow-xl transition-all duration-200"
        />
      </div>

      {/* Botão de colapsar */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute top-4 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-gray-100 hover:bg-gray-200 rounded-full p-1 text-gray-600"
        aria-label="Toggle sidebar"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
          <path d={isCollapsed ? "M6 4l4 4-4 4" : "M10 4l-4 4 4 4"} />
        </svg>
      </button>

      {/* Navigation */}
      <nav className="flex flex-col gap-2 w-full px-2">
        {menuItems.map((item, index) => (
          <a
            key={item.id}
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setActiveItem(item.id);
            }}
            className={`
              relative flex items-center gap-3 px-3 py-3 rounded-xl font-bold transition-all duration-300 group/item
              ${activeItem === item.id 
                ? 'bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-lg transform scale-105' 
                : 'text-[#7B68EE] hover:bg-gray-50 hover:text-purple-600 hover:scale-102'
              }
              ${isCollapsed ? 'justify-center' : ''}
            `}
            style={{
              animationDelay: `${index * 0.1}s`
            }}
          >
            {/* Indicador ativo */}
            {activeItem === item.id && !isCollapsed && (
              <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-8 bg-white rounded-r-full"></div>
            )}
            
            {/* Ícone com efeito */}
            <div className="relative">
              <img 
                src={item.icon} 
                alt={item.label}
                className={`
                  w-5 h-5 transition-all duration-200 group-hover/item:scale-110
                  ${activeItem === item.id ? 'brightness-0 invert' : ''}
                `}
              />
              
              {/* Efeito de brilho no hover */}
              <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover/item:opacity-20 transition-opacity duration-200"></div>
            </div>
            
            {/* Label com animação */}
            {!isCollapsed && (
              <span className="transition-all duration-200 group-hover/item:translate-x-1">
                {item.label}
              </span>
            )}
            
            {/* Tooltip para modo colapsado */}
            {isCollapsed && (
              <div className="absolute left-full ml-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover/item:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none z-50">
                {item.label}
              </div>
            )}

            {/* Efeito de onda no clique */}
            <div className="absolute inset-0 rounded-xl overflow-hidden">
              <div className="absolute inset-0 bg-white opacity-0 group-active/item:opacity-30 transition-opacity duration-150"></div>
            </div>
          </a>
        ))}
      </nav>

      {/* Decoração inferior */}
      <div className="mt-auto mb-4 w-12 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full opacity-50"></div>
      
      {/* Efeito de borda gradiente sutil */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-200 to-transparent opacity-50"></div>
      </div>
    </aside>
  );
}