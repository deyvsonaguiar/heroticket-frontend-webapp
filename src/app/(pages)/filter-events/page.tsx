import { Input } from "@/app/components/form/Input"
import { InputFile } from "@/app/components/form/InputFile"
import { InputRange } from "@/app/components/form//InputRange"
import { categories } from "@/app/utils/categories"
import { Button } from "@/app/components/form/Button"
import { CardFilter } from "@/app/components/form/CardFilter"

export default function FilterEvents() {
  return (
    <div className="container m-auto p-6">
      <div className="grid md:grid-cols-2 gap-1 grid-cols-1">
        <div className="mb-4 pr-6 border-r-2 border=[#61D9E]">
          <div className="mb-4">
            <p className="text-blue text-2xl font-medium">
              Filtrar Eventos
            </p>
            <p className="text-blue text-base font-light">
              Busque o evento que é a sua cara de maneira mais detalhada!
            </p>
          </div>
          <Input
            title="Nome"
            placeholder="Insira o nome do seu evento"
            type="text"
          />
          <Input
            title="Localização"
            placeholder="Insira o endereço do seu evento"
            type="text"
          />
          <div className="grid grid-cols-2 gap-3">
            <Input
              title="Data"
              placeholder="dd/mm/aaaa"
              type="date"
            />
            <div className="mb-4 text-blue font-medium">
              <label htmlFor="">Tipo de Evento</label>
              <select name="" id="" className="w-full h-10 px-6 py-[5px] bg-white rounded-lg border border-teal-400">
              <option value="">Selecione </option>
              {categories.map((category) => (
                <option value={category.name}>{category.name}</option>
              ))}
              </select>
            </div>
          </div>
          <p className="text-blue text-2xl font-medium mb-4">
            Tipo de Evento
          </p>
          <div className="grid grid-cols-5 gap-2 mb-4">
            {categories.map((category) => {
              return (
                <div className="text-blue">
                  <input type="checkbox" className="mr-2 w-6 h-6 bg-white rounded border border-gray-300" />
                  <label htmlFor="">
                    {category.name}
                  </label>
                </div>
              )
            })}
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
          <InputRange title="Distância" />
          <InputRange title="Valor" />
          <div className="grid grid-cols-2 gap-7 w-2/3 justify-center m-auto">
            <Button title="Cancelar" className="bg-white text-blue" />
            <Button title="Buscar" className="bg-blue text-white" />
          </div>
        </div>
        <div className="mb-4 ml-4">
          <div className="my-4 mb-4">
              <p className="text-blue text-2xl font-medium">
                Resultados da busca
              </p>
              <p className="text-blue text-base font-light mb-10">
                Explore os resultados da sua busca por diversão! :)
              </p>
              <CardFilter />
          </div>
        </div>
      </div>
    </div>
  )
}