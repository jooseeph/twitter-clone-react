import { Outlet } from 'react-router-dom';
import Sidebar from './sidebar';
import RightBar from './rightbar';

export default function MainLayouts() {
  return (
    <div className="w-[1265px] mx-auto flex py-0.5">
      <Sidebar />
      <main className="flex-1 flex gap-[30px]">
        <main className="flex-1 border-x border-[#2f3336]">
          <Outlet />
        </main>
        <RightBar />

      </main>
    </div>
  );
}
