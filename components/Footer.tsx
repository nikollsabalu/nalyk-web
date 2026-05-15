import Image from "next/image";
import { FaInstagram, FaPinterest  , FaTiktok  } from "react-icons/fa";

export const Footer = () => {

  let currentYear = new Date().getFullYear();

  const iconMap : any = { 
    Instagram: FaInstagram,
    Pinterest: FaPinterest ,
    Tiktok: FaTiktok ,

  };

  const network = [

    {
      name: "Instagram",
      url: ""
    },
    {
      name: "Tiktok",
      url: ""
    },
    {
      name: "Pinterest",
      url: ""
    },
  ]


  return (

    <footer className="border-t border-white/10  py-14 text-sm text-black bg-[#F5F5F5]">
      <div className="grid md:grid-cols-3 max-sm:flex max-sm:flex-col max-sm:flex-col-reverse max-sm:items-center gap-10 items-start px-40 divide-x divide-white/10 max-sm:px-5 max-sm:divide-x-0">


        <div className="flex gap-2">


          <div className="pr-8 flex flex-col items-start font-judson">
            <h4 className="mb-4 uppercase font-semibold">SOBRE NALYK</h4>
            <p className=" ">Quienes somos</p>
            <p className=" ">Proceso de diseño</p>
          </div>
          <div className="pr-8 flex flex-col items-start font-judson">
            <h4 className="mb-4 uppercase font-semibold">INFORMACIÓN</h4>
            <p className=" ">Envíos y Devoluciones</p>
            <p className=" ">Política de Privacidad</p>
          </div>

        </div>

        <div className="text-center px-8">

          <Image
            src="/logo.svg"
            alt="Logo"
            width={120}
            height={32}
            className="h-8 w-auto"
          />
        </div>

        <div className="md:text-right text-xs font-judson pl-8 max-sm:hidden flex flex-col items-end ">
          <p className="font-judson">Siguenos en:</p>
          <div className="flex gap-2 justify-center">
            {network.map((net, i) => {
              const Icon = iconMap[net.name];
              if (!Icon) return null;
              return (
                <a key={i} href={net.url} target="_blank" rel="noopener noreferrer">

                  <div
                    key={i}
                    className="w-6 h-6 flex items-center justify-center
                                  transition-all duration-300 
                                  transition-all duration-500 ease-out
                                  cursor-pointer"
                  >
                    <Icon size={20} />

                  </div>
                </a>
              );
            })}
          </div>
        </div>

      </div>

      <div className="mt-12 pt-8 border-t border-black/10 text-center text-xs  font-judson">
        {currentYear} &copy; Todos los derechos reservados
      </div>
    </footer>

  )
}
