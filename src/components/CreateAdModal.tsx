import * as Dialog from '@radix-ui/react-dialog'
import * as CheckBox from '@radix-ui/react-checkbox'
import * as ToggleGroup from '@radix-ui/react-toggle-group'

import { Check, GameController } from 'phosphor-react'
import { Input } from './Form/Input'
import { useEffect, useState, FormEvent } from 'react'
import axios from 'axios'


interface Game {
    id: string;
    title: string;
}



export function CreateAdModal() {


    function handleCreateAd(event: FormEvent) {
        event.preventDefault()

        const formData = new FormData(event.target as HTMLFormElement)
        const data = Object.fromEntries(formData)


        alert("Cupom cadastrado com sucesso")
        window.location.reload();
        console.log(data)
    }

    return (
        <Dialog.Portal>
            <Dialog.Overlay className='bg-black/60 inset-0  fixed' />
            <Dialog.Content className='fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-lg shadow-black/25'>
                <Dialog.Title className='text-3xl font-black'>Cadastre seu cupom</Dialog.Title>

                <form onSubmit={handleCreateAd} className='mt-8 flex flex-col gap-4'>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="cupom">Código do cupom *</label>
                        <Input required id='cupom' name='cupom' placeholder='Informe o código do seu cupom' />
                    </div>

                    <div className='flex flex-col gap-2'>
                        <label htmlFor="cpf">Seu cpf *</label>
                        <Input required id='cpf' name='cpf' placeholder='Informe seu cpf' />
                    </div>

                    <div className='flex flex-col gap-2'>
                        <label htmlFor="email">Seu e-mail *</label>
                        <Input required id='email' name='email' placeholder='Informe seu e-mail' />
                    </div>

                    <div className='flex flex-col gap-2'>
                        <label htmlFor="celular">Seu celular/WhatsApp *</label>
                        <Input required id='celular' name='celular' placeholder='Informe seu celular/WhatsApp' />
                    </div>

                    <footer className='mt-4 flex justify-end gap-4'>
                        <Dialog.Close className='bg-zinc-500 px-5 h-12 rounded-md font-semibold hover:bg-zinc-600'>Cancelar</Dialog.Close>

                        <button type='submit' className='bg-violet-500 px-5 h-12 rounded-md font-semibold flex items-center gap-3 hover:bg-violet-600'>
                            <GameController size={24} />
                            Cadastrar cupom
                        </button>
                    </footer>
                </form>
            </Dialog.Content>
        </Dialog.Portal>
    )
}