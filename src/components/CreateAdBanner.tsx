import React from 'react';
import { MagnifyingGlassPlus } from 'phosphor-react';
import * as Dialog from '@radix-ui/react-dialog'

// import { Container } from './styles';

const CreateAdBanner: React.FC = () => {
  return (
    <div className=" pt-1 bg-gradient self-stretch mt-8 rounded-lg overflow-hidden">
    <div className="bg-[#2a2634] px-8 py-6 flex justify-between items-center">
      <div>
        <strong className="text-2xl text-white font-black block">
          Não encontrou seu duo?
        </strong>
        <span className="text-zinc-400">
          Publique um anuncio para encontrar novos players
        </span>
      </div>

      <Dialog.Trigger className="py-3 px-4 bg-violet-500 text-white flex items-center gap-3 rounded hover:bg-violet-600">
        <MagnifyingGlassPlus size={24} />
        Publicar anuncio
      </Dialog.Trigger>
    </div>
  </div>
  )
}

export default CreateAdBanner;
