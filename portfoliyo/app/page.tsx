import { FloatingNav } from '@/components/ui/Flotingnav';
import Hero from '../components/Hero'
import { FaHome } from 'react-icons/fa';
import Grid from '@/components/Grid';

export default function Home() {
  return (
    <main className="relative bg-black-100 flex items-center justify-center flex-col overflow-hidden mx-auto sm:px-10 px-5 ">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={ [ {name: 'Home', link: '/', icon: <FaHome />}]} />
       <Hero />
       <Grid />
      </div>
    </main>
  );
}
