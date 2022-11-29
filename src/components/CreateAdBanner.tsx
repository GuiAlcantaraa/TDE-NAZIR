import { MagnifyingGlassPlus } from 'phosphor-react'
import * as Dialog from '@radix-ui/react-dialog'

export function CreateAdBanner() {
    return (
        <div className='pt-1 bg-nlw-gradient self-stretch rounded-lg overflow-hidden  mt-8'>
            <div className='bg-[#2A2634] px-8 py-6 flex justify-between items-center'>
                <div>
                    <strong className='text-2xl text-white font-black block'>Não tem cupom cadastrado ?</strong>
                    <span className='text-zinc-400'>Cadastre seu cupom para concorrer a varios premios</span>

                    <button className='mt-2 py-1 px-2 bg-red-700 hover:bg-red-900 text-white rounded flex items-center gap-2'>regras</button>
                </div>

                <Dialog.Trigger className='py-3 px-4 bg-violet-500 hover:bg-violet-700 text-white rounded flex items-center gap-3'>
                    <MagnifyingGlassPlus size={24} />
                    Cadastrar cupom
                </Dialog.Trigger>
            </div>
        </div>
    )
}