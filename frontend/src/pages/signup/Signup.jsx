import { Tabs } from "@/components/ui/tabs";
import { Input } from '@/components/ui/input';

import Background from "../../assets/login2.png";

import { TabsContent, TabsList, TabsTrigger } from '@radix-ui/react-tabs';
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";



const Signup = () => {
  return (
    <div className="h-[100] w-[vw] flex items-center justify-center">
      <div className="h-[85vh] bg-white border-2 border-white text-opacity-90 shadow-2xl w-[80vw] md:w-[90vw] lg:w-[70vw] xl:w-[60vw] rounded-3xl grid xl:grid-cols-2">
        <div className="flex flex-col gap-10 items-center justify-center">
          
            <div className="flex items-center justify-center">
              <h1 className="text-5xl font-bold md:text-6xl">Crie sua conta</h1>
            </div>
        <div className="flex items-center justify-center w-full">
          <Tabs defaultValue="signup">
            <TabsList className="bg-transparent rounded-none w-full flex">
              <TabsTrigger value="signup" className=' cursor-auto text-black text-opacity-90 border-b-2 rounded-none w-full font-bold border-b-purple-900 p-3'>
                Cadastro
              </TabsTrigger>
            </TabsList>
              <TabsContent className='flex flex-col gap-5 mt-10' value='signup'>
              <Input
                  placeholder="Nome"
                  type="name"
                  className="rounded-full p-6"
                />
                <Input
                  placeholder="Nome de usuário"
                  type="username"
                  className="rounded-full p-6"
                />
                <Input
                  placeholder="Senha"
                  type="password"
                  className="rounded-full p-6"
                />
                <Input
                  placeholder="Confirmar Senha"
                  type="confirmPassword"
                  className="rounded-full p-6"
                />
                <div className="flex">
                  <div className="flex items-center space-x-2">
                    
                    <Checkbox id="male"/>
                      <label htmlFor="gender" 
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Homem
                      </label>
                    
                    <Checkbox id="female"/>
                      <label htmlFor="gender" 
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Mulher
                      </label>
                      
                  </div>

                </div>
                <Button className='rounded-full p-6 bg-purple-950' >Entrar</Button>

                <a className="text-purple-950 underline underline-offset-2 text-sm text-opacity-90 font-semibold cursor-pointer " href="#">Já possui conta? Entre na sua conta aqui</a>
              </TabsContent>
          </Tabs>
        </div>
        </div>
        <div className='hidden xl:flex justify-center items-center'>
                    <img src={Background} alt='background signup' className='h-[700px]' />
        </div>
      </div>
    </div>
  )
}

export default Signup;




// import { Tabs } from "@/components/ui/tabs";
// import { Input } from '@/components/ui/input';

// import Background from "../../assets/login2.png";
// import Victory from '../../assets/victory.svg';

// import { TabsContent, TabsList, TabsTrigger } from '@radix-ui/react-tabs';
// import { Button } from "@/components/ui/button";
// import { Checkbox } from "@/components/ui/checkbox";



// const Signup = () => {
//   return (
//     <div className="h-[100] w-[vw] flex items-center justify-center">
//       <div className="h-[85vh] bg-white border-2 border-white text-opacity-90 shadow-2xl w-[80vw] md:w-[90vw] lg:w-[70vw] xl:w-[60vw] rounded-3xl grid xl:grid-cols-2">
//         <div className="flex flex-col gap-10 items-center justify-center">
          
//             <div className="flex items-center justify-center">
//               <h1 className="text-5xl font-bold md:text-6xl">Crie sua conta</h1>
//             </div>
//         <div className="flex items-center justify-center w-full">
//           <Tabs defaultValue="signup">
//             <TabsList className="bg-transparent rounded-none w-full flex">
//               <TabsTrigger value="signup" className=' cursor-auto text-black text-opacity-90 border-b-2 rounded-none w-full font-bold border-b-purple-900 p-3'>
//                 Cadastro
//               </TabsTrigger>
//             </TabsList>
//               <TabsContent className='flex flex-col gap-5 mt-10' value='signup'>
//               <Input
//                   placeholder="Nome"
//                   type="name"
//                   className="rounded-full p-6"
//                 />
//                 <Input
//                   placeholder="Nome de usuário"
//                   type="username"
//                   className="rounded-full p-6"
//                 />
//                 <Input
//                   placeholder="Senha"
//                   type="password"
//                   className="rounded-full p-6"
//                 />
//                 <Input
//                   placeholder="Confirmar Senha"
//                   type="confirmPassword"
//                   className="rounded-full p-6"
//                 />
//                 <div className="flex">
//                   <div className="flex items-center space-x-2">
                    
//                     <Checkbox id="male"/>
//                       <label htmlFor="gender" 
//                         className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
//                         >
//                           Homem
//                       </label>
                    
//                     <Checkbox id="female"/>
//                       <label htmlFor="gender" 
//                         className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
//                         >
//                           Mulher
//                       </label>
                      
//                   </div>

//                 </div>
//                 <Button className='rounded-full p-6 bg-purple-950' >Entrar</Button>

//                 <a className="text-purple-950 underline underline-offset-2 text-sm text-opacity-90 font-semibold cursor-pointer " href="#">Já possui conta? Entre na sua conta aqui</a>
//               </TabsContent>
//           </Tabs>
//         </div>
//         </div>
//         <div className='hidden xl:flex justify-center items-center'>
//                     <img src={Background} alt='background signup' className='h-[700px]' />
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Signup;