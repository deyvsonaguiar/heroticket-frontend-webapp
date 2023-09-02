import { Input } from "@/app/components/form/Input";
import { InputFile } from "@/app/components/form/InputFile";
import { categories } from "@/app/utils/categories";

export default function CreateEvent() {
  return (
    <div className="container m-auto p-6">
      <div className="grid md:grid-cols-2 gap-1 grid-cols-1">
        <div className="mb-4 pr-6 border-r-2 border=[#61D9E]">
          <div className="mb-4">
            <p className="text-blue text-2xl font-medium">Adicionar Eventos</p>
            <p className="text-blue text-base font-light">
              Crie o seu próprio evento da maneira que você preferir! :)
            </p>
          </div>
          <Input
            title="Título"
            placeholder="Insira o nome do seu evento"
            type="text"
          />
          <Input
            title="Endereço"
            placeholder="Insira o endereço do seu evento"
            type="text"
          />
          <div className="grid grid-cols-2 gap-4">
            <Input title="Data" placeholder="dd/mm/aaaa" type="date" />
            <Input title="Horário" placeholder="hh:mm" type="number" />
          </div>
          <p className="text-blue text-2xl font-medium mb-4">
            Categoria do Evento
          </p>
          <div className="grid grid-cols-5 gap-2 mb-4">
            {categories.map((category) => {
              return (
                <div key={category.id} className="text-blue">
                  <input
                    type="checkbox"
                    className="mr-2 w-6 h-6 bg-white rounded border border-gray-300"
                  />
                  <label htmlFor="">{category.name}</label>
                </div>
              );
            })}
          </div>
          <div className="mb-4">
            <p className="text-blue text-2xl font-medium">Valor</p>
            <p className="text-blue text-[10px] font-light mb-4">
              Caso seu evento seja gratuito, o campo deverá ficar vazio. Caso
              haja mais de um setor, basta adicionar a seção. Se houver cupom
              promocional, basta colocar o código no campo “cupom”.
            </p>
          </div>

          <div className="grid grid-cols-5 gap-2 mb-4">
            <Input
              title="Preço"
              placeholder="R$ 0,00"
              type="text"
              className="col-span-2"
            />
            <Input
              title="Setor"
              placeholder="Insira o nome do setor"
              type="text"
              className="col-span-3"
            />
          </div>
          <p className="text-blue text-2xl font-medium mb-2">Descrição</p>
          <div className="w-full gap-2 mb-4">
            <Input
              placeholder="Dê uma descrição que vai embalar o seu público! Direitos Reservados"
              type="textarea"
            />
          </div>
        </div>
        <div className="mb-4 ml-4">
          <div className="my-4 mb-10">
            <p className="text-blue text-2xl font-medium">Área Criativa</p>
            <p className="text-blue text-base font-light mb-4">
              Adicione as imagens referentes ao seu evento!
            </p>
          </div>
          <div className="my-4 mb-10">
            <p className="text-blue text-2xl font-medium">Banner</p>
            <p className="text-neutral-500 text-[10px] font-light mb-2">
              Insira um banner no formato 336x280
            </p>
            <div className="w-full h-28 bg-zinc-300 rounded-3xl shadow">
              <InputFile />
            </div>
          </div>
          <div className="my-4 mb-10">
            <p className="text-blue text-2xl font-medium">Flyers</p>
            <p className="text-neutral-500 text-[10px] font-light mb-2">
              Insira até três flyers
            </p>
            <div className="grid grid-cols-3 gap-2">
              <div className="w-full h-28 bg-zinc-300 rounded-3xl shadow">
                <InputFile />
              </div>
              <div className="w-full h-28 bg-zinc-300 rounded-3xl shadow">
                <InputFile />
              </div>
              <div className="w-full h-28 bg-zinc-300 rounded-3xl shadow">
                <InputFile />
              </div>
            </div>
          </div>
          <div className="my-4 mb-10">
            <p className="text-blue text-2xl font-medium">Mapa do Evento</p>
            <p className="text-neutral-500 text-[10px] font-light mb-2">
              Insira o Mapa do Evento indicando os setores
            </p>
            <div className="w-full h-[228px] bg-zinc-300 rounded-3xl shadow">
              <InputFile />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
