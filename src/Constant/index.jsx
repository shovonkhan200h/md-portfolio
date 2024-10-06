import React from "react"
import { FiGithub } from "react-icons/fi";
import { GoLinkExternal } from "react-icons/go";

export const tabInfo = [
    {   
        id:1,
        title: "Web Development",
        value: "webdevelopment",
        content: (
          <div className="flex flex-col w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
            <p className="mb-2">Restura</p>
           
            <div className="w-full">
            <img src="https://i.imgur.com/FQwlDsX.jpg" className="object-contain"/>
            </div>
            
            <div className="flex justify-between py-2 gap-2 text-md cursor-pointer">
              <div>
               <ul className="flex text-sm gap-5">
                <li>React.Js</li>
                <li>FireBase</li>
                <li>Tailwind</li>
               </ul>
              </div>

              <div className="flex">
              <a href="https://github.com/shovonkhan200h/retaura.git" target="_blank"><FiGithub/></a>
              <a href="https://thriving-marzipan-07c03d.netlify.app/" target="_blank"><GoLinkExternal/></a>
              </div>
            </div>
          </div>
        ),
      },
      { 
        id:2,
        title: "WordPress",
        value: "wordpress",
        content: (
          <div className="flex flex-col w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
            <p className="mb-2">E-Commerce Choodabazar</p>
           
            <div className="w-full">
            <img src="https://i.imgur.com/z3VhlF8.png" className="object-contain"/>
            </div>
            
            <div className="flex justify-between py-2 gap-2 text-md cursor-pointer">
              <div>
               <ul className="flex text-sm gap-5">
                <li>WordPress</li>
                <li>Elementor</li>
                <li>Astra</li>
               </ul>
              </div>

              <div className="flex">
              <a href="https://www.choodabazar.com/" target="_blank"><GoLinkExternal/></a>
              </div>
            </div>
          </div>
        )
        
      },
      { id:3,
        title: "Agnecy",
        value: "agency",
        content: (
          <div className="flex flex-col w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
            <p className="mb-2">Fast Seo Service</p>
           
            <div className="w-full">
            <img src="https://i.imgur.com/6NlvAUL.png" className="object-contain"/>
            </div>
            
            <div className="flex justify-between py-2 gap-2 text-md cursor-pointer">
              <div>
               <ul className="flex text-sm gap-5">
                <li>WordPress</li>
                <li>Elementor Pro</li>
                <li>Ocean Pro</li>
               </ul>
              </div>

              <div className="flex">
              <a href="https://fastindiaservice.com/" target="_blank"><GoLinkExternal/></a>
              </div>
            </div>
          </div>
        )
      },
      { id:4,
        title: "Agency",
        value: "agency",
        content: (
          <div className="flex flex-col w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
            <p className="mb-2">Angel Lili Acc firm</p>
           
            <div className="w-full">
            <img src="https://i.imgur.com/N6uIhnr.png" className="object-cover"/>
            </div>
            
            <div className="flex justify-between py-2 gap-2 text-md cursor-pointer">
              <div>
               <ul className="flex text-sm gap-5">
                <li>React.Js</li>
                <li>FireBase</li>
                <li>Tailwind</li>
               </ul>
              </div>

              <div className="flex">
              <a href="https://github.com/shovonkhan200h/Accountant-firm.git" target="_blank"><FiGithub/></a>
              <a href="https://accountancyfirm.netlify.app/" target="_blank"><GoLinkExternal/></a>
              </div>
            </div>
          </div>
        )
      },
      { id:5,
        title: "Portfolio",
        value: "Portfolio",
        content: (
          <div className="flex flex-col w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
            <p className="mb-2">Restura</p>
           
            <div className="w-full">
            <img src="https://i.imgur.com/WugAYMF.png" className="object-contain"/>
            </div>
            
            <div className="flex justify-between py-2 gap-2 text-md cursor-pointer">
              <div>
               <ul className="flex text-sm gap-5">
                <li>Wordpress</li>
                <li>Elementor Pro</li>
                <li>Theme Development</li>
               </ul>
              </div>

              <div className="flex">
              <a href="https://fallofpassion.com/" target="_blank"><GoLinkExternal/></a>
              </div>
            </div>
          </div>
        )
      },
]