import { Tabs } from "@/components/ui/tabs";
import { Input } from '@/components/ui/input';

import Background from "../../assets/login2.png";
import Victory from '../../assets/1f913_color.png';

import { TabsContent, TabsList, TabsTrigger } from '@radix-ui/react-tabs';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";
import useLogin from "@/hooks/useLogin";



const Login = () => {

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const {loading, login} = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(userName, password)
  }

  return (
    <div className="h-[100] w-[vw] flex items-center justify-center">
      <div className="h-[85vh] bg-white border-2 border-white text-opacity-90 shadow-2xl w-[80vw] md:w-[90vw] lg:w-[70vw] xl:w-[60vw] rounded-3xl grid xl:grid-cols-2">
        <div className="flex flex-col gap-10 items-center justify-center">
          
            <div className="flex items-center justify-center">
              <h1 className="text-5xl font-bold md:text-6xl">Zap!</h1>
              <img src={Victory} alt="Emoji de vitória" className='h-[150px]' />
            </div>
        <div className="flex items-center justify-center w-full">
          <Tabs defaultValue="login">
            <TabsList className="bg-transparent rounded-none w-full flex">
              <TabsTrigger value="login" className=' cursor-auto text-black text-opacity-90 border-b-2 rounded-none w-full font-bold border-b-purple-900 p-3'>
                Login
              </TabsTrigger>
            </TabsList>
            <form onSubmit={handleSubmit}>
              <TabsContent className='flex flex-col gap-5 mt-10' value='login'>
                <Input
                  placeholder="Usuário"
                  type="userName"
                  className="rounded-full p-6"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                />
                <Input
                  placeholder="Senha"
                  type="password"
                  className="rounded-full p-6"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Button className='rounded-full p-6 bg-purple-950 hover:bg-purple-900' disabled={loading} >Entrar</Button>

                <Link className="text-purple-950 underline underline-offset-2 text-sm text-opacity-90 font-semibold cursor-pointer " to="/signup">Não possui conta? Crie a sua conta aqui</Link>
              </TabsContent>
            </form>
          </Tabs>
        </div>
        </div>
        <div className='hidden xl:flex justify-center items-center'>
                    <img src={Background} alt='background login' className='h-[700px]' />
        </div>
      </div>
    </div>
  )
}

export default Login


// import { Tabs } from "@/components/ui/tabs";
// import { Input } from '@/components/ui/input';

// import Background from "../../assets/login2.png";
// import Victory from '../../assets/victory.svg';

// import { TabsContent, TabsList, TabsTrigger } from '@radix-ui/react-tabs';
// import { Button } from "@/components/ui/button";



// const Login = () => {
//   return (
//     <div className="h-[100] w-[vw] flex items-center justify-center">
//       <div className="h-[85vh] bg-white border-2 border-white text-opacity-90 shadow-2xl w-[80vw] md:w-[90vw] lg:w-[70vw] xl:w-[60vw] rounded-3xl grid xl:grid-cols-2">
//         <div className="flex flex-col gap-10 items-center justify-center">
          
//             <div className="flex items-center justify-center">
//               <h1 className="text-5xl font-bold md:text-6xl">Login</h1>
//               <img src={Victory} alt="Emoji de vitória" className='h-[180px]' />
//             </div>
//         <div className="flex items-center justify-center w-full">
//           <Tabs defaultValue="login">
//             <TabsList className="bg-transparent rounded-none w-full flex">
//               <TabsTrigger value="login" className=' cursor-auto text-black text-opacity-90 border-b-2 rounded-none w-full font-bold border-b-purple-900 p-3'>
//                 Entrar
//               </TabsTrigger>
//             </TabsList>
//               <TabsContent className='flex flex-col gap-5 mt-10' value='login'>
//                 <Input
//                   placeholder="Email"
//                   type="email"
//                   className="rounded-full p-6"
//                 />
//                 <Input
//                   placeholder="Senha"
//                   type="password"
//                   className="rounded-full p-6"
//                 />
//                 <Button className='rounded-full p-6 bg-purple-950' >Entrar</Button>

//                 <a className="text-purple-950 underline underline-offset-2 text-sm text-opacity-90 font-semibold cursor-pointer " href="#">Não possui conta? Crie a sua conta aqui</a>
//               </TabsContent>
//           </Tabs>
//         </div>
//         </div>
//         <div className='hidden xl:flex justify-center items-center'>
//                     <img src={Background} alt='background login' className='h-[700px]' />
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Login