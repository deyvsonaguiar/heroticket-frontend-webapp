import { categories } from "../../utils/categories";
import { BannerPrimary } from "../../components/BannerPrimary";
import { BannerSecondary } from "../../components/BannerSecondary";
import Image from "next/image";

export default function Dashboard() {
  return (
    <div className="container mx-auto p-6">
      <BannerPrimary />
      <div className="p-5 text-blue">
        <p className="text-2xl font-medium">Eventos em Destaques</p>
        <p className="text-base font-light">
          Se divirta com os principais eventos de Minas Gerais e do Brasil!
        </p>
      </div>
      <div className="grid grid-cols-3 gap-4 p-5">
        <BannerSecondary />
        <BannerSecondary />
        <BannerSecondary />
      </div>

      <div className="p-5 text-blue mb-4">
        <p className="text-2xl font-medium">Navegue por tipo de evento</p>
        <p className="text-base font-light">Vá ao evento que é a sua cara :D</p>
      </div>
      <div className="grid md:grid-cols-7 grid-cols-2 lg:gap-2 sm:gap-1">
        {categories.map((category) => {
          return (
            <div
              key={category.id}
              className="flex flex-col items-center justify-center"
            >
              <Image
                src={category.icon}
                alt=""
                width={136}
                height={136}
                className="rouded-full"
              />
              <p className="text-blue">{category.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
