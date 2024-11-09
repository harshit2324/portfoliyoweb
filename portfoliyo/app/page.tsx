import { FloatingNav } from '@/components/ui/Flotingnav';
import Hero from '../components/Hero'

import Grid from '@/components/Grid';


import Recentproject from '@/components/Recentproject';
import { navItems } from '@/data';
import Client from '@/components/Client';
import Experience from '@/components/Experience';
import Approach from '@/components/Approach';

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
       <Hero />
       <Grid />
      <Recentproject />
      <Client />
      <Experience />
      <Approach />
      </div>
    </main>
  );
}
