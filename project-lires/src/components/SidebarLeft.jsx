import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Simulando as imagens (você pode manter suas importações originais)
const Lires = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMjAiIGZpbGw9IiM3QjY4RUUiLz4KPHRleHQgeD0iMjAiIHk9IjI0IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5MPC90ZXh0Pgo8L3N2Zz4=';
const Videos = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTMgMkg5TDE3IDEwTDkgMThIM1YyWiIgZmlsbD0iIzdCNjhFRSIvPgo8L3N2Zz4=';
const Livros = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTMgM0gxN1YxN0gzVjNaTTUgNVYxNUgxNVY1SDVaIiBmaWxsPSIjN0I2OEVFIi8+CjwvdXN2Zz4=';
const Ele = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTAiIGN5PSIxMCIgcj0iOCIgZmlsbD0iIzdCNjhFRSIvPgo8L3N2Zz4=';
const Feed = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIgMkgxOFYxOEgyVjJaTTQgNFYxNkgxNlY0SDRaIiBmaWxsPSIjN0I2OEVFIi8+CjwvdXN2Zz4=';
const Loja = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTMgM0gxN1YxN0gzVjNaTTUgNVYxNUgxNVY1SDVaIiBmaWxsPSIjN0I2OEVFIi8+CjwvdXN2Zz4=';
const Perfil = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTAiIGN5PSIxMCIgcj0iOCIgZmlsbD0iIzdCNjhFRSIvPgo8L3N2Zz4=';
const Ajustes = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEwIDEyQzExLjEwNDYgMTIgMTIgMTEuMTA0NiAxMiAxMEMxMiA4Ljg5NTQzIDExLjEwNDYgOCAxMCA4QzguODk1NDMgOCA4IDguODk1NDMgOCAxMEM4IDExLjEwNDYgOC44OTU0MyAxMiAxMCAxMlpNMTcuNSAxMUwxNi4wOSA5LjA5QzE2LjA5IDguOTcgMTYuMDkgOC44NSAxNi4wOSA4LjczTDE3LjIgNy4yNkMxNy4zIDcuMDUgMTcuMjUgNi43OSAxNy4wNSA2LjY0TDE1LjU0IDUuMzZDMTUuMzQgNS4yMSAxNS4wOCA1LjI2IDE0LjkzIDUuNDZMMTMuOTUgNi42QzEzLjc1IDYuNSAxMy41NSA2LjQgMTMuMzUgNi4zTDEzLjEgNC41QzEzLjA1IDQuMjQgMTIuODQgNC4wNSAxMi41OCA0LjA1SDEwLjQyQzEwLjE2IDQuMDUgOS45NSA0LjI0IDkuOSA0LjVMOS42NSA2LjNDOS40NSA2LjQgOS4yNSA2LjUgOS4wNSA2LjZMOC4wNyA1LjQ2QzcuOTIgNS4yNiA3LjY2IDUuMjEgNy40NiA1LjM2TDUuOTUgNi42NEM1Ljc1IDYuNzkgNS43IDcuMDUgNS44IDcuMjZMNi45MSA4LjczQzYuOTEgOC44NSA2LjkxIDguOTcgNi45MSA5LjA5TDUuNSAxMUM1LjIgMTAuOSA1IDExLjIgNSAxMS41VjEyLjVDNSAxMi44IDUuMiAxMy4xIDUuNSAxMy4xTDYuOTEgMTQuOTFDNi45MSAxNS4wMyA2LjkxIDE1LjE1IDYuOTEgMTUuMjdMNS44IDEzLjc0QzUuNyAxMy45NSA1Ljc1IDE0LjIxIDUuOTUgMTQuMzZMNy40NiAxNS42NEM3LjY2IDE1Ljc5IDcuOTIgMTUuNzQgOC4wNyAxNS41NEw5LjA1IDE0LjRDOS4yNSAxNC41IDkuNDUgMTQuNiA5LjY1IDE0LjdMOS45IDE2LjVDOS45NSAxNi43NiAxMC4xNiAxNi45NSAxMC40MiAxNi45NUgxMi41OEMxMi44NCAxNi45NSAxMy4wNSAxNi43NiAxMy4xIDE2LjVMMTMuMzUgMTQuN0MxMy41NSAxNC42IDEzLjc1IDE0LjUgMTMuOTUgMTQuNEwxNC45MyAxNS41NEMxNS4wOCAxNS43NCAxNS4zNCAxNS43OSAxNS41NCAxNS42NEwxNy4wNSAxNC4zNkMxNy4yNSAxNC4yMSAxNy4zIDEzLjk1IDE3LjIgMTMuNzRMMTYuMDkgMTUuMjdDMTYuMDkgMTUuMTUgMTYuMDkgMTUuMDMgMTYuMDkgMTQuOTFMMTcuNSAxM0MxNy44IDEzLjEgMTggMTIuOCAxOCAxMi41VjExLjVDMTggMTEuMiAxNy44IDEwLjkgMTcuNSAxMVoiIGZpbGw9IiM3QjY4RUUiLz4KPHN2Zz4=';

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
    <aside className={`${isCollapsed ? 'w-16' : 'w-48'} bg-white border-r border-gray-200 flex flex-col items-center py-8 transition-all duration-300 ease-in-out shadow-lg relative group fixed left-0 top-0 h-full z-10`}>
      
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